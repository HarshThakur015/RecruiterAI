"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const jobBoards = [
    { name: "LinkedIn", color: "#0A66C2" },
    { name: "Naukri", color: "#0076D6" },
    { name: "Indeed", color: "#003A9B" },
    { name: "Instahyre", color: "#FF6B35" },
    { name: "Wellfound", color: "#EC2C2C" },
    { name: "IIMJobs", color: "#ED1C24" },
    { name: "Glassdoor", color: "#0CAA41" },
    { name: "Monster", color: "#6E45A5" },
    { name: "Cutshort", color: "#7C3AED" },
];

function LogoCard({ name, color }: { name: string; color: string }) {
    // Handling special case for black logos in dark mode if needed, 
    // but using opacity on bg makes it work generally.
    // For AngelList/Wellfound (black), we might want a white text in dark mode context if we used solid bg,
    // but here we use tinted bg.

    return (
        <div className="group flex-shrink-0 px-6 py-4 mx-3 bg-white dark:bg-dark-secondary-bg rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg cursor-pointer hover:-translate-y-1">
            <div className="flex items-center gap-4">
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-sm transition-all duration-300"
                    style={{
                        backgroundColor: `${color}15`, // ~8% opacity
                        color: color
                    }}
                >
                    {name.charAt(0)}
                </div>
                <span className="font-bold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-lg">
                    {name}
                </span>
            </div>
        </div>
    );
}

export function JobBoards() {
    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...jobBoards, ...jobBoards];

    return (
        <section className="section-padding bg-white dark:bg-dark-primary-bg overflow-hidden">
            <Container>
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Post Once,{" "}
                        <span className="bg-gradient-to-r from-light-primary to-accent-purple bg-clip-text text-transparent">
                            Reach Everywhere
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Publish your job openings to 10+ major job boards with a single click.
                    </p>
                </AnimatedSection>
            </Container>

            {/* Infinite scrolling logo slider */}
            <div className="relative">
                {/* Gradient masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-dark-primary-bg to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-dark-primary-bg to-transparent z-10" />

                {/* Scrolling container */}
                <motion.div
                    className="flex hide-scrollbar py-4"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <LogoCard key={`${logo.name}-${index}`} {...logo} />
                    ))}
                </motion.div>
            </div>

            {/* Stats below slider */}
            <Container>
                <AnimatedSection delay={0.2} className="mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { value: "10+", label: "Job Boards" },
                            { value: "1M+", label: "Active Job Seekers" },
                            { value: "50K+", label: "Companies Hiring" },
                            { value: "100+", label: "Countries Covered" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl bg-gray-50 dark:bg-dark-secondary-bg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                            >
                                <p className="text-2xl md:text-3xl font-bold text-light-primary mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
