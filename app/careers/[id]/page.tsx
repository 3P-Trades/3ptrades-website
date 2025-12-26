import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/careers"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Careers
            </Link>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  {job.title}
                </h1>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-500">
                    {job.department}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted">
                    {job.location}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted">
                    {job.type}
                  </span>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href={`/contact?subject=Application: ${job.title}`}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About the Role</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {job.niceToHave && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Nice to Have</h2>
                    <ul className="space-y-3">
                      {job.niceToHave.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg
                            className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="p-6 rounded-2xl border bg-card">
                    <h3 className="font-semibold text-lg mb-4">Job Overview</h3>
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-sm text-muted-foreground">Department</dt>
                        <dd className="font-medium">{job.department}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Location</dt>
                        <dd className="font-medium">{job.location}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Job Type</dt>
                        <dd className="font-medium">{job.type}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="p-6 rounded-2xl border bg-card">
                    <h3 className="font-semibold text-lg mb-4">Ready to Apply?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Send us your resume and a brief introduction about why you'd be a great fit.
                    </p>
                    <Button className="w-full" asChild>
                      <Link href={`/contact?subject=Application: ${job.title}`}>
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Jobs Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Other Open Positions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {jobListings
                .filter((j) => j.id !== job.id)
                .slice(0, 4)
                .map((otherJob) => (
                  <Link
                    key={otherJob.id}
                    href={`/careers/${otherJob.id}`}
                    className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold mb-1">{otherJob.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {otherJob.department} • {otherJob.location}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
