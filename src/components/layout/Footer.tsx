import { Link } from "react-router-dom";
import { Satellite, Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Orbital Data Acquisition", path: "/services#orbital" },
    { name: "Mineral Exploration", path: "/services#mineral" },
    { name: "Environmental Monitoring", path: "/services#environmental" },
    { name: "Agricultural Analysis", path: "/services#agricultural" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">N</span>
              </div>
              <span className="font-display font-semibold text-xl text-foreground">
                Nimbus<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Turning orbital data into decisions. Geospatial analytics and AI solutions for mining, environment, and land analysis.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">contact@nimbusinsights.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">São Paulo, Brazil</span>
              </li>
              <li className="flex items-start gap-3">
                <Satellite size={18} className="text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">Orbiting 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nimbus Insights. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
