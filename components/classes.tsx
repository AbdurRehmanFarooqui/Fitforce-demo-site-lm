"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Zap, Target } from "lucide-react";

const PROGRAMS = [
    {
        title: "Body Building",
        description: "Focus on muscle hypertrophy and strength with our elite lifting equipment.",
        image: "/pic3.jpg", // Replace with your paths
        icon: Trophy,
        time: "60 mins"
    },
    {
        title: "HIIT Blast",
        description: "High-intensity interval training designed to burn maximum calories in minimum time.",
        image: "/pic2.jpg",
        icon: Zap,
        time: "45 mins"
    },
    {
        title: "Strength & Conditioning",
        description: "Develop functional power and agility for peak athletic performance.",
        image: "/pic4.jpg",
        icon: Target,
        time: "50 mins"
    }
];

const Programs = () => {
    return (
        <section id="programs" className="py-24 bg-background">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-primary font-bold uppercase tracking-widest mb-2">Our Programs</h2>
                        <h3 className="text-4xl md:text-6xl font-extrabold uppercase leading-none">
                            Push Your <span className="italic">Limits</span>
                        </h3>
                    </div>
                    <Button variant="link" className="text-primary p-0 h-auto text-lg group">
                        See All Classes <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PROGRAMS.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[500px] overflow-hidden rounded-xl bg-muted"
                        >
                            {/* Background Image with Zoom on Hover */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${program.image})` }}
                            />
                            
                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="p-2 bg-primary rounded-lg">
                                        <program.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground/80 bg-primary/20 px-3 py-1 rounded-full backdrop-blur-md">
                                        {program.time}
                                    </span>
                                </div>
                                
                                <h4 className="text-3xl font-bold text-white uppercase mb-2">
                                    {program.title}
                                </h4>
                                
                                <p className="text-gray-300 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    {program.description}
                                </p>

                                <div className="mt-6 overflow-hidden">
                                    <Button className="w-full bg-white text-black hover:bg-primary hover:text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 uppercase font-black">
                                        Join Class
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;