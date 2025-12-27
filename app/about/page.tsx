import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us | 3P Trades",
  description: "Learn about 3P Trades - an AI-first software development company dedicated to building intelligent solutions that transform businesses.",
};

const values = [
  {
    title: "Customer-Focused",
    description: "We put customers at the center of everything we do. We build tools and applications that work so well, customers never have to wonder how they could have been designed differently.",
    icon: (
      <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Focus on Impact",
    description: "We work on the most important problems, not lesser issues. Every effort is directed toward solutions that create meaningful, measurable outcomes for our clients.",
    icon: (
      <svg className="h-8 w-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Take Ownership",
    description: "We consider how our decisions affect the entire enterprise, ensuring we create long-lasting value instead of just short-term gains.",
    icon: (
      <svg className="h-8 w-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Invent & Simplify",
    description: "Innovation is key. We try new things, surprise others with ideas, and draw inspiration from everywhere—then deliver it in ways that are simple to understand and execute.",
    icon: (
      <svg className="h-8 w-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Learn & Be Curious",
    description: "We are lifelong learners who stay on the cutting edge of industry trends. Ideas and inspiration come from everywhere, and we constantly seek how new learnings intersect with present challenges.",
    icon: (
      <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Think Big",
    description: "We reach for bigger goals than we think are possible. Striving for greatness and not accepting anything less gives us the best chance to deliver excellence.",
    icon: (
      <svg className="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Deliver Results",
    description: "We are committed to delivering positive outcomes. We focus on the key inputs and deliver them with quality and in a timely fashion, rising to the occasion when challenges arise.",
    icon: (
      <svg className="h-8 w-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Driven",
    description: "We maintain the highest standards in code quality, testing, and documentation for every project. Excellence is not negotiable.",
    icon: (
      <svg className="h-8 w-8 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Full Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="3P Trades Logo"
                width={200}
                height={200}
                className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                3P Trades
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We are a team of passionate developers and AI enthusiasts dedicated to
              building intelligent software solutions that drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Customer-centricity is at the heart of our mission. We are a forward-thinking
                  technology company that champions the principle of open innovation, ensuring
                  our offerings are as diverse as the challenges our clients face.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our dedication to embracing any technological advancement positions us uniquely
                  in the market, allowing us to provide our customers with the most advanced and
                  tailored solutions available.
                </p>
                <p className="text-lg text-muted-foreground">
                  We pride ourselves on our ability to understand and anticipate customer needs,
                  developing personalized strategies that empower their growth and streamline
                  their operations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-2xl p-8 border">
                <blockquote className="text-xl italic text-muted-foreground">
                  &ldquo;3P Trades is more than just a technology provider; we are a dedicated
                  partner in our clients&apos; success, continually pushing the boundaries of
                  what&apos;s possible to make technology an accessible and transformative
                  force for all we serve.&rdquo;
                </blockquote>
                <p className="mt-4 font-semibold">- The 3P Trades Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-First Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our AI-First Philosophy</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We don&apos;t just add AI to existing solutions - we build with AI at the core.
              This approach enables us to create truly intelligent applications that learn,
              adapt, and improve over time.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-lg border bg-card">
                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">AI-Powered Automation</h3>
                <p className="text-sm text-muted-foreground">
                  We automate repetitive tasks and workflows using intelligent systems
                  that save time and reduce errors.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Data-Driven Insights</h3>
                <p className="text-sm text-muted-foreground">
                  We transform raw data into actionable insights using advanced
                  analytics and machine learning models.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <div className="h-12 w-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Our solutions evolve and improve over time, learning from new data
                  and adapting to changing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary behind 3P Trades
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <Image
                    src="/pitamber.png"
                    alt="Pitamber Tiwari"
                    width={160}
                    height={160}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
                  />
                </div>

                {/* Bio */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">Pitamber Tiwari</h3>
                  <p className="text-lg text-blue-500 font-medium mb-4">Founder & CEO</p>

                  <p className="text-muted-foreground mb-6">
                    A seasoned technology leader with over 20 years of experience building enterprise-grade
                    software solutions. Pitamber founded 3P Trades with a vision to bring AI-first software
                    development to businesses of all sizes, combining deep technical expertise with a
                    customer-centric approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help bring your ideas to life with our AI-first approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
