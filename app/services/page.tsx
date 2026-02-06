import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | 3P Trades",
  description: "Explore our comprehensive software development services including AI/ML Development, Web & Mobile Apps, and Technical Consulting.",
};

const services = [
  {
    id: "generative-ai",
    number: "01",
    title: "Generative AI",
    subtitle: "Integration",
    description: "Infuse your platforms with the power of LLMs. We specialize in custom RAG pipelines, fine-tuning, and agentic workflows that transform how your business operates.",
    features: [
      "Custom ChatGPT-style interfaces",
      "Semantic search & knowledge bases",
      "Automated content generation",
      "RAG pipeline development",
      "LLM fine-tuning & optimization",
      "Agentic workflow systems",
    ],
    accent: "teal",
  },
  {
    id: "web-engineering",
    number: "02",
    title: "Full-Stack",
    subtitle: "Web Engineering",
    description: "Modern, high-performance web applications built with React, Next.js, and TypeScript for peak scalability and maintainability.",
    features: [
      "React & Next.js development",
      "Serverless architecture",
      "Progressive Web Apps (PWA)",
      "API design & development",
      "Performance optimization",
      "Responsive design systems",
    ],
    accent: "stone",
  },
  {
    id: "saas-platforms",
    number: "03",
    title: "Enterprise",
    subtitle: "SaaS Platforms",
    description: "Robust multi-tenant systems designed to handle millions of transactions with 99.99% uptime and enterprise-grade security.",
    features: [
      "Multi-tenant architecture",
      "Microservices design",
      "Role-based access control",
      "Usage analytics & billing",
      "White-label solutions",
      "BI dashboards & reporting",
    ],
    accent: "teal",
  },
  {
    id: "mobile-apps",
    number: "04",
    title: "Mobile App",
    subtitle: "Development",
    description: "Native-quality experiences for iOS and Android using cross-platform powerhouses like React Native and Flutter.",
    features: [
      "React Native & Flutter",
      "Offline-first architecture",
      "Biometric authentication",
      "Push notifications",
      "App Store optimization",
      "Seamless data sync",
    ],
    accent: "stone",
  },
  {
    id: "data-intelligence",
    number: "05",
    title: "Data",
    subtitle: "Intelligence",
    description: "Convert raw data into actionable insights with custom analytics engines, visualization suites, and predictive models.",
    features: [
      "Real-time data streams",
      "Predictive analytics",
      "ETL pipeline development",
      "Data visualization",
      "Machine learning models",
      "Business intelligence",
    ],
    accent: "teal",
  },
  {
    id: "cloud-migration",
    number: "06",
    title: "Cloud",
    subtitle: "Migration",
    description: "Shift your legacy systems to AWS, GCP, or Azure with zero downtime and optimized cost structures.",
    features: [
      "AWS, GCP & Azure expertise",
      "Zero-downtime migration",
      "Infrastructure as Code",
      "Cost optimization",
      "Security & compliance",
      "24/7 monitoring setup",
    ],
    accent: "stone",
  },
];

const technologies = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  "Backend": ["Node.js", "Python", "Go"],
  "Database": ["PostgreSQL", "MongoDB", "Redis"],
  "Cloud": ["AWS", "GCP", "Azure"],
  "DevOps": ["Docker", "Kubernetes", "Terraform"],
  "AI/ML": ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
};

export default function ServicesPage() {
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
                Our Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 mb-6">
              End-to-end solutions, <span className="font-serif italic text-teal-600">engineered for scale.</span>
            </h1>

            <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
              We deliver comprehensive software solutions with an AI-first approach,
              helping businesses innovate and scale with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 lg:py-32 ${index % 2 === 1 ? "bg-stone-50" : ""}`}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                {/* Number */}
                <span className="text-8xl font-bold text-stone-100 mb-4 block">
                  {service.number}
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-2 -mt-12 relative">
                  {service.title}
                </h2>
                <span className="text-3xl md:text-4xl font-serif italic text-teal-600 mb-6 block">
                  {service.subtitle}
                </span>

                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-stone-900 font-medium hover:text-teal-600 transition-colors group"
                >
                  Discuss your project
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Visual Card */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-white border border-stone-200 p-8 lg:p-12 relative">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-teal-500" />

                  <div className="relative">
                    <h3 className="text-2xl font-bold text-stone-900 mb-4">
                      Ready to get started?
                    </h3>
                    <p className="text-stone-600 mb-8">
                      Let&apos;s discuss how {service.title.toLowerCase()} {service.subtitle.toLowerCase()} can transform your business.
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-3 font-medium hover:bg-stone-800 transition-colors w-full"
                    >
                      Request a Consultation
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Decorative bottom corner */}
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-stone-200" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Technologies Section */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-500 mb-4 block">
              Our Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technologies we <span className="font-serif italic">master.</span>
            </h2>
            <p className="text-lg text-stone-400">
              We leverage cutting-edge technologies to build scalable, maintainable solutions
              that stand the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="border-l-2 border-stone-700 pl-6">
                <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-stone-800 text-stone-300 text-sm hover:bg-teal-500 hover:text-stone-900 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Ready to transform <span className="font-serif italic text-teal-600">your business?</span>
            </h2>
            <p className="text-xl text-stone-600 mb-12">
              Let&apos;s discuss your project and explore how our services can help you achieve your goals.
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
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 text-stone-700 px-8 py-4 text-base font-medium hover:border-stone-900 hover:text-stone-900 transition-all"
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
