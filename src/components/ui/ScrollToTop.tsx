"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group flex items-center justify-center gap-2 px-4 py-2 bg-[#070B1A] border border-white/20 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#39FF14] hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all duration-300"
                >
                    <ArrowUp className="w-4 h-4 text-white/60 group-hover:text-[#39FF14] transition-colors" />
                    <span className="font-jetbrains-mono text-xs font-bold text-white/60 group-hover:text-[#39FF14] tracking-wider transition-colors">
                        TOP
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
