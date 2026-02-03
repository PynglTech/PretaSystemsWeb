"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import QuoteModal from "./QuoteModal";

/**
 * Pricing component with hydration-safe randomized grid.
 */
const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Configuration for the grid
    const gridRows = 5;
    const gridCols = 8;

    const renderGrid = (side: 'left' | 'right') => {
        return (side === 'left' ?
            <div className={`grid grid-rows-${gridRows} gap-1 pl-4 lg:pl-6`}>
                {Array.from({ length: gridRows }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex gap-1">
                        {Array.from({ length: gridCols }).map((_, colIndex) => {
                            const isVisible = (rowIndex + colIndex) % 3 === 0 || Math.random() > 0.7;
                            const delay = (Math.random() * 3).toFixed(1);
                            const duration = (2.5 + Math.random() * 2).toFixed(1);

                            if (!isVisible) return <div key={`${side}-${rowIndex}-${colIndex}`} className="w-10 h-10" />;

                            return (
                                <div
                                    key={`${side}-${rowIndex}-${colIndex}`}
                                    className={`
                                        w-10 h-10 rounded-lg border border-white/[0.15] transition-colors duration-500
                                        bg-white/[0.1] grid-glimmer
                                    `}
                                    style={{
                                        animationDelay: `${delay}s`,
                                        animationDuration: `${duration}s`
                                    } as React.CSSProperties}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
            :
            <div className={`grid grid-rows-${gridRows} gap-1 pr-4 lg:pr-6`}>
                {Array.from({ length: gridRows }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex gap-1 flex-row-reverse">
                        {Array.from({ length: gridCols }).map((_, colIndex) => {
                            const isVisible = (rowIndex + colIndex) % 3 === 1 || Math.random() > 0.7;
                            const delay = (Math.random() * 3).toFixed(1);
                            const duration = (2.5 + Math.random() * 2).toFixed(1);

                            if (!isVisible) return <div key={`${side}-${rowIndex}-${colIndex}`} className="w-10 h-10" />;

                            return (
                                <div
                                    key={`${side}-${rowIndex}-${colIndex}`}
                                    className={`
                                        w-10 h-10 rounded-lg border border-white/[0.15] transition-colors duration-500
                                        bg-white/[0.1] grid-glimmer
                                    `}
                                    style={{
                                        animationDelay: `${delay}s`,
                                        animationDuration: `${duration}s`
                                    } as React.CSSProperties}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section id="pricing" className="relative w-full min-h-[300px] lg:min-h-[260px] bg-[#070B1A] overflow-hidden flex items-center justify-center opacity-100 py-12 lg:py-0">
            {/* Animation Styles */}
            <style jsx global>{`
                @keyframes glimmer {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.8; }
                }
                .grid-glimmer {
                    animation: glimmer 3s ease-in-out infinite;
                }
            `}</style>

            {/* Left Grid */}
            <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-full flex items-center pointer-events-none opacity-40 lg:opacity-100"
                style={{
                    maskImage: 'linear-gradient(to right, black 25%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, black 25%, transparent 100%)'
                }}
            >
                {mounted && renderGrid('left')}
            </div>

            {/* Right Grid */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 h-full flex items-center justify-end pointer-events-none opacity-40 lg:opacity-100"
                style={{
                    maskImage: 'linear-gradient(to left, black 25%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, black 25%, transparent 100%)'
                }}
            >
                {mounted && renderGrid('right')}
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-24">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-white mb-0"
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontWeight: 800,
                                fontSize: '24px',
                                lineHeight: '60px',
                                letterSpacing: '-0.7px',
                                // textTransform: 'capitalize' - removed to fix "Program" capitalization
                            }}
                        >
                            Scale your experimentation program.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-1 max-w-2xl"
                        >
                            <p style={{
                                fontFamily: 'var(--font-inter-tight), sans-serif',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '36px',
                                letterSpacing: '-0.5px',
                                color: '#4DFB0C'
                            }}>
                                Need custom pricing?
                            </p>
                            <p style={{
                                fontFamily: 'var(--font-inter-tight), sans-serif',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '20px',
                                letterSpacing: '-0.5px'
                            }} className="text-zinc-400 max-w-lg">
                                Whether you&#39;re a startup validating your first MVP or an enterprise running 1,000 concurrent tests, we have a plan that fits. Let&#39;s build a custom package for you.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full lg:w-auto"
                    >
                        <motion.button
                            onClick={() => setIsModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full lg:w-auto bg-[#4DFB0C] text-black px-6 py-3 rounded-lg font-medium text-base flex items-center justify-center gap-2 transition-colors hover:bg-[#43e00b] cursor-pointer shadow-[0_0_20px_rgba(77,251,12,0.2)]"
                        >
                            Contact for pricing
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>

                </div>
            </div>

            <QuoteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Pricing;