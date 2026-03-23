import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cog,
  DollarSign,
  Globe,
  Heart,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const solutions = [
  {
    icon: Shield,
    title: "Defense & Intelligence",
    subtitle: "Mission-critical AI for national security.",
    description:
      "NexusAI powers intelligence analysis, battlefield logistics optimization, and predictive threat assessment for defense organizations. Our platform is IL6/TS-SCI capable and operates in air-gapped environments.",
    capabilities: [
      "Multi-INT data fusion and analysis",
      "Predictive logistics and supply chain optimization",
      "Autonomous sensor tasking and prioritization",
      "Classified network deployment support",
    ],
    clients: "47 government agencies",
    color: "text-blue-400",
  },
  {
    icon: Heart,
    title: "Healthcare",
    subtitle: "Clinical intelligence that saves lives.",
    description:
      "From patient deterioration prediction to supply chain resilience, NexusAI enables health systems to operate with unprecedented efficiency and clinical precision. HIPAA-compliant. FDA 510(k) pathway support.",
    capabilities: [
      "Early warning systems for patient deterioration",
      "Clinical trial matching and patient cohort analysis",
      "Medical supply chain resilience modeling",
      "Payer-provider data reconciliation",
    ],
    clients: "120+ health systems",
    color: "text-green-400",
  },
  {
    icon: DollarSign,
    title: "Financial Services",
    subtitle: "Risk intelligence at trading speed.",
    description:
      "NexusAI helps banks, asset managers, and insurers navigate complex risk landscapes with AI-driven models that process millions of signals in real time. SEC- and MiFID II-compliant infrastructure.",
    capabilities: [
      "Real-time portfolio risk monitoring",
      "Anti-money laundering and fraud detection",
      "Regulatory reporting automation",
      "Alternative data integration for alpha generation",
    ],
    clients: "85+ financial institutions",
    color: "text-yellow-400",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    subtitle: "Grid intelligence for the energy transition.",
    description:
      "Managing the complexity of renewable intermittency, aging infrastructure, and climate risk requires AI at the core. NexusAI gives energy operators the situational awareness and predictive models to act ahead of failure.",
    capabilities: [
      "Renewable generation forecasting",
      "Grid stability and demand-response optimization",
      "Predictive asset maintenance for turbines and substations",
      "Carbon accounting and ESG reporting automation",
    ],
    clients: "60+ utilities worldwide",
    color: "text-orange-400",
  },
  {
    icon: Cog,
    title: "Manufacturing",
    subtitle: "Factory intelligence. Zero unplanned downtime.",
    description:
      "NexusAI connects the factory floor to the boardroom — surfacing real-time quality signals, predicting equipment failures weeks in advance, and optimizing production schedules against dynamic demand.",
    capabilities: [
      "Predictive maintenance with 94% accuracy",
      "Computer vision quality inspection at line speed",
      "Digital twin simulation for process optimization",
      "Dynamic production scheduling with constraint AI",
    ],
    clients: "95+ manufacturers",
    color: "text-purple-400",
  },
  {
    icon: Globe,
    title: "Government & Public Sector",
    subtitle: "Data infrastructure for public institutions.",
    description:
      "Cities, agencies, and international organizations trust NexusAI to modernize legacy infrastructure, deliver citizen services at scale, and make evidence-based policy decisions backed by real data.",
    capabilities: [
      "Citizen service workflow automation",
      "Cross-agency data sharing and interoperability",
      "Public health and emergency response coordination",
      "Policy impact modeling and simulation",
    ],
    clients: "30+ government entities",
    color: "text-cyan-400",
  },
];

export default function SolutionsPage() {
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
              Solutions
            </span>
            <h1 className="text-headline text-5xl md:text-7xl text-foreground mt-4 mb-8 max-w-3xl">
              AI infrastructure for every sector.
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
              The world&apos;s most consequential organizations run on NexusAI.
              Here&apos;s how we help each sector solve its hardest problems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-nexus-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-px bg-nexus-border">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                className="bg-background p-12 hover:bg-nexus-surface transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                data-ocid="solutions.card"
              >
                <sol.icon size={28} className={`${sol.color} mb-6`} />
                <h2 className="text-xl font-display font-bold text-foreground mb-2">
                  {sol.title}
                </h2>
                <p className="text-nexus-cyan text-sm font-medium mb-4">
                  {sol.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {sol.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {sol.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-nexus-cyan mt-1">→</span> {cap}
                    </li>
                  ))}
                </ul>
                <span className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest">
                  {sol.clients}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-nexus-border text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-headline text-4xl text-foreground mb-6">
            Don&apos;t see your industry?
          </h2>
          <p className="text-muted-foreground mb-10">
            NexusAI&apos;s platform is horizontal — our team of sector
            specialists can help you map the platform to your unique operational
            context.
          </p>
          <Link to="/contact" data-ocid="solutions.primary_button">
            <Button className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold rounded-none px-10 py-6">
              Speak to a Solutions Architect{" "}
              <ArrowRight size={14} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
