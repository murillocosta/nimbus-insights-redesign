import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import caseStudyMineral from "@/assets/case-study-mineral.jpg";
import caseStudyEnvironment from "@/assets/case-study-environment.jpg";
import caseStudyAgriculture from "@/assets/case-study-agriculture.jpg";

export const caseStudies = [
  {
    id: "lithium-exploration-atacama",
    image: caseStudyMineral,
    title: "Lithium Exploration in Atacama Desert",
    description: "Using ASTER multispectral data and machine learning to identify lithium-bearing evaporite deposits across 2,500 km² of the Chilean Atacama.",
    tags: ["ASTER", "Machine Learning", "Spectral Analysis", "Mining"],
  },
  {
    id: "amazon-deforestation-monitoring",
    image: caseStudyEnvironment,
    title: "Amazon Deforestation Monitoring System",
    description: "Real-time deforestation detection system using Sentinel-2 time series and automated change detection algorithms.",
    tags: ["Sentinel-2", "GEE", "Change Detection", "NDVI"],
  },
  {
    id: "precision-agriculture-soybean",
    image: caseStudyAgriculture,
    title: "Precision Agriculture for Soybean Farms",
    description: "Crop health monitoring and yield prediction using multitemporal satellite imagery and vegetation indices.",
    tags: ["Sentinel-2", "NDVI", "Yield Prediction", "Agriculture"],
  },
];

export function FeaturedCaseStudies() {
  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Case Studies</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Real results, proven outcomes
          </h2>
          <p className="text-muted-foreground">
            See how our geospatial solutions have delivered measurable impact for clients across industries.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/case-studies">
            <Button variant="gold-outline" size="lg">
              View all case studies
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
