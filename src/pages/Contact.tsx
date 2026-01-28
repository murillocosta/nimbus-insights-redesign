import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  company: z.string().trim().max(100, "Company name is too long").optional(),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent!", {
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", company: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
              Let's talk about your{" "}
              <span className="text-gradient-gold">project</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or ready to start a project? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 lg:pb-28">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className={errors.company ? "border-destructive" : ""}
                    />
                    {errors.company && <p className="text-destructive text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>

                <Button variant="gold" size="lg" type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-2xl p-8 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Quick Response</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  We typically respond within 24 hours on business days. For urgent inquiries, please mention it in your message.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Email</h4>
                    <p className="text-muted-foreground text-sm">contact@nimbusinsights.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Location</h4>
                    <p className="text-muted-foreground text-sm">São Paulo, Brazil</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Phone</h4>
                    <p className="text-muted-foreground text-sm">Available upon request</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
