"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { useAuthStore } from "@/hooks/use-auth-store";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";

const CTA = () => {
    const openAuth = useAuthStore((state) => state.openModal);
    const router = useRouter();
    const { user } = useUser();
    
    const handleAction = () => {
        if (!user) {
            // If not logged in, trigger global signup modal
            openAuth("signup");
        } else {
            // If logged in, send them straight to the dashboard to start
            router.push('/dashboard');
        }
    };

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-primary">
            {/* Background Kinetic Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -left-10 top-0 h-full w-32 bg-white skew-x-[-20deg] animate-pulse" />
                <div className="absolute right-20 bottom-0 h-full w-64 bg-black skew-x-[-20deg]" />
            </div>

            {/* Subtle Grit Texture Overlay */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-black uppercase tracking-widest text-white backdrop-blur-md">
                        <Zap className="h-4 w-4 fill-white" />
                        Limited Time Offer
                    </div>

                    <h2 className="mb-8 text-5xl font-black uppercase italic leading-[0.85] tracking-tighter text-white sm:text-7xl md:text-9xl">
                        Ready to <br />
                        <span className="text-black">Transform?</span>
                    </h2>

                    <p className="mx-auto mb-10 max-w-xl text-lg font-medium text-white/90 md:text-xl">
                        Join <span className="font-bold">FitForce</span> today and claim your free 7-day all-access pass. Start your evolution with no strings attached.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md">
                        <Button
                            size="lg"
                            className="h-16 flex-1 bg-black text-white hover:bg-black/80 text-xl font-black uppercase italic tracking-tighter transition-transform hover:scale-105"
                            onClick={handleAction}
                        >
                            Start Free Trial
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-16 flex-1 border-white text-white hover:bg-white hover:text-primary text-xl font-black uppercase italic tracking-tighter transition-all"
                            onClick={handleAction}
                        >
                            Schedule a Tour
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CTA;