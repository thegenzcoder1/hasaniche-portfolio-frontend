"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiTrendingUp } from "react-icons/fi";

export default function InfluencerNetworkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-card-border text-sm font-medium text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#6366F1]" />
              Performance Army
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Influencer Marketing That <br /><span className="text-[#6366F1]">Actually Drives Sales</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Stop paying for vanity metrics. We leverage a proprietary network of 200+ influencers across multiple niches, mapped directly to revenue performance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-card-border text-center shadow-md"
            >
              <div className="text-4xl font-bold text-foreground mb-2">200+</div>
              <div className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Active Creators</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#6366F1]/10 to-transparent border border-[#6366F1]/30 text-center shadow-md"
            >
              <div className="text-4xl font-bold text-[#6366F1] mb-2">High ROI</div>
              <div className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Conversion Optimized</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-card border border-card-border text-center shadow-md"
            >
              <div className="text-4xl font-bold text-[#22C55E] mb-2">100%</div>
              <div className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Performance Driven</div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto mb-24 space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">What We Deliver</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-card-border shadow-md">
                <FiUsers className="text-[#6366F1] w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">Vetted Creator Network</h3>
                <p className="text-muted-foreground">We carefully match your brand with high-performing influencers ranging from micro-creators to established industry voices, ensuring perfect brand alignment and audience fit.</p>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-card-border shadow-md">
                <FiTrendingUp className="text-[#22C55E] w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">Revenue-Focused Campaigns</h3>
                <p className="text-muted-foreground">We manage every aspect of the campaign to ensure it drives highly targeted traffic. Our focus is entirely on converting that traffic into actual cash in the bank.</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-2xl bg-card border border-card-border shadow-lg">
            <FiAward className="mx-auto text-[#6366F1] w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Scalable Growth</h3>
            <p className="text-muted-foreground leading-relaxed">
              We don&apos;t just run one-off campaigns. By continuously analyzing performance and doubling down on winning partnerships, we create a predictable, scalable affiliate ecosystem that constantly fuels your brand&apos;s growth.
            </p>
          </div>
        </div>
      </main>
      
      <CTASection />
      <Footer />
    </div>
  );
}
