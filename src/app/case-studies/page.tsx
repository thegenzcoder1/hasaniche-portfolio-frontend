"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { motion } from "framer-motion";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-card-border text-sm font-medium text-muted-foreground/80 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#6366F1]" />
              Our Approach
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              How We Tackle <br />E-commerce Challenges
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Every brand faces unique growth barriers. Here&apos;s how we diagnose the most common e-commerce challenges and the solutions we bring to the table — from broken ad funnels to stagnant organic reach.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <CaseStudyCard 
              brand="Apparel Store"
              problem="Meta Ads CPMs were skyrocketing. Conversions plummeted because they lacked authentic, native-looking UGC content to build trust."
              solution="We deploy our extensive influencer network to rapidly generate high-quality UGC — replacing static images with authentic creator reviews to build trust and meaningfully reduce CPA."
              result="-42%"
              resultLabel="Drop in Cost Per Acquisition"
            />
            
            <CaseStudyCard 
              brand="Fitness Equipment"
              problem="Competitor agencies couldn't provide enough influencer volume to saturate the market, leading to ad fatigue and stagnation."
              solution="We leverage our proprietary network of 200+ influencers to flood the timeline with localized, diverse content — achieving massive, un-ignorable brand presence that combats ad fatigue."
              result="12x"
              resultLabel="Increase in Brand Mentions"
            />

            <CaseStudyCard 
              brand="Fashion D2C Brand"
              problem="Failing to scale with basic Meta ads. Zero trust without influencer validation causing a low conversion rate."
              solution="We overhaul the entire E-Commerce store flow to sync with an advanced Meta Ad Funnel, and place multi-tier fashion influencers to drive instant social proof and purchase confidence."
              result="4X"
              resultLabel="Revenue Growth (MoM)"
            />
            
            <CaseStudyCard 
              brand="Premium Beauty Brand"
              problem="Burning cash on top-of-funnel ads without capturing the audience. Failing without credible influencer voices to back the product."
              solution="We build a comprehensive Meta retargeting funnel and engage beauty micro-influencers to authentically review the brand, driving massive trust right through to E-Commerce checkout."
              result="312%"
              resultLabel="Increase in ROAS"
            />
            
            <CaseStudyCard 
              brand="Tech Accessories Store"
              problem="Stagnant organic growth and heavy reliance on increasingly expensive Meta Ads CPMs without a post-click strategy."
              solution="We deploy technical SEO strategies, optimize product PDPs on the E-Commerce website, and leverage YouTube tech reviewers to build an impenetrable content moat for sustained organic growth."
              result="215%"
              resultLabel="Increase in Organic Traffic"
            />

            <CaseStudyCard 
              brand="Home Goods Ecom"
              problem="First time purchases were unprofitable (CPA > AOV). Competitors were winning by using interior design influencers while they relied solely on flat images."
              solution="We integrate subscription logic and post-purchase upsell funnels on the E-Commerce platform, coupled with an Influencer-led Meta Ad whitelisting strategy to maximize order value from day one."
              result="35%"
              resultLabel="Increase in Average Order Value"
            />
          </div>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
