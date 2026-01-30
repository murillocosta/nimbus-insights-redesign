import { motion } from "framer-motion";

// Placeholder logos - replace with actual client/partner logos
const clients = [
  { name: "Cliente 1", placeholder: true },
  { name: "Cliente 2", placeholder: true },
  { name: "Cliente 3", placeholder: true },
  { name: "Cliente 4", placeholder: true },
  { name: "Cliente 5", placeholder: true },
];

export function TrustedBy() {
  return (
    <section className="py-12 border-b border-border bg-card/50">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
            Parceiros & Clientes
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              {client.placeholder ? (
                <div className="h-8 w-24 md:w-28 bg-muted/50 rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground/60 font-medium">
                    Logo
                  </span>
                </div>
              ) : (
                <img 
                  src={""} 
                  alt={client.name}
                  className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
