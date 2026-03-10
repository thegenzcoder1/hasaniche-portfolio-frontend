import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-background border-t border-card-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#6366F1] to-[#22C55E] flex items-center justify-center text-foreground font-bold text-xl">
                H
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Has A Niche
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We scale E-commerce brands using performance marketing, customized E-Commerce stores, and influencer systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-foreground font-semibold">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-[#6366F1] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-[#6366F1] transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-[#6366F1] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-foreground font-semibold">Expertise</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-muted-foreground hover:text-[#6366F1] transition-colors text-sm">E-Commerce Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-[#6366F1] transition-colors text-sm">Meta Ads</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-[#6366F1] transition-colors text-sm">Influencer Marketing</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-[#6366F1] transition-colors text-sm">Payment Optimization</Link></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h4 className="text-foreground font-semibold flex items-center gap-2">
              Ready to Scale?
              <FiArrowUpRight className="text-[#22C55E]" />
            </h4>
            <p className="text-muted-foreground text-sm">
              Book a free strategy session to see how we can optimize your e-commerce growth engine.
            </p>
            <Link href="/contact" className="inline-block px-5 py-3 rounded-md bg-neutral-900 dark:bg-neutral-800 text-white text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors w-full text-center border border-card-border">
              Get Started
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Has A Niche. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
