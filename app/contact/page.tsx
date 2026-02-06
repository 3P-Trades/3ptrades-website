import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | 3P Trades",
  description: "Get in touch with 3P Trades. We would love to hear about your project and discuss how we can help.",
};

const locations = [
  {
    type: "Headquarters",
    city: "Round Rock, TX",
    address: "1050 Kenney Fort Xing Unit 22",
    region: "Round Rock, TX 78665-2240",
    country: "United States",
    email: "info@3ptrades.com",
    accent: "teal",
  },
  {
    type: "Regional Office",
    city: "Kathmandu",
    address: "Kathmandu",
    region: "",
    country: "Nepal",
    email: "ktm@3ptrades.com",
    accent: "stone",
  },
  {
    type: "Regional Office",
    city: "Pokhara",
    address: "Pokhara",
    region: "",
    country: "Nepal",
    email: "pkr@3ptrades.com",
    accent: "stone",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-teal-500" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                Contact Us
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6">
              Let&apos;s build something <span className="font-serif italic text-teal-600">remarkable.</span>
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Send us a message
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-stone-200 p-8 lg:p-12 relative">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-teal-500" />

                <div className="relative">
                  <h2 className="text-2xl font-bold text-stone-900 mb-2">Send us a message</h2>
                  <p className="text-stone-600 mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  <ContactForm />
                </div>

                {/* Decorative bottom corner */}
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-stone-200" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Contact */}
              <div className="bg-stone-900 text-white p-8 relative">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-teal-500" />

                <h3 className="text-lg font-bold mb-4">Quick Contact</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-stone-400 text-sm mb-1">Email</p>
                    <a href="mailto:info@3ptrades.com" className="text-teal-500 hover:text-teal-400 transition-colors">
                      info@3ptrades.com
                    </a>
                  </div>
                  <div>
                    <p className="text-stone-400 text-sm mb-1">Response Time</p>
                    <p className="text-white">Within 24 hours</p>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-6 h-6 bg-teal-500" />
              </div>

              {/* What to Expect */}
              <div className="border border-stone-200 p-8">
                <h3 className="text-lg font-bold text-stone-900 mb-4">What to expect</h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-500/10 flex items-center justify-center text-teal-600 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Initial Response</p>
                      <p className="text-sm text-stone-600">We&apos;ll acknowledge your message within 24 hours.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-500/10 flex items-center justify-center text-teal-600 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Discovery Call</p>
                      <p className="text-sm text-stone-600">We&apos;ll schedule a call to understand your needs.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-500/10 flex items-center justify-center text-teal-600 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-stone-900">Proposal</p>
                      <p className="text-sm text-stone-600">You&apos;ll receive a detailed proposal and timeline.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-600 mb-4 block">
              Our Locations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Global presence, <span className="font-serif italic">local expertise.</span>
            </h2>
            <p className="text-lg text-stone-600">
              Serving clients worldwide from our headquarters and regional offices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={location.city}
                className={`bg-white border p-8 relative group hover:border-teal-500 transition-colors ${
                  index === 0 ? "border-teal-500" : "border-stone-200"
                }`}
              >
                {/* Type Badge */}
                <span className={`inline-block px-3 py-1 text-xs uppercase tracking-wider font-medium mb-4 ${
                  index === 0
                    ? "bg-teal-500 text-white"
                    : "bg-stone-100 text-stone-600"
                }`}>
                  {location.type}
                </span>

                <h3 className="text-2xl font-bold text-stone-900 mb-4">{location.city}</h3>

                <div className="space-y-1 text-stone-600 mb-6">
                  <p>{location.address}</p>
                  {location.region && <p>{location.region}</p>}
                  <p>{location.country}</p>
                </div>

                <a
                  href={`mailto:${location.email}`}
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
                >
                  {location.email}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 h-1 transition-all duration-300 ${
                  index === 0 ? "w-full bg-teal-500" : "w-0 bg-teal-500 group-hover:w-full"
                }`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
