"use client";

import Link from "next/link";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { name: "Zero waste", href: "#validation" },
    { name: "How it work", href: "#how-it-works" },
    { name: "Teams", href: "#teams" },
    { name: "Price", href: "#pricing" },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-[#070B1A]/80 backdrop-blur-md py-4 shadow-2xl" : "bg-transparent py-7"
            )}
        >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative w-28 h-12">
                    <Image
                        src="/Preta-removebg-preview.png"
                        alt="Preta"
                        fill
                        className="object-contain object-left"
                    />
                </Link>

                {/* Nav Links - Centered */}
                <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right CTAs */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/signin" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="bg-[#39FF14] text-black px-7 py-2.5 rounded-full font-bold text-sm hover:bg-[#39FF14] transition-all shadow-[0_0_15px_rgba(57,255,20,0.2)]"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="absolute top-full left-4 right-4 bg-[#070B1A] border border-white/10 rounded-2xl p-6 lg:hidden shadow-2xl mt-2 overflow-hidden"
                        >
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-lg font-medium text-white/90 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="h-px bg-white/10" />
                                <div className="flex flex-col gap-4">
                                    <Link
                                        href="/signin"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-lg font-medium text-white/90 hover:text-white transition-colors"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/signup"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="bg-[#39FF14] text-black text-center py-4 rounded-xl font-bold text-lg"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
