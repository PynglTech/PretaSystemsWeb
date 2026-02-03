"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, Eye } from "lucide-react";
import AuthBackground from "@/components/auth/AuthBackground";

export default function SignInPage() {
    return (
        <main className="relative min-h-screen w-full bg-deep-void font-inter-tight overflow-hidden">
            {/* Background */}
            <AuthBackground />

            <div className="relative z-10 w-full h-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
                {/* Right Half - Form Card */}
                <div className="flex items-center justify-center min-h-screen px-6 lg:px-[15%] lg:col-start-2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-[483px] h-[480px] px-8 py-6 rounded-[12.89px] bg-[#070707]/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Back Button */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-[#4DFB0C] hover:opacity-80 transition-opacity mb-4 group"
                        >
                            <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            <span className="text-sm font-medium">Back</span>
                        </Link>

                        {/* Header */}
                        <div className="mb-6">
                            <h1 className="text-[32px] font-medium text-white mb-2 tracking-tight font-jetbrains-mono leading-none">
                                Welcome
                            </h1>
                            <p className="text-zinc-500 text-[14px] font-medium">
                                Please login your account
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-[13px] font-medium text-zinc-400 px-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="admin@gmail.com"
                                    className="w-full bg-[#111113] rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#39FF14]/30 transition-all font-medium"
                                />
                            </div>

                            {/* Password */}
                            <div className="space-y-2 relative">
                                <label className="text-[13px] font-medium text-zinc-400 px-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="w-full bg-[#111113] rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#39FF14]/30 transition-all font-medium pr-12"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
                                    >
                                        <Eye className="w-5 h-5" />
                                    </button>
                                </div>

                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#39FF14] text-black font-bold py-4 rounded-2xl hover:bg-[#39FF14] transition-all shadow-[0_0_20px_rgba(57,255,20,0.2)] text-base"
                            >
                                Sign In
                            </button>

                            {/* Footer */}

                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
