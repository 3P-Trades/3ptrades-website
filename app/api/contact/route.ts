import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        id: submission.id
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
