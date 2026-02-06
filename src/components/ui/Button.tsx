import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "glass" | "outlineWhite";
    size?: "sm" | "md" | "lg" | "xl";
    children: React.ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-light-primary text-white hover:bg-blue-600 focus:ring-light-primary shadow-lg shadow-light-primary/25 hover:shadow-xl hover:shadow-light-primary/30 hover:-translate-y-0.5",
        secondary:
            "bg-light-secondary dark:bg-dark-secondary-bg text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-gray-300",
        outline:
            "border-2 border-light-primary text-light-primary hover:bg-light-primary hover:text-white focus:ring-light-primary",
        glass:
            "bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-lg focus:ring-gray-200",
        outlineWhite:
            "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white focus:ring-white",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-lg font-bold",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
