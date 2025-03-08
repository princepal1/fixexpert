
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServiceSection } from "@/components/ServiceSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BrandsSection } from "@/components/BrandsSection";
import { ContactSection } from "@/components/ContactSection";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <ServiceSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BrandsSection />
        <CallToAction />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
