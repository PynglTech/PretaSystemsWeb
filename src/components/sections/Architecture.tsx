"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layers, Zap, Database } from "lucide-react";

const cards = [
    {
        title: "Ghost SDK",
        desc: "Runs in Shadow DOM. Z-Index Max. No CSS Bleed.",
        icon: <Layers className="w-8 h-8 text-neon-green" />,
    },
    {
        title: "Edge Plane",
        desc: "Immutable Loader. <50ms Delivery. Failover protection.",
        icon: <Zap className="w-8 h-8 text-blue-400" />,
        yParallax: true,
    },
    {
        title: "Data Silo",
        desc: "EU Data stays in Frankfurt. US Data stays in Virginia. Sovereignty Guaranteed.",
        icon: <Database className="w-8 h-8 text-purple-400" />,
    },
];

export default function Architecture() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const middleY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} id="architecture" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-inter-tight font-bold mb-6">Three Planes of Isolation</h2>
                    <p className="text-white/90 max-w-2xl font-light text-lg">
                        The architecture ensures zero interference with your production stack.
                        We sit on top, invisible and weightless.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            style={card.yParallax ? { y: middleY } : {}}
                            className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity transform group-hover:scale-110 duration-500">
                                {card.icon}
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 mb-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl font-inter-tight font-bold mb-4 group-hover:text-neon-green transition-colors">{card.title}</h3>
                                <p className="font-jetbrains-mono text-sm text-white/90 leading-relaxed border-t border-white/5 pt-4">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
