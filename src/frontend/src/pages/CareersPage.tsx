import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";

const positions = [
  {
    title: "Staff AI Engineer",
    team: "Platform Engineering",
    location: "New York, NY / Remote",
    type: "Full-time",
    level: "Staff",
    description:
      "Design and build the core AI model serving infrastructure that processes billions of inferences per day. You'll own the architecture for model lifecycle management, feature stores, and real-time inference pipelines.",
    requirements: [
      "7+ years in ML engineering",
      "Experience with large-scale distributed systems",
      "Deep expertise in PyTorch or JAX",
      "Production experience with LLMs or foundation models",
    ],
  },
  {
    title: "MLOps Lead",
    team: "Infrastructure",
    location: "Washington, D.C.",
    type: "Full-time",
    level: "Lead",
    description:
      "Own the end-to-end MLOps platform for our government and defense customers. You'll build the CI/CD pipelines, monitoring systems, and governance tooling that keeps mission-critical AI deployments running in air-gapped environments.",
    requirements: [
      "5+ years MLOps or DevOps",
      "Clearance eligible (TS/SCI preferred)",
      "Kubernetes and Helm proficiency",
      "Experience with regulated or classified environments",
    ],
  },
  {
    title: "Enterprise Solutions Architect",
    team: "Customer Engineering",
    location: "San Francisco, CA / New York, NY",
    type: "Full-time",
    level: "Senior",
    description:
      "Partner with our largest enterprise accounts to design and implement NexusAI platform architectures. You'll be the technical bridge between our product and the customer's operational reality — translating ambiguous requirements into concrete AI programs.",
    requirements: [
      "8+ years in enterprise architecture",
      "Fluency in data and AI infrastructure",
      "Experience in defense, finance, or healthcare",
      "Excellent executive communication",
    ],
  },
  {
    title: "AI Product Manager",
    team: "Product",
    location: "New York, NY",
    type: "Full-time",
    level: "Senior",
    description:
      "Define the roadmap for NexusOps — our operational intelligence product used by 500+ enterprises. You'll work directly with customers in high-stakes environments to identify unmet needs and ship features that change how their organizations make decisions.",
    requirements: [
      "5+ years product management",
      "Technical background in data or AI",
      "Enterprise B2B experience required",
      "Comfort with ambiguity and long sales cycles",
    ],
  },
  {
    title: "Senior Security Engineer \u2014 NexusShield",
    team: "Security",
    location: "Remote (US)",
    type: "Full-time",
    level: "Senior",
    description:
      "Own offensive security research and defensive AI model development for NexusShield. You'll build the threat detection models, analyze novel attack patterns, and ensure our product stays ahead of adversaries.",
    requirements: [
      "6+ years in offensive or defensive security",
      "Experience with threat intelligence pipelines",
      "ML background for anomaly detection",
      "OSCP, GREM, or equivalent certifications",
    ],
  },
  {
    title: "Data Infrastructure Engineer",
    team: "Platform Engineering",
    location: "Austin, TX / Remote",
    type: "Full-time",
    level: "Senior",
    description:
      "Build the data infrastructure backbone that powers NexusCore — ingestion pipelines, streaming systems, and the data mesh that connects enterprise data estates. You'll work at extreme scale with petabytes of enterprise data.",
    requirements: [
      "5+ years data engineering",
      "Apache Spark, Flink, or Kafka expertise",
      "Experience with cloud-native data platforms",
      "Strong SQL and data modeling skills",
    ],
  },
];

const levelColor: Record<string, string> = {
  Staff: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Lead: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Senior: "bg-green-500/10 text-green-400 border-green-500/20",
};

export default function CareersPage() {
  return (
    <div className="pt-16">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-nexus-cyan font-mono text-xs tracking-widest uppercase">
              Careers
            </span>
            <h1 className="text-headline text-5xl md:text-7xl text-foreground mt-4 mb-8 max-w-3xl">
              Work on problems that actually matter.
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
              NexusAI attracts engineers, scientists, and operators who want to
              see their work deployed in environments where the stakes are
              highest. We are looking for people who are serious about the
              craft.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-nexus-border pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
            {positions.length} open positions
          </p>
          <div className="space-y-px bg-nexus-border">
            {positions.map((pos, i) => (
              <motion.div
                key={pos.title}
                className="bg-background hover:bg-nexus-surface transition-colors p-8 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                data-ocid={`careers.item.${i + 1}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-lg font-display font-bold text-foreground">
                        {pos.title}
                      </h3>
                      <Badge
                        className={`text-xs border ${levelColor[pos.level]} rounded-none`}
                      >
                        {pos.level}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin size={10} /> {pos.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} /> {pos.type}
                      </span>
                      <span className="text-nexus-cyan">{pos.team}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-2xl">
                      {pos.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {pos.requirements.map((req) => (
                        <li
                          key={req}
                          className="text-xs font-mono border border-nexus-border px-2 py-0.5 text-muted-foreground"
                        >
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0">
                    <Link to="/contact" data-ocid="careers.primary_button">
                      <Button className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold rounded-none text-sm">
                        Apply <ArrowRight size={12} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-nexus-border bg-nexus-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-headline text-4xl text-foreground mb-6">
            Don&apos;t see the right role?
          </h2>
          <p className="text-muted-foreground mb-10">
            We&apos;re always looking for exceptional people. Send us your work
            — we&apos;ll be in touch if there&apos;s a fit.
          </p>
          <Link to="/contact" data-ocid="careers.primary_button">
            <Button
              variant="outline"
              className="border-nexus-border text-foreground hover:bg-nexus-surface2 font-semibold rounded-none px-10 py-6 bg-transparent"
            >
              Send a General Application
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
