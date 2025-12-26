import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | 3P Trades",
  description: "Get in touch with 3P Trades. We would love to hear about your project and discuss how we can help.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear from you. Send us a message
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl border p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving clients globally from our headquarters and regional offices
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl border p-8 text-center">
                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 mb-3">
                  HEADQUARTERS
                </span>
                <h3 className="font-semibold text-lg mb-3">Round Rock, TX</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  1050 Kenney Fort Xing Unit 22<br />
                  Round Rock, TX 78665-2240<br />
                  United States
                </p>
                <a href="mailto:info@3ptrades.com" className="text-blue-500 hover:underline">
                  info@3ptrades.com
                </a>
              </div>
              <div className="bg-card rounded-2xl border p-8 text-center">
                <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-500 mb-3">
                  REGIONAL
                </span>
                <h3 className="font-semibold text-lg mb-3">Kathmandu, Nepal</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Kathmandu<br />
                  Nepal
                </p>
                <a href="mailto:ktm@3ptrades.com" className="text-cyan-500 hover:underline">
                  ktm@3ptrades.com
                </a>
              </div>
              <div className="bg-card rounded-2xl border p-8 text-center">
                <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-500 mb-3">
                  REGIONAL
                </span>
                <h3 className="font-semibold text-lg mb-3">Pokhara, Nepal</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Pokhara<br />
                  Nepal
                </p>
                <a href="mailto:ktm@3ptrades.com" className="text-indigo-500 hover:underline">
                  ktm@3ptrades.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
