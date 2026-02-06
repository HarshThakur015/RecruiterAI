"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const conversationBubbles = [
    {
        position: "top-left",
        name: "Sarah K.",
        role: "Founder at TechStart",
        quote:
            "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent.",
        delay: 0,
    },
    {
        position: "top-right",
        name: "Rahul M.",
        role: "Hiring Manager at GrowthCo",
        quote:
            "Posted on LinkedIn. Got 200 applications. Skimmed 20. Hired on gut feeling. They quit in 2 months.",
        delay: 1.5,
    },
    {
        position: "bottom-left",
        name: "Priya S.",
        role: "CEO at InnovateLabs",
        quote:
            "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
        delay: 0.8,
    },
    {
        position: "bottom-right",
        name: "Amit T.",
        role: "Head of HR at ScaleUp",
        quote:
            "Our best candidate accepted another offer while we were still scheduling interviews.",
        delay: 2.2,
    },
];

// Repositioned bubbles: Pushed further to the sides and adjusted vertically for "one page" fit
const bubblePositions: Record<string, string> = {
    // Moved slightly down to frame the condensed content better
    "top-left":
        "absolute top-[18%] left-[1%] xl:left-[2%] 2xl:left-[6%] w-[280px] xl:w-[340px]",
    "top-right":
        "absolute top-[18%] right-[1%] xl:right-[2%] 2xl:right-[6%] w-[280px] xl:w-[340px]",
    // Pushed further to the side as requested
    "bottom-left":
        "absolute bottom-[25%] left-[0.5%] xl:left-[1%] 2xl:left-[5%] w-[280px] xl:w-[340px]",
    "bottom-right":
        "absolute bottom-[25%] right-[0.5%] xl:right-[1%] 2xl:right-[5%] w-[280px] xl:w-[340px]",
};

function ConversationBubble({
    name,
    role,
    quote,
    position,
    delay,
}: (typeof conversationBubbles)[0]) {
    const isLeft = position.includes("left");

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 + delay * 0.2, ease: "easeOut" }}
            className={`hidden xl:block ${bubblePositions[position]}`}
        >
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 6 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                }}
                className="relative group"
            >
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Card */}
                <div className="relative bg-white/90 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-5 shadow-glass border border-white/40 dark:border-white/10 transition-all duration-500 group-hover:shadow-xl group-hover:border-accent-blue/20 dark:group-hover:border-accent-purple/20 group-hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0 shadow-sm">
                            <span className="text-white font-semibold text-sm">
                                {name.charAt(0)}
                            </span>
                        </div>
                        <div className="min-w-0">
                            <p className="font-semibold text-gray-900 dark:text-gray-100 text-base truncate">
                                {name}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm truncate">{role}</p>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed">
                        &ldquo;{quote}&rdquo;
                    </p>

                    {/* Speech bubble pointer */}
                    <div className={`absolute -bottom-2 ${isLeft ? 'left-8' : 'right-8'} w-4 h-4 bg-white/90 dark:bg-gray-900/80 border-r border-b border-white/40 dark:border-white/10 transform rotate-45`} />
                </div>
            </motion.div>
        </motion.div>
    );
}

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-accent-blue/10 via-accent-lavender/5 to-transparent rounded-full blur-[100px] opacity-60" />
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[80px] animate-pulse-slow" />
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[80px] animate-pulse-slow delay-1000" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            {/* Conversation bubbles */}
            {conversationBubbles.map((bubble) => (
                <ConversationBubble key={bubble.position} {...bubble} />
            ))}

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center px-4 md:px-6">
                    {/* Trust badge - Reduced margin */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2.5 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 shadow-sm"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                        </span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            Trusted by 500+ companies
                        </span>
                    </motion.div> */}

                    {/* Main headline - Reduced margin */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6"
                    >
                        Every Hire,{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-blue-600 via-accent-purple to-indigo-500 dark:from-blue-400 dark:via-accent-purple dark:to-indigo-400 bg-clip-text text-transparent">
                                Faster and Better
                            </span>
                            <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-blue-500/20 via-accent-purple/20 to-indigo-500/20 blur-md rounded-full" />
                        </span>
                    </motion.h1>

                    {/* Subheadline - Reduced margin */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal text-balance"
                    >
                        Stop losing great candidates to slow, manual hiring processes. Let
                        AI handle the heavy lifting while you focus on building your team.
                    </motion.p>

                    {/* CTA buttons - Reduced margin */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
                    >
                        <Button size="xl" className="w-full sm:w-auto min-w-[200px] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow">
                            <Sparkles className="mr-2 w-5 h-5" />
                            Start Hiring Smarter
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="glass" size="xl" className="w-full sm:w-auto min-w-[200px]">
                            <Play className="mr-2 w-4 h-4 fill-current" />
                            See How It Works
                        </Button>
                    </motion.div>

                    {/* Stats section - Reduced spacing ("brought up the line") */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

                        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            {[
                                { value: "10x", label: "Faster Screening" },
                                { value: "70%", label: "Reduced Time-to-Hire" },
                                { value: "500+", label: "Companies Trusted" },
                                { value: "1M+", label: "Candidates Processed" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                    className="text-center group"
                                >
                                    <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1 group-hover:scale-105 transition-transform duration-300">
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>

            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-black via-white/50 dark:via-black/50 to-transparent pointer-events-none" />
        </section>
    );
}
