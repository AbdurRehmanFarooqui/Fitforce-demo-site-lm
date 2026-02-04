"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
    // Animation variants for cleaner DX
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section id="home" className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/about-gym3.jpg"
                    alt="Gym background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Dual Overlay: Darkening + Gradient for text contrast */}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="max-w-3xl"
                >
                    {/* Badge Interaction */}
                    <motion.div variants={fadeInUp}>
                        <Badge
                            variant="secondary"
                            className="mt-16 mb-4 px-4 py-1 text-sm font-medium bg-primary/90 text-primary-foreground hover:bg-primary uppercase tracking-wider"
                        >
                            New Member Special: 50% Off
                        </Badge>
                    </motion.div>

                    {/* Main Title with Staggered Words (Optional improvement) */}
                    <motion.h1
                        variants={fadeInUp}
                        className="mb-6 text-5xl font-extrabold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl"
                    >
                        Transform Your <span className="text-primary italic">Body</span>, <br />
                        Transform Your Life
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="mb-8 max-w-[600px] text-lg text-gray-300 md:text-xl leading-relaxed"
                    >
                        Join FitForce Gym today. Access world-class equipment,
                        expert coaching, and a community that pushes you to be your absolute best.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        <Button
                            size="lg"
                            className="group h-14 px-8 text-lg font-bold transition-all hover:scale-105 active:scale-95"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-lg font-bold text-foreground border-white/40 backdrop-blur-sm hover:bg-foreground hover:text-background transition-all hover:scale-105"
                        >
                            <Play className="mr-2 h-5 w-5 fill-current" />
                            View Plans
                        </Button>
                    </motion.div>

                    {/* Trust Indicators / Stats */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8"
                    >
                        <div>
                            <p className="text-2xl font-bold text-white">500+</p>
                            <p className="text-sm text-gray-400">Members</p>
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <div>
                            <p className="text-2xl font-bold text-white">20+</p>
                            <p className="text-sm text-gray-400">Expert Coaches</p>
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <div>
                            <p className="text-2xl font-bold text-white">24/7</p>
                            <p className="text-sm text-gray-400">Gym Access</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle bottom fade to transition to the next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/20 to-transparent" />
        </section>
    );
}

export default Hero;