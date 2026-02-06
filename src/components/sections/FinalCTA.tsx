"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />

                {/* Animated particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <Container className="relative z-10">
                <AnimatedSection className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-white/90 text-sm">
                            Join 500+ companies hiring smarter with AI
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Hire{" "}
                        <span className="bg-gradient-to-r from-accent-blue via-accent-lavender to-accent-purple bg-clip-text text-transparent">
                            Better, Faster?
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Transform your hiring process today. Start your free trial and see
                        the difference AI-powered recruiting can make.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Button size="lg" className="w-full sm:w-auto group">
                            Start Free Trial
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outlineWhite"
                            size="lg"
                            className="w-full sm:w-auto"
                        >
                            <Calendar className="mr-2 w-5 h-5" />
                            Schedule Demo
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>14-day free trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
