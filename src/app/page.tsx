import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TickerBar } from "@/components/TickerBar";
import { ProblemSection } from "@/components/ProblemSection";
import { SystemSection } from "@/components/SystemSection";
import { ValuesSection } from "@/components/ValuesSection";
import { AudienceSection } from "@/components/AudienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LogoCloudSection } from "@/components/LogoCloudSection";
import { QuoteSection } from "@/components/QuoteSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TickerBar />
        <ProblemSection />
        <SystemSection />
        <ValuesSection />
        <AudienceSection />
        <TestimonialsSection />
        <LogoCloudSection />
        <QuoteSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
