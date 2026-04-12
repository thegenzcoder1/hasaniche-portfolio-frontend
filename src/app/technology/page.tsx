"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { motion } from "framer-motion";
import { FiDatabase, FiCloudLightning, FiGlobe } from "react-icons/fi";

export default function TechnologyPage() {
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
              Data Intelligence
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              The Technology Stack <br />Behind Our Growth
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              We rely on data intelligence to drive aggressive scale for e-commerce brands. By analyzing millions of user touchpoints, our infrastructure ensures every marketing dollar goes towards actual, delivered revenue.
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-card border border-card-border shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] mb-8">
                <FiDatabase size={28} />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Behavioral Intelligence at Scale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Has A Niche leverages massive behavioral datasets to predict customer purchase intent. Our systems enable us to optimize checkout funnels, identify high-intent buyer profiles, and significantly reduce cash-on-delivery (COD) return rates across your entire catalog.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-3xl bg-card border border-card-border shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] mb-8">
                <FiCloudLightning size={28} />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Real-Time Performance Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We accurately track the ROI of all meta ad campaigns and influencer partnerships. We ensure absolute accuracy in revenue attribution so that your brand only pays for performance that translates to actual bottom-line growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-10 rounded-3xl bg-card border border-card-border shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] mb-8">
                <FiGlobe size={28} />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Strategic Link Building for Organic Reach</h2>
              <p className="text-muted-foreground leading-relaxed">
                High-authority backlinks are one of the strongest signals search engines use to rank pages. We build deliberate, niche-relevant backlink profiles for your brand — earning placements on credible industry sites, creator blogs, and digital publications — so your store climbs organically above competitors and stays there without depending entirely on paid spend.
              </p>
            </motion.div>
          </div>

        </div>
      </main>
      
      <CTASection />
      <Footer />
    </div>
  );
}
