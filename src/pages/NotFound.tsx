import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl mx-auto"
          >
            <div className="text-8xl font-display font-bold text-gradient-gold mb-4">404</div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Page not found
            </h1>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/">
                <Button variant="gold" size="lg">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              <Button variant="gold-outline" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
