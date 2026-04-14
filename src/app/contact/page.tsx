"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FiMail, FiMapPin, FiPhone, FiMessageSquare } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
             
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                  Let&apos;s discuss your growth strategy.
                </h1>
                <p className="text-lg text-muted-foreground">
                  Ready to stop guessing and start scaling? Fill out the form to book a deep-dive strategy session with our team.
                </p>
              </div>
              
              <div className="space-y-6 pt-8 border-t border-card-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center text-[#6366F1] shrink-0">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email Us</h4>
                    <a href="mailto:business@hasaniche.com?subject=Product Growth" className="text-lg text-foreground hover:text-[#6366F1] transition-colors">business@hasaniche.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center text-[#22C55E] shrink-0">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Call Us</h4>
                    <a href="tel:+919345422527" className="text-lg text-foreground hover:text-[#22C55E] transition-colors">+91 93454 22527</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center text-[#22C55E] shrink-0">
                    <FiMessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">WhatsApp</h4>
                    <a href="https://wa.me/919345422527" target="_blank" rel="noopener noreferrer" className="text-lg text-foreground hover:text-[#22C55E] transition-colors">+91 93454 22527</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card/50 backdrop-blur-md border border-card-border p-8 rounded-3xl relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#6366F1]/10 to-transparent blur-3xl -z-10" />
              
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = Object.fromEntries(formData.entries());
                  
                  const subject = encodeURIComponent("Product Growth Inquiry");
                  const body = encodeURIComponent(
                    `Name: ${data.name}\n` +
                    `Email: ${data.email}\n` +
                    `Phone: ${data.phone}\n` +
                    `Brand: ${data.brand}\n` +
                    `Revenue: ${data.revenue}\n\n` +
                    `Message:\n${data.message}`
                  );
                  
                  window.location.href = `mailto:business@hasaniche.com?subject=${subject}&body=${body}`;
                }} 
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    id="name" 
                    className="w-full bg-card border border-card-border focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] rounded-lg px-4 py-3 text-foreground outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1.5">Business Email</label>
                    <input 
                      name="email"
                      type="email" 
                      id="email" 
                      className="w-full bg-card border border-card-border focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] rounded-lg px-4 py-3 text-foreground outline-none transition-all"
                      placeholder="john@yourbrand.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1.5">Phone Number</label>
                    <input 
                      name="phone"
                      type="tel" 
                      id="phone" 
                      className="w-full bg-card border border-card-border focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] rounded-lg px-4 py-3 text-foreground outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="brand" className="block text-sm font-medium text-muted-foreground mb-1.5">Brand Name</label>
                    <input 
                      name="brand"
                      type="text" 
                      id="brand" 
                      className="w-full bg-card border border-card-border focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] rounded-lg px-4 py-3 text-foreground outline-none transition-all"
                      placeholder="Acme Corp"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium text-muted-foreground mb-1.5">Monthly Revenue</label>
                    <select 
                      name="revenue"
                      id="revenue" 
                      className="w-full bg-card border border-card-border focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] rounded-lg px-4 py-3 text-foreground outline-none transition-all appearance-none"
                    >
                      <option value="">Select Range</option>
                      <option value="Under 10L">Under 10L</option>
                      <option value="10L - 50L">10L - 50L</option>
                      <option value="50L - 2Cr">50L - 2Cr</option>
                      <option value="2Cr+">2Cr+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">How can we help?</label>
                  <textarea 
                    name="message"
                    id="message" 
                    rows={4}
                    className="w-full bg-card border border-card-border focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] rounded-lg px-4 py-3 text-foreground outline-none transition-all resize-none"
                    placeholder="Tell us about your current challenges..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full mt-4 !h-14 text-lg">
                  Send Message
                </Button>
              </form>
            </motion.div>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
