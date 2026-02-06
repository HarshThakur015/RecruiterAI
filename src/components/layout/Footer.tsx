import React from "react";
import { Container } from "@/components/ui/Container";
import { Sparkles, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "API"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Documentation", "Help Center", "Community", "Partners"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-dark-secondary-bg border-t border-gray-200 dark:border-gray-800">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-light-primary to-accent-purple flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                Recruiter<span className="text-light-primary">AI</span>
                            </span>
                        </a>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            AI-powered recruiting automation for modern teams.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="p-2 rounded-lg bg-white dark:bg-dark-primary-bg border border-gray-200 dark:border-gray-700 hover:border-light-primary transition-colors"
                            >
                                <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-lg bg-white dark:bg-dark-primary-bg border border-gray-200 dark:border-gray-700 hover:border-light-primary transition-colors"
                            >
                                <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-lg bg-white dark:bg-dark-primary-bg border border-gray-200 dark:border-gray-700 hover:border-light-primary transition-colors"
                            >
                                <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                                {category}
                            </h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-600 dark:text-gray-400 hover:text-light-primary text-sm transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} RecruiterAI. All rights reserved.
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                        Made with ❤️ for modern recruiting teams
                    </p>
                </div>
            </Container>
        </footer>
    );
}
