import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    title: "Integrity First",
    desc: "We build technology that tells you the truth — even when the truth is inconvenient. No hallucinations. No false confidence. Calibrated AI or nothing.",
  },
  {
    title: "Institutional Trust",
    desc: "The organizations we work with carry enormous responsibility. We take that seriously. Our software earns trust through transparency, auditability, and consistency.",
  },
  {
    title: "Mission Alignment",
    desc: "We choose our customers. We build for organizations solving real problems at scale — not for hype cycles or short-term gain.",
  },
  {
    title: "Human Augmentation",
    desc: "AI should make humans more capable, not replace human judgment. Our products are built to put the best possible information in front of the right decision-maker.",
  },
];

const leaders = [
  {
    name: "Alexandra Chen",
    title: "Chief Executive Officer",
    bio: "Previously SVP of Engineering at a leading cloud platform. Built AI systems for defense and financial services for 18 years. PhD in Computational Intelligence, MIT.",
    initials: "AC",
  },
  {
    name: "Marcus Okafor",
    title: "Chief Technology Officer",
    bio: "Architect of large-scale ML infrastructure at a major research lab. 15 patents in distributed AI systems. Led AI programs for three Fortune 50 companies.",
    initials: "MO",
  },
  {
    name: "Priya Sharma",
    title: "Chief Product Officer",
    bio: "Product leader with deep roots in enterprise software. Shipped 0→1 products used by 40M+ people. Former PM lead at a leading cloud analytics platform.",
    initials: "PS",
  },
  {
    name: "David Reinholt",
    title: "Chief Revenue Officer",
    bio: "20 years in enterprise technology sales across defense, healthcare, and finance. Closed the company's first 10 contracts exceeding $100M each.",
    initials: "DR",
  },
  {
    name: "Yuki Tanaka",
    title: "VP of Engineering",
    bio: "Infrastructure engineering expert. Built planetary-scale distributed systems. Formerly led reliability engineering at a top-tier tech platform.",
    initials: "YT",
  },
  {
    name: "Sofia Alvarez",
    title: "General Counsel",
    bio: "Specializes in AI governance, data privacy, and national security law. Previously at a major DC law firm advising intelligence community contractors.",
    initials: "SA",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Mission */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-nexus-cyan font-mono text-xs tracking-widest uppercase">
              About NexusAI
            </span>
            <h1 className="text-headline text-5xl md:text-7xl text-foreground mt-4 mb-8 max-w-4xl">
              We are building the operating system for the AI era.
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
              NexusAI was founded on one conviction: the organizations that will
              define the next decade are those that can turn data into decisions
              at machine speed. We build the infrastructure that makes that
              possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="border-t border-nexus-border bg-nexus-surface py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-nexus-cyan font-mono text-xs tracking-widest uppercase">
                Our Mission
              </span>
              <blockquote className="text-2xl md:text-3xl font-display font-bold text-foreground mt-6 leading-snug">
                &quot;We build the operating system for the AI era — giving
                organizations the data infrastructure, intelligence layer, and
                deployment platform to act on insight at machine speed.&quot;
              </blockquote>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-px bg-nexus-border"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {[
                { n: "2016", l: "Founded" },
                { n: "500+", l: "Enterprise clients" },
                { n: "2,400+", l: "Team members" },
                { n: "18", l: "Global offices" },
              ].map((stat) => (
                <div key={stat.l} className="bg-nexus-surface p-8">
                  <div className="text-3xl font-display font-bold text-nexus-cyan">
                    {stat.n}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                    {stat.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-nexus-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-nexus-cyan font-mono text-xs tracking-widest uppercase">
              Our Values
            </span>
            <h2 className="text-headline text-4xl md:text-5xl text-foreground mt-4 max-w-2xl">
              What we stand for.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-nexus-border">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-background p-10 hover:bg-nexus-surface transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-lg font-display font-bold text-nexus-cyan mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 border-t border-nexus-border bg-nexus-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-nexus-cyan font-mono text-xs tracking-widest uppercase">
              Leadership
            </span>
            <h2 className="text-headline text-4xl md:text-5xl text-foreground mt-4">
              The team driving the AI era.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-nexus-border">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                className="bg-nexus-surface p-8 hover:bg-nexus-surface2 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                data-ocid="about.card"
              >
                <div className="w-12 h-12 bg-nexus-border flex items-center justify-center mb-6">
                  <span className="font-mono text-sm text-nexus-cyan font-bold">
                    {leader.initials}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground">
                  {leader.name}
                </h3>
                <p className="text-nexus-cyan text-xs font-mono uppercase tracking-widest mt-1 mb-4">
                  {leader.title}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-nexus-border text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-headline text-4xl text-foreground mb-6">
            Join the team.
          </h2>
          <p className="text-muted-foreground mb-10">
            We&apos;re building the infrastructure for the AI era. If that
            excites you, we want to hear from you.
          </p>
          <Link to="/careers" data-ocid="about.primary_button">
            <Button className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold rounded-none px-10 py-6">
              View Open Roles <ArrowRight size={14} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
