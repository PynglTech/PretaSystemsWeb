"use client";

import { motion } from "framer-motion";

const companies = [
    "Global Bank Corp",
    "PharmaSafe",
    "GovSecure",
    "FinTech One",
    "MediData",
    "CyberDefense",
    "InsurTech Global",
    "AutoSystems",
];

// Duplicate for loop
const ticker = [...companies, ...companies];

export default function TrustMarquee() {
    return (
        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
            <div className="container mx-auto px-6 mb-8 text-center">
                <span className="text-sm font-jetbrains-mono text-gray-500 uppercase tracking-widest">
                    Trusted by Highly Regulated Industries
                </span>
            </div>

            <div className="flex overflow-hidden relative w-full mask-linear-fade">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-deep-void to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-deep-void to-transparent z-10" />

                <motion.div
                    className="flex items-center gap-16 whitespace-nowrap"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {ticker.map((company, i) => (
                        <div key={i} className="flex items-center gap-2 text-white/30 font-inter-tight text-2xl font-bold uppercase select-none">
                            {/* Simple geometric logo placeholder */}
                            <div className="w-8 h-8 rounded-full border-2 border-white/20" />
                            {company}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
