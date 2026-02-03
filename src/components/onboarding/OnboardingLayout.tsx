"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

interface OnboardingLayoutProps {
    children: React.ReactNode;
}

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
    return (
        <div className="flex min-h-screen bg-[#070B1A] text-white font-inter relative overflow-hidden">
            {/* Sidebar */}
            <aside className="w-[240px] border-r border-white/[0.08] flex flex-col pt-8 bg-[#070B1A] relative z-10 shadow-2xl">
                {/* Logo */}
                <div className="px-6 mb-12">
                    <Link href="/" className="relative w-28 h-12 block">
                        <Image
                            src="/Preta-removebg-preview.png"
                            alt="Preta"
                            fill
                            className="object-contain object-left"
                        />
                    </Link>
                </div>

                {/* Nav items */}
                <nav className="flex-1 px-3 space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 text-[#39FF14] font-medium transition-colors rounded-lg bg-[#39FF14]/5">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                            <path d="M8 16.5V12.75M10.25 6V1.5M11.75 6C12.1639 6 12.5 6.33606 12.5 6.75V9.75C12.5 11.4057 11.1557 12.75 9.5 12.75H6.5C4.84425 12.75 3.5 11.4057 3.5 9.75V6.75C3.5 6.33606 3.83606 6 4.25 6L8 16.5M5.75 6V1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm">Connect</span>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-screen bg-[#070B1A] relative">
                {/* Header / Top Bar */}
                <header className="h-[72px] border-b border-white/[0.08] flex items-center justify-between px-10 bg-[#070B1A] relative z-10 shadow-lg">
                    <h1 className="text-2xl font-semibold tracking-tight">Connect your website</h1>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
                            <User className="w-6 h-6 text-zinc-400" />
                        </div>
                    </div>
                </header>

                <div className="flex-1 p-10 max-w-[1200px] mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
