"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import AuthBackground from "@/components/auth/AuthBackground";

export default function SignUpPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would normally handle signup logic
        router.push("/onboarding");
    };

    return (
        <main className="relative min-h-screen w-full bg-deep-void font-inter-tight overflow-hidden">



            {/* Background */}
            <AuthBackground />

            <div className="relative z-10 w-full h-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
                {/* Right Half - Form Card */}
                <div className="flex items-center justify-center px-6 lg:px-[15%] lg:col-start-2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full max-w-[480px] px-10 py-14 rounded-[40px] bg-[#070707]/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Back Button */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-[#4DFB0C] hover:opacity-80 transition-opacity mb-8 group"
                        >
                            <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />

                        </Link>

                        {/* Header */}
                        <div className="mb-12">
                            <h1 className="text-[42px] font-medium text-white mb-3 tracking-tight font-jetbrains-mono leading-none">
                                Create account
                            </h1>
                            <p className="text-zinc-500 text-[16px] font-medium">
                                Start your journey with Preta
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-[13px] font-medium text-zinc-400 px-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#111113] rounded-xl px-6 py-5 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#39FF14]/30 transition-all font-medium"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-[13px] font-medium text-zinc-400 px-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-[#111113] rounded-xl px-6 py-5 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#39FF14]/30 transition-all font-medium"
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
                                        placeholder="Create a password"
                                        className="w-full bg-[#111113] rounded-xl px-6 py-5 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#39FF14]/30 transition-all font-medium pr-14"
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
                                className="w-full bg-[#4DFB0C] text-black font-bold py-5 rounded-2xl hover:bg-[#43e00b] transition-all shadow-[0_0_20px_rgba(77,251,12,0.2)] text-lg"
                            >
                                Get started
                            </button>

                            {/* Footer */}
                            <p className="text-center text-[14px] text-zinc-500 pt-6">
                                Already have an account?{" "}
                                <Link href="/signin" className="text-[#4DFB0C] font-bold hover:underline">
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
