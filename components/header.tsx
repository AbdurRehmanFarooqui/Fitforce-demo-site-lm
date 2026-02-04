"use client";

import React, { useState, useEffect } from 'react';
import { ThemeToggle } from "@/components/theme-toggle"
import { Dumbbell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Programs", href: "#programs" }, // Updated to match your previous sections
        { name: "Trainers", href: "#trainers" },
        { name: "Pricing", href: "#pricing" },
        { name: "Reviews", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header 
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                isScrolled 
                ? "bg-background/80 backdrop-blur-xl border-b border-white/10 py-3" 
                : "bg-transparent py-5"
            }`}
        >
            <div className="container flex items-center justify-between px-4">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-1 rounded-sm transition-transform group-hover:rotate-12">
                        <Dumbbell className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl font-black uppercase italic tracking-tighter">
                        Fit<span className="text-primary">Force</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className="text-[11px] font-black uppercase tracking-[0.2em] transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <div className="hidden sm:block">
                        <ThemeToggle />
                    </div>
                    
                    {/* <Button variant="ghost" className="hidden md:flex text-xs font-bold uppercase italic tracking-widest">
                        Log In
                    </Button> */}
                    
                    <Button className="relative bg-primary hover:bg-primary/90 text-white font-black uppercase italic tracking-widest px-6 group overflow-hidden">
                        <span className="relative z-10">Join Now</span>
                        <motion.div 
                            className="absolute inset-0 bg-white/20"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                    </Button>

                    {/* Mobile Toggle */}
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-[64px] z-40 bg-background border-t border-white/5 lg:hidden overflow-hidden"
                    >
                        <nav className="flex flex-col items-center justify-center h-full gap-8 p-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link 
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl font-black uppercase italic tracking-tighter hover:text-primary"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;