"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CTASection } from "@/components/ui/CTASection";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />

        {/* Meta Advertising Performance Section */}
        <section className="py-24 bg-white border-t border-card-border">
          <div className="container mx-auto px-4 md:px-6">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-sm font-medium text-neutral-500 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                Results That Speak
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
                Meta Advertising Performance
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                A glimpse into the kind of results that become possible when data-led Meta campaigns are executed with precision. Similar outcomes may be achievable for your brand.
              </p>
            </motion.div>

            {/* ROAS Images */}
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest text-center mb-6">
              Return on Ad Spend — Campaign Snapshots
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { src: "/images/meta/8x_ROAS.JPG", alt: "8x Return on Ad Spend" },
                { src: "/images/meta/12x_ROAS.JPG", alt: "12x Return on Ad Spend" },
                { src: "/images/meta/14x_ROAS.JPG", alt: "14x Return on Ad Spend" },
                { src: "/images/meta/18x_ROAS.JPG", alt: "18x Return on Ad Spend" },
              ].map((img, index) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-2 shadow-sm border border-neutral-200 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  onClick={() => setLightboxSrc(img.src)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={260}
                    height={180}
                    className="rounded-xl object-cover w-full max-w-[260px]"
                  />
                </motion.div>
              ))}
            </div>

            {/* Year End Sales */}
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest text-center mb-6">
              Year End Revenue
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-3 shadow-sm border border-neutral-200 max-w-[520px] mx-auto mb-12"
            >
              <Image
                src="/images/meta/Year_End_Sales.JPG"
                alt="Year End Sales Revenue"
                width={520}
                height={320}
                className="rounded-xl w-full block mx-auto"
              />
            </motion.div>

            {/* Caption */}
            <p className="text-center text-sm text-muted-foreground italic mt-4">
              Direct screenshots taken from Client&apos;s Meta Campaign Dashboard.
            </p>

          </div>
        </section>

        <CTASection />

        <ImageLightbox
          src={lightboxSrc ?? ""}
          alt="ROAS Screenshot"
          isOpen={!!lightboxSrc}
          onClose={() => setLightboxSrc(null)}
        />
      </main>

      <Footer />
    </div>
  );
}
