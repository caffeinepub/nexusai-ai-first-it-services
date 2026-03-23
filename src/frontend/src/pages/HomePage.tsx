import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Globe, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "$3.2B", label: "Operational Savings" },
  { value: "140+", label: "Countries Deployed" },
  { value: "99.97%", label: "Platform Uptime" },
];

const services = [
  {
    icon: Zap,
    title: "NexusCore",
    desc: "Enterprise data integration and AI model deployment. Unify your data estate and ship models to production in days, not quarters.",
    tag: "Platform",
  },
  {
    icon: BarChart3,
    title: "NexusOps",
    desc: "Operational intelligence for real-time decision making. Turn streams of sensor and transactional data into decisive action.",
    tag: "Intelligence",
  },
  {
    icon: Shield,
    title: "NexusShield",
    desc: "AI-powered cybersecurity and threat detection. Predict, detect, and neutralize threats before they materialize.",
    tag: "Security",
  },
];

const logos = [
  "Meridian Capital",
  "Apex Defense",
  "Continuum Health",
  "Vector Energy",
  "Stratos Manufacturing",
  "Frontier Logistics",
  "Polaris Intelligence",
  "Summit Federal",
];

const industries = [
  { icon: Globe, label: "Defense & Intelligence" },
  { icon: BarChart3, label: "Financial Services" },
  { icon: Shield, label: "Healthcare" },
  { icon: Zap, label: "Energy & Utilities" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
        data-ocid="home.section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-nexus-cyan font-mono text-xs tracking-widest uppercase mb-6 border border-nexus-cyan/40 px-3 py-1">
              AI-First IT Services
            </span>
          </motion.div>
          <motion.h1
            className="text-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground max-w-5xl mx-auto mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Decisions at the Speed of{" "}
            <span className="text-nexus-cyan">Intelligence</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            We build the operating system for the AI era — giving organizations
            the data infrastructure, intelligence layer, and deployment platform
            to act on insight at machine speed.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/platform" data-ocid="home.primary_button">
              <Button className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold text-sm px-8 py-6 rounded-none text-base">
                Explore Platform <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact" data-ocid="home.secondary_button">
              <Button
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 font-semibold text-sm px-8 py-6 rounded-none text-base bg-transparent"
              >
                Talk to Sales
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-nexus-cyan" />
        </motion.div>
      </section>

      {/* Stats banner */}
      <section
        className="bg-nexus-surface border-y border-nexus-border"
        data-ocid="home.section"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-nexus-cyan mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-32 max-w-7xl mx-auto px-6 lg:px-8"
        data-ocid="home.section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-nexus-cyan font-mono text-xs tracking-widest uppercase">
            Our Platform
          </span>
          <h2 className="text-headline text-4xl md:text-5xl text-foreground mt-4 max-w-2xl">
            Three products. One unified AI operating system.
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-px bg-nexus-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-background p-10 group hover:bg-nexus-surface transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              data-ocid="home.card"
            >
              <span className="font-mono text-xs text-nexus-cyan tracking-widest uppercase mb-6 block">
                {service.tag}
              </span>
              <service.icon size={32} className="text-nexus-cyan mb-6" />
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {service.desc}
              </p>
              <Link
                to="/platform"
                className="inline-flex items-center text-xs font-mono text-nexus-cyan hover:gap-3 gap-2 transition-all uppercase tracking-widest"
                data-ocid="home.link"
              >
                Learn more <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client logos marquee */}
      <section
        className="border-y border-nexus-border py-12 overflow-hidden"
        data-ocid="home.section"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={logo + String(i)}
              className="inline-block mx-12 text-xs font-mono uppercase tracking-widest text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-32 bg-nexus-surface" data-ocid="home.section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-nexus-cyan font-mono text-xs tracking-widest uppercase">
              Industries
            </span>
            <h2 className="text-headline text-4xl md:text-5xl text-foreground mt-4">
              Built for the world&apos;s most complex organizations.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-nexus-border">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                className="bg-nexus-surface p-10 hover:bg-nexus-surface2 transition-colors cursor-pointer group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ind.icon size={24} className="text-nexus-cyan mb-6" />
                <p className="font-display font-semibold text-foreground">
                  {ind.label}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/solutions" data-ocid="home.primary_button">
              <Button className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold rounded-none px-10 py-6">
                View All Solutions <ArrowRight size={14} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-32 relative overflow-hidden"
        data-ocid="home.section"
      >
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            className="text-headline text-5xl md:text-6xl text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to build on the
            <br />
            <span className="text-nexus-cyan">intelligence layer?</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg mb-12">
            Join 500+ enterprises already operating at machine speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" data-ocid="home.primary_button">
              <Button className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold text-sm px-10 py-6 rounded-none text-base">
                Get Started Today
              </Button>
            </Link>
            <Link to="/customers" data-ocid="home.secondary_button">
              <Button
                variant="outline"
                className="border-nexus-border text-foreground hover:bg-nexus-surface bg-transparent font-semibold text-sm px-10 py-6 rounded-none text-base"
              >
                See Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
