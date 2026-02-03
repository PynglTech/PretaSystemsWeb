"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Code2, ShieldCheck } from "lucide-react";

interface TabContent {
    id: string;
    label: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

const tabs: TabContent[] = [
    {
        id: "pm",
        label: "Product Managers",
        title: "Speed to light",
        description: "Stop waiting for engineering resources. Test your hypotheses independently and bring data-backed specs to the next sprint planning.",
        icon: Zap,
    },
    {
        id: "eng",
        label: "Engineering Leads",
        title: "Zero technical debt",
        description: "Let product teams iterate on the edge without polluting your core codebase. Maintain clean architecture while enabling rapid experimentation.",
        icon: Code2,
    },
    {
        id: "ops",
        label: "Compliance & Ops",
        title: "Total governance",
        description: "Every change is audit-logged and reversible. Set strict permissions and guardrails to ensure brand safety and regulatory compliance.",
        icon: ShieldCheck,
    },
];

export default function TeamTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    // Auto-switch tabs every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((current) => {
                const currentIndex = tabs.findIndex((tab) => tab.id === current);
                const nextIndex = (currentIndex + 1) % tabs.length;
                return tabs[nextIndex].id;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="teams" className="py-24 bg-deep-void relative overflow-hidden min-h-[600px] lg:min-h-[550px]" style={{ contain: 'layout' }}>
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-neon-green/[0.02] blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-jetbrains-mono font-medium text-white mb-6 tracking-tight">
                        Built for the whole product team
                    </h2>
                </div>

                {/* Bento Grid layout */}
                <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[400px]" style={{ contain: 'layout' }}>
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <motion.div
                                key={tab.id}
                                layout
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    relative overflow-hidden rounded-2xl cursor-pointer border transition-colors duration-500
                                    flex flex-col justify-start p-6 md:p-8
                                    ${isActive
                                        ? "border-[#39FF14] bg-[#0A0F11]"
                                        : "border-white/10 bg-transparent hover:border-white/20 hover:bg-white/[0.02]"
                                    }
                                `}
                                style={{
                                    // Flex grow/shrink logic for layout animation
                                    flex: isActive ? 2 : 1,
                                }}
                            >
                                {/* Active Glow Background */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 bg-[#39FF14]/[0.03]"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}

                                {/* Header Area (Always Visible) */}
                                <motion.div layout="position" className="flex items-center gap-4 mb-6">
                                    <div className={`
                                        w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300
                                        ${isActive ? "bg-[#39FF14]/10 text-[#39FF14]" : "bg-white/5 text-white/40"}
                                    `}>
                                        <tab.icon className="w-6 h-6" />
                                    </div>
                                    <span className={`
                                        font-jetbrains-mono text-sm uppercase tracking-wider font-bold transition-colors duration-300
                                        ${isActive ? "text-[#39FF14]" : "text-white/40"}
                                    `}>
                                        {tab.label}
                                    </span>
                                </motion.div>

                                {/* Title (Always Visible) */}
                                <motion.h3
                                    layout="position"
                                    className={`
                                        text-2xl md:text-3xl font-jetbrains-mono font-medium mb-4 transition-colors duration-300
                                        ${isActive ? "text-white" : "text-white/60"}
                                    `}
                                >
                                    {tab.title}
                                </motion.h3>

                                {/* Description (Revealed on Active) */}
                                <AnimatePresence mode="popLayout">
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }} // Hide quickly when collapsing
                                            transition={{ delay: 0.1, duration: 0.3 }}
                                        >
                                            <p className="text-white/90 font-inter text-base md:text-lg leading-relaxed max-w-lg">
                                                {tab.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Click indicator for inactive on mobile/desktop */}
                                {!isActive && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 opacity-20"
                                    >
                                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                            <span className="text-white text-lg">+</span>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
