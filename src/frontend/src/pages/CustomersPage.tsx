import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const caseStudies = [
  {
    client: "Apex Defense Systems",
    sector: "Defense",
    title: "Reducing mission planning cycles from 72 hours to 4 hours with AI.",
    outcome: "94% reduction in planning time",
    description:
      "Apex Defense integrated NexusCore and NexusOps across its theater command network, enabling real-time multi-INT fusion and automated logistics sequencing. Mission planners now spend time making decisions, not finding data.",
    highlight: "$420M cost savings in Year 1",
  },
  {
    client: "Meridian Capital Group",
    sector: "Finance",
    title:
      "Building a risk intelligence layer that adapts to every market condition.",
    outcome: "67% improvement in risk-adjusted returns",
    description:
      "Meridian deployed NexusOps across its 14-desk trading floor to create a unified risk picture updated in real time. Alternative data integration through NexusCore gave their quant team a 3-month alpha advantage on emerging signals.",
    highlight: "$1.1B in protected AUM",
  },
  {
    client: "Continuum Health Network",
    sector: "Healthcare",
    title:
      "Predicting patient deterioration 8 hours before clinical signs appear.",
    outcome: "31% reduction in ICU transfers",
    description:
      "Continuum deployed NexusAI's early warning platform across 47 hospitals. The AI model, trained on 12 years of longitudinal patient data, now flags deterioration risk with 91% precision — giving care teams the time to intervene.",
    highlight: "1,200+ lives impacted annually",
  },
  {
    client: "Vector Energy Corp",
    sector: "Energy",
    title:
      "Eliminating unplanned grid outages through predictive infrastructure intelligence.",
    outcome: "78% reduction in unplanned downtime",
    description:
      "Vector Energy manages 40,000 miles of transmission infrastructure. NexusShield's anomaly detection and NexusOps' predictive maintenance models now monitor every asset in real time, flagging failures 3–6 weeks before they occur.",
    highlight: "$280M in avoided outage costs",
  },
  {
    client: "Summit Federal Agency",
    sector: "Government",
    title:
      "Modernizing cross-agency data sharing to accelerate policy response.",
    outcome: "12x faster cross-agency data access",
    description:
      "Summit Federal consolidated data from 8 legacy systems onto NexusCore, enabling analysts to access unified, governed datasets in seconds. Policy decisions that took 6 weeks to validate now take 3 days.",
    highlight: "$95M in procurement savings",
  },
  {
    client: "Stratos Manufacturing",
    sector: "Manufacturing",
    title: "Zero unplanned downtime across 18 global production facilities.",
    outcome: "99.3% OEE achieved",
    description:
      "Stratos deployed NexusOps across its entire production network, using computer vision and vibration analysis to predict equipment failure. The result: 18 months of production without a single unplanned stoppage.",
    highlight: "$160M in productivity gains",
  },
];

export default function CustomersPage() {
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
              Customers
            </span>
            <h1 className="text-headline text-5xl md:text-7xl text-foreground mt-4 mb-8 max-w-3xl">
              The organizations that shape the world run on NexusAI.
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
              From national defense to life-saving healthcare, our customers
              trust NexusAI with their most critical operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-nexus-border pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-nexus-border">
            {caseStudies.map((cs, i) => (
              <motion.article
                key={cs.client}
                className="bg-background p-10 flex flex-col hover:bg-nexus-surface transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                data-ocid="customers.card"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="font-mono text-xs text-nexus-cyan uppercase tracking-widest">
                      {cs.sector}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground mt-1">
                      {cs.client}
                    </h3>
                  </div>
                  <span className="border border-nexus-border px-2 py-0.5 text-xs font-mono text-muted-foreground">
                    {cs.outcome}
                  </span>
                </div>
                <h2 className="text-base font-display font-bold text-foreground leading-snug mb-4 flex-1">
                  {cs.title}
                </h2>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                  {cs.description}
                </p>
                <div className="border-t border-nexus-border pt-4">
                  <span className="text-nexus-cyan font-mono text-xs">
                    {cs.highlight}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-nexus-border bg-nexus-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-headline text-4xl text-foreground mb-6">
            Become a NexusAI customer.
          </h2>
          <p className="text-muted-foreground mb-10">
            Join the world&apos;s most consequential organizations operating at
            machine speed.
          </p>
          <Link to="/contact" data-ocid="customers.primary_button">
            <Button className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold rounded-none px-10 py-6">
              Start Your Journey <ArrowRight size={14} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
