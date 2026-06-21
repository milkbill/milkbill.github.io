import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ScrollStory } from "@/components/sections/scroll-story";
import { BentoFeatures } from "@/components/sections/bento-features";
import { AppShowcase } from "@/components/sections/app-showcase";
import { WhyMilkBill } from "@/components/sections/why-milk-bill";
import { PrivacySection } from "@/components/sections/privacy-section";
import { FAQ } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollStory />
        <BentoFeatures />
        <AppShowcase />
        <WhyMilkBill />
        <PrivacySection />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
