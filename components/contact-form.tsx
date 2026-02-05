"use client";

import { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [formLoadTime, setFormLoadTime] = useState<number>(0);

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormState({
      isLoading: true,
      isSuccess: false,
      isError: false,
      errorMessage: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _formLoadTime: formLoadTime,
          _submitTime: Date.now(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setFormState({
        isLoading: false,
        isSuccess: true,
        isError: false,
        errorMessage: "",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
      setFormLoadTime(Date.now());
    } catch (error) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: error instanceof Error ? error.message : "An error occurred",
      });
    }
  };

  if (formState.isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-amber-500 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-stone-900 mb-2">Message Sent!</h3>
        <p className="text-stone-600 mb-8">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() =>
            setFormState({
              isLoading: false,
              isSuccess: false,
              isError: false,
              errorMessage: "",
            })
          }
          className="inline-flex items-center gap-2 border-2 border-stone-300 text-stone-700 px-6 py-3 font-medium hover:border-stone-900 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field */}
      <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-900 mb-2">
            Name <span className="text-amber-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={formState.isLoading}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-900 mb-2">
            Email <span className="text-amber-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={formState.isLoading}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors disabled:opacity-50"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-stone-900 mb-2">
          Subject <span className="text-amber-500">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What is this about?"
          value={formData.subject}
          onChange={handleChange}
          required
          disabled={formState.isLoading}
          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-900 mb-2">
          Message <span className="text-amber-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          required
          disabled={formState.isLoading}
          rows={6}
          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors disabled:opacity-50 resize-none"
        />
      </div>

      {formState.isError && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
          {formState.errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={formState.isLoading}
        className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-4 font-medium hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState.isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
