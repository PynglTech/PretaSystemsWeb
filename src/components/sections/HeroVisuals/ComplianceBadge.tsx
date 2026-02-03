"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const ComplianceBadge = () => {
    return (
        <motion.div
            className="absolute z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
        >
            <div className="w-32 h-32 rounded-[24px] bg-[#0A0A0A] border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-neon-green/10 blur-[30px]" />

                <span className="text-[10px] uppercase tracking-wider text-neon-green font-semibold mb-2">Compliance</span>

                <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center border border-neon-green/20 group-hover:bg-neon-green/20 transition-colors">
                    <ShieldCheck className="w-6 h-6 text-neon-green" />
                </div>
            </div>

            {/* Trace Line connection to Team Cluster (approximate) */}
            <svg className="hidden md:block absolute top-full left-1/2 w-[1px] h-40 pointer-events-none overflow-visible">
                <motion.path
                    d="M 0 0 V 100"
                    stroke="#1D4D3F"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                />
            </svg>
        </motion.div>
    );
};
