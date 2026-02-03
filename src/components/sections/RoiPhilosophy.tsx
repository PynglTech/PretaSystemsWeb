"use client";

import React, { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Gauge, Shield, LineChart, Hourglass, AlertTriangle, TrendingUp, Zap, Lock } from "lucide-react";

export default function RoiPhilosophy() {
    const [activeCard, setActiveCard] = useState<string | null>(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Sticky scroll logic
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!hasInteracted) {
            if (latest < 0.2) {
                setActiveCard(null);
            } else if (latest < 0.45) {
                setActiveCard('velocity');
            } else if (latest < 0.7) {
                setActiveCard('risk');
            } else {
                setActiveCard('insight');
            }
        }
    });

    const toggleCard = (type: string) => {
        setHasInteracted(true);
        if (activeCard === type) {
            setActiveCard(null);
        } else {
            setActiveCard(type);
        }
    };

    const getCardClasses = (type: string) => {
        const baseClasses = "card-transition relative bg-card rounded-2xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden";
        if (activeCard === type) {
            if (type === 'velocity') return `${baseClasses} bg-accent/10 border-accent shadow-[0_0_20px_rgba(0,255,65,0.2)] scale-105`;
            if (type === 'risk') return `${baseClasses} bg-electric/10 border-electric shadow-[0_0_20px_rgba(139,92,246,0.2)] scale-105`;
            if (type === 'insight') return `${baseClasses} bg-ocean/10 border-ocean shadow-[0_0_20px_rgba(59,130,246,0.2)] scale-105`;
        }
        return baseClasses;
    };

    const getButtonClasses = (type: string) => {
        const isActive = activeCard === type;
        return `toggle-btn w-12 h-6 rounded-full relative p-1 transition-all ${isActive ? 'bg-white' : 'bg-white/10'}`;
    };

    const getDotClasses = (type: string) => {
        const isActive = activeCard === type;
        return `dot w-4 h-4 rounded-full transition-all ${isActive ? 'translate-x-6 bg-dark' : 'bg-white'}`;
    };

    const getCardText = (type: string) => {
        if (activeCard === 'velocity' && type === 'velocity') return "Live instantly. Deploy independent of the dev roadmap.";
        if (activeCard === 'risk' && type === 'risk') return "Zero Risk. Validate demand with a UI facade in 24 hours.";
        if (activeCard === 'insight' && type === 'insight') return "Unified Truth. Behavior and feedback in one view.";

        if (type === 'velocity') return "Stuck in the backlog. Waiting for next release.";
        if (type === 'risk') return "High Risk. Coding backend logic for a hunch.";
        if (type === 'insight') return "Data Silos. Guessing why users churned.";
        return "";
    };

    const getTextClasses = (type: string) => {
        return `card-text text-lg leading-snug ${activeCard === type ? 'text-white' : 'text-gray-400'}`;
    };

    return (
        <>
            <style jsx>{`
                .card-transition { transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
            `}</style>

            {/* Section 1: ROI & Philosophy */}
            <section id="validation" className="pt-16 md:pt-32 pb-12 md:pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
                <div className="max-w-6xl mb-16 md:mb-24">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-jetbrains-mono font-bold mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tight md:tracking-tighter text-balance">
                        Stop Committing <br />
                        <span className="text-white/20">Unvalidated Code.</span>
                    </h1>
                    <p className="text-base md:text-xl text-white/90 leading-relaxed font-medium">
                        Dev cycles are your scarcest resource. Preta decouples hypothesis validation from your CI/CD pipeline, ensuring you never merge features that  fail to perform.
                    </p>
                </div>

                <div id="philosophy-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Pillar 1 */}
                    <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 space-y-6 group hover:bg-white/[0.04] transition-all duration-500">
                        <div className="w-10 h-10 flex items-center justify-start">
                            <Gauge className="text-accent w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-accent leading-tight">
                                Minimise cycle time
                            </h3>
                            <p className="text-white/90 leading-relaxed text-sm">
                                Compress validation loops from sprints to hours. Replace static requirements with ephemeral, interactive prototypes that generate real user signal before backend implementation begins.
                            </p>
                        </div>
                    </div>

                    {/* Pillar 2 */}
                    <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 space-y-6 group hover:bg-white/[0.04] transition-all duration-500">
                        <div className="w-10 h-10 flex items-center justify-start">
                            <Shield className="text-accent w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-accent leading-tight">
                                Production-grade isolation.
                            </h3>
                            <p className="text-white/90 leading-relaxed text-sm">
                                All experiments run in a sandboxed overlay. Failed hypotheses never pollute your main branch or touch your core codebase, guaranteeing zero accrued technical debt.
                            </p>
                        </div>
                    </div>

                    {/* Pillar 3 */}
                    <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 space-y-6 group hover:bg-white/[0.04] transition-all duration-500">
                        <div className="w-10 h-10 flex items-center justify-start">
                            <LineChart className="text-accent w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-accent leading-tight">
                                Deterministic decision making.
                            </h3>
                            <p className="text-white/90 leading-relaxed text-sm">
                                Eliminate subjective consensus. Align Engineering, Product, and Design with binary telemetry and statistically significant engagement metrics, not "gut feelings."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: The Gap Fill (Sticky Scroll) */}
            <div ref={containerRef} className="relative h-auto lg:h-[450vh]" style={{ contain: 'layout' }}>
                <div className="relative lg:sticky top-0 min-h-screen lg:h-screen flex flex-col justify-start bg-[#070B1A] border-y border-white/5 pt-16 md:pt-24 lg:pt-32 pb-12">
                    <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12">

                        <div className="text-center mb-12 md:mb-10">
                            <h2
                                className="text-white mb-2"
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontWeight: 800,
                                    fontSize: '26px',
                                    lineHeight: '40px',
                                    letterSpacing: '-0.5px',
                                    textAlign: 'center'
                                }}
                            >
                                The reality gap
                            </h2>
                            <p className="text-white/90 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mt-2 text-balance">
                                Most teams think they are agile. The reality is they are just building waterfalls in shorter sprints. Bridge the gap between output and outcome.
                            </p>
                        </div>

                        <div id="interactive-cards" className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
                            {/* Card 1: Velocity */}
                            <div id="card-velocity" className={`p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col transition-all duration-700 ${activeCard === 'velocity' ? 'border-white/20 bg-white/[0.04]' : ''}`}>
                                <div className="flex justify-between items-center mb-4 md:mb-6">
                                    <h3
                                        style={{
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontWeight: 500,
                                            fontSize: '28px',
                                            lineHeight: '19.63px',
                                            letterSpacing: '0.88px',
                                            color: activeCard === 'velocity' ? '#39FF14' : '#FFFFFF'
                                        }}
                                    >
                                        Velocity
                                    </h3>
                                    <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 cursor-pointer ${activeCard === 'velocity' ? 'bg-[#39FF14]' : 'bg-white/10'}`} onClick={() => toggleCard('velocity')}>
                                        <div className={`absolute top-1 left-1 w-3 h-3 rounded-full transition-transform duration-300 ${activeCard === 'velocity' ? 'translate-x-5 bg-black' : 'bg-white'}`} />
                                    </div>
                                </div>
                                <p className="text-white/60 text-xs md:text-sm mb-6 md:mb-12 h-10 md:h-12">
                                    {activeCard === 'velocity' ? 'Live instantly. Deploy independent of the dev roadmap.' : 'Stuck in the backlog. Waiting for next release.'}
                                </p>
                                <div className="h-56 md:h-64 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                                    {activeCard === 'velocity' ? (
                                        /* ON STATE: Timeline */
                                        <div className="relative z-10 w-full px-4 flex flex-col items-center">
                                            <div className="relative w-full flex justify-between items-center mb-12">
                                                {/* Connecting Line */}
                                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 z-0" />
                                                <div className="absolute top-1/2 left-0 h-[1px] bg-accent z-0 transition-all duration-1000 w-full" />

                                                {/* Nodes */}
                                                <div className="relative z-10 flex flex-col items-center">
                                                    <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_#39FF14]" />
                                                    <span className="mt-4 font-mono text-[10px] text-white/40">Idea</span>
                                                </div>
                                                <div className="relative z-10 flex flex-col items-center">
                                                    <div className="absolute -top-7 px-2 py-0.5 bg-accent/10 border border-accent/20 rounded text-[9px] text-accent animate-pulse">Active</div>
                                                    <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_#39FF14]" />
                                                    <span className="mt-4 font-mono text-[10px] text-white/40">UI Live</span>
                                                </div>
                                                <div className="relative z-10 flex flex-col items-center">
                                                    <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_#39FF14]" />
                                                    <span className="mt-4 font-mono text-[10px] text-white/40">User Sees</span>
                                                </div>
                                                <div className="relative z-10 flex flex-col items-center">
                                                    <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center bg-black">
                                                        <Zap className="w-4 h-4 text-accent fill-accent" />
                                                    </div>
                                                    <span className="mt-2 font-mono text-[10px] text-accent font-bold">Outcome</span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        /* OFF STATE: Hourglass + Loading Bar */
                                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                            {/* Faint Hourglass Background */}
                                            <Hourglass className="w-32 h-32 text-white/5" strokeWidth={1} />

                                            {/* Loading Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {/* Container for Bar + Text */}
                                                <div className="w-full px-8 flex items-center gap-4">
                                                    {/* Green Bar */}
                                                    <div className="flex-1 h-1.5 bg-[#39FF14] rounded-full shadow-[0_0_10px_#39FF14]" />

                                                    {/* Text */}
                                                    <div className="font-mono text-xs font-bold text-white tracking-widest whitespace-nowrap">
                                                        LOADING 99%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-700 ${activeCard === 'velocity' ? 'opacity-100' : 'opacity-0'}`} />
                                </div>
                            </div>

                            {/* Card 2: Risk */}
                            <div id="card-risk" className={`p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col transition-all duration-700 ${activeCard === 'risk' ? 'border-white/20 bg-white/[0.04]' : ''}`}>
                                <div className="flex justify-between items-center mb-4 md:mb-6">
                                    <h3
                                        style={{
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontWeight: 500,
                                            fontSize: '28px',
                                            lineHeight: '19.63px',
                                            letterSpacing: '0.88px',
                                            color: activeCard === 'risk' ? '#FF9E0B' : '#FFFFFF'
                                        }}
                                    >
                                        Risk
                                    </h3>
                                    <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 cursor-pointer ${activeCard === 'risk' ? 'bg-[#FF9E0B]' : 'bg-white/10'}`} onClick={() => toggleCard('risk')}>
                                        <div className={`absolute top-1 left-1 w-3 h-3 rounded-full transition-transform duration-300 ${activeCard === 'risk' ? 'translate-x-5 bg-black' : 'bg-white'}`} />
                                    </div>
                                </div>
                                <p className="text-white/60 text-xs md:text-sm mb-6 md:mb-12 h-10 md:h-12">
                                    {activeCard === 'risk' ? 'Zero Risk. Validate demand with a UI facade in 24 hours.' : 'High Risk. Coding backend logic for a hunch.'}
                                </p>
                                <div className="h-48 md:h-64 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                                    {activeCard === 'risk' ? (
                                        /* ON STATE: Lockdown Mockup */
                                        <div className="relative z-10 w-full flex justify-center items-center">
                                            <div className="w-48 h-40 bg-[#121212] border border-white/10 rounded-xl relative overflow-hidden shadow-2xl">
                                                {/* Header Bar */}
                                                <div className="w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                                                    <div className="w-8 h-1.5 bg-white/10 rounded-full" />
                                                </div>

                                                {/* Content */}
                                                <div className="p-4 space-y-4">
                                                    <div className="w-full h-8 bg-[#FF9E0B]/10 border border-[#FF9E0B]/20 rounded-md flex items-center justify-center">
                                                        <div className="w-2/3 h-1 bg-[#FF9E0B]/40 rounded-full" />
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div className="flex-1 h-12 bg-white/5 rounded-md" />
                                                        <div className="flex-1 h-12 bg-white/5 rounded-md" />
                                                    </div>
                                                </div>

                                                {/* Lock Icon */}
                                                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#FFB000] flex items-center justify-center shadow-[0_0_15px_rgba(255,176,0,0.5)] border border-white/20">
                                                    <Lock className="w-3 h-3 text-black fill-black" strokeWidth={3} />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        /* OFF STATE: Code Snippet + Bright Triangle */
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <div className="text-white/10 select-none font-mono text-[10px] space-y-0.5 leading-tight">
                                                <div>function deploy() &#123;</div>
                                                <div className="ml-4">const guess = Math.random();</div>
                                                <div className="ml-4">if (guess &gt; 0.5) return "success";</div>
                                                <div className="ml-4">throw new Error("Critical Failure");</div>
                                                <div>&#125;</div>
                                                <div className="mt-2">// Execute without tests</div>
                                                <div>deploy();</div>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <AlertTriangle className="w-24 h-24 text-[#FF9E0B] drop-shadow-[0_0_15px_rgba(255,158,11,0.4)]" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent transition-opacity duration-700 ${activeCard === 'risk' ? 'opacity-100' : 'opacity-0'}`} />
                                </div>
                            </div>

                            {/* Card 3: Insight */}
                            <div id="card-insight" className={`p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col transition-all duration-700 ${activeCard === 'insight' ? 'border-white/20 bg-white/[0.04]' : ''}`}>
                                <div className="flex justify-between items-center mb-4 md:mb-6">
                                    <h3
                                        style={{
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontWeight: 500,
                                            fontSize: '28px',
                                            lineHeight: '19.63px',
                                            letterSpacing: '0.88px',
                                            color: activeCard === 'insight' ? '#3B82F6' : '#FFFFFF'
                                        }}
                                    >
                                        Insight
                                    </h3>
                                    <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 cursor-pointer ${activeCard === 'insight' ? 'bg-[#3B82F6]' : 'bg-white/10'}`} onClick={() => toggleCard('insight')}>
                                        <div className={`absolute top-1 left-1 w-3 h-3 rounded-full transition-transform duration-300 ${activeCard === 'insight' ? 'translate-x-5 bg-black' : 'bg-white'}`} />
                                    </div>
                                </div>
                                <p className="text-white/60 text-xs md:text-sm mb-6 md:mb-12 h-10 md:h-12">
                                    {activeCard === 'insight' ? 'Unified Truth. Behavior and feedback in one view.' : 'Data silos. guessing why users churned.'}
                                </p>
                                <div className="h-48 md:h-64 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                                    {activeCard === 'insight' ? (
                                        /* ON STATE: Event-Based Chart */
                                        /* OFF STATE: The new SVG you provided */
                                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
                                            <svg
                                                viewBox="0 0 361 297"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-full h-auto max-h-[180px] drop-shadow-2xl"
                                            >
                                                <rect width="361.005" height="296.5" rx="12" fill="#0E1623" fillOpacity="0.56" />
                                                <path d="M4.26855 268C10.7748 242.5 35.3929 242.742 44.1992 241.683C56.9589 240.154 70.2736 249.495 83.1194 248.443C96.2332 247.371 109.165 239.949 122.049 234.914C135.125 229.81 147.913 218.492 160.979 217.996C173.863 217.509 187.226 232.878 199.899 231.524C213.204 230.102 225.619 214.684 238.829 207.837C251.588 201.223 264.549 192.496 277.758 190.918C290.518 189.389 304.12 200.074 316.679 197.688C325.651 195.98 338.627 188.084 355.608 174" stroke="#3B82F6" strokeWidth="3" strokeMiterlimit="2" />

                                                <path d="M53.8169 233.559H52.8169V185.559H53.8169V233.559Z" fill="url(#paint0_linear_1174_403)" />

                                                <path d="M21.6138 158.059C21.6138 155.849 23.4046 154.059 25.6138 154.059H80.6138C82.8229 154.059 84.6138 155.849 84.6138 158.059V174.059C84.6138 176.268 82.8229 178.059 80.6138 178.059H25.6138C23.4046 178.059 21.6138 176.268 21.6138 174.059V158.059Z" fill="#3B82F6" fillOpacity="0.1" />
                                                <path d="M25.6138 154.559H80.6138C82.5468 154.559 84.1138 156.126 84.1138 158.059V174.059C84.1138 175.992 82.5468 177.559 80.6138 177.559H25.6138C23.6808 177.559 22.1138 175.992 22.1138 174.059V158.059C22.1138 156.126 23.6808 154.559 25.6138 154.559Z" stroke="#3B82F6" strokeOpacity="0.2" />
                                                <text x="53" y="172" textAnchor="middle" fill="#3B82F6" fontSize="20" fontWeight="bold">Impression</text>

                                                <path d="M146.614 123.059C146.614 120.849 148.405 119.059 150.614 119.059H196.192C198.401 119.059 200.192 120.849 200.192 123.059V138.559C200.192 140.768 198.401 142.559 196.192 142.559H150.614C148.405 142.559 146.614 140.768 146.614 138.559V123.059Z" fill="#3B82F6" fillOpacity="0.1" />
                                                <path d="M150.614 119.559H196.192C198.125 119.559 199.692 121.126 199.692 123.059V138.559C199.692 140.492 198.125 142.059 196.192 142.059H150.614C148.681 142.059 147.114 140.492 147.114 138.559V123.059C147.114 121.126 148.681 119.559 150.614 119.559Z" stroke="#3B82F6" strokeOpacity="0.2" />
                                                <text x="173" y="137" textAnchor="middle" fill="#3B82F6" fontSize="20" fontWeight="bold">Click</text>
                                                <path d="M173.895 214.559H172.895V150.559H173.895V214.559Z" fill="url(#paint1_linear_1174_403)" />


                                                <path d="M264.301 128.559C264.301 126.349 266.092 124.559 268.301 124.559H324.848C327.057 124.559 328.848 126.349 328.848 128.559V144.059C328.848 146.268 327.057 148.059 324.848 148.059H268.301C266.092 148.059 264.301 146.268 264.301 144.059V128.559Z" fill="#3B82F6" fillOpacity="0.1" />
                                                <path d="M268.301 125.059H324.848C326.781 125.059 328.348 126.626 328.348 128.559V144.059C328.348 145.992 326.781 147.559 324.848 147.559H268.301C266.368 147.559 264.801 145.992 264.801 144.059V128.559C264.801 126.626 266.368 125.059 268.301 125.059Z" stroke="#3B82F6" strokeOpacity="0.2" />
                                                <text x="296" y="143" textAnchor="middle" fill="#3B82F6" fontSize="20" fontWeight="bold">Dismissed</text>
                                                <path d="M297.067 188.059H296.067V156.059H297.067V188.059Z" fill="url(#paint2_linear_1174_403)" />

                                                <defs>
                                                    <linearGradient id="paint0_linear_1174_403" x1="53.3169" y1="185.559" x2="53.3169" y2="137.559" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#3B82F6" />
                                                        <stop offset="1" stopOpacity="0" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_1174_403" x1="173.395" y1="150.559" x2="173.395" y2="86.5586" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#3B82F6" />
                                                        <stop offset="1" stopOpacity="0" />
                                                    </linearGradient>
                                                    <linearGradient id="paint2_linear_1174_403" x1="296.567" y1="156.059" x2="296.567" y2="124.059" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#3B82F6" />
                                                        <stop offset="1" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    ) : (
                                        /* OFF STATE: User-provided SVG */
                                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
                                            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-75 transition-all duration-500">
                                                <g clipPath="url(#clip0_insight_off)">
                                                    <path d="M20.4165 23.332V102.082C20.4165 106.723 22.2602 111.175 25.5421 114.456C28.824 117.738 33.2752 119.582 37.9165 119.582H116.667" stroke="#142032" strokeWidth="10.6061" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M37.9165 87.4987L51.0415 74.3737L64.1665 61.2487L84.5832 81.6654L116.667 49.582" stroke="#142032" strokeWidth="10.6061" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M42 83L58.8635 66.8182" stroke="white" strokeOpacity="0.85" strokeWidth="1.01818" strokeDasharray="2.04 2.04" />
                                                    <path d="M68.9395 66.8164L73.7122 71.324L78.4849 75.8316" stroke="white" strokeOpacity="0.85" strokeWidth="1.01818" strokeDasharray="2.04 2.04" />
                                                    <path d="M64.1665 58.332C66.8023 58.332 68.9398 60.4687 68.9399 63.1045C68.9399 65.7404 66.8024 67.8779 64.1665 67.8779C61.5307 67.8778 59.394 65.7403 59.394 63.1045C59.3942 60.4688 61.5308 58.3322 64.1665 58.332Z" fill="#3B82F6" />
                                                    <path d="M64.1665 58.332C66.8023 58.332 68.9398 60.4687 68.9399 63.1045C68.9399 65.7404 66.8024 67.8779 64.1665 67.8779C61.5307 67.8778 59.394 65.7403 59.394 63.1045C59.3942 60.4688 61.5308 58.3322 64.1665 58.332Z" stroke="#E5E7EB" />
                                                    <path d="M117.298 48.0006L90.376 74.6218" stroke="white" strokeOpacity="0.85" strokeWidth="1.01818" strokeDasharray="2.04 2.04" />
                                                    <g filter="url(#filter0_insight_off)">
                                                        <path d="M121.97 33.938C121.97 29.2519 125.769 25.4531 130.455 25.4531C135.141 25.4531 138.939 29.2519 138.939 33.938C138.939 38.624 135.141 42.4228 130.455 42.4228C125.769 42.4228 121.97 38.624 121.97 33.938Z" fill="#3B82F6" />
                                                    </g>
                                                    <path d="M84.3179 74.2422C87.5394 74.2422 90.1517 76.8537 90.1519 80.0752C90.1519 83.2969 87.5395 85.9092 84.3179 85.9092C81.0964 85.909 78.4849 83.2967 78.4849 80.0752C78.485 76.8538 81.0965 74.2424 84.3179 74.2422Z" fill="#3B82F6" />
                                                    <path d="M84.3179 74.2422C87.5394 74.2422 90.1517 76.8537 90.1519 80.0752C90.1519 83.2969 87.5395 85.9092 84.3179 85.9092C81.0964 85.909 78.4849 83.2967 78.4849 80.0752C78.485 76.8538 81.0965 74.2424 84.3179 74.2422Z" stroke="#E5E7EB" />
                                                    <path d="M39 83C41.2091 83 43 84.7909 43 87C43 89.2091 41.2091 91 39 91C36.7909 91 35 89.2091 35 87C35 84.7909 36.7909 83 39 83Z" fill="#3B82F6" />
                                                    <path d="M39 83C41.2091 83 43 84.7909 43 87C43 89.2091 41.2091 91 39 91C36.7909 91 35 89.2091 35 87C35 84.7909 36.7909 83 39 83Z" stroke="#E5E7EB" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_insight_off" x="111.67" y="19.1531" width="37.5697" height="37.5688" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy="4" />
                                                        <feGaussianBlur stdDeviation="5.15" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0.21884 0 0 0 0 0.505462 0 0 0 0 0.973745 0 0 0 0.15 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_insight_off" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_insight_off" result="shape" />
                                                    </filter>
                                                    <clipPath id="clip0_insight_off">
                                                        <rect width="140" height="140" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-transparent transition-opacity duration-700 ${activeCard === 'insight' ? 'opacity-100' : 'opacity-0'}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}