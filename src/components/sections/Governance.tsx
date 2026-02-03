"use client";

import { motion } from "framer-motion";
import { Shield, Activity, Lock } from "lucide-react";

const features = [
    {
        title: "Collision Detection",
        desc: "Prevents two teams from testing on the same header.",
        icon: <Activity className="w-5 h-5 text-neon-green" />,
    },
    {
        title: "Fatigue Caps",
        desc: "Max 3 tests per user session.",
        icon: <Shield className="w-5 h-5 text-neon-green" />,
    },
    {
        title: "WORM Audit",
        desc: "Write-Once-Read-Many logs for legal discovery.",
        icon: <Lock className="w-5 h-5 text-neon-green" />,
    },
];

export default function Governance() {
    // Generate grid cells
    const cols = 8;
    const rows = 6;
    const cells = Array.from({ length: cols * rows });

    return (
        <section id="governance" className="py-32 bg-dark-navy/30 relative overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Visual: Heatmap/Zone Lock */}
                <div className="relative">
                    <div className="aspect-square bg-deep-void rounded-2xl border border-white/10 overflow-hidden relative grid grid-cols-8 grid-rows-6 p-1 gap-1">
                        {cells.map((_, i) => {
                            const isHot = [10, 11, 18, 19, 27].includes(i); // "Hot" zones
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0.1 }}
                                    animate={{
                                        opacity: isHot ? [0.4, 0.8, 0.4] : 0.1,
                                        backgroundColor: isHot ? "#39FF14" : "#ffffff"
                                    }}
                                    transition={{
                                        duration: isHot ? 2 : 0,
                                        repeat: isHot ? Infinity : 0,
                                        delay: Math.random() * 2
                                    }}
                                    className="rounded-sm bg-white/5"
                                />
                            )
                        })}

                        {/* Overlay label */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-deep-void/90 backdrop-blur border border-neon-green px-4 py-2 rounded font-jetbrains-mono text-neon-green text-xs shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                                ZONE LOCKED
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-inter-tight font-bold mb-8">Governance & Control</h2>
                    <div className="space-y-8">
                        {features.map((feature, i) => (
                            <div key={i} className="flex gap-4 items-start group">
                                <div className="mt-1 w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center border border-neon-green/20 group-hover:bg-neon-green/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-inter-tight mb-2 text-white">{feature.title}</h3>
                                    <p className="text-sm text-white/90 font-jetbrains-mono leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
