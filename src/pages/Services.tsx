import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Satellite,
  Mountain,
  Leaf,
  Wheat,
  Building2,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "orbital",
    icon: Satellite,
    title: "Orbital Data Acquisition",
    description: "Multi-sensor satellite imagery acquisition and preprocessing tailored to your specific analytical requirements.",
    whatWeDo: [
      "Acquisition of optical and radar satellite imagery",
      "Atmospheric and geometric corrections",
      "Multi-temporal data stacking and registration",
      "Custom spectral band combinations",
    ],
    outputs: ["Analysis-ready satellite datasets", "Preprocessed image mosaics", "Time-series data cubes"],
    useCases: ["Baseline mapping", "Change detection studies", "Custom monitoring programs"],
  },
  {
    id: "mineral",
    icon: Mountain,
    title: "Mineral Exploration",
    description: "Advanced spectral analysis and geological mapping to identify mineral deposits and prioritize exploration targets.",
    whatWeDo: [
      "Hyperspectral and multispectral mineral mapping",
      "Principal Component Analysis (PCA)",
      "Band ratio techniques for alteration detection",
      "Structural lineament analysis",
    ],
    outputs: ["Mineral probability maps", "Alteration zone delineation", "Target prioritization reports"],
    useCases: ["Greenfield exploration", "Brownfield target generation", "Due diligence assessments"],
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental Monitoring",
    description: "Comprehensive environmental monitoring solutions for deforestation, land degradation, and ecosystem health assessment.",
    whatWeDo: [
      "Deforestation and forest degradation detection",
      "Vegetation health monitoring (NDVI, EVI)",
      "Land cover and land use classification",
      "Carbon stock estimation",
    ],
    outputs: ["Change detection maps", "Environmental impact reports", "Compliance monitoring dashboards"],
    useCases: ["ESG reporting", "Regulatory compliance", "Conservation planning"],
  },
  {
    id: "agricultural",
    icon: Wheat,
    title: "Agricultural Monitoring",
    description: "Precision agriculture solutions leveraging satellite imagery for crop health analysis and yield optimization.",
    whatWeDo: [
      "Crop health monitoring using vegetation indices",
      "Yield prediction and estimation",
      "Irrigation efficiency analysis",
      "Pest and disease early detection",
    ],
    outputs: ["Field health maps", "Yield forecast reports", "Variable rate application zones"],
    useCases: ["Large-scale farm management", "Agricultural insurance", "Supply chain planning"],
  },
  {
    id: "urban",
    icon: Building2,
    title: "Urban & Infrastructure Analysis",
    description: "Urban expansion tracking, infrastructure planning, and comprehensive land use classification services.",
    whatWeDo: [
      "Urban growth monitoring and forecasting",
      "Infrastructure asset mapping",
      "Building footprint extraction",
      "Transportation network analysis",
    ],
    outputs: ["Urban expansion maps", "Infrastructure inventories", "Land use classification maps"],
    useCases: ["Urban planning", "Infrastructure development", "Real estate analysis"],
  },
  {
    id: "geospatial",
    icon: MapPin,
    title: "Geospatial Characterization",
    description: "Comprehensive terrain analysis, digital elevation modeling, and spatial data integration services.",
    whatWeDo: [
      "Digital Elevation Model (DEM) generation",
      "Slope and aspect analysis",
      "Watershed delineation",
      "Multi-source data integration",
    ],
    outputs: ["High-resolution DEMs", "Terrain analysis maps", "Integrated geospatial databases"],
    useCases: ["Site selection", "Hydrological modeling", "Engineering feasibility studies"],
  },
];

const Services = () => {
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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
              Comprehensive geospatial{" "}
              <span className="text-gradient-gold">solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From satellite data acquisition to AI-powered analysis, we deliver actionable insights that drive informed decisions across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20 lg:pb-28">
        <div className="container-main">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-24"
              >
                <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Icon & Title */}
                    <div className="lg:w-1/3">
                      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>

                    {/* Details */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-4">What We Do</h3>
                        <ul className="space-y-3">
                          {service.whatWeDo.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-display font-semibold text-foreground mb-3">Outputs</h3>
                          <ul className="space-y-2">
                            {service.outputs.map((item) => (
                              <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-foreground mb-3">Use Cases</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.useCases.map((item) => (
                              <span
                                key={item}
                                className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-foreground"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container-main text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how our geospatial solutions can address your specific needs.
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

export default Services;
