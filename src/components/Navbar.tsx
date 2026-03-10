"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ThemeToggle } from "./ui/ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Influencer Network", href: "/influencer-network" },
  { name: "Technology", href: "/technology" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-card-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#6366F1] to-[#22C55E] flex items-center justify-center text-foreground font-bold text-xl shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            H
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-neutral-200 transition-colors">
            Has A Niche
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-foreground relative ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#6366F1] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Book Strategy Call
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="text-muted-foreground/80 hover:text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-card-border shadow-2xl py-4 px-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium p-2 rounded-md ${
                pathname === link.href
                  ? "bg-[#6366F1]/10 text-[#6366F1]"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-card-border flex flex-col gap-4">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full">
                Book Strategy Call
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
