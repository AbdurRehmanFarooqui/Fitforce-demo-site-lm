"use client";

import React from 'react';
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone, Mail, Send } from "lucide-react"
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background overflow-hidden">
            <div className="container px-4">
                <div className="mb-16 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter"
                    >
                        Join the <span className="text-primary">Force</span>
                    </motion.h2>
                    <p className="mt-4 text-muted-foreground text-lg uppercase tracking-widest font-semibold">
                        Ready to start? Get in touch today.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 items-start">
                    {/* Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-white/5 bg-muted/20 backdrop-blur-sm shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold uppercase italic">Send a Message</CardTitle>
                                <CardDescription className="text-gray-400">
                                    We typically respond within 2 hours during business hours.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-primary">First Name</label>
                                            <input
                                                className="w-full bg-background border-white/10 rounded-md p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                placeholder="Enter first name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-primary">Last Name</label>
                                            <input
                                                className="w-full bg-background border-white/10 rounded-md p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                placeholder="Enter last name"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full bg-background border-white/10 rounded-md p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-primary">Message</label>
                                        <textarea
                                            className="w-full bg-background border-white/10 rounded-md p-3 text-sm min-h-[120px] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="How can we help you reach your goals?"
                                        />
                                    </div>
                                    <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase italic tracking-widest text-lg group">
                                        Send Message 
                                        <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Info and Map Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Quick Contact Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: MapPin, label: "Location", val: "123 Fitness St, NY" },
                                { icon: Phone, label: "Call Us", val: "(555) 000-1234" },
                                { icon: Mail, label: "Email", val: "power@fitforce.com" },
                                { icon: Clock, label: "Open 24/7", val: "Members only" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center p-4 bg-muted/30 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
                                    <item.icon className="h-6 w-6 text-primary mr-4 shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</p>
                                        <p className="font-bold text-sm">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Visual Map / Location Preview */}
                        <Card className="border-none overflow-hidden bg-muted/20">
                            <div className="relative h-64 w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="/map-dark.png" // Use a dark-themed map image or static map API
                                    alt="Gym Location"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                            </div>
                            <CardFooter className="p-4 flex justify-between items-center">
                                <span className="text-sm font-bold italic uppercase">Find us on the map</span>
                                <Button variant="link" className="text-primary font-black uppercase p-0 h-auto">
                                    Get Directions
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;