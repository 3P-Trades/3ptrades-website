import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | 3P Trades",
  description: "Join our team at 3P Trades. Explore exciting career opportunities in AI, web development, cloud architecture, and more.",
};

const jobListings = [
  {
    id: "react-nextjs-developer",
    title: "React/Next.js Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    description: "We're looking for an experienced React/Next.js developer to build modern, high-performance web applications for our clients.",
  },
  {
    id: "aws-cloud-architect",
    title: "AWS Cloud Architect",
    type: "Full-time",
    location: "Remote / Round Rock, TX",
    department: "Infrastructure",
    description: "Join us as a Cloud Architect to design and implement scalable, secure cloud infrastructure solutions on AWS.",
  },
  {
    id: "ai-engineer",
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Remote",
    department: "AI & Data",
    description: "We're seeking an AI Engineer to develop cutting-edge machine learning solutions and integrate LLMs into client applications.",
  },
  {
    id: "fullstack-engineer",
    title: "Full Stack Engineer",
    type: "Full-time",
    location: "Remote / Kathmandu, Nepal",
    department: "Engineering",
    description: "Looking for a versatile Full Stack Engineer to work on end-to-end development of web and mobile applications.",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Infrastructure",
    description: "Join our infrastructure team to build and maintain robust CI/CD pipelines and cloud infrastructure.",
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    type: "Full-time",
    location: "Remote",
    department: "AI & Data",
    description: "We're looking for a Data Engineer to build robust data pipelines and infrastructure for analytics and ML applications.",
  },
];

const benefits = [
  {
    title: "Remote-First",
    description: "Work from anywhere in the world with flexible hours that suit your lifestyle.",
  },
  {
    title: "Competitive Pay",
    description: "Salary packages that match your skills and experience, with regular reviews.",
  },
  {
    title: "Learning Budget",
    description: "Annual allowance for courses, certifications, and conferences to grow your skills.",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness programs to keep you at your best.",
  },
  {
    title: "Latest Tech Stack",
    description: "Work with cutting-edge technologies and AI tools on challenging projects.",
  },
  {
    title: "Growth Opportunities",
    description: "Clear career paths and mentorship programs to help you advance.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-amber-500" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                Careers
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6">
              Build the future <span className="font-serif italic text-amber-600">with us.</span>
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed mb-8">
              Join a team of passionate engineers, designers, and innovators working on
              challenging projects that make a real impact.
            </p>

            <a
              href="#openings"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-3 font-medium hover:bg-stone-800 transition-colors"
            >
              View Open Positions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500 mb-4 block">
              Why Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              More than a job, <span className="font-serif italic">a career.</span>
            </h2>
            <p className="text-lg text-stone-400">
              We offer competitive benefits and a culture that supports your growth and well-being.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="border-l-2 border-stone-700 pl-6 hover:border-amber-500 transition-colors group"
              >
                <span className="text-amber-500 font-bold text-sm mb-2 block">
                  0{index + 1}
                </span>
                <h3 className="font-bold text-xl mb-2 group-hover:text-amber-500 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="openings" className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600 mb-4 block">
              Open Positions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Find your <span className="font-serif italic">next role.</span>
            </h2>
            <p className="text-lg text-stone-600">
              We&apos;re always looking for talented individuals to join our growing team.
            </p>
          </div>

          <div className="max-w-4xl space-y-4">
            {jobListings.map((job, index) => (
              <Link
                key={job.id}
                href={`/careers/${job.id}`}
                className="block bg-white border border-stone-200 p-6 lg:p-8 hover:border-amber-500 transition-all group relative"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-amber-600 font-bold text-sm">
                        0{index + 1}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-1">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors mb-2">
                      {job.title}
                    </h3>
                    <p className="text-stone-600 text-sm mb-3 lg:mb-0">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-stone-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-stone-400 group-hover:text-amber-600 transition-colors lg:flex-shrink-0">
                    <span className="text-sm font-medium">View Details</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 bg-stone-50 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Don&apos;t see the <span className="font-serif italic text-amber-600">right role?</span>
            </h2>
            <p className="text-xl text-stone-600 mb-12">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll
              reach out when we have a position that matches your skills.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 text-base font-medium hover:bg-stone-800 transition-all group"
            >
              Get in Touch
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
