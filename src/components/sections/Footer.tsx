"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const XIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export default function Footer() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <footer className="pt-16 pb-12 bg-[#070B1A] border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Top Section: Logo | Navigation | Socials */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">

                    {/* Left: Branding */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16">
                            <Image
                                src="/preta-logo.png"
                                alt="Preta Logo"
                                fill
                                className="object-contain"
                                sizes="64px"
                            />
                        </div>
                        <span className="text-3xl font-inter-tight font-medium tracking-widest text-white uppercase">PRETA</span>
                    </div>

                    {/* Center: Navigation */}
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-medium text-lg">Navigation</span>
                        <div className="flex items-center gap-8">
                            {[
                                { name: "Zero waste", href: "#validation" },
                                { name: "How it work", href: "#how-it-works" },
                                { name: "Teams", href: "#teams" },
                                { name: "Pricing", href: "#pricing" }
                            ].map((link) => (
                                <Link key={link.name} href={link.href} className="text-white/90 hover:text-white transition-colors text-sm font-medium">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: Socials */}
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-medium text-lg">Socials</span>
                        <div className="flex items-center gap-4 min-h-[48px]">
                            {isMounted ? [
                                { icon: Linkedin, href: "https://www.linkedin.com/company/zerostatecorp/" },
                                { icon: XIcon, href: "#" }, 
                                { icon: Mail, href: "mailto:support@pretasystems.com" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-[#051a05] flex items-center justify-center text-neon-green border border-neon-green/20 hover:bg-neon-green hover:text-black transition-all hover:scale-110"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            )) : (
                                /* Skeleton/Placeholder to prevent layout shift */
                                [1, 2, 3].map((_, i) => (
                                    <div key={i} className="w-12 h-12 rounded-full bg-[#051a05]/50 border border-white/5 animate-pulse" />
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Legal */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/90 font-inter-tight">

                    {/* Left: Trademark */}
                    <div>
                        PRETA is a registered trademark of <span className="text-neon-green underline underline-offset-4 decoration-neon-green/30 cursor-pointer hover:decoration-neon-green">ZeroState Systems, Inc.</span>
                    </div>

                    {/* Center: Legal Links */}
                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>

                    {/* Right: Copyright */}
                    <div>
                        © 2026 All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
}
