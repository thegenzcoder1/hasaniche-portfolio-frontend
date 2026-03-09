"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-card-border text-sm font-medium text-muted-foreground/80 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#6366F1]" />
              Our Expertise
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Comprehensive Growth Services
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              We don&apos;t just run ads or build stores. We architect entire revenue ecosystems designed for predictable scale.
            </motion.p>
          </div>
        </div>

        {/* Detailed Services Section re-using the Home page component but without the top padding */}
        <div className="-mt-12 md:-mt-16">
           <ServicesSection />
        </div>

        {/* Deep Dive into Data Driven Payments */}
        <section className="py-24 bg-background border-y border-card-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-card-border text-sm font-medium text-[#22C55E] mb-6">
                  Unique Offering
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Data-Driven Payment Optimization
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg">
                  <p>
                    COD (Cash on Delivery) returns are the silent killer of e-commerce profitability. We solve this mathematically.
                  </p>
                  <p>
                    Using behavioral data from over <strong>100 million online users</strong>, our proprietary systems analyze checkout flows to predict and prevent non-delivery.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#6366F1]/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
                      </div>
                      <span className="text-foreground">Intelligently push high-intent customers toward prepaid orders.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#6366F1]/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
                      </div>
                      <span className="text-foreground">Implement dynamic Partial COD based on risk scores.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#6366F1]/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
                      </div>
                      <span className="text-foreground">Filter out high-risk and historically fake buyer profiles in real-time.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1]/20 to-[#22C55E]/20 rounded-2xl blur-3xl -z-10" />
                <div className="bg-card border border-card-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#22C55E]/10 to-transparent -z-10" />
                  
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-card-border">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Before Optimization</div>
                      <div className="text-3xl font-bold text-red-400">35% RTO</div>
                    </div>
                    <div className="h-px w-8 bg-neutral-700 mx-4" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">After Has A Niche</div>
                      <div className="text-4xl font-bold text-[#22C55E]">8% RTO</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Prepaid Conversion</span>
                      <span className="text-foreground font-mono">+ 142%</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-[#6366F1]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
