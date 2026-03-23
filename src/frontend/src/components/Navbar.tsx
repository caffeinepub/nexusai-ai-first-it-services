import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Customers", href: "/customers" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-nexus-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          data-ocid="nav.link"
          className="flex items-center gap-2 group"
        >
          <div className="w-7 h-7 bg-nexus-cyan flex items-center justify-center">
            <span className="text-nexus-dark font-bold text-xs font-mono">
              N
            </span>
          </div>
          <span className="text-foreground font-display font-bold text-lg tracking-tight">
            Nexus<span className="text-nexus-cyan">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                data-ocid="nav.link"
                className={`text-sm font-medium tracking-wide transition-colors hover:text-nexus-cyan ${
                  pathname === link.href
                    ? "text-nexus-cyan"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" data-ocid="nav.primary_button">
            <Button className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold text-sm px-6 rounded-none">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-nexus-border">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  data-ocid="nav.link"
                  className="text-sm font-medium text-muted-foreground hover:text-nexus-cyan transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" data-ocid="nav.primary_button">
                <Button className="bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold text-sm w-full rounded-none">
                  Get Started
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
