"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundGlow = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Top Right Glow */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-[#39FF14]/10 blur-[120px] rounded-full"
            />

            {/* Bottom Left Glow */}
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"
            />

            {/* Middle Glow */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/5 blur-[150px] rounded-full"
            />
        </div>
    );
};
