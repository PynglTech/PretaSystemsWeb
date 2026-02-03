"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
    const [selectedCountry, setSelectedCountry] = useState("United States");

    useEffect(() => {
        try {
            // Priority 1: Check timezone (more reliable for actual location)
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (timeZone.includes('Kolkata') || timeZone.includes('Calcutta')) {
                setSelectedCountry('India');
                return;
            }

            // Priority 2: Attempt to detect country from browser locale
            const locale = navigator.language || (navigator.languages && navigator.languages[0]);
            const region = locale?.split('-')[1]?.toUpperCase();

            const regionToCountry: Record<string, string> = {
                'US': 'United States',
                'GB': 'United Kingdom',
                'IN': 'India',
                'DE': 'Germany',
                'FR': 'France',
                'CA': 'Canada',
                'AU': 'Australia',
                'JP': 'Japan',
                'CN': 'China',
                'BR': 'Brazil',
                'MX': 'Mexico',
                'SG': 'Singapore',
                'AE': 'United Arab Emirates',
                'NL': 'Netherlands',
                'SE': 'Sweden',
                'CH': 'Switzerland',
                'ES': 'Spain',
                'IT': 'Italy',
                'KR': 'South Korea',
                'IL': 'Israel'
            };

            // Check if timezone prefix gives a hint (e.g., 'Europe/London')
            const tzPrefix = timeZone.split('/')[0];
            const tzCity = timeZone.split('/')[1];

            if (region && regionToCountry[region]) {
                setSelectedCountry(regionToCountry[region]);
            } else if (timeZone.includes('London')) {
                setSelectedCountry('United Kingdom');
            } else if (timeZone.includes('Paris')) {
                setSelectedCountry('France');
            } else if (timeZone.includes('Berlin')) {
                setSelectedCountry('Germany');
            }
        } catch (e) {
            // Fallback to United States if detection fails
        }
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-xl bg-[#090909] border border-white/10 rounded-3xl p-8 shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-6 top-6 text-zinc-500 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Header */}
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                                Request quote
                            </h2>
                            <p className="text-zinc-400">
                                Our solutions team will reach out .
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400 block ml-1">Full name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Doe"
                                    className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-lime-400/50 transition-colors"
                                />
                            </div>

                            {/* Email & Company Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400 block ml-1">Work email</label>
                                    <input
                                        type="email"
                                        placeholder="jane@company.com"
                                        className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-lime-400/50 transition-colors font-mono text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400 block ml-1">Company name</label>
                                    <input
                                        type="text"
                                        placeholder="Acme Inc"
                                        className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-lime-400/50 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Country Selector */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400 block ml-1">Select country</label>
                                <div className="relative group">
                                    <select
                                        value={selectedCountry}
                                        onChange={(e) => setSelectedCountry(e.target.value)}
                                        className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-lime-400/50 transition-colors cursor-pointer"
                                    >
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="India">India</option>
                                        <option value="Germany">Germany</option>
                                        <option value="France">France</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Japan">Japan</option>
                                        <option value="China">China</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Italy">Italy</option>
                                        <option value="South Korea">South Korea</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 pointer-events-none group-focus-within:text-lime-400 transition-colors" />
                                </div>
                            </div>

                            {/* Conditional Other Country Field */}
                            <AnimatePresence>
                                {selectedCountry === "Other" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-2 overflow-hidden"
                                    >
                                        <label className="text-sm font-medium text-zinc-400 block ml-1">Please specify country</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your country"
                                            className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-lime-400/50 transition-colors"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400 block ml-1">Message (Optional)</label>
                                <textarea
                                    placeholder="Tell us about your deployment requirements..."
                                    rows={4}
                                    className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-lime-400/50 transition-colors resize-none"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-4 pt-2">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 px-6 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-[2] bg-[#4DFB0C] text-black px-6 py-4 rounded-xl font-bold text-lg hover:bg-[#43e00b] transition-all shadow-[0_0_20px_rgba(77,251,12,0.2)]"
                                >
                                    Submit request
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default QuoteModal;
