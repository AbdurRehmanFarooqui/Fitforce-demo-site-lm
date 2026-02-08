"use client";
import React, { useState } from 'react'; // 1. Import useState
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence for smooth entry
import { ArrowRight, Trophy, Zap, Target, Dumbbell, ChevronUp, ChevronDown } from "lucide-react";
import { createBrowserClient } from '@supabase/ssr' // Import this
import { toast } from "sonner"; // or your preferred toast library

const PROGRAMS = [
    {
        title: "Body Building",
        description: "Focus on muscle hypertrophy and strength with our elite lifting equipment.",
        image: "/pic3.jpg",
        icon: Trophy,
        time: "60 mins"
    },
    {
        title: "HIIT Blast",
        description: "High-intensity interval training designed to burn maximum calories in minimum time.",
        image: "/pic10.jpg",
        icon: Zap,
        time: "45 mins"
    },
    {
        title: "Strength & Conditioning",
        description: "Develop functional power and agility for peak athletic performance.",
        image: "/pic4.jpg",
        icon: Target,
        time: "50 mins"
    },
    {
        title: "Yoga Flow", // Changed duplicate to show variety
        description: "Improve flexibility, balance, and mental clarity with guided sessions.",
        image: "/pic6.jpg",
        icon: Dumbbell,
        time: "60 mins"
    },
    {
        title: "Powerlifting",
        description: "Master the big three: Squat, Bench, and Deadlift with expert coaching.",
        image: "/pic2.jpg",
        icon: Target,
        time: "75 mins"
    }
];

const Programs = () => {

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUB_KEY!
    );

    const handleJoinClass = async (className: string) => {
        // 1. Check if user is logged in
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            // 2. If not, trigger the login modal (we can use the triggerAuth from your Navbar logic)
            // For now, we'll alert or you can pass the trigger function down as a prop
            toast.error("Please login to join this class");
            return;
        }

        // 3. If logged in, perform the insert
        const { error } = await supabase
            .from('bookings')
            .insert([
                {
                    user_id: user.id,
                    user_email: user.email,
                    class_name: className
                }
            ]);

        if (error) {
            toast.error("Failed to join: " + error.message);
        } else {
            toast.success(`You've joined ${className}! Check your dashboard.`);
        }
    };
    // 2. Setup State
    const [showAll, setShowAll] = useState(false);

    // 3. Determine which programs to display
    const displayedPrograms = showAll ? PROGRAMS : PROGRAMS.slice(0, 3);

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

                    {/* 4. Update the Toggle Button */}
                    <Button
                        variant="link"
                        onClick={() => setShowAll(!showAll)}
                        className="text-primary p-0 h-auto text-lg group decoration-none hover:no-underline"
                    >
                        {showAll ? (
                            <>Show Less <ChevronUp className="ml-2 transition-transform group-hover:-translate-y-1" /></>
                        ) : (
                            <>See All Classes <ChevronDown className="ml-2 transition-transform group-hover:translate-y-1" /></>
                        )}
                    </Button>
                </div>

                {/* 5. Grid with Layout Animation */}
                <motion.div
                    layout // This makes the grid resize smoothly
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {displayedPrograms.map((program, index) => (
                            <motion.div
                                key={program.title} // Use title as key for better animation tracking
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative h-[500px] overflow-hidden rounded-xl bg-muted"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${program.image})` }}
                                />

                                {/* Gradients */}
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
                                        <Button className="w-full bg-white text-black hover:bg-primary hover:text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 uppercase font-black" onClick={() => handleJoinClass(program.title)}>
                                            Join Class
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Programs;