import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import FeaturesSection from "@/components/FeaturesSection";
import IndustriesSection from "@/components/IndustriesSection";
import HowItWorks from "@/components/HowItWorks";
import AIDemo from "@/components/AIDemo";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <IndustriesSection />
        <HowItWorks />
        <AIDemo />
        <BenefitsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
