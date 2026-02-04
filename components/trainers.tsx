"use client";

import React from 'react';
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Instagram, Twitter, Linkedin } from "lucide-react"

const TRAINERS = [
  {
    name: "Alex Johnson",
    role: "Head Trainer",
    image: "/trainer1.png",
    specialties: ["Strength Training", "Nutrition"],
  },
  {
    name: "John Doe",
    role: "Yoga Instructor",
    image: "/trainer5.png",
    specialties: ["Vinyasa", "Meditation"],
  },
  {
    name: "Mike Thompson",
    role: "HIIT Specialist",
    image: "/trainer3.png",
    specialties: ["Cardio", "Circuit"],
  },
  {
    name: "Jhon Daniels",
    role: "Nutrition Coach",
    image: "/trainer7.png",
    specialties: ["Meal Planning", "Sports Nutrition"],
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="bg-muted/30 py-24 md:py-32">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl uppercase italic"
          >
            Meet the <span className="text-primary">Elite</span>
          </motion.h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Certified professionals dedicated to your transformation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-none bg-background shadow-xl">
                {/* Image Container with Hover Effect */}
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={trainer.image || "/placeholder.svg"} 
                    alt={trainer.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-4">
                    <div className="flex gap-3 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                        {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                            <Button key={i} size="icon" variant="secondary" className="rounded-full h-9 w-9 hover:bg-primary hover:text-white">
                                <Icon className="h-4 w-4" />
                            </Button>
                        ))}
                    </div>
                  </div>
                </div>

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold uppercase tracking-tighter">
                    {trainer.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-bold uppercase text-xs tracking-widest">
                    {trainer.role}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {trainer.specialties.map((specialty, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="bg-transparent border-primary/30 text-[10px] uppercase font-bold"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full bg-transparent border-2 border-primary text-foreground hover:bg-primary hover:text-white transition-all font-bold uppercase italic">
                    Book a Session
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;