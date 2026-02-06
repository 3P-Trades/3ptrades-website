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
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-teal-500" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                Careers
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6">
              Build the future <span className="font-serif italic text-teal-600">with us.</span>
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed">
              Join a team of passionate engineers, designers, and innovators working on
              challenging projects that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Header & Info */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-600 mb-4 block">
                  Open Positions
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                  Find your <span className="font-serif italic">next role.</span>
                </h2>
                <p className="text-lg text-stone-600 mb-8">
                  We&apos;re always looking for talented individuals to join our growing team.
                </p>

                <div className="border-t border-stone-200 pt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-stone-900">{jobListings.length}</span>
                      <p className="text-sm text-stone-500">Open Roles</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-stone-900">100%</span>
                      <p className="text-sm text-stone-500">Remote Friendly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-stone-900">Full-time</span>
                      <p className="text-sm text-stone-500">All Positions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Job Cards */}
            <div className="lg:col-span-8 space-y-4">
              {jobListings.map((job, index) => (
                <Link
                  key={job.id}
                  href={`/careers/${job.id}`}
                  className="block bg-white border border-stone-200 p-6 lg:p-8 hover:border-teal-500 transition-all group relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-teal-600 font-bold text-sm">
                          0{index + 1}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-1">
                          {job.department}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-stone-900 group-hover:text-teal-600 transition-colors mb-2">
                        {job.title}
                      </h3>
                      <p className="text-stone-600 text-sm mb-3">
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

                    <div className="flex items-center gap-2 text-stone-400 group-hover:text-teal-600 transition-colors sm:flex-shrink-0 sm:pt-1">
                      <span className="text-sm font-medium">View Details</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-teal-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-500 mb-4 block">
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
                className="border-l-2 border-stone-700 pl-6 hover:border-teal-500 transition-colors group"
              >
                <span className="text-teal-500 font-bold text-sm mb-2 block">
                  0{index + 1}
                </span>
                <h3 className="font-bold text-xl mb-2 group-hover:text-teal-500 transition-colors">
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

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 bg-stone-50 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Don&apos;t see the <span className="font-serif italic text-teal-600">right role?</span>
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
