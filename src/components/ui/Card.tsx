import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "glass" | "bordered";
}

export function Card({ children, className = "", variant = "default" }: CardProps) {
    const variants = {
        default:
            "bg-white dark:bg-dark-secondary-bg rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300",
        glass:
            "glass-card",
        bordered:
            "bg-white dark:bg-dark-secondary-bg rounded-2xl border border-gray-200 dark:border-gray-700",
    };

    return (
        <div className={`${variants[variant]} ${className}`}>
            {children}
        </div>
    );
}
