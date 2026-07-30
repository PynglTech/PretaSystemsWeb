"use client";

import { motion, useScroll, AnimatePresence, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
    Slack, Copy, Image as LucideImage, LayoutList, Star, MousePointer2, Link, Eye,
    Percent, Globe, ExternalLink, BarChart3, Clock, UserCheck,
    FlaskConical, CreditCard, MapPin, Building2, UserPlus, User,
    Smartphone as Mobile, Monitor, Search, Smartphone, Github, Cloud,
    Trash2, Trophy, Zap, Ghost, XCircle
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
const ConnectIcon = (props: any) => (
    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_1035_1335)">
            <path d="M20.3834 9.41288C22.3697 7.42655 22.3697 4.20975 20.3834 2.22342C18.6256 0.465612 15.8553 0.237096 13.8338 1.68202L13.7775 1.72069C13.2713 2.0828 13.1553 2.78592 13.5174 3.28866C13.8795 3.79139 14.5826 3.91092 15.0854 3.54881L15.1416 3.51014C16.2701 2.70506 17.8135 2.83163 18.7908 3.81249C19.8982 4.91991 19.8982 6.71288 18.7908 7.8203L14.8463 11.7719C13.7389 12.8793 11.9459 12.8793 10.8385 11.7719C9.85762 10.791 9.73105 9.24764 10.5361 8.12264L10.5748 8.06639C10.9369 7.56014 10.8174 6.85702 10.3146 6.49842C9.81191 6.13983 9.10527 6.25585 8.74668 6.75858L8.70801 6.81483C7.25957 8.8328 7.48809 11.6031 9.2459 13.3609C11.2322 15.3473 14.449 15.3473 16.4354 13.3609L20.3834 9.41288ZM2.11621 8.59022C0.129883 10.5765 0.129883 13.7933 2.11621 15.7797C3.87402 17.5375 6.64434 17.766 8.66582 16.3211L8.72207 16.2824C9.22832 15.9203 9.34434 15.2172 8.98223 14.7144C8.62012 14.2117 7.91699 14.0922 7.41426 14.4543L7.35801 14.493C6.22949 15.298 4.68613 15.1715 3.70879 14.1906C2.60137 13.0797 2.60137 11.2867 3.70879 10.1793L7.65332 6.23124C8.76074 5.12382 10.5537 5.12382 11.6611 6.23124C12.642 7.2121 12.7686 8.75546 11.9635 9.88397L11.9248 9.94022C11.5627 10.4465 11.6822 11.1496 12.185 11.5082C12.6877 11.8668 13.3943 11.7508 13.7529 11.248L13.7916 11.1918C15.24 9.1703 15.0115 6.39999 13.2537 4.64217C11.2674 2.65585 8.05059 2.65585 6.06426 4.64217L2.11621 8.59022Z" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="clip0_1035_1335">
                <path d="M0 0H22.5V18H0V0Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
const PillIcon = (props: any) => (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6.1875 9.625H1.375V4.8125H2.40625V3.4375H1.375C0.616602 3.4375 0 4.0541 0 4.8125V9.625C0 10.3834 0.616602 11 1.375 11H6.1875C6.9459 11 7.5625 10.3834 7.5625 9.625V8.59375H6.1875V9.625ZM4.8125 7.5625H9.625C10.3834 7.5625 11 6.9459 11 6.1875V1.375C11 0.616602 10.3834 0 9.625 0H4.8125C4.0541 0 3.4375 0.616602 3.4375 1.375V6.1875C3.4375 6.9459 4.0541 7.5625 4.8125 7.5625Z" fill="currentColor" />
    </svg>
);
const VisualIcon = (props: any) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M11.25 0.751223C11.25 0.448912 11.0672 0.174723 10.7859 0.0575485C10.5047 -0.0596263 10.1836 0.00599162 9.96797 0.21925L8.9461 1.24336C7.82109 2.36823 6.29531 3.00098 4.70391 3.00098H4.5H3.75H1.5C0.672656 3.00098 0 3.67356 0 4.50082V6.75057C0 7.57782 0.672656 8.25041 1.5 8.25041V11.2501C1.5 11.6649 1.83516 12 2.25 12H3.75C4.16484 12 4.5 11.6649 4.5 11.2501V8.25041H4.70391C6.29531 8.25041 7.82109 8.88315 8.9461 10.008L9.96797 11.0298C10.1836 11.2454 10.5047 11.3087 10.7859 11.1915C11.0672 11.0743 11.25 10.8025 11.25 10.4978V7.04116C11.6859 6.83494 12 6.27953 12 5.62569C12 4.97186 11.6859 4.41645 11.25 4.21022V0.751223ZM9.75 2.54868V5.62569V8.7027C8.37187 7.44893 6.57422 6.75057 4.70391 6.75057H4.5V4.50082H4.70391C6.57422 4.50082 8.37187 3.80245 9.75 2.54868Z" fill="currentColor" />
    </svg>
);
const ListDetailsIcon = (props: any) => (
    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1.375 0C0.616602 0 0 0.640625 0 1.42857V8.57143C0 9.35938 0.616602 10 1.375 10H9.625C10.3834 10 11 9.35938 11 8.57143V1.42857C11 0.640625 10.3834 0 9.625 0H1.375ZM2.0625 1.42857H8.9375C9.31777 1.42857 9.625 1.74777 9.625 2.14286C9.625 2.53795 9.31777 2.85714 8.9375 2.85714H2.0625C1.68223 2.85714 1.375 2.53795 1.375 2.14286C1.375 1.74777 1.68223 1.42857 2.0625 1.42857Z" fill="currentColor" />
    </svg>
);

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
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-32 py-8 lg:py-12 min-h-[500px] lg:min-h-[520px]`} style={{ contain: 'layout' }}>
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
                    className="text-center mb-0 md:mb-2"
                >
                    <h2
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 800,
                            fontSize: '48px',
                            lineHeight: '58px',
                            letterSpacing: '-0.5px',
                            textAlign: 'center',
                            textTransform: 'none',
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
                            icon={ConnectIcon}
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
                                title: "Creative variants",
                                subtitle: "A/B test assets.",
                                description: 'Swap images and banners instantly. See what resonates best with your audience across different segments.'
                            },
                            list: {
                                title: "Feature flags",
                                subtitle: "Toggle with confidence.",
                                description: 'Enable or disable features for specific users. Roll back instantly if metrics don\'t meet expectations.'
                            },
                            star: {
                                title: "Premium UX",
                                subtitle: "Personalized delight.",
                                description: 'Customize the experience for high-value segments. Deliver exclusive features to your most engaged users.'
                            },
                            persona: {
                                title: "Persona target",
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
                                                    { id: 'simple', icon: PillIcon },
                                                    { id: 'detailed', icon: VisualIcon },
                                                    { id: 'list', icon: ListDetailsIcon }
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
                                                                <div className="flex flex-col items-center w-full scale-[0.7] sm:scale-[0.85] lg:scale-100 origin-center">
                                                                    {/* Top Node */}
                                                                    <div className="relative flex items-center justify-center w-full">
                                                                        <div className="absolute right-[calc(50%+90px)] lg:right-[calc(50%+120px)] text-white font-inter text-xs lg:text-base whitespace-nowrap opacity-60">Impressions</div>
                                                                        <div className="bg-[#0F1021] border border-[#6366f1]/30 rounded-[12px] px-5 py-3 flex items-center gap-3 min-w-[150px] lg:min-w-[190px] shadow-lg">
                                                                            <Eye className="w-4 h-4 lg:w-5 lg:h-5 text-[#6366f1]" />
                                                                            <div className="text-[#E2E2E2] font-jetbrains-mono text-base lg:text-xl font-medium tracking-tight">
                                                                                142.8k <span className="text-[#A1A1AA] font-light text-[10px] lg:text-xs">users</span>
                                                                            </div>
                                                                            <div className="text-[#6366f1] text-[10px] lg:text-sm font-bold mt-1">12.4%</div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Top Connector */}
                                                                    <div className="w-[1px] h-6 lg:h-10 bg-[#10B981]/40" />

                                                                    {/* CTR Badge */}
                                                                    <div className="bg-[#0A1612] border border-[#10B981]/30 px-4 py-1.5 lg:px-5 lg:py-2 rounded-[8px] shadow-sm z-10">
                                                                        <span className="text-[#39ff14] font-jetbrains-mono text-xs lg:text-sm font-medium">8.72% CTR</span>
                                                                    </div>

                                                                    {/* Bottom Connector */}
                                                                    <div className="w-[1px] h-6 lg:h-10 bg-white/10" />

                                                                    {/* Bottom Node */}
                                                                    <div className="relative flex items-center justify-center w-full">
                                                                        <div className="absolute right-[calc(50%+90px)] lg:right-[calc(50%+120px)] text-white font-inter text-xs lg:text-base whitespace-nowrap opacity-60">Clicked</div>
                                                                        <div className="bg-[#0A1612] border border-[#10B981]/30 rounded-[12px] px-5 py-3 flex items-center gap-3 min-w-[150px] lg:min-w-[190px] shadow-lg">
                                                                            <MousePointer2 className="w-4 h-4 lg:w-5 lg:h-5 text-[#10B981] fill-[#10B981]" />
                                                                            <div className="text-[#E2E2E2] font-jetbrains-mono text-base lg:text-xl font-medium tracking-tight">
                                                                                12.4k <span className="text-[#A1A1AA] font-light text-[10px] lg:text-xs">users</span>
                                                                            </div>
                                                                            <div className="text-[#10B981] text-[10px] lg:text-sm font-bold mt-1">8.1%</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : step4View === 'detailed' ? (
                                                                <div className="flex flex-col items-center w-full scale-[0.6] sm:scale-[0.75] lg:scale-[0.9] origin-center">
                                                                    {/* Banner Impression */}
                                                                    <div className="relative flex items-center justify-center w-full">
                                                                        <div className="absolute right-[calc(50%+85px)] md:right-[calc(50%+100px)] text-white font-inter text-[10px] md:text-xs lg:text-sm whitespace-nowrap opacity-60">Banner impression</div>
                                                                        <div className="bg-[#0F1021] border border-[#6366f1]/30 rounded-[10px] px-4 py-2 flex items-center gap-2 min-w-[125px] lg:min-w-[160px] shadow-md">
                                                                            <Eye className="w-4 h-4 text-[#6366f1]" />
                                                                            <span className="text-[#6366f1] font-jetbrains-mono text-sm lg:text-base font-bold">128.5k</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Top Connector */}
                                                                    <div className="w-[1px] h-4 lg:h-6 bg-[#10B981]/40" />

                                                                    {/* CR Badge */}
                                                                    <div className="bg-[#0A1612] border border-[#10B981]/30 px-3 py-1 rounded-[6px] shadow-sm z-10">
                                                                        <span className="text-[#39ff14] font-jetbrains-mono text-[9px] lg:text-[11px] font-medium">14.2% CR</span>
                                                                    </div>

                                                                    {/* Second Connector */}
                                                                    <div className="w-[1px] h-4 lg:h-6 bg-white/10" />

                                                                    {/* Action Completed */}
                                                                    <div className="relative flex items-center justify-center w-full">
                                                                        <div className="absolute right-[calc(50%+85px)] md:right-[calc(50%+100px)] text-white font-inter text-[10px] md:text-xs lg:text-sm whitespace-nowrap opacity-60">Action completed</div>
                                                                        <div className="bg-[#0A1612] border border-[#10B981]/30 rounded-[10px] px-4 py-2 flex items-center gap-2 min-w-[125px] lg:min-w-[160px] shadow-md">
                                                                            <Zap className="w-4 h-4 text-[#39ff14] fill-[#39ff14]/20" />
                                                                            <span className="text-[#39ff14] font-jetbrains-mono text-sm lg:text-base font-bold">18K</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Third Connector */}
                                                                    <div className="w-[1px] h-4 lg:h-6 bg-white/10" />

                                                                    {/* Banner Dismissed */}
                                                                    <div className="relative flex items-center justify-center w-full">
                                                                        <div className="absolute right-[calc(50%+85px)] md:right-[calc(50%+100px)] text-white font-inter text-[10px] md:text-xs lg:text-sm whitespace-nowrap opacity-60">Banner Dismissed</div>
                                                                        <div className="bg-[#1A1010] border border-[#ef4444]/30 rounded-[10px] px-4 py-2 flex items-center gap-2 min-w-[125px] lg:min-w-[160px] shadow-md">
                                                                            <XCircle className="w-4 h-4 text-[#ef4444] fill-[#ef4444]/20" />
                                                                            <span className="text-[#ef4444] font-jetbrains-mono text-sm lg:text-base font-bold">4K</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Fourth Connector */}
                                                                    <div className="w-[1px] h-4 lg:h-6 bg-white/10" />

                                                                    {/* Ignored */}
                                                                    <div className="relative flex items-center justify-center w-full">
                                                                        <div className="absolute right-[calc(50%+85px)] md:right-[calc(50%+100px)] text-white font-inter text-[10px] md:text-xs lg:text-sm whitespace-nowrap opacity-60">Ignored</div>
                                                                        <div className="bg-[#1A1A1A] border border-white/10 rounded-[10px] px-4 py-2 flex items-center gap-2 min-w-[125px] lg:min-w-[160px] shadow-md">
                                                                            <Ghost className="w-4 h-4 text-gray-400 fill-gray-400/10" />
                                                                            <span className="text-gray-400 font-jetbrains-mono text-sm lg:text-base font-bold">1.6K</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="flex flex-col items-center w-full scale-[0.6] sm:scale-[0.75] lg:scale-[0.9] origin-center -translate-y-4">
                                                                    {/* Modal Impression */}
                                                                    <div className="relative flex items-center justify-center w-full">
                                                                        <div className="absolute right-[calc(50%+85px)] md:right-[calc(50%+100px)] text-white font-inter text-[10px] md:text-xs lg:text-sm whitespace-nowrap opacity-60">Modal impression</div>
                                                                        <div className="bg-[#0F1021] border border-[#6366f1]/30 rounded-[10px] px-4 py-2 flex items-center gap-2 min-w-[125px] lg:min-w-[160px] shadow-md">
                                                                            <Eye className="w-4 h-4 text-[#6366f1]" />
                                                                            <span className="text-[#6366f1] font-jetbrains-mono text-sm lg:text-base font-bold">128.4k</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Connector */}
                                                                    <div className="w-[1px] h-4 lg:h-6 bg-[#10B981]/40" />

                                                                    {/* Drop Badge */}
                                                                    <div className="bg-[#1C1C24] border border-white/10 px-3 py-1 rounded-[6px] shadow-sm z-10">
                                                                        <span className="text-gray-400 font-jetbrains-mono text-[9px] lg:text-[11px] font-medium">32.8% Drop</span>
                                                                    </div>

                                                                    {/* Second Connector */}
                                                                    <div className="w-[1px] h-4 lg:h-6 bg-white/10" />

                                                                    {/* Modal Dismissed */}
                                                                    <div className="relative flex items-center justify-center w-full">
                                                                        <div className="absolute right-[calc(50%+85px)] md:right-[calc(50%+100px)] text-white font-inter text-[10px] md:text-xs lg:text-sm whitespace-nowrap opacity-60">Modal dismissed</div>
                                                                        <div className="bg-[#1A1010] border border-[#ef4444]/30 rounded-[10px] px-4 py-2 flex items-center gap-2 min-w-[125px] lg:min-w-[160px] shadow-md">
                                                                            <XCircle className="w-4 h-4 text-[#ef4444] fill-[#ef4444]/20" />
                                                                            <span className="text-[#ef4444] font-jetbrains-mono text-sm lg:text-base font-bold">42.1K</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Third Connector */}
                                                                    <div className="w-[1px] h-4 lg:h-6 bg-white/10" />

                                                                    {/* CTR Badge */}
                                                                    <div className="bg-[#0A1612] border border-[#10B981]/30 px-3 py-1 rounded-[6px] shadow-sm z-10">
                                                                        <span className="text-[#10B981] font-jetbrains-mono text-[9px] lg:text-[11px] font-medium">8.72% CTR</span>
                                                                    </div>

                                                                    {/* Fourth Connector */}
                                                                    <div className="w-[1px] h-4 lg:h-6 bg-white/10" />

                                                                    {/* CTA Clicked */}
                                                                    <div className="relative flex items-center justify-center w-full">
                                                                        <div className="absolute right-[calc(50%+85px)] md:right-[calc(50%+100px)] text-white font-inter text-[10px] md:text-xs lg:text-sm whitespace-nowrap opacity-60">CTA clicked</div>
                                                                        <div className="bg-[#0D1A1A] border border-[#10B981]/30 rounded-[10px] px-4 py-2 flex items-center gap-2 min-w-[125px] lg:min-w-[160px] shadow-md">
                                                                            <MousePointer2 className="w-4 h-4 text-[#00f2ff] fill-[#00f2ff]/20" />
                                                                            <span className="text-[#00f2ff] font-jetbrains-mono text-sm lg:text-base font-bold">11K</span>
                                                                        </div>
                                                                    </div>

                                                                    {/* Fifth Connector */}
                                                                    <div className="w-[1px] h-4 lg:h-6 bg-white/10" />

                                                                    {/* Completed */}
                                                                    <div className="relative flex items-center justify-center w-full">
                                                                        <div className="absolute right-[calc(50%+85px)] md:right-[calc(50%+100px)] text-white font-inter text-[10px] md:text-xs lg:text-sm whitespace-nowrap opacity-60">Completed</div>
                                                                        <div className="bg-[#0A1612] border border-[#10B981]/30 rounded-[10px] px-4 py-2 flex items-center gap-2 min-w-[125px] lg:min-w-[160px] shadow-md">
                                                                            <Trophy className="w-4 h-4 text-[#39ff14] fill-[#39ff14]/20" />
                                                                            <span className="text-[#39ff14] font-jetbrains-mono text-sm lg:text-base font-bold">1.6K</span>
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