"use client";

import { motion } from "framer-motion";

export const LeftHeroCluster = () => {
    return (
        <motion.div
            className="absolute left-0 top-0 w-full h-full z-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="relative w-full h-full">
                <svg
                    width="478"
                    height="612"
                    viewBox="0 0 478 612"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[20px] lg:left-[40px] top-[170px] lg:top-[190px] xl:w-[478px] xl:h-[612px] w-auto h-auto scale-90 lg:scale-[0.95] xl:scale-[1.05] origin-top-left"
                >
                    {/* Animation Styles */}
                    <style>
                        {`
                            @keyframes flowLineLeft {
                                0% { stroke-dashoffset: 0; }
                                100% { stroke-dashoffset: -20; }
                            }
                            @keyframes glimmer {
                                0%, 100% { opacity: 0.2; }
                                50% { opacity: 1.0; }
                            }
                            .animated-line-left {
                                animation: flowLineLeft 1s linear infinite;
                            }
                            .grid-glimmer {
                                animation: glimmer 2.5s ease-in-out infinite;
                            }
                        `}
                    </style>

                    {/* Background Grid Elements */}
                    <g className="grid-glimmer" style={{ animationDelay: '0.1s', animationDuration: '2.4s' }}>
                        <path d="M264 265C264 260.582 267.582 257 272 257H296C300.418 257 304 260.582 304 265V289C304 293.418 300.418 297 296 297H272C267.582 297 264 293.418 264 289V265Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '1.2s', animationDuration: '2.8s' }}>
                        <path d="M220 265C220 260.582 223.582 257 228 257H252C256.418 257 260 260.582 260 265V289C260 293.418 256.418 297 252 297H228C223.582 297 220 293.418 220 289V265Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '0.5s', animationDuration: '2.6s' }}>
                        <path d="M176 265C176 260.582 179.582 257 184 257H208C212.418 257 216 260.582 216 265V289C216 293.418 212.418 297 208 297H184C179.582 297 176 293.418 176 289V265Z" fill="white" fillOpacity="0.08" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '2.3s', animationDuration: '3.0s' }}>
                        <path d="M132 265C132 260.582 135.582 257 140 257H164C168.418 257 172 260.582 172 265V289C172 293.418 168.418 297 164 297H140C135.582 297 132 293.418 132 289V265Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '0.8s', animationDuration: '2.2s' }}>
                        <path d="M88 265C88 260.582 91.5817 257 96 257H120C124.418 257 128 260.582 128 265V289C128 293.418 124.418 297 120 297H96C91.5817 297 88 293.418 88 289V265Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '3.1s', animationDuration: '3.3s' }}>
                        <path d="M0 265C0 260.582 3.58172 257 8 257H32C36.4183 257 40 260.582 40 265L40 289C40 293.418 36.4183 297 32 297H8C3.58172 297 0 293.418 0 289L0 265Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '0.4s', animationDuration: '2.7s' }}>
                        <path d="M264 221C264 216.582 267.582 213 272 213H296C300.418 213 304 216.582 304 221V245C304 249.418 300.418 253 296 253H272C267.582 253 264 249.418 264 245V221Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '1.5s', animationDuration: '2.9s' }}>
                        <path d="M220 221C220 216.582 223.582 213 228 213H252C256.418 213 260 216.582 260 221V245C260 249.418 256.418 253 252 253H228C223.582 253 220 249.418 220 245V221Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '0.2s', animationDuration: '2.4s' }}>
                        <path d="M88 221C88 216.582 91.5817 213 96 213H120C124.418 213 128 216.582 128 221V245C128 249.418 124.418 253 120 253H96C91.5817 253 88 249.418 88 245V221Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '2.7s', animationDuration: '3.2s' }}>
                        <path d="M44 221C44 216.582 47.5817 213 52 213H76C80.4183 213 84 216.582 84 221V245C84 249.418 80.4183 253 76 253H52C47.5817 253 44 249.418 44 245L44 221Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '1.0s', animationDuration: '2.3s' }}>
                        <path d="M0 221C0 216.582 3.58172 213 8 213H32C36.4183 213 40 216.582 40 221L40 245C40 249.418 36.4183 253 32 253H8C3.58172 253 0 249.418 0 245L0 221Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '0.6s', animationDuration: '3.0s' }}>
                        <path d="M132 177C132 172.582 135.582 169 140 169H164C168.418 169 172 172.582 172 177V201C172 205.418 168.418 209 164 209H140C135.582 209 132 205.418 132 201V177Z" fill="white" fillOpacity="0.04" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '1.8s', animationDuration: '3.4s' }}>
                        <path d="M88 177C88 172.582 91.5817 169 96 169H120C124.418 169 128 172.582 128 177V201C128 205.418 124.418 209 120 209H96C91.5817 209 88 205.418 88 201V177Z" fill="white" fillOpacity="0.04" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '2.5s', animationDuration: '2.4s' }}>
                        <path d="M44 177C44 172.582 47.5817 169 52 169H76C80.4183 169 84 172.582 84 177V201C84 205.418 80.4183 209 76 209H52C47.5817 209 44 205.418 44 201L44 177Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '0.3s', animationDuration: '2.7s' }}>
                        <path d="M0 177C0 172.582 3.58172 169 8 169H32C36.4183 169 40 172.582 40 177L40 201C40 205.418 36.4183 209 32 209H8C3.58172 209 0 205.418 0 201L0 177Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '1.2s', animationDuration: '3.1s' }}>
                        <path d="M132 133C132 128.582 135.582 125 140 125H164C168.418 125 172 128.582 172 133V157C172 161.418 168.418 165 164 165H140C135.582 165 132 161.418 132 157V133Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '2.4s', animationDuration: '2.6s' }}>
                        <path d="M88 133C88 128.582 91.5817 125 96 125H120C124.418 125 128 128.582 128 133V157C128 161.418 124.418 165 120 165H96C91.5817 165 88 161.418 88 157V133Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '0.8s', animationDuration: '2.4s' }}>
                        <path d="M44 133C44 128.582 47.5817 125 52 125H76C80.4183 125 84 128.582 84 133V157C84 161.418 80.4183 165 76 165H52C47.5817 165 44 161.418 44 157L44 133Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '1.9s', animationDuration: '2.9s' }}>
                        <path d="M0 133C0 128.582 3.58172 125 8 125H32C36.4183 125 40 128.582 40 133L40 157C40 161.418 36.4183 165 32 165H8C3.58172 165 0 161.418 0 157L0 133Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '0.4s', animationDuration: '3.4s' }}>
                        <path d="M176 89C176 84.5817 179.582 81 184 81H208C212.418 81 216 84.5817 216 89V113C216 117.418 212.418 121 208 121H184C179.582 121 176 117.418 176 113V89Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '1.6s', animationDuration: '2.3s' }}>
                        <path d="M132 89C132 84.5817 135.582 81 140 81H164C168.418 81 172 84.5817 172 89V113C172 117.418 168.418 121 164 121H140C135.582 121 132 117.418 132 113V89Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '2.8s', animationDuration: '2.7s' }}>
                        <path d="M88 89C88 84.5817 91.5817 81 96 81H120C124.418 81 128 84.5817 128 89V113C128 117.418 124.418 121 120 121H96C91.5817 121 88 117.418 88 113V89Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '0.1s', animationDuration: '3.1s' }}>
                        <path d="M44 89C44 84.5817 47.5817 81 52 81H76C80.4183 81 84 84.5817 84 89V113C84 117.418 80.4183 121 76 121H52C47.5817 121 44 117.418 44 113L44 89Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '1.4s', animationDuration: '2.5s' }}>
                        <path d="M0 89C0 84.5817 3.58172 81 8 81H32C36.4183 81 40 84.5817 40 89L40 113C40 117.418 36.4183 121 32 121H8C3.58172 121 0 117.418 0 113L0 89Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '2.0s', animationDuration: '3.5s' }}>
                        <path d="M220 45C220 40.5817 223.582 37 228 37L252 37C256.418 37 260 40.5817 260 45V69C260 73.4183 256.418 77 252 77H228C223.582 77 220 73.4183 220 69V45Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <g className="grid-glimmer" style={{ animationDelay: '0.5s', animationDuration: '2.8s' }}>
                        <path d="M0 45C0 40.5817 3.58172 37 8 37L32 37C36.4183 37 40 40.5817 40 45L40 69C40 73.4183 36.4183 77 32 77H8C3.58172 77 0 73.4183 0 69L0 45Z" fill="white" fillOpacity="0.05" />
                    </g>
                    <path d="M179.47 81.5186C179.763 81.8115 180.237 81.8115 180.53 81.5186L185.303 76.7456C185.596 76.4527 185.596 75.9779 185.303 75.685C185.01 75.3921 184.536 75.3921 184.243 75.685L180 79.9276L175.757 75.685C175.464 75.3921 174.99 75.3921 174.697 75.685C174.404 75.9779 174.404 76.4527 174.697 76.7456L179.47 81.5186ZM180 62.9883H179.25V80.9883H180H180.75V62.9883H180Z" fill="#1D4539" />

                    {/* Top Dock Section */}
                    <path d="M179.675 85.0039L179.675 152" stroke="#1D4539" strokeLinecap="round" strokeDasharray="8 4" className="animated-line-left" />
                    <circle cx="180" cy="61.9883" r="2" transform="rotate(180 180 61.9883)" fill="#1D4539" />
                    <rect x="83" width="201" height="57" rx="15" fill="black" />
                    <rect x="93" y="9" width="40" height="40" rx="7.20745" fill="white" fillOpacity="0.05" />
                    <path d="M113.802 33.8016H108.202V28.2016H109.402V26.6016H108.202C107.319 26.6016 106.602 27.3191 106.602 28.2016V33.8016C106.602 34.6841 107.319 35.4016 108.202 35.4016H113.802C114.684 35.4016 115.402 34.6841 115.402 33.8016V32.6016H113.802V33.8016ZM112.202 31.4016H117.802C118.684 31.4016 119.402 30.6841 119.402 29.8016V24.2016C119.402 23.3191 118.684 22.6016 117.802 22.6016H112.202C111.319 22.6016 110.602 23.3191 110.602 24.2016V29.8016C110.602 30.6841 111.319 31.4016 112.202 31.4016Z" fill="#A1A1AA" />
                    <rect x="138" y="9" width="40" height="40" rx="7.20745" fill="white" fillOpacity="0.05" />
                    <path d="M153.554 37.158C153.128 37.158 152.764 37.0067 152.462 36.704C152.159 36.4013 152.007 36.0369 152.007 35.611V23.2346C152.007 22.8091 152.158 22.445 152.462 22.1423C152.765 21.8396 153.129 21.688 153.554 21.6875H162.836C163.262 21.6875 163.626 21.8391 163.929 22.1423C164.232 22.4456 164.384 22.8096 164.383 23.2346V35.611C164.383 36.0364 164.232 36.4007 163.929 36.704C163.626 37.0072 163.262 37.1585 162.836 37.158H153.554ZM153.554 35.611H162.836V23.2346H153.554V35.611ZM157.615 32.9036L156.725 31.7433C156.648 31.6402 156.545 31.5886 156.416 31.5886C156.287 31.5886 156.184 31.6402 156.107 31.7433L154.811 33.4451C154.708 33.574 154.691 33.7094 154.762 33.8512C154.833 33.993 154.952 34.0639 155.12 34.0639H161.27C161.437 34.0639 161.557 33.993 161.627 33.8512C161.698 33.7094 161.682 33.574 161.579 33.4451L159.703 30.9892C159.626 30.886 159.523 30.8344 159.394 30.8344C159.265 30.8344 159.162 30.886 159.085 30.9892L157.615 32.9036Z" fill="#A1A1AA" />
                    <path d="M215.793 9C219.773 9.00022 223 12.2268 223 16.207V41.793C223 45.7732 219.773 48.9998 215.793 49H190.207C186.227 48.9998 183 45.7732 183 41.793V16.207C183 12.2268 186.227 9.00022 190.207 9H215.793Z" fill="white" fillOpacity="0.05" />
                    <path d="M193.686 21.0703V37.3144H212.25V21.0703H193.686ZM211.09 36.1541H194.846V24.5512H211.09V36.1541ZM211.09 23.3909H209.93V22.2306H211.09V33.3909Z" fill="#A1A1AA" />
                    <path d="M197.398 26.6367H199.719V27.797H197.398V26.6367ZM200.879 26.6367H209.001V27.797H200.879V26.6367ZM197.398 28.9573H199.719V30.1176H197.398V28.9573ZM200.879 28.9573H209.001V30.1176H200.879V28.9573ZM197.398 31.2779H199.719V32.4382H197.398V31.2779ZM200.879 31.2779H209.001V32.4382H200.879V31.2779Z" fill="#A1A1AA" />
                    <path d="M260.793 9C264.773 9.00022 268 12.2268 268 16.207V41.793C268 45.7732 264.773 48.9998 260.793 49H235.207C231.227 48.9998 228 45.7732 228 41.793V16.207C228 12.2268 231.227 9.00022 235.207 9H260.793Z" fill="white" fillOpacity="0.05" />
                    <path d="M240.006 29.4227C240.006 25.9589 240.006 24.2262 241.082 23.1502C242.158 22.0742 243.89 22.0742 247.355 22.0742C250.819 22.0742 252.551 22.0742 253.627 23.1502C254.703 24.2262 254.703 25.9581 254.703 29.4227C254.703 32.8866 254.703 34.6193 253.627 35.6952C252.551 36.7712 250.819 36.7712 247.355 36.7712C243.891 36.7712 242.158 36.7712 241.082 35.6952C240.006 34.6193 240.006 32.8873 240.006 29.4227Z" stroke="#A1A1AA" strokeWidth="1.39235" strokeLinejoin="round" />
                    <path d="M248.023 26.1095L248.704 27.4817C248.797 27.6728 249.044 27.8561 249.253 27.8917L250.487 28.0982C251.276 28.2305 251.461 28.8075 250.892 29.3768L249.933 30.3437C249.771 30.5077 249.682 30.8233 249.732 31.05L250.006 32.2466C250.223 33.1942 249.725 33.5608 248.893 33.0658L247.737 32.3758C247.528 32.2505 247.184 32.2505 246.971 32.3758L245.815 33.0658C244.987 33.5608 244.484 33.1903 244.701 32.2466L244.975 31.05C245.026 30.8233 244.937 30.5085 244.774 30.3437L243.815 29.3768C243.25 28.8075 243.432 28.2305 244.221 28.0982L245.455 27.8917C245.569 27.8647 245.677 27.8143 245.771 27.7437C245.864 27.6732 245.943 27.584 246 27.4817L246.681 26.1095C247.052 25.3646 247.656 25.3646 248.023 26.1095Z" stroke="#A1A1AA" strokeWidth="1.39235" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Connecting Lines for Analytics Box */}
                    <path d="M6.00001 397L148.802 397C174.49 394.256 180.859 384.211 179.911 353.374L179.911 151" stroke="#1D4539" strokeLinecap="round" strokeDasharray="8 4" className="animated-line-left" />
                    <path d="M191 454C191 440.193 202.193 429 216 429H406C419.807 429 431 440.193 431 454V587C431 600.807 419.807 612 406 612H216C202.193 612 191 600.807 191 587V454Z" fill="black" fillOpacity="0.45" />
                    <path d="M-32 330.14H229.606C269.467 328.653 282.453 338.642 286 378.934V429" stroke="#1D4539" strokeLinecap="round" strokeDasharray="8 4" className="animated-line-left" />

                    {/* Pop-up Box Content */}
                    <g transform="translate(216, 434)">
                        <g transform="translate(20, 25)">
                            <path d="M0 0L12 12L7 13L10 18L8 19L5 14L0 18V0Z" fill="#E5BB14" />
                            <text x="18" y="14" fill="#FFFFFF" fillOpacity="0.7" fontSize="11" fontFamily="Inter">Clicked</text>
                        </g>
                        <g transform="translate(85, 65)">
                            <path d="M0 5C1 2 4 0 8 0C12 0 15 2 16 5C15 8 12 10 8 10C4 10 1 8 0 5ZM8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8ZM8 6.5C8.82843 6.5 9.5 5.82843 9.5 5C9.5 4.17157 8.82843 3.5 8 3.5C7.17157 3.5 6.5 4.17157 6.5 5C6.5 5.82843 7.17157 6.5 8 6.5Z" fill="#6366F1" />
                            <text x="21" y="9" fill="#FFFFFF" fillOpacity="0.7" fontSize="11" fontFamily="Inter">Impressions</text>
                        </g>
                        <g transform="translate(15, 105)">
                            <circle cx="6" cy="6" r="6" fill="#EF4444" fillOpacity="0.2" stroke="#EF4444" strokeWidth="0.5" />
                            <path d="M4 4L8 8M8 4L4 8" stroke="#EF4444" strokeWidth="1" strokeLinecap="round" />
                            <text x="18" y="10" fill="#FFFFFF" fillOpacity="0.7" fontSize="11" fontFamily="Inter">Modal dismissed</text>
                        </g>
                        <g transform="translate(80, 145)">
                            <path d="M2 0H10V3C10 5.20914 8.20914 7 6 7C3.79086 7 2 5.20914 2 3V0ZM0 1H2V3C2 4.10457 1.10457 5 0 5V1ZM12 1V5C10.8954 5 10 4.10457 10 3V1H12ZM4 8H8V9H4V8Z" fill="#10B981" />
                            <text x="18" y="7" fill="#FFFFFF" fillOpacity="0.7" fontSize="11" fontFamily="Inter">Action completed</text>
                        </g>
                    </g>

                    {/* UPDATED ANALYTICS SECTION */}
                    <g transform="translate(93, 220)">
                        <g filter="url(#filter0_d_964_307)">
                            {/* Dark Pill Background */}
                            <rect x="135" y="131" width="130" height="40" rx="20" fill="#0E1117" />

                            {/* Green Icon Box (Left aligned, smaller 20x20) */}
                            <rect x="145" y="141" width="20" height="20" rx="4" stroke="#4DFB0C" strokeWidth="1" fill="none" />

                            {/* Smaller Bars inside the Icon */}
                            <path d="M149 152 V156" stroke="#4DFB0C" strokeWidth="1.2" strokeLinecap="round" />
                            <path d="M154 146 V156" stroke="#4DFB0C" strokeWidth="1.2" strokeLinecap="round" />
                            <path d="M159 149 V156" stroke="#4DFB0C" strokeWidth="1.2" strokeLinecap="round" />

                            {/* Analytics Text (Right of icon) */}
                            <text x="180" y="156" fill="#A1A1AA" fontSize="14" fontFamily="Inter" fontWeight="400">Analytics</text>
                        </g>
                    </g>

                    <defs>
                        <filter id="filter0_d_964_307" x="0" y="0" width="500" height="700" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="67.9" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.133333 0 0 0 0 0.772549 0 0 0 0 0.368627 0 0 0 0.5 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_964_307" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_964_307" result="shape" />
                        </filter>
                    </defs>
                </svg>

                {/* Sub-elements for interactivity/finer control (Optional) */}
                <div className="absolute left-[20%] top-[45%] pointer-events-auto">
                    {/* Placeholder for Clicked/Impressions tooltips if they need to be HTML */}
                </div>
            </div>
        </motion.div>
    );
};