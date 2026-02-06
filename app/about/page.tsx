import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | 3P Trades",
  description: "Learn about 3P Trades - an AI-first software development company dedicated to building intelligent solutions that transform businesses.",
};

const values = [
  {
    title: "Customer-Focused",
    description: "We put customers at the center of everything we do. We build tools and applications that work so well, customers never have to wonder how they could have been designed differently.",
  },
  {
    title: "Focus on Impact",
    description: "We work on the most important problems, not lesser issues. Every effort is directed toward solutions that create meaningful, measurable outcomes.",
  },
  {
    title: "Take Ownership",
    description: "We consider how our decisions affect the entire enterprise, ensuring we create long-lasting value instead of just short-term gains.",
  },
  {
    title: "Invent & Simplify",
    description: "Innovation is key. We try new things, surprise others with ideas, and deliver them in ways that are simple to understand and execute.",
  },
  {
    title: "Learn & Be Curious",
    description: "We are lifelong learners who stay on the cutting edge. Ideas come from everywhere, and we constantly seek how new learnings intersect with present challenges.",
  },
  {
    title: "Think Big",
    description: "We reach for bigger goals than we think are possible. Striving for greatness gives us the best chance to deliver excellence.",
  },
  {
    title: "Deliver Results",
    description: "We are committed to delivering positive outcomes. We focus on the key inputs and deliver them with quality and in a timely fashion.",
  },
  {
    title: "Quality Driven",
    description: "We maintain the highest standards in code quality, testing, and documentation for every project. Excellence is not negotiable.",
  },
];

const pillars = [
  {
    title: "AI-Powered Automation",
    description: "We automate repetitive tasks and workflows using intelligent systems that save time and reduce errors.",
  },
  {
    title: "Data-Driven Insights",
    description: "We transform raw data into actionable insights using advanced analytics and machine learning models.",
  },
  {
    title: "Continuous Learning",
    description: "Our solutions evolve and improve over time, learning from new data and adapting to changing needs.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-900/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-px bg-teal-500" />
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                  About Us
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6">
                Building the future, <span className="font-serif italic text-teal-600">intelligently.</span>
              </h1>

              <p className="text-xl text-stone-600 leading-relaxed mb-8">
                We are a team of passionate developers and AI enthusiasts dedicated to
                building intelligent software solutions that drive business success.
              </p>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-3 font-medium hover:bg-stone-800 transition-colors"
                >
                  Work With Us
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 text-stone-700 px-6 py-3 font-medium hover:border-stone-900 transition-colors"
                >
                  Join Our Team
                </Link>
              </div>
            </div>

            {/* Logo */}
            <div className="relative">
              <div className="aspect-square bg-stone-100 flex items-center justify-center relative">
                <Image
                  src="/logo.png"
                  alt="3P Trades Logo"
                  width={200}
                  height={200}
                  className="w-48 h-48 md:w-56 md:h-56"
                  priority
                />
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-teal-500" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-stone-300" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-teal-500 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Mission Text */}
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-600 mb-4 block">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8">
                Customer-centricity at <span className="font-serif italic">our core.</span>
              </h2>

              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  We are a forward-thinking technology company that champions the principle of
                  open innovation, ensuring our offerings are as diverse as the challenges our
                  clients face.
                </p>
                <p>
                  Our dedication to embracing any technological advancement positions us uniquely
                  in the market, allowing us to provide our customers with the most advanced and
                  tailored solutions available.
                </p>
                <p>
                  We pride ourselves on our ability to understand and anticipate customer needs,
                  developing personalized strategies that empower their growth and streamline
                  their operations.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-stone-900 text-white p-8 lg:p-12 relative">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-teal-500" />

              <svg className="w-12 h-12 text-teal-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-xl lg:text-2xl leading-relaxed mb-8">
                3P Trades is more than just a technology provider; we are a dedicated
                partner in our clients&apos; success, continually pushing the boundaries of
                what&apos;s possible to make technology an accessible and transformative
                force for all we serve.
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 flex items-center justify-center text-stone-900 font-bold text-lg">
                  3P
                </div>
                <div>
                  <p className="font-bold">The 3P Trades Team</p>
                  <p className="text-stone-400 text-sm">Software Studio</p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-8 h-8 bg-teal-500" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Philosophy Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-600 mb-4 block">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              AI-first, <span className="font-serif italic">not AI-only.</span>
            </h2>
            <p className="text-lg text-stone-600">
              We don&apos;t just add AI to existing solutions - we build with AI at the core.
              This approach enables us to create truly intelligent applications that learn,
              adapt, and improve over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="relative border border-stone-200 p-8 bg-white group hover:border-teal-500 transition-colors"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-stone-100 group-hover:text-teal-100 transition-colors">
                  0{index + 1}
                </span>

                <div className="relative">
                  <h3 className="text-xl font-bold text-stone-900 mb-4">{pillar.title}</h3>
                  <p className="text-stone-600">{pillar.description}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-teal-500 group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-500 mb-4 block">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Principles that <span className="font-serif italic">guide us.</span>
            </h2>
            <p className="text-lg text-stone-400">
              These core values shape every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="border-l-2 border-stone-700 pl-6 hover:border-teal-500 transition-colors group"
              >
                <span className="text-teal-500 font-bold text-sm mb-2 block">
                  0{index + 1}
                </span>
                <h3 className="font-bold text-lg mb-2 group-hover:text-teal-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-600 mb-4 block">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Meet the <span className="font-serif italic">visionary.</span>
            </h2>
          </div>

          <div className="max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Photo */}
              <div className="relative">
                <div className="aspect-square bg-stone-100 relative overflow-hidden">
                  <Image
                    src="/pitamber.png"
                    alt="Pitamber Tiwari"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-teal-500 -z-10" />
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-stone-900 mb-1">Pitamber Tiwari</h3>
                <p className="text-lg text-teal-600 font-medium mb-6">Founder & CEO</p>

                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    A seasoned technology leader with over 20 years of experience building
                    enterprise-grade software solutions. Pitamber founded 3P Trades with a
                    vision to bring AI-first software development to businesses of all sizes.
                  </p>
                  <p>
                    Combining deep technical expertise with a customer-centric approach,
                    he leads the team in delivering innovative solutions that transform how
                    businesses operate and grow.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-stone-200">
                  <div className="flex gap-8">
                    <div>
                      <span className="text-3xl font-bold text-stone-900">20+</span>
                      <p className="text-sm text-stone-500">Years Experience</p>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-stone-900">50+</span>
                      <p className="text-sm text-stone-500">Projects Delivered</p>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-stone-900">3</span>
                      <p className="text-sm text-stone-500">Global Offices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 bg-stone-50 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Ready to work <span className="font-serif italic text-teal-600">with us?</span>
            </h2>
            <p className="text-xl text-stone-600 mb-12">
              Let&apos;s discuss how we can help bring your ideas to life with our AI-first approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 text-base font-medium hover:bg-stone-800 transition-all group"
              >
                Get in Touch
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 text-stone-700 px-8 py-4 text-base font-medium hover:border-stone-900 hover:text-stone-900 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
