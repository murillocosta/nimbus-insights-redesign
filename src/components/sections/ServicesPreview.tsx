import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { motion } from "framer-motion";
import { 
  Satellite, 
  Mountain, 
  Leaf, 
  Wheat, 
  Building2, 
  MapPin,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Satellite,
    title: "Orbital Data Acquisition",
    description: "Multi-sensor satellite imagery acquisition and preprocessing for your specific analytical needs.",
  },
  {
    icon: Mountain,
    title: "Mineral Exploration",
    description: "Spectral analysis and geological mapping to identify mineral deposits and exploration targets.",
  },
  {
    icon: Leaf,
    title: "Environmental Monitoring",
    description: "Deforestation tracking, land degradation assessment, and ecosystem health analysis.",
  },
  {
    icon: Wheat,
    title: "Agricultural Monitoring",
    description: "Crop health analysis, yield prediction, and precision agriculture solutions.",
  },
  {
    icon: Building2,
    title: "Urban & Infrastructure",
    description: "Urban expansion tracking, infrastructure planning, and land use classification.",
  },
  {
    icon: MapPin,
    title: "Geospatial Characterization",
    description: "Comprehensive terrain analysis, DEM generation, and spatial data integration.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive geospatial solutions
          </h2>
          <p className="text-muted-foreground">
            From satellite data acquisition to AI-powered analysis, we deliver actionable insights for your projects.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/services">
            <Button variant="gold-outline" size="lg">
              See all services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
