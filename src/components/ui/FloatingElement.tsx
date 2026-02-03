"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
    children: React.ReactNode;
    className?: string;
    duration?: number;
    distance?: number;
    delay?: number;
}

export default function FloatingElement({
    children,
    className,
    duration = 6,
    distance = 20,
    delay = 0,
}: FloatingElementProps) {
    return (
        <motion.div
            className={cn("relative", className)}
            animate={{
                y: [0, -distance, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
}
