import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ProofSection } from "@/components/sections/ProofSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedCaseStudies } from "@/components/sections/FeaturedCaseStudies";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustedBy />
      <ProofSection />
      <ServicesPreview />
      <FeaturedCaseStudies />
      <CTASection />
    </Layout>
  );
};

export default Index;
