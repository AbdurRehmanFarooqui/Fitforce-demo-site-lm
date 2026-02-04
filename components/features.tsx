"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    Clock, 
    Users, 
    Dumbbell, 
    ShieldCheck, 
    Zap, 
    HeartPulse 
} from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
    {
        title: "Modern Equipment",
        description: "State-of-the-art fitness equipment for all your workout needs, regularly maintained and updated.",
        icon: Dumbbell,
    },
    {
        title: "Expert Trainers",
        description: "Certified personal trainers to guide you through your fitness journey with customized workout plans.",
        icon: Users,
    },
    {
        title: "24/7 Access",
        description: "Work out on your schedule with round-the-clock access to our facilities, 365 days a year.",
        icon: Clock,
    },
    {
        title: "Supportive Community",
        description: "Join a supportive community of like-minded individuals who will motivate and inspire you.",
        icon: HeartPulse,
    },
    {
        title: "Clean Facilities",
        description: "Spotlessly clean facilities with regular sanitization to ensure a safe workout environment.",
        icon: ShieldCheck,
    },
    {
        title: "Diverse Classes",
        description: "A wide variety of group fitness classes for all levels, from yoga to high-intensity interval training.",
        icon: Zap,
    },
];

const Features = () => {
    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    // Individual card animation
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        <section id="features" className="bg-muted/50 py-20 md:py-32 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="mb-16 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Why Choose <span className="text-primary">FitForce?</span>
                        </h2>
                        <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
                        <p className="mt-6 max-w-[700px] text-lg text-muted-foreground">
                            We provide the environment, the tools, and the community. You bring the grit. 
                            Together, we achieve the results.
                        </p>
                    </motion.div>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {FEATURES.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="group relative overflow-hidden border-none bg-background shadow-lg transition-all hover:shadow-primary/10 hover:-translate-y-2">
                                {/* Subtle hover gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                
                                <CardHeader>
                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-white">
                                        <feature.icon className="h-7 w-7 transition-transform group-hover:scale-110" />
                                    </div>
                                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
