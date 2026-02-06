"use client";

import React from "react";
import { motion } from "framer-motion";

export const ImagesBadge = ({
    text,
    images,
}: {
    text: string;
    images: React.ReactNode[];
}) => {
    return (
        <motion.div
            className="relative flex flex-col items-center justify-center z-50 mb-48"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* Badge Text - Now Animated & Primary Style */}
            <motion.div
                variants={{
                    rest: { y: 120, scale: 1 }, // Sits lower (towards middle) initially
                    hover: { y: 0, scale: 1.05 } // Moves up to make room
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-50 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-base cursor-pointer shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 border border-blue-500/20"
            >
                <span>{text}</span>
            </motion.div>

            {/* Items Container - Fanning out below */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full flex justify-center items-start h-0">
                {images.map((img, index) => {
                    const total = images.length;
                    const mid = (total - 1) / 2;
                    const i = index;

                    // Wide spread and subtle rotation for readability
                    const rotate = (i - mid) * 2;
                    const x = (i - mid) * 360;
                    const y = Math.abs(i - mid) * 5;

                    return (
                        <motion.div
                            key={index}
                            className="absolute w-[350px] origin-top"
                            variants={{
                                rest: {
                                    opacity: 0,
                                    y: 50, // Start slightly lower to match the "closed" feel
                                    scale: 0.5,
                                    rotate: 0,
                                    x: 0,
                                    zIndex: 0,
                                    transition: { duration: 0.2 },
                                },
                                hover: {
                                    opacity: 1,
                                    y: 25 + y, // Adjusted y offset
                                    scale: 1,
                                    rotate: rotate,
                                    x: x,
                                    zIndex: 10,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.1, // Slight delay so badge moves first
                                    },
                                },
                            }}
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        >
                            <div className="transform scale-90">
                                {img}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};
