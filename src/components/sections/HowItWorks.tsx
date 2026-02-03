"use client";

import { motion } from "framer-motion";
import { Book, Shield, Code, History, ArrowRight } from "lucide-react";

const resources = [
    {
        title: "Quick Start",
        desc: "Get up and running in under 5 minutes with our step-by-step guide",
        icon: <Book className="w-5 h-5 text-[#39FF14]" />,
    },
    {
        title: "Security & CSP",
        desc: "Content Security Policy whitelisting and compliance configuration",
        icon: <Shield className="w-5 h-5 text-[#39FF14]" />,
    },
    {
        title: "API Reference",
        desc: "Complete SDK documentation with examples and type definitions",
        icon: <Code className="w-5 h-5 text-[#39FF14]" />,
    },
    {
        title: "Change Log",
        desc: "Latest updates, releases, and breaking changes",
        icon: <History className="w-5 h-5 text-[#39FF14]" />,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-32 relative bg-[#05050A]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-inter-tight font-bold mb-6 text-white tracking-tight">
                        Built for teams that ask <span className="text-[#39FF14]">"how does this really work?"</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                    {resources.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-[#0A0A0E] border border-white/5 p-10 rounded-2xl group hover:border-white/10 transition-colors cursor-pointer relative overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="w-12 h-12 mb-6 rounded-lg bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20 relative z-10">
                                {/* Icon color explicit override just in case */}
                                <div className="text-[#39FF14]">
                                    {item.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold font-inter-tight mb-3 text-white relative z-10">{item.title}</h3>
                            <p className="text-sm font-jetbrains-mono text-white/90 leading-relaxed relative z-10">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm group"
                    >
                        Browse all documentation
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#39FF14]" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
