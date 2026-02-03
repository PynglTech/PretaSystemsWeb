"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";
import Modal from "@/components/ui/Modal";
import BrowserMockup from "@/components/ui/BrowserMockup";
import { LeftHeroCluster } from "./HeroVisuals/LeftHeroCluster";
import { RightHeroCluster } from "./HeroVisuals/RightHeroCluster";
import { TeamCluster } from "./HeroVisuals/TeamCluster";
import { TeamIntegrationsCluster } from "./HeroVisuals/TeamIntegrationsCluster";

import { IntegrationsCluster } from "./HeroVisuals/IntegrationsCluster";
import { AnalyticsCluster } from "./HeroVisuals/AnalyticsCluster";
import { ComplianceBadge } from "./HeroVisuals/ComplianceBadge";
import { BrowserDock } from "./HeroVisuals/BrowserDock";
import { PhoneHeroVisual } from "./HeroVisuals/PhoneHeroVisual";
import QuoteModal from "./QuoteModal";


const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1 + 0.5,
            duration: 0.8,
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    }),
};

export default function Hero() {
    const [isSandboxOpen, setIsSandboxOpen] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);


    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 relative overflow-hidden bg-[#070B1A]">
            {/* Background Gradients & Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.08)_0%,_transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(rgba(16,185,129,0.1)_1px,_transparent_1px)] bg-[length:32px_32px]" />

            {/* Desktop Visual Clusters */}
            <div className="hidden md:block absolute inset-0 pointer-events-none w-full h-full overflow-hidden">
                <div className="pointer-events-auto">
                    <LeftHeroCluster />
                </div>
                <div className="pointer-events-auto">
                    <RightHeroCluster />
                </div>
                <div className="pointer-events-auto">
                    <IntegrationsCluster />
                </div>
                <div className="pointer-events-auto">
                    <TeamCluster />
                </div>
                <div className="pointer-events-auto">
                    <TeamIntegrationsCluster />
                </div>
            </div>

            {/* Mobile Visual Clusters - Optimized to match Figma reference */}
            <div className="md:hidden absolute inset-0 pointer-events-none w-full h-full overflow-hidden">
                {/* Top Left: Browser Dock - positioned to match Figma */}
                <div className="absolute left-[4%] top-[120px] scale-[0.75] origin-left pointer-events-auto">
                    <BrowserDock />
                </div>

                {/* Top Right: Compliance Badge - positioned to match Figma */}
                <div className="absolute right-[4%] top-[100px] scale-[0.65] origin-right pointer-events-auto">
                    <ComplianceBadge />
                </div>

                {/* Left Side: Analytics - positioned below content area */}
                <div className="absolute left-[-5px] bottom-[320px] scale-[0.6] origin-left pointer-events-auto">
                    <AnalyticsCluster />
                </div>

                {/* Right Side: Team Cluster - positioned to match Figma */}
                <div className="absolute right-[-15px] bottom-[300px] scale-[0.6] origin-right pointer-events-auto">
                    <TeamCluster />
                </div>

                {/* Bottom: Integrations Bar - centered at bottom */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[1%] scale-[0.75] origin-bottom pointer-events-auto">
                    <IntegrationsCluster />
                </div>

                {/* Mobile Hero Visual Background from Figma */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-auto">
                    <PhoneHeroVisual
                        onRequestAccess={() => {
                            console.log("Mobile Request access clicked - Scrolling to pricing");
                            const pricingSection = document.getElementById('pricing');
                            if (pricingSection) {
                                pricingSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        onViewSandbox={() => {
                            console.log("Mobile View sandbox clicked - Opening Browser Mockup");
                            setIsSandboxOpen(true);
                        }}
                    />
                </div>

            </div>

            {/* Main Content - Centered and optimized for mobile - Hidden on mobile because PhoneHeroVisual contains the text */}
            <div className="container mx-auto px-4 hidden md:flex flex-col items-center z-30 relative text-center -mt-10 md:-mt-48 lg:-mt-40 xl:-mt-48">
                {/* Tech Badge - "The Ghost Hook" branding */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-4 md:mb-8"
                >
                    <span className="font-inter-tight font-bold text-white text-base md:text-xl tracking-wide">
                        The <span className="text-neon-green">"Ghost"</span> Hook
                    </span>
                </motion.div>

                {/* Headline - optimized for mobile readability */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-inter-tight font-bold tracking-tighter mb-4 md:mb-8 max-w-[95vw] md:max-w-[90vw] lg:max-w-[70vw] xl:max-w-[90vw] leading-[1.15] md:leading-[0.95] lg:leading-[0.85]">
                    <div className="block mb-1 md:mb-2 lg:mb-4">
                        {"Test features on your live site".split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={wordVariants}
                                initial="hidden"
                                animate="visible"
                                className="inline-block mr-1 sm:mr-2 md:mr-3 lg:mr-5 text-white"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                    <div className="block">
                        {"without code.".split(" ").map((word, i) => (
                            <motion.span
                                key={i + 10}
                                custom={i + 7}
                                variants={wordVariants}
                                initial="hidden"
                                animate="visible"
                                className="inline-block mr-1 sm:mr-2 md:mr-3 lg:mr-5 text-white"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                </h1>

                {/* Sub-headline - optimized for mobile */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="text-white/90 text-sm md:text-lg lg:text-xl max-w-4xl px-6 md:px-6 mb-6 md:mb-10 font-light leading-relaxed"
                >
                    The 'Ghost' SDK lets Product Managers inject native buttons, modals, and banners to validate{" "}
                    <br className="hidden md:block" />
                    demand. Invisible to the user, governed by the enterprise
                </motion.p>

                {/* Buttons - optimized for mobile touch */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-3 md:gap-6"
                >
                    <MagneticButton strength={0.2} onClick={() => {
                        console.log("Request access button clicked - Scrolling to pricing");
                        const pricingSection = document.getElementById('pricing');
                        if (pricingSection) {
                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}>
                        <button
                            type="button"
                            className="px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-neon-green text-black font-bold font-inter-tight text-lg md:text-xl hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] min-w-[220px] sm:min-w-[200px]"
                        >
                            Request access
                        </button>
                    </MagneticButton>


                    <MagneticButton strength={0.2} onClick={() => {
                        console.log("View sandbox button clicked - Opening Browser Mockup");
                        setIsSandboxOpen(true);
                    }}>
                        <button
                            type="button"
                            className="px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-white/20 text-neon-green font-bold font-inter-tight text-lg md:text-xl hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3 group min-w-[220px] sm:min-w-[200px]"
                        >
                            View sandbox
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Sandbox Modal */}
            <Modal isOpen={isSandboxOpen} onClose={() => setIsSandboxOpen(false)} className="max-w-[1400px]">
                <div className="p-8">
                    <BrowserMockup onClose={() => setIsSandboxOpen(false)} />
                </div>
            </Modal>

            {/* Request Quote Modal */}
            <QuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </section>

    );
}

