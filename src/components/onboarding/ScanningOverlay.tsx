"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Loader2, ShieldCheck, Search, Globe, Code2 } from "lucide-react";

interface ScanningOverlayProps {
    isVisible: boolean;
    url: string;
}

const steps = [
    { id: 1, message: "Establishing secure connection to server...", icon: Globe },
    { id: 2, message: "Fetching HTML source code...", icon: Code2 },
    { id: 3, message: "Scanning for Pyngl initialization scripts...", icon: Search },
    { id: 4, message: "Verifying data-api endpoints...", icon: ShieldCheck },
    { id: 5, message: "Syncing with Preta Governance Layer...", icon: Loader2 },
];

export const ScanningOverlay = ({ isVisible, url }: ScanningOverlayProps) => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (isVisible) {
            setCurrentStep(0);
            const interval = setInterval(() => {
                setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
            }, 800);
            return () => clearInterval(interval);
        }
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#070B1A]/80 backdrop-blur-md"
                >
                    <div className="max-w-[500px] w-full space-y-8">
                        {/* Radar Animation */}
                        <div className="relative flex justify-center">
                            <div className="relative w-32 h-32">
                                <motion.div
                                    animate={{
                                        scale: [1, 2],
                                        opacity: [0.5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeOut"
                                    }}
                                    className="absolute inset-0 rounded-full bg-[#39FF14]/20 border border-[#39FF14]/40"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.5],
                                        opacity: [0.8, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: 0.5,
                                        repeat: Infinity,
                                        ease: "easeOut"
                                    }}
                                    className="absolute inset-0 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30"
                                />
                                <div className="absolute inset-4 flex items-center justify-center">
                                    <div className="relative w-20 h-20 flex items-center justify-center">
                                        {/* Subtle Glow behind logo */}
                                        <div className="absolute inset-0 bg-[#39FF14]/10 blur-2xl rounded-full" />

                                        <div className="relative z-10 w-16 h-16">
                                            <Image
                                                src="/preta-logo.png"
                                                alt="Preta Logo"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Title & URL */}
                        <div className="text-center space-y-2">
                            <h2 className="text-xl font-bold text-white tracking-tight">Verifying Installation</h2>
                            <p className="text-zinc-500 font-mono text-xs truncate max-w-full px-4">
                                TARGET: {url}
                            </p>
                        </div>

                        {/* Progress Logs */}
                        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 font-mono text-xs space-y-3 shadow-2xl overflow-hidden min-h-[180px]">
                            <AnimatePresence mode="popLayout">
                                {steps.slice(0, currentStep + 1).map((step, idx) => {
                                    const Icon = step.icon;
                                    const isCurrent = idx === currentStep;

                                    return (
                                        <motion.div
                                            key={step.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={`flex items-center gap-3 ${isCurrent ? "text-[#39FF14]" : "text-zinc-500"}`}
                                        >
                                            {isCurrent ? (
                                                <Loader2 className="w-3 h-3 animate-spin" />
                                            ) : (
                                                <div className="w-1 h-1 rounded-full bg-[#39FF14]/50" />
                                            )}
                                            <span>{step.message}</span>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                        {/* Tip */}
                        <p className="text-center text-zinc-500 text-[10px] uppercase tracking-widest animate-pulse">
                            Do not close this window
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
