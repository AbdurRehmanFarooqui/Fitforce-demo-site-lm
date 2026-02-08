"use client";

import React, { useState, useEffect } from 'react';
import { ThemeToggle } from "@/components/theme-toggle"
import { Dumbbell, Menu, X, LogOut, LayoutDashboard } from "lucide-react" // Added icons
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { AuthModal } from "@/components/auth-modal"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useAuthStore } from "@/hooks/use-auth-store"
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";

const Navbar = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isOpen, view, closeModal } = useAuthStore()
    const { user, supabase } = useUser()
    const openAuth = useAuthStore((state) => state.openModal);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [user]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/'); // Redirect to home after sign out
    };

    const navLinks = [
        { name: "Home", href: "/#home" },
        { name: "Programs", href: "/#programs" },
        { name: "Trainers", href: "/#trainers" },
        { name: "Pricing", href: "/#pricing" },
        { name: "Reviews", href: "/#testimonials" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-xl border-b border-white/10 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <AuthModal
                isOpen={isOpen}
                onClose={closeModal}
                initialTab={view}
            />
            <div className="container flex items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-1 rounded-sm transition-transform group-hover:rotate-12">
                        <Dumbbell className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl font-black uppercase italic tracking-tighter">
                        Fit<span className="text-primary">Force</span>
                    </span>
                </Link>

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

                <div className="flex items-center gap-3">
                    <div className="hidden sm:block">
                        <ThemeToggle />
                    </div>

                    {/* 2. Conditional Rendering Based on Auth */}
                    {!user ? (
                        <>
                            <Button
                                variant="ghost"
                                className="hidden md:flex text-xs font-bold uppercase italic tracking-widest"
                                onClick={() => openAuth("login")}
                            >
                                Log In
                            </Button>

                            <Button
                                className="relative bg-primary hover:bg-primary/90 text-white font-black uppercase italic tracking-widest px-6 group overflow-hidden"
                                onClick={() => openAuth("signup")}
                            >
                                <span className="relative z-10">Join Now</span>
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                            </Button>
                        </>
                    ) : (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                                    <Avatar className="h-10 w-10 border-2 border-primary">
                                        <AvatarFallback className="bg-primary text-white font-bold">
                                            {user.email?.charAt(0).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none italic uppercase">Member</p>
                                        <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/dashboard" className="cursor-pointer">
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        <span>Dashboard</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-500 cursor-pointer" onClick={handleSignOut}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}

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
            {/* ... Mobile Menu Logic (Same as yours) ... */}
        </header>
    );
}

export default Navbar;