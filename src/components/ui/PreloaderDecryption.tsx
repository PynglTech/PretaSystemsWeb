"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
const TARGET_TEXT = "PRETA";
const SUB_TEXT = "SYSTEMS";

export default function PreloaderDecryption() {
    const [isLoading, setIsLoading] = useState(true);
    const [displayText, setDisplayText] = useState("");
    const [displaySubText, setDisplaySubText] = useState("");

    // Scramble logic
    useEffect(() => {
        document.body.style.overflow = "hidden";

        let iteration = 0;
        let subIteration = 0;

        const interval = setInterval(() => {
            // Main Text Scramble
            setDisplayText(
                TARGET_TEXT.split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return TARGET_TEXT[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= TARGET_TEXT.length) {
                // Start Sub Text Scramble after main text is somewhat ready
                setDisplaySubText(
                    SUB_TEXT.split("")
                        .map((letter, index) => {
                            if (index < subIteration) {
                                return SUB_TEXT[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                // Slow down sub-text reveal
                if (Math.random() > 0.5) subIteration += 1 / 5;
            }

            iteration += 1 / 3; // Speed of reveal Main Text

            // End condition
            if (iteration >= TARGET_TEXT.length + 20 && subIteration >= SUB_TEXT.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.overflow = "unset";
                }, 800);
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] bg-[#070B1A] flex flex-col items-center justify-center font-jetbrains-mono cursor-none"
                >
                    {/* Background Grid Elements (Subtle) */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                        <div className="absolute top-10 left-10 text-[10px] text-neon-green/40 animate-pulse">
                            ENCRYPTION_LAYER: AES-256
                        </div>
                        <div className="absolute bottom-10 right-10 text-[10px] text-neon-green/40 animate-pulse delay-75">
                            KEY_EXCHANGE: ED25519
                        </div>
                    </div>

                    {/* Main Decryption Text */}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <motion.h1
                            className="text-6xl md:text-8xl font-bold text-white tracking-widest tabular-nums"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            {displayText}
                        </motion.h1>

                        <motion.div
                            className="text-xl md:text-2xl text-neon-green tracking-[0.5em] font-light"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {displaySubText}
                        </motion.div>
                    </div>

                    {/* Scanline Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-20 pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
