"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiTrendingUp } from "react-icons/fi";

interface CaseStudyProps {
  id?: string;
  brand: string;
  problem: string;
  solution: string;
  result: string;
  resultLabel?: string;
}

export function CaseStudyCard({ brand, problem, solution, result, resultLabel = "Revenue Growth" }: CaseStudyProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl bg-card border border-card-border p-8 overflow-hidden hover:border-[#6366F1]/50 transition-colors"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6366F1]/10 to-transparent blur-2xl -z-10 group-hover:from-[#6366F1]/20 transition-all duration-500" />
      
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{brand}</h3>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-muted-foreground/80 text-xs font-medium rounded-md">
            Case Study
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-muted-foreground group-hover:text-white group-hover:bg-[#6366F1] transition-colors">
          <FiArrowUpRight size={20} />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">The Problem</h4>
          <p className="text-muted-foreground/80">{problem}</p>
        </div>
        
        <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />
        
        <div>
          <h4 className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider mb-2">Our Solution</h4>
          <p className="text-muted-foreground/80">{solution}</p>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-card-border flex items-end justify-between">
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">{resultLabel}</h4>
          <div className="text-4xl font-bold text-foreground flex items-center gap-2">
            <FiTrendingUp className="text-[#22C55E]" />
            {result}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
