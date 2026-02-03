"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Lock, ShieldCheck, Users } from "lucide-react";

const certifications = [
    {
        title: "SOC2 Type I Ready",
        icon: <ShieldCheck className="w-6 h-6 text-neon-green" />,
    },
    {
        title: "Static mode for PCI-DSS compliant",
        icon: <Lock className="w-6 h-6 text-neon-green" />,
    },
    {
        title: "RBAC (Role-based access control)",
        icon: <Users className="w-6 h-6 text-neon-green" />,
    },
];

export default function Security() {
    return (
        <section className="pt-0 pb-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Central Lock Visual with Blending */}
                <div className="relative w-full flex flex-col items-center">
                    <div className="relative w-full h-[250px] md:h-[350px] flex items-end justify-center z-10">
                        {/* Gradient overlay to blend edges */}
                        <div
                            className="absolute inset-0 z-20 pointer-events-none"
                            style={{
                                background: 'radial-gradient(ellipse 80% 60% at center, transparent 40%, #070B1A 75%)'
                            }}
                        />
                        <div className="relative w-full h-full">
                            <Image
                                src="/security-lock-neon.png"
                                alt="Security Lock"
                                fill
                                className="object-contain object-bottom mix-blend-lighten"
                                style={{ imageRendering: 'crisp-edges' }}
                                quality={100}
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full mb-20 relative z-20 -mt-8">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="bg-[#070B1A] border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center gap-6 text-center hover:border-white/20 transition-colors py-12"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#0A2F15] flex items-center justify-center border border-neon-green/20">
                                {cert.icon}
                            </div>
                            <span className="font-inter-tight font-medium text-white text-lg max-w-[200px]">
                                {cert.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
