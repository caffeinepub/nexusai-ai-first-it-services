import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActor } from "@/hooks/useActor";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

const footerLinks = {
  Platform: [
    { label: "NexusCore", href: "/platform" as const },
    { label: "NexusOps", href: "/platform" as const },
    { label: "NexusShield", href: "/platform" as const },
    { label: "Documentation", href: "/platform" as const },
  ],
  Solutions: [
    { label: "Defense", href: "/solutions" as const },
    { label: "Healthcare", href: "/solutions" as const },
    { label: "Finance", href: "/solutions" as const },
    { label: "Energy", href: "/solutions" as const },
  ],
  Company: [
    { label: "About", href: "/about" as const },
    { label: "Customers", href: "/customers" as const },
    { label: "Careers", href: "/careers" as const },
    { label: "Contact", href: "/contact" as const },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { actor } = useActor();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor || !email) return;
    setLoading(true);
    try {
      await actor.addNewsletterSubscriber(email);
      toast.success("Subscribed successfully!");
      setEmail("");
    } catch {
      toast.error("Subscription failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-nexus-surface border-t border-nexus-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-nexus-cyan flex items-center justify-center">
                <span className="text-nexus-dark font-bold text-xs font-mono">
                  N
                </span>
              </div>
              <span className="text-foreground font-display font-bold text-lg">
                Nexus<span className="text-nexus-cyan">AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Building the operating system for the AI era. Data infrastructure,
              intelligence, deployment — at machine speed.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-nexus-border text-foreground placeholder:text-muted-foreground rounded-none text-sm"
                data-ocid="footer.input"
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 rounded-none text-sm font-semibold whitespace-nowrap"
                data-ocid="footer.submit_button"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-nexus-cyan mb-4 font-mono">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      data-ocid="footer.link"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-nexus-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NexusAI. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nexus-cyan hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
