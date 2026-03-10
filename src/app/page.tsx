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
                brand="Apparel Store"
                problem="Meta Ads CPMs were skyrocketing. Conversions plummeted because they lacked authentic, native-looking UGC content to build trust."
                solution="We deployed our extensive influencer network to rapidly generate high-quality UGC. Replacing static images with authentic creator reviews slashed CPA."
                result="-42%"
                resultLabel="Drop in Cost Per Acquisition"
              />
              <CaseStudyCard 
                brand="Fitness Equipment"
                problem="Competitor agencies couldn't provide enough influencer volume to saturate the market, leading to ad fatigue and stagnation."
                solution="Leveraged our proprietary network of 200+ micro-influencers to flood the timeline with localized, diverse content, achieving massive, un-ignorable brand presence."
                result="12x"
                resultLabel="Increase in Brand Mentions"
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
