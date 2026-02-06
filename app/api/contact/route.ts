import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Email address to receive contact form submissions
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "info@3ptrades.com";

// Lazy initialization of Resend client
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

// Minimum time between form load and submit (in ms)
const MIN_SUBMIT_TIME = 3000; // 3 seconds

function getClientIP(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count++;
  return { allowed: true };
}

function validateBotProtection(data: Record<string, unknown>): { valid: boolean; error?: string } {
  // Check honeypot field - should be empty
  const honeypot = data.website;
  if (honeypot && typeof honeypot === "string" && honeypot.length > 0) {
    // Bot detected - return generic error to not reveal detection
    console.log("Bot detected: honeypot field filled");
    return { valid: false, error: "Unable to process your request" };
  }

  // Check time-based validation
  const formLoadTime = data._formLoadTime;
  const submitTime = data._submitTime;

  if (typeof formLoadTime === "number" && typeof submitTime === "number") {
    const timeDiff = submitTime - formLoadTime;
    if (timeDiff < MIN_SUBMIT_TIME) {
      // Form submitted too quickly - likely a bot
      console.log(`Bot detected: form submitted too quickly (${timeDiff}ms)`);
      return { valid: false, error: "Please take your time filling out the form" };
    }
  }

  // Check math challenge
  const challengeAnswer = data._challengeAnswer;
  const challengeInput = data._challengeInput;

  if (typeof challengeAnswer !== "number" || typeof challengeInput !== "number") {
    console.log("Bot detected: missing challenge data");
    return { valid: false, error: "Unable to process your request" };
  }

  if (challengeAnswer !== challengeInput) {
    console.log("Bot detected: challenge mismatch");
    return { valid: false, error: "Unable to process your request" };
  }

  return { valid: true };
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(data: unknown): { valid: boolean; error?: string; data?: ContactFormData } {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const { name, email, subject, message } = data as Record<string, unknown>;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return { valid: false, error: "Name is required" };
  }

  if (!email || typeof email !== "string" || !validateEmail(email)) {
    return { valid: false, error: "Valid email is required" };
  }

  if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
    return { valid: false, error: "Subject is required" };
  }

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return { valid: false, error: "Message is required" };
  }

  // Check for spam patterns in message
  const spamPatterns = [
    /\[url=/i,
    /\[link=/i,
    /<a\s+href/i,
    /viagra|cialis|casino|lottery|winner|congratulations.*won/i,
  ];

  const messageStr = message.trim();
  for (const pattern of spamPatterns) {
    if (pattern.test(messageStr)) {
      console.log(`Spam detected: pattern match in message`);
      return { valid: false, error: "Your message contains disallowed content" };
    }
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: messageStr,
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: `Too many requests. Please try again in ${rateLimit.retryAfter} seconds.` },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter) } }
      );
    }

    const body = await request.json();

    // Check bot protection
    const botCheck = validateBotProtection(body as Record<string, unknown>);
    if (!botCheck.valid) {
      return NextResponse.json(
        { error: botCheck.error },
        { status: 400 }
      );
    }

    // Validate form data
    const validation = validateFormData(body);

    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;

    // Generate submission ID
    const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();

    // Log the submission
    console.log("Contact form submission:", {
      id: submissionId,
      name,
      email,
      subject,
      message,
      timestamp,
    });

    // Send email notification
    const resend = getResendClient();
    if (resend) {
      try {
        await resend.emails.send({
          from: "3P Trades Contact Form <noreply@contact.3ptrades.com>",
          to: [NOTIFICATION_EMAIL],
          replyTo: email,
          subject: `[Contact Form] ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0066cc;">New Contact Form Submission</h2>
              <hr style="border: 1px solid #eee;" />

              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject}</p>

              <h3 style="color: #333;">Message:</h3>
              <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>

              <hr style="border: 1px solid #eee; margin-top: 30px;" />
              <p style="color: #666; font-size: 12px;">
                Submission ID: ${submissionId}<br />
                Received: ${new Date(timestamp).toLocaleString()}
              </p>
            </div>
          `,
        });
        console.log("Email notification sent successfully");
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error("Failed to send email notification:", emailError);
      }
    } else {
      console.log("Email notifications disabled (RESEND_API_KEY not configured)");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        id: submissionId
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);

    return NextResponse.json(
      { error: "Failed to submit contact form. Please try again later." },
      { status: 500 }
    );
  }
}
