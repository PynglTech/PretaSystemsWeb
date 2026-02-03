"use client";

import { motion, useScroll, AnimatePresence, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
    Slack, Copy, Image as LucideImage, LayoutList, Star, MousePointer2, Link, Eye,
    Percent, Globe, ExternalLink, BarChart3, Clock, UserCheck,
    FlaskConical, CreditCard, MapPin, Building2, UserPlus, User,
    Smartphone as Mobile, Monitor, Search, Smartphone, Github, Cloud,
    Trash2, Trophy
} from "lucide-react";

// --- ANTI-GRAVITY GRAPH (Step 03 Logic) ---
const GRAPH_NODES = [
    { id: 'country', label: 'Country', x: 20, y: 20, icon: Globe },
    { id: 'engagement', label: 'Engagement', x: 60, y: 15, icon: BarChart3 },
    { id: 'traffic', label: 'Traffic Source', x: 40, y: 40, icon: ExternalLink },
    { id: 'time', label: 'Time Context', x: 75, y: 35, icon: Clock },
    { id: 'demographics', label: 'Demographics', x: 80, y: 60, icon: CreditCard, isHero: true },
    { id: 'account', label: 'Account State', x: 15, y: 50, icon: UserCheck },
    { id: 'visitor', label: 'Visitor Type', x: 20, y: 75, icon: UserPlus },
    { id: 'state', label: 'State', x: 55, y: 70, icon: MapPin },
    { id: 'city', label: 'City', x: 75, y: 85, icon: Building2 },
    { id: 'match', label: 'Customer Match', x: 30, y: 90, icon: User },
    { id: 'device', label: 'Device', x: 50, y: 90, icon: Smartphone },
];

const GRAPH_CONNECTIONS = [
    [0, 2], [1, 2], [1, 3], [2, 3], [3, 4], [2, 4],
    [0, 5], [5, 6], [4, 7], [7, 8], [7, 6], [5, 9],
    [2, 7], [6, 10], [9, 10]
];

const AntiGravityGraph = ({ active }: { active: boolean }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeNode, setActiveNode] = useState<string | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        let closest: string | null = null;
        let minDistance = 1000;
        GRAPH_NODES.forEach((node) => {
            const nodeX = (node.x / 100) * rect.width;
            const nodeY = (node.y / 100) * rect.height;
            const dx = mouseX - nodeX;
            const dy = mouseY - nodeY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < minDistance) {
                minDistance = distance;
                closest = node.id;
            }
        });
        setActiveNode(minDistance < 140 ? closest : null);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setActiveNode(null)}
            className="relative w-full h-full min-h-[300px]"
        >
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                {GRAPH_CONNECTIONS.map(([startIdx, endIdx], i) => {
                    const start = GRAPH_NODES[startIdx];
                    const end = GRAPH_NODES[endIdx];
                    const isConnectedToActive = activeNode === start.id || activeNode === end.id;
                    return (
                        <motion.line
                            key={i}
                            x1={`${start.x}%`} y1={`${start.y}%`}
                            x2={`${end.x}%`} y2={`${end.y}%`}
                            stroke="#ffffff"
                            strokeWidth={isConnectedToActive ? 2 : 1}
                            initial={{ strokeOpacity: 0.05 }}
                            animate={{
                                strokeOpacity: activeNode ? (isConnectedToActive ? 0.6 : 0.1) : 0.1,
                                stroke: isConnectedToActive ? "#39ff14" : "#ffffff"
                            }}
                        />
                    );
                })}
            </svg>
            {GRAPH_NODES.map((node, i) => {
                const isActive = activeNode === node.id;
                const isInactive = activeNode && !isActive;
                return (
                    <motion.div
                        key={node.id}
                        className="absolute flex flex-col items-center justify-center cursor-pointer z-10"
                        style={{ left: `${node.x}%`, top: `${node.y}%`, x: "-50%", y: "-50%" }}
                        animate={{ y: ["-5%", "5%", "-5%"] }}
                        transition={{ repeat: Infinity, duration: 3 + (i % 3), ease: "easeInOut", delay: i * 0.2 }}
                    >
                        <motion.div
                            className={`relative flex items-center gap-2 transition-all duration-300 overflow-hidden ${isActive ? "bg-[#051a05] border-[#39ff14] shadow-[0_0_25px_rgba(57,255,20,0.5)] z-20" : "bg-transparent border-transparent"
                                }`}
                            style={{ padding: isActive ? "8px 16px" : "4px 8px", borderRadius: "8px", borderWidth: isActive ? "1px" : "0px" }}
                            animate={{ scale: isActive ? (node.isHero ? 1.1 : 1.05) : (isInactive ? 0.95 : 1), opacity: isInactive ? 0.5 : 1 }}
                        >
                            <node.icon className={`relative z-10 ${isActive ? "w-5 h-5 text-[#39ff14]" : "w-4 h-4 text-gray-400"}`} />
                            <span className={`relative z-10 font-jetbrains-mono font-medium whitespace-nowrap ${isActive ? "text-sm text-white" : "text-xs text-gray-400"}`}>
                                {node.label}
                            </span>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};

// --- BRAND ICONS FOR CONNECT SECTION ---
const TeamsIcon = (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M11 5h8a2 2 0 012 2v10a2 2 0 01-2 2h-8a2 2 0 01-2-2V7a2 2 0 012-2m-2.5 4.5h-5a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h5a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5z" /></svg>;
const JiraIcon = (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M11.53 2c0 2.4 1.97 4.35 4.35 4.35h4.12L11.53 2zm0 8.85c0 2.4 1.97 4.35 4.35 4.35h4.12l-8.47-8.7zm0 8.85c0 2.4 1.97 4.35 4.35 4.35h4.12l-8.47-8.7zM2 10.85c0 2.4 1.97 4.35 4.35 4.35h4.12L2 10.85z" /></svg>;
const SnowflakeIcon = (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2l1.5 3h3l-2.5 2.5 1.5 3.5-3.5-2-3.5 2 1.5-3.5-2.5-2.5h3L12 2zm0 14l1.5 2h3l-2 2 1 3-3.5-2-3.5 2 1-3-2-2h3l1.5-2z" /></svg>;
const SalesforceIcon = (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M13.2 16.2H18c2.2 0 4-1.8 4-4s-1.8-4-4-4l-.4.1c-.8-1.5-2.4-2.5-4.2-2.5-2.4 0-4.4 1.8-4.8 4.2h-.1c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h1.2v.2c0 1.1.9 2 2 2s2-.9 2-2v-1z" /></svg>;
const AmplitudeIcon = (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2L4.5 20.29h15L12 2zm0 4.84l4.42 10.61H7.58L12 6.84zM12 9.5l-2.5 6h5L12 9.5z" /></svg>;
const AdobeIcon = (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14.58 2l9.42 20h-5.22l-3.32-7.2H10.1l-3.32 7.2H1.58L11 2h3.58zM12.79 6.27l-3.8 8.16h7.6l-3.8-8.16z" /></svg>;
const SegmentIcon = (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M17.5 14l3.5 3.5-3.5 3.5-3.5-3.5 3.5-3.5zm-11 0l3.5 3.5-3.5 3.5L3 17.5 6.5 14zm5.5-5.5L15.5 12l-3.5 3.5L8.5 12 12 8.5zm0-8.5L15.5 3.5l-3.5 3.5L8.5 3.5 12 0z" /></svg>;
const GitlabIcon = (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.72L12 15.3l9.73-5.57 1.22 3.72a.84.84 0 01-.3.94zM12 2.13l3.16 9.67H8.84L12 2.13z" /></svg>;
const GithubIcon = (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 .3a12.1 12.1 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1.1.8 2.2V23c0 .3.2.7.8.6A12.1 12.1 0 0012 .3z" /></svg>;

const CONNECT_ICONS = [
    // Row 1
    { icon: Slack, color: "#E01E5A", x: 2, y: 1 },
    { icon: TeamsIcon, color: "#4B53BC", x: 4, y: 1 },
    { icon: JiraIcon, color: "#0052CC", x: 6, y: 1 },
    // Row 2
    { icon: SnowflakeIcon, color: "#29B5E8", x: 3, y: 3 },
    { icon: SalesforceIcon, color: "#00A1E0", x: 5, y: 3 },
    { icon: AmplitudeIcon, color: "#FF6D00", x: 7, y: 3 },
    { icon: AdobeIcon, color: "#FF0000", x: 9, y: 3 },
    // Row 3
    { icon: SegmentIcon, color: "#52BD94", x: 2, y: 5 },
    { icon: GitlabIcon, color: "#FCA121", x: 4, y: 5 },
    { icon: GithubIcon, color: "#ffffff", x: 6, y: 5 }
];

// --- FEATURE ROW COMPONENT ---
const FeatureRow = ({
    title, subtitle, description, icon: Icon, visual: Visual, reverse = false
}: {
    title: string, subtitle: string, description: string, icon: any, visual: React.ReactNode, reverse?: boolean
}) => {
    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-32 py-12 lg:py-24 min-h-[500px] lg:min-h-[520px]`} style={{ contain: 'layout' }}>
            {/* Content Side */}
            <motion.div
                initial={{ opacity: 0, x: reverse ? 40 : -40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 space-y-8"
            >
                <div className="flex items-center gap-4">
                    <div className="text-gray-500">
                        <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-inter-tight font-medium text-white tracking-tight">{title}</h4>
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-jetbrains-mono font-medium text-[#39ff14] mb-4 md:mb-6">{subtitle}</h3>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-sm lg:max-w-md font-medium opacity-90 text-balance lg:text-left">
                        {description}
                    </p>
                </div>
            </motion.div>

            {/* Visual Side */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="flex-1 w-full flex items-center justify-center relative"
            >
                <div className="w-full bg-[#030503]/20 border border-white/5 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.5)] h-[360px] md:h-[420px] flex items-center justify-center relative backdrop-blur-sm" style={{ contain: 'strict' }}>
                    {Visual}
                </div>
            </motion.div>
        </div>
    );
};

export default function ShipExperiments() {
    const [step2View, setStep2View] = useState<'copy' | 'image' | 'list' | 'star' | 'persona'>('copy');
    const [step4View, setStep4View] = useState<'simple' | 'detailed' | 'list'>('simple');

    // Connect Section Sequential Animation
    const [activeConnectIdx, setActiveConnectIdx] = useState(0);
    const [lastInteracted, setLastInteracted] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            if (Date.now() - lastInteracted > 5000) {
                setActiveConnectIdx((prev) => (prev + 1) % CONNECT_ICONS.length);
            }
        }, 1500);
        return () => clearInterval(interval);
    }, [lastInteracted]);

    // Auto-cycle for Experiment and Analyze views
    useEffect(() => {
        const interval = setInterval(() => {
            if (Date.now() - lastInteracted > 3000) {
                setStep2View(prev => {
                    const views: any[] = ['copy', 'image', 'list', 'star', 'persona'];
                    const idx = (views.indexOf(prev) + 1) % views.length;
                    return views[idx];
                });
                setStep4View(prev => {
                    const views: any[] = ['simple', 'detailed', 'list'];
                    const idx = (views.indexOf(prev) + 1) % views.length;
                    return views[idx];
                });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [lastInteracted]);

    const handleInteraction = () => setLastInteracted(Date.now());

    // Mouse glow effect
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <section
            id="how-it-works"
            onMouseMove={handleMouseMove}
            className="bg-deep-void py-16 md:py-32 px-6 md:px-12 selection:bg-neon-green/30 relative overflow-hidden"
            style={{ contain: 'layout' }}
        >
            {/* Ambient Background Glows - REMOVED */}

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-32"
                >
                    <h2
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 800,
                            fontSize: '48px',
                            lineHeight: '58px',
                            letterSpacing: '-0.5px',
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#FFFFFF'
                        }}
                    >
                        Ship <span style={{
                            textTransform: 'lowercase',
                            color: '#E4E4E7'
                        }}>experiments</span> without fear
                    </h2>
                </motion.div>

                {/* Staggered Sections */}
                <div className="relative space-y-0">
                    {/* Row 1: Connect */}
                    <div className="relative">
                        <FeatureRow
                            icon={Link}
                            title="Connect"
                            subtitle="Sync your stack."
                            description="Integrate your existing repo and design files. Preta maps your UI components instantly."
                            visual={
                                <div className="relative w-full h-[360px] md:h-[400px] flex items-center justify-center" onMouseEnter={handleInteraction}>
                                    <div className="grid grid-cols-10 grid-rows-7 gap-1 md:gap-2 w-full h-full p-4 md:p-8">
                                        {CONNECT_ICONS.map((item, i) => {
                                            const isActive = activeConnectIdx === i;
                                            return (
                                                <motion.div
                                                    key={i}
                                                    style={{
                                                        gridColumn: `${item.x} / span 2`,
                                                        gridRow: `${item.y} / span 2`,
                                                    }}
                                                    animate={{
                                                        backgroundColor: isActive ? "#1A1A1A" : "#111111",
                                                        borderColor: isActive ? item.color : "rgba(255,255,255,0.1)",
                                                        boxShadow: isActive ? `0 0 25px ${item.color}33` : "none"
                                                    }}
                                                    onMouseEnter={() => {
                                                        setActiveConnectIdx(i);
                                                        handleInteraction();
                                                    }}
                                                    className="border rounded-xl md:rounded-2xl flex items-center justify-center p-4 md:p-6 transition-all duration-700 cursor-crosshair z-10"
                                                >
                                                    <item.icon
                                                        className="w-6 h-6 md:w-8 md:h-8 transition-colors duration-700"
                                                        style={{ color: isActive ? item.color : "rgba(255,255,255,0.2)" }}
                                                    />
                                                </motion.div>
                                            );
                                        })}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                            className="col-start-8 col-span-3 row-start-6 flex items-center pl-4"
                                        >
                                            <span className="text-[#39ff14] font-jetbrains-mono text-sm font-bold">+ and more</span>
                                        </motion.div>
                                    </div>
                                    {/* Center Connector Glow - REMOVED */}
                                </div>
                            }
                        />
                    </div>

                    {/* Row 2: Experiment */}
                    {(() => {
                        const content = {
                            copy: {
                                title: "Experiment",
                                subtitle: "Create & validate.",
                                description: 'Spin up a lightweight variant of your feature. Target specific user personas with a few clicks.'
                            },
                            image: {
                                title: "Creative Variants",
                                subtitle: "A/B test assets.",
                                description: 'Swap images and banners instantly. See what resonates best with your audience across different segments.'
                            },
                            list: {
                                title: "Feature Flags",
                                subtitle: "Toggle with confidence.",
                                description: 'Enable or disable features for specific users. Roll back instantly if metrics don\'t meet expectations.'
                            },
                            star: {
                                title: "Premium UX",
                                subtitle: "Personalized delight.",
                                description: 'Customize the experience for high-value segments. Deliver exclusive features to your most engaged users.'
                            },
                            persona: {
                                title: "Persona Target",
                                subtitle: "Segment your users.",
                                description: 'Intelligent segmentation that feels automatic. Deliver unique experiences based on behavior and intent.'
                            }
                        }[step2View];

                        return (
                            <div className="relative">
                                <FeatureRow
                                    reverse
                                    icon={FlaskConical}
                                    title={content.title}
                                    subtitle={content.subtitle}
                                    description={content.description}
                                    visual={
                                        <div className="w-full h-full flex items-stretch" onMouseEnter={handleInteraction}>
                                            <div className="flex-1 flex flex-col items-center justify-center p-6 h-[420px] overflow-hidden" style={{ contain: 'strict' }}>
                                                <AnimatePresence mode="wait">
                                                    {step2View === 'persona' ? (
                                                        <motion.div
                                                            key="persona-graph"
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            className="w-full h-full flex items-center justify-center"
                                                        >
                                                            <div className="w-full max-w-sm">
                                                                <AntiGravityGraph active={true} />
                                                            </div>
                                                        </motion.div>
                                                    ) : (
                                                        <motion.div
                                                            key="browser-mockup"
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, x: 20 }}
                                                            className="w-full bg-[#0F0F12] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative min-h-[280px]"
                                                        >
                                                            <div className="h-6 bg-[#1A1A1A] border-b border-white/5 flex items-center px-3 gap-1.5 overflow-hidden">
                                                                <div className="flex gap-1 flex-shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" /><div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" /><div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" /></div>
                                                                <div className="ml-4 flex-1 bg-[#0F0F12] h-3.5 rounded text-[7px] text-gray-600 font-mono border border-white/5 flex items-center px-2 truncate">🔒 yoursite.com/pricing</div>
                                                            </div>
                                                            <div className="p-4 md:p-6 space-y-4">
                                                                <AnimatePresence mode="wait">
                                                                    {step2View === 'copy' && (
                                                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="copy" className="space-y-4">
                                                                            <div className="h-2 w-1/3 bg-white/10 rounded" />
                                                                            <div className="space-y-2 opacity-50">
                                                                                <div className="h-1.5 w-full bg-white/5 rounded" />
                                                                                <div className="h-1.5 w-5/6 bg-white/5 rounded" />
                                                                            </div>
                                                                            <div className="flex gap-3 pt-4">
                                                                                <div className="px-3 py-1.5 bg-[#2D2DFF] text-white text-[8px] font-bold rounded">Learn more</div>
                                                                                <div className="relative group">
                                                                                    <div className="absolute -inset-1 border border-dashed border-gray-400 rounded-md opacity-40" />
                                                                                    <div className="px-3 py-1.5 bg-[#FFBD2E] text-black text-[8px] font-bold rounded relative z-10">Buy now</div>
                                                                                    <MousePointer2 className="absolute -bottom-1 -right-1 w-3 h-3 text-white fill-white shadow-xl" />
                                                                                    <div className="absolute -top-4 left-0 text-[7px] text-gray-500 font-bold uppercase tracking-widest">Button</div>
                                                                                </div>
                                                                            </div>
                                                                        </motion.div>
                                                                    )}
                                                                    {step2View === 'image' && (
                                                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="image" className="w-full">
                                                                            <div className="-mx-6 -mt-6 mb-6 bg-white py-2 px-6 flex items-center justify-center gap-4 border-b border-gray-200">
                                                                                <span className="text-black text-[10px] font-medium tracking-tight">Free shipping over $50!</span>
                                                                                <button className="px-3 py-1 bg-[#0ea5e9] text-white text-[8px] font-bold rounded">Shop Now</button>
                                                                            </div>
                                                                            <div className="space-y-4">
                                                                                <div className="h-2 w-1/3 bg-white/10 rounded" />
                                                                                <div className="space-y-2 opacity-50">
                                                                                    <div className="h-1.5 w-full bg-white/5 rounded" />
                                                                                    <div className="h-1.5 w-full bg-white/5 rounded" />
                                                                                    <div className="h-1.5 w-3/4 bg-white/5 rounded" />
                                                                                </div>
                                                                                <div className="grid grid-cols-3 gap-3 pt-4 opacity-20">
                                                                                    <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                                                                                    <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                                                                                    <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                                                                                </div>
                                                                            </div>
                                                                        </motion.div>
                                                                    )}
                                                                    {step2View === 'list' && (
                                                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="list" className="relative w-full h-full">
                                                                            {/* Background Content */}
                                                                            <div className="space-y-4 opacity-20">
                                                                                <div className="h-2 w-1/2 bg-white/10 rounded" />
                                                                                <div className="space-y-2">
                                                                                    <div className="h-1.5 w-full bg-white/5 rounded" />
                                                                                    <div className="h-1.5 w-full bg-white/5 rounded" />
                                                                                    <div className="h-1.5 w-3/4 bg-white/5 rounded" />
                                                                                </div>
                                                                                <div className="grid grid-cols-2 gap-3 pt-4">
                                                                                    <div className="h-20 bg-white/5 rounded-xl" />
                                                                                    <div className="h-20 bg-white/5 rounded-xl" />
                                                                                </div>
                                                                            </div>

                                                                            {/* Popup Overlay */}
                                                                            <motion.div
                                                                                initial={{ scale: 0.9, opacity: 0, y: 10 }}
                                                                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                                                                className="absolute inset-0 flex items-center justify-center p-4"
                                                                            >
                                                                                <div className="bg-white rounded-2xl p-8 w-full max-w-[240px] shadow-2xl relative text-center">
                                                                                    <div className="absolute top-3 right-3 text-gray-400">
                                                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4"><path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                                                    </div>
                                                                                    <h4 className="text-black font-bold text-lg mb-2">Special Offer!</h4>
                                                                                    <p className="text-gray-600 text-[10px] mb-6">Get 20% off today.</p>
                                                                                    <button className="w-full py-3 bg-[#D1C4E9] text-[#7E57C2] text-[10px] font-bold rounded-xl shadow-lg">Claim Now</button>
                                                                                </div>
                                                                            </motion.div>
                                                                        </motion.div>
                                                                    )}
                                                                    {step2View === 'star' && (
                                                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="star" className="space-y-6">
                                                                            <div className="flex items-center gap-4">
                                                                                <h4 className="text-white text-xl font-bold tracking-tight">Compare Mac models</h4>
                                                                                <div className="px-3 py-1 bg-[#0071e3] text-white text-[9px] font-bold rounded-md shadow-lg">Best for you</div>
                                                                            </div>
                                                                            <div className="space-y-2">
                                                                                <div className="h-1.5 w-full bg-white/5 rounded" />
                                                                                <div className="h-1.5 w-full bg-white/5 rounded" />
                                                                                <div className="h-1.5 w-3/4 bg-white/5 rounded" />
                                                                            </div>
                                                                            <div className="grid grid-cols-2 gap-4 pt-4">
                                                                                <div className="h-28 bg-[#15151A] border border-white/5 rounded-2xl" />
                                                                                <div className="h-28 bg-[#15151A] border border-white/5 rounded-2xl" />
                                                                            </div>
                                                                        </motion.div>
                                                                    )}
                                                                </AnimatePresence>
                                                                <div className="grid grid-cols-3 gap-3 pt-6 opacity-20">
                                                                    <div className="h-16 bg-white/5 rounded" />
                                                                    <div className="h-16 bg-white/5 rounded" />
                                                                    <div className="h-16 bg-white/5 rounded" />
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <div className="w-12 md:w-16 flex flex-col items-center justify-center p-2 md:p-4 gap-2 md:gap-3 bg-black/20 border-l border-white/5">
                                                {[
                                                    { id: 'copy', icon: Copy },
                                                    { id: 'image', icon: LucideImage },
                                                    { id: 'list', icon: LayoutList },
                                                    { id: 'star', icon: Star },
                                                    { id: 'persona', icon: UserPlus }
                                                ].map((item) => (
                                                    <motion.button
                                                        key={item.id}
                                                        onClick={() => {
                                                            setStep2View(item.id as any);
                                                            handleInteraction();
                                                        }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all border ${step2View === item.id
                                                            ? 'bg-[#051a05] border-neon-green text-neon-green shadow-[0_0_15px_rgba(57,255,20,0.3)]'
                                                            : 'bg-white/5 border-transparent text-gray-500 hover:text-white'
                                                            }`}
                                                    >
                                                        <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                        );
                    })()}

                    {/* Row 3: Analyze */}
                    {(() => {
                        const content = {
                            simple: {
                                title: "Analyze",
                                subtitle: "Track progress.",
                                description: 'Real-time metrics on how your experiments are performing. Data that helps you move faster.'
                            },
                            detailed: {
                                title: "Granular Metrics",
                                subtitle: "Deep dive data.",
                                description: 'Go beyond the surface. Analyze segment-specific behavior and conversion drops instantly.'
                            },
                            list: {
                                title: "Flow Visualization",
                                subtitle: "See the journey.",
                                description: 'Visualize exactly where users are falling off. Optimize every step of the funnel with precision.'
                            }
                        }[step4View as 'simple' | 'detailed' | 'list'];

                        return (
                            <div className="relative">
                                <FeatureRow
                                    icon={BarChart3}
                                    title={content.title}
                                    subtitle={content.subtitle}
                                    description={content.description}
                                    visual={
                                        <div className="w-full h-full flex items-stretch" onMouseEnter={handleInteraction}>
                                            <div className="w-12 md:w-16 flex flex-col items-center justify-center p-2 md:p-4 gap-2 md:gap-3 bg-black/20 border-r border-white/5">
                                                {[
                                                    { id: 'simple', icon: Link },
                                                    { id: 'detailed', icon: Monitor },
                                                    { id: 'list', icon: LayoutList }
                                                ].map((item) => (
                                                    <motion.button
                                                        key={item.id}
                                                        onClick={() => {
                                                            setStep4View(item.id as any);
                                                            handleInteraction();
                                                        }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all border ${step4View === item.id
                                                            ? 'bg-[#051a05] border-neon-green text-neon-green shadow-[0_0_15px_rgba(57,255,20,0.3)]'
                                                            : 'bg-white/5 border-transparent text-gray-500 hover:text-white'
                                                            }`}
                                                    >
                                                        <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                                                    </motion.button>
                                                ))}
                                            </div>
                                            <div className="flex-1 flex flex-col items-center justify-center px-12 lg:pl-28 lg:pr-12 py-12 relative overflow-hidden h-[420px]" style={{ contain: 'strict' }}>
                                                <div className="relative flex flex-col items-center w-full max-w-[160px] md:max-w-[200px]">
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={step4View}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            className="flex flex-col items-center w-full"
                                                        >
                                                            {step4View === 'simple' ? (
                                                                <>
                                                                    {/* Top Node */}
                                                                    <div className="relative group">
                                                                        <div className="bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-2xl p-4 md:p-6 flex flex-col items-center min-w-[140px] md:min-w-[180px] backdrop-blur-md shadow-2xl transition-all hover:border-[#6366f1]/40">
                                                                            <Eye className="w-5 h-5 text-[#6366f1] mb-2 md:mb-3" />
                                                                            <div className="text-white font-jetbrains-mono text-xs md:text-sm font-bold tracking-tight">
                                                                                142.8k <span className="text-gray-400 font-normal">users</span>
                                                                            </div>
                                                                            <div className="text-[#6366f1] text-[10px] md:text-[11px] font-bold mt-1 md:mt-2">12.4%</div>
                                                                        </div>
                                                                        <div className="hidden md:block absolute right-full mr-8 top-1/2 -translate-y-1/2 text-white/40 text-xs font-medium tracking-wide uppercase">Impressions</div>
                                                                    </div>

                                                                    {/* Connector & CTR Node */}
                                                                    <div className="flex flex-col items-center">
                                                                        <div className="bg-[#10B981]/10 border border-[#10B981]/20 px-4 py-2.5 rounded-xl shadow-lg backdrop-blur-sm">
                                                                            <span className="text-[#10B981] font-jetbrains-mono text-[11px] font-bold tracking-wider">8.72% CTR</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Bottom Node */}
                                                                    <div className="relative group">
                                                                        <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-2xl p-6 flex flex-col items-center min-w-[180px] backdrop-blur-md shadow-2xl transition-all hover:border-[#10B981]/40">
                                                                            <MousePointer2 className="w-5 h-5 text-[#10B981] mb-3 fill-[#10B981]/10" />
                                                                            <div className="text-white font-jetbrains-mono text-sm font-bold tracking-tight">
                                                                                12.4k <span className="text-gray-400 font-normal">users</span>
                                                                            </div>
                                                                            <div className="text-[#10B981] text-[11px] font-bold mt-2">8.1%</div>
                                                                        </div>
                                                                        <div className="absolute right-full mr-8 top-1/2 -translate-y-1/2 text-white/40 text-xs font-medium tracking-wide uppercase">Clicked</div>
                                                                    </div>
                                                                </>
                                                            ) : step4View === 'detailed' ? (
                                                                <div className="flex flex-col items-center w-full gap-0">
                                                                    {/* Banner Impression */}
                                                                    <div className="relative w-full flex justify-center">
                                                                        <div className="absolute right-full mr-8 top-1/2 -translate-y-1/2 text-white/40 text-[10px] font-bold uppercase whitespace-nowrap">Banner impression</div>
                                                                        <div className="bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-2xl px-12 py-4 flex items-center gap-4 min-w-[220px]">
                                                                            <Eye className="w-5 h-5 text-[#6366f1]" />
                                                                            <span className="text-white font-jetbrains-mono text-lg font-bold">128.5k</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Connector */}
                                                                    <div className="flex flex-col items-center py-4">
                                                                        <div className="bg-[#10B981]/10 border border-[#10B981]/20 px-3 py-1 rounded-lg">
                                                                            <span className="text-[#10B981] text-[10px] font-bold">14.2% CR</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Action Completed */}
                                                                    <div className="relative w-full flex justify-center">
                                                                        <div className="absolute right-full mr-8 top-1/2 -translate-y-1/2 text-white/40 text-[10px] font-bold uppercase whitespace-nowrap">Action completed</div>
                                                                        <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-2xl px-12 py-4 flex items-center gap-4 min-w-[220px]">
                                                                            <div className="w-5 h-5 flex items-center justify-center">
                                                                                <div className="w-3 h-3 bg-[#39ff14] shadow-[0_0_10px_#39ff14] rounded-sm" />
                                                                            </div>
                                                                            <span className="text-[#39ff14] font-jetbrains-mono text-lg font-bold">18K</span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="h-6" />

                                                                    {/* Banner Dismissed */}
                                                                    <div className="relative w-full flex justify-center">
                                                                        <div className="absolute right-full mr-8 top-1/2 -translate-y-1/2 text-white/40 text-[10px] font-bold uppercase whitespace-nowrap">Banner Dismissed</div>
                                                                        <div className="bg-[#ef4444]/10 border border-[#ef4444]/20 rounded-2xl px-12 py-4 flex items-center gap-4 min-w-[220px]">
                                                                            <div className="w-5 h-5 flex items-center justify-center bg-[#ef4444] rounded-full">
                                                                                <span className="text-white text-[10px] font-bold">×</span>
                                                                            </div>
                                                                            <span className="text-[#ef4444] font-jetbrains-mono text-lg font-bold">4K</span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="h-6" />

                                                                    {/* Ignored */}
                                                                    <div className="relative w-full flex justify-center">
                                                                        <div className="absolute right-full mr-8 top-1/2 -translate-y-1/2 text-white/40 text-[10px] font-bold uppercase whitespace-nowrap">Ignored</div>
                                                                        <div className="bg-white/5 border border-white/10 rounded-2xl px-12 py-4 flex items-center gap-4 min-w-[220px]">
                                                                            <div className="w-5 h-5 flex items-center justify-center opacity-40">
                                                                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M12 2a9 9 0 00-9 9c0 1.94.62 3.74 1.67 5.2a1 1 0 00.17.2l.01.01c.21.2.22.56.02.77l-1.6 1.6a1 1 0 00.5 1.5l1.6-.2a1 1 0 00.8-.8l.2-1.6a1 1 0 01.1-.5l.02-.02a9 9 0 1014.5-6.17z" /></svg>
                                                                            </div>
                                                                            <span className="text-white/40 font-jetbrains-mono text-lg font-bold">1.6K</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="flex flex-col items-center w-full gap-0">
                                                                    {/* Modal Impression */}
                                                                    <div className="relative w-full flex justify-center">
                                                                        <div className="absolute right-full mr-8 top-1/2 -translate-y-1/2 text-white/40 text-[10px] font-bold uppercase whitespace-nowrap">Modal impression</div>
                                                                        <div className="bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-2xl px-12 py-4 flex items-center gap-4 min-w-[220px]">
                                                                            <Eye className="w-5 h-5 text-[#6366f1]" />
                                                                            <span className="text-white font-jetbrains-mono text-lg font-bold">128.4k</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Connector & Drop Badge */}
                                                                    <div className="flex flex-col items-center py-4">
                                                                        <div className="bg-[#1A1C2E] border border-white/10 px-3 py-1.5 rounded-xl shadow-xl">
                                                                            <span className="text-gray-400 text-[10px] font-bold">32.8% Drop</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Modal Dismissed */}
                                                                    <div className="relative w-full flex justify-center">
                                                                        <div className="absolute right-full mr-8 top-1/2 -translate-y-1/2 text-white/40 text-[10px] font-bold uppercase whitespace-nowrap">Modal dismissed</div>
                                                                        <div className="bg-[#ef4444]/10 border border-[#ef4444]/20 rounded-2xl px-12 py-4 flex items-center gap-4 min-w-[220px]">
                                                                            <div className="w-5 h-5 flex items-center justify-center bg-[#ef4444] rounded-full">
                                                                                <span className="text-white text-[10px] font-bold">×</span>
                                                                            </div>
                                                                            <span className="text-[#ef4444] font-jetbrains-mono text-lg font-bold">42.1K</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Connector & CTR Badge */}
                                                                    <div className="flex flex-col items-center py-4">
                                                                        <div className="bg-[#10B981]/10 border border-[#10B981]/20 px-3 py-1.5 rounded-xl">
                                                                            <span className="text-[#10B981] text-[10px] font-bold">8.72% CTR</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* CTA Clicked */}
                                                                    <div className="relative w-full flex justify-center">
                                                                        <div className="absolute right-full mr-8 top-1/2 -translate-y-1/2 text-white/40 text-[10px] font-bold uppercase whitespace-nowrap">CTA clicked</div>
                                                                        <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-2xl px-12 py-4 flex items-center gap-4 min-w-[220px]">
                                                                            <MousePointer2 className="w-5 h-5 text-[#10B981] fill-[#10B981]/10" />
                                                                            <span className="text-[#10B981] font-jetbrains-mono text-lg font-bold">11K</span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="h-6" />

                                                                    {/* Completed */}
                                                                    <div className="relative w-full flex justify-center">
                                                                        <div className="absolute right-full mr-8 top-1/2 -translate-y-1/2 text-white/40 text-[10px] font-bold uppercase whitespace-nowrap">Completed</div>
                                                                        <div className="bg-[#10B981]/15 border border-[#10B981]/30 rounded-2xl px-12 py-4 flex items-center gap-4 min-w-[220px]">
                                                                            <Trophy className="w-5 h-5 text-[#39ff14] shadow-[0_0_10px_#39ff14]" />
                                                                            <span className="text-white/60 font-jetbrains-mono text-lg font-bold">1.6K</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </motion.div>
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                        );
                    })()}
                </div >
            </div >
        </section >
    );
}