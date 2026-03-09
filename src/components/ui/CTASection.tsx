"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./Button";
import { FiArrowRight } from "react-icons/fi";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background -z-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22C55E]/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card/50 backdrop-blur-md border border-card-border rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Inner highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-[#22C55E]/5 pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Build Your Growth Engine?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Stop guessing with your e-commerce strategy. Partner with us to leverage data intelligence, high-converting stores, and influencer networks.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="w-full sm:w-auto gap-2">
                Book Strategy Call <FiArrowRight />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
