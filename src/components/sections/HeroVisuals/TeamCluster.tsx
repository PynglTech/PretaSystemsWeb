"use client";

import { motion } from "framer-motion";

export const TeamCluster = () => {
    return (
        <motion.div
            className="absolute left-0 top-0 w-full h-full z-30 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
        >
            <div className="relative w-full h-full">
                <div className="absolute inset-0 md:inset-auto md:right-[50px] md:bottom-[20px] lg:right-[80px] lg:bottom-[40px] xl:right-[290px] xl:bottom-[100px] xl:w-[350px] w-full md:w-[280px] aspect-[4/3] pointer-events-auto">
                    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-90 lg:scale-100 origin-bottom-right">
                        {/* Background Square */}
                        <rect x="0" y="0" width="480" height="360" rx="20" fill="#0A0A0A" fillOpacity="1" stroke="#1E293B" strokeWidth="1" strokeOpacity="0.3" />

                        {/* Connecting Lines */}
                        <g stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1">
                            <line x1="240" y1="180" x2="360" y2="80" /> {/* Center to Admin */}
                            <line x1="240" y1="180" x2="120" y2="120" /> {/* Center to PM */}
                            <line x1="240" y1="180" x2="380" y2="280" /> {/* Center to Engineer */}
                            <line x1="240" y1="180" x2="140" y2="300" /> {/* Center to Compliance */}
                        </g>

                        {/* Central User Node */}
                        <g transform="translate(220, 160)">
                            <circle cx="20" cy="20" r="18" stroke="#4DFB0C" strokeWidth="2" />
                            <path d="M20 15C17.7909 15 16 16.7909 16 19C16 21.2091 17.7909 23 20 23C22.2091 23 24 21.2091 24 19C24 16.7909 22.2091 15 20 15Z" stroke="#4DFB0C" strokeWidth="1.5" />
                            <path d="M12 29C12 26.7909 15.5817 25 20 25C24.4183 25 28 26.7909 28 29" stroke="#4DFB0C" strokeWidth="1.5" strokeLinecap="round" />
                        </g>

                        {/* Admin Pill (Top Right) */}
                        <g transform="translate(320, 40)">
                            <rect width="140" height="60" rx="30" fill="black" fillOpacity="0.8" stroke="#064E3B" strokeWidth="1" />
                            <circle cx="30" cy="30" r="18" fill="#064E3B" fillOpacity="0.3" />
                            <path d="M30 22L34 24V30L30 38L26 30V24L30 22Z" stroke="#10B981" strokeWidth="1.5" fill="none" />
                            <text x="60" y="28" fill="white" fontSize="14" fontFamily="Inter" fontWeight="bold">Admin</text>
                            <text x="60" y="42" fill="#10B981" fontSize="10" fontFamily="Inter">Full Access</text>
                        </g>

                        {/* PM Pill (Top Left) */}
                        <g transform="translate(20, 100)">
                            <rect width="140" height="60" rx="30" fill="black" fillOpacity="0.8" stroke="#1E293B" strokeWidth="1" />
                            <circle cx="30" cy="30" r="18" fill="#1E293B" fillOpacity="0.4" />
                            <path d="M28 32L34 26L30 24L26 28L28 32ZM28 32L24 36" stroke="#6366F1" strokeWidth="1.5" />
                            <text x="60" y="28" fill="white" fontSize="14" fontFamily="Inter" fontWeight="bold">PM</text>
                            <text x="60" y="42" fill="#94A3B8" fontSize="10" fontFamily="Inter">Drafting</text>
                        </g>

                        {/* Engineer Pill (Bottom Right) */}
                        <g transform="translate(340, 240)">
                            <rect width="140" height="60" rx="30" fill="black" fillOpacity="0.8" stroke="#064E3B" strokeWidth="1" />
                            <circle cx="30" cy="30" r="18" fill="#064E3B" fillOpacity="0.3" />
                            <path d="M26 30L29 33L35 27" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <text x="60" y="28" fill="white" fontSize="14" fontFamily="Inter" fontWeight="bold">Engineer</text>
                            <text x="60" y="42" fill="#10B981" fillOpacity="0.6" fontSize="10" fontFamily="Inter">Check</text>
                        </g>

                        {/* Compliance Pill (Bottom Left) */}
                        <g transform="translate(40, 260)">
                            <rect width="150" height="60" rx="30" fill="black" fillOpacity="0.8" stroke="#422006" strokeWidth="1" />
                            <circle cx="30" cy="30" r="18" fill="#422006" fillOpacity="0.4" />
                            <path d="M26 26H34M26 30H32M26 34H34" stroke="#EAB308" strokeWidth="1.5" />
                            <text x="60" y="28" fill="white" fontSize="14" fontFamily="Inter" fontWeight="bold">Compliance</text>
                            <text x="60" y="42" fill="#EAB308" fontSize="10" fontFamily="Inter">Verified</text>
                        </g>
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};
