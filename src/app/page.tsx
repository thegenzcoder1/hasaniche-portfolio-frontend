import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CTASection } from "@/components/ui/CTASection";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        
        {/* Featured Case Studies Section on Home Page */}
        <section className="py-24 bg-background border-t border-card-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Proven Results</h2>
                <p className="text-lg text-muted-foreground">
                  See how we&apos;ve transformed brands from struggling with ad spend to highly profitable e-commerce machines.
                </p>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-[#6366F1] hover:text-foreground font-medium transition-colors">
                View All Case Studies <FiArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CaseStudyCard 
                brand="Fashion D2C Brand"
                problem="Low sales despite high ad spend and poor conversion rate on store."
                solution="E-Commerce store redesign for performance, Meta ads optimization, and targeted Influencer campaigns."
                result="4X"
                resultLabel="Revenue Growth"
              />
              <CaseStudyCard 
                brand="Beauty Brand"
                problem="Extremely high COD return rate killing profitability and logistics costs."
                solution="Implemented Partial COD system and optimized checkout behavioral flows using our 10Cr+ user data."
                result="60%"
                resultLabel="Reduction in COD returns"
              />
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
