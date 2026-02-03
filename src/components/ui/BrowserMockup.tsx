"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


import Image from "next/image";

import { MousePointer2, Plus, BarChart2, Megaphone, AppWindow, Award, PieChart, SlidersHorizontal, User, Layout, X, Minus, Maximize2, GripVertical, Navigation, Copy, Pencil, Sparkles, Palette, Clock, RotateCcw, Link2, Trash2, ChevronDown, Upload, Heart, MessageSquare, HelpCircle, EyeOff, Scan, Search, CircleDot } from "lucide-react";

const CloneIcon = ({ className }: { className?: string }) => (
    <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M5.4 8.4H1.2V4.2H2.1V3H1.2C0.538125 3 0 3.53813 0 4.2V8.4C0 9.06188 0.538125 9.6 1.2 9.6H5.4C6.06188 9.6 6.6 9.06188 6.6 8.4V7.5H5.4V8.4ZM4.2 6.6H8.4C9.06188 6.6 9.6 6.06188 9.6 5.4V1.2C9.6 0.538125 9.06188 0 8.4 0H4.2C3.53813 0 3 0.538125 3 1.2V5.4C3 6.06188 3.53813 6.6 4.2 6.6Z" fill="currentColor" />
    </svg>
);

interface BrowserMockupProps {
    onClose?: () => void;
}

export default function BrowserMockup({ onClose }: BrowserMockupProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalConfigOpen, setIsModalConfigOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [isInspecting, setIsInspecting] = useState(false);
    const [isCloned, setIsCloned] = useState(false);
    const [actionType, setActionType] = useState<'link' | 'form'>('link');

    // Modal Config State - dynamically controls Preview Modal
    const [modalHeadline, setModalHeadline] = useState('Special Offer!');
    const [modalDescription, setModalDescription] = useState('Get 20% off today.');
    const [modalButtonLabel, setModalButtonLabel] = useState('Claim Now');
    const [modalButtonLink, setModalButtonLink] = useState('#');
    const [modalBgColor, setModalBgColor] = useState('#FFFFFF');
    const [modalTextColor, setModalTextColor] = useState('#1A1A1A');
    const [modalButtonColor, setModalButtonColor] = useState('#3B82F6');

    // Banner Config State
    const [isBannerConfigOpen, setIsBannerConfigOpen] = useState(false);
    const [isBannerPreviewOpen, setIsBannerPreviewOpen] = useState(false);
    const [bannerType, setBannerType] = useState<'text' | 'image'>('text');
    const [bannerDescription, setBannerDescription] = useState('Free shipping over $50!');
    const [bannerButtonLabel, setBannerButtonLabel] = useState('Shop Now');
    const [bannerButtonLink, setBannerButtonLink] = useState('#');
    const [bannerActionType, setBannerActionType] = useState<'link' | 'form'>('link');
    const [bannerBgColor, setBannerBgColor] = useState('#3B82F6');
    const [bannerTextColor, setBannerTextColor] = useState('#FFFFFF');
    const [bannerButtonColor, setBannerButtonColor] = useState('#FFFFFF');
    const [bannerPlacement, setBannerPlacement] = useState<'top' | 'bottom'>('top');
    const [bannerDismissible, setBannerDismissible] = useState(true);
    // Image Banner State
    const [bannerImageUrl, setBannerImageUrl] = useState('');
    const [bannerRedirectUrl, setBannerRedirectUrl] = useState('#');

    // Banner Form Configuration State
    const [formHeadline, setFormHeadline] = useState('Contact Us');
    const [formDescription, setFormDescription] = useState('Please fill out the form below.');
    const [formSubmitText, setFormSubmitText] = useState('Submit');
    const [formSuccessMessage, setFormSuccessMessage] = useState('Thank you! Your message has been sent.');
    const [formApiEndpoint, setFormApiEndpoint] = useState('');
    const [formFields, setFormFields] = useState([
        { id: 1, name: 'Name', type: 'Text', required: true },
        { id: 2, name: 'Email', type: 'Email', required: true }
    ]);
    const [isBannerFormOpen, setIsBannerFormOpen] = useState(false);

    // Badge Config State
    const [isBadgeConfigOpen, setIsBadgeConfigOpen] = useState(false);
    const [isBadgePreviewOpen, setIsBadgePreviewOpen] = useState(false);
    const [badgeAttachment, setBadgeAttachment] = useState<'corner' | 'element'>('corner');
    const [badgeContentType, setBadgeContentType] = useState<'text' | 'image'>('text');
    const [badgeText, setBadgeText] = useState('SALE');
    const [badgeShape, setBadgeShape] = useState<'round' | 'pill' | 'square'>('pill');
    const [badgeBgColor, setBadgeBgColor] = useState('#EF4444');
    const [badgeTextColor, setBadgeTextColor] = useState('#FFFFFF');
    const [badgePosition, setBadgePosition] = useState<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-left');
    const [badgeOffset, setBadgeOffset] = useState(10);
    const [badgeActionType, setBadgeActionType] = useState<'link' | 'form'>('link');
    const [badgeLink, setBadgeLink] = useState('');
    const [badgeDismissible, setBadgeDismissible] = useState(false);
    const [badgeImageUrl, setBadgeImageUrl] = useState('');

    // Badge Form Configuration State
    const [badgeFormHeadline, setBadgeFormHeadline] = useState('Contact Us');
    const [badgeFormDescription, setBadgeFormDescription] = useState('Please fill out the form below.');
    const [badgeFormSubmitText, setBadgeFormSubmitText] = useState('Submit');
    const [badgeFormSuccessMessage, setBadgeFormSuccessMessage] = useState('Thank you! Your message has been sent.');
    const [badgeFormApiEndpoint, setBadgeFormApiEndpoint] = useState('');
    const [badgeFormFields, setBadgeFormFields] = useState([
        { id: 1, name: 'Name', type: 'Text', required: true },
        { id: 2, name: 'Email', type: 'Email', required: true }
    ]);
    const [isBadgeFormOpen, setIsBadgeFormOpen] = useState(false);

    // FAB (Floating Action Button) Config State
    const [isFABConfigOpen, setIsFABConfigOpen] = useState(false);
    const [isFABPreviewOpen, setIsFABPreviewOpen] = useState(false);
    const [fabBehavior, setFABBehavior] = useState<'fixed' | 'scroll'>('fixed');
    const [fabContentType, setFABContentType] = useState<'text' | 'icon'>('text');
    const [fabLabel, setFABLabel] = useState('GO');
    const [fabIconName, setFABIconName] = useState<'Plus' | 'MessageSquare' | 'Heart' | 'HelpCircle' | 'Sparkles'>('MessageSquare');
    const [fabShape, setFABShape] = useState<'round' | 'pill' | 'square'>('round');
    const [fabSize, setFABSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [fabBgColor, setFABBgColor] = useState('#10B981');
    const [fabTextColor, setFABTextColor] = useState('#FFFFFF');
    const [fabActionType, setFABActionType] = useState<'link' | 'form'>('form');
    const [fabLink, setFABLink] = useState('');
    const [fabPosition, setFABPosition] = useState<'bottom-left' | 'bottom-right'>('bottom-right');
    const [fabOffset, setFABOffset] = useState(24);

    // FAB Form Configuration State
    const [fabFormHeadline, setFABFormHeadline] = useState('Contact Us');
    const [fabFormDescription, setFABFormDescription] = useState('Please fill out the form below.');
    const [fabFormSubmitText, setFABFormSubmitText] = useState('Submit');
    const [fabFormSuccessMessage, setFABFormSuccessMessage] = useState('Thank you! Your message has been sent.');
    const [fabFormApiEndpoint, setFABFormApiEndpoint] = useState('');
    const [fabFormFields, setFABFormFields] = useState([
        { id: 1, name: 'Name', type: 'Text', required: true },
        { id: 2, name: 'Email', type: 'Email', required: true }
    ]);
    const [isFABFormOpen, setIsFABFormOpen] = useState(false);
    const [isInspectMenuOpen, setIsInspectMenuOpen] = useState(false);
    const [isManageConfigOpen, setIsManageConfigOpen] = useState(false);
    const [activeManageTab, setActiveManageTab] = useState<'Clone' | 'Modal' | 'Banner' | 'Badge' | 'Fab'>('Clone');

    // Auto-play state
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [cursorPos, setCursorPos] = useState({ x: "50%", y: "110%" }); // Start off-screen bottom
    const [showRemoteCursor, setShowRemoteCursor] = useState(true);
    const [instruction, setInstruction] = useState("");
    const [subInstruction, setSubInstruction] = useState("");

    const stopAutoPlay = () => {
        if (isAutoPlaying) {
            setIsAutoPlaying(false);
            setShowRemoteCursor(false);
            setInstruction("");
            setSubInstruction("");
        }
    };

    const resetAllElements = () => {
        setIsCloned(false);
        setIsPreviewModalOpen(false);
        setIsBannerPreviewOpen(false);
        setIsBadgePreviewOpen(false);
        setIsFABPreviewOpen(false);
        setIsModalOpen(false);
        setIsModalConfigOpen(false);
        setIsBannerConfigOpen(false);
        setIsBadgeConfigOpen(false);
        setIsFABConfigOpen(false);
        setIsInspecting(false);
        setInstruction("");
        setSubInstruction("");
    };

    // Auto-play Sequence
    useEffect(() => {
        if (!isAutoPlaying) return;

        const sequence = async () => {
            // --- STAGE 1: CLONE ---
            setInstruction("Clone any existing element on your page effortlessly.");
            setSubInstruction("Initializing Clone Tool...");
            await new Promise(r => setTimeout(r, 1500));
            if (!isAutoPlaying) return;

            // Move to Dock (Clone Tool)
            setCursorPos({ x: "41%", y: "85%" });
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setSubInstruction("Opening Scan...");
            setIsModalOpen(true);
            await new Promise(r => setTimeout(r, 1000));
            if (!isAutoPlaying) return;

            setCursorPos({ x: "50%", y: "60%" }); // "Start Inspection" button
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setSubInstruction("Selecting element...");
            setIsModalOpen(false);
            setIsInspecting(true);
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setCursorPos({ x: "85%", y: "35%" }); // Target: "Learn More"
            await new Promise(r => setTimeout(r, 1200));
            if (!isAutoPlaying) return;

            setSubInstruction("Cloned successfully!");
            setIsInspecting(false);
            setIsCloned(true); // Added Clone
            await new Promise(r => setTimeout(r, 1500));
            if (!isAutoPlaying) return;

            setSubInstruction("");
            // Close Clone before moving to Modal
            setIsCloned(false);
            await new Promise(r => setTimeout(r, 500));

            // --- STAGE 2: MODAL ---
            setInstruction("Create custom modals to capture leads or show offers.");
            setSubInstruction("Configuring Modal...");
            if (!isAutoPlaying) return;
            setCursorPos({ x: "45.5%", y: "85%" }); // Modal Tool
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setIsModalConfigOpen(true);
            await new Promise(r => setTimeout(r, 1200));
            if (!isAutoPlaying) return;

            setSubInstruction("Adding to page...");
            setCursorPos({ x: "50%", y: "55%" }); // "Add to page" button in Modal Config footer
            await new Promise(r => setTimeout(r, 1000));
            if (!isAutoPlaying) return;

            setIsModalConfigOpen(false);
            setIsPreviewModalOpen(true); // Added Modal
            setSubInstruction("Modal Active!");
            await new Promise(r => setTimeout(r, 2000));
            if (!isAutoPlaying) return;

            setSubInstruction("Closing Preview...");
            // Close the preview modal before moving to Banner
            setCursorPos({ x: "62%", y: "32%" }); // Position of "X" on centered modal
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;
            setIsPreviewModalOpen(false);
            await new Promise(r => setTimeout(r, 500));
            setSubInstruction("");

            // --- STAGE 3: BANNER ---
            setInstruction("Add smart banners for announcements and urgency.");
            setSubInstruction("Designing Banner...");
            if (!isAutoPlaying) return;
            setCursorPos({ x: "50%", y: "85%" }); // Banner Tool
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setIsBannerConfigOpen(true);
            await new Promise(r => setTimeout(r, 1200));
            if (!isAutoPlaying) return;

            setSubInstruction("Adding to page...");
            setCursorPos({ x: "50%", y: "58%" }); // "Add to page" button in Banner Config footer
            await new Promise(r => setTimeout(r, 1000));
            if (!isAutoPlaying) return;

            setIsBannerConfigOpen(false);
            setIsBannerPreviewOpen(true); // Added Banner
            setSubInstruction("Banner Published!");
            await new Promise(r => setTimeout(r, 1500));
            if (!isAutoPlaying) return;

            setSubInstruction("Closing Banner...");
            // Close Banner before moving to Badge
            setCursorPos({ x: "95%", y: "8%" }); // Banner close button
            await new Promise(r => setTimeout(r, 600));
            if (!isAutoPlaying) return;
            setIsBannerPreviewOpen(false);
            await new Promise(r => setTimeout(r, 500));
            setSubInstruction("");

            // --- STAGE 4: BADGE ---
            setInstruction("Highlight specific features with interactive badges.");
            setSubInstruction("Setting up Badge...");
            if (!isAutoPlaying) return;
            setCursorPos({ x: "54.5%", y: "85%" }); // Badge Tool
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setIsBadgeConfigOpen(true);
            await new Promise(r => setTimeout(r, 1200));
            if (!isAutoPlaying) return;

            setSubInstruction("Attaching to element...");
            setCursorPos({ x: "50%", y: "58%" }); // "Launch Badge" button in Badge Config footer
            await new Promise(r => setTimeout(r, 1000));
            if (!isAutoPlaying) return;

            setIsBadgeConfigOpen(false);
            setIsBadgePreviewOpen(true); // Added Badge
            setSubInstruction("Badge Attached!");
            await new Promise(r => setTimeout(r, 1500));
            if (!isAutoPlaying) return;

            setSubInstruction("Removing Badge...");
            // Close Badge before moving to FAB
            setCursorPos({ x: "12%", y: "18%" }); // Badge close button (top-left position)
            await new Promise(r => setTimeout(r, 600));
            if (!isAutoPlaying) return;
            setIsBadgePreviewOpen(false);
            await new Promise(r => setTimeout(r, 500));
            setSubInstruction("");

            // --- STAGE 5: FAB ---
            setInstruction("Deploy Floating Action Buttons for quick accessibility.");
            setSubInstruction("Customizing FAB...");
            if (!isAutoPlaying) return;
            setCursorPos({ x: "59%", y: "85%" }); // FAB Tool
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setIsFABConfigOpen(true);
            await new Promise(r => setTimeout(r, 1200));
            if (!isAutoPlaying) return;

            setSubInstruction("Deploying FAB...");
            setCursorPos({ x: "50%", y: "58%" }); // "Launch FAB" button in FAB Config footer
            await new Promise(r => setTimeout(r, 1000));
            if (!isAutoPlaying) return;

            setIsFABConfigOpen(false);
            setIsFABPreviewOpen(true); // Added FAB
            setSubInstruction("FAB Active!");

            // Final Showcase - show FAB briefly then close
            await new Promise(r => setTimeout(r, 2000));
            if (!isAutoPlaying) return;

            setSubInstruction("Restarting Demo...");
            // Close FAB before reset
            setCursorPos({ x: "92%", y: "82%" }); // FAB position (bottom-right)
            await new Promise(r => setTimeout(r, 600));
            if (!isAutoPlaying) return;
            setIsFABPreviewOpen(false);
            await new Promise(r => setTimeout(r, 1000));

            // Reset and Repeat
            resetAllElements();
            setCursorPos({ x: "50%", y: "110%" });
        };

        sequence();

        const interval = setInterval(() => {
            if (isAutoPlaying) {
                sequence();
            }
        }, 30000); // Extended duration for full cycle

        return () => clearInterval(interval);

    }, [isAutoPlaying]);

    const handleStartInspection = () => {
        setIsModalOpen(false);
        setIsInspecting(true);
    };

    const handleElementClick = () => {
        if (isInspecting) {
            setIsCloned(true);
            setIsInspecting(false);
        }
    };

    return (
        <div
            className="relative rounded-[2rem] md:rounded-xl bg-[#0E0E12] border border-white/20 shadow-2xl overflow-hidden aspect-[9/16] md:aspect-[16/9] lg:aspect-[16/8] flex flex-col min-h-[500px] md:min-h-[400px] transition-all duration-500"
            onMouseDown={stopAutoPlay}
            onTouchStart={stopAutoPlay}
        >
            {/* Interface Header: Phone Status Bar (Mobile) vs Browser Toolbar (Desktop) */}
            <div className="flex items-center gap-4 px-4 py-3 bg-[#121216] border-b-[0.5px] border-[#1E2745] shrink-0">
                {/* Desktop: Window Controls */}
                <div className="hidden md:flex gap-2 group/controls">
                    <button
                        onClick={onClose}
                        className="w-3 h-3 rounded-full bg-[#FF5F57] flex items-center justify-center group/btn transition-colors relative"
                    >
                        <X className="w-2 h-2 text-black/60 opacity-0 group-hover/controls:opacity-100 transition-opacity" strokeWidth={4} />
                    </button>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] flex items-center justify-center transition-colors relative">
                        <Minus className="w-2 h-2 text-black/60 opacity-0 group-hover/controls:opacity-100 transition-opacity" strokeWidth={4} />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-[#28C841] flex items-center justify-center transition-colors relative">
                        <Maximize2 className="w-1.5 h-1.5 text-black/60 opacity-0 group-hover/controls:opacity-100 transition-opacity" strokeWidth={4} />
                    </div>
                </div>

                {/* Mobile: Time/Notch Area */}
                <div className="md:hidden flex-1 flex items-center justify-between text-[10px] font-bold text-white/50 pl-2 pr-4">
                    <span>9:41</span>
                    <button onClick={onClose} className="p-1 hover:text-white transition-colors">
                        <X className="w-3 h-3" />
                    </button>
                </div>

                {/* Address Bar */}
                <div className="flex-1 max-w-xl mx-auto md:mr-auto">
                    <div className="h-9 bg-[#1A1A1E] rounded-full md:rounded-md border border-white/10 flex items-center justify-center gap-2 text-xs text-gray-500 font-jetbrains-mono relative shadow-inner">
                        <div className="w-3 h-3 text-gray-600">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </div>
                        <span className="opacity-50">yoursite.com</span>
                    </div>
                </div>

                {/* Mobile: Battery Icon */}
                <div className="md:hidden text-white/50">
                    <div className="w-5 h-2.5 rounded border border-white/30 relative ml-2">
                        <div className="absolute inset-0.5 bg-white/50 rounded-[1px]" />
                        <div className="absolute -right-0.5 top-0.5 bottom-0.5 w-0.5 bg-white/30 rounded-r-sm" />
                    </div>
                </div>
            </div>

            {/* Content Area (Simulated Site) */}
            <div
                ref={containerRef}
                className="p-8 relative flex-1 bg-[#05050A]"
                onClick={stopAutoPlay}
            >
                {/* Simulated Remote Cursor (Auto-Play) */}
                <AnimatePresence>
                    {isAutoPlaying && showRemoteCursor && (
                        <motion.div
                            className="absolute z-[100] pointer-events-none drop-shadow-2xl"
                            animate={{
                                left: cursorPos.x,
                                top: cursorPos.y
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 20,
                                mass: 0.8
                            }}
                        >
                            <MousePointer2 className="w-5 h-5 text-neon-green fill-neon-green/20 -rotate-12" strokeWidth={1.5} />
                            <div className="bg-[#070B1A]/95 backdrop-blur-md border border-neon-green/30 text-neon-green text-[10px] font-bold px-2 py-1.5 rounded-lg ml-4 -mt-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] whitespace-nowrap">
                                {subInstruction || "User"}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Instruction Overlay */}
                <AnimatePresence>
                    {isAutoPlaying && instruction && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[80] pointer-events-none"
                        >
                            <div className="bg-[#070B1A]/95 backdrop-blur-xl border border-[#1E2745] px-5 py-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-3.5 max-w-[90vw] md:max-w-md">
                                <div className="w-8 h-8 rounded-xl bg-neon-green/10 flex items-center justify-center shrink-0 border border-neon-green/20">
                                    <Sparkles className="w-4 h-4 text-neon-green" />
                                </div>
                                <span className="text-white text-[12px] font-semibold leading-relaxed tracking-wide">
                                    {instruction}
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Simulated Skeleton Content - Polished Website Structure */}
                <div className="max-w-4xl mx-auto pointer-events-none">
                    {/* Skeleton Nav Bar */}
                    <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/10 animate-pulse" />
                            <div className="h-3 w-20 rounded bg-white/15 animate-pulse" />
                        </div>
                        {/* Nav Links */}
                        <div className="hidden md:flex items-center gap-5">
                            <div className="h-2.5 w-12 rounded-full bg-white/10 animate-pulse" />
                            <div className="h-2.5 w-14 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <div className="h-2.5 w-10 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <div className="h-2.5 w-12 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.3s' }} />
                        </div>
                        {/* Action Buttons */}
                        <div className="flex items-center gap-2">
                            <div className="h-7 w-14 rounded-md bg-white/10 animate-pulse" />
                            <div className="h-7 w-18 rounded-md bg-white/15 animate-pulse" />
                        </div>
                    </div>

                    {/* Hero Section */}
                    <div className="text-center space-y-4 mb-8">
                        {/* Badge */}
                        <div className="flex justify-center">
                            <div className="h-5 w-28 rounded-full bg-white/8 animate-pulse border border-white/10" />
                        </div>
                        {/* Headline */}
                        <div className="space-y-2 flex flex-col items-center">
                            <div className="h-7 w-3/4 md:w-3/5 rounded bg-white/15 animate-pulse" />
                            <div className="h-7 w-1/2 md:w-2/5 rounded bg-white/12 animate-pulse" style={{ animationDelay: '0.15s' }} />
                        </div>
                        {/* Subheadline */}
                        <div className="space-y-1.5 flex flex-col items-center pt-2">
                            <div className="h-2.5 w-4/5 md:w-1/2 rounded-full bg-white/8 animate-pulse" />
                            <div className="h-2.5 w-3/5 md:w-2/5 rounded-full bg-white/6 animate-pulse" style={{ animationDelay: '0.1s' }} />
                        </div>
                        {/* CTA Buttons Placeholder - positioned differently from the real "Learn more" */}
                        <div className="flex justify-center gap-3 pt-3">
                            <div className="h-10 w-28 rounded-lg bg-white/12 animate-pulse" />
                            <div className="h-10 w-24 rounded-lg bg-white/8 animate-pulse border border-white/10" style={{ animationDelay: '0.1s' }} />
                        </div>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="rounded-xl p-4 bg-white/5 border border-white/8 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}>
                                {/* Icon */}
                                <div className="w-9 h-9 rounded-lg bg-white/10 mb-3" />
                                {/* Title */}
                                <div className="h-3.5 w-3/4 rounded bg-white/12 mb-2" />
                                {/* Description lines */}
                                <div className="space-y-1.5">
                                    <div className="h-2 w-full rounded-full bg-white/8" />
                                    <div className="h-2 w-4/5 rounded-full bg-white/6" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- OVERLAY ELEMENTS (The Ghost UI) --- */}

                {/* Inspection Layer Indicator */}
                <AnimatePresence>
                    {isInspecting && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-4 left-1/2 -translate-x-1/2 bg-neon-green/10 border border-neon-green/50 text-neon-green px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wide backdrop-blur-sm z-50 flex items-center gap-2"
                        >
                            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                            INSPECTION MODE ACTIVE
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Interactive Button Area */}
                <div className="absolute top-[25%] md:top-[35%] left-1/2 md:left-auto md:right-[15%] -translate-x-1/2 md:translate-x-0 flex gap-4 items-center z-20">
                    {/* Original Button Container with Selection Box */}
                    <div
                        className="relative group cursor-pointer"
                        onClick={handleElementClick}
                    >
                        {/* The Actual Button */}
                        <button className="bg-[#2D2DFF] text-white px-6 py-3 rounded-md text-sm font-medium whitespace-nowrap shadow-xl shadow-blue-900/20 relative z-10">
                            Learn more
                        </button>

                        {/* Selection Box (Only visible when inspecting) */}
                        <AnimatePresence>
                            {isInspecting && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="absolute -inset-3 border border-dashed border-neon-green/80 rounded-lg flex items-center justify-center bg-neon-green/5 pointer-events-none"
                                >
                                    <div className="absolute -top-5 left-0 text-neon-green text-[9px] font-mono font-bold tracking-wider bg-[#05050A] px-1">Button</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Cloned Button */}
                    <AnimatePresence>
                        {isCloned && (
                            <motion.div
                                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative"
                            >
                                <button className="bg-[#2D2DFF] text-white px-6 py-3 rounded-md text-sm font-medium whitespace-nowrap shadow-xl shadow-blue-900/20 ring-2 ring-neon-green ring-offset-2 ring-offset-[#05050A]">
                                    Learn more
                                </button>
                                {/* Clone Badge */}
                                <motion.div
                                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
                                    className="absolute -top-2 -right-2 w-5 h-5 bg-neon-green rounded-full flex items-center justify-center text-[10px] font-bold text-black border border-white"
                                >
                                    <Copy className="w-2.5 h-2.5" />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>


                {/* 2. Clone Config Modal */}
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.1}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[280px] bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-2xl shadow-2xl overflow-hidden z-[90] cursor-grab active:cursor-grabbing hover:border-neon-green/30 transition-colors"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                                <div className="flex items-center gap-2.5">
                                    <GripVertical className="w-4 h-4 text-gray-500" />
                                    <span className="text-[11px] font-bold tracking-widest text-white uppercase">Clone Config</span>
                                </div>
                                <div
                                    className="text-gray-500 hover:text-white cursor-pointer transition-colors"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    <X className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Sync Bar */}
                            <div className="bg-[#051a05] border-b-[0.5px] border-[#1E2745] px-5 py-2 flex items-center justify-between">
                                <span className="text-[10px] text-neon-green font-medium">Syncing: username</span>
                                <span className="text-[10px] text-gray-400 hover:text-white cursor-pointer underline decoration-white/20 underline-offset-2">Logout</span>
                            </div>

                            {/* Body */}
                            <div className="p-4 cursor-default" onPointerDown={(e) => e.stopPropagation()}>
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-xl p-6 flex flex-col items-center text-center gap-3.5">
                                    <div className="w-9 h-9 rounded border border-white/10 flex items-center justify-center text-neon-green bg-white/5">
                                        <Layout className="w-4.5 h-4.5" strokeWidth={1.5} />
                                    </div>

                                    <div className="space-y-1">
                                        <div className="text-[13px] font-bold text-white">Select element to clone</div>
                                        <div className="text-[10px] text-gray-500">Pick any component from the page</div>
                                    </div>

                                    <button
                                        onClick={handleStartInspection}
                                        className={`flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg text-xs font-bold mt-1.5 hover:bg-gray-200 transition-colors w-full justify-center shadow-lg shadow-white/5 ${!isAutoPlaying ? 'animate-pulse' : ''}`}
                                    >
                                        <Navigation className="w-3.5 h-3.5 fill-black" />
                                        Start Inspection
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 3. Modal Config Popup */}
                <AnimatePresence>
                    {isModalConfigOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.05}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[35%] left-1/2 w-[90%] md:w-[300px] max-h-[65%] bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-2xl shadow-2xl overflow-hidden z-[90] cursor-grab active:cursor-grabbing hover:border-neon-green/30 transition-colors flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b-[0.5px] border-[#1E2745] shrink-0">
                                <div className="flex items-center gap-2.5">
                                    <GripVertical className="w-3.5 h-3.5 text-gray-500" />
                                    <span className="text-[10px] font-bold tracking-widest text-white uppercase">Modal Config</span>
                                </div>
                                <div
                                    className="text-gray-500 hover:text-white cursor-pointer transition-colors"
                                    onClick={() => setIsModalConfigOpen(false)}
                                >
                                    <X className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Scrollable Body */}
                            <div className="p-3.5 cursor-default overflow-y-auto flex-1" onPointerDown={(e) => e.stopPropagation()}>
                                {/* Content Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-xl p-3 mb-3">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Pencil className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-xs font-bold text-white">Content</span>
                                    </div>

                                    {/* Headline */}
                                    <div className="mb-2.5">
                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Headline</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={modalHeadline}
                                                onChange={(e) => setModalHeadline(e.target.value)}
                                                className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white placeholder-gray-500 focus:outline-none focus:border-white/30 pr-8"
                                            />
                                            <Pencil className="w-3 h-3 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-2.5">
                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Description</label>
                                        <div className="relative">
                                            <textarea
                                                value={modalDescription}
                                                onChange={(e) => setModalDescription(e.target.value)}
                                                rows={2}
                                                className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white placeholder-gray-500 focus:outline-none focus:border-white/30 pr-8 resize-none"
                                            />
                                            <Pencil className="w-3 h-3 text-gray-500 absolute right-3 top-3" />
                                        </div>
                                    </div>

                                    {/* Button Label */}
                                    <div className="mb-2.5">
                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Button label</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={modalButtonLabel}
                                                onChange={(e) => setModalButtonLabel(e.target.value)}
                                                className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white placeholder-gray-500 focus:outline-none focus:border-white/30 pr-8"
                                            />
                                            <Pencil className="w-3 h-3 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                                        </div>
                                    </div>

                                    {/* Button Link */}
                                    <div>
                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Button link</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={modalButtonLink}
                                                onChange={(e) => setModalButtonLink(e.target.value)}
                                                className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white placeholder-gray-500 focus:outline-none focus:border-white/30 pr-8"
                                            />
                                            <Pencil className="w-3 h-3 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                                        </div>
                                    </div>
                                </div>

                                {/* Action Type Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-xl p-3 mb-3">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Sparkles className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-xs font-bold text-white">Action Type</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setActionType('link')}
                                            className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${actionType === 'link'
                                                ? 'bg-transparent border-2 border-neon-green text-neon-green'
                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Link
                                        </button>
                                        <button
                                            onClick={() => setActionType('form')}
                                            className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${actionType === 'form'
                                                ? 'bg-transparent border-2 border-neon-green text-neon-green'
                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Form
                                        </button>
                                    </div>
                                </div>

                                {/* Style Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-xl p-3 mb-3">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Palette className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-xs font-bold text-white">Style</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        {/* Background */}
                                        <div>
                                            <label className="text-[8px] text-gray-500 uppercase tracking-wider mb-1 block">Bg</label>
                                            <div className="flex items-center gap-1.5 bg-[#070B1A] border border-[#1E2745] rounded-lg px-1.5 py-1.5">
                                                <div className="w-4 h-4 rounded bg-white border border-white/20" />
                                                <span className="text-[9px] text-gray-400 font-mono">#FFF</span>
                                            </div>
                                        </div>
                                        {/* Text color */}
                                        <div>
                                            <label className="text-[8px] text-gray-500 uppercase tracking-wider mb-1 block">Text</label>
                                            <div className="flex items-center gap-1.5 bg-[#070B1A] border border-[#1E2745] rounded-lg px-1.5 py-1.5">
                                                <div className="w-4 h-4 rounded bg-[#1A1A1A] border border-white/20" />
                                                <span className="text-[9px] text-gray-400 font-mono">#1A</span>
                                            </div>
                                        </div>
                                        {/* Button */}
                                        <div>
                                            <label className="text-[8px] text-gray-500 uppercase tracking-wider mb-1 block">Btn</label>
                                            <div className="flex items-center gap-1.5 bg-[#070B1A] border border-[#1E2745] rounded-lg px-1.5 py-1.5">
                                                <div className="w-4 h-4 rounded bg-blue-500 border border-white/20" />
                                                <span className="text-[9px] text-gray-400 font-mono">#3B</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Delay Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-xl p-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3.5 h-3.5 text-neon-green" />
                                            <span className="text-xs font-bold text-white">Delay</span>
                                        </div>
                                        <span className="text-xs font-bold text-neon-green">0s</span>
                                    </div>
                                    <div className="relative">
                                        <div className="h-1 bg-[#161B22] rounded-full">
                                            <div className="h-1 bg-neon-green rounded-full w-0" />
                                        </div>
                                        <div className="absolute -top-1 left-0 w-3 h-3 bg-neon-green rounded-full border-2 border-[#1E2745]" />
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="flex items-center gap-2.5 px-4 py-3 border-t-[0.5px] border-[#1E2745] shrink-0">
                                <button className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs font-medium transition-colors">
                                    <RotateCcw className="w-3 h-3" />
                                    Reset
                                </button>
                                <button
                                    onClick={() => { setIsPreviewModalOpen(true); setIsModalConfigOpen(false); }}
                                    className="flex-1 flex items-center justify-center gap-2 bg-neon-green text-black py-2.5 rounded-xl text-xs font-bold hover:bg-neon-green/90 transition-colors"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Add to page
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 5. Banner Config Popup */}
                <AnimatePresence>
                    {isBannerConfigOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.05}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[35%] left-1/2 w-[90%] md:w-[320px] max-h-[65%] bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-3xl shadow-2xl overflow-hidden z-[90] cursor-grab active:cursor-grabbing hover:border-neon-green/30 transition-colors flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/5 shrink-0">
                                <div className="flex items-center gap-2">
                                    <GripVertical className="w-3 h-3 text-gray-500" />
                                    <span className="text-[9px] font-bold tracking-[0.15em] text-white uppercase">Banner Config</span>
                                </div>
                                <div
                                    className="text-gray-500 hover:text-white cursor-pointer transition-colors p-1"
                                    onClick={() => setIsBannerConfigOpen(false)}
                                >
                                    <X className="w-3.5 h-3.5" />
                                </div>
                            </div>

                            {/* Scrollable Body */}
                            <div
                                className="p-3.5 cursor-default overflow-y-auto flex-1 min-h-0 space-y-3"
                                onPointerDown={(e) => e.stopPropagation()}
                                onWheel={(e) => e.stopPropagation()}
                            >
                                {/* Banner Type card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Megaphone className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Banner</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => setBannerType('text')}
                                            className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${bannerType === 'text'
                                                ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Text
                                        </button>
                                        <button
                                            onClick={() => setBannerType('image')}
                                            className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${bannerType === 'image'
                                                ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Image
                                        </button>
                                    </div>
                                </div>

                                {/* Content Section cover both Text and Image */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    {bannerType === 'text' ? (
                                        <>
                                            <div className="flex items-center gap-2">
                                                <Pencil className="w-3.5 h-3.5 text-neon-green" />
                                                <span className="text-[11px] font-bold text-white">Content</span>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Description</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={bannerDescription}
                                                        onChange={(e) => setBannerDescription(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none"
                                                    />
                                                    <Pencil className="w-3 h-3 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Button label</label>
                                                <input
                                                    type="text"
                                                    value={bannerButtonLabel}
                                                    onChange={(e) => setBannerButtonLabel(e.target.value)}
                                                    className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-2">
                                                <Upload className="w-3.5 h-3.5 text-neon-green" />
                                                <span className="text-[11px] font-bold text-white">Upload</span>
                                            </div>
                                            <div className="space-y-2">
                                                {bannerImageUrl ? (
                                                    <div className="relative">
                                                        <img src={bannerImageUrl} className="w-full h-20 object-cover rounded-xl border border-white/10" alt="" />
                                                        <button onClick={() => setBannerImageUrl('')} className="absolute top-1.5 right-1.5 bg-black/60 p-1 rounded-lg"><X className="w-3 h-3 text-white" /></button>
                                                    </div>
                                                ) : (
                                                    <label className="w-full py-4 border border-dashed border-white/10 rounded-xl text-gray-500 hover:text-white transition-all flex flex-col items-center justify-center gap-2 cursor-pointer">
                                                        <Upload className="w-4 h-4" />
                                                        <span className="text-[10px] font-bold uppercase">Upload</span>
                                                        <input type="file" className="hidden" onChange={(e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                const reader = new FileReader();
                                                                reader.onload = (e) => setBannerImageUrl(e.target?.result as string);
                                                                reader.readAsDataURL(file);
                                                            }
                                                        }} />
                                                    </label>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Action Type card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Action</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button onClick={() => setBannerActionType('link')} className={`py-2 rounded-xl text-[10px] font-bold border ${bannerActionType === 'link' ? 'border-neon-green text-neon-green bg-transparent' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}>Link</button>
                                        <button onClick={() => setBannerActionType('form')} className={`py-2 rounded-xl text-[10px] font-bold border ${bannerActionType === 'form' ? 'border-neon-green text-neon-green bg-transparent' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}>Form</button>
                                    </div>
                                </div>

                                {bannerActionType === 'form' && (
                                    <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                        <div className="flex items-center gap-2">
                                            <Layout className="w-3.5 h-3.5 text-neon-green" />
                                            <span className="text-[11px] font-bold text-white">Form Details</span>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Headline</label>
                                            <input type="text" value={formHeadline} onChange={(e) => setFormHeadline(e.target.value)} className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Description</label>
                                            <textarea value={formDescription} onChange={(e) => setFormDescription(e.target.value)} className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none h-14 resize-none" />
                                        </div>
                                        <div className="border-t border-white/5 pt-3 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-bold text-white uppercase">Fields</span>
                                                <button onClick={() => setFormFields([...formFields, { id: Date.now(), name: '', type: 'Text', required: false }])} className="text-neon-green text-[9px] font-bold uppercase">+ Add</button>
                                            </div>
                                            <div className="space-y-2">
                                                {formFields.map((field, index) => (
                                                    <div key={field.id} className="bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-xl p-2.5 space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <input type="text" value={field.name} onChange={(e) => {
                                                                const newFields = [...formFields];
                                                                newFields[index].name = e.target.value;
                                                                setFormFields(newFields);
                                                            }} placeholder="Field name" className="flex-1 bg-transparent text-[10px] text-white focus:outline-none" />
                                                            <button onClick={() => setFormFields(formFields.filter((_, i) => i !== index))} className="text-gray-600 hover:text-red-400"><Trash2 className="w-3 h-3" /></button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Style Section card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Palette className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Style</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="bg-[#070B1A] border border-[#1E2745] rounded-lg p-2 text-center">
                                            <div className="text-[8px] text-gray-500 uppercase font-bold mb-1">Bg</div>
                                            <div className="w-4 h-4 rounded-sm bg-blue-500 mx-auto border border-white/10" />
                                        </div>
                                        <div className="bg-[#070B1A] border border-[#1E2745] rounded-lg p-2 text-center">
                                            <div className="text-[8px] text-gray-500 uppercase font-bold mb-1">Text</div>
                                            <div className="w-4 h-4 rounded-sm bg-white mx-auto border border-white/10" />
                                        </div>
                                        <div className="bg-[#070B1A] border border-[#1E2745] rounded-lg p-2 text-center">
                                            <div className="text-[8px] text-gray-500 uppercase font-bold mb-1">Btn</div>
                                            <div className="w-4 h-4 rounded-sm bg-neon-green mx-auto border border-white/10" />
                                        </div>
                                    </div>
                                </div>

                                {/* Placement card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Layout className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Placement</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button onClick={() => setBannerPlacement('top')} className={`py-2 rounded-xl text-[10px] font-bold border ${bannerPlacement === 'top' ? 'border-neon-green text-neon-green' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}>Top</button>
                                        <button onClick={() => setBannerPlacement('bottom')} className={`py-2 rounded-xl text-[10px] font-bold border ${bannerPlacement === 'bottom' ? 'border-neon-green text-neon-green' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}>Bottom</button>
                                    </div>
                                </div>

                                {/* Dismissible card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-[11px] font-bold text-white mb-0.5">Dismissible</div>
                                            <div className="text-[9px] text-gray-500 leading-tight">Close icon for element</div>
                                        </div>
                                        <button
                                            onClick={() => setBannerDismissible(!bannerDismissible)}
                                            className={`w-9 h-5 rounded-full transition-all relative ${bannerDismissible ? 'bg-neon-green' : 'bg-[#161B22]'}`}
                                        >
                                            <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${bannerDismissible ? 'right-0.5' : 'left-0.5'}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="flex items-center gap-2.5 px-4 py-3 border-t-[0.5px] border-[#1E2745] shrink-0">
                                <button className="flex items-center gap-1.5 text-gray-400 hover:text-white text-[10px] font-medium transition-colors">
                                    <RotateCcw className="w-3 h-3" />
                                    Reset
                                </button>
                                <button
                                    onClick={() => { setIsBannerPreviewOpen(true); setIsBannerConfigOpen(false); }}
                                    className="flex-1 flex items-center justify-center gap-2 bg-neon-green text-black py-2.5 rounded-xl text-[11px] font-bold hover:bg-neon-green/90 transition-colors"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Add to page
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 5.5 Badge Config Popup */}
                <AnimatePresence>
                    {isBadgeConfigOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.05}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[35%] left-1/2 w-[90%] md:w-[320px] max-h-[65%] bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-2xl shadow-2xl overflow-hidden z-[90] cursor-grab active:cursor-grabbing hover:border-neon-green/30 transition-colors flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-3.5 py-2.5 border-b-[0.5px] border-[#1E2745] shrink-0">
                                <div className="flex items-center gap-2">
                                    <GripVertical className="w-3 h-3 text-gray-500" />
                                    <span className="text-[9px] font-bold tracking-[0.15em] text-white uppercase">Badge Config</span>
                                </div>
                                <div
                                    className="text-gray-500 hover:text-white cursor-pointer transition-colors p-1"
                                    onClick={() => setIsBadgeConfigOpen(false)}
                                >
                                    <X className="w-3.5 h-3.5" />
                                </div>
                            </div>

                            {/* Scrollable Body */}
                            <div
                                className="p-3.5 cursor-default overflow-y-auto flex-1 min-h-0 space-y-3"
                                onPointerDown={(e) => e.stopPropagation()}
                                onWheel={(e) => e.stopPropagation()}
                            >
                                {/* Attachment Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-xl p-3 mb-3">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <Link2 className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Attachment</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setBadgeAttachment('corner')}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-all ${badgeAttachment === 'corner'
                                                ? 'bg-transparent border border-neon-green text-neon-green relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Screen Corner
                                        </button>
                                        <button
                                            onClick={() => setBadgeAttachment('element')}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-all ${badgeAttachment === 'element'
                                                ? 'bg-transparent border border-neon-green text-neon-green relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Element
                                        </button>
                                    </div>
                                    {badgeAttachment === 'element' && (
                                        <button className="w-full bg-white text-black py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                                            <Navigation className="w-4 h-4 rotate-45" />
                                            Select Element
                                        </button>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-xl p-3 mb-3">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <Pencil className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Content</span>
                                    </div>
                                    <div className="flex gap-2 mb-3">
                                        <button
                                            onClick={() => setBadgeContentType('text')}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-all ${badgeContentType === 'text'
                                                ? 'bg-transparent border border-neon-green text-neon-green relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Text
                                        </button>
                                        <button
                                            onClick={() => setBadgeContentType('image')}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-all ${badgeContentType === 'image'
                                                ? 'bg-transparent border border-neon-green text-neon-green relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Image
                                        </button>
                                    </div>

                                    {badgeContentType === 'text' ? (
                                        <>
                                            {/* Badge text */}
                                            <div className="mb-2.5">
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Badge text</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={badgeText}
                                                        onChange={(e) => setBadgeText(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none focus:border-white/30 pr-8"
                                                    />
                                                    <Pencil className="w-3 h-3 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </div>

                                            {/* Shape */}
                                            <div className="mb-3">
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Shape</label>
                                                <div className="flex gap-2">
                                                    {['Round', 'Pill', 'Square'].map((shape) => (
                                                        <button
                                                            key={shape}
                                                            onClick={() => setBadgeShape(shape.toLowerCase() as any)}
                                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-all ${badgeShape === shape.toLowerCase()
                                                                ? 'bg-transparent border border-neon-green text-neon-green relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                                }`}
                                                        >
                                                            {shape}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Style grid */}
                                            <div className="grid grid-cols-2 gap-3 mb-1">
                                                <div>
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Bg</label>
                                                    <div className="flex items-center gap-1.5 bg-[#070B1A] border border-[#1E2745] rounded-lg px-2 py-1.5">
                                                        <div className="w-3.5 h-3.5 rounded-sm border border-white/10" style={{ backgroundColor: badgeBgColor }} />
                                                        <span className="text-[9px] text-gray-400 font-mono uppercase">{badgeBgColor.substring(0, 4)}</span>
                                                        <input type="color" value={badgeBgColor} onChange={(e) => setBadgeBgColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Text</label>
                                                    <div className="flex items-center gap-1.5 bg-[#070B1A] border border-[#1E2745] rounded-lg px-2 py-1.5">
                                                        <div className="w-3.5 h-3.5 rounded-sm border border-white/10" style={{ backgroundColor: badgeTextColor }} />
                                                        <span className="text-[9px] text-gray-400 font-mono uppercase">{badgeTextColor.substring(0, 4)}</span>
                                                        <input type="color" value={badgeTextColor} onChange={(e) => setBadgeTextColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="mb-2">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Upload</label>
                                            <label className="w-full py-3 border border-dashed border-white/20 rounded-xl text-gray-400 hover:border-white/40 hover:text-white transition-all flex flex-col items-center justify-center gap-1 cursor-pointer">
                                                <Upload className="w-4 h-4" />
                                                <span className="text-[9px]">Click to upload</span>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            const reader = new FileReader();
                                                            reader.onload = (e) => setBadgeImageUrl(e.target?.result as string);
                                                            reader.readAsDataURL(file);
                                                        }
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>

                                <div
                                    className="p-3.5 cursor-default overflow-y-auto flex-1 min-h-0 space-y-3"
                                    onPointerDown={(e) => e.stopPropagation()}
                                    onWheel={(e) => e.stopPropagation()}
                                >
                                    {/* Position Section */}
                                    <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                        <div className="flex items-center gap-2">
                                            <CircleDot className="w-3.5 h-3.5 text-neon-green" />
                                            <span className="text-[11px] font-bold text-white">Placement</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                { label: 'TOP LEFT', value: 'top-left' },
                                                { label: 'TOP RIGHT', value: 'top-right' },
                                                { label: 'BOTTOM LEFT', value: 'bottom-left' },
                                                { label: 'BOTTOM RIGHT', value: 'bottom-right' }
                                            ].map((pos) => (
                                                <button
                                                    key={pos.value}
                                                    onClick={() => setBadgePosition(pos.value as any)}
                                                    className={`py-2 rounded-xl text-[9px] font-bold tracking-wider transition-all relative border ${badgePosition === pos.value
                                                        ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                        : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                        }`}
                                                >
                                                    {pos.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Offset Section */}
                                    <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                        <div className="flex items-center gap-2">
                                            <SlidersHorizontal className="w-3.5 h-3.5 text-neon-green" />
                                            <span className="text-[11px] font-bold text-white">Offset</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Edge distance</span>
                                                <span className="text-[10px] font-bold text-neon-green">{badgeOffset}px</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="50"
                                                value={badgeOffset}
                                                onChange={(e) => setBadgeOffset(parseInt(e.target.value))}
                                                className="w-full h-1 bg-[#05070C] rounded-lg appearance-none cursor-pointer accent-neon-green"
                                            />
                                        </div>
                                    </div>

                                    {/* Action Type Section */}
                                    <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5 text-neon-green" />
                                            <span className="text-[11px] font-bold text-white">Action</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                onClick={() => setBadgeActionType('link')}
                                                className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${badgeActionType === 'link' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}
                                            >
                                                Link
                                            </button>
                                            <button
                                                onClick={() => setBadgeActionType('form')}
                                                className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${badgeActionType === 'form' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}
                                            >
                                                Form
                                            </button>
                                        </div>

                                        {badgeActionType === 'link' ? (
                                            <div className="space-y-1.5 pt-1">
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Link</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={badgeLink}
                                                        onChange={(e) => setBadgeLink(e.target.value)}
                                                        placeholder="URL"
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none focus:border-white/10 pr-8"
                                                    />
                                                    <Pencil className="w-3 h-3 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="border-t border-white/5 pt-3 mt-3 space-y-3">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Layout className="w-3.5 h-3.5 text-neon-green" />
                                                    <span className="text-[11px] font-bold text-white">Form Details</span>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Headline</label>
                                                    <input
                                                        type="text"
                                                        value={badgeFormHeadline}
                                                        onChange={(e) => setBadgeFormHeadline(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Description</label>
                                                    <textarea
                                                        value={badgeFormDescription}
                                                        onChange={(e) => setBadgeFormDescription(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none h-14 resize-none"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Button</label>
                                                        <input
                                                            type="text"
                                                            value={badgeFormSubmitText}
                                                            onChange={(e) => setBadgeFormSubmitText(e.target.value)}
                                                            className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">API</label>
                                                        <input
                                                            type="text"
                                                            value={badgeFormApiEndpoint}
                                                            onChange={(e) => setBadgeFormApiEndpoint(e.target.value)}
                                                            className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Dismissible Section */}
                                    <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-[11px] font-bold text-white mb-0.5">Dismissible</div>
                                                <div className="text-[9px] text-gray-500 leading-tight">Allow closing the badge</div>
                                            </div>
                                            <button
                                                onClick={() => setBadgeDismissible(!badgeDismissible)}
                                                className={`w-9 h-5 rounded-full transition-all relative ${badgeDismissible ? 'bg-neon-green' : 'bg-[#161B22]'}`}
                                            >
                                                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${badgeDismissible ? 'right-0.5' : 'left-0.5'}`} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="flex items-center gap-2.5 px-3.5 py-3 border-t-[0.5px] border-[#1E2745] shrink-0">
                                <button className="flex items-center gap-1.5 text-gray-400 hover:text-white text-[10px] font-medium transition-colors">
                                    <RotateCcw className="w-3 h-3" />
                                    Reset
                                </button>
                                <button
                                    onClick={() => { setIsBadgePreviewOpen(true); setIsBadgeConfigOpen(false); }}
                                    className="flex-1 flex items-center justify-center gap-2 bg-neon-green text-black py-2.5 rounded-xl text-[11px] font-bold hover:bg-neon-green/90 transition-colors"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Launch Badge
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 5.6 FAB Config Popup */}
                <AnimatePresence>
                    {isFABConfigOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.05}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[35%] left-1/2 w-[90%] md:w-[320px] max-h-[65%] bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-3xl shadow-2xl overflow-hidden z-[90] cursor-grab active:cursor-grabbing hover:border-neon-green/30 transition-colors flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/5 shrink-0">
                                <div className="flex items-center gap-2">
                                    <GripVertical className="w-3 h-3 text-gray-500" />
                                    <span className="text-[9px] font-bold tracking-[0.15em] text-white uppercase">FAB CONFIG</span>
                                </div>
                                <div
                                    className="text-gray-500 hover:text-white cursor-pointer transition-colors p-1"
                                    onClick={() => setIsFABConfigOpen(false)}
                                >
                                    <X className="w-3.5 h-3.5" />
                                </div>
                            </div>

                            {/* Scrollable Body */}
                            <div
                                className="p-3.5 cursor-default overflow-y-auto flex-1 min-h-0 space-y-3"
                                onPointerDown={(e) => e.stopPropagation()}
                                onWheel={(e) => e.stopPropagation()}
                            >
                                {/* Mission Info Card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2">
                                    <div className="text-xl">🎯</div>
                                    <div className="text-[11px] font-bold text-white uppercase tracking-wider">CREATE DRAGGABLE BUTTON</div>
                                    <div className="text-[10px] text-gray-400">Launch it, then drag anywhere!</div>
                                </div>

                                {/* Behavior Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Navigation className="w-3.5 h-3.5 text-neon-green rotate-45" />
                                        <span className="text-[11px] font-bold text-white">Behavior</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => setFABBehavior('fixed')}
                                            className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-[10px] font-bold transition-all relative border ${fabBehavior === 'fixed' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            📌 Fixed
                                        </button>
                                        <button
                                            onClick={() => setFABBehavior('scroll')}
                                            className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-[10px] font-bold transition-all relative border ${fabBehavior === 'scroll' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            📍 Scroll
                                        </button>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Pencil className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Content</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => setFABContentType('text')}
                                            className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${fabContentType === 'text' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Text
                                        </button>
                                        <button
                                            onClick={() => setFABContentType('icon')}
                                            className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${fabContentType === 'icon' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Icon
                                        </button>
                                    </div>

                                    {fabContentType === 'text' && (
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Button text</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={fabLabel}
                                                    onChange={(e) => setFABLabel(e.target.value)}
                                                    className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none focus:border-white/10 uppercase font-bold pr-8"
                                                />
                                                <Pencil className="w-3 h-3 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2" />
                                            </div>
                                        </div>
                                    )}

                                    {fabContentType === 'icon' && (
                                        <div className="space-y-2">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Select Icon</label>
                                            <div className="flex flex-wrap gap-2">
                                                {[
                                                    { name: 'Plus', icon: Plus },
                                                    { name: 'MessageSquare', icon: MessageSquare },
                                                    { name: 'Heart', icon: Heart },
                                                    { name: 'HelpCircle', icon: HelpCircle },
                                                    { name: 'Sparkles', icon: Sparkles }
                                                ].map((item) => (
                                                    <button
                                                        key={item.name}
                                                        onClick={() => setFABIconName(item.name as any)}
                                                        className={`w-9 h-9 rounded-lg border transition-all flex items-center justify-center ${fabIconName === item.name
                                                            ? 'bg-neon-green/10 border-neon-green text-neon-green'
                                                            : 'bg-[#05070C] border-white/5 text-gray-500 hover:text-white hover:border-white/10'
                                                            }`}
                                                    >
                                                        <item.icon className="w-4 h-4" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Style Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Palette className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Style</span>
                                    </div>

                                    {/* Shape */}
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Shape</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { id: 'round', label: 'Round' },
                                                { id: 'pill', label: 'Pill' },
                                                { id: 'square', label: 'Square', icon: Pencil }
                                            ].map((s) => (
                                                <button
                                                    key={s.id}
                                                    onClick={() => setFABShape(s.id as any)}
                                                    className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border flex items-center justify-center gap-1.5 ${fabShape === s.id ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                        }`}
                                                >
                                                    {s.label}
                                                    {s.icon && <s.icon className="w-2.5 h-2.5 text-gray-600" />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Size */}
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Size</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { id: 'small', label: 'Small' },
                                                { id: 'medium', label: 'Medium' },
                                                { id: 'large', label: 'Large', icon: Pencil }
                                            ].map((sz) => (
                                                <button
                                                    key={sz.id}
                                                    onClick={() => setFABSize(sz.id as any)}
                                                    className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border flex items-center justify-center gap-1.5 ${fabSize === sz.id ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-[#1E2745] text-gray-500 bg-[#070B1A]'
                                                        }`}
                                                >
                                                    {sz.label}
                                                    {sz.icon && <sz.icon className="w-2.5 h-2.5 text-gray-600" />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Colors */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Background</label>
                                            <div className="flex items-center gap-2 bg-[#070B1A] border border-[#1E2745] rounded-lg px-2 py-2 relative">
                                                <div
                                                    className="w-4 h-4 rounded-sm border border-[#1E2745]"
                                                    style={{ backgroundColor: fabBgColor }}
                                                />
                                                <span className="text-[10px] text-white font-mono uppercase">{fabBgColor}</span>
                                                <Pencil className="w-2.5 h-2.5 text-gray-600 ml-auto" />
                                                <input type="color" value={fabBgColor} onChange={(e) => setFABBgColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Text color</label>
                                            <div className="flex items-center gap-2 bg-[#070B1A] border border-[#1E2745] rounded-lg px-2 py-2 relative">
                                                <div
                                                    className="w-4 h-4 rounded-sm border border-[#1E2745]"
                                                    style={{ backgroundColor: fabTextColor }}
                                                />
                                                <span className="text-[10px] text-white font-mono uppercase">{fabTextColor}</span>
                                                <Pencil className="w-2.5 h-2.5 text-gray-600 ml-auto" />
                                                <input type="color" value={fabTextColor} onChange={(e) => setFABTextColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Type Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Action Type</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-1">
                                        <button
                                            onClick={() => setFABActionType('link')}
                                            className={`py-1.5 rounded-lg text-[10px] font-bold transition-all relative border ${fabActionType === 'link' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Link
                                        </button>
                                        <button
                                            onClick={() => setFABActionType('form')}
                                            className={`py-1.5 rounded-lg text-[10px] font-bold transition-all relative border ${fabActionType === 'form' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Form
                                        </button>
                                    </div>

                                    {fabActionType === 'link' ? (
                                        <div className="mt-2 text-left">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1">Link</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={fabLink}
                                                    onChange={(e) => setFABLink(e.target.value)}
                                                    placeholder="URL"
                                                    className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[10px] text-white placeholder-gray-700 focus:outline-none focus:border-white/10 transition-colors pr-8"
                                                />
                                                <Pencil className="w-3 h-3 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="border-t border-white/5 pt-3 mt-3 space-y-3">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Layout className="w-3.5 h-3.5 text-neon-green" />
                                                <span className="text-[11px] font-bold text-white">Form Details</span>
                                            </div>
                                            <div>
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Headline</label>
                                                <input
                                                    type="text"
                                                    value={fabFormHeadline}
                                                    onChange={(e) => setFABFormHeadline(e.target.value)}
                                                    className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[10px] text-white focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Description</label>
                                                <textarea
                                                    value={fabFormDescription}
                                                    onChange={(e) => setFABFormDescription(e.target.value)}
                                                    className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[10px] text-white focus:outline-none h-14 resize-none"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div>
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Button</label>
                                                    <input
                                                        type="text"
                                                        value={fabFormSubmitText}
                                                        onChange={(e) => setFABFormSubmitText(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[10px] text-white"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">API</label>
                                                    <input
                                                        type="text"
                                                        value={fabFormApiEndpoint}
                                                        onChange={(e) => setFABFormApiEndpoint(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[10px] text-white"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="flex items-center justify-between px-4 py-3.5 border-t border-white/5 shrink-0 bg-[#05070C]">
                                <button
                                    className="flex items-center gap-1.5 text-gray-500 hover:text-white text-[9px] font-bold transition-colors uppercase tracking-[0.15em]"
                                    onClick={() => { }}
                                >
                                    <RotateCcw className="w-3.5 h-3.5" />
                                    Reset
                                </button>
                                <button
                                    onClick={() => { setIsFABPreviewOpen(true); setIsFABConfigOpen(false); }}
                                    className="px-5 py-2.5 bg-neon-green text-black rounded-xl text-[11px] font-bold hover:bg-neon-green/90 transition-all flex items-center gap-1.5 shadow-xl shadow-neon-green/10"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Add to page
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 4. Preview Modal - The actual injected modal preview (appears on webpage only) */}
                <AnimatePresence>
                    {isPreviewModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 top-0 bg-black/50 backdrop-blur-sm z-[45] flex items-center justify-center pointer-events-auto"
                            style={{ bottom: '140px' }} // Leave space for dock and status bar
                            onClick={() => setIsPreviewModalOpen(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="rounded-2xl p-8 w-[85%] max-w-[380px] shadow-2xl relative"
                                style={{ backgroundColor: modalBgColor }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsPreviewModalOpen(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Content */}
                                <div className="text-center">
                                    <h2
                                        className="text-2xl font-bold mb-3"
                                        style={{ color: modalTextColor }}
                                    >
                                        {modalHeadline}
                                    </h2>
                                    <p className="text-gray-500 mb-6">{modalDescription}</p>
                                    <button
                                        className="hover:opacity-90 text-white font-semibold py-3 px-12 rounded-lg transition-colors text-base"
                                        style={{ backgroundColor: modalButtonColor }}
                                    >
                                        {modalButtonLabel}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 6. Banner Preview - The actual injected banner (top or bottom of webpage) */}
                <AnimatePresence>
                    {isBannerPreviewOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: bannerPlacement === 'top' ? -50 : 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: bannerPlacement === 'top' ? -50 : 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className={`absolute left-0 right-0 z-[45] ${bannerPlacement === 'top' ? 'top-0' : 'bottom-[140px]'}`}
                            onClick={() => {
                                if (bannerType === 'image' && bannerActionType === 'form') {
                                    setIsBannerFormOpen(true);
                                }
                            }}
                        >
                            {/* Image Banner */}
                            {bannerType === 'image' && bannerImageUrl ? (
                                <div className="relative">
                                    <img
                                        src={bannerImageUrl}
                                        alt="Banner"
                                        className="w-full h-16 object-cover cursor-pointer"
                                    />
                                    {/* Dismiss Button */}
                                    {bannerDismissible && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setIsBannerPreviewOpen(false); }}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1 rounded-full transition-colors"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    )}
                                </div>
                            ) : (
                                /* Text Banner */
                                <div
                                    className="flex items-center justify-center gap-4 py-3 px-4"
                                    style={{ backgroundColor: bannerBgColor }}
                                >
                                    {/* Banner Text */}
                                    <span
                                        className="text-sm font-medium"
                                        style={{ color: bannerTextColor }}
                                    >
                                        {bannerDescription}
                                    </span>

                                    {/* Button - Opens form if action type is form, otherwise just a link */}
                                    <button
                                        onClick={() => {
                                            if (bannerActionType === 'form') {
                                                setIsBannerFormOpen(true);
                                            }
                                        }}
                                        className="px-4 py-1.5 rounded-md text-xs font-semibold transition-opacity hover:opacity-80"
                                        style={{
                                            backgroundColor: bannerButtonColor,
                                            color: bannerBgColor
                                        }}
                                    >
                                        {bannerButtonLabel}
                                    </button>

                                    {/* Dismiss Button */}
                                    {bannerDismissible && (
                                        <button
                                            onClick={() => setIsBannerPreviewOpen(false)}
                                            className="absolute right-4 opacity-70 hover:opacity-100 transition-opacity"
                                            style={{ color: bannerTextColor }}
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 8. Badge Preview - The actual injected badge */}
                <AnimatePresence>
                    {isBadgePreviewOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute z-[45] cursor-pointer shadow-lg transition-transform hover:scale-105 active:scale-95"
                            style={{
                                ...(() => {
                                    const offset = `${badgeOffset}px`;
                                    if (badgeAttachment === 'element') {
                                        return { top: '35%', left: '55%' }; // Mock position near "Shop" link
                                    }
                                    switch (badgePosition) {
                                        case 'top-left': return { top: offset, left: offset };
                                        case 'top-right': return { top: offset, right: offset };
                                        case 'bottom-left': return { bottom: `calc(140px + ${offset})`, left: offset };
                                        case 'bottom-right': return { bottom: `calc(140px + ${offset})`, right: offset };
                                        default: return { top: offset, right: offset };
                                    }
                                })(),
                            }}
                            onClick={() => {
                                if (badgeActionType === 'form') {
                                    setIsBadgeFormOpen(true);
                                } else if (badgeLink) {
                                    window.open(badgeLink, '_blank');
                                }
                            }}
                        >
                            <div className="relative group/badge">
                                {badgeContentType === 'image' && badgeImageUrl ? (
                                    <div className="relative">
                                        <img src={badgeImageUrl} alt="Badge" className="w-12 h-12 object-contain" />
                                        {badgeDismissible && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setIsBadgePreviewOpen(false); }}
                                                className="absolute -top-2 -right-2 bg-black/60 hover:bg-black/80 text-white p-0.5 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity"
                                            >
                                                <X className="w-2.5 h-2.5" />
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <div
                                        className={`flex items-center justify-center px-3 py-1 text-[10px] font-bold tracking-wider whitespace-nowrap min-w-[40px] ${badgeShape === 'round' ? 'rounded-full aspect-square' :
                                            badgeShape === 'pill' ? 'rounded-full' : 'rounded-sm'
                                            }`}
                                        style={{
                                            backgroundColor: badgeBgColor,
                                            color: badgeTextColor,
                                        }}
                                    >
                                        {badgeText}
                                        {badgeDismissible && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setIsBadgePreviewOpen(false); }}
                                                className="absolute -top-2 -right-2 bg-black/60 hover:bg-black/80 text-white p-0.5 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity"
                                            >
                                                <X className="w-2.5 h-2.5" />
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 7. Banner Form Popup - Opens when clicking banner button (if action type is form) */}
                <AnimatePresence>
                    {isBannerFormOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 top-0 bg-black/50 backdrop-blur-sm z-[46] flex items-center justify-center pointer-events-auto"
                            style={{ bottom: '140px' }}
                            onClick={() => setIsBannerFormOpen(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="bg-white rounded-2xl p-6 w-[85%] max-w-[360px] shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsBannerFormOpen(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Form Content */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">{formHeadline}</h2>
                                    <p className="text-gray-500 text-sm mb-5">{formDescription}</p>

                                    {/* Dynamic Form Fields */}
                                    <div className="space-y-3 mb-4">
                                        {formFields.map((field) => (
                                            <div key={field.id}>
                                                <label className="text-xs text-gray-600 font-medium mb-1 block">
                                                    {field.name} {field.required && <span className="text-red-500">*</span>}
                                                </label>
                                                {field.type === 'Textarea' ? (
                                                    <textarea
                                                        placeholder={`Enter ${field.name.toLowerCase()}`}
                                                        rows={3}
                                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                                                    />
                                                ) : (
                                                    <input
                                                        type={field.type.toLowerCase()}
                                                        placeholder={`Enter ${field.name.toLowerCase()}`}
                                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        onClick={() => {
                                            setIsBannerFormOpen(false);
                                        }}
                                        className="w-full py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                                        style={{ backgroundColor: bannerBgColor }}
                                    >
                                        {formSubmitText}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 9. Badge Form Popup - Opens when clicking badge (if action type is form) */}
                <AnimatePresence>
                    {isBadgeFormOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 top-0 bg-black/50 backdrop-blur-sm z-[46] flex items-center justify-center pointer-events-auto"
                            style={{ bottom: '140px' }}
                            onClick={() => setIsBadgeFormOpen(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="bg-white rounded-2xl p-6 w-[85%] max-w-[360px] shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsBadgeFormOpen(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Form Content */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">{badgeFormHeadline}</h2>
                                    <p className="text-gray-500 text-sm mb-5">{badgeFormDescription}</p>

                                    {/* Dynamic Form Fields */}
                                    <div className="space-y-3 mb-4">
                                        {badgeFormFields.map((field) => (
                                            <div key={field.id}>
                                                <label className="text-xs text-gray-600 font-medium mb-1 block">
                                                    {field.name} {field.required && <span className="text-red-500">*</span>}
                                                </label>
                                                <input
                                                    type={field.type.toLowerCase()}
                                                    placeholder={`Enter ${field.name.toLowerCase()}`}
                                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        onClick={() => {
                                            setIsBadgeFormOpen(false);
                                        }}
                                        className="w-full py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                                        style={{ backgroundColor: badgeBgColor }}
                                    >
                                        {badgeFormSubmitText}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 10. FAB Preview - The actual injected FAB */}
                <AnimatePresence>
                    {isFABPreviewOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.1}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className={`absolute z-[45] cursor-grab active:cursor-grabbing shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 overflow-hidden`}
                            style={{
                                bottom: `calc(140px + ${fabOffset}px)`,
                                [fabPosition === 'bottom-left' ? 'left' : 'right']: `${fabOffset}px`,
                                backgroundColor: fabBgColor,
                                color: fabTextColor,
                                borderRadius: fabShape === 'round' ? '9999px' : fabShape === 'pill' ? '12px' : '0px',
                                // Fixed sizes for icons to ensure perfect shapes
                                width: fabContentType === 'icon' ? (
                                    fabSize === 'small' ? '44px' : fabSize === 'large' ? '72px' : '56px'
                                ) : 'auto',
                                height: fabContentType === 'icon' ? (
                                    fabSize === 'small' ? '44px' : fabSize === 'large' ? '72px' : '56px'
                                ) : 'auto',
                                padding: fabContentType === 'text' ? (
                                    fabSize === 'small' ? '8px 16px' : fabSize === 'large' ? '16px 32px' : '12px 24px'
                                ) : '0px',
                                minWidth: fabContentType === 'icon' ? 'auto' : (
                                    fabSize === 'small' ? '80px' : fabSize === 'large' ? '140px' : '110px'
                                ),
                            }}
                            onClick={() => {
                                if (fabActionType === 'form') {
                                    setIsFABFormOpen(true);
                                } else if (fabLink) {
                                    window.open(fabLink, '_blank');
                                }
                            }}
                        >
                            {fabContentType === 'icon' ? (
                                (() => {
                                    const icons = { Plus, MessageSquare, Heart, Sparkles, HelpCircle };
                                    const IconComp = (icons as any)[fabIconName] || MessageSquare;
                                    return <IconComp className={`${fabSize === 'small' ? 'w-5 h-5' : fabSize === 'large' ? 'w-7 h-7' : 'w-6 h-6'}`} />;
                                })()
                            ) : (
                                <span className={`font-bold whitespace-nowrap uppercase tracking-widest ${fabSize === 'small' ? 'text-xs' : fabSize === 'large' ? 'text-base' : 'text-sm'}`}>
                                    {fabLabel}
                                </span>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 11. FAB Form Popup - Opens when clicking FAB (if action type is form) */}
                <AnimatePresence>
                    {isFABFormOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 top-0 bg-black/50 backdrop-blur-sm z-[46] flex items-center justify-center pointer-events-auto"
                            style={{ bottom: '140px' }}
                            onClick={() => setIsFABFormOpen(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="bg-white rounded-[2rem] p-8 w-[85%] max-w-[400px] shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setIsFABFormOpen(false)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{fabFormHeadline}</h2>
                                        <p className="text-gray-500 text-sm leading-relaxed">{fabFormDescription}</p>
                                    </div>

                                    <div className="space-y-4">
                                        {fabFormFields.map((field) => (
                                            <div key={field.id} className="space-y-1.5">
                                                <label className="text-xs text-gray-700 font-bold uppercase tracking-wider">
                                                    {field.name} {field.required && <span className="text-red-500">*</span>}
                                                </label>
                                                {field.type === 'Textarea' ? (
                                                    <textarea
                                                        placeholder={`Enter ${field.name.toLowerCase()}`}
                                                        rows={3}
                                                        className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-neon-green transition-colors resize-none"
                                                    />
                                                ) : (
                                                    <input
                                                        type={field.type.toLowerCase()}
                                                        placeholder={`Enter ${field.name.toLowerCase()}`}
                                                        className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-neon-green transition-colors"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setIsFABFormOpen(false)}
                                        className="w-full py-5 rounded-2xl text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg"
                                        style={{ backgroundColor: fabBgColor }}
                                    >
                                        {fabFormSubmitText}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 12. Manage Config Modal */}
                <AnimatePresence>
                    {isManageConfigOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md z-[60]"
                            onClick={() => setIsManageConfigOpen(false)}
                        >
                            <motion.div
                                drag
                                dragConstraints={containerRef}
                                dragElastic={0.05}
                                dragMomentum={false}
                                initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                                exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute top-[35%] left-1/2 bg-[#070B1A] border border-[#1E2540] rounded-[2rem] w-full max-w-[340px] max-h-[65%] overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing flex flex-col z-[90]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                                    <div className="flex items-center gap-2.5">
                                        <GripVertical className="w-3.5 h-3.5 text-gray-600" />
                                        <h2 className="text-[9px] font-bold text-white tracking-[0.2em] uppercase">Manage Config</h2>
                                    </div>
                                    <button
                                        onClick={() => setIsManageConfigOpen(false)}
                                        className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="p-6 space-y-6">
                                    {/* Tabs */}
                                    <div className="bg-black/40 border border-white/5 rounded-xl p-1 flex items-center gap-1 overflow-x-auto no-scrollbar">
                                        {(['Clone', 'Modal', 'Banner', 'Badge', 'Fab'] as const).map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveManageTab(tab)}
                                                className={`flex-1 min-w-[65px] py-2 rounded-lg text-[10px] font-bold transition-all ${activeManageTab === tab
                                                    ? 'bg-white/10 text-neon-green ring-1 ring-neon-green/30 shadow-[0_0_10px_rgba(20,255,0,0.1)]'
                                                    : 'text-gray-500 hover:text-gray-300'
                                                    }`}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Summary Bar */}
                                    <div className="flex items-center justify-between px-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-base font-bold text-white uppercase italic tracking-tight">Saved 0</span>
                                        </div>
                                        <button className="px-4 py-1.5 rounded-full bg-neon-green/5 border border-neon-green/20 text-neon-green text-[10px] font-bold hover:bg-neon-green/10 transition-all uppercase tracking-wider">
                                            Delete all
                                        </button>
                                    </div>

                                    {/* Content Area - Empty State */}
                                    <div className="py-8 flex flex-col items-center justify-center text-center space-y-3 bg-white/[0.01] rounded-2xl border border-dashed border-white/5">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                            <Layout className="w-6 h-6 text-gray-700" strokeWidth={1} />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs font-medium">No {activeManageTab.toLowerCase()}s saved</p>
                                            <p className="text-[9px] text-gray-700 uppercase tracking-widest mt-1 font-bold">Empty Vault</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 3. Floating Control Bar (Dock) - Figma Design */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 w-auto max-w-[90vw] bg-[#070B1A] backdrop-blur-xl border border-[#1E2540] rounded-[2rem] py-3 px-5 flex items-center gap-4 shadow-2xl z-[70] overflow-visible"
                >
                    {/* Logo */}
                    <div className="flex items-center gap-3 border-r border-white/10 pr-4">
                        <div className="w-8 h-8 rounded-lg bg-transparent flex items-center justify-center relative overflow-hidden">
                            <Image
                                src="/preta-logo.png"
                                alt="Preta Logo"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="font-bold text-white text-xs tracking-[0.15em]">PRETA</span>
                    </div>

                    {/* Tools Main */}
                    <div className="flex items-center gap-3">
                        {[
                            { icon: CloneIcon, label: "Clone", active: isModalOpen || isInspecting, id: "clone-tool", onClick: () => { setIsModalOpen(!isModalOpen); setIsModalConfigOpen(false); setIsBannerConfigOpen(false); setIsBadgeConfigOpen(false); setIsFABConfigOpen(false); setIsInspectMenuOpen(false); } },
                            { icon: AppWindow, label: "Modal", active: isModalConfigOpen, id: "modal-tool", onClick: () => { setIsModalConfigOpen(!isModalConfigOpen); setIsModalOpen(false); setIsBannerConfigOpen(false); setIsBadgeConfigOpen(false); setIsFABConfigOpen(false); setIsInspectMenuOpen(false); } },
                            { icon: Megaphone, label: "Banner", active: isBannerConfigOpen, id: "banner-tool", onClick: () => { setIsBannerConfigOpen(!isBannerConfigOpen); setIsModalOpen(false); setIsModalConfigOpen(false); setIsBadgeConfigOpen(false); setIsFABConfigOpen(false); setIsInspectMenuOpen(false); } },
                            { icon: Award, label: "Badge", active: isBadgeConfigOpen, id: "badge-tool", onClick: () => { setIsBadgeConfigOpen(!isBadgeConfigOpen); setIsModalOpen(false); setIsModalConfigOpen(false); setIsBannerConfigOpen(false); setIsFABConfigOpen(false); setIsInspectMenuOpen(false); } },
                            { icon: Plus, label: "FAB", active: isFABConfigOpen, id: "fab-tool", onClick: () => { setIsFABConfigOpen(!isFABConfigOpen); setIsModalOpen(false); setIsModalConfigOpen(false); setIsBannerConfigOpen(false); setIsBadgeConfigOpen(false); setIsInspectMenuOpen(false); } }
                        ].map((tool, i) => (
                            <div key={i} onClick={tool.onClick} className="flex flex-col items-center gap-1 group cursor-pointer relative">
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${tool.active
                                    ? 'bg-white/10 text-neon-green'
                                    : 'bg-[#0F142A] text-[#9AA4BF] group-hover:text-white group-hover:bg-white/10'
                                    } ${
                                    // PULSE CUE: Pulse the Clone tool when in Step 1 (Idle) - ONLY MANUAL MODE
                                    !isAutoPlaying && !isModalOpen && !isInspecting && !isCloned && tool.id === 'clone-tool' ? 'animate-pulse ring-1 ring-neon-green/50' : ''
                                    }`}
                                >
                                    <tool.icon className="w-4 h-4" strokeWidth={1.5} />
                                </div>
                                <span className={`text-[9px] font-medium transition-colors capitalize ${tool.active ? 'text-neon-green' : 'text-gray-500 group-hover:text-white'
                                    }`}>{tool.label}</span>
                                {/* Active indicator dot */}
                                {tool.active && (
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-green" />
                                )}

                                {/* Tooltip for Step 1 - ONLY MANUAL MODE */}
                                {!isModalOpen && !isInspecting && !isCloned && tool.id === 'clone-tool' && !isAutoPlaying &&
                                    !isModalConfigOpen && !isBannerConfigOpen && !isBadgeConfigOpen && !isFABConfigOpen && !isManageConfigOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neon-green text-black text-[9px] font-bold px-2 py-1 rounded whitespace-nowrap arrow-bottom z-50 pointer-events-none"
                                        >
                                            Start Here
                                        </motion.div>
                                    )}
                            </div>
                        ))}
                    </div>

                    {/* Inspect Dropdown */}
                    <div className="relative">
                        <AnimatePresence>
                            {isInspectMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    className="absolute bottom-full left-0 mb-4 w-64 bg-[#070B1A] border border-[#1E2540] rounded-3xl shadow-2xl overflow-hidden z-50 p-2"
                                >
                                    <div className="flex flex-col">
                                        {[
                                            { icon: Palette, label: "Extract theme", onClick: () => setIsInspectMenuOpen(false) },
                                            { icon: Scan, label: "Scan preta components", onClick: () => setIsInspectMenuOpen(false) },
                                            { icon: EyeOff, label: "Hide my components", onClick: () => setIsInspectMenuOpen(false) }
                                        ].map((item, idx) => (
                                            <div key={idx}>
                                                <button
                                                    onClick={item.onClick}
                                                    className="w-full flex items-center gap-4 px-5 py-4 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all group rounded-2xl"
                                                >
                                                    <item.icon className="w-5 h-5 group-hover:text-neon-green transition-colors" strokeWidth={1.5} />
                                                    <span className="font-medium">{item.label}</span>
                                                </button>
                                                {idx < 2 && <div className="h-px bg-white/5 mx-4" />}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={() => {
                                setIsInspectMenuOpen(!isInspectMenuOpen);
                                setIsModalOpen(false);
                                setIsModalConfigOpen(false);
                                setIsBannerConfigOpen(false);
                                setIsBadgeConfigOpen(false);
                                setIsFABConfigOpen(false);
                            }}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-medium transition-all border ${isInspectMenuOpen ? 'bg-white/10 border-neon-green text-neon-green' : 'bg-[#1A1F2E] hover:bg-[#252A3A] border-white/10 text-white'
                                }`}
                        >
                            Inspect
                            <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isInspectMenuOpen ? 'rotate-180 text-neon-green' : ''}`} />
                        </button>
                        {/* Notification Badge */}
                        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-neon-green rounded-full flex items-center justify-center text-[10px] font-bold text-black border-2 border-[#0A0E1A]">
                            2
                        </div>
                    </div>

                    {/* Dashboard/Manage */}
                    <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                        {[
                            { icon: PieChart, label: "Dashboard", onClick: () => { } },
                            {
                                icon: SlidersHorizontal, label: "Manage", active: isManageConfigOpen, onClick: () => {
                                    setIsManageConfigOpen(!isManageConfigOpen);
                                    setIsModalOpen(false);
                                    setIsModalConfigOpen(false);
                                    setIsBannerConfigOpen(false);
                                    setIsBadgeConfigOpen(false);
                                    setIsFABConfigOpen(false);
                                    setIsInspectMenuOpen(false);
                                }
                            }
                        ].map((tool, i) => (
                            <div key={i} onClick={tool.onClick} className="flex flex-col items-center gap-1 group cursor-pointer relative">
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${tool.active
                                    ? 'bg-white/10 text-neon-green'
                                    : 'bg-[#0F142A] text-[#9AA4BF] group-hover:text-white group-hover:bg-white/10'
                                    }`}>
                                    <tool.icon className="w-4 h-4" strokeWidth={1.5} />
                                </div>
                                <span className={`text-[9px] font-medium transition-colors capitalize ${tool.active ? 'text-neon-green' : 'text-gray-500 group-hover:text-white'
                                    }`}>{tool.label}</span>
                                {tool.active && (
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-green" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* User Avatar */}
                    <div className="w-9 h-9 rounded-full border-2 border-[#1E2540] bg-[#0F142A] flex items-center justify-center overflow-hidden cursor-pointer hover:border-white/40 transition-all">
                        <User className="w-5 h-5 text-white/70" />
                    </div>
                </motion.div>

                {/* 4. Bottom Status Bar - Dynamic Instructions */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#070B1A] border border-[#1E2540] rounded-full px-4 py-1.5 flex items-center gap-4 z-[70] shadow-2xl"
                >
                    <div className="flex items-center gap-2 text-neon-green text-[10px] font-bold font-mono">
                        <div className={`w-1.5 h-1.5 rounded-full bg-neon-green ${!isCloned ? 'animate-ping' : ''}`} />
                        {/* Dynamic Status Text: Simple for Auto-Play, Guided for Manual */}
                        {isAutoPlaying ? (
                            isInspecting ? "Inspecting Element..." : isCloned ? "Element Cloned Configured" : "Overlay Tool Ready"
                        ) : (
                            isCloned ? "SUCCESS: Element Cloned & Configured" :
                                isInspecting ? "STEP 3: Click the Blue Button to Clone it" :
                                    isModalOpen ? "STEP 2: Click 'Start Inspection' in Modal" :
                                        "STEP 1: Open 'Clone' Tool from the Dock"
                        )}
                    </div>
                    <div className="w-px h-2.5 bg-white/10" />
                    <div className="flex items-center gap-2 text-gray-400 text-[10px] hover:text-white transition-colors cursor-pointer font-medium">
                        <Plus className="w-3 h-3" />
                        Inject Button
                    </div>
                    <div className="w-px h-2.5 bg-white/10" />
                    <div className="flex items-center gap-2 text-gray-400 text-[10px] hover:text-white transition-colors cursor-pointer font-medium">
                        <BarChart2 className="w-3 h-3" />
                        Measure Clicks
                    </div>
                </motion.div>
            </div>
        </div >
    );
}

