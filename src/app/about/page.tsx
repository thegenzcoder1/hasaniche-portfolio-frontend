"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-card-border text-sm font-medium text-muted-foreground/80 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              Our Vision
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Engineering Digital Commerce Scale
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Has A Niche is a growth-focused digital commerce company born from the frustration of seeing great brands fail due to bad data.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-muted-foreground/80"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p>
                We exist to help ambitious brands scale profitably using performance marketing and data intelligence. 
              </p>
              <p>
                In today&apos;s hyper-competitive e-commerce landscape, simple "creative testing" isn&apos;t enough. The cost of acquisition is rising, while consumer attention is fragmenting. 
              </p>
              <p>
                To consistently win, a brand needs a synchronized engine: a lightning-fast E-Commerce store, pinpoint Meta Ad targeting, authentic Influencer integrations, and a checkout flow that actively prevents fraud.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-card-border p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#6366F1]/10 to-transparent blur-2xl -z-10" />
              <h3 className="text-xl font-bold text-foreground mb-6">Why Brands Choose Us</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-foreground">Full-Stack Capability</h4>
                    <p className="text-sm text-muted-foreground">From code (E-Commerce) to creative (Ads & Influencers).</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E] font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-foreground">Data Superiority</h4>
                    <p className="text-sm text-muted-foreground">Leveraging 10Cr+ user behavioral data points for checkout optimization.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-foreground">Performance Focused</h4>
                    <p className="text-sm text-muted-foreground">We don't care about vanity likes. We care about ROAS and bottom-line revenue.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
