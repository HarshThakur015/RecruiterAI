"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Mehta",
        role: "Founder",
        company: "TechStart Solutions",
        avatar: "RM",
        quote:
            "We went from 6 weeks to hire a developer to just 10 days. The AI screening saved us countless hours and helped us find candidates we would have otherwise missed.",
        rating: 5,
        color: "from-blue-500 to-cyan-500",
    },
    {
        name: "Priya Sharma",
        role: "Head of HR",
        company: "InnovateLabs",
        avatar: "PS",
        quote:
            "RecruiterAI transformed our hiring process. We now process 5x more applications with the same team. The quality of hires has improved dramatically.",
        rating: 5,
        color: "from-purple-500 to-pink-500",
    },
    {
        name: "Amit Kumar",
        role: "CTO",
        company: "ScaleUp Technologies",
        avatar: "AK",
        quote:
            "The automated interview scheduling alone saved us 20 hours per week. Our candidates love the quick response times, and we've seen a 40% improvement in offer acceptance.",
        rating: 5,
        color: "from-orange-500 to-red-500",
    },
];

function TestimonialCard({
    name,
    role,
    company,
    avatar,
    quote,
    rating,
    color,
    index,
}: (typeof testimonials)[0] & { index: number }) {
    return (
        <AnimatedSection delay={index * 0.15}>
            <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-white dark:bg-dark-secondary-bg rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full border border-gray-100 dark:border-gray-700"
            >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-gray-200 dark:text-gray-700">
                    <Quote className="w-12 h-12" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                    {[...Array(rating)].map((_, i) => (
                        <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 relative z-10">
                    "{quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                    <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg`}
                    >
                        {avatar}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                            {name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {role} at {company}
                        </p>
                    </div>
                </div>

                {/* Decorative gradient */}
                <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} rounded-b-3xl`}
                />
            </motion.div>
        </AnimatedSection>
    );
}

export function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-gray-50 dark:bg-dark-secondary-bg/50">
            <Container>
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-light-primary/10 text-light-primary rounded-full text-sm font-medium mb-4">
                        Customer Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Trusted by{" "}
                        <span className="bg-gradient-to-r from-light-primary to-accent-purple bg-clip-text text-transparent">
                            Industry Leaders
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        See how companies are transforming their hiring with RecruiterAI
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} index={index} />
                    ))}
                </div>

                {/* Trust indicators */}
                <AnimatedSection delay={0.5} className="mt-16 text-center">
                    <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">
                        Trusted by 500+ companies worldwide
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {["TechCorp", "StartupX", "InnovateCo", "GrowthLabs", "ScaleForce"].map(
                            (company) => (
                                <span
                                    key={company}
                                    className="text-xl md:text-2xl font-bold text-gray-400 dark:text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-300 cursor-default"
                                >
                                    {company}
                                </span>
                            )
                        )}
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
