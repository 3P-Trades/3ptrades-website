import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    requirements: [
      "3+ years of experience with React and Next.js",
      "Strong proficiency in TypeScript",
      "Experience with Tailwind CSS or similar styling solutions",
      "Familiarity with RESTful APIs and GraphQL",
      "Understanding of server-side rendering and static site generation",
      "Experience with testing frameworks (Jest, React Testing Library)",
    ],
    responsibilities: [
      "Develop and maintain client-facing web applications",
      "Collaborate with designers to implement responsive UI/UX",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and technical discussions",
      "Optimize applications for performance and scalability",
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
    ],
    responsibilities: [
      "Design and implement cloud architecture for enterprise clients",
      "Lead cloud migration projects from legacy systems to AWS",
      "Establish security best practices and compliance standards",
      "Optimize cloud costs and resource utilization",
      "Mentor junior engineers on cloud technologies",
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
    ],
    responsibilities: [
      "Design and implement AI/ML solutions for client projects",
      "Build custom RAG pipelines and agentic workflows",
      "Fine-tune and deploy language models",
      "Integrate AI capabilities into existing applications",
      "Stay current with latest AI research and technologies",
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
    ],
    responsibilities: [
      "Develop features across the entire stack",
      "Design and implement RESTful APIs and microservices",
      "Collaborate with cross-functional teams",
      "Participate in architecture and design decisions",
      "Ensure code quality through testing and reviews",
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
    ],
    responsibilities: [
      "Build and maintain CI/CD pipelines",
      "Manage container orchestration and deployment",
      "Implement monitoring, logging, and alerting solutions",
      "Automate infrastructure provisioning and management",
      "Ensure high availability and disaster recovery",
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
    ],
    responsibilities: [
      "Design and build scalable data pipelines",
      "Develop and maintain data warehouse architecture",
      "Implement data quality and validation frameworks",
      "Collaborate with data scientists and analysts",
      "Optimize data infrastructure for performance and cost",
    ],
  },
];

const benefits = [
  {
    title: "Remote-First",
    description: "Work from anywhere in the world with flexible hours",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Competitive Pay",
    description: "Salary packages that match your skills and experience",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Learning Budget",
    description: "Annual allowance for courses, certifications, and conferences",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness programs",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Latest Tech Stack",
    description: "Work with cutting-edge technologies and AI tools",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Growth Opportunities",
    description: "Clear career paths and mentorship programs",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Join Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build the future of technology with us. We're looking for passionate
              individuals who want to make an impact through innovative software solutions.
            </p>
            <Button size="lg" asChild>
              <a href="#openings">View Open Positions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job - we offer a career with purpose
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 p-6 rounded-lg border bg-card">
                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-500">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="openings" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your next opportunity and grow with us
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {job.department} • {job.location} • {job.type}
                      </CardDescription>
                    </div>
                    <Button asChild>
                      <Link href={`/careers/${job.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted"
                      >
                        {req.split(" ").slice(0, 4).join(" ")}...
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll
            reach out when we have a position that matches your skills.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
