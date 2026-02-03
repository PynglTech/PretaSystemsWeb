"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
    label: string;
    subtitle?: string; // Added subtitle
    icon: ReactNode;
    colorClass?: string; // Keeps flexibility, but we'll set defaults to match reference
    className?: string; // For positioning
    delay?: number;
}

export default function FloatingBadge({
    label,
    subtitle,
    icon,
    colorClass = "border-white/10 text-white bg-black/60", // Default dark theme style
    className,
    delay = 0,
}: FloatingBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0], // Float up and down
                x: [0, 10, 0]   // Slight horizontal sway
            }}
            transition={{
                delay,
                duration: 0.5,
                type: "spring",
                // Continuous float animation after entry
                y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.5 // Start floating after entry
                },
                x: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.5
                }
            }}
            className={cn(
                "absolute flex items-center gap-3 px-5 py-3 rounded-full border backdrop-blur-md shadow-2xl z-20",
                colorClass,
                className
            )}
        >
            <div className="flex items-center justify-center p-1.5 rounded-full bg-white/5 border border-white/10 w-8 h-8">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-semibold leading-tight">{label}</span>
                {subtitle && (
                    <span className="text-[9px] uppercase tracking-wider opacity-70 font-medium leading-tight">
                        {subtitle}
                    </span>
                )}
            </div>
        </motion.div>
    );
}
