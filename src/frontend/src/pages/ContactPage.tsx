import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { CheckCircle, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const { actor, isFetching } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setLoading(true);
    try {
      await actor.addContactSubmission(
        form.name,
        form.email,
        form.company,
        form.message,
      );
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch shortly.");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
              Contact
            </span>
            <h1 className="text-headline text-5xl md:text-7xl text-foreground mt-4 mb-8 max-w-3xl">
              Let&apos;s build the future together.
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
              Whether you&apos;re ready to deploy or just exploring, our team is
              ready to help you understand what&apos;s possible with NexusAI.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-nexus-border pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-display font-bold text-foreground mb-8">
                Reach out directly.
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={16} className="text-nexus-cyan mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Headquarters
                    </p>
                    <p className="text-sm text-muted-foreground">
                      1 World Trade Center, Suite 8500
                      <br />
                      New York, NY 10007
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={16} className="text-nexus-cyan mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Enterprise Sales
                    </p>
                    <p className="text-sm text-muted-foreground">
                      enterprise@nexusai.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={16} className="text-nexus-cyan mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Phone
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +1 (212) 555-0180
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border border-nexus-border p-6">
                <p className="text-xs font-mono uppercase tracking-widest text-nexus-cyan mb-3">
                  Response time
                </p>
                <p className="text-foreground font-display font-bold text-2xl">
                  &lt; 24 hours
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  For enterprise inquiries
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center gap-6 py-24 text-center border border-nexus-border"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle size={48} className="text-nexus-cyan" />
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      Message received.
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Our team will respond within 24 hours.
                    </p>
                  </div>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-nexus-border text-foreground hover:bg-nexus-surface bg-transparent rounded-none"
                    data-ocid="contact.secondary_button"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-ocid="contact.modal"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-xs font-mono uppercase tracking-widest text-muted-foreground"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Alexandra Chen"
                        className="bg-background border-nexus-border text-foreground placeholder:text-muted-foreground/40 rounded-none focus:border-nexus-cyan focus:ring-nexus-cyan"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs font-mono uppercase tracking-widest text-muted-foreground"
                      >
                        Work Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="alex@enterprise.com"
                        className="bg-background border-nexus-border text-foreground placeholder:text-muted-foreground/40 rounded-none focus:border-nexus-cyan focus:ring-nexus-cyan"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-xs font-mono uppercase tracking-widest text-muted-foreground"
                    >
                      Company *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Apex Defense Systems"
                      className="bg-background border-nexus-border text-foreground placeholder:text-muted-foreground/40 rounded-none focus:border-nexus-cyan focus:ring-nexus-cyan"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-xs font-mono uppercase tracking-widest text-muted-foreground"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your use case and what you're trying to solve..."
                      className="bg-background border-nexus-border text-foreground placeholder:text-muted-foreground/40 rounded-none focus:border-nexus-cyan focus:ring-nexus-cyan resize-none"
                      data-ocid="contact.textarea"
                    />
                  </div>
                  {isFetching && (
                    <p
                      className="text-xs text-muted-foreground font-mono"
                      data-ocid="contact.loading_state"
                    >
                      Connecting to backend...
                    </p>
                  )}
                  <Button
                    type="submit"
                    disabled={loading || isFetching || !actor}
                    className="w-full bg-nexus-cyan text-nexus-dark hover:bg-nexus-cyan/90 font-semibold rounded-none py-6 text-base"
                    data-ocid="contact.submit_button"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="mr-2 animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
