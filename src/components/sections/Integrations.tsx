"use client";


import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


// --- HELPERS ---


// Beat parameters
// Beat parameters
const BEAT_DURATION = 1.8; // Speed of one heartbeat
const STEPS = 4; // Center + 4 Rings (Center syncs with Ring 1)
const RIPPLE_DURATION = BEAT_DURATION * STEPS; // Total Loop (7.2s)

// Helper to generate keyframes for the "Stepped" effect
const getPhaseAnimation = (phase: number) => {
    // phase 0 = Center
    // phase 1 = Ring 1 (Inner)
    // ...
    // phase 4 = Ring 4 (Outer)

    // Shift phase so Ring 1 starts at 0
    const adjustedPhase = phase - 1;

    // Calculate the specific time window for this phase's "turn"
    // Normalized time (0-1)
    const stepSize = 1 / STEPS;

    // Use full stepSize to match logo heartbeat duration perfectly
    const start = Math.max(0, adjustedPhase * stepSize);
    const peak = start + (stepSize * 0.5);
    const end = start + stepSize;

    // Construct the "Active" window for Ring N
    // Ensure "flat" lines before and after
    const cleanTimes = start > 0.001
        ? [0, start - 0.01, start, peak, end, end + 0.01, 1]
        : [0, peak, end, end + 0.01, 1];

    const peakScale = 1.08; // Subtle ring pulse

    // Scale Values map to CleanTimes
    const scaleValues = start > 0.001
        ? [1, 1, 1, peakScale, 1, 1, 1]
        : [1, peakScale, 1, 1, 1];

    // Opacity/Glow
    const baseOp = 0.2;
    const peakOp = 1;
    const opacityValues = start > 0.001
        ? [baseOp, baseOp, baseOp, peakOp, baseOp, baseOp, baseOp]
        : [baseOp, peakOp, baseOp, baseOp, baseOp];

    // Correction for Phase 0 (Center)
    if (phase === 0) {
        return { times: [], scaleValues: [], opacityValues: [] };
    }

    return { times: cleanTimes, scaleValues, opacityValues };
};



// --- SUBCOMPONENTS ---


// Cursor Arrow SVG
const CursorArrow = ({ className }: { className?: string }) => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M1.5 1.5L4.5 11.5L6.5 7.5L10.5 11.5L11.5 10.5L7.5 6.5L11.5 4.5L1.5 1.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>
);


const DataBadge = () => (
    <svg width="85" height="48" viewBox="0 0 85 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#data_badge_filter)">
            <path d="M26.0398 8.28474C26.0398 5.7889 28.0631 3.76562 30.5589 3.76562H63.5207C66.0165 3.76562 68.0398 5.7889 68.0398 8.28474V24.2465C68.0398 26.7424 66.0165 28.7656 63.5207 28.7656H30.5589C28.0631 28.7656 26.0398 26.7423 26.0398 24.2465V8.28474Z" fill="#2E270E" />
            <path d="M30.5593 4.14258H63.5203C65.8081 4.14258 67.6628 5.99731 67.6628 8.28516V24.2461C67.6628 26.5339 65.8081 28.3887 63.5203 28.3887H30.5593C28.2715 28.3887 26.4167 26.5339 26.4167 24.2461V28.3887V8.28516C26.4167 5.99731 28.2715 4.14258 30.5593 4.14258Z" stroke="#6B5910" strokeWidth="0.753185" />
            <path d="M41.608 18.8125H39.5455V12.9943H41.625C42.2102 12.9943 42.714 13.1108 43.1364 13.3438C43.5587 13.5748 43.8835 13.9072 44.1108 14.3409C44.34 14.7746 44.4546 15.2936 44.4546 15.8977C44.4546 16.5038 44.34 17.0246 44.1108 17.4602C43.8835 17.8958 43.5568 18.2301 43.1307 18.4631C42.7065 18.696 42.1989 18.8125 41.608 18.8125ZM40.7756 17.7585H41.5568C41.9205 17.7585 42.2263 17.6941 42.4745 17.5653C42.7245 17.4347 42.912 17.233 43.037 16.9602C43.1638 16.6856 43.2273 16.3314 43.2273 15.8977C43.2273 15.4678 43.1638 15.1165 43.037 14.8438C42.912 14.571 42.7254 14.3703 42.4773 14.2415C42.2292 14.1127 41.9233 14.0483 41.5597 14.0483H40.7756V17.7585ZM46.2108 18.8949C45.9324 18.8949 45.6843 18.8466 45.4665 18.75C45.2487 18.6515 45.0763 18.5066 44.9494 18.3153C44.8244 18.1222 44.7619 17.8816 44.7619 17.5938C44.7619 17.3513 44.8064 17.1477 44.8954 16.983C44.9845 16.8182 45.1057 16.6856 45.2591 16.5852C45.4125 16.4848 45.5867 16.4091 45.7818 16.358C45.9788 16.3068 46.1852 16.2708 46.4011 16.25C46.6549 16.2235 46.8595 16.1989 47.0148 16.1761C47.1701 16.1515 47.2828 16.1155 47.3528 16.0682C47.4229 16.0208 47.4579 15.9508 47.4579 15.858V15.8409C47.4579 15.661 47.4011 15.5218 47.2875 15.4233C47.1757 15.3248 47.0167 15.2756 46.8102 15.2756C46.5924 15.2756 46.4191 15.3239 46.2903 15.4205C46.1615 15.5152 46.0763 15.6345 46.0347 15.7784L44.9153 15.6875C44.9722 15.4223 45.0839 15.1932 45.2506 15C45.4172 14.8049 45.6322 14.6553 45.8954 14.5511C46.1606 14.4451 46.4674 14.392 46.8159 14.392C47.0583 14.392 47.2903 14.4205 47.5119 14.4773C47.7354 14.5341 47.9333 14.6222 48.1057 14.7415C48.2799 14.8608 48.4172 15.0142 48.5176 15.2017C48.618 15.3873 48.6682 15.6098 48.6682 15.8693V18.8125H47.5204V18.2074H47.4864C47.4163 18.3438 47.3225 18.464 47.2051 18.5682C47.0877 18.6705 46.9466 18.7509 46.7818 18.8097C46.617 18.8665 46.4267 18.8949 46.2108 18.8949ZM46.5574 18.0597C46.7354 18.0597 46.8926 18.0246 47.029 17.9545C47.1653 17.8826 47.2723 17.786 47.35 17.6648C47.4276 17.5436 47.4665 17.4062 47.4665 17.2528V16.7898C47.4286 16.8144 47.3765 16.8371 47.3102 16.858C47.2458 16.8769 47.1729 16.8949 47.0915 16.9119C47.01 16.9271 46.9286 16.9413 46.8472 16.9545C46.7657 16.9659 46.6918 16.9763 46.6256 16.9858C46.4835 17.0066 46.3595 17.0398 46.2534 17.0852C46.1473 17.1307 46.065 17.1922 46.0062 17.2699C45.9475 17.3456 45.9182 17.4403 45.9182 17.554C45.9182 17.7188 45.9778 17.8447 46.0972 17.9318C46.2184 18.017 46.3718 18.0597 46.3718 18.0597H46.5574ZM51.5515 14.4489V15.358H48.9237V14.4489H51.5515ZM49.5203 13.4034H50.7305V17.4716C50.7305 17.5833 50.7475 17.6705 50.7816 17.733C50.8157 17.7936 50.8631 17.8362 50.9237 17.8608C50.9862 17.8854 51.0582 17.8977 51.1396 17.8977C51.1964 17.8977 51.2532 17.893 51.31 17.8835C51.3669 17.8722 51.4104 17.8636 51.4407 17.858L51.6311 18.7585C51.5705 18.7775 51.4852 18.7992 51.3754 18.8239C51.2655 18.8504 51.132 18.8665 50.9748 18.8722C50.6832 18.8835 50.4275 18.8447 50.2078 18.7557C49.99 18.6667 49.8205 18.5284 49.6993 18.3409C49.578 18.1534 49.5184 17.9167 49.5203 17.6307V13.4034ZM53.2076 18.8949C52.9292 18.8949 52.6811 18.8466 52.4633 18.75C52.2455 18.6515 52.0731 18.5066 51.9462 18.3153C51.8212 18.1222 51.7587 17.8816 51.7587 17.5938C51.7587 17.3513 51.8032 17.1477 51.8923 16.983C51.9813 16.8182 52.1025 16.6856 52.2559 16.5852C52.4093 16.4848 52.5835 16.4091 52.7786 16.358C52.9756 16.3068 53.182 16.2708 53.3979 16.25C53.6517 16.2235 53.8563 16.1989 54.0116 16.1761C54.1669 16.1515 54.2796 16.1155 54.3496 16.0682C54.4197 16.0208 54.4548 15.9508 54.4548 15.858V15.8409C54.4548 15.661 54.3979 15.5218 54.2843 15.4233C54.1726 15.3248 54.0135 15.2756 53.807 15.2756C53.5892 15.2756 53.4159 15.3239 53.2871 15.4205C53.1584 15.5152 53.0731 15.6345 53.0315 15.7784L51.9121 15.6875C51.969 15.4223 52.0807 15.1932 52.2474 15C52.414 14.8049 52.629 14.6553 52.8923 14.5511C53.1574 14.4451 53.4642 14.392 53.8127 14.392C54.0551 14.392 54.2871 14.4205 54.5087 14.4773C54.7322 14.5341 54.9301 14.6222 55.1025 14.7415C55.2767 14.8608 55.414 15.0142 55.5144 15.2017C55.6148 15.3873 55.665 15.6098 55.665 15.8693V18.8125H54.5173V18.2074H54.4832C54.4131 18.3438 54.3193 18.464 54.2019 18.5682C54.0845 18.6705 53.9434 18.7509 53.7786 18.8097C53.6139 18.8665 53.4235 18.8949 53.2076 18.8949ZM53.5542 18.0597C53.7322 18.0597 53.8894 18.0246 54.0258 17.9545C54.1621 17.8826 54.2692 17.786 54.3468 17.6648C54.4245 17.5436 54.4633 17.4062 54.4633 17.2528V16.7898C54.4254 16.8144 54.3733 16.8371 54.307 16.858C54.2426 16.8769 54.1697 16.8949 54.0883 16.9119C54.0068 16.9271 53.9254 16.9413 53.844 16.9545C53.7625 16.9659 53.6887 16.9763 53.6224 16.9858C53.4803 17.0066 53.3563 17.0398 53.2502 17.0852C53.1442 17.1307 53.0618 17.1922 53.0031 17.2699C52.9443 17.3456 52.915 17.4403 52.915 17.554C52.915 17.7188 52.9746 17.8447 53.094 17.9318C53.2152 18.017 53.3686 18.0597 53.3686 18.0597H53.5542Z" fill="#FACC15" />
        </g>
        <g opacity="0.8">
            <g clipPath="url(#data_badge_clip)">
                <path d="M10.8322 29.9242L22.0487 23.2816C22.4178 23.063 22.5369 22.588 22.3201 22.222C22.2072 22.0314 22.0163 21.8953 21.7958 21.8542L17.4575 21.0485L19.9347 17.2076C20.2712 16.6855 20.1208 15.9901 19.5988 15.6537C19.0768 15.3173 18.3813 15.4676 18.0449 15.9896L15.6213 19.7416L13.5056 16.1692C13.287 15.8001 12.8102 15.678 12.4412 15.8966C12.2506 16.0094 12.1175 16.1986 12.0746 16.416L9.61735 29.0665C9.57943 29.2647 9.61265 29.4656 9.71476 29.6381C9.94406 30.0252 10.445 30.1535 10.8322 29.9242Z" fill="#CBD5E1" />
            </g>
        </g>
        <defs>
            <filter id="data_badge_filter" x="14.742" y="0" width="64.5956" height="47.5956" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="7.53185" />
                <feGaussianBlur stdDeviation="5.64889" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3.01274" />
                <feGaussianBlur stdDeviation="2.25956" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <clipPath id="data_badge_clip">
                <path d="M9.16235 30.9141L3.42977 21.2342L18.9176 12.0621L24.6502 21.7419L9.16235 30.9141Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);


const CommunicationBadge = () => (
    // Width reduced to 145 to make it more compact
    <svg width="145" height="60" viewBox="0 0 145 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#communication_badge_clip)">
            {/* Pointer Arrow */}
            <path d="M4.12035 25.8L13.6295 22.6658C13.9424 22.5627 14.11 22.226 14.0077 21.9157C13.9545 21.7541 13.8337 21.6205 13.6751 21.5534L10.5535 20.2339L13.0449 17.7609C13.3833 17.4247 13.3851 16.8783 13.049 16.5399C12.7129 16.2014 12.1664 16.1996 11.828 16.5357L9.39139 18.9508L8.39316 15.9222C8.29004 15.6093 7.95247 15.4391 7.63961 15.5422C7.47804 15.5955 7.347 15.7154 7.27901 15.8715L3.35043 24.9563C3.28933 25.0987 3.28112 25.255 3.32929 25.4011C3.43749 25.7294 3.7921 25.9082 4.12035 25.8Z" fill="white" />
        </g>
        <g filter="url(#communication_badge_filter)">
            {/* Green Pill - Shortened from H165 to H135 */}
            <path d="M21.45 11C21.45 7.68629 24.1362 5 27.45 5H135.45C138.764 5 141.45 7.68629 141.45 11V31C141.45 34.3137 138.764 37 135.45 37H27.45C24.1362 37 21.45 34.3137 21.45 31V11Z" fill="#10B981" fillOpacity="0.3" />
            <path d="M21.45 11C21.45 7.68629 24.1362 5 27.45 5H135.45C138.764 5 141.45 7.68629 141.45 11V31C141.45 34.3137 138.764 37 135.45 37H27.45C24.1362 37 21.45 34.3137 21.45 31V11Z" stroke="#10B981" strokeOpacity="0.8" />

            {/* Standard Text element - centered within the new width */}
            <text
                x="83"
                y="24"
                fill="white"
                fontSize="9"
                fontWeight="700"
                fontFamily="JetBrains Mono, monospace"
                textAnchor="middle"
                style={{ textTransform: 'uppercase', letterSpacing: '0.02em' }}
            >
                Communication
            </text>
        </g>
        <defs>
            <filter id="communication_badge_filter" x="6" y="0" width="145" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur stdDeviation="5" in="SourceAlpha" result="blur" />
                <feOffset dy="6" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1" result="shape" />
            </filter>
            <clipPath id="communication_badge_clip">
                <path d="M2.70483 26.2656L0 18.0592L13.1303 13.7316L15.835 21.938L2.70483 26.2656Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);


const CodeBadge = () => (
    <svg width="75" height="49" viewBox="0 0 75 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#code_badge_filter)">
            <path d="M11.2979 8.28474C11.2979 5.78891 13.3211 3.76562 15.817 3.76562H54.2294C56.7253 3.76562 58.7485 5.7889 58.7485 8.28474V24.8548C58.7485 27.3506 56.7253 29.3739 54.2294 29.3739H15.817C13.3211 29.3739 11.2979 27.3507 11.2979 24.8548V8.28474Z" fill="#334155" />
            <path d="M15.8174 4.14258H54.2295C56.5173 4.14262 58.3721 5.99733 58.3721 8.28516V24.8545C58.3721 27.1423 56.5173 28.997 54.2295 28.9971H15.8174C13.5295 28.9971 11.6748 27.1423 11.6748 24.8545V8.28516C11.6748 5.99731 13.5295 4.14258 15.8174 4.14258Z" stroke="#64748B" strokeWidth="0.753185" />
            <path d="M29.9371 15.3359H28.6927C28.67 15.175 28.6236 15.032 28.5535 14.907C28.4835 14.7801 28.3935 14.6721 28.2836 14.5831C28.1738 14.4941 28.0469 14.4259 27.903 14.3786C27.7609 14.3312 27.6066 14.3075 27.4399 14.3075C27.1388 14.3075 26.8765 14.3823 26.653 14.532C26.4295 14.6797 26.2562 14.8956 26.1331 15.1797C26.01 15.4619 25.9484 15.8047 25.9484 16.2081C25.9484 16.6229 26.01 16.9714 26.1331 17.2536C26.2581 17.5357 26.4323 17.7488 26.6558 17.8928C26.8793 18.0367 27.1378 18.1087 27.4314 18.1087C27.5961 18.1087 27.7486 18.0869 27.8888 18.0433C28.0308 17.9998 28.1568 17.9363 28.2666 17.853C28.3765 17.7678 28.4674 17.6645 28.5393 17.5433C28.6132 17.4221 28.6643 17.2839 28.6927 17.1286L29.9371 17.1342C29.9049 17.4013 29.8244 17.6589 29.6956 17.907C29.5687 18.1532 29.3973 18.3738 29.1814 18.5689C28.9674 18.7621 28.7117 18.9155 28.4143 19.0291C28.1189 19.1409 27.7846 19.1967 27.4115 19.1967C26.8925 19.1967 26.4285 19.0793 26.0194 18.8445C25.6122 18.6096 25.2903 18.2696 25.0535 17.8246C24.8187 17.3795 24.7013 16.8407 24.7013 16.2081C24.7013 15.5736 24.8206 15.0339 25.0592 14.5888C25.2979 14.1437 25.6217 13.8047 26.0308 13.5717C26.4399 13.3369 26.9001 13.2195 27.4115 13.2195C27.7486 13.2195 28.0611 13.2668 28.349 13.3615C28.6388 13.4562 28.8954 13.5945 29.1189 13.7763C29.3424 13.9562 29.5242 14.1768 29.6643 14.4382C29.8064 14.6996 29.8973 14.9988 29.9371 15.3359ZM32.3914 19.2024C31.9501 19.2024 31.5685 19.1087 31.2465 18.9212C30.9265 18.7318 30.6793 18.4685 30.5051 18.1314C30.3308 17.7924 30.2437 17.3994 30.2437 16.9524C30.2437 16.5017 30.3308 16.1077 30.5051 15.7706C30.6793 15.4316 30.9265 15.1683 31.2465 14.9808C31.5685 14.7914 31.9501 14.6967 32.3914 14.6967C32.8327 14.6967 33.2134 14.7914 33.5335 14.9808C33.8554 15.1683 34.1036 15.4316 34.2778 15.7706C34.452 16.1077 34.5392 16.5017 34.5392 16.9524C34.5392 17.3994 34.452 17.7924 34.2778 18.1314C34.1036 18.4685 33.8554 18.7318 33.5335 18.9212C33.2134 19.1087 32.8327 19.2024 32.3914 19.2024ZM32.3971 18.2649C32.5979 18.2649 32.7655 18.2081 32.9 18.0945C33.0344 17.9789 33.1357 17.8217 33.2039 17.6229C33.274 17.424 33.309 17.1977 33.309 16.9439C33.309 16.6901 33.274 16.4638 33.2039 16.2649C33.1357 16.0661 33.0344 15.9089 32.9 15.7933C32.7655 15.6778 32.5979 15.62 32.3971 15.62C32.1945 15.62 32.024 15.6778 31.8857 15.7933C31.7494 15.9089 31.6462 16.0661 31.5761 16.2649C31.5079 16.4638 31.4738 16.6901 31.4738 16.9439C31.4738 17.1977 31.5079 17.424 31.5761 17.6229C31.6462 17.8217 31.7494 17.9789 31.8857 18.0945C32.024 18.2081 32.1945 18.2649 32.3971 18.2649ZM36.5575 19.1882C36.226 19.1882 35.9258 19.103 35.6569 18.9325C35.3898 18.7602 35.1777 18.5073 35.0205 18.174C34.8652 17.8388 34.7876 17.4278 34.7876 16.9411C34.7876 16.4411 34.8681 16.0253 35.029 15.6939C35.19 15.3606 35.404 15.1115 35.6711 14.9467C35.94 14.7801 36.2345 14.6967 36.5546 14.6967C36.7989 14.6967 37.0025 14.7384 37.1654 14.8217C37.3302 14.9032 37.4628 15.0054 37.5631 15.1286C37.6654 15.2498 37.7431 15.3691 37.7961 15.4865H37.833V13.299H39.0404V19.1172H37.8472V18.4183H37.7961C37.7393 18.5395 37.6588 18.6598 37.5546 18.7791C37.4523 18.8965 37.3188 18.9941 37.154 19.0717C36.9912 19.1494 36.7923 19.1882 36.5575 19.1882ZM36.941 18.2251C37.136 18.2251 37.3008 18.1721 37.4353 18.0661C37.5717 17.9581 37.6758 17.8075 37.7478 17.6143C37.8217 17.4212 37.8586 17.1948 37.8586 16.9354C37.8586 16.6759 37.8226 16.4505 37.7506 16.2592C37.6787 16.0679 37.5745 15.9202 37.4381 15.8161C37.3018 15.7119 37.136 15.6598 36.941 15.6598C36.7421 15.6598 36.5745 15.7138 36.4381 15.8217C36.3018 15.9297 36.1985 16.0793 36.1285 16.2706C36.0584 16.4619 36.0234 16.6835 36.0234 16.9354C36.0234 17.1892 36.0584 17.4136 36.1285 17.6087C36.2004 17.8018 36.3037 17.9534 36.4381 18.0632C36.5745 18.1712 36.7421 18.2251 36.941 18.2251ZM41.6475 19.2024C41.1986 19.2024 40.8122 19.1115 40.4884 18.9297C40.1664 18.746 39.9183 18.4865 39.7441 18.1513C39.5698 17.8142 39.4827 17.4155 39.4827 16.9553C39.4827 16.5064 39.5698 16.1125 39.7441 15.7734C39.9183 15.4344 40.1636 15.1702 40.4799 14.9808C40.798 14.7914 41.1712 14.6967 41.5992 14.6967C41.8871 14.6967 42.1551 14.7431 42.4032 14.8359C42.6532 14.9268 42.871 15.0642 43.0566 15.2479C43.2441 15.4316 43.3899 15.6626 43.4941 15.9411C43.5982 16.2176 43.6503 16.5414 43.6503 16.9126V17.245H39.9657V16.495H42.5111C42.5111 16.3208 42.4732 16.1664 42.3975 16.032C42.3217 15.8975 42.2166 15.7924 42.0821 15.7166C41.9496 15.639 41.7952 15.6001 41.6191 15.6001C41.4354 15.6001 41.2725 15.6428 41.1304 15.728C40.9903 15.8113 40.8804 15.924 40.8009 16.0661C40.7213 16.2062 40.6806 16.3625 40.6787 16.5348V17.2479C40.6787 17.4638 40.7185 17.6503 40.798 17.8075C40.8795 17.9647 40.9941 18.0859 41.1418 18.1712C41.2895 18.2564 41.4647 18.299 41.6674 18.299C41.8018 18.299 41.9249 18.2801 42.0367 18.2422C42.1484 18.2043 42.2441 18.1475 42.3236 18.0717C42.4032 17.996 42.4638 17.9032 42.5054 17.7933L43.6248 17.8672C43.5679 18.1361 43.4515 18.371 43.2753 18.5717C43.1011 18.7706 42.8757 18.9259 42.5992 19.0376C42.3246 19.1475 42.0073 19.2024 41.6475 19.2024Z" fill="white" />
        </g>
        <g opacity="0.8">
            <g clipPath="url(#code_badge_clip)">
                <path d="M73.7355 23.9924L72.552 11.0103C72.513 10.5832 72.1352 10.2717 71.7115 10.3103C71.491 10.3304 71.286 10.4444 71.1543 10.6259L68.564 14.1981L66.1586 10.3117C65.8316 9.78377 65.139 9.62098 64.611 9.948C64.0831 10.275 63.9203 10.9677 64.2473 11.4956L66.5953 15.2954L62.4605 15.6723C62.0334 15.7113 61.7184 16.0895 61.7573 16.5166C61.7774 16.7372 61.8911 16.9387 62.0691 17.0707L72.4393 24.7213C72.602 24.8406 72.7978 24.8969 72.9973 24.8787C73.4455 24.8379 73.7764 24.4406 73.7355 23.9924Z" fill="#CBD5E1" />
            </g>
        </g>
        <defs>
            <filter id="code_badge_filter" x="0" y="0" width="70.0462" height="48.2049" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="7.53185" />
                <feGaussianBlur stdDeviation="5.64889" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3.01274" />
                <feGaussianBlur stdDeviation="2.25956" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
            </filter>
            <clipPath id="code_badge_clip">
                <path d="M73.9116 25.9258L62.7081 26.9472L61.0739 9.02151L72.2774 8.00012L73.9116 25.9258Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);


const DesignBadge = () => (
    <svg width="93" height="64" viewBox="0 0 93 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#design_badge_filter)">
            {/* Background box with higher opacity */}
            <path d="M15 11C15 7.68629 17.6863 5 21 5H71.375C74.6887 5 77.375 7.68629 77.375 11V33C77.375 36.3137 74.6887 39 71.375 39H21C17.6863 39 15 36.3137 15 33V11Z" fill="#10B981" fillOpacity="0.3" />
            <path d="M21 5.5H71.375C74.4126 5.5 76.875 7.96243 76.875 11V33C76.875 36.0376 74.4126 38.5 71.375 38.5H21C17.9624 38.5 15.5 36.0376 15.5 33V11C15.5 7.96243 17.9624 5.5 21 5.5Z" stroke="#10B981" strokeOpacity="0.8" />
            {/* "DESIGN" text - changed to WHITE for legibility */}
            <path d="M32.2102 26H29.6321V18.7273H32.2315C32.9631 18.7273 33.5928 18.8729 34.1207 19.1641C34.6487 19.4529 35.0547 19.8684 35.3388 20.4105C35.6252 20.9527 35.7685 21.6013 35.7685 22.3565C35.7685 23.1141 35.6252 23.7652 35.3388 24.3097C35.0547 24.8542 34.6463 25.272 34.1136 25.5632C33.5833 25.8544 32.9489 26 32.2102 26ZM31.1697 24.6825H32.1463C32.6009 24.6825 32.9832 24.602 33.2933 24.4411C33.6058 24.2777 33.8402 24.0256 33.9964 23.6847C34.1551 23.3414 34.2344 22.8987 34.2344 22.3565C34.2344 21.8191 34.1551 21.38 33.9964 21.0391C33.8402 20.6982 33.607 20.4472 33.2969 20.2862C32.9867 20.1252 32.6044 20.0447 32.1499 20.0447H31.1697V24.6825ZM38.8649 26.1065C38.3038 26.1065 37.8208 25.9929 37.416 25.7656C37.0136 25.536 36.7034 25.2116 36.4856 24.7926C36.2678 24.3712 36.1589 23.8729 36.1589 23.2976C36.1589 22.7365 36.2678 22.2441 36.4856 21.8203C36.7034 21.3965 37.01 21.0663 37.4054 20.8295C37.8031 20.5928 38.2695 20.4744 38.8045 20.4744C39.1644 20.4744 39.4993 20.5324 39.8095 20.6484C40.122 20.7621 40.3942 20.9337 40.6262 21.1634C40.8606 21.393 41.0429 21.6818 41.1731 22.0298C41.3033 22.3755 41.3684 22.7803 41.3684 23.2443V23.6598H36.7626V22.7223H39.9444C39.9444 22.5045 39.8971 22.3116 39.8024 22.1435C39.7077 21.9754 39.5763 21.844 39.4082 21.7493C39.2425 21.6522 39.0495 21.6037 38.8294 21.6037C38.5997 21.6037 38.3961 21.657 38.2186 21.7635C38.0434 21.8677 37.9061 22.0085 37.8066 22.1861C37.7072 22.3613 37.6563 22.5566 37.6539 22.772V23.6634C37.6539 23.9332 37.7037 24.1664 37.8031 24.3629C37.9049 24.5594 38.0481 24.7109 38.2328 24.8175C38.4174 24.924 38.6364 24.9773 38.8897 24.9773C39.0578 24.9773 39.2117 24.9536 39.3514 24.9062C39.4911 24.8589 39.6106 24.7879 39.71 24.6932C39.8095 24.5985 39.8852 24.4825 39.9373 24.3452L41.3365 24.4375C41.2654 24.7737 41.1199 25.0672 40.8997 25.3182C40.6819 25.5668 40.4002 25.7609 40.0545 25.9006C39.7112 26.0379 39.3147 26.1065 38.8649 26.1065ZM46.394 22.1009L45.0091 22.1861C44.9854 22.0677 44.9345 21.9612 44.8564 21.8665C44.7782 21.7694 44.6752 21.6925 44.5474 21.6357C44.4219 21.5765 44.2716 21.5469 44.0964 21.5469C43.862 21.5469 43.6644 21.5966 43.5034 21.696C43.3424 21.7931 43.2619 21.9233 43.2619 22.0866C43.2619 22.2169 43.314 22.3269 43.4181 22.4169C43.5223 22.5069 43.7011 22.5791 43.9544 22.6335L44.9416 22.8324C45.4719 22.9413 45.8672 23.1165 46.1277 23.358C46.3881 23.5994 46.5183 23.9167 46.5183 24.3097C46.5183 24.6671 46.4129 24.9808 46.2022 25.2507C45.9939 25.5206 45.7074 25.7313 45.3429 25.8828C44.9806 26.032 44.5628 26.1065 44.0893 26.1065C43.3672 26.1065 42.792 25.9562 42.3635 25.6555C41.9373 25.3525 41.6876 24.9406 41.6142 24.4197L43.1021 24.3416C43.1471 24.5618 43.256 24.7299 43.4288 24.8459C43.6016 24.9595 43.823 25.0163 44.0929 25.0163C44.358 25.0163 44.5711 24.9654 44.7321 24.8636C44.8954 24.7595 44.9783 24.6257 44.9806 24.4624C44.9783 24.325 44.9203 24.2126 44.8066 24.125C44.693 24.035 44.5178 23.9664 44.2811 23.919L43.3365 23.7308C42.8038 23.6243 42.4073 23.4396 42.1468 23.1768C41.8888 22.9141 41.7598 22.5791 41.7598 22.1719C41.7598 21.8215 41.8545 21.5196 42.0439 21.2663C42.2356 21.013 42.5043 20.8177 42.85 20.6804C43.198 20.5431 43.6052 20.4744 44.0716 20.4744C44.7605 20.4744 45.3026 20.62 45.698 20.9112C46.0957 21.2024 46.3277 21.599 46.394 22.1009ZM46.9709 26V20.5455H48.4837V26H46.9709ZM47.7308 19.8423C47.5059 19.8423 47.313 19.7678 47.152 19.6186C46.9934 19.4671 46.9141 19.286 46.9141 19.0753C46.9141 18.867 46.9934 18.6882 47.152 18.5391C47.313 18.3875 47.5059 18.3118 47.7308 18.3118C47.9557 18.3118 48.1475 18.3875 48.3061 18.5391C48.4671 18.6882 48.5476 18.867 48.5476 19.0753C48.5476 19.286 48.4671 19.4671 48.3061 19.6186C48.1475 19.7678 47.9557 19.8423 47.7308 19.8423ZM51.6529 28.1591C51.1628 28.1591 50.7426 28.0916 50.3922 27.9567C50.0442 27.8241 49.7672 27.643 49.5613 27.4134C49.3553 27.1837 49.2215 26.9257 49.16 26.6392L50.5591 26.451C50.6017 26.5599 50.6692 26.6617 50.7615 26.7564C50.8539 26.8511 50.9758 26.9268 51.1273 26.9837C51.2812 27.0429 51.4682 27.0724 51.6884 27.0724C52.0175 27.0724 52.2885 26.992 52.5016 26.831C52.717 26.6723 52.8248 26.406 52.8248 26.032V25.0341H52.7608C52.6945 25.1856 52.5951 25.3288 52.4625 25.4638C52.33 25.5987 52.1595 25.7088 51.9512 25.794C51.7428 25.8793 51.4943 25.9219 51.2054 25.9219C50.7959 25.9219 50.423 25.8272 50.0868 25.6378C49.753 25.446 49.4867 25.1536 49.2878 24.7607C49.0913 24.3653 48.9931 23.8658 48.9931 23.2621C48.9931 22.6442 49.0937 22.1281 49.2949 21.7138C49.4962 21.2995 49.7637 20.9893 50.0975 20.7834C50.4337 20.5774 50.8018 20.4744 51.2019 20.4744C51.5073 20.4744 51.763 20.5265 51.9689 20.6307C52.1749 20.7325 52.3406 20.8603 52.4661 21.0142C52.5939 21.1657 52.6922 21.3149 52.7608 21.4616H52.8176V20.5455H54.3198V26.0533C54.3198 26.5173 54.2061 26.9055 53.9789 27.218C53.7516 27.5305 53.4367 27.7649 53.0343 27.9212C52.6342 28.0798 52.1737 28.1591 51.6529 28.1591ZM51.6848 24.7855C51.9287 24.7855 52.1346 24.7251 52.3027 24.6044C52.4732 24.4813 52.6034 24.3061 52.6934 24.0788C52.7857 23.8492 52.8319 23.5746 52.8319 23.255C52.8319 22.9354 52.7869 22.6584 52.6969 22.424C52.6069 22.1873 52.4767 22.0038 52.3063 21.8736C52.1358 21.7434 51.9287 21.6783 51.6848 21.6783C51.4363 21.6783 51.2267 21.7457 51.0563 21.8807C50.8858 22.0133 50.7568 22.1979 50.6692 22.4347C50.5816 22.6714 50.5378 22.9448 50.5378 23.255C50.5378 23.5698 50.5816 23.8421 50.6692 24.0717C50.7592 24.299 50.8882 24.4754 51.0563 24.6009C51.2267 24.724 51.4363 24.7855 51.6848 24.7855ZM56.5364 22.8466V26H55.0236V20.5455H56.4654V21.5078H56.5293C56.65 21.1906 56.8525 20.9396 57.1365 20.755C57.4206 20.5679 57.7651 20.4744 58.1699 20.4744C58.5487 20.4744 58.879 20.5573 59.1607 20.723C59.4424 20.8887 59.6614 21.1255 59.8176 21.4332C59.9739 21.7386 60.052 22.1032 60.052 22.527V26H58.5392V22.7969C58.5416 22.4631 58.4564 22.2027 58.2836 22.0156C58.1107 21.8262 57.8728 21.7315 57.5698 21.7315C57.3662 21.7315 57.1863 21.7753 57.03 21.8629C56.8761 21.9505 56.7554 22.0784 56.6678 22.2464C56.5826 22.4122 56.5388 22.6122 56.5364 22.8466Z" fill="#FFFFFF" />
        </g>
        <g clipPath="url(#design_badge_clip)">
            {/* Pointer graphic - keeping it green but ensuring 100% opacity */}
            <path d="M92.3424 26.322L89.6948 16.2349C89.6076 15.9031 89.2684 15.7072 88.9392 15.7936C88.7678 15.8385 88.6211 15.9555 88.5412 16.1161L86.9689 19.2766L84.558 16.5277C84.2302 16.1543 83.6622 16.1173 83.2888 16.445C82.9154 16.7728 82.8784 17.3408 83.2061 17.7142L85.5604 20.4023L82.3477 21.2456C82.0158 21.3327 81.8172 21.6727 81.9043 22.0046C81.9493 22.176 82.0656 22.3199 82.2234 22.4006L91.4159 27.0682C91.56 27.1409 91.7219 27.1595 91.8769 27.1188C92.2251 27.0274 92.4338 26.6702 92.3424 26.322Z" fill="#10B981" />
        </g>
        <defs>
            <filter id="design_badge_filter" x="0" y="0" width="92.375" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_design" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_design" result="effect2_dropShadow_design" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_design" result="shape" />
            </filter>
            <clipPath id="design_badge_clip">
                <path d="M92.7361 27.8203L84.031 30.1052L80.3751 16.177L89.0802 13.8921L92.7361 27.8203Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);


const CategoryLabel = ({ label, color = "green", isMobile = false, showArrow = false }: { label: string, color?: "green" | "yellow" | "blue", isMobile?: boolean, showArrow?: boolean }) => {
    const colors = {
        green: { bg: "rgba(16, 185, 129, 0.2)", border: "rgba(16, 185, 129, 0.5)", text: "#10B981" },
        yellow: { bg: "#2E270E", border: "#6B5910", text: "#FACC15" },
        blue: { bg: "#334155", border: "#64748B", text: "#FFFFFF" }
    };
    const style = colors[color];

    return (
        <div className="flex items-center gap-1.5">
            {showArrow && (
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="opacity-80">
                    <path d="M11 6L3 6M3 6L6 3M3 6L6 9" stroke={style.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
            <div
                className={`${isMobile ? 'px-2 py-0.5' : 'px-3 py-1.5'} rounded-md border backdrop-blur-sm shadow-lg flex items-center gap-1.5`}
                style={{ backgroundColor: style.bg, borderColor: style.border }}
            >
                <div className={`${isMobile ? 'w-1 h-1' : 'w-1.5 h-1.5'} rounded-full ${color === 'green' ? 'bg-[#10B981]' : color === 'yellow' ? 'bg-[#FACC15]' : 'bg-white'}`}></div>
                <span className={`${isMobile ? 'text-[8px]' : 'text-[10px]'} font-bold uppercase tracking-wide whitespace-nowrap`} style={{ color: style.text }}>{label}</span>
            </div>
        </div>
    );
};

const RadialBadge = ({ label, color, radius, angle, scale, isMobile = false, showArrow = false }: { label: string, color: "green" | "yellow" | "blue", radius: number, angle: number, scale: number, isMobile?: boolean, showArrow?: boolean }) => {
    const rad = (angle * Math.PI) / 180;
    const x = Math.round(radius * Math.cos(rad) * 100) / 100;
    const y = Math.round(radius * Math.sin(rad) * 100) / 100;

    return (
        <div
            className="absolute z-50 pointer-events-none"
            style={{
                left: x,
                top: y,
                transform: 'translate(-5%, -50%)' // Shifted slightly right to offset from the ring line
            }}
        >
            <CategoryLabel label={label} color={color} isMobile={isMobile} showArrow={showArrow} />
        </div>
    );
};

const IconImage = ({ src }: { src: string }) => (
    <div className="relative w-full h-full p-0">
        <Image
            src={`/icons/${src}`}
            alt="Integration Icon"
            fill
            className="object-contain"
        />
    </div>
);


const CentralLogo = ({ scale = 1 }: { scale?: number }) => {
    const baseSize = 86;
    const imgSize = 86; // Match container size to fill the circle

    return (
        <div className="relative flex items-center justify-center">
            {/* Pulsing Container */}
            <motion.div
                className="relative z-10 bg-[#0A0A0A] rounded-full shadow-[0_9px_11px_rgba(0,0,0,0.1),0_22px_28px_rgba(0,0,0,0.1)] flex items-center justify-center backdrop-blur-md"
                style={{ width: baseSize * scale, height: baseSize * scale }}
                animate={{ scale: [1, 1.15, 1, 1.15, 1, 1.15, 1, 1.15, 1] }}
                transition={{
                    duration: RIPPLE_DURATION,
                    repeat: Infinity,
                    times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
                    ease: "easeInOut"
                }}
            >
                <img
                    src="/preta-logo.png"
                    alt="Preta Logo"
                    className="object-contain brightness-125 drop-shadow-[0_0_20px_rgba(79,181,139,0.4)]"
                    style={{ width: imgSize * scale, height: 'auto' }}
                />
            </motion.div>
        </div>
    );
};


// Fixed 63.48px size from Figma
// Phase 1: Inner Ring (Radius ~407) -> Now "Inner Ring" icons (Phase 2 in animation)
// Phase 2: Middle Ring (Radius ~533) -> Phase 3
// Phase 3: Outer Ring (Radius ~658) -> Phase 4
const FloatingIcon = ({ children, left, top, delay, phase = 1 }: { children: React.ReactNode, left: number | string, top: number | string, delay: number, phase?: number }) => {
    // Icons float slightly up/down independently of the pulse
    // The pulse (scale) is synchronized
    const { times, scaleValues, opacityValues } = getPhaseAnimation(phase);

    return (
        <motion.div
            className="absolute z-20"
            style={{ left, top, transform: 'translate(-50%, -50%)' }}
            animate={{
                y: [0, -6, 0],
                scale: scaleValues,
            }}
            transition={{
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                },
                scale: {
                    duration: RIPPLE_DURATION,
                    repeat: Infinity,
                    times: times,
                    ease: "easeInOut",
                }
            }}
        >
            <motion.div
                className="w-[74px] h-[74px] bg-[#0A0A0A] rounded-full border-[1.5px] border-slate-700/30 shadow-[0_9px_11px_rgba(0,0,0,0.1),0_22px_28px_rgba(0,0,0,0.1)] flex items-center justify-center hover:border-slate-500 transition-colors duration-300"
                animate={{ borderColor: opacityValues.map(o => o > 0.5 ? "rgba(79,181,139, 0.6)" : "rgba(51,65,85, 0.3)") }}
                transition={{ duration: RIPPLE_DURATION, repeat: Infinity, times: times, ease: "easeInOut" }}
            >
                {/* Scale wrapper to ensure icons don't touch the borders */}
                <div className="w-[40px] h-[40px] flex items-center justify-center">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
};


// Animated Background Component
const AnimatedIntegrationsBackground = () => {
    const phase1 = getPhaseAnimation(1);
    const phase2 = getPhaseAnimation(2);
    const phase3 = getPhaseAnimation(3);
    const phase4 = getPhaseAnimation(4);

    // Background Pulse (Center beat)
    // Independent loop to match CentralLogo

    return (
        <svg width="100%" height="100%" viewBox="0 0 1439 776" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMax slice">
            <defs>
                <filter id="filter0_d_1047_2635" x="52" y="188.281" width="1335" height="1335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1047_2635" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1047_2635" result="shape" />
                </filter>
                <filter id="filter22_f_1047_2635" x="423" y="461" width="598" height="431" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1047_2635" />
                </filter>
            </defs>


            {/* Center Pulse Glow - Reduced Opacity */}
            <g filter="url(#filter22_f_1047_2635)">
                <motion.ellipse
                    cx={722} cy={676.5}
                    rx={199} ry={115.5}
                    fill="#334155" fillOpacity={0.05}
                    initial={{ rx: 199, ry: 115.5, fillOpacity: 0.05 }}
                    animate={{
                        rx: [199, 210, 199, 210, 199, 210, 199, 210, 199],
                        ry: [115.5, 125, 115.5, 125, 115.5, 125, 115.5, 125, 115.5],
                        fillOpacity: [0.05, 0.1, 0.05, 0.1, 0.05, 0.1, 0.05, 0.1, 0.05]
                    }}
                    transition={{
                        duration: RIPPLE_DURATION,
                        repeat: Infinity,
                        times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
                        ease: "easeInOut"
                    }}
                />
            </g>


            {/* Ring 4 - Innermost (Phase 1) */}
            <motion.ellipse
                cx={720} cy={805} rx={282} ry={282}
                stroke="#334155"
                strokeWidth={2.0}
                shapeRendering="geometricPrecision"
                animate={{ strokeOpacity: phase1.opacityValues, stroke: phase1.opacityValues.map(o => o > 0.5 ? "#4FB58B" : "#334155") }}
                transition={{ duration: RIPPLE_DURATION, repeat: Infinity, times: phase1.times, ease: "easeInOut" }}
            />


            {/* Ring 3 - Inner (Phase 2) */}
            <motion.path
                d="M719.029 416.033C944.49 416.033 1127.26 598.595 1127.26 823.797C1127.26 1049 944.49 1231.56 719.029 1231.56C493.569 1231.56 310.796 1049 310.796 823.797C310.796 598.595 493.569 416.033 719.029 416.033Z"
                stroke="#334155"
                strokeWidth="2.0"
                shapeRendering="geometricPrecision"
                animate={{ strokeOpacity: phase2.opacityValues, stroke: phase2.opacityValues.map(o => o > 0.5 ? "#4FB58B" : "#334155") }}
                transition={{ duration: RIPPLE_DURATION, repeat: Infinity, times: phase2.times, ease: "easeInOut" }}
            />


            {/* Ring 2 - Middle (Phase 3) */}
            <motion.path
                d="M719.866 308.529C1014.42 308.529 1253.2 547.102 1253.2 841.396C1253.2 1135.69 1014.42 1374.26 719.866 1374.26C425.313 1374.26 186.529 1135.69 186.529 841.396C186.529 547.102 425.313 308.529 719.866 308.529Z"
                stroke="#334155"
                strokeWidth="2.0"
                shapeRendering="geometricPrecision"
                animate={{ strokeOpacity: phase3.opacityValues, stroke: phase3.opacityValues.map(o => o > 0.5 ? "#4FB58B" : "#334155") }}
                transition={{ duration: RIPPLE_DURATION, repeat: Infinity, times: phase3.times, ease: "easeInOut" }}
            />


            {/* Ring 1 - Outer (Phase 4) */}
            <motion.circle
                cx="719.5" cy="855.781" r="657.97"
                stroke="#334155"
                strokeWidth="2.0"
                shapeRendering="geometricPrecision"
                animate={{ strokeOpacity: phase4.opacityValues, stroke: phase4.opacityValues.map(o => o > 0.5 ? "#4FB58B" : "#334155") }}
                transition={{ duration: RIPPLE_DURATION, repeat: Infinity, times: phase4.times, ease: "easeInOut" }}
            />
        </svg>
    );
};


// --- MAIN COMPONENT ---


const IntegrationsDesktop = () => {
    return (
        <section className="relative w-full h-[776px] overflow-hidden flex flex-col items-center justify-start bg-deep-void" style={{ clipPath: 'inset(0)', contain: 'strict', overscrollBehavior: 'none' }}>
            <div className="relative w-[1440px] h-full shrink-0">


                {/* Animated Background Layer */}
                <div className="absolute inset-0 z-0 will-change-transform">
                    <AnimatedIntegrationsBackground />
                </div>


                {/* Content Overlay */}
                <div className="absolute inset-0 z-10">
                    <div className="absolute inset-0 w-full h-full">


                        {/* Header Content */}
                        <div className="absolute top-[2%] left-0 right-0 text-center z-20 pointer-events-none">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mb-10"
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontWeight: 800,
                                    fontSize: '48px',
                                    lineHeight: '60px',
                                    letterSpacing: '-0.7px',
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                    color: '#FFFFFF'
                                }}
                            >
                                One <span style={{ textTransform: 'lowercase' }}>platform</span> Your entire stack.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-white/90 text-base md:text-lg max-w-2xl mx-auto px-4"
                            >
                                Preta integrates with your existing tools seamlessly connect your existing teams in minutes.
                            </motion.p>
                        </div>


                        {/* Central Heartbeat Logo - Phase 0 */}
                        <div className="absolute" style={{ left: '50.17%', top: '89.69%', transform: 'translate(-50%, -50%)' }}>
                            <CentralLogo />
                        </div>


                        {/* --- ICONS --- */}


                        {/* Phase 1: No Ring (Figma/Xd) */}
                        <FloatingIcon left="39.54%" top="66.25%" delay={1.8} phase={1}><IconImage src="1.svg" /></FloatingIcon>
                        <FloatingIcon left="58.10%" top="68.25%" delay={1.9} phase={1}><IconImage src="2.svg" /></FloatingIcon>

                        {/* Phase 2: Inner Ring */}
                        <FloatingIcon left="68.94%" top="65.34%" delay={1.5} phase={2}><IconImage src="3.svg" /></FloatingIcon>
                        <FloatingIcon left="31.76%" top="58.76%" delay={1.6} phase={2}><IconImage src="4.svg" /></FloatingIcon>
                        <FloatingIcon left="53.72%" top="50.39%" delay={1.7} phase={2}><IconImage src="5.svg" /></FloatingIcon>
                        <FloatingIcon left="48.58%" top="35.70%" delay={1.4} phase={2}><IconImage src="6.svg" /></FloatingIcon>

                        {/* Phase 3: Middle Ring */}
                        <FloatingIcon left="23.63%" top="33.76%" delay={0.1} phase={3}><IconImage src="7.svg" /></FloatingIcon>
                        <FloatingIcon left="22.38%" top="78.35%" delay={0.9} phase={3}><IconImage src="8.svg" /></FloatingIcon>
                        <FloatingIcon left="11.88%" top="86.98%" delay={1.0} phase={3}><IconImage src="9.svg" /></FloatingIcon>
                        <FloatingIcon left="63.59%" top="42.78%" delay={1.1} phase={3}><IconImage src="10.svg" /></FloatingIcon>
                        <FloatingIcon left="33.15%" top="41.88%" delay={1.2} phase={3}><IconImage src="11.svg" /></FloatingIcon>
                        <FloatingIcon left="80.06%" top="72.16%" delay={1.3} phase={3}><IconImage src="12.svg" /></FloatingIcon>
                        <FloatingIcon left="59.42%" top="23.58%" delay={0.6} phase={3}><IconImage src="13.svg" /></FloatingIcon>
                        <FloatingIcon left="73.87%" top="34.66%" delay={0.3} phase={3}><IconImage src="14.svg" /></FloatingIcon>


                        {/* Phase 4: Outer Ring */}
                        <FloatingIcon left="39.26%" top="22.04%" delay={0.2} phase={4}><IconImage src="15.svg" /></FloatingIcon>
                        <FloatingIcon left="83.67%" top="52.96%" delay={0.4} phase={4}><IconImage src="16.svg" /></FloatingIcon>
                        <FloatingIcon left="6.88%" top="68.04%" delay={0.5} phase={4}><IconImage src="17.svg" /></FloatingIcon>
                        <FloatingIcon left="91.24%" top="76.03%" delay={0.7} phase={4}><IconImage src="18.svg" /></FloatingIcon>
                        <FloatingIcon left="19.39%" top="58.76%" delay={0.8} phase={4}><IconImage src="19.svg" /></FloatingIcon>


                        {/* --- CATEGORY LABELS --- */}
                        <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
                            {/* Data: 1001, 213 */}
                            <div style={{ left: '69.56%', top: '27.45%' }} className="absolute">
                                <DataBadge />
                            </div>


                            {/* Code: 541, 277 */}
                            <div style={{ left: '37.59%', top: '35.70%' }} className="absolute">
                                <CodeBadge />
                            </div>


                            {/* Communication: 940, 444 */}
                            <div style={{ left: '65.32%', top: '57.22%' }} className="absolute">
                                <CommunicationBadge />
                            </div>


                            {/* Design: 406, 594 */}
                            <div style={{ left: '28.21%', top: '76.55%' }} className="absolute">
                                <DesignBadge />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};


const MobileRingArc = ({ radius, phase }: { radius: number, phase: number }) => {
    const { times, opacityValues } = getPhaseAnimation(phase);

    return (
        <div
            className="absolute pointer-events-none"
            style={{
                width: radius * 2,
                height: radius * 2,
                left: -radius,
                top: -radius,
                zIndex: 10
            }}
        >
            <svg width="100%" height="100%" viewBox={`0 0 ${radius * 2} ${radius * 2}`} className="overflow-visible">
                <motion.circle
                    cx={radius}
                    cy={radius}
                    r={radius}
                    fill="none"
                    strokeWidth="2.0"
                    strokeLinecap="round"
                    shapeRendering="geometricPrecision"
                    initial={{ strokeOpacity: 0.2, stroke: "#334155" }}
                    animate={{
                        strokeOpacity: opacityValues,
                        stroke: opacityValues.map(o => o > 0.5 ? "#4FB58B" : "#334155")
                    }}
                    transition={{
                        duration: RIPPLE_DURATION,
                        repeat: Infinity,
                        times: times, // Use synchronized timestamps
                        ease: "easeInOut"
                    }}
                />
                {/* Subtle Outer Glow for the Active Phase */}
                <motion.circle
                    cx={radius}
                    cy={radius}
                    r={radius}
                    fill="none"
                    stroke="#4FB58B"
                    strokeWidth="4"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: opacityValues.map(o => o > 0.5 ? 0.15 : 0),
                        scale: opacityValues.map(o => o > 0.5 ? 1.02 : 1)
                    }}
                    transition={{
                        duration: RIPPLE_DURATION,
                        repeat: Infinity,
                        times: times,
                        ease: "easeInOut"
                    }}
                    className="blur-sm"
                />
            </svg>
        </div>
    );
};

const IntegrationsMobile = () => {
    const [scale, setScale] = React.useState(1);

    React.useEffect(() => {
        const handleResize = () => {
            const newScale = Math.min(Math.max(window.innerWidth / 373, 0.75), 1.1);
            setScale(newScale);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const baseRadii = {
        ring1: 95,
        ring2: 170,
        ring3: 245,
        ring4: 310
    };

    // Right-aligned hub center offset - Moved further left to prevent logo clipping
    const hubCenterX = -60;

    return (
        <section className="relative w-full h-[920px] overflow-hidden bg-deep-void" style={{ clipPath: 'inset(0)', contain: 'strict', overscrollBehavior: 'none' }}>
            {/* Header Text - Pulled up slightly to create more space for animation */}
            <div className="relative z-40 pt-8 px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10"
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 800,
                        fontSize: '32px',
                        lineHeight: '40px',
                        letterSpacing: '-0.7px',
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        color: '#FFFFFF'
                    }}
                >
                    One <span style={{ textTransform: 'lowercase' }}>platform</span> Your entire stack.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white/90 text-sm max-w-[280px] mx-auto leading-relaxed"
                >
                    Preta integrates seamlessly with your tools to connect your teams in minutes.
                </motion.p>
            </div>

            {/* Layout Container - Pushed down to clear the header text and top-most icons */}
            <div className="absolute inset-0 top-[22%] w-full h-full overflow-hidden pointer-events-none">

                {/* Unified Hub Origin Point (The exact center of all circles) */}
                <div
                    className="absolute right-0 top-[45%] w-0 h-0"
                    style={{ transform: `translateX(${hubCenterX}px)` }}
                >
                    {/* Synchronized Glowing Rings */}
                    <MobileRingArc radius={baseRadii.ring1 * scale} phase={1} />
                    <MobileRingArc radius={baseRadii.ring2 * scale} phase={2} />
                    <MobileRingArc radius={baseRadii.ring3 * scale} phase={3} />
                    <MobileRingArc radius={baseRadii.ring4 * scale} phase={4} />

                    {/* Central Hub Logo - Perfectly centered at origin */}
                    <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto">
                        <CentralLogo scale={scale} />
                    </div>

                    {/* Icons & Badges Layer - All using Radial Coordinates for Perfect Alignment */}
                    <div className="absolute left-0 top-0 w-0 h-0 pointer-events-auto">

                        {/* --- CATEGORY BADGES (Perfect Figma Side-Alignment) --- */}
                        <RadialBadge label="Design" color="green" radius={baseRadii.ring1 * scale} angle={240} scale={scale} isMobile showArrow />
                        <RadialBadge label="Communication" color="green" radius={baseRadii.ring2 * scale} angle={220} scale={scale} isMobile showArrow />
                        <RadialBadge label="Code" color="blue" radius={baseRadii.ring3 * scale} angle={195} scale={scale} isMobile showArrow />
                        <RadialBadge label="Data" color="yellow" radius={baseRadii.ring4 * scale} angle={175} scale={scale} isMobile showArrow />

                        {/* --- ICONS (Sequence matched to Desktop L-R -> Mobile Bottom-to-Top) --- */}
                        {/* Ring 1 - Phase 1 (Figma -> XD) */}
                        <MobileFloatingIcon icon={<IconImage src="1.svg" />} radius={baseRadii.ring1 * scale} angle={160} delay={0.1} phase={1} />
                        <MobileFloatingIcon icon={<IconImage src="2.svg" />} radius={baseRadii.ring1 * scale} angle={200} delay={0.2} phase={1} />

                        {/* Ring 2 - Phase 2 (Teams -> Azure -> Slack -> Jira) */}
                        <MobileFloatingIcon icon={<IconImage src="3.svg" />} radius={baseRadii.ring2 * scale} angle={135} delay={0.3} phase={2} />
                        <MobileFloatingIcon icon={<IconImage src="4.svg" />} radius={baseRadii.ring2 * scale} angle={170} delay={0.4} phase={2} />
                        <MobileFloatingIcon icon={<IconImage src="5.svg" />} radius={baseRadii.ring2 * scale} angle={200} delay={0.5} phase={2} />
                        <MobileFloatingIcon icon={<IconImage src="6.svg" />} radius={baseRadii.ring2 * scale} angle={235} delay={0.6} phase={2} />

                        {/* Ring 3 - Phase 3 (Github -> Jira -> Linear -> Azure -> Hubspot -> Asana -> Snowflake -> Linear) */}
                        <MobileFloatingIcon icon={<IconImage src="7.svg" />} radius={baseRadii.ring3 * scale} angle={120} delay={0.7} phase={3} />
                        <MobileFloatingIcon icon={<IconImage src="8.svg" />} radius={baseRadii.ring3 * scale} angle={140} delay={0.8} phase={3} />
                        <MobileFloatingIcon icon={<IconImage src="9.svg" />} radius={baseRadii.ring3 * scale} angle={160} delay={0.9} phase={3} />
                        <MobileFloatingIcon icon={<IconImage src="10.svg" />} radius={baseRadii.ring3 * scale} angle={180} delay={1.0} phase={3} />
                        <MobileFloatingIcon icon={<IconImage src="11.svg" />} radius={baseRadii.ring3 * scale} angle={200} delay={1.1} phase={3} />
                        <MobileFloatingIcon icon={<IconImage src="12.svg" />} radius={baseRadii.ring3 * scale} angle={220} delay={1.2} phase={3} />
                        <MobileFloatingIcon icon={<IconImage src="13.svg" />} radius={baseRadii.ring3 * scale} angle={240} delay={1.3} phase={3} />
                        <MobileFloatingIcon icon={<IconImage src="14.svg" />} radius={baseRadii.ring3 * scale} angle={260} delay={1.4} phase={3} />

                        {/* Ring 4 - Phase 4 (Pipedrive -> Gitlab -> Analytics -> Datadog -> Salesforce) */}
                        <MobileFloatingIcon icon={<IconImage src="15.svg" />} radius={baseRadii.ring4 * scale} angle={115} delay={1.5} phase={4} />
                        <MobileFloatingIcon icon={<IconImage src="16.svg" />} radius={baseRadii.ring4 * scale} angle={140} delay={1.6} phase={4} />
                        <MobileFloatingIcon icon={<IconImage src="17.svg" />} radius={baseRadii.ring4 * scale} angle={180} delay={1.7} phase={4} />
                        <MobileFloatingIcon icon={<IconImage src="18.svg" />} radius={baseRadii.ring4 * scale} angle={220} delay={1.8} phase={4} />
                        <MobileFloatingIcon icon={<IconImage src="19.svg" />} radius={baseRadii.ring4 * scale} angle={245} delay={1.9} phase={4} />
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-[#4FB58B]/10 via-deep-void/40 to-transparent pointer-events-none z-10" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[#4FB58B]/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

const MobileFloatingIcon = ({ icon, radius, angle, delay, phase = 1 }: { icon: React.ReactNode, radius: number, angle: number, delay: number, phase?: number }) => {
    const rad = (angle * Math.PI) / 180;
    // Round to 2 decimal places to avoid hydration mismatch
    const x = Math.round(radius * Math.cos(rad) * 100) / 100;
    const y = Math.round(radius * Math.sin(rad) * 100) / 100;

    const { times, scaleValues } = getPhaseAnimation(phase);

    return (
        <motion.div
            className="absolute z-40"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5, type: "spring", stiffness: 80 }}
            style={{ left: x, top: y, x: "-50%", y: "-50%" }}
        >
            <motion.div
                className="w-[2.5rem] h-[2.5rem] bg-[#0A0A0A]/90 rounded-full border border-white/5 flex items-center justify-center shadow-2xl backdrop-blur-sm"
                animate={{
                    scale: scaleValues,
                    boxShadow: [
                        "0 0 10px rgba(0,0,0,0.5)",
                        "0 0 20px rgba(79,181,139,0.1)",
                        "0 0 10px rgba(0,0,0,0.5)"
                    ]
                }}
                transition={{
                    scale: {
                        duration: RIPPLE_DURATION,
                        repeat: Infinity,
                        times: times,
                        ease: "easeInOut",
                    }
                }}
            >
                <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center opacity-90 transition-opacity hover:opacity-100">
                    {icon}
                </div>
            </motion.div>
        </motion.div>
    );
};


const Integrations = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div style={{ minHeight: '750px', contain: 'content' }} className="bg-deep-void w-full overflow-hidden">
            {!mounted ? (
                // Maintain structure during SSR/initial mount to prevent structural hydration mismatch
                <>
                    <div className="hidden md:block">
                        <section className="relative w-full overflow-hidden bg-deep-void" style={{ aspectRatio: '1439/776' }} />
                    </div>
                    <div className="block md:hidden">
                        <section className="relative w-full h-[750px] bg-deep-void" />
                    </div>
                </>
            ) : (
                <>
                    <div className="hidden md:block">
                        <IntegrationsDesktop />
                    </div>
                    <div className="block md:hidden">
                        <IntegrationsMobile />
                    </div>
                </>
            )}
        </div>
    );
};

export default Integrations;