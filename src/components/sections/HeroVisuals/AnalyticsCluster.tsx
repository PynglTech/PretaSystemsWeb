"use client";

import { motion } from "framer-motion";
import { MousePointer2, Eye, XCircle, Trophy, BarChart2 } from "lucide-react";

export const AnalyticsCluster = () => {
    return (
        <motion.div
            className="absolute z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <div className="relative group">
                {/* Floating Badge */}
                <div className="absolute -top-12 left-0 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 mb-4">
                    <BarChart2 className="w-4 h-4 text-neon-green" />
                    <span className="text-xs font-semibold text-gray-300">Analytics</span>
                </div>

                {/* Main Dark Card */}
                <div className="w-[280px] h-[220px] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/5 rounded-[32px] p-6 relative overflow-hidden shadow-2xl">

                    {/* Inner glowing orb */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neon-green/5 blur-[50px] rounded-full" />

                    {/* Scattered Metrics */}
                    <div className="relative z-10 w-full h-full">
                        {/* Clicked - Top Left */}
                        <motion.div
                            className="absolute top-4 left-2 flex items-center gap-3"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="relative">
                                <MousePointer2 className="w-5 h-5 text-yellow-400 fill-yellow-400/20" />
                                <motion.span
                                    className="absolute -top-1 -right-1 flex h-2 w-2"
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                                </motion.span>
                            </div>
                            <span className="text-[13px] font-medium text-gray-300">Clicked</span>
                        </motion.div>

                        {/* Impressions - Middle Right */}
                        <motion.div
                            className="absolute top-16 right-2 flex items-center gap-3 flex-row-reverse"
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <Eye className="w-5 h-5 text-purple-400" />
                            <span className="text-[13px] font-medium text-gray-300">Impressions</span>
                        </motion.div>

                        {/* Modal Dismissed - Bottom Left */}
                        <motion.div
                            className="absolute bottom-16 left-4 flex items-center gap-3"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <XCircle className="w-5 h-5 text-red-400" />
                            <span className="text-[13px] font-medium text-gray-300">Modal dismissed</span>
                        </motion.div>

                        {/* Action Completed - Bottom Right */}
                        <motion.div
                            className="absolute bottom-4 right-8 flex items-center gap-3"
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                            <Trophy className="w-5 h-5 text-green-400" />
                            <span className="text-[13px] font-medium text-gray-300">Action completed</span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Connecting Line Trace (going down/right) */}
            <svg className="hidden md:block absolute -bottom-20 left-1/2 w-full h-20 pointer-events-none overflow-visible">
                <path
                    d="M 20 0 V 40 Q 20 60 40 60 H 100"
                    fill="none"
                    stroke="#1D4D3F"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-30"
                />
            </svg>
        </motion.div>
    );
};
