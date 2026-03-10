"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiTarget, FiZap, FiBarChart2, FiAward } from "react-icons/fi";

const metrics = [
  { icon: <FiTarget />, title: "Return On Ad Spend (ROAS)", desc: "We optimize for profitable first-purchase ROAS and high LTV." },
  { icon: <FiZap />, title: "Conversion Rate (CVR)", desc: "Fractional improvements in checkout yield massive bottom-line growth." },
  { icon: <FiBarChart2 />, title: "Customer Acquisition Cost (CAC)", desc: "Driving down blended CAC across organic, paid, and influencer channels." },
  { icon: <FiAward />, title: "Revenue Growth", desc: "Our ultimate metric. We win when your top-line revenue scales." }
];

export default function SolutionsPage() {
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
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              The Has A Niche Method
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              The E-commerce Growth Engine
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Most agencies offer fragmented services. We combine Paid Ads, Influencer Marketing, Conversion Optimization, SEO, and Checkout Data into a single, unified growth system.
            </motion.p>
          </div>

          {/* Nano Banana Growth Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-4xl mx-auto mb-24 relative aspect-[21/9] rounded-2xl overflow-hidden border border-[#22C55E]/30 bg-card/50 shadow-[0_0_50px_rgba(34,197,94,0.15)]"
          >
             <Image
              src="/images/growth-focus.png"
              alt="High-end 3D abstract growth chart visualization"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </motion.div>

          {/* Engine Diagram / Workflow visualization */}
          <div className="max-w-5xl mx-auto relative mb-32">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#6366F1] to-transparent -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card/80 border border-card-border backdrop-blur-md p-8 rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366F1]/20 to-transparent border border-[#6366F1]/50 flex items-center justify-center mx-auto mb-6 text-[#6366F1]">
                  <FiUsers size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">1. Traffic Acquisition</h3>
                <p className="text-muted-foreground text-sm">Targeted traffic via Meta Ads, 200+ Influencer Network, and Organic SEO.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card/80 border border-card-border backdrop-blur-md p-8 rounded-2xl mt-8 md:mt-0"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#22C55E]/20 to-transparent border border-[#22C55E]/50 flex items-center justify-center mx-auto mb-6 text-[#22C55E]">
                  <FiShoppingCart size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">2. Store Conversion</h3>
                <p className="text-muted-foreground text-sm">High-speed E-Commerce architecture engineered specifically for maximizing CVR.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-card/80 border border-card-border backdrop-blur-md p-8 rounded-2xl mt-8 md:mt-0"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366F1]/20 to-transparent border border-[#6366F1]/50 flex items-center justify-center mx-auto mb-6 text-foreground">
                  <FiDollarSign size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">3. Revenue Realization</h3>
                <p className="text-muted-foreground text-sm">Payment optimization and COD analytics to ensure orders convert to actual cash.</p>
              </motion.div>
            </div>
          </div>

          {/* Performance Driven Scaling */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Performance Driven Scaling</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metrics.map((metric, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-card-border flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[#6366F1] shrink-0 text-xl">
                    {metric.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{metric.title}</h3>
                    <p className="text-muted-foreground">{metric.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <CTASection />
      <Footer />
    </div>
  );
}

// Icons needed for this specific page that aren't imported from main react-icons
import { FiUsers, FiShoppingCart, FiDollarSign } from "react-icons/fi";
