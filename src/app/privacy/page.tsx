"use client";

import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import {
    Shield,
    ChevronRight,
    Mail,
    History,
    Calendar,
    Clock,
    Info,
    Database,
    FileText,
    ShieldCheck,
    Key,
    User,
    RefreshCw,
    Lock,
    Server,
    CheckCircle2,
    List
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
    { id: "intro", title: "Introduction", icon: Info },
    { id: "collection", title: "Data collection & usage", icon: Database },
    { id: "limited-use", title: "Limited use disclosure", icon: FileText },
    { id: "security", title: "Data security", icon: ShieldCheck },
    { id: "permissions", title: "Permissions", icon: Key },
    { id: "rights", title: "Your rights", icon: User },
    { id: "changes", title: "Changes to this policy", icon: RefreshCw },
    { id: "contact", title: "Contact Us", icon: Mail },
];

export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState("intro");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5, rootMargin: "-10% 0px -70% 0px" }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };


    return (
        <main className="min-h-screen bg-[#070B1A] font-inter selection:bg-neon-green/20 w-full">
            <Navigation />

            <div className="pt-32 lg:pt-40 pb-24 px-6 sm:px-12 lg:px-24 max-w-[1440px] mx-auto w-full box-border">
                <div className="flex flex-col items-center text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <div className="w-16 h-16 bg-neon-green/10 border border-neon-green/20 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(57,255,20,0.1)]">
                        <Shield className="w-8 h-8 text-neon-green" />
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
                        Privacy <span className="text-neon-green">policy</span>
                    </h1>
                    <p className="text-white/40 font-medium mb-8">Preta Chrome Extension</p>
                    <div className="inline-flex flex-wrap items-center justify-center gap-6 text-[11px] text-white/40 font-bold uppercase tracking-widest bg-white/[0.03] border border-white/5 px-6 py-3 rounded-full">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-white/20" />
                            <span>Effective Date: February 24, 2026</span>
                        </div>
                        <div className="w-px h-3 bg-white/10 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-white/20" />
                            <span>Last Updated: February 24, 2026</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start w-full relative">
                    {/* Sidebar Navigation - Stationary */}
                    <aside className="lg:w-72 lg:sticky lg:top-40 hidden lg:block h-fit z-10">
                        <div className="bg-[#111624] border border-white/5 rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-center gap-3 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-8 pl-1">
                                <List className="w-4 h-4 text-neon-green" />
                                <span>Quick Navigation</span>
                            </div>
                            <nav className="flex flex-col gap-1">
                                {sections.map((section) => {
                                    const Icon = section.icon;
                                    return (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={cn(
                                                "group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 text-left",
                                                activeSection === section.id
                                                    ? "bg-neon-green/5 text-neon-green shadow-[inset_0_0_20px_rgba(57,255,20,0.05)]"
                                                    : "text-white/40 hover:text-white/70 hover:bg-white/[0.02]"
                                            )}
                                        >
                                            <Icon className={cn(
                                                "w-4 h-4 transition-colors",
                                                activeSection === section.id ? "text-neon-green" : "text-white/20 group-hover:text-white/40"
                                            )} />
                                            <span className="text-sm font-semibold tracking-wide">{section.title}</span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Area - Scrollable */}
                    <div className="flex-1 w-full lg:max-w-4xl relative z-0">
                        {/* Content Card container */}
                        <div className="bg-[#111624] border border-white/5 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
                            <div className="space-y-24">
                                {/* 1. Introduction */}


                                <section id="intro" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-neon-green/10 rounded-xl flex items-center justify-center">
                                            <Info className="w-5 h-5 text-neon-green" />
                                        </div>
                                        Introduction
                                    </h2>
                                    <div className="text-white/50 text-[16px] leading-[1.8] space-y-6">
                                        <p>
                                            Preta (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), operated under Zerostate, is committed to protecting your privacy.
                                            This Privacy Policy explains how we collect, use, and safeguard your information when you use the Preta Chrome Extension (the &ldquo;Extension&rdquo;).
                                            Our mission is to provide pre-code product validation while maintaining the highest standards of data security.
                                        </p>
                                    </div>
                                </section>

                                {/* 2. Data Collection & Usage */}
                                <section id="collection" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-neon-green/10 rounded-xl flex items-center justify-center">
                                            <Database className="w-5 h-5 text-neon-green" />
                                        </div>
                                        Data collection & usage
                                    </h2>
                                    <div className="text-white/50 text-[16px] leading-[1.8] space-y-8">
                                        <p>We only collect data that is strictly necessary to provide the functional features of the Extension.</p>
                                        <div className="space-y-6">
                                            {[
                                                {
                                                    title: "User-Provided Information:",
                                                    desc: "When you create an account, we collect your email address and basic profile information."
                                                },
                                                {
                                                    title: "Authentication Data:",
                                                    desc: "We use secure tokens to keep you logged into the platform."
                                                },
                                                {
                                                    title: "Functional Data:",
                                                    desc: "To perform pre-code validation, the Extension may interact with the browser tab's UI elements only when explicitly triggered by you. This includes capturing logic flows or UI structures for the purpose of simulation."
                                                }
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full mt-[10px] flex-shrink-0" />
                                                    <p><strong className="text-white/80 font-semibold">{item.title}</strong> {item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                {/* 3. Limited Use Disclosure */}
                                <section id="limited-use" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-neon-green/10 rounded-xl flex items-center justify-center">
                                            <FileText className="w-5 h-5 text-neon-green" />
                                        </div>
                                        Limited use disclosure
                                    </h2>
                                    <div className="text-white/50 text-[16px] leading-[1.8] space-y-8">
                                        <p>In accordance with the Chrome Web Store Developer Program Policies, Preta adheres to the &ldquo;Limited Use&rdquo; requirements:</p>
                                        <div className="space-y-4">
                                            {[
                                                "We only use the data to provide or improve the single purpose of the Extension (product validation).",
                                                "We do not sell your data to third parties, data brokers, or advertising networks.",
                                                "We do not use your data for personalised advertising or creditworthiness assessments.",
                                                "We do not allow humans to read your data unless we have obtained your explicit consent for a specific support issue or are required by law."
                                            ].map((text, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full mt-[10px] flex-shrink-0" />
                                                    <p>{text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                {/* 4. Data Security */}
                                <section id="security" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-neon-green/10 rounded-xl flex items-center justify-center">
                                            <ShieldCheck className="w-5 h-5 text-neon-green" />
                                        </div>
                                        Data security
                                    </h2>
                                    <div className="text-white/50 text-[16px] leading-[1.8] space-y-8">
                                        <p>We implement industry-standard security measures to protect your data:</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.05] transition-colors">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Lock className="w-4 h-4 text-neon-green" />
                                                    <h3 className="text-white font-bold text-sm">Encryption</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">All data is encrypted in transit using modern cryptography (HTTPS/TLS).</p>
                                            </div>
                                            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.05] transition-colors">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Server className="w-4 h-4 text-neon-green" />
                                                    <h3 className="text-white font-bold text-sm">Storage</h3>
                                                </div>
                                                <p className="text-sm leading-relaxed">Any sensitive data is stored using secure, encrypted cloud infrastructure provided by Zerostate.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* 5. Permissions */}
                                <section id="permissions" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-neon-green/10 rounded-xl flex items-center justify-center">
                                            <Key className="w-5 h-5 text-neon-green" />
                                        </div>
                                        Permissions
                                    </h2>
                                    <div className="text-white/50 text-[16px] leading-[1.8] space-y-8">
                                        <p>The Extension requests the following permissions only as needed:</p>
                                        <div className="space-y-4">
                                            {[
                                                { name: "activeTab:", desc: "To validate the logic of the product you are currently viewing." },
                                                { name: "storage:", desc: "To save your preferences and session state locally." },
                                                { name: "scripting:", desc: "To perform pre-code validation and interact with UI elements for simulation." },
                                                { name: "host_permissions (<all_urls>):", desc: "To allow the Extension to work on any website for the purpose of product validation." }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-stretch gap-4">
                                                    <div className="w-1 bg-neon-green/40 rounded-full" />
                                                    <div className="py-1">
                                                        <p><strong className="text-white font-bold">{item.name}</strong></p>
                                                        <p className="text-sm">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                {/* 6. Your Rights */}
                                <section id="rights" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-neon-green/10 rounded-xl flex items-center justify-center">
                                            <User className="w-5 h-5 text-neon-green" />
                                        </div>
                                        Your rights
                                    </h2>
                                    <div className="text-white/50 text-[16px] leading-[1.8] space-y-8">
                                        <p>Depending on your location (such as the EU/GDPR or California/CCPA), you have the right to:</p>
                                        <div className="space-y-4">
                                            {[
                                                "Access the personal data we hold about you.",
                                                "Request the deletion of your data at any time.",
                                                "Opt-out of any non-essential data processing."
                                            ].map((text, i) => (
                                                <div key={i} className="flex items-center gap-4">
                                                    <CheckCircle2 className="w-5 h-5 text-neon-green/40" />
                                                    <p className="text-white font-semibold">{text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                {/* 7. Changes to This Policy */}
                                <section id="changes" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-neon-green/10 rounded-xl flex items-center justify-center">
                                            <RefreshCw className="w-5 h-5 text-neon-green" />
                                        </div>
                                        Changes to this Policy
                                    </h2>
                                    <div className="text-white/50 text-[16px] leading-[1.8] space-y-6">
                                        <p>
                                            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons.
                                            We will notify you of any material changes by posting the new policy on this page and updating the &ldquo;Last Updated&rdquo; date.
                                        </p>
                                    </div>
                                </section>

                                {/* 8. Contact Us */}
                                <section id="contact" className="scroll-mt-32">
                                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                                        <div className="w-10 h-10 bg-neon-green/10 rounded-xl flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-neon-green" />
                                        </div>
                                        Contact us
                                    </h2>
                                    <div className="text-white/50 text-[16px] leading-[1.8] space-y-8">
                                        <p>
                                            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                                        </p>

                                        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                            <div className="w-12 h-12 bg-neon-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Mail className="w-6 h-6 text-neon-green" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold mb-1">Support email</h3>
                                                <p className="text-neon-green font-bold text-sm tracking-tight">support@pretasystems.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main >
    );
}
