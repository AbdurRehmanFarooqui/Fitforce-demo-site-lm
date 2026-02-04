"use client";

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Jennifer K.",
    role: "Member for 6 months",
    image: "/user1.jpg",
    text: "I've been a member for 6 months and lost 30 pounds! The trainers are amazing and the community keeps me motivated.",
    rating: 5,
  },
  {
    name: "Robert M.",
    role: "Member for 2 years",
    image: "/user2.jpg",
    text: "After trying several gyms, FitForce is by far the best. The equipment is top-notch and the 24/7 access fits perfectly with my busy schedule.",
    rating: 5,
  },
  {
    name: "Lisa T.",
    role: "Member for 1 year",
    image: "/user3.jpg",
    text: "The yoga classes have completely transformed my flexibility and reduced my stress levels. I look forward to them every week!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-background py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Testimonials
          </motion.h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-none">
            Real Results, <span className="text-primary">Real People</span>
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-white/5 bg-muted/20 backdrop-blur-sm relative overflow-hidden group">
                {/* Large Background Quote Icon */}
                <Quote className="absolute -top-4 -right-4 h-24 w-24 text-primary/10 transition-colors group-hover:text-primary/20" />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/50 p-1">
                      <div className="relative h-full w-full overflow-hidden rounded-full">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold uppercase tracking-tighter">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-xs text-primary font-semibold uppercase italic">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative">
                  <div className="flex mb-4 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 h-12 font-bold uppercase"
          >
            View All Transformation Stories
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;