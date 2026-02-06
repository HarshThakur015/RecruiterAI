"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "How does AI screening work?",
        answer:
            "Our AI analyzes resumes using advanced natural language processing to match candidates against your job requirements. It evaluates skills, experience, education, and other factors to provide a comprehensive scoring system. The AI learns from your hiring decisions to continuously improve its recommendations.",
    },
    {
        question: "Does RecruiterAI integrate with existing ATS systems?",
        answer:
            "Yes! RecruiterAI seamlessly integrates with popular ATS platforms including Workday, Greenhouse, Lever, BambooHR, and many others. Our API also allows custom integrations with your existing HR tech stack. Setup typically takes less than a day with our dedicated integration support.",
    },
    {
        question: "What's the pricing structure?",
        answer:
            "We offer flexible pricing based on your hiring volume. Our Starter plan is perfect for small teams, while our Pro and Enterprise plans include advanced features like custom AI training, priority support, and dedicated account management. Contact our sales team for a custom quote tailored to your needs.",
    },
    {
        question: "How long does it take to set up?",
        answer:
            "Most companies are up and running within 24-48 hours. Our onboarding team will help you configure your first job posting, set up automated workflows, and train your team on using the platform. We also provide comprehensive documentation and video tutorials for self-service setup.",
    },
    {
        question: "Is my data secure with RecruiterAI?",
        answer:
            "Absolutely. We take data security very seriously. RecruiterAI is SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit using AES-256 encryption. We also offer data residency options for companies with specific compliance requirements.",
    },
];

function FAQItem({
    question,
    answer,
    isOpen,
    onClick,
    index,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}) {
    return (
        <AnimatedSection delay={index * 0.1}>
            <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-dark-secondary-bg">
                <button
                    onClick={onClick}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">
                        {question}
                    </span>
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <ChevronDown className="w-5 h-5 text-light-primary" />
                    </motion.span>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700/50 pt-4">
                                {answer}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </AnimatedSection>
    );
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding bg-white dark:bg-dark-primary-bg">
            <Container>
                <AnimatedSection className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-light-primary/10 text-light-primary rounded-full text-sm font-medium mb-4">
                        <HelpCircle className="w-4 h-4" />
                        FAQ
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Frequently Asked{" "}
                        <span className="bg-gradient-to-r from-light-primary to-accent-purple bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Everything you need to know about RecruiterAI
                    </p>
                </AnimatedSection>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            index={index}
                        />
                    ))}
                </div>

                {/* Contact support */}
                <AnimatedSection delay={0.5} className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Still have questions?
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-light-primary hover:text-blue-600 font-medium transition-colors"
                    >
                        Contact our support team
                        <span>→</span>
                    </a>
                </AnimatedSection>
            </Container>
        </section>
    );
}
