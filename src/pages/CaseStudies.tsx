import { Layout } from "@/components/layout/Layout";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/components/sections/FeaturedCaseStudies";
import caseStudyMineral from "@/assets/case-study-mineral.jpg";
import caseStudyEnvironment from "@/assets/case-study-environment.jpg";
import caseStudyAgriculture from "@/assets/case-study-agriculture.jpg";

// Extended case studies for the full page
const allCaseStudies = [
  ...caseStudies,
  {
    id: "iron-ore-mapping-carajas",
    image: caseStudyMineral,
    title: "Iron Ore Deposit Mapping in Carajás",
    description: "High-resolution spectral analysis using Landsat and Sentinel-2 data to map iron ore formations and support mining operations planning.",
    tags: ["Landsat", "Sentinel-2", "Band Ratios", "Mining"],
  },
  {
    id: "wetland-monitoring-pantanal",
    image: caseStudyEnvironment,
    title: "Wetland Monitoring in Pantanal",
    description: "Multi-temporal analysis of seasonal flooding patterns and vegetation dynamics in the world's largest tropical wetland.",
    tags: ["MODIS", "SAR", "Flood Mapping", "Conservation"],
  },
  {
    id: "urban-expansion-sao-paulo",
    image: caseStudyAgriculture,
    title: "Urban Expansion Analysis - São Paulo Metro",
    description: "Long-term urban growth monitoring and land use change detection for metropolitan planning and infrastructure development.",
    tags: ["Landsat", "Classification", "Urban Planning", "Time Series"],
  },
];

const CaseStudies = () => {
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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Case Studies</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
              Real results, proven{" "}
              <span className="text-gradient-gold">outcomes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore how our geospatial analytics solutions have delivered measurable impact for clients across mining, environment, and agriculture sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCaseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                id={study.id}
                image={study.image}
                title={study.title}
                description={study.description}
                tags={study.tags}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container-main text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Have a similar project in mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can deliver similar results for your organization.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl">
              Request a Call
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
