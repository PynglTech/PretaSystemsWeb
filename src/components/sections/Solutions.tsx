"use client";

import { motion } from "framer-motion";
import { Zap, Code, Shield, Radio, DollarSign, ArrowRight } from "lucide-react";

const solutions = [
    {
        role: "Product managers",
        title: "Speed to Insight",
        desc: "Measure intent in minutes",
        icon: <Zap className="w-5 h-5 text-neon-green" />,
    },
    {
        role: "Engineering teams",
        title: "Zero technical debt",
        desc: "No code is written until a feature is proven.",
        icon: <Code className="w-5 h-5 text-neon-green" />,
    },
    {
        role: "Compliance teams",
        title: "The governance vault",
        desc: "Full control over what is injected.",
        icon: <Shield className="w-5 h-5 text-neon-green" />,
    },
];

const secondarySolutions = [
    {
        title: "Fake Door Testing",
        desc: "Test buttons before the backend exists.",
        icon: <Radio className="w-6 h-6 text-neon-green" />,
    },
    {
        title: "Pricing sensitivity",
        desc: "Test buttons before the backend exists.",
        icon: <DollarSign className="w-6 h-6 text-neon-green" />,
    }
];

export default function Solutions() {
    return (
        <section id="solutions" className="py-32 container mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-inter-tight font-bold mb-6">Solutions</h2>
            </div>

            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {solutions.map((sol, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative p-10 rounded-2xl bg-[#050510] border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <div className="w-10 h-10 mb-8 rounded-lg bg-[#0A0A16] flex items-center justify-center border border-white/5">
                            {sol.icon}
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wider text-neon-green mb-2">{sol.role}</div>
                        <h3 className="text-2xl font-inter-tight font-bold mb-4 text-white">
                            {sol.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-white/90 group-hover:text-neon-green transition-colors cursor-pointer">
                            {sol.desc}
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {secondarySolutions.map((sol, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="group flex items-center gap-6 p-10 rounded-2xl bg-[#050510] border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-lg bg-[#0A0A16] flex items-center justify-center border border-white/5 shrink-0">
                            {sol.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-inter-tight font-bold mb-1 text-white">
                                {sol.title}
                            </h3>
                            <p className="text-white/90 text-sm">{sol.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
