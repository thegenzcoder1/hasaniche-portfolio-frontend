"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  duration?: number;
}

function AnimatedNumber({ end, suffix, label, duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-card/50 border border-card-border backdrop-blur-sm shadow-xl">
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-mono">
        {count}
        <span className="text-[#22C55E]">{suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

export function StatsSection() {
  const stats = [
    { end: 10, suffix: "Cr+", label: "Audience Data Analysed" },
    { end: 200, suffix: "+", label: "Influencers Network" },
    { end: 100, suffix: "+", label: "Campaigns Managed" },
  ];

  return (
    <section className="pt-8 pb-20 border-y border-card-border bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-4"
          >
            Data Intelligence that Drives Results
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We don't guess. We use behavioral data from millions of users to optimize conversions and scale revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AnimatedNumber {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
