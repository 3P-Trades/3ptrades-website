import Link from "next/link";

const services = [
  {
    title: "Generative AI",
    subtitle: "Integration",
    description: "Custom RAG pipelines, fine-tuning, and agentic workflows powered by LLMs.",
    number: "01",
  },
  {
    title: "Full-Stack",
    subtitle: "Web Engineering",
    description: "Modern, high-performance web applications built with React, Next.js, and TypeScript.",
    number: "02",
  },
  {
    title: "Enterprise",
    subtitle: "SaaS Platforms",
    description: "Robust multi-tenant systems designed to handle millions of transactions.",
    number: "03",
  },
  {
    title: "Mobile App",
    subtitle: "Development",
    description: "Native-quality experiences for iOS and Android using React Native.",
    number: "04",
  },
  {
    title: "Data",
    subtitle: "Intelligence",
    description: "Convert raw data into actionable insights with custom analytics engines.",
    number: "05",
  },
  {
    title: "Cloud",
    subtitle: "Migration",
    description: "Shift legacy systems to AWS, GCP, or Azure with zero downtime.",
    number: "06",
  },
];

const stats = [
  { value: "20+", label: "Years Combined Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "3", label: "Global Offices" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-stone-900/5 rounded-full blur-3xl" />

        {/* Geometric Decoration */}
        <div className="absolute top-40 right-20 w-32 h-32 border-2 border-amber-500/10 rotate-45 hidden lg:block" />
        <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-stone-300/30 rotate-12 hidden lg:block" />

        <div className="container mx-auto px-6 lg:px-8 py-20 relative">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="animate-fade-in-up flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-amber-500" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                Software Development Studio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-in-up delay-100">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 mb-2">
                We build software
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="font-serif italic text-amber-600">with intelligence</span>
                <span className="text-stone-900"> at its core.</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up delay-200 mt-8 text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed">
              From AI/ML systems to full-stack applications, we transform ambitious ideas into
              production-grade software that scales.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-300 mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 text-base font-medium hover:bg-stone-800 transition-all group"
              >
                Start Your Project
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 text-stone-700 px-8 py-4 text-base font-medium hover:border-stone-900 hover:text-stone-900 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center lg:text-left animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600 mb-4 block">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              End-to-end software solutions, <span className="font-serif italic">engineered for scale.</span>
            </h2>
            <p className="text-lg text-stone-600">
              We don&apos;t just write code. We architect systems that grow with your business,
              leveraging AI where it creates real value.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.number}
                href={`/services#${service.title.toLowerCase().replace(' ', '-')}`}
                className="group relative bg-white border border-stone-200 p-8 hover:border-amber-500 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-stone-100 group-hover:text-amber-100 transition-colors">
                  {service.number}
                </span>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-stone-900 mb-1">
                    {service.title}
                  </h3>
                  <span className="text-xl font-serif italic text-amber-600 mb-4 block">
                    {service.subtitle}
                  </span>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-stone-400 group-hover:text-amber-600 transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-stone-900 font-medium hover:text-amber-600 transition-colors"
            >
              View all services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600 mb-4 block">
                Why 3P Trades
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8">
                Technical excellence meets <span className="font-serif italic">business understanding.</span>
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">AI-Native Development</h3>
                    <p className="text-stone-600">We integrate AI where it creates real value, not as a gimmick.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Rapid, Quality Delivery</h3>
                    <p className="text-stone-600">Agile methodologies with rigorous testing and documentation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Built to Scale</h3>
                    <p className="text-stone-600">Architecture that grows with your business, not against it.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Dedicated Partnership</h3>
                    <p className="text-stone-600">We&apos;re invested in your success, not just the project scope.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="aspect-square bg-stone-100 relative overflow-hidden">
                {/* Decorative Grid */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
                  <div className="border-r border-b border-stone-200" />
                  <div className="border-r border-b border-stone-200" />
                  <div className="border-b border-stone-200" />
                  <div className="border-r border-b border-stone-200" />
                  <div className="border-r border-b border-stone-200 bg-amber-500/5" />
                  <div className="border-b border-stone-200" />
                  <div className="border-r border-stone-200" />
                  <div className="border-r border-stone-200" />
                  <div />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-amber-500 flex items-center justify-center text-white font-bold text-3xl">
                  3P
                </div>
                <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border-4 border-stone-900 rotate-45" />
                <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-stone-900" />
              </div>

              {/* Offset accent box */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-amber-500 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 bg-stone-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 41px)`
          }} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 border border-amber-500/20 rotate-45" />
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-amber-500/10" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to build something <span className="font-serif italic text-amber-500">remarkable?</span>
            </h2>
            <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your project and explore how we can bring your vision to life
              with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-amber-500 text-stone-900 px-8 py-4 text-base font-bold hover:bg-amber-400 transition-all group"
              >
                Start the Conversation
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-stone-600 text-white px-8 py-4 text-base font-medium hover:border-white transition-all"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
