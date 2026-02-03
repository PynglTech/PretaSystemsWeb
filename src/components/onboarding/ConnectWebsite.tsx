"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Check, Copy, Maximize2, AlertCircle, X, CheckCircle2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import { ScanningOverlay } from "./ScanningOverlay";

// URL Validation helper
const isValidUrl = (url: string): boolean => {
    if (!url) return false;
    try {
        const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
        return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
        return false;
    }
};

type FrameworkTab = "html" | "nextjs" | "react" | "nuxt" | "angular" | "wordpress";

export default function ConnectWebsite() {
    const [activeTab, setActiveTab] = useState<FrameworkTab>("html");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [step, setStep] = useState(1);
    const [copied, setCopied] = useState(false);
    const [verifying, setVerifying] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [isExpandModalOpen, setIsExpandModalOpen] = useState(false);

    // Rehydrate state from localStorage on mount
    useEffect(() => {
        const savedUrl = localStorage.getItem("onboarding_url");
        const savedStep = localStorage.getItem("onboarding_step");
        if (savedUrl) setWebsiteUrl(savedUrl);
        if (savedStep) setStep(parseInt(savedStep, 10));
    }, []);

    // Persist websiteUrl to localStorage
    useEffect(() => {
        if (websiteUrl) {
            localStorage.setItem("onboarding_url", websiteUrl);
        }
    }, [websiteUrl]);

    // Persist step to localStorage
    useEffect(() => {
        localStorage.setItem("onboarding_step", String(step));
    }, [step]);

    // URL Validation status
    const urlIsValid = useMemo(() => isValidUrl(websiteUrl), [websiteUrl]);

    const scriptCode = `<script src="pyngl-init.js"></script>
<script src="/loader.js" 
    data-api="https://anamaria-reserveless-inflatedly.ngrok-free.dev/api" 
    data-debug="true">
</script>`;

    const handleCopy = () => {
        navigator.clipboard.writeText(scriptCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleVerify = async () => {
        if (!websiteUrl) {
            setStatus("error");
            setErrorMessage("Please enter your website URL first.");
            return;
        }

        setVerifying(true);
        setStatus("idle");

        // Artificial delay for immersive experience (matches ScanningOverlay timing)
        const startTime = Date.now();

        try {
            const response = await fetch("/api/verify-install", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: websiteUrl }),
            });

            const data = await response.json();

            // Calculate remaining time to ensure at least 4s of "active scanning"
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, 4000 - elapsedTime);

            await new Promise(resolve => setTimeout(resolve, remainingTime));

            if (data.success) {
                setStatus("success");
                setStep(2);
            } else {
                setStatus("error");
                setErrorMessage(data.message || "We couldn't detect the script. Check the <head> tag and try again");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("An error occurred during verification. Please try again.");
        } finally {
            setVerifying(false);
        }
    };

    return (
        <div className="max-w-[800px] w-full space-y-12 pb-20 relative">
            <ScanningOverlay isVisible={verifying} url={websiteUrl} />
            <p className="text-zinc-400 text-lg max-w-[600px] leading-relaxed">
                Install these scripts to enable validation, experiments, and governance — without shipping risk.
            </p>

            {/* Stepper */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 shadow-xl">
                    <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                        step >= 1 ? "bg-[#39FF14] text-black" : "bg-zinc-800 text-zinc-500"
                    )}>
                        1
                    </div>
                    <span className={cn("text-xs font-medium uppercase tracking-wider", step >= 1 ? "text-white" : "text-zinc-500")}>
                        Generate code
                    </span>
                </div>
                <div className="w-12 h-px bg-white/10" />
                <div className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 shadow-xl">
                    <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                        step >= 2 ? "bg-[#39FF14] text-black" : "bg-zinc-800 text-zinc-500"
                    )}>
                        2
                    </div>
                    <span className={cn("text-xs font-medium uppercase tracking-wider", step >= 2 ? "text-white" : "text-zinc-500")}>
                        Verify Installation
                    </span>
                </div>
            </div>

            {/* Code Selection */}
            <div className="space-y-6">
                <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-xl self-start w-fit border border-white/5">
                    {(["html", "nextjs", "react", "nuxt", "angular", "wordpress"] as FrameworkTab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                                activeTab === tab ? "bg-[#39FF14] text-black" : "text-zinc-400 hover:text-white"
                            )}
                        >
                            {tab === "html" && "HTML"}
                            {tab === "nextjs" && "Next.js"}
                            {tab === "react" && "React"}
                            {tab === "nuxt" && "Nuxt"}
                            {tab === "angular" && "Angular"}
                            {tab === "wordpress" && "WordPress"}
                        </button>
                    ))}
                </div>

                <div className="relative group bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all hover:bg-white/[0.05]">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold text-white">Installation Script</span>
                            <span className="text-xs text-zinc-500">Add these once inside the <span className="text-blue-400">&lt;head&gt;</span> tag.</span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setIsExpandModalOpen(true)}
                                className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                            >
                                <Maximize2 className="w-3.5 h-3.5" />
                                Expand
                            </button>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-[#39FF14] hover:bg-white/10 transition-all"
                            >
                                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                {copied ? "Copied" : "Copy"}
                            </button>
                        </div>
                    </div>

                    <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto bg-transparent">
                        <pre className="text-zinc-400">
                            {activeTab === "html" && (
                                <>
                                    <div>
                                        <span className="text-pink-500">&lt;script</span> <span className="text-orange-400">src</span>=<span className="text-[#39FF14]">"pyngl-init.js"</span><span className="text-pink-500">&gt;&lt;/script&gt;</span>
                                    </div>
                                    <div>
                                        <span className="text-pink-500">&lt;script</span> <span className="text-orange-400">src</span>=<span className="text-[#39FF14]">"/loader.js"</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-orange-400">data-api</span>=<span className="text-[#39FF14]">"https://anamaria-reserveless-inflatedly.ngrok-free.dev/api"</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-orange-400">data-debug</span>=<span className="text-[#39FF14]">"true"</span><span className="text-pink-500">&gt;</span>
                                    </div>
                                    <div>
                                        <span className="text-pink-500">&lt;/script&gt;</span>
                                    </div>
                                </>
                            )}
                            {activeTab === "nextjs" && (
                                <>
                                    <div className="text-zinc-600 mb-2">// Next.js implementation</div>
                                    <div className="text-zinc-400 italic">// Use the Next.js Script component in your Layout</div>
                                    <div className="mt-2">
                                        <span className="text-pink-500">import</span> Script <span className="text-pink-500">from</span> <span className="text-[#39FF14]">"next/script"</span>;
                                    </div>
                                    <div className="mt-4">
                                        <span className="text-pink-500">&lt;Script</span> <span className="text-orange-400">src</span>=<span className="text-[#39FF14]">"pyngl-init.js"</span> <span className="text-pink-500">/&gt;</span>
                                    </div>
                                    <div>
                                        <span className="text-pink-500">&lt;Script</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-orange-400">src</span>=<span className="text-[#39FF14]">"/loader.js"</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-orange-400">data-api</span>=<span className="text-[#39FF14]">"https://api.preta.io"</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-orange-400">strategy</span>=<span className="text-[#39FF14]">"beforeInteractive"</span>
                                    </div>
                                    <div className="pl-0">
                                        <span className="text-pink-500">/&gt;</span>
                                    </div>
                                </>
                            )}
                            {activeTab === "react" && (
                                <>
                                    <div className="text-zinc-600 mb-2">// React (Vite / CRA) implementation</div>
                                    <div className="text-zinc-400 italic">// Add to your index.html inside public folder</div>
                                    <div className="mt-2">
                                        <span className="text-pink-500">&lt;script</span> <span className="text-orange-400">src</span>=<span className="text-[#39FF14]">"pyngl-init.js"</span><span className="text-pink-500">&gt;&lt;/script&gt;</span>
                                    </div>
                                    <div>
                                        <span className="text-pink-500">&lt;script</span> <span className="text-orange-400">src</span>=<span className="text-[#39FF14]">"/loader.js"</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-orange-400">data-api</span>=<span className="text-[#39FF14]">"https://api.preta.io"</span><span className="text-pink-500">&gt;&lt;/script&gt;</span>
                                    </div>
                                </>
                            )}
                            {activeTab === "nuxt" && (
                                <>
                                    <div className="text-zinc-600 mb-2">// Nuxt 3 implementation</div>
                                    <div className="text-zinc-400 italic">// Add to nuxt.config.ts</div>
                                    <div className="mt-2">
                                        <span className="text-pink-500">export default</span> defineNuxtConfig({'{'}
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-orange-400">app</span>: {'{'}
                                    </div>
                                    <div className="pl-8">
                                        <span className="text-orange-400">head</span>: {'{'}
                                    </div>
                                    <div className="pl-12">
                                        <span className="text-orange-400">script</span>: [
                                    </div>
                                    <div className="pl-16">
                                        {'{ '}<span className="text-orange-400">src</span>: <span className="text-[#39FF14]">"pyngl-init.js"</span> {'}'},
                                    </div>
                                    <div className="pl-16">
                                        {'{ '}<span className="text-orange-400">src</span>: <span className="text-[#39FF14]">"/loader.js"</span>, <span className="text-orange-400">"data-api"</span>: <span className="text-[#39FF14]">"https://api.preta.io"</span> {'}'}
                                    </div>
                                    <div className="pl-12">]</div>
                                    <div className="pl-8">{'}'}</div>
                                    <div className="pl-4">{'}'}</div>
                                    <div>{'}'});</div>
                                </>
                            )}
                            {activeTab === "angular" && (
                                <>
                                    <div className="text-zinc-600 mb-2">// Angular implementation</div>
                                    <div className="text-zinc-400 italic">// Add to angular.json or index.html</div>
                                    <div className="mt-2">
                                        <span className="text-pink-500">import</span> {'{ Component, OnInit }'} <span className="text-pink-500">from</span> <span className="text-[#39FF14]">"@angular/core"</span>;
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-zinc-600">// In your app.component.ts or main component</span>
                                    </div>
                                    <div>
                                        <span className="text-pink-500">ngOnInit</span>() {'{'}
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-pink-500">const</span> script = document.<span className="text-blue-400">createElement</span>(<span className="text-[#39FF14]">"script"</span>);
                                    </div>
                                    <div className="pl-4">
                                        script.src = <span className="text-[#39FF14]">"/loader.js"</span>;
                                    </div>
                                    <div className="pl-4">
                                        script.dataset.api = <span className="text-[#39FF14]">"https://api.preta.io"</span>;
                                    </div>
                                    <div className="pl-4">
                                        document.head.<span className="text-blue-400">appendChild</span>(script);
                                    </div>
                                    <div>{'}'}</div>
                                </>
                            )}
                            {activeTab === "wordpress" && (
                                <>
                                    <div className="text-zinc-600 mb-2">// WordPress implementation</div>
                                    <div className="text-zinc-400 italic">// Add to functions.php or use a "Header/Footer" plugin</div>
                                    <div className="mt-2">
                                        <span className="text-pink-500">function</span> <span className="text-blue-400">preta_scripts</span>() {'{'}
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-pink-500">echo</span> <span className="text-[#39FF14]">'&lt;script src="pyngl-init.js"&gt;&lt;/script&gt;'</span>;
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-pink-500">echo</span> <span className="text-[#39FF14]">'&lt;script src="/loader.js" data-api="https://api.preta.io"&gt;&lt;/script&gt;'</span>;
                                    </div>
                                    <div>{'}'}</div>
                                    <div className="mt-2">
                                        <span className="text-pink-500">add_action</span>(<span className="text-[#39FF14]">'wp_head'</span>, <span className="text-[#39FF14]">'preta_scripts'</span>);
                                    </div>
                                </>
                            )}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Verification Section */}
            <div className="space-y-6 pt-10 border-t border-white/10">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        Verify Installation
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                    </h3>
                    <a
                        href={`mailto:?subject=Preta%20Installation%20Instructions&body=${encodeURIComponent(`Hi,\n\nPlease add the following scripts to the <head> of our website:\n\n${scriptCode}\n\nFor more details, visit: https://preta.io/docs\n\nThanks!`)}`}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <Mail className="w-4 h-4" />
                        Email Instructions to Developer
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-6 items-end">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Website URL</label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={websiteUrl}
                                    onChange={(e) => setWebsiteUrl(e.target.value)}
                                    placeholder="https://yourwebsite.com"
                                    className={cn(
                                        "w-full bg-white/[0.03] backdrop-blur-xl border rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none transition-all font-medium shadow-2xl group-hover:bg-white/[0.05] pr-10",
                                        urlIsValid ? "border-[#39FF14]/30 focus:ring-1 focus:ring-[#39FF14]/30" : "border-white/10 focus:ring-1 focus:ring-white/20"
                                    )}
                                />
                                {websiteUrl && (
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        {urlIsValid ? (
                                            <CheckCircle2 className="w-5 h-5 text-[#39FF14]" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 text-red-500/70" />
                                        )}
                                    </div>
                                )}
                                <div className="absolute inset-0 rounded-xl bg-[#39FF14]/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity blur-xl" />
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleVerify}
                        disabled={verifying || !urlIsValid}
                        className={cn(
                            "px-8 py-3 h-[46px] rounded-xl font-bold transition-all shadow-lg active:scale-95 w-fit relative overflow-hidden group",
                            verifying || !urlIsValid ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" : "bg-[#39FF14] text-black hover:bg-[#39FF14] shadow-[#39FF14]/20"
                        )}
                    >
                        <span className="relative z-10">{verifying ? "Verifying..." : "Run Verification"}</span>
                        {!verifying && urlIsValid && (
                            <motion.div
                                className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]"
                            />
                        )}
                    </button>
                </div>

                <AnimatePresence>
                    {status === "success" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="p-4 bg-[#39FF14]/10 backdrop-blur-xl border border-[#39FF14]/20 rounded-xl flex items-center gap-3 text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.1)]"
                        >
                            <div className="w-8 h-8 rounded-full bg-[#39FF14] flex items-center justify-center shrink-0 shadow-lg">
                                <Check className="w-5 h-5 text-black" />
                            </div>
                            <div>
                                <p className="font-bold text-sm text-white">Verification Successful!</p>
                                <p className="text-xs text-[#39FF14]/80">Your website is now connected and protected.</p>
                            </div>
                        </motion.div>
                    )}

                    {status === "error" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="p-4 bg-red-500/10 backdrop-blur-xl border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                        >
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-sm text-white">Verification Failed</p>
                                <p className="text-xs text-red-400/80">{errorMessage}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div >

            {/* Expand Modal */}
            <AnimatePresence>
                {
                    isExpandModalOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-[#070707] border border-white/10 rounded-[28px] w-full max-w-[800px] overflow-hidden shadow-2xl relative"
                            >
                                {/* Modal Header */}
                                <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#0A0A0A]">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm font-semibold text-white">Installation Script</span>
                                        <span className="text-xs text-zinc-500">Add these once inside the <span className="text-blue-400">&lt;head&gt;</span> tag.</span>
                                    </div>
                                    <button
                                        onClick={() => setIsExpandModalOpen(false)}
                                        className="p-2 hover:bg-white/5 rounded-full text-zinc-500 hover:text-white transition-all"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Modal Body */}
                                <div className="p-10 font-mono text-sm leading-loose overflow-x-auto bg-[#070B1A] min-h-[400px]">
                                    <pre className="text-zinc-400">
                                        {activeTab === "html" ? (
                                            <>
                                                <div>
                                                    <span className="text-pink-500">&lt;script</span> <span className="text-orange-400">src</span>=<span className="text-[#39FF14]">"pyngl-init.js"</span><span className="text-pink-500">&gt;&lt;/script&gt;</span>
                                                </div>
                                                <div>
                                                    <span className="text-pink-500">&lt;script</span> <span className="text-orange-400">src</span>=<span className="text-[#39FF14]">"/loader.js"</span>
                                                </div>
                                                <div className="pl-6">
                                                    <span className="text-orange-400">data-api</span>=<span className="text-[#39FF14]">"https://anamaria-reserveless-inflatedly.ngrok-free.dev/api"</span>
                                                </div>
                                                <div className="pl-6">
                                                    <span className="text-orange-400">data-debug</span>=<span className="text-[#39FF14]">"true"</span><span className="text-pink-500">&gt;</span>
                                                </div>
                                                <div>
                                                    <span className="text-pink-500">&lt;/script&gt;</span>
                                                </div>
                                                <div className="mt-4 text-zinc-600">
                                                    {/* Repeated scripts to mimic the "long content" look in the design */}
                                                    <div>&lt;!-- Repeating for visual reference --&gt;</div>
                                                    <div>&lt;script src="pyngl-init.js"&gt;&lt;/script&gt;</div>
                                                    <div>&lt;script src="/loader.js" data-api="..."&gt;&lt;/script&gt;</div>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="text-zinc-400 italic">// Use the Next.js Script component in your Layout</div>
                                        )}
                                    </pre>
                                </div>

                                {/* Modal Footer */}
                                <div className="p-6 border-t border-white/5 bg-[#0A0A0A] flex justify-end">
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-[#39FF14] hover:bg-white/10 transition-all active:scale-95"
                                    >
                                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        {copied ? "Copied" : "Copy"}
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )
                }
            </AnimatePresence >
        </div >
    );
}
