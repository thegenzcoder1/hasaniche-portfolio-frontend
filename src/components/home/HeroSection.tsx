"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { FiArrowRight, FiPlayCircle } from "react-icons/fi";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#22C55E]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-card-border text-sm font-medium text-muted-foreground/80 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            Empowering 100+ Brands Worldwide
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            Scale Your D2C E-Commerce Brand With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#22C55E]">
              Audience Data, Influencers & Performance Marketing
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We build high-converting E-Commerce stores, run Meta ads, manage influencer marketing campaigns, and optimize your sales pipeline using behavioral data.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/services">
              <Button size="lg" variant="primary" className="w-full sm:w-auto gap-2">
                Start Scaling <FiArrowRight />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                <FiPlayCircle /> Book Strategy Call
              </Button>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
