import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, CheckCircle, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    id: "nexuscore",
    name: "NexusCore",
    tag: "Data & AI Platform",
    icon: Zap,
    headline: "Your enterprise data, unified. Your AI models, deployed.",
    description:
      "NexusCore is the foundational layer of the NexusAI platform. It ingests, normalizes, and governs data from any source — ERP systems, IoT devices, external feeds — and provides the infrastructure to train, validate, and deploy AI models at enterprise scale.",
    features: [
      "Unified data mesh across 200+ connectors",
      "Model registry with versioning and A/B deployment",
      "Real-time streaming and batch processing pipelines",
      "Enterprise-grade data lineage and governance",
      "99.99% SLA with global multi-region replication",
      "Zero-copy data sharing with external partners",
    ],
    metric: { value: "10PB+", label: "Data managed" },
  },
  {
    id: "nexusops",
    name: "NexusOps",
    tag: "Operational Intelligence",
    icon: BarChart3,
    headline: "Turn operational data into decisive action in milliseconds.",
    description:
      "NexusOps gives your decision-makers a real-time intelligence layer on top of your operations. Surface anomalies, predict failures, and trigger automated responses before your teams even see the alert. Built for mission-critical environments with no tolerance for downtime.",
    features: [
      "Real-time operational dashboards with sub-second refresh",
      "Predictive maintenance with 94% accuracy",
      "Automated incident response and runbook execution",
      "Natural language querying over operational data",
      "Multi-tenant isolation for complex org structures",
      "Offline-capable edge deployment for air-gapped environments",
    ],
    metric: { value: "<50ms", label: "Decision latency" },
  },
  {
    id: "nexusshield",
    name: "NexusShield",
    tag: "AI Cybersecurity",
    icon: Shield,
    headline: "Threats neutralized before they become incidents.",
    description:
      "NexusShield combines behavioral AI, threat intelligence fusion, and automated response to protect your organization's most sensitive assets. With models trained on billions of threat signals, it detects what signature-based tools miss — zero-days, living-off-the-land attacks, and insider threats.",
    features: [
      "Behavioral AI baseline for every user and device",
      "Threat intelligence fusion from 300+ feeds",
      "Automated SOAR playbook execution in <2 seconds",
      "Classified and unclassified network segmentation",
      "FedRAMP High and IL5 authorized",
      "Full attack chain reconstruction and attribution",
    ],
    metric: { value: "0-day", label: "Threat detection" },
  },
];

export default function PlatformPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-nexus-cyan font-mono text-xs tracking-widest uppercase">
              The Platform
            </span>
            <h1 className="text-headline text-5xl md:text-7xl text-foreground mt-4 mb-8 max-w-4xl">
              Three products. One operating system for the AI era.
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
              NexusAI&apos;s platform stack is purpose-built for enterprises
              that cannot afford to wait for AI transformation — they need it
              now.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      {products.map((product, idx) => (
        <section
          key={product.id}
          className={`py-24 border-t border-nexus-border ${
            idx % 2 === 1 ? "bg-nexus-surface" : "bg-background"
          }`}
          data-ocid="platform.panel"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-mono text-xs text-nexus-cyan tracking-widest uppercase">
                  {product.tag}
                </span>
                <div className="flex items-center gap-4 mt-4 mb-6">
                  <product.icon size={40} className="text-nexus-cyan" />
                  <h2 className="text-headline text-4xl md:text-5xl text-foreground">
                    {product.name}
                  </h2>
                </div>
                <p className="text-xl text-foreground font-medium mb-6 leading-snug">
                  {product.headline}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>
                <div className="border border-nexus-border p-6 bg-nexus-surface inline-block">
                  <div className="text-4xl font-display font-bold text-nexus-cyan">
                    {product.metric.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                    {product.metric.label}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ul className="space-y-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="text-nexus-cyan mt-0.5 shrink-0"
                      />
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/contact" data-ocid="platform.primary_button">
                    <Button className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold rounded-none">
                      Request a Demo <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 border-t border-nexus-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-headline text-4xl md:text-5xl text-foreground mb-6">
            See the full platform in action.
          </h2>
          <p className="text-muted-foreground mb-10">
            Our engineers will walk you through a live demonstration tailored to
            your use case.
          </p>
          <Link to="/contact" data-ocid="platform.primary_button">
            <Button className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold rounded-none px-10 py-6 text-base">
              Schedule a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
