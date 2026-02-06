import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const jobListings = [
  {
    id: "react-nextjs-developer",
    title: "React/Next.js Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    description: "We're looking for an experienced React/Next.js developer to build modern, high-performance web applications for our clients.",
    requirements: [
      "3+ years of experience with React and Next.js",
      "Strong proficiency in TypeScript",
      "Experience with Tailwind CSS or similar styling solutions",
      "Familiarity with RESTful APIs and GraphQL",
      "Understanding of server-side rendering and static site generation",
      "Experience with testing frameworks (Jest, React Testing Library)",
      "Knowledge of state management solutions (Redux, Zustand, or React Context)",
      "Familiarity with Git and collaborative development workflows",
    ],
    responsibilities: [
      "Develop and maintain client-facing web applications",
      "Collaborate with designers to implement responsive UI/UX",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and technical discussions",
      "Optimize applications for performance and scalability",
      "Work with backend teams to integrate APIs and services",
      "Contribute to technical architecture decisions",
    ],
    niceToHave: [
      "Experience with React Native for mobile development",
      "Knowledge of CI/CD pipelines",
      "Familiarity with cloud platforms (AWS, Vercel, or similar)",
      "Open source contributions",
    ],
  },
  {
    id: "aws-cloud-architect",
    title: "AWS Cloud Architect",
    type: "Full-time",
    location: "Remote / Round Rock, TX",
    department: "Infrastructure",
    description: "Join us as a Cloud Architect to design and implement scalable, secure cloud infrastructure solutions on AWS.",
    requirements: [
      "5+ years of experience with AWS services",
      "AWS Solutions Architect certification (Professional preferred)",
      "Experience with Infrastructure as Code (Terraform, CloudFormation)",
      "Strong knowledge of networking, security, and compliance",
      "Experience with containerization (Docker, Kubernetes, ECS/EKS)",
      "Familiarity with CI/CD pipelines and DevOps practices",
      "Understanding of cost optimization strategies",
      "Excellent communication and documentation skills",
    ],
    responsibilities: [
      "Design and implement cloud architecture for enterprise clients",
      "Lead cloud migration projects from legacy systems to AWS",
      "Establish security best practices and compliance standards",
      "Optimize cloud costs and resource utilization",
      "Mentor junior engineers on cloud technologies",
      "Create architectural documentation and diagrams",
      "Evaluate and recommend new AWS services and features",
    ],
    niceToHave: [
      "Experience with multi-cloud environments (GCP, Azure)",
      "Knowledge of serverless architectures",
      "Experience with large-scale data processing",
      "Background in financial services or healthcare compliance",
    ],
  },
  {
    id: "ai-engineer",
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Remote",
    department: "AI & Data",
    description: "We're seeking an AI Engineer to develop cutting-edge machine learning solutions and integrate LLMs into client applications.",
    requirements: [
      "3+ years of experience in machine learning and AI",
      "Proficiency in Python and ML frameworks (PyTorch, TensorFlow)",
      "Experience with LLMs, RAG pipelines, and prompt engineering",
      "Familiarity with OpenAI, Anthropic, or similar APIs",
      "Knowledge of vector databases (Pinecone, Weaviate, ChromaDB)",
      "Understanding of MLOps and model deployment",
      "Strong mathematical foundation in statistics and linear algebra",
      "Experience with data preprocessing and feature engineering",
    ],
    responsibilities: [
      "Design and implement AI/ML solutions for client projects",
      "Build custom RAG pipelines and agentic workflows",
      "Fine-tune and deploy language models",
      "Integrate AI capabilities into existing applications",
      "Stay current with latest AI research and technologies",
      "Collaborate with product teams to identify AI opportunities",
      "Document AI systems and create technical specifications",
    ],
    niceToHave: [
      "Experience with computer vision or NLP",
      "Publications in ML/AI conferences",
      "Knowledge of edge AI deployment",
      "Experience with AI safety and alignment",
    ],
  },
  {
    id: "fullstack-engineer",
    title: "Full Stack Engineer",
    type: "Full-time",
    location: "Remote / Kathmandu, Nepal",
    department: "Engineering",
    description: "Looking for a versatile Full Stack Engineer to work on end-to-end development of web and mobile applications.",
    requirements: [
      "4+ years of full-stack development experience",
      "Proficiency in React/Next.js and Node.js",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of cloud services (AWS, GCP, or Azure)",
      "Familiarity with mobile development (React Native) is a plus",
      "Strong problem-solving and communication skills",
      "Understanding of software design patterns",
      "Experience with agile development methodologies",
    ],
    responsibilities: [
      "Develop features across the entire stack",
      "Design and implement RESTful APIs and microservices",
      "Collaborate with cross-functional teams",
      "Participate in architecture and design decisions",
      "Ensure code quality through testing and reviews",
      "Troubleshoot and debug production issues",
      "Contribute to technical documentation",
    ],
    niceToHave: [
      "Experience with GraphQL",
      "Knowledge of message queues (RabbitMQ, Kafka)",
      "Familiarity with containerization",
      "Leadership or mentoring experience",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Infrastructure",
    description: "Join our infrastructure team to build and maintain robust CI/CD pipelines and cloud infrastructure.",
    requirements: [
      "3+ years of DevOps/SRE experience",
      "Strong experience with Docker and Kubernetes",
      "Proficiency with CI/CD tools (GitHub Actions, GitLab CI, Jenkins)",
      "Experience with Infrastructure as Code (Terraform)",
      "Knowledge of monitoring tools (Prometheus, Grafana, DataDog)",
      "Scripting skills in Bash, Python, or Go",
      "Understanding of networking and security principles",
      "Experience with Linux system administration",
    ],
    responsibilities: [
      "Build and maintain CI/CD pipelines",
      "Manage container orchestration and deployment",
      "Implement monitoring, logging, and alerting solutions",
      "Automate infrastructure provisioning and management",
      "Ensure high availability and disaster recovery",
      "Respond to and resolve production incidents",
      "Improve system reliability and performance",
    ],
    niceToHave: [
      "Experience with service mesh (Istio)",
      "Knowledge of GitOps practices",
      "Cloud certifications (AWS, GCP, or Azure)",
      "Experience with chaos engineering",
    ],
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    type: "Full-time",
    location: "Remote",
    department: "AI & Data",
    description: "We're looking for a Data Engineer to build robust data pipelines and infrastructure for analytics and ML applications.",
    requirements: [
      "3+ years of data engineering experience",
      "Proficiency in Python and SQL",
      "Experience with data warehouses (Snowflake, BigQuery, Redshift)",
      "Knowledge of ETL/ELT tools (Airflow, dbt, Spark)",
      "Familiarity with streaming platforms (Kafka, Kinesis)",
      "Understanding of data modeling and governance",
      "Experience with cloud data services",
      "Strong analytical and problem-solving skills",
    ],
    responsibilities: [
      "Design and build scalable data pipelines",
      "Develop and maintain data warehouse architecture",
      "Implement data quality and validation frameworks",
      "Collaborate with data scientists and analysts",
      "Optimize data infrastructure for performance and cost",
      "Create documentation for data systems",
      "Ensure data security and compliance",
    ],
    niceToHave: [
      "Experience with real-time analytics",
      "Knowledge of ML feature stores",
      "Familiarity with data governance tools",
      "Experience with data visualization",
    ],
  },
];

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = jobListings.find((j) => j.id === id);

  if (!job) {
    return {
      title: "Job Not Found | 3P Trades",
    };
  }

  return {
    title: `${job.title} | Careers | 3P Trades`,
    description: job.description,
  };
}

export function generateStaticParams() {
  return jobListings.map((job) => ({
    id: job.id,
  }));
}

export default async function JobDetailPage({ params }: Props) {
  const { id } = await params;
  const job = jobListings.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  const otherJobs = jobListings.filter((j) => j.id !== job.id);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          {/* Back Link */}
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-10 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-sm font-medium">Back to Careers</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-px bg-teal-500" />
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                  {job.department}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6">
                {job.title}
              </h1>

              <p className="text-xl text-stone-600 leading-relaxed mb-8">
                {job.description}
              </p>

              {/* Meta Tags */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-700 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  {job.department}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.type}
                </span>
              </div>
            </div>

            {/* Apply Card */}
            <div className="relative">
              <div className="bg-stone-900 text-white p-8 lg:p-10 relative">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-teal-500" />

                <h3 className="text-2xl font-bold mb-3">Interested in this role?</h3>
                <p className="text-stone-400 mb-8 leading-relaxed">
                  Send us your resume and a brief introduction about why you&apos;d be a great fit for the {job.title} position.
                </p>

                <Link
                  href={`/contact?subject=Application: ${job.title}`}
                  className="inline-flex items-center justify-center gap-3 bg-teal-500 text-white px-8 py-4 text-base font-bold hover:bg-teal-400 transition-all group w-full"
                >
                  Apply Now
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <div className="absolute bottom-0 right-0 w-8 h-8 bg-teal-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Responsibilities */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-px bg-teal-500" />
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-600">
                    What You&apos;ll Do
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
                  Responsibilities
                </h2>
                <div className="space-y-4">
                  {job.responsibilities.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <span className="flex-shrink-0 w-8 h-8 bg-teal-500/10 flex items-center justify-center text-teal-600 font-bold text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-stone-600 leading-relaxed pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-8 h-px bg-teal-500" />
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-600">
                    What We&apos;re Looking For
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
                  Requirements
                </h2>
                <div className="space-y-4">
                  {job.requirements.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-stone-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nice to Have */}
              {job.niceToHave && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-8 h-px bg-teal-500" />
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-600">
                      Bonus Points
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
                    Nice to Have
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {job.niceToHave.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 border border-stone-200 p-4">
                        <svg className="w-5 h-5 text-stone-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                        <span className="text-stone-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Job Overview */}
                <div className="border border-stone-200 p-6 relative">
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-teal-500" />
                  <h3 className="font-bold text-lg text-stone-900 mb-6">Job Overview</h3>
                  <dl className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-stone-500 mb-1">Department</dt>
                        <dd className="font-medium text-stone-900">{job.department}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-stone-500 mb-1">Location</dt>
                        <dd className="font-medium text-stone-900">{job.location}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-stone-500 mb-1">Job Type</dt>
                        <dd className="font-medium text-stone-900">{job.type}</dd>
                      </div>
                    </div>
                  </dl>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Positions */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-teal-600 mb-4 block">
              Explore More
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Other open <span className="font-serif italic">positions.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherJobs.map((otherJob, index) => (
              <Link
                key={otherJob.id}
                href={`/careers/${otherJob.id}`}
                className="bg-white border border-stone-200 p-6 hover:border-teal-500 transition-all group relative"
              >
                <span className="absolute top-5 right-5 text-4xl font-bold text-stone-100 group-hover:text-teal-100 transition-colors">
                  0{index + 1}
                </span>
                <div className="relative">
                  <span className="text-xs uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-1 mb-3 inline-block">
                    {otherJob.department}
                  </span>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-teal-600 transition-colors mb-2">
                    {otherJob.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-stone-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {otherJob.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {otherJob.type}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-teal-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
