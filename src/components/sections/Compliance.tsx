"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const complianceItems = [
    {
        title: "PCI-DSS v4.0",
        content: "Full compliance with the latest payment card industry standards. Data is tokenized before it touches our layer.",
    },
    {
        title: "GDPR",
        content: "EU-resident data handling. automated erasure requests, and full data sovereignty for European customers.",
    },
    {
        title: "Accessibility (ARIA)",
        content: "Automated checks for screen reader compatibility and keyboard navigation compliance.",
    },
    {
        title: "Supply Chain (SBOM)",
        content: "Software Bill of Materials provided for every build. Full transparency on all dependencies.",
    },
];

export default function Compliance() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="security" className="py-32 container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-inter-tight font-bold mb-6">Compliance Ready</h2>
                    <p className="text-white/90">Eliminate the "Deal Killers" before they happen.</p>
                </div>

                <div className="space-y-4">
                    {complianceItems.map((item, i) => (
                        <div
                            key={i}
                            className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                aria-expanded={openIndex === i}
                            >
                                <div className="flex items-center gap-4">
                                    <CheckCircle className={cn("w-5 h-5", openIndex === i ? "text-neon-green" : "text-gray-600")} />
                                    <span className={cn("font-inter-tight text-lg font-bold", openIndex === i ? "text-white" : "text-gray-400")}>
                                        {item.title}
                                    </span>
                                </div>
                                <ChevronDown
                                    className={cn("w-5 h-5 transition-transform duration-300", openIndex === i ? "rotate-180" : "")}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 pl-16 text-white/90 font-jetbrains-mono text-sm leading-relaxed">
                                            {item.content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
