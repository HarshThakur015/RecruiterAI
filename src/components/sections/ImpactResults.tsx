"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
    Zap,
    Clock,
    Users,
    FileCheck,
    CheckCircle2,
    DollarSign,
    TrendingDown,
} from "lucide-react";

const metrics = [
    {
        icon: <Zap className="w-6 h-6" />,
        value: 10,
        suffix: "x",
        label: "Faster Screening",
        description: "Screen resumes in seconds, not hours",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: <Clock className="w-6 h-6" />,
        value: 70,
        suffix: "%",
        label: "Faster Hiring",
        description: "Reduce time-to-hire dramatically",
        color: "from-violet-500 to-purple-600",
    },
    {
        icon: <Users className="w-6 h-6" />,
        value: 25,
        suffix: "x",
        label: "Interview Capacity",
        description: "Handle more candidates simultaneously",
        color: "from-pink-500 to-rose-600",
    },
    {
        icon: <FileCheck className="w-6 h-6" />,
        value: 95,
        suffix: "%",
        label: "Application Completion",
        description: "Higher candidate engagement",
        color: "from-emerald-500 to-green-600",
    },
    {
        icon: <CheckCircle2 className="w-6 h-6" />,
        value: 89,
        suffix: "%",
        label: "More Qualified Applications",
        description: "Better talent pool quality",
        color: "from-orange-500 to-amber-600",
    },
    {
        icon: <DollarSign className="w-6 h-6" />,
        value: 80,
        suffix: "%",
        label: "Lower Recruitment Costs",
        description: "Significant cost savings",
        color: "from-cyan-500 to-teal-600",
    },
    {
        icon: <TrendingDown className="w-6 h-6" />,
        value: 50,
        suffix: "%",
        label: "Reduction in Bad Hires",
        description: "Data-driven hiring decisions",
        color: "from-red-500 to-pink-600",
    },
];

function AnimatedMetric({
    icon,
    value,
    suffix,
    label,
    description,
    color,
    index,
}: (typeof metrics)[0] & { index: number }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = React.useState(0);

    React.useEffect(() => {
        if (isInView) {
            const duration = 1500;
            const steps = 60;
            const stepValue = value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += stepValue;
                if (current >= value) {
                    setDisplayValue(value);
                    clearInterval(timer);
                } else {
                    setDisplayValue(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-secondary-bg rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-card-hover transition-all duration-300"
        >
            <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 text-white`}
            >
                {icon}
            </div>

            <div className="mb-3">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {displayValue}
                </span>
                <span className="text-2xl font-bold text-light-primary">{suffix}</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {label}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>

            {/* Animated progress bar */}
            <div className="mt-4 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${Math.min(value, 100)}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className={`h-full bg-gradient-to-r ${color} rounded-full`}
                />
            </div>
        </motion.div>
    );
}

const benefits = [
    "24/7 automated candidate communication",
    "AI-powered resume parsing & scoring",
    "Intelligent interview scheduling",
    "Bias-free initial screening",
    "Multi-channel job posting",
    "Real-time hiring analytics",
];

export function ImpactResults() {
    return (
        <section id="results" className="section-padding bg-gray-50 dark:bg-dark-secondary-bg/50">
            <Container>
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        The RecruiterAI{" "}
                        <span className="bg-gradient-to-r from-light-primary to-accent-purple bg-clip-text text-transparent">
                            Advantage
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Transform your hiring process with measurable results
                    </p>
                </AnimatedSection>

                {/* Metrics grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {metrics.slice(0, 4).map((metric, index) => (
                        <AnimatedMetric key={index} {...metric} index={index} />
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {metrics.slice(4).map((metric, index) => (
                        <AnimatedMetric key={index} {...metric} index={index + 4} />
                    ))}
                </div>

                {/* Benefits list */}
                <AnimatedSection delay={0.3}>
                    <div className="bg-gradient-to-br from-light-primary to-accent-purple rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            Everything You Need to Hire Better
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                                    <span className="text-white font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </Container>
        </section>
    );
}
