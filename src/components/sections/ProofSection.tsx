import { motion } from "framer-motion";
import { Satellite, Cloud, Cpu, Database, Globe, Layers } from "lucide-react";

const stats = [
  { icon: Satellite, label: "Satellite Platforms", value: "Sentinel, Landsat, ASTER, MODIS" },
  { icon: Cloud, label: "Cloud-Native Workflows", value: "Google Earth Engine, Python" },
  { icon: Cpu, label: "AI & Machine Learning", value: "Advanced spectral analysis" },
];

const techStack = [
  { icon: Globe, name: "Google Earth Engine" },
  { icon: Database, name: "PostGIS" },
  { icon: Layers, name: "QGIS" },
  { icon: Cpu, name: "TensorFlow" },
];

export function ProofSection() {
  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="container-main">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold font-display">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <p className="text-muted-foreground text-sm mb-6">Powered by industry-leading technology</p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border"
              >
                <tech.icon className="w-4 h-4 text-primary" />
                <span className="text-foreground text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
