import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Users,
  Shield,
  Globe,
  Cpu,
  Satellite,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe in the power of geospatial data to solve real-world problems and create positive impact.",
  },
  {
    icon: Users,
    title: "Multidisciplinary",
    description: "Our team combines expertise in remote sensing, geology, data science, and software engineering.",
  },
  {
    icon: Shield,
    title: "Responsible",
    description: "We're committed to ethical use of geotechnology and environmental responsibility in all projects.",
  },
];

const expertise = [
  { icon: Satellite, label: "Remote Sensing" },
  { icon: Globe, label: "Geospatial Analysis" },
  { icon: Cpu, label: "Machine Learning" },
];

const About = () => {
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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
              Pioneering geospatial{" "}
              <span className="text-gradient-gold">intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Nimbus Insights is a geoscience and geotechnology company specializing in remote sensing, geospatial analysis, and applied data science. We transform satellite data into actionable intelligence for decision-makers across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-20 lg:pb-28">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                To democratize access to satellite-derived insights, enabling organizations of all sizes to make data-driven decisions about Earth's resources and environment.
              </p>
              <p className="text-muted-foreground">
                We bridge the gap between complex orbital data and practical applications, delivering clear, actionable intelligence that drives measurable outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Expertise</h2>
              <div className="space-y-4">
                {expertise.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-display font-semibold text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide our work and relationships.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-border rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-main text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to work together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how our expertise can support your next project.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
