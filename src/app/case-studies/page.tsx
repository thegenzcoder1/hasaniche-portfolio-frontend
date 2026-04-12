"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/ui/CTASection";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { motion } from "framer-motion";
import Image from "next/image";

const roasImages = [
  { src: "/images/meta/8x_ROAS.JPG", alt: "8x Return on Ad Spend", label: "8× ROAS" },
  { src: "/images/meta/12x_ROAS.JPG", alt: "12x Return on Ad Spend", label: "12× ROAS" },
  { src: "/images/meta/14x_ROAS.JPG", alt: "14x Return on Ad Spend", label: "14× ROAS" },
  { src: "/images/meta/18x_ROAS.JPG", alt: "18x Return on Ad Spend", label: "18× ROAS" },
];

export default function CaseStudiesPage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">

          {/* Page Header */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-card-border text-sm font-medium text-muted-foreground/80 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#6366F1]" />
              Verified Campaign Data
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Meta Advertising Results
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              These are real campaign snapshots from Meta Ads Manager — reflecting the kind of performance that becomes consistent when audience data, creative testing, and funnel strategy align. Results of this nature may be replicable for the right brand.
            </motion.p>
          </div>

          {/* ROAS Section */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-10">
              Return on Ad Spend — Campaign Snapshots
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {roasImages.map((img, index) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-3 border border-neutral-200 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  onClick={() => setLightboxSrc(img.src)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={280}
                    height={200}
                    className="rounded-xl w-full object-cover"
                  />
                  <p className="text-center text-sm font-bold text-neutral-700 mt-2">{img.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Year End Revenue Section */}
          <div className="mb-20">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-10">
              Year End Revenue
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-md max-w-2xl mx-auto"
            >
              <Image
                src="/images/meta/Year_End_Sales.JPG"
                alt="Year End Sales Revenue"
                width={672}
                height={420}
                className="rounded-xl w-full object-cover"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                Aggregated year-end revenue performance tracked via Meta Pixel
              </p>
            </motion.div>
          </div>

          {/* Caption */}
          <p className="text-center text-sm text-muted-foreground italic mt-4 mb-8">
            Direct screenshots taken from Client&apos;s Meta Campaign Dashboard.
          </p>

        </div>

        <ImageLightbox
          src={lightboxSrc ?? ""}
          alt="ROAS Screenshot"
          isOpen={!!lightboxSrc}
          onClose={() => setLightboxSrc(null)}
        />
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
