"use client";

import { motion } from "framer-motion";
import { FiShoppingCart, FiTrendingUp, FiUsers, FiSearch, FiDollarSign } from "react-icons/fi";

const services = [
  {
    icon: <FiShoppingCart className="w-8 h-8 text-[#6366F1]" />,
    title: "E-Commerce Store Development",
    description: "We build high-converting E-Commerce stores optimized for scale.",
    features: [
      "Conversion optimized design",
      "Fast checkout flows",
      "Mobile-first UX",
      "High performance architecture"
    ]
  },
  {
    icon: <FiTrendingUp className="w-8 h-8 text-[#22C55E]" />,
    title: "Meta Ads Management",
    description: "We run high-performance ad campaigns across Meta platforms.",
    features: [
      "Audience targeting",
      "Creative testing",
      "Conversion optimization",
      "Scaling winning campaigns"
    ]
  },
  {
    icon: <FiUsers className="w-8 h-8 text-[#6366F1]" />,
    title: "Influencer Marketing",
    description: "We connect brands with influencers from 5K to 200K followers.",
    features: [
      "Influencer discovery",
      "Campaign management",
      "Affiliate promo tracking",
      "ROI optimization"
    ]
  },
  {
    icon: <FiSearch className="w-8 h-8 text-[#22C55E]" />,
    title: "SEO Optimization",
    description: "We ensure your e-commerce store ranks organically on Google.",
    features: [
      "Technical SEO",
      "Product page optimization",
      "Content optimization",
      "Search ranking strategies"
    ]
  },
  {
    icon: <FiDollarSign className="w-8 h-8 text-[#6366F1]" />,
    title: "Data Driven Payment Optimization",
    description: "Using behavioral data of 10Cr+ online users, we optimize checkout flows.",
    features: [
      "Reduce fake COD orders",
      "Push prepaid orders",
      "Use partial COD strategies",
      "Identify high-risk buyers"
    ],
    highlight: true
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Our Growth Engine
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We combine multiple specialized strategies to build a complete, high-performance ecosystem for your brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border ${
                service.highlight 
                  ? "bg-gradient-to-br from-[#6366F1]/10 to-transparent border-[#6366F1]/30 lg:col-span-2 xl:col-span-1" 
                  : "bg-card/30 border-card-border hover:border-card-border"
              } transition-colors group`}
            >
              <div className="w-14 h-14 rounded-xl bg-card border border-card-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 dark:bg-neutral-400 shrink-0" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
