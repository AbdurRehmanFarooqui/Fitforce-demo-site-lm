"use client";

import React from 'react';
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for casual gym-goers",
    features: ["Access to gym floor", "Locker room access", "Basic orientation", "1 Guest pass/month"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "59",
    description: "The choice of champions",
    features: ["24/7 Gym access", "All group classes", "Personalized workout plan", "Unlimited guest passes", "Sauna & Steam room"],
    highlight: true,
  },
  {
    name: "Elite",
    price: "99",
    description: "For those who want it all",
    features: ["Private coaching (2/mo)", "Nutrition planning", "Free supplements discount", "Recovery zone access", "Free laundry service"],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full z-0" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-[0.2em] mb-4">Pricing Plans</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic">Choose Your <span className="text-primary">Power</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative flex flex-col h-full transition-all duration-300 ${
                plan.highlight 
                ? "border-primary border-2 shadow-[0_0_30px_rgba(239,68,68,0.2)] scale-105 z-20" 
                : "bg-muted/30 hover:border-gray-400"
              }`}>
                
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary hover:bg-primary text-white px-4 py-1 uppercase font-bold tracking-wider">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-bold uppercase">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-black italic">$</span>
                    <span className="text-6xl font-black italic">{plan.price}</span>
                    <span className="text-muted-foreground font-medium">/month</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="flex-grow pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className={`p-1 rounded-full ${plan.highlight ? "bg-primary" : "bg-muted-foreground/20"}`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm md:text-base text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pb-8 pt-6">
                  <Button 
                    className={`w-full h-14 text-lg font-black uppercase transition-all ${
                      plan.highlight 
                      ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" 
                      : "bg-gray-100 text-black hover:bg-gray-300"
                    }`}
                  >
                    Select Plan
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;