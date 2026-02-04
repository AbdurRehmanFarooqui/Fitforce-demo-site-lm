"use client";

import React from 'react';
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { 
  Dumbbell, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ArrowRight,
  ShieldCheck 
} from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-sm rotate-12 group-hover:rotate-0 transition-transform">
                <Dumbbell className="h-6 w-6 text-white -rotate-12" />
              </div>
              <span className="text-2xl font-black uppercase italic tracking-tighter">
                Fit<span className="text-primary">Force</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">
              Forging elite athletes and healthy lifestyles through science-backed training and a relentless community.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-muted/20 text-muted-foreground hover:bg-primary hover:text-white transition-all"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-white">The Gym</h3>
            <ul className="grid grid-cols-1 gap-3">
              {['Features', 'Classes', 'Trainers', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-white">Resources</h3>
            <ul className="grid grid-cols-1 gap-3">
              {['Blog', 'Fitness Tips', 'Nutrition Guides', 'Workout Videos', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="bg-muted/10 p-6 rounded-2xl border border-white/5">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4 text-white">Stay In the Loop</h3>
            <p className="text-xs text-muted-foreground mb-4">
              Get weekly workout hacks and early access to membership deals.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-black border border-white/10 rounded-lg p-3 text-xs focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase italic text-xs group">
                Subscribe 
                <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            &copy; {currentYear} FitForce Gym. Designed for performance.
          </p>
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Secure Checkout
            </div>
            <div className="flex gap-4 text-[10px] uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;