import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
};

export default Index;
