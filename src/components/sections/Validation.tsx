"use client";

import { motion } from "framer-motion";
import { Layers, Shield, GitBranch, FileText } from "lucide-react";

const features = [
    {
        title: "Precision persona targeting",
        desc: "Run dozens of tests simultaneously by isolating traffic based on complex attributes (e.g., account balance, location, or past behaviour) without overlapping.",
        icon: <Layers className="w-5 h-5 text-white/70" />,
        delay: 0.1,
    },
    {
        title: "Fatigue management",
        desc: "Global session caps ensure no unique user is exposed to more than three active optimisations at once.",
        icon: <Shield className="w-5 h-5 text-white/70" />,
        delay: 0.15,
    },
    {
        title: "Multi-armed bandit (MAB) engine",
        desc: "Our machine learning algorithm evaluates variations in real-time, automatically shifting traffic to the winning feature to maximize conversion while the test is still running.",
        icon: <GitBranch className="w-5 h-5 text-white/70" />,
        delay: 0.2,
    },
    {
        title: "Audit logs",
        desc: "WORM (Write Once, Read Many) storage where every pixel change is legally logged.",
        icon: <FileText className="w-5 h-5 text-white/70" />,
        delay: 0.25,
    },
];

const ValidationCard = ({ title, desc, icon, delay }: { title: string, desc: string, icon: React.ReactNode, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className="group relative p-4"
    >
        {/* Outer Highlight Border */}
        <div className="absolute inset-0 border border-white/5 rounded-[32px] group-hover:border-neon-green/30 transition-all duration-500" />

        {/* Main Card Container */}
        <div className="relative h-full bg-[#070B1A] rounded-[28px] p-7 md:p-8 flex flex-col aspect-square transition-transform duration-500 group-hover:-translate-y-1">
            {/* Dashed Inner Border */}
            <div className="absolute inset-2 border border-dashed border-white/5 rounded-[22px] pointer-events-none group-hover:border-neon-green/10 transition-colors" />

            {/* Icon Box */}
            <div className="w-9 h-9 mb-6 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-neon-green/20 group-hover:bg-neon-green/5 transition-all duration-300">
                {icon}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center flex-1">
                <h3 className="text-lg md:text-xl font-jetbrains-mono font-medium text-neon-green mb-3 leading-tight tracking-tight">
                    {title}
                </h3>
                <p className="font-inter text-xs md:text-sm font-light text-white/90 leading-relaxed opacity-90 group-hover:text-gray-300 transition-colors">
                    {desc}
                </p>
            </div>

            {/* Subtle bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-neon-green/0 blur-[60px] rounded-full group-hover:bg-neon-green/[0.03] transition-all duration-700 pointer-events-none" />
        </div>
    </motion.div>
);

export default function Validation() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Ambient Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-neon-green/[0.02] blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-jetbrains-mono font-medium text-white tracking-tight"
                    >
                        Validation With Zero Risk.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/90 max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed"
                    >
                        Select any element, inject a real CTA, and measure intent — without writing code or risking production.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {features.map((feature, i) => (
                        <ValidationCard key={i} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
