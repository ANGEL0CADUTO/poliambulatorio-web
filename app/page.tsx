import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import Services from "@/components/Services";
import BikiniPromo from "@/components/BikiniPromo";
import PreFooterCTA from "@/components/PreFooterCTA";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pb-20 md:pb-0">
      <Header />
      <Hero />
      <TrustBar />
      <Features />
      <Services />
      <BikiniPromo />
      <PreFooterCTA />
      <Footer />
      <MobileCTA />
    </main>
  );
}
