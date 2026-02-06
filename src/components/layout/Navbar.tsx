"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeProvider";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Results", href: "#results" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-lg"
                : "bg-transparent"
                }`}
        >
            <Container>
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-light-primary to-accent-purple flex items-center justify-center">
                                <span className="text-white font-black text-2xl leading-none font-sans">R</span>
                            </div>
                            <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-br from-light-primary to-accent-purple blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                        </div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            Recruiter<span className="text-light-primary">AI</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-light-primary dark:hover:text-light-primary transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl bg-light-secondary dark:bg-dark-secondary-bg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <Moon className="w-5 h-5 text-gray-700" />
                            ) : (
                                <Sun className="w-5 h-5 text-yellow-400" />
                            )}
                        </button>
                        <Button variant="primary" size="sm">
                            Start Free Trial
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl bg-light-secondary dark:bg-dark-secondary-bg"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <Moon className="w-5 h-5 text-gray-700" />
                            ) : (
                                <Sun className="w-5 h-5 text-yellow-400" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl bg-light-secondary dark:bg-dark-secondary-bg"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-5 h-5 text-gray-700 dark:text-white" />
                            ) : (
                                <Menu className="w-5 h-5 text-gray-700 dark:text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white dark:bg-dark-primary-bg border-t border-gray-200 dark:border-gray-800"
                    >
                        <Container className="py-4">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-600 dark:text-gray-300 hover:text-light-primary py-2 font-medium"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <Button variant="primary" className="w-full mt-2">
                                    Start Free Trial
                                </Button>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
