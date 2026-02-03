"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuthVisual } from "./AuthVisual";

const AuthBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#070B1A] select-none pointer-events-none">
            {/* Background Rings - Reusing from IntegrationsBackground */}
            <svg
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 1440 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <circle cx="720" cy="800" r="600" stroke="#39FF14" strokeOpacity="0.1" strokeWidth="1" />
                <circle cx="720" cy="800" r="450" stroke="#39FF14" strokeOpacity="0.05" strokeWidth="1" />
                <circle cx="720" cy="800" r="300" stroke="#39FF14" strokeOpacity="0.03" strokeWidth="1" />
            </svg>

            {/* High Fidelity Visuals from SVG */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                {/* 
                    The SVG design is based on a 1440px wide viewport. 
                    Since this component resides in a 50% width container on desktop, 
                    we set width to 200% to simulate the full page width, aligning it to the left edge.
                */}
                <div className="absolute top-0 left-0 w-screen h-full [&>svg]:w-full [&>svg]:h-full">
                    <AuthVisual />
                </div>
            </div>
        </div>
    );
};

export default AuthBackground;
