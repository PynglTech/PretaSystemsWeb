"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


import Image from "next/image";

import { MousePointer2, Plus, Megaphone, AppWindow, Award, PieChart, SlidersHorizontal, User, Layout, X, Minus, Maximize2, GripVertical, Navigation, Copy, Pencil, Sparkles, Palette, Clock, RotateCcw, Link2, Trash2, ChevronDown, ChevronRight, Upload, Heart, MessageSquare, HelpCircle, Eye, EyeOff, Scan, Search, CircleDot, Wand2, Move, Image as LucideImage, ArrowLeftRight, Replace, Type, Eraser, Layers, Monitor, Tablet, Smartphone } from "lucide-react";

const CloneIcon = ({ className }: { className?: string }) => (
    <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M5.4 8.4H1.2V4.2H2.1V3H1.2C0.538125 3 0 3.53813 0 4.2V8.4C0 9.06188 0.538125 9.6 1.2 9.6H5.4C6.06188 9.6 6.6 9.06188 6.6 8.4V7.5H5.4V8.4ZM4.2 6.6H8.4C9.06188 6.6 9.6 6.06188 9.6 5.4V1.2C9.6 0.538125 9.06188 0 8.4 0H4.2C3.53813 0 3 0.538125 3 1.2V5.4C3 6.06188 3.53813 6.6 4.2 6.6Z" fill="currentColor" />
    </svg>
);

const ModalIcon = ({ className }: { className?: string }) => (
    <svg
        width="11"
        height="10"
        viewBox="0 0 11 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M1.375 0C0.616602 0 0 0.640625 0 1.42857V8.57143C0 9.35938 0.616602 10 1.375 10H9.625C10.3834 10 11 9.35938 11 8.57143V1.42857C11 0.640625 10.3834 0 9.625 0H1.375ZM2.0625 1.42857H8.9375C9.31777 1.42857 9.625 1.74777 9.625 2.14286C9.625 2.53795 9.31777 2.85714 8.9375 2.85714H2.0625C1.68223 2.85714 1.375 2.53795 1.375 2.14286C1.375 1.74777 1.68223 1.42857 2.0625 1.42857Z" fill="currentColor" />
    </svg>
);

const BadgeIcon = ({ className }: { className?: string }) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_badge)">
            <path d="M4.94627 0.172051C4.80564 0.0243951 4.59471 -0.0318549 4.39783 0.0197076C4.20096 0.0712701 4.04861 0.228301 3.99705 0.425176L3.62674 1.89002L2.17361 1.47986C1.97674 1.42361 1.7658 1.47986 1.62283 1.62283C1.47986 1.7658 1.42361 1.97674 1.47986 2.17361L1.89002 3.62674L0.425176 3.99939C0.228301 4.04861 0.0736138 4.2033 0.0197076 4.40018C-0.0341987 4.59705 0.0243951 4.80564 0.172051 4.94627L1.25486 6.00096L0.172051 7.05564C0.0243951 7.19627 -0.0318549 7.40721 0.0197076 7.60408C0.0712701 7.80096 0.228301 7.9533 0.425176 8.00486L1.89002 8.37518L1.47986 9.8283C1.42361 10.0252 1.47986 10.2361 1.62283 10.3791C1.7658 10.5221 1.97674 10.5783 2.17361 10.522L3.62674 10.1119L3.99705 11.5767C4.04627 11.7736 4.20096 11.9283 4.39783 11.9822C4.59471 12.0361 4.8033 11.9775 4.94627 11.8322L6.00096 10.7494L7.05564 11.8322C7.19861 11.9775 7.40721 12.0361 7.60408 11.9822C7.80096 11.9283 7.9533 11.7736 8.00486 11.5767L8.37518 10.1119L9.8283 10.522C10.0252 10.5783 10.2361 10.5221 10.3791 10.3791C10.5221 10.2361 10.5783 10.0252 10.522 9.8283L10.1119 8.37518L11.5767 8.00486C11.7736 7.95564 11.9283 7.80096 11.9822 7.60408C12.0361 7.40721 11.9775 7.19861 11.8322 7.05564L10.7494 6.00096L11.8322 4.94627C11.9775 4.8033 12.0361 4.59471 11.9822 4.39783C11.9283 4.20096 11.7736 4.04861 11.5767 3.99705L10.1119 3.62674L10.522 2.17361C10.5783 1.97674 10.5221 1.7658 10.3791 1.62283C10.2361 1.47986 10.0252 1.42361 9.8283 1.47986L8.37518 1.89002L8.00252 0.425176C7.9533 0.228301 7.79861 0.0736138 7.60174 0.0197076C7.40486 -0.0341987 7.19627 0.0243951 7.05564 0.172051L6.00096 1.25486L4.94627 0.172051Z" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="clip0_badge">
                <path d="M0 0H12V12H0V0Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const FloatIcon = ({ className }: { className?: string }) => (
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M5.86811 1.83307C5.86811 1.42737 5.54034 1.09961 5.13465 1.09961C4.72896 1.09961 4.4012 1.42737 4.4012 1.83307V5.13362H1.10064C0.694951 5.13362 0.367188 5.46138 0.367188 5.86707C0.367188 6.27277 0.694951 6.60053 1.10064 6.60053H4.4012V9.90108C4.4012 10.3068 4.72896 10.6345 5.13465 10.6345C5.54034 10.6345 5.86811 10.3068 5.86811 9.90108V6.60053H9.16866C9.57435 6.60053 9.90211 6.27277 9.90211 5.86707C9.90211 5.46138 9.57435 5.13362 9.16866 5.13362H5.86811V1.83307Z" fill="currentColor" />
    </svg>
);

const ImageIcon = ({ className }: { className?: string }) => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M3.5585 0H6.1915C6.7375 0 7.1705 -3.91155e-08 7.519 0.0285C7.876 0.0575 8.1775 0.1185 8.4535 0.2585C8.90032 0.486422 9.26351 0.84996 9.491 1.297C9.6315 1.572 9.6925 1.874 9.7215 2.231C9.75 2.5795 9.75 3.0125 9.75 3.5585V6.1915C9.75 6.7375 9.75 7.1705 9.7215 7.519C9.6925 7.876 9.6315 8.1775 9.4915 8.4535C9.26371 8.90024 8.90035 9.26342 8.4535 9.491C8.1775 9.6315 7.876 9.6925 7.519 9.7215C7.1705 9.75 6.7375 9.75 6.1915 9.75H3.5585C3.0125 9.75 2.5795 9.75 2.231 9.7215C1.874 9.6925 1.5725 9.6315 1.297 9.4915C0.850069 9.26379 0.486707 8.90043 0.259 8.4535C0.1185 8.1775 0.0575 7.876 0.029 7.519C4.47035e-08 7.1705 0 6.7375 0 6.1915V3.5585C0 3.0125 -3.91155e-08 2.5795 0.0285 2.231C0.0575 1.874 0.1185 1.5725 0.2585 1.297C0.486337 0.849993 0.849884 0.486622 1.297 0.259C1.572 0.1185 1.874 0.0575 2.231 0.0285C2.5795 -3.91155e-08 3.0125 0 3.5585 0ZM0.75 5.7515V6.175C0.75 6.7415 0.75 7.1435 0.776 7.458C0.801 7.768 0.8495 7.9605 0.927 8.113C1.08278 8.41868 1.33132 8.66722 1.637 8.823C1.7895 8.9005 1.982 8.9485 2.292 8.974C2.4865 8.99 2.7145 8.996 2.994 8.9985C2.971 8.3025 3.0775 7.6435 3.2905 7.0385C2.7305 6.2355 1.8 5.718 0.75 5.7515ZM9.0005 4.2095C6.069 3.963 3.637 6.1465 3.745 9H6.175C6.7415 9 7.1435 9 7.458 8.974C7.768 8.949 7.9605 8.9005 8.113 8.823C8.41868 8.66722 8.66722 8.41868 8.823 8.113C8.9005 7.9605 8.9485 7.768 8.974 7.458C9 7.143 9 6.741 9 6.175L9.0005 4.2095ZM1.75 2.875C1.75 3.23967 1.89487 3.58941 2.15273 3.84727C2.41059 4.10513 2.76033 4.25 3.125 4.25C3.48967 4.25 3.83941 4.10513 4.09727 3.84727C4.35513 3.58941 4.5 3.23967 4.5 2.875C4.5 2.51033 4.35513 2.16059 4.09727 1.90273C3.83941 1.64487 3.48967 1.5 3.125 1.5C2.76033 1.5 2.41059 1.64487 2.15273 1.90273C1.89487 2.16059 1.75 2.51033 1.75 2.875ZM2.5 2.875C2.5 2.70924 2.56585 2.55027 2.68306 2.43306C2.80027 2.31585 2.95924 2.25 3.125 2.25C3.29076 2.25 3.44973 2.31585 3.56694 2.43306C3.68415 2.55027 3.75 2.70924 3.75 2.875C3.75 3.04076 3.68415 3.19973 3.56694 3.31694C3.44973 3.43415 3.29076 3.5 3.125 3.5C2.95924 3.5 2.80027 3.43415 2.68306 3.31694C2.56585 3.19973 2.5 3.04076 2.5 2.875Z" fill="currentColor" />
    </svg>
);

const RedirectIcon = ({ className }: { className?: string }) => (
    <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M1.2 0C0.88174 0 0.576515 0.126428 0.351472 0.351472C0.126428 0.576516 0 0.88174 0 1.2V1.8C0 4.8 1.2 6.6 4.2 6.6V4.8L7.2 7.2L4.2 9.6V7.8C2.292 7.8 0.894 7.29 0 6.192V9.6C0 9.91826 0.126428 10.2235 0.351472 10.4485C0.576515 10.6736 0.88174 10.8 1.2 10.8H7.2C7.51826 10.8 7.82348 10.6736 8.04853 10.4485C8.27357 10.2235 8.4 9.91826 8.4 9.6V1.2C8.4 0.88174 8.27357 0.576516 8.04853 0.351472C7.82348 0.126428 7.51826 0 7.2 0H1.2Z" fill="currentColor" />
    </svg>
);

const SwapIcon = ({ className }: { className?: string }) => (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M5.13802 5.60431C5.04035 5.69861 4.9207 5.74452 4.77905 5.74204L1.69203 5.6879L2.61294 6.64169C2.70299 6.73495 2.74681 6.85024 2.7444 6.98755C2.74199 7.12486 2.69408 7.24287 2.60067 7.34158C2.49893 7.43981 2.37941 7.48773 2.24209 7.48532C2.10478 7.48291 1.98684 7.43083 1.88828 7.32909L0.132398 5.51052C0.0832822 5.45965 0.0487374 5.40487 0.0287635 5.34618C0.00878955 5.28749 -0.00044629 5.22482 0.00105597 5.15816C0.00255824 5.09151 0.0139859 5.0292 0.035339 4.97124C0.056692 4.91327 0.0931364 4.85973 0.144672 4.81063L1.97596 3.04247C2.0777 2.94424 2.19518 2.89846 2.32842 2.90513C2.46166 2.9118 2.57739 2.96584 2.67563 3.06724C2.76553 3.16883 2.81148 3.28632 2.81347 3.41971C2.81547 3.5531 2.76543 3.66891 2.66336 3.76713L1.70956 4.68805L4.79659 4.74219C4.93823 4.74467 5.05621 4.79475 5.15051 4.89242C5.24481 4.99009 5.29055 5.10957 5.28774 5.25088C5.28493 5.39218 5.23486 5.50999 5.13752 5.6043M9.59241 2.51344C9.57072 2.5714 9.53444 2.62494 9.48357 2.67406L7.65229 4.44222C7.55055 4.54045 7.43306 4.58623 7.29982 4.57956C7.16659 4.57289 7.05085 4.51885 6.95261 4.41744C6.86271 4.31585 6.81677 4.19836 6.81477 4.06497C6.81278 3.93158 6.86282 3.81578 6.96489 3.71755L7.91868 2.79664L4.83166 2.7425C4.69001 2.74001 4.57221 2.68994 4.47824 2.59228C4.38427 2.49461 4.33836 2.37512 4.3405 2.23381C4.34265 2.09249 4.39272 1.97451 4.49073 1.87989C4.58874 1.78526 4.70823 1.73951 4.84919 1.74265L7.93622 1.79679L7.0153 0.842994C6.92525 0.749734 6.88144 0.634282 6.88385 0.496636C6.88627 0.358991 6.93417 0.241146 7.02757 0.143102C7.12931 0.0448708 7.249 -0.00303845 7.38665 -0.0006245C7.5243 0.00178945 7.64207 0.0538632 7.73997 0.155595L9.49585 1.97416C9.54496 2.02503 9.57951 2.07981 9.59948 2.13851C9.61946 2.1972 9.62869 2.25987 9.62719 2.32652C9.62569 2.39317 9.61426 2.45548 9.59291 2.51345" fill="currentColor" />
    </svg>
);

const TextReplacementIcon = ({ className }: { className?: string }) => (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M0 0.75H1.5C2.03043 0.75 2.53914 0.960714 2.91421 1.33579C3.28929 1.71086 3.5 2.21957 3.5 2.75M3.5 2.75V8.75M3.5 2.75C3.5 2.21957 3.71071 1.71086 4.08579 1.33579C4.46086 0.960714 4.96957 0.75 5.5 0.75H7M3.5 8.75C3.5 9.28043 3.28929 9.78914 2.91421 10.1642C2.53914 10.5393 2.03043 10.75 1.5 10.75H0M3.5 8.75C3.5 9.28043 3.71071 9.78914 4.08579 10.1642C4.46086 10.5393 4.96957 10.75 5.5 10.75H7M1 6.25H6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const DashboardIcon = ({ className }: { className?: string }) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M6.02292 5.625V0.389063C6.02292 0.178125 6.17793 0 6.37721 0C9.11632 0 11.3373 2.35078 11.3373 5.25C11.3373 5.46094 11.169 5.625 10.9697 5.625H6.02292ZM0 6.375C0 3.53203 1.99509 1.17891 4.58362 0.803906C4.78734 0.773437 4.96006 0.946875 4.96006 1.16484V6.75L8.42545 10.418C8.57381 10.575 8.56274 10.8328 8.39224 10.9594C7.52423 11.6156 6.46136 12 5.31435 12C2.38038 12 0 9.48281 0 6.375ZM11.6561 6.75C11.8621 6.75 12.0237 6.93281 11.9971 7.14844C11.8266 8.45859 11.231 9.62344 10.3608 10.4836C10.2279 10.6148 10.0198 10.6055 9.89132 10.4672L6.37721 6.75H11.6561Z" fill="currentColor" />
    </svg>
);

const SaveIcon = ({ className }: { className?: string }) => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M1.66667 0.833333C1.44565 0.833333 1.23369 0.921131 1.07741 1.07741C0.921131 1.23369 0.833333 1.44565 0.833333 1.66667V8.33333C0.833333 8.55435 0.921131 8.76631 1.07741 8.92259C1.23369 9.07887 1.44565 9.16667 1.66667 9.16667V6.25C1.66667 5.91848 1.79836 5.60054 2.03278 5.36612C2.2672 5.1317 2.58515 5 2.91667 5H7.08333C7.41485 5 7.7328 5.1317 7.96722 5.36612C8.20164 5.60054 8.33333 5.91848 8.33333 6.25V9.16667C8.55435 9.16667 8.76631 9.07887 8.92259 8.92259C9.07887 8.76631 9.16667 8.55435 9.16667 8.33333V3.0175C9.16662 2.7965 9.07879 2.58458 8.9225 2.42833L7.57167 1.0775C7.41542 0.921209 7.2035 0.833381 6.9825 0.833333H6.66667V2.08333C6.66667 2.41485 6.53497 2.7328 6.30055 2.96722C6.06613 3.20164 5.74819 3.33333 5.41667 3.33333H3.75C3.41848 3.33333 3.10054 3.20164 2.86612 2.96722C2.6317 2.7328 2.5 2.41485 2.5 2.08333V0.833333H1.66667ZM3.33333 0.833333V2.08333C3.33333 2.19384 3.37723 2.29982 3.45537 2.37796C3.53351 2.4561 3.63949 2.5 3.75 2.5H5.41667C5.52717 2.5 5.63315 2.4561 5.71129 2.37796C5.78943 2.29982 5.83333 2.19384 5.83333 2.08333V0.833333H3.33333ZM7.5 9.16667V6.25C7.5 6.13949 7.4561 6.03351 7.37796 5.95537C7.29982 5.87723 7.19384 5.83333 7.08333 5.83333H2.91667C2.80616 5.83333 2.70018 5.87723 2.62204 5.95537C2.5439 6.03351 2.5 6.13949 2.5 6.25V9.16667H7.5ZM0 1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H6.9825C7.42449 9.43957e-05 7.84835 0.175751 8.16083 0.488333L9.51167 1.83917C9.82425 2.15165 9.99991 2.57551 10 3.0175V8.33333C10 8.77536 9.8244 9.19928 9.51184 9.51184C9.19928 9.8244 8.77536 10 8.33333 10H1.66667C1.22464 10 0.800716 9.8244 0.488155 9.51184C0.175595 9.19928 0 8.77536 0 8.33333V1.66667Z" fill="currentColor" />
    </svg>
);

interface BrowserMockupProps {
    onClose?: () => void;
}

export default function BrowserMockup({ onClose }: BrowserMockupProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalConfigOpen, setIsModalConfigOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [isInspecting, setIsInspecting] = useState(false);
    const [isCloned, setIsCloned] = useState(false);
    const [actionType, setActionType] = useState<'link' | 'form'>('link');

    // Modal Config State - dynamically controls Preview Modal
    const [modalHeadline, setModalHeadline] = useState('Special Offer!');
    const [modalDescription, setModalDescription] = useState('Get 20% off today.');
    const [modalButtonLabel, setModalButtonLabel] = useState('Claim Now');
    const [modalButtonLink, setModalButtonLink] = useState('#');
    const [modalBgColor, setModalBgColor] = useState('#FFFFFF');
    const [modalTextColor, setModalTextColor] = useState('#1A1A1A');
    const [modalButtonColor, setModalButtonColor] = useState('#3B82F6');
    const [modalButtonTextColor, setModalButtonTextColor] = useState('#FFFFFF');
    const [modalActiveTab, setModalActiveTab] = useState<'appearance' | 'setup'>('appearance');
    const [modalMatchWebsite, setModalMatchWebsite] = useState(false);
    const [modalRadius, setModalRadius] = useState(12);
    const [modalButtonRadius, setModalButtonRadius] = useState(999);
    const [modalFormFields, setModalFormFields] = useState([
        { id: 1, name: 'Name', type: 'Text', required: true },
        { id: 2, name: 'Email', type: 'Email', required: true }
    ]);
    const [modalFormHeadline, setModalFormHeadline] = useState('Contact us');
    const [modalFormDescription, setModalFormDescription] = useState('Please fill out the form below');
    const [modalFormSubmitText, setModalFormSubmitText] = useState('Submit');
    const [modalFormSuccessMessage, setModalFormSuccessMessage] = useState('Thank you! your message has been sent');
    const [modalRedirectUrl, setModalRedirectUrl] = useState('www.example.com');

    // Banner Config State
    const [isBannerConfigOpen, setIsBannerConfigOpen] = useState(false);
    const [isBannerPreviewOpen, setIsBannerPreviewOpen] = useState(false);
    const [bannerType, setBannerType] = useState<'text' | 'image'>('text');
    const [bannerDescription, setBannerDescription] = useState('Free shipping over $50!');
    const [bannerButtonLabel, setBannerButtonLabel] = useState('Shop Now');
    const [bannerButtonLink, setBannerButtonLink] = useState('#');
    const [bannerActionType, setBannerActionType] = useState<'link' | 'form'>('link');
    const [bannerBgColor, setBannerBgColor] = useState('#3B82F6');
    const [bannerTextColor, setBannerTextColor] = useState('#FFFFFF');
    const [bannerButtonColor, setBannerButtonColor] = useState('#FFFFFF');
    const [bannerPlacement, setBannerPlacement] = useState<'top' | 'bottom'>('top');
    const [bannerDismissible, setBannerDismissible] = useState(true);
    // Image Banner State
    const [bannerImageUrl, setBannerImageUrl] = useState('');
    const [bannerRedirectUrl, setBannerRedirectUrl] = useState('#');

    // Banner Form Configuration State
    const [formHeadline, setFormHeadline] = useState('Contact Us');
    const [formDescription, setFormDescription] = useState('Please fill out the form below.');
    const [formSubmitText, setFormSubmitText] = useState('Submit');
    const [formSuccessMessage, setFormSuccessMessage] = useState('Thank you! Your message has been sent.');
    const [formApiEndpoint, setFormApiEndpoint] = useState('');
    const [formFields, setFormFields] = useState([
        { id: 1, name: 'Name', type: 'Text', required: true },
        { id: 2, name: 'Email', type: 'Email', required: true }
    ]);
    const [isBannerFormOpen, setIsBannerFormOpen] = useState(false);

    // Badge Config State
    const [isBadgeConfigOpen, setIsBadgeConfigOpen] = useState(false);
    const [isBadgePreviewOpen, setIsBadgePreviewOpen] = useState(false);
    const [badgeAttachment, setBadgeAttachment] = useState<'corner' | 'element'>('corner');
    const [badgeContentType, setBadgeContentType] = useState<'text' | 'image'>('text');
    const [badgeText, setBadgeText] = useState('SALE');
    const [badgeShape, setBadgeShape] = useState<'round' | 'pill' | 'square'>('pill');
    const [badgeBgColor, setBadgeBgColor] = useState('#EF4444');
    const [badgeTextColor, setBadgeTextColor] = useState('#FFFFFF');
    const [badgePosition, setBadgePosition] = useState<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-left');
    const [badgeOffset, setBadgeOffset] = useState(10);
    const [badgeActionType, setBadgeActionType] = useState<'link' | 'form'>('link');
    const [badgeLink, setBadgeLink] = useState('');
    const [badgeDismissible, setBadgeDismissible] = useState(false);
    const [badgeImageUrl, setBadgeImageUrl] = useState('');

    // Badge Form Configuration State
    const [badgeFormHeadline, setBadgeFormHeadline] = useState('Contact Us');
    const [badgeFormDescription, setBadgeFormDescription] = useState('Please fill out the form below.');
    const [badgeFormSubmitText, setBadgeFormSubmitText] = useState('Submit');
    const [badgeFormSuccessMessage, setBadgeFormSuccessMessage] = useState('Thank you! Your message has been sent.');
    const [badgeFormApiEndpoint, setBadgeFormApiEndpoint] = useState('');
    const [badgeFormFields, setBadgeFormFields] = useState([
        { id: 1, name: 'Name', type: 'Text', required: true },
        { id: 2, name: 'Email', type: 'Email', required: true }
    ]);
    const [isBadgeFormOpen, setIsBadgeFormOpen] = useState(false);

    // Wizard Config State
    const [isWizardConfigOpen, setIsWizardConfigOpen] = useState(false);
    const [wizardActiveTab, setWizardActiveTab] = useState<'steps' | 'appearance' | 'setup'>('steps');
    const [wizardSteps, setWizardSteps] = useState([
        { id: 1, type: 'Create card', title: 'Try new feature' }
    ]);
    const [wizardCards, setWizardCards] = useState([
        { id: 1, title: 'Get started', description: 'Limited time offer', tab: 'None', goTo: 'None' }
    ]);
    const [wizardLabels, setWizardLabels] = useState([
        { id: 1, name: 'Tab 1', icon: 'Plus' }
    ]);
    const [wizardColors, setWizardColors] = useState({
        bg: '#FFFFFF',
        text: '#1A1A1A',
        button: '#3B82F6',
        secondaryText: '#6B7280',
        buttonText: '#FFFFFF',
        border: '#D1D5DB'
    });
    const [wizardDelay, setWizardDelay] = useState(0);
    const [wizardVisibility, setWizardVisibility] = useState({
        desktop: true,
        tablet: true,
        mobile: true
    });

    // FAB (Floating Action Button) Config State
    const [isFABConfigOpen, setIsFABConfigOpen] = useState(false);
    const [isFABPreviewOpen, setIsFABPreviewOpen] = useState(false);
    const [fabBehavior, setFABBehavior] = useState<'fixed' | 'scroll'>('fixed');
    const [fabContentType, setFABContentType] = useState<'text' | 'icon'>('text');
    const [fabLabel, setFABLabel] = useState('GO');
    const [fabIconName, setFABIconName] = useState<'Plus' | 'MessageSquare' | 'Heart' | 'HelpCircle' | 'Sparkles'>('MessageSquare');
    const [fabShape, setFABShape] = useState<'round' | 'pill' | 'square'>('round');
    const [fabSize, setFABSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [fabBgColor, setFABBgColor] = useState('#10B981');
    const [fabTextColor, setFABTextColor] = useState('#FFFFFF');
    const [fabActionType, setFABActionType] = useState<'link' | 'form'>('form');
    const [fabLink, setFABLink] = useState('');
    const [fabPosition, setFABPosition] = useState<'bottom-left' | 'bottom-right'>('bottom-right');
    const [fabOffset, setFABOffset] = useState(24);

    // FAB Form Configuration State
    const [fabFormHeadline, setFABFormHeadline] = useState('Contact Us');
    const [fabFormDescription, setFABFormDescription] = useState('Please fill out the form below.');
    const [fabFormSubmitText, setFABFormSubmitText] = useState('Submit');
    const [fabFormSuccessMessage, setFABFormSuccessMessage] = useState('Thank you! Your message has been sent.');
    const [fabFormApiEndpoint, setFABFormApiEndpoint] = useState('');
    const [fabFormFields, setFABFormFields] = useState([
        { id: 1, name: 'Name', type: 'Text', required: true },
        { id: 2, name: 'Email', type: 'Email', required: true }
    ]);
    const [isFABFormOpen, setIsFABFormOpen] = useState(false);
    const [isInspectMenuOpen, setIsInspectMenuOpen] = useState(false);
    const [isManageConfigOpen, setIsManageConfigOpen] = useState(false);
    const [activeManageTab, setActiveManageTab] = useState<'Clone' | 'Modal' | 'Banner' | 'Badge' | 'Fab'>('Clone');

    // Auto-play state
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [cursorPos, setCursorPos] = useState({ x: "50%", y: "110%" }); // Start off-screen bottom
    const [showRemoteCursor, setShowRemoteCursor] = useState(true);
    const [subInstruction, setSubInstruction] = useState("");

    const stopAutoPlay = () => {
        if (isAutoPlaying) {
            setIsAutoPlaying(false);
            setShowRemoteCursor(false);
            setIsModalConfigOpen(false);
            setIsBannerConfigOpen(false);
            setIsBadgeConfigOpen(false);
            setIsFABConfigOpen(false);
            setIsWizardConfigOpen(false);
            setSubInstruction("");
        }
    };

    const resetAllElements = () => {
        setIsCloned(false);
        setIsPreviewModalOpen(false);
        setIsBannerPreviewOpen(false);
        setIsBadgePreviewOpen(false);
        setIsFABPreviewOpen(false);
        setIsModalOpen(false);
        setIsModalConfigOpen(false);
        setIsBannerConfigOpen(false);
        setIsBadgeConfigOpen(false);
        setIsFABConfigOpen(false);
        setIsWizardConfigOpen(false);
        setIsInspecting(false);
        setSubInstruction("");
    };

    // Auto-play Sequence
    useEffect(() => {
        if (!isAutoPlaying) return;

        const sequence = async () => {
            // --- STAGE 1: CLONE ---
            setSubInstruction("Initializing Clone Tool...");
            await new Promise(r => setTimeout(r, 1500));
            if (!isAutoPlaying) return;

            // Move to Dock (Clone Tool)
            setCursorPos({ x: "41%", y: "85%" });
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setSubInstruction("Opening Scan...");
            setIsModalOpen(true);
            await new Promise(r => setTimeout(r, 1000));
            if (!isAutoPlaying) return;

            setCursorPos({ x: "50%", y: "60%" }); // "Start Inspection" button
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setSubInstruction("Selecting element...");
            setIsModalOpen(false);
            setIsInspecting(true);
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setCursorPos({ x: "85%", y: "35%" }); // Target: "Learn More"
            await new Promise(r => setTimeout(r, 1200));
            if (!isAutoPlaying) return;

            setSubInstruction("Cloned successfully!");
            setIsInspecting(false);
            setIsCloned(true); // Added Clone
            await new Promise(r => setTimeout(r, 1500));
            if (!isAutoPlaying) return;

            setSubInstruction("");
            // Close Clone before moving to Modal
            setIsCloned(false);
            await new Promise(r => setTimeout(r, 500));

            // --- STAGE 2: MODAL ---
            setSubInstruction("Configuring Modal...");
            if (!isAutoPlaying) return;
            setCursorPos({ x: "45.5%", y: "85%" }); // Modal Tool
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setIsModalConfigOpen(true);
            await new Promise(r => setTimeout(r, 1200));
            if (!isAutoPlaying) return;

            setSubInstruction("Adding to page...");
            setCursorPos({ x: "50%", y: "55%" }); // "Add to page" button in Modal Config footer
            await new Promise(r => setTimeout(r, 1000));
            if (!isAutoPlaying) return;

            setIsModalConfigOpen(false);
            setIsPreviewModalOpen(true); // Added Modal
            setSubInstruction("Modal Active!");
            await new Promise(r => setTimeout(r, 2000));
            if (!isAutoPlaying) return;

            setSubInstruction("Closing Preview...");
            // Close the preview modal before moving to Banner
            setCursorPos({ x: "62%", y: "32%" }); // Position of "X" on centered modal
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;
            setIsPreviewModalOpen(false);
            await new Promise(r => setTimeout(r, 500));
            setSubInstruction("");

            // --- STAGE 3: BANNER ---
            setSubInstruction("Designing Banner...");
            if (!isAutoPlaying) return;
            setCursorPos({ x: "50%", y: "85%" }); // Banner Tool
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setIsBannerConfigOpen(true);
            await new Promise(r => setTimeout(r, 1200));
            if (!isAutoPlaying) return;

            setSubInstruction("Adding to page...");
            setCursorPos({ x: "50%", y: "58%" }); // "Add to page" button in Banner Config footer
            await new Promise(r => setTimeout(r, 1000));
            if (!isAutoPlaying) return;

            setIsBannerConfigOpen(false);
            setIsBannerPreviewOpen(true); // Added Banner
            setSubInstruction("Banner Published!");
            await new Promise(r => setTimeout(r, 1500));
            if (!isAutoPlaying) return;

            setSubInstruction("Closing Banner...");
            // Close Banner before moving to Badge
            setCursorPos({ x: "95%", y: "8%" }); // Banner close button
            await new Promise(r => setTimeout(r, 600));
            if (!isAutoPlaying) return;
            setIsBannerPreviewOpen(false);
            await new Promise(r => setTimeout(r, 500));
            setSubInstruction("");

            // --- STAGE 4: BADGE ---
            setSubInstruction("Setting up Badge...");
            if (!isAutoPlaying) return;
            setCursorPos({ x: "54.5%", y: "85%" }); // Badge Tool
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setIsBadgeConfigOpen(true);
            await new Promise(r => setTimeout(r, 1200));
            if (!isAutoPlaying) return;

            setSubInstruction("Attaching to element...");
            setCursorPos({ x: "50%", y: "58%" }); // "Launch Badge" button in Badge Config footer
            await new Promise(r => setTimeout(r, 1000));
            if (!isAutoPlaying) return;

            setIsBadgeConfigOpen(false);
            setIsBadgePreviewOpen(true); // Added Badge
            setSubInstruction("Badge Attached!");
            await new Promise(r => setTimeout(r, 1500));
            if (!isAutoPlaying) return;

            setSubInstruction("Removing Badge...");
            // Close Badge before moving to FAB
            setCursorPos({ x: "12%", y: "18%" }); // Badge close button (top-left position)
            await new Promise(r => setTimeout(r, 600));
            if (!isAutoPlaying) return;
            setIsBadgePreviewOpen(false);
            await new Promise(r => setTimeout(r, 500));
            setSubInstruction("");

            // --- STAGE 5: FAB ---
            setSubInstruction("Customizing FAB...");
            if (!isAutoPlaying) return;
            setCursorPos({ x: "59%", y: "85%" }); // FAB Tool
            await new Promise(r => setTimeout(r, 800));
            if (!isAutoPlaying) return;

            setIsFABConfigOpen(true);
            await new Promise(r => setTimeout(r, 1200));
            if (!isAutoPlaying) return;

            setSubInstruction("Deploying FAB...");
            setCursorPos({ x: "50%", y: "58%" }); // "Launch FAB" button in FAB Config footer
            await new Promise(r => setTimeout(r, 1000));
            if (!isAutoPlaying) return;

            setIsFABConfigOpen(false);
            setIsFABPreviewOpen(true); // Added FAB
            setSubInstruction("FAB Active!");

            // Final Showcase - show FAB briefly then close
            await new Promise(r => setTimeout(r, 2000));
            if (!isAutoPlaying) return;

            setSubInstruction("Restarting Demo...");
            // Close FAB before reset
            setCursorPos({ x: "92%", y: "82%" }); // FAB position (bottom-right)
            await new Promise(r => setTimeout(r, 600));
            if (!isAutoPlaying) return;
            setIsFABPreviewOpen(false);
            await new Promise(r => setTimeout(r, 1000));

            // Reset and Repeat
            resetAllElements();
            setCursorPos({ x: "50%", y: "110%" });
        };

        sequence();

        const interval = setInterval(() => {
            if (isAutoPlaying) {
                sequence();
            }
        }, 30000); // Extended duration for full cycle

        return () => clearInterval(interval);

    }, [isAutoPlaying]);

    const handleStartInspection = () => {
        setIsModalOpen(false);
        setIsInspecting(true);
    };

    const handleElementClick = () => {
        if (isInspecting) {
            setIsCloned(true);
            setIsInspecting(false);
        }
    };

    return (
        <div
            className="relative rounded-[2rem] md:rounded-xl bg-[#0E0E12] border border-white/20 shadow-2xl overflow-hidden aspect-[9/16] md:aspect-[16/9] lg:aspect-[16/8] flex flex-col min-h-[500px] md:min-h-[400px] transition-all duration-500"
            onMouseDown={stopAutoPlay}
            onTouchStart={stopAutoPlay}
        >
            {/* Interface Header: Phone Status Bar (Mobile) vs Browser Toolbar (Desktop) */}
            <div className="flex items-center gap-4 px-4 py-3 bg-[#121216] border-b-[0.5px] border-[#1E2745] shrink-0">
                {/* Desktop: Window Controls */}
                <div className="hidden md:flex gap-2 group/controls">
                    <button
                        onClick={onClose}
                        className="w-3 h-3 rounded-full bg-[#FF5F57] flex items-center justify-center group/btn transition-colors relative"
                    >
                        <X className="w-2 h-2 text-black/60 opacity-0 group-hover/controls:opacity-100 transition-opacity" strokeWidth={4} />
                    </button>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] flex items-center justify-center transition-colors relative">
                        <Minus className="w-2 h-2 text-black/60 opacity-0 group-hover/controls:opacity-100 transition-opacity" strokeWidth={4} />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-[#28C841] flex items-center justify-center transition-colors relative">
                        <Maximize2 className="w-1.5 h-1.5 text-black/60 opacity-0 group-hover/controls:opacity-100 transition-opacity" strokeWidth={4} />
                    </div>
                </div>

                {/* Mobile: Time/Notch Area */}
                <div className="md:hidden flex-1 flex items-center justify-between text-[10px] font-bold text-white/50 pl-2 pr-4">
                    <span>9:41</span>
                    <button onClick={onClose} className="p-1 hover:text-white transition-colors">
                        <X className="w-3 h-3" />
                    </button>
                </div>

                {/* Address Bar */}
                <div className="flex-1 max-w-xl mx-auto md:mr-auto">
                    <div className="h-9 bg-[#1A1A1E] rounded-full md:rounded-md border border-white/10 flex items-center justify-center gap-2 text-xs text-gray-500 font-jetbrains-mono relative shadow-inner">
                        <div className="w-3 h-3 text-gray-600">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </div>
                        <span className="opacity-50">yoursite.com</span>
                    </div>
                </div>

                {/* Mobile: Battery Icon */}
                <div className="md:hidden text-white/50">
                    <div className="w-5 h-2.5 rounded border border-white/30 relative ml-2">
                        <div className="absolute inset-0.5 bg-white/50 rounded-[1px]" />
                        <div className="absolute -right-0.5 top-0.5 bottom-0.5 w-0.5 bg-white/30 rounded-r-sm" />
                    </div>
                </div>
            </div>

            {/* Content Area (Simulated Site) */}
            <div
                ref={containerRef}
                className="p-8 relative flex-1 bg-[#05050A]"
                onClick={stopAutoPlay}
            >
                {/* Simulated Remote Cursor (Auto-Play) */}
                <AnimatePresence>
                    {isAutoPlaying && showRemoteCursor && (
                        <motion.div
                            className="absolute z-[100] pointer-events-none drop-shadow-2xl"
                            animate={{
                                left: cursorPos.x,
                                top: cursorPos.y
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 20,
                                mass: 0.8
                            }}
                        >
                            <MousePointer2 className="w-5 h-5 text-neon-green fill-neon-green/20 -rotate-12" strokeWidth={1.5} />
                            <div className="bg-[#070B1A]/95 backdrop-blur-md border border-neon-green/30 text-neon-green text-[10px] font-bold px-2 py-1.5 rounded-lg ml-4 -mt-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] whitespace-nowrap">
                                {subInstruction || "User"}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Simulated Skeleton Content - Polished Website Structure */}
                <div className="max-w-4xl mx-auto pointer-events-none">
                    {/* Skeleton Nav Bar */}
                    <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/10 animate-pulse" />
                            <div className="h-3 w-20 rounded bg-white/15 animate-pulse" />
                        </div>
                        {/* Nav Links */}
                        <div className="hidden md:flex items-center gap-5">
                            <div className="h-2.5 w-12 rounded-full bg-white/10 animate-pulse" />
                            <div className="h-2.5 w-14 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <div className="h-2.5 w-10 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <div className="h-2.5 w-12 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.3s' }} />
                        </div>
                        {/* Action Buttons */}
                        <div className="flex items-center gap-2">
                            <div className="h-7 w-14 rounded-md bg-white/10 animate-pulse" />
                            <div className="h-7 w-18 rounded-md bg-white/15 animate-pulse" />
                        </div>
                    </div>

                    {/* Hero Section */}
                    <div className="text-center space-y-4 mb-8">
                        {/* Badge */}
                        <div className="flex justify-center">
                            <div className="h-5 w-28 rounded-full bg-white/8 animate-pulse border border-white/10" />
                        </div>
                        {/* Headline */}
                        <div className="space-y-2 flex flex-col items-center">
                            <div className="h-7 w-3/4 md:w-3/5 rounded bg-white/15 animate-pulse" />
                            <div className="h-7 w-1/2 md:w-2/5 rounded bg-white/12 animate-pulse" style={{ animationDelay: '0.15s' }} />
                        </div>
                        {/* Subheadline */}
                        <div className="space-y-1.5 flex flex-col items-center pt-2">
                            <div className="h-2.5 w-4/5 md:w-1/2 rounded-full bg-white/8 animate-pulse" />
                            <div className="h-2.5 w-3/5 md:w-2/5 rounded-full bg-white/6 animate-pulse" style={{ animationDelay: '0.1s' }} />
                        </div>
                        {/* CTA Buttons Placeholder - positioned differently from the real "Learn more" */}
                        <div className="flex justify-center gap-3 pt-3">
                            <div className="h-10 w-28 rounded-lg bg-white/12 animate-pulse" />
                            <div className="h-10 w-24 rounded-lg bg-white/8 animate-pulse border border-white/10" style={{ animationDelay: '0.1s' }} />
                        </div>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="rounded-xl p-4 bg-white/5 border border-white/8 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}>
                                {/* Icon */}
                                <div className="w-9 h-9 rounded-lg bg-white/10 mb-3" />
                                {/* Title */}
                                <div className="h-3.5 w-3/4 rounded bg-white/12 mb-2" />
                                {/* Description lines */}
                                <div className="space-y-1.5">
                                    <div className="h-2 w-full rounded-full bg-white/8" />
                                    <div className="h-2 w-4/5 rounded-full bg-white/6" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- OVERLAY ELEMENTS (The Ghost UI) --- */}

                {/* Inspection Layer Indicator */}
                <AnimatePresence>
                    {isInspecting && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-4 left-1/2 -translate-x-1/2 bg-neon-green/10 border border-neon-green/50 text-neon-green px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wide backdrop-blur-sm z-50 flex items-center gap-2"
                        >
                            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                            INSPECTION MODE ACTIVE
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Interactive Button Area */}
                <div className="absolute top-[25%] md:top-[35%] left-1/2 md:left-auto md:right-[15%] -translate-x-1/2 md:translate-x-0 flex gap-4 items-center z-20">
                    {/* Original Button Container with Selection Box */}
                    <div
                        className="relative group cursor-pointer"
                        onClick={handleElementClick}
                    >
                        {/* The Actual Button */}
                        <button className="bg-[#2D2DFF] text-white px-6 py-3 rounded-md text-sm font-medium whitespace-nowrap shadow-xl shadow-blue-900/20 relative z-10">
                            Learn more
                        </button>

                        {/* Selection Box (Only visible when inspecting) */}
                        <AnimatePresence>
                            {isInspecting && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="absolute -inset-3 border border-dashed border-neon-green/80 rounded-lg flex items-center justify-center bg-neon-green/5 pointer-events-none"
                                >
                                    <div className="absolute -top-5 left-0 text-neon-green text-[9px] font-mono font-bold tracking-wider bg-[#05050A] px-1">Button</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Cloned Button */}
                    <AnimatePresence>
                        {isCloned && (
                            <motion.div
                                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative"
                            >
                                <button className="bg-[#2D2DFF] text-white px-6 py-3 rounded-md text-sm font-medium whitespace-nowrap shadow-xl shadow-blue-900/20 ring-2 ring-neon-green ring-offset-2 ring-offset-[#05050A]">
                                    Learn more
                                </button>
                                {/* Clone Badge */}
                                <motion.div
                                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
                                    className="absolute -top-2 -right-2 w-5 h-5 bg-neon-green rounded-full flex items-center justify-center text-[10px] font-bold text-black border border-white"
                                >
                                    <Copy className="w-2.5 h-2.5" />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>


                {/* 2. Clone Config Modal */}
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.1}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[280px] bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-2xl shadow-2xl overflow-hidden z-[90] cursor-grab active:cursor-grabbing hover:border-neon-green/30 transition-colors"
                        >
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <CloneIcon className="w-3.5 h-3.5 text-neon-green" />
                                    <span className="text-xs font-semibold text-white">Clone setting</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Minus className="w-3.5 h-3.5 text-gray-500 hover:text-white cursor-pointer" />
                                    <X
                                        className="w-3.5 h-3.5 text-gray-500 hover:text-white cursor-pointer transition-colors"
                                        onClick={() => setIsModalOpen(false)}
                                    />
                                </div>
                            </div>

                            <div className="p-4 cursor-default" onPointerDown={(e) => e.stopPropagation()}>
                                <div className="bg-[#111821] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center gap-4">
                                    <Layout className="w-6 h-6 text-neon-green" strokeWidth={1.5} />

                                    <div className="space-y-1">
                                        <div className="text-sm font-bold text-white">Start element to clone</div>
                                        <div className="text-[11px] text-gray-500">Pick any component from page</div>
                                    </div>

                                    <button
                                        onClick={handleStartInspection}
                                        className="flex items-center gap-2 bg-transparent border border-neon-green text-neon-green px-6 py-2.5 rounded-xl text-xs font-bold mt-2"
                                    >
                                        <MousePointer2 className="w-3.5 h-3.5" />
                                        Select element
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 3. Modal Config Popup */}
                <AnimatePresence>
                    {isModalConfigOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.05}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[35%] left-1/2 w-[90%] md:w-[300px] max-h-[65%] bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-2xl shadow-2xl overflow-hidden z-[90] cursor-grab active:cursor-grabbing hover:border-neon-green/30 transition-colors flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
                                <div className="flex items-center gap-2">
                                    <ModalIcon className="w-3.5 h-3.5 text-neon-green" />
                                    <span className="text-xs font-semibold text-white">Modal setting</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
                                        <EyeOff className="w-3.5 h-3.5" />
                                    </div>
                                    <Minus className="w-3.5 h-3.5 text-gray-500 hover:text-white cursor-pointer" />
                                    <X
                                        className="w-3.5 h-3.5 text-gray-500 hover:text-white cursor-pointer transition-colors"
                                        onClick={() => setIsModalConfigOpen(false)}
                                    />
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="px-3.5 pt-3">
                                <div className="bg-white/5 rounded-xl p-1 flex items-center gap-1">
                                    <button
                                        onClick={() => setModalActiveTab('appearance')}
                                        className={`flex-1 py-2.5 rounded-lg text-[11px] font-bold transition-all ${modalActiveTab === 'appearance' ? 'bg-neon-green text-black' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        Appearance
                                    </button>
                                    <button
                                        onClick={() => setModalActiveTab('setup')}
                                        className={`flex-1 py-2.5 rounded-lg text-[11px] font-bold transition-all ${modalActiveTab === 'setup' ? 'bg-neon-green text-black' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        Setup
                                    </button>
                                </div>
                            </div>

                            <div
                                className="p-3.5 cursor-default overflow-y-auto flex-1 space-y-3 min-h-0"
                                onPointerDown={(e) => e.stopPropagation()}
                                onWheel={(e) => e.stopPropagation()}
                                onTouchStart={(e) => e.stopPropagation()}
                            >
                                {/* Appearance Tab */}
                                {modalActiveTab === 'appearance' && (
                                    <>
                                        {/* Modal content Card */}
                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2">
                                                    <Pencil className="w-3.5 h-3.5 text-neon-green" strokeWidth={2} />
                                                    <span className="text-xs font-bold text-white">Modal content</span>
                                                </div>
                                                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                            </div>

                                            {/* Headline */}
                                            <div className="mb-4">
                                                <label className="text-[10px] text-gray-400 font-medium mb-1.5 block">Headline</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="e.g Welcome!"
                                                        value={modalHeadline}
                                                        onChange={(e) => setModalHeadline(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 py-3 text-[11px] text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 pr-10"
                                                    />
                                                    <Pencil className="w-3.5 h-3.5 text-gray-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="mb-4">
                                                <label className="text-[10px] text-gray-400 font-medium mb-1.5 block">Description</label>
                                                <div className="relative">
                                                    <textarea
                                                        placeholder="e.g Check out our new features"
                                                        value={modalDescription}
                                                        onChange={(e) => setModalDescription(e.target.value)}
                                                        rows={2}
                                                        className="w-full bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 py-3 text-[11px] text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 pr-10 resize-none"
                                                    />
                                                    <Pencil className="w-3.5 h-3.5 text-gray-600 absolute right-3.5 top-4" />
                                                </div>
                                            </div>

                                            {/* Button Label */}
                                            <div>
                                                <label className="text-[10px] text-gray-400 font-medium mb-1.5 block">Button label</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="e.g Learn more"
                                                        value={modalButtonLabel}
                                                        onChange={(e) => setModalButtonLabel(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 py-3 text-[11px] text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 pr-10"
                                                    />
                                                    <Pencil className="w-3.5 h-3.5 text-gray-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Color Section */}
                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2">
                                                    <Palette className="w-3.5 h-3.5 text-neon-green" />
                                                    <span className="text-xs font-bold text-white">Modal color</span>
                                                </div>
                                                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                            </div>

                                            <div className="space-y-4 pt-1">
                                                {/* Toggle Card */}
                                                <div className="bg-black/20 border border-white/5 rounded-2xl p-4 flex items-center justify-between group cursor-pointer hover:border-white/10 transition-colors">
                                                    <div className="space-y-1">
                                                        <div className="text-[11px] font-bold text-white">Match website style</div>
                                                        <div className="text-[9px] text-gray-500 leading-tight pr-4">Use page typography, surface color, accent button color, radius, and overlay feel.</div>
                                                    </div>
                                                    <div
                                                        onClick={(e) => { e.stopPropagation(); setModalMatchWebsite(!modalMatchWebsite); }}
                                                        className={`w-10 h-5.5 rounded-full p-1 transition-colors shrink-0 ${modalMatchWebsite ? 'bg-neon-green' : 'bg-gray-700'}`}
                                                    >
                                                        <div className={`w-3.5 h-3.5 bg-white rounded-full transition-transform ${modalMatchWebsite ? 'translate-x-4.5' : 'translate-x-0'}`} />
                                                    </div>
                                                </div>

                                                {/* Color Grids */}
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] text-gray-400 font-medium ml-1">Background</label>
                                                        <div className="bg-black/20 border border-white/5 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
                                                            <div className="w-4 h-4 rounded bg-white shadow-sm" />
                                                            <span className="text-[10px] text-white font-mono uppercase font-bold tracking-wider">#FFFFFF</span>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] text-gray-400 font-medium ml-1">Text color</label>
                                                        <div className="bg-black/20 border border-white/5 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
                                                            <div className="w-4 h-4 rounded bg-[#1A1A1A] border border-white/10" />
                                                            <span className="text-[10px] text-white font-mono uppercase font-bold tracking-wider">#1A1A1A</span>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] text-gray-400 font-medium ml-1">Button color</label>
                                                        <div className="bg-black/20 border border-white/5 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
                                                            <div className="w-4 h-4 rounded bg-[#3B82F6]" />
                                                            <span className="text-[10px] text-white font-mono uppercase font-bold tracking-wider">#3B82F6</span>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[10px] text-gray-400 font-medium ml-1">Button text</label>
                                                        <div className="bg-black/20 border border-white/5 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
                                                            <div className="w-4 h-4 rounded bg-white" />
                                                            <span className="text-[10px] text-white font-mono uppercase font-bold tracking-wider">#FFFFFF</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Sliders */}
                                                <div className="space-y-4 pt-2">
                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-between text-[10px] font-bold">
                                                            <span className="text-white">Modal radius</span>
                                                            <span className="text-gray-400 font-mono tracking-wider">{modalRadius}px</span>
                                                        </div>
                                                        <div
                                                            className="h-1 bg-white/5 rounded-full relative cursor-pointer"
                                                            onClick={(e) => {
                                                                const rect = e.currentTarget.getBoundingClientRect();
                                                                const percent = (e.clientX - rect.left) / rect.width;
                                                                setModalRadius(Math.round(percent * 40));
                                                            }}
                                                        >
                                                            <div className="absolute top-0 left-0 h-full bg-neon-green rounded-full" style={{ width: `${(modalRadius / 40) * 100}%` }} />
                                                            <div
                                                                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-neon-green rounded-full shadow-[0_0_10px_rgba(20,255,0,0.5)]"
                                                                style={{ left: `${(modalRadius / 40) * 100}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-between text-[10px] font-bold">
                                                            <span className="text-white">Button radius</span>
                                                            <span className="text-gray-400 font-mono tracking-wider">{modalButtonRadius === 999 ? 'Full' : `${modalButtonRadius}px`}</span>
                                                        </div>
                                                        <div
                                                            className="h-1 bg-white/5 rounded-full relative cursor-pointer"
                                                            onClick={(e) => {
                                                                const rect = e.currentTarget.getBoundingClientRect();
                                                                const percent = (e.clientX - rect.left) / rect.width;
                                                                setModalButtonRadius(percent > 0.9 ? 999 : Math.round(percent * 40));
                                                            }}
                                                        >
                                                            <div className="absolute top-0 left-0 h-full bg-neon-green rounded-full" style={{ width: `${modalButtonRadius === 999 ? 100 : (modalButtonRadius / 40) * 100}%` }} />
                                                            <div
                                                                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-neon-green rounded-full shadow-[0_0_10px_rgba(20,255,0,0.5)]"
                                                                style={{ left: `${modalButtonRadius === 999 ? 100 : (modalButtonRadius / 40) * 100}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Setup Tab */}
                                {modalActiveTab === 'setup' && (
                                    <>
                                        {/* Modal Action Card */}
                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2">
                                                    <Layout className="w-3.5 h-3.5 text-neon-green" />
                                                    <span className="text-xs font-bold text-white">Modal action</span>
                                                </div>
                                                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                            </div>

                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => setActionType('link')}
                                                    className={`flex-1 py-3.5 rounded-xl border-2 text-[11px] font-bold transition-all relative ${actionType === 'link' ? 'border-neon-green text-neon-green bg-transparent' : 'border-white/5 bg-black/20 text-gray-400'}`}
                                                >
                                                    Link
                                                    {actionType === 'link' && <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_5px_rgba(20,255,0,0.5)]" />}
                                                </button>
                                                <button
                                                    onClick={() => setActionType('form')}
                                                    className={`flex-1 py-3.5 rounded-xl border-2 text-[11px] font-bold transition-all relative ${actionType === 'form' ? 'border-neon-green text-neon-green bg-transparent' : 'border-white/5 bg-black/20 text-gray-400'}`}
                                                >
                                                    Form
                                                    {actionType === 'form' && <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_5px_rgba(20,255,0,0.5)]" />}
                                                </button>
                                            </div>
                                        </div>

                                        {actionType === 'link' ? (
                                            <div className="bg-[#111821] border border-white/5 rounded-2xl p-4">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <Link2 className="w-3.5 h-3.5 text-neon-green" />
                                                        <span className="text-xs font-bold text-white">Modal redirect link</span>
                                                    </div>
                                                    <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                                </div>

                                                <div className="bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 py-3 flex items-center gap-2 pr-10 relative">
                                                    <span className="text-[11px] text-neon-green font-bold bg-neon-green/10 px-2 py-0.5 rounded">https://</span>
                                                    <input
                                                        type="text"
                                                        placeholder="www.example.com"
                                                        value={modalRedirectUrl}
                                                        onChange={(e) => setModalRedirectUrl(e.target.value)}
                                                        className="bg-transparent border-none outline-none text-[11px] text-white flex-1"
                                                    />
                                                    <Pencil className="w-3.5 h-3.5 text-gray-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                {/* Form config cards */}
                                                <div className="bg-[#111821] border border-white/5 rounded-2xl p-4">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center gap-2">
                                                            <Megaphone className="w-3.5 h-3.5 text-neon-green" />
                                                            <span className="text-xs font-bold text-white">Form setup</span>
                                                        </div>
                                                        <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                                    </div>
                                                    <div className="space-y-4">
                                                        <div>
                                                            <label className="text-[10px] text-gray-400 mb-1.5 block">Form headline</label>
                                                            <div className="relative">
                                                                <input
                                                                    type="text"
                                                                    value={modalFormHeadline}
                                                                    onChange={(e) => setModalFormHeadline(e.target.value)}
                                                                    className="w-full bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 py-3 text-[11px] text-white pr-10"
                                                                />
                                                                <Pencil className="w-3.5 h-3.5 text-gray-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label className="text-[10px] text-gray-400 mb-1.5 block">Form description</label>
                                                            <div className="relative">
                                                                <input
                                                                    type="text"
                                                                    value={modalFormDescription}
                                                                    onChange={(e) => setModalFormDescription(e.target.value)}
                                                                    className="w-full bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 py-3 text-[11px] text-white pr-10"
                                                                />
                                                                <Pencil className="w-3.5 h-3.5 text-gray-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-[#111821] border border-white/5 rounded-2xl p-4">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center gap-2">
                                                            <AppWindow className="w-3.5 h-3.5 text-neon-green" />
                                                            <span className="text-xs font-bold text-white">Form field</span>
                                                        </div>
                                                        <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                                    </div>

                                                    <div className="space-y-3">
                                                        {modalFormFields.map(field => (
                                                            <div key={field.id} className="bg-black/20 border border-white/5 rounded-2xl p-3.5 space-y-3.5">
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center gap-2">
                                                                        <Scan className="w-3.5 h-3.5 text-neon-green" />
                                                                        <span className="text-[10px] font-bold text-white">Label</span>
                                                                    </div>
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Required</span>
                                                                        <div
                                                                            onClick={() => setModalFormFields(modalFormFields.map(f => f.id === field.id ? { ...f, required: !f.required } : f))}
                                                                            className={`w-8 h-4.5 rounded-full p-0.5 cursor-pointer transition-colors ${field.required ? 'bg-neon-green' : 'bg-gray-700'}`}
                                                                        >
                                                                            <div className={`w-3.5 h-3.5 bg-white rounded-full transition-transform ${field.required ? 'translate-x-3.5' : 'translate-x-0'} shadow-sm`} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex gap-2">
                                                                    <div className="flex-[2] relative">
                                                                        <input
                                                                            type="text"
                                                                            value={field.name}
                                                                            onChange={(e) => setModalFormFields(modalFormFields.map(f => f.id === field.id ? { ...f, name: e.target.value } : f))}
                                                                            className="w-full bg-[#070B1A] border border-[#1E2540] rounded-xl px-3.5 py-2.5 text-[10px] text-white pr-8 font-medium"
                                                                        />
                                                                        <Pencil className="w-3 h-3 text-gray-600 absolute right-2.5 top-1/2 -translate-y-1/2" />
                                                                    </div>
                                                                    <div className="flex-1 bg-[#070B1A] border border-[#1E2540] rounded-xl px-3 py-2.5 flex items-center justify-between text-[10px] text-white font-bold cursor-pointer hover:bg-white/5">
                                                                        {field.type}
                                                                        <ChevronDown className="w-3 h-3 text-gray-500" />
                                                                    </div>
                                                                    <button
                                                                        onClick={() => setModalFormFields(modalFormFields.filter(f => f.id !== field.id))}
                                                                        className="p-2.5 rounded-xl border border-white/5 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                                                                    >
                                                                        <Trash2 className="w-3.5 h-3.5" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}

                                                        <button
                                                            onClick={() => setModalFormFields([...modalFormFields, { id: Date.now(), name: 'New Field', type: 'Text', required: false }])}
                                                            className="w-full py-2 rounded-lg border border-neon-green text-neon-green text-[10px] font-bold mt-2 hover:bg-neon-green/5 transition-all flex items-center justify-center gap-2"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                            Add field
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4 flex items-center justify-between group cursor-pointer hover:border-white/10 transition-colors">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-3.5 h-3.5 text-neon-green" />
                                                <span className="text-xs font-bold text-white">Trigger modal after</span>
                                            </div>
                                            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                                        </div>

                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4 flex items-center justify-between group cursor-pointer hover:border-white/10 transition-colors">
                                            <div className="flex items-center gap-2">
                                                <Eye className="w-3.5 h-3.5 text-neon-green" />
                                                <span className="text-xs font-bold text-white">Visibility</span>
                                            </div>
                                            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Footer Actions */}
                            <div className="bg-[#070B1A] border-t border-white/10 px-4 py-4 mt-auto">
                                <div className="flex items-center gap-2">
                                    <button className="flex flex-col items-center justify-center gap-1 px-2 text-gray-500 hover:text-white transition-all">
                                        <RotateCcw className="w-4 h-4" />
                                        <span className="text-[9px] font-medium">Undo</span>
                                    </button>

                                    <div className="flex-1 flex items-center gap-2 ml-2">
                                        <button className="flex-1 flex items-center justify-center gap-2 bg-[#1E2532] text-white py-3 rounded-xl text-[10px] font-bold hover:bg-[#2A3445] transition-all">
                                            <SaveIcon className="w-3.5 h-3.5 text-neon-green" />
                                            Save
                                        </button>
                                        <button
                                            onClick={() => { setIsPreviewModalOpen(true); setIsModalConfigOpen(false); }}
                                            className="flex-[1.5] flex items-center justify-center gap-2 bg-[#1E2532] text-white py-3 rounded-xl text-[10px] font-bold hover:bg-[#2A3445] transition-all"
                                        >
                                            <Plus className="w-3.5 h-3.5 text-neon-green" />
                                            Add to page
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 5. Banner Config Popup */}
                <AnimatePresence>
                    {isBannerConfigOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.05}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[35%] left-1/2 w-[90%] md:w-[320px] max-h-[65%] bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-3xl shadow-2xl overflow-hidden z-[90] cursor-grab active:cursor-grabbing hover:border-neon-green/30 transition-colors flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/5 shrink-0">
                                <div className="flex items-center gap-2">
                                    <GripVertical className="w-3 h-3 text-gray-500" />
                                    <span className="text-[9px] font-bold tracking-[0.15em] text-white uppercase">Banner Config</span>
                                </div>
                                <div
                                    className="text-gray-500 hover:text-white cursor-pointer transition-colors p-1"
                                    onClick={() => setIsBannerConfigOpen(false)}
                                >
                                    <X className="w-3.5 h-3.5" />
                                </div>
                            </div>

                            {/* Scrollable Body */}
                            <div
                                className="p-3.5 cursor-default overflow-y-auto flex-1 min-h-0 space-y-3"
                                onPointerDown={(e) => e.stopPropagation()}
                                onWheel={(e) => e.stopPropagation()}
                            >
                                {/* Banner Type card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Megaphone className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Banner</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => setBannerType('text')}
                                            className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${bannerType === 'text'
                                                ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Text
                                        </button>
                                        <button
                                            onClick={() => setBannerType('image')}
                                            className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${bannerType === 'image'
                                                ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Image
                                        </button>
                                    </div>
                                </div>

                                {/* Content Section cover both Text and Image */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    {bannerType === 'text' ? (
                                        <>
                                            <div className="flex items-center gap-2">
                                                <Pencil className="w-3.5 h-3.5 text-neon-green" />
                                                <span className="text-[11px] font-bold text-white">Content</span>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Description</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={bannerDescription}
                                                        onChange={(e) => setBannerDescription(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none"
                                                    />
                                                    <Pencil className="w-3 h-3 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Button label</label>
                                                <input
                                                    type="text"
                                                    value={bannerButtonLabel}
                                                    onChange={(e) => setBannerButtonLabel(e.target.value)}
                                                    className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-2">
                                                <Upload className="w-3.5 h-3.5 text-neon-green" />
                                                <span className="text-[11px] font-bold text-white">Upload</span>
                                            </div>
                                            <div className="space-y-2">
                                                {bannerImageUrl ? (
                                                    <div className="relative">
                                                        <img src={bannerImageUrl} className="w-full h-20 object-cover rounded-xl border border-white/10" alt="" />
                                                        <button onClick={() => setBannerImageUrl('')} className="absolute top-1.5 right-1.5 bg-black/60 p-1 rounded-lg"><X className="w-3 h-3 text-white" /></button>
                                                    </div>
                                                ) : (
                                                    <label className="w-full py-4 border border-dashed border-white/10 rounded-xl text-gray-500 hover:text-white transition-all flex flex-col items-center justify-center gap-2 cursor-pointer">
                                                        <Upload className="w-4 h-4" />
                                                        <span className="text-[10px] font-bold uppercase">Upload</span>
                                                        <input type="file" className="hidden" onChange={(e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) {
                                                                const reader = new FileReader();
                                                                reader.onload = (e) => setBannerImageUrl(e.target?.result as string);
                                                                reader.readAsDataURL(file);
                                                            }
                                                        }} />
                                                    </label>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Action Type card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Action</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button onClick={() => setBannerActionType('link')} className={`py-2 rounded-xl text-[10px] font-bold border ${bannerActionType === 'link' ? 'border-neon-green text-neon-green bg-transparent' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}>Link</button>
                                        <button onClick={() => setBannerActionType('form')} className={`py-2 rounded-xl text-[10px] font-bold border ${bannerActionType === 'form' ? 'border-neon-green text-neon-green bg-transparent' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}>Form</button>
                                    </div>
                                </div>

                                {bannerActionType === 'form' && (
                                    <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                        <div className="flex items-center gap-2">
                                            <Layout className="w-3.5 h-3.5 text-neon-green" />
                                            <span className="text-[11px] font-bold text-white">Form Details</span>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Headline</label>
                                            <input type="text" value={formHeadline} onChange={(e) => setFormHeadline(e.target.value)} className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Description</label>
                                            <textarea value={formDescription} onChange={(e) => setFormDescription(e.target.value)} className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none h-14 resize-none" />
                                        </div>
                                        <div className="border-t border-white/5 pt-3 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-bold text-white uppercase">Fields</span>
                                                <button onClick={() => setFormFields([...formFields, { id: Date.now(), name: '', type: 'Text', required: false }])} className="text-neon-green text-[9px] font-bold uppercase">+ Add</button>
                                            </div>
                                            <div className="space-y-2">
                                                {formFields.map((field, index) => (
                                                    <div key={field.id} className="bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-xl p-2.5 space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <input type="text" value={field.name} onChange={(e) => {
                                                                const newFields = [...formFields];
                                                                newFields[index].name = e.target.value;
                                                                setFormFields(newFields);
                                                            }} placeholder="Field name" className="flex-1 bg-transparent text-[10px] text-white focus:outline-none" />
                                                            <button onClick={() => setFormFields(formFields.filter((_, i) => i !== index))} className="text-gray-600 hover:text-red-400"><Trash2 className="w-3 h-3" /></button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Style Section card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Palette className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Style</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="bg-[#070B1A] border border-[#1E2745] rounded-lg p-2 text-center">
                                            <div className="text-[8px] text-gray-500 uppercase font-bold mb-1">Bg</div>
                                            <div className="w-4 h-4 rounded-sm bg-blue-500 mx-auto border border-white/10" />
                                        </div>
                                        <div className="bg-[#070B1A] border border-[#1E2745] rounded-lg p-2 text-center">
                                            <div className="text-[8px] text-gray-500 uppercase font-bold mb-1">Text</div>
                                            <div className="w-4 h-4 rounded-sm bg-white mx-auto border border-white/10" />
                                        </div>
                                        <div className="bg-[#070B1A] border border-[#1E2745] rounded-lg p-2 text-center">
                                            <div className="text-[8px] text-gray-500 uppercase font-bold mb-1">Btn</div>
                                            <div className="w-4 h-4 rounded-sm bg-neon-green mx-auto border border-white/10" />
                                        </div>
                                    </div>
                                </div>

                                {/* Placement card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Layout className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Placement</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button onClick={() => setBannerPlacement('top')} className={`py-2 rounded-xl text-[10px] font-bold border ${bannerPlacement === 'top' ? 'border-neon-green text-neon-green' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}>Top</button>
                                        <button onClick={() => setBannerPlacement('bottom')} className={`py-2 rounded-xl text-[10px] font-bold border ${bannerPlacement === 'bottom' ? 'border-neon-green text-neon-green' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}>Bottom</button>
                                    </div>
                                </div>

                                {/* Dismissible card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-[11px] font-bold text-white mb-0.5">Dismissible</div>
                                            <div className="text-[9px] text-gray-500 leading-tight">Close icon for element</div>
                                        </div>
                                        <button
                                            onClick={() => setBannerDismissible(!bannerDismissible)}
                                            className={`w-9 h-5 rounded-full transition-all relative ${bannerDismissible ? 'bg-neon-green' : 'bg-[#161B22]'}`}
                                        >
                                            <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${bannerDismissible ? 'right-0.5' : 'left-0.5'}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="flex items-center gap-2.5 px-4 py-3 border-t-[0.5px] border-[#1E2745] shrink-0">
                                <button className="flex items-center gap-1.5 text-gray-400 hover:text-white text-[10px] font-medium transition-colors">
                                    <RotateCcw className="w-3 h-3" />
                                    Reset
                                </button>
                                <button
                                    onClick={() => { setIsBannerPreviewOpen(true); setIsBannerConfigOpen(false); }}
                                    className="flex-1 flex items-center justify-center gap-2 bg-neon-green text-black py-2.5 rounded-xl text-[11px] font-bold hover:bg-neon-green/90 transition-colors"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Add to page
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 5.5 Badge Config Popup */}
                <AnimatePresence>
                    {isBadgeConfigOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.05}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[35%] left-1/2 w-[90%] md:w-[320px] max-h-[65%] bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-2xl shadow-2xl overflow-hidden z-[90] cursor-grab active:cursor-grabbing hover:border-neon-green/30 transition-colors flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-3.5 py-2.5 border-b-[0.5px] border-[#1E2745] shrink-0">
                                <div className="flex items-center gap-2">
                                    <GripVertical className="w-3 h-3 text-gray-500" />
                                    <span className="text-[9px] font-bold tracking-[0.15em] text-white uppercase">Badge Config</span>
                                </div>
                                <div
                                    className="text-gray-500 hover:text-white cursor-pointer transition-colors p-1"
                                    onClick={() => setIsBadgeConfigOpen(false)}
                                >
                                    <X className="w-3.5 h-3.5" />
                                </div>
                            </div>

                            {/* Scrollable Body */}
                            <div
                                className="p-3.5 cursor-default overflow-y-auto flex-1 min-h-0 space-y-3"
                                onPointerDown={(e) => e.stopPropagation()}
                                onWheel={(e) => e.stopPropagation()}
                            >
                                {/* Attachment Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-xl p-3 mb-3">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <Link2 className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Attachment</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setBadgeAttachment('corner')}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-all ${badgeAttachment === 'corner'
                                                ? 'bg-transparent border border-neon-green text-neon-green relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Screen Corner
                                        </button>
                                        <button
                                            onClick={() => setBadgeAttachment('element')}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-all ${badgeAttachment === 'element'
                                                ? 'bg-transparent border border-neon-green text-neon-green relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Element
                                        </button>
                                    </div>
                                    {badgeAttachment === 'element' && (
                                        <button className="w-full bg-white text-black py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                                            <Navigation className="w-4 h-4 rotate-45" />
                                            Select Element
                                        </button>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-xl p-3 mb-3">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <Pencil className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Content</span>
                                    </div>
                                    <div className="flex gap-2 mb-3">
                                        <button
                                            onClick={() => setBadgeContentType('text')}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-all ${badgeContentType === 'text'
                                                ? 'bg-transparent border border-neon-green text-neon-green relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Text
                                        </button>
                                        <button
                                            onClick={() => setBadgeContentType('image')}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-all ${badgeContentType === 'image'
                                                ? 'bg-transparent border border-neon-green text-neon-green relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Image
                                        </button>
                                    </div>

                                    {badgeContentType === 'text' ? (
                                        <>
                                            {/* Badge text */}
                                            <div className="mb-2.5">
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Badge text</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={badgeText}
                                                        onChange={(e) => setBadgeText(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none focus:border-white/30 pr-8"
                                                    />
                                                    <Pencil className="w-3 h-3 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </div>

                                            {/* Shape */}
                                            <div className="mb-3">
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Shape</label>
                                                <div className="flex gap-2">
                                                    {['Round', 'Pill', 'Square'].map((shape) => (
                                                        <button
                                                            key={shape}
                                                            onClick={() => setBadgeShape(shape.toLowerCase() as any)}
                                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-medium transition-all ${badgeShape === shape.toLowerCase()
                                                                ? 'bg-transparent border border-neon-green text-neon-green relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                                : 'bg-[#070B1A] border border-[#1E2745] text-gray-400 hover:text-white'
                                                                }`}
                                                        >
                                                            {shape}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Style grid */}
                                            <div className="grid grid-cols-2 gap-3 mb-1">
                                                <div>
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Bg</label>
                                                    <div className="flex items-center gap-1.5 bg-[#070B1A] border border-[#1E2745] rounded-lg px-2 py-1.5">
                                                        <div className="w-3.5 h-3.5 rounded-sm border border-white/10" style={{ backgroundColor: badgeBgColor }} />
                                                        <span className="text-[9px] text-gray-400 font-mono uppercase">{badgeBgColor.substring(0, 4)}</span>
                                                        <input type="color" value={badgeBgColor} onChange={(e) => setBadgeBgColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Text</label>
                                                    <div className="flex items-center gap-1.5 bg-[#070B1A] border border-[#1E2745] rounded-lg px-2 py-1.5">
                                                        <div className="w-3.5 h-3.5 rounded-sm border border-white/10" style={{ backgroundColor: badgeTextColor }} />
                                                        <span className="text-[9px] text-gray-400 font-mono uppercase">{badgeTextColor.substring(0, 4)}</span>
                                                        <input type="color" value={badgeTextColor} onChange={(e) => setBadgeTextColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="mb-2">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Upload</label>
                                            <label className="w-full py-3 border border-dashed border-white/20 rounded-xl text-gray-400 hover:border-white/40 hover:text-white transition-all flex flex-col items-center justify-center gap-1 cursor-pointer">
                                                <Upload className="w-4 h-4" />
                                                <span className="text-[9px]">Click to upload</span>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            const reader = new FileReader();
                                                            reader.onload = (e) => setBadgeImageUrl(e.target?.result as string);
                                                            reader.readAsDataURL(file);
                                                        }
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>

                                <div
                                    className="p-3.5 cursor-default overflow-y-auto flex-1 min-h-0 space-y-3"
                                    onPointerDown={(e) => e.stopPropagation()}
                                    onWheel={(e) => e.stopPropagation()}
                                >
                                    {/* Position Section */}
                                    <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                        <div className="flex items-center gap-2">
                                            <CircleDot className="w-3.5 h-3.5 text-neon-green" />
                                            <span className="text-[11px] font-bold text-white">Placement</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                { label: 'TOP LEFT', value: 'top-left' },
                                                { label: 'TOP RIGHT', value: 'top-right' },
                                                { label: 'BOTTOM LEFT', value: 'bottom-left' },
                                                { label: 'BOTTOM RIGHT', value: 'bottom-right' }
                                            ].map((pos) => (
                                                <button
                                                    key={pos.value}
                                                    onClick={() => setBadgePosition(pos.value as any)}
                                                    className={`py-2 rounded-xl text-[9px] font-bold tracking-wider transition-all relative border ${badgePosition === pos.value
                                                        ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full'
                                                        : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                        }`}
                                                >
                                                    {pos.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Offset Section */}
                                    <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                        <div className="flex items-center gap-2">
                                            <SlidersHorizontal className="w-3.5 h-3.5 text-neon-green" />
                                            <span className="text-[11px] font-bold text-white">Offset</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Edge distance</span>
                                                <span className="text-[10px] font-bold text-neon-green">{badgeOffset}px</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="50"
                                                value={badgeOffset}
                                                onChange={(e) => setBadgeOffset(parseInt(e.target.value))}
                                                className="w-full h-1 bg-[#05070C] rounded-lg appearance-none cursor-pointer accent-neon-green"
                                            />
                                        </div>
                                    </div>

                                    {/* Action Type Section */}
                                    <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5 text-neon-green" />
                                            <span className="text-[11px] font-bold text-white">Action</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                onClick={() => setBadgeActionType('link')}
                                                className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${badgeActionType === 'link' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}
                                            >
                                                Link
                                            </button>
                                            <button
                                                onClick={() => setBadgeActionType('form')}
                                                className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${badgeActionType === 'form' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'}`}
                                            >
                                                Form
                                            </button>
                                        </div>

                                        {badgeActionType === 'link' ? (
                                            <div className="space-y-1.5 pt-1">
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Link</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={badgeLink}
                                                        onChange={(e) => setBadgeLink(e.target.value)}
                                                        placeholder="URL"
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none focus:border-white/10 pr-8"
                                                    />
                                                    <Pencil className="w-3 h-3 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="border-t border-white/5 pt-3 mt-3 space-y-3">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Layout className="w-3.5 h-3.5 text-neon-green" />
                                                    <span className="text-[11px] font-bold text-white">Form Details</span>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Headline</label>
                                                    <input
                                                        type="text"
                                                        value={badgeFormHeadline}
                                                        onChange={(e) => setBadgeFormHeadline(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Description</label>
                                                    <textarea
                                                        value={badgeFormDescription}
                                                        onChange={(e) => setBadgeFormDescription(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none h-14 resize-none"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="space-y-1.5">
                                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Button</label>
                                                        <input
                                                            type="text"
                                                            value={badgeFormSubmitText}
                                                            onChange={(e) => setBadgeFormSubmitText(e.target.value)}
                                                            className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">API</label>
                                                        <input
                                                            type="text"
                                                            value={badgeFormApiEndpoint}
                                                            onChange={(e) => setBadgeFormApiEndpoint(e.target.value)}
                                                            className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Dismissible Section */}
                                    <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-[11px] font-bold text-white mb-0.5">Dismissible</div>
                                                <div className="text-[9px] text-gray-500 leading-tight">Allow closing the badge</div>
                                            </div>
                                            <button
                                                onClick={() => setBadgeDismissible(!badgeDismissible)}
                                                className={`w-9 h-5 rounded-full transition-all relative ${badgeDismissible ? 'bg-neon-green' : 'bg-[#161B22]'}`}
                                            >
                                                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${badgeDismissible ? 'right-0.5' : 'left-0.5'}`} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="flex items-center gap-2.5 px-3.5 py-3 border-t-[0.5px] border-[#1E2745] shrink-0">
                                <button className="flex items-center gap-1.5 text-gray-400 hover:text-white text-[10px] font-medium transition-colors">
                                    <RotateCcw className="w-3 h-3" />
                                    Reset
                                </button>
                                <button
                                    onClick={() => { setIsBadgePreviewOpen(true); setIsBadgeConfigOpen(false); }}
                                    className="flex-1 flex items-center justify-center gap-2 bg-neon-green text-black py-2.5 rounded-xl text-[11px] font-bold hover:bg-neon-green/90 transition-colors"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Launch Badge
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 5.6 FAB Config Popup */}
                <AnimatePresence>
                    {isFABConfigOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.05}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[35%] left-1/2 w-[90%] md:w-[320px] max-h-[65%] bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-3xl shadow-2xl overflow-hidden z-[90] cursor-grab active:cursor-grabbing hover:border-neon-green/30 transition-colors flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/5 shrink-0">
                                <div className="flex items-center gap-2">
                                    <GripVertical className="w-3 h-3 text-gray-500" />
                                    <span className="text-[9px] font-bold tracking-[0.15em] text-white uppercase">FAB CONFIG</span>
                                </div>
                                <div
                                    className="text-gray-500 hover:text-white cursor-pointer transition-colors p-1"
                                    onClick={() => setIsFABConfigOpen(false)}
                                >
                                    <X className="w-3.5 h-3.5" />
                                </div>
                            </div>

                            {/* Scrollable Body */}
                            <div
                                className="p-3.5 cursor-default overflow-y-auto flex-1 min-h-0 space-y-3"
                                onPointerDown={(e) => e.stopPropagation()}
                                onWheel={(e) => e.stopPropagation()}
                            >
                                {/* Mission Info Card */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2">
                                    <div className="text-xl">🎯</div>
                                    <div className="text-[11px] font-bold text-white uppercase tracking-wider">CREATE DRAGGABLE BUTTON</div>
                                    <div className="text-[10px] text-gray-400">Launch it, then drag anywhere!</div>
                                </div>

                                {/* Behavior Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Navigation className="w-3.5 h-3.5 text-neon-green rotate-45" />
                                        <span className="text-[11px] font-bold text-white">Behavior</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => setFABBehavior('fixed')}
                                            className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-[10px] font-bold transition-all relative border ${fabBehavior === 'fixed' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            📌 Fixed
                                        </button>
                                        <button
                                            onClick={() => setFABBehavior('scroll')}
                                            className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-[10px] font-bold transition-all relative border ${fabBehavior === 'scroll' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            📍 Scroll
                                        </button>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Pencil className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Content</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => setFABContentType('text')}
                                            className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${fabContentType === 'text' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Text
                                        </button>
                                        <button
                                            onClick={() => setFABContentType('icon')}
                                            className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border ${fabContentType === 'icon' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Icon
                                        </button>
                                    </div>

                                    {fabContentType === 'text' && (
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Button text</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={fabLabel}
                                                    onChange={(e) => setFABLabel(e.target.value)}
                                                    className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[11px] text-white focus:outline-none focus:border-white/10 uppercase font-bold pr-8"
                                                />
                                                <Pencil className="w-3 h-3 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2" />
                                            </div>
                                        </div>
                                    )}

                                    {fabContentType === 'icon' && (
                                        <div className="space-y-2">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Select Icon</label>
                                            <div className="flex flex-wrap gap-2">
                                                {[
                                                    { name: 'Plus', icon: Plus },
                                                    { name: 'MessageSquare', icon: MessageSquare },
                                                    { name: 'Heart', icon: Heart },
                                                    { name: 'HelpCircle', icon: HelpCircle },
                                                    { name: 'Sparkles', icon: Sparkles }
                                                ].map((item) => (
                                                    <button
                                                        key={item.name}
                                                        onClick={() => setFABIconName(item.name as any)}
                                                        className={`w-9 h-9 rounded-lg border transition-all flex items-center justify-center ${fabIconName === item.name
                                                            ? 'bg-neon-green/10 border-neon-green text-neon-green'
                                                            : 'bg-[#05070C] border-white/5 text-gray-500 hover:text-white hover:border-white/10'
                                                            }`}
                                                    >
                                                        <item.icon className="w-4 h-4" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Style Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Palette className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Style</span>
                                    </div>

                                    {/* Shape */}
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Shape</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { id: 'round', label: 'Round' },
                                                { id: 'pill', label: 'Pill' },
                                                { id: 'square', label: 'Square', icon: Pencil }
                                            ].map((s) => (
                                                <button
                                                    key={s.id}
                                                    onClick={() => setFABShape(s.id as any)}
                                                    className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border flex items-center justify-center gap-1.5 ${fabShape === s.id ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                        }`}
                                                >
                                                    {s.label}
                                                    {s.icon && <s.icon className="w-2.5 h-2.5 text-gray-600" />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Size */}
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Size</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { id: 'small', label: 'Small' },
                                                { id: 'medium', label: 'Medium' },
                                                { id: 'large', label: 'Large', icon: Pencil }
                                            ].map((sz) => (
                                                <button
                                                    key={sz.id}
                                                    onClick={() => setFABSize(sz.id as any)}
                                                    className={`py-2 rounded-xl text-[10px] font-bold transition-all relative border flex items-center justify-center gap-1.5 ${fabSize === sz.id ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-[#1E2745] text-gray-500 bg-[#070B1A]'
                                                        }`}
                                                >
                                                    {sz.label}
                                                    {sz.icon && <sz.icon className="w-2.5 h-2.5 text-gray-600" />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Colors */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Background</label>
                                            <div className="flex items-center gap-2 bg-[#070B1A] border border-[#1E2745] rounded-lg px-2 py-2 relative">
                                                <div
                                                    className="w-4 h-4 rounded-sm border border-[#1E2745]"
                                                    style={{ backgroundColor: fabBgColor }}
                                                />
                                                <span className="text-[10px] text-white font-mono uppercase">{fabBgColor}</span>
                                                <Pencil className="w-2.5 h-2.5 text-gray-600 ml-auto" />
                                                <input type="color" value={fabBgColor} onChange={(e) => setFABBgColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Text color</label>
                                            <div className="flex items-center gap-2 bg-[#070B1A] border border-[#1E2745] rounded-lg px-2 py-2 relative">
                                                <div
                                                    className="w-4 h-4 rounded-sm border border-[#1E2745]"
                                                    style={{ backgroundColor: fabTextColor }}
                                                />
                                                <span className="text-[10px] text-white font-mono uppercase">{fabTextColor}</span>
                                                <Pencil className="w-2.5 h-2.5 text-gray-600 ml-auto" />
                                                <input type="color" value={fabTextColor} onChange={(e) => setFABTextColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Type Section */}
                                <div className="bg-[#1E2745] border-[0.5px] border-[#1E2745] rounded-2xl p-3.5 space-y-3.5">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-3.5 h-3.5 text-neon-green" />
                                        <span className="text-[11px] font-bold text-white">Action Type</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-1">
                                        <button
                                            onClick={() => setFABActionType('link')}
                                            className={`py-1.5 rounded-lg text-[10px] font-bold transition-all relative border ${fabActionType === 'link' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Link
                                        </button>
                                        <button
                                            onClick={() => setFABActionType('form')}
                                            className={`py-1.5 rounded-lg text-[10px] font-bold transition-all relative border ${fabActionType === 'form' ? 'border-neon-green text-neon-green bg-transparent relative after:content-[""] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:bg-neon-green after:rounded-full' : 'border-white/5 text-gray-500 bg-[#05070C]'
                                                }`}
                                        >
                                            Form
                                        </button>
                                    </div>

                                    {fabActionType === 'link' ? (
                                        <div className="mt-2 text-left">
                                            <label className="text-[9px] text-gray-400 uppercase tracking-wider font-bold block mb-1">Link</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={fabLink}
                                                    onChange={(e) => setFABLink(e.target.value)}
                                                    placeholder="URL"
                                                    className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[10px] text-white placeholder-gray-700 focus:outline-none focus:border-white/10 transition-colors pr-8"
                                                />
                                                <Pencil className="w-3 h-3 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="border-t border-white/5 pt-3 mt-3 space-y-3">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Layout className="w-3.5 h-3.5 text-neon-green" />
                                                <span className="text-[11px] font-bold text-white">Form Details</span>
                                            </div>
                                            <div>
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Headline</label>
                                                <input
                                                    type="text"
                                                    value={fabFormHeadline}
                                                    onChange={(e) => setFABFormHeadline(e.target.value)}
                                                    className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[10px] text-white focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Description</label>
                                                <textarea
                                                    value={fabFormDescription}
                                                    onChange={(e) => setFABFormDescription(e.target.value)}
                                                    className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[10px] text-white focus:outline-none h-14 resize-none"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div>
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">Button</label>
                                                    <input
                                                        type="text"
                                                        value={fabFormSubmitText}
                                                        onChange={(e) => setFABFormSubmitText(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[10px] text-white"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[9px] text-gray-400 uppercase tracking-wider mb-1 block">API</label>
                                                    <input
                                                        type="text"
                                                        value={fabFormApiEndpoint}
                                                        onChange={(e) => setFABFormApiEndpoint(e.target.value)}
                                                        className="w-full bg-[#070B1A] border border-[#1E2745] rounded-lg px-3 py-2 text-[10px] text-white"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Footer Actions */}
                            <div className="flex items-center justify-between px-4 py-3.5 border-t border-white/5 shrink-0 bg-[#05070C]">
                                <button
                                    className="flex items-center gap-1.5 text-gray-500 hover:text-white text-[9px] font-bold transition-colors uppercase tracking-[0.15em]"
                                    onClick={() => { }}
                                >
                                    <RotateCcw className="w-3.5 h-3.5" />
                                    Reset
                                </button>
                                <button
                                    onClick={() => { setIsFABPreviewOpen(true); setIsFABConfigOpen(false); }}
                                    className="px-5 py-2.5 bg-neon-green text-black rounded-xl text-[11px] font-bold hover:bg-neon-green/90 transition-all flex items-center gap-1.5 shadow-xl shadow-neon-green/10"
                                >
                                    <Plus className="w-3.5 h-3.5" />
                                    Add to page
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 5.7 Wizard Config Popup */}
                <AnimatePresence>
                    {isWizardConfigOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.05}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[35%] left-1/2 w-[90%] md:w-[320px] max-h-[70%] bg-[#070B1A] border-[0.5px] border-[#1E2745] rounded-3xl shadow-2xl overflow-hidden z-[90] cursor-grab active:cursor-grabbing hover:border-neon-green/30 transition-colors flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
                                <div className="flex items-center gap-2">
                                    <Wand2 className="w-3.5 h-3.5 text-neon-green" />
                                    <span className="text-xs font-semibold text-white">Wizard setting</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
                                        <EyeOff className="w-3.5 h-3.5" />
                                    </div>
                                    <Minus className="w-3.5 h-3.5 text-gray-500 hover:text-white cursor-pointer" />
                                    <X
                                        className="w-3.5 h-3.5 text-gray-500 hover:text-white cursor-pointer transition-colors"
                                        onClick={() => setIsWizardConfigOpen(false)}
                                    />
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="px-4 pt-4">
                                <div className="bg-white/5 rounded-xl p-1 flex items-center gap-1">
                                    <button
                                        onClick={() => setWizardActiveTab('steps')}
                                        className={`flex-1 py-4 rounded-lg text-xs font-bold transition-all ${wizardActiveTab === 'steps' ? 'bg-neon-green text-black' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        Steps
                                    </button>
                                    <button
                                        onClick={() => setWizardActiveTab('appearance')}
                                        className={`flex-1 py-4 rounded-lg text-xs font-bold transition-all ${wizardActiveTab === 'appearance' ? 'bg-neon-green text-black' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        Appearance
                                    </button>
                                    <button
                                        onClick={() => setWizardActiveTab('setup')}
                                        className={`flex-1 py-4 rounded-lg text-xs font-bold transition-all ${wizardActiveTab === 'setup' ? 'bg-neon-green text-black' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        Setup
                                    </button>
                                </div>
                            </div>

                            {/* Scrollable Body */}
                            <div
                                className="p-4 cursor-default overflow-y-auto flex-1 space-y-4 min-h-0"
                                onPointerDown={(e) => e.stopPropagation()}
                                onWheel={(e) => e.stopPropagation()}
                            >
                                {wizardActiveTab === 'steps' && (
                                    <>
                                        {/* Wizard steps card */}
                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Wand2 className="w-3.5 h-3.5 text-neon-green" />
                                                    <span className="text-xs font-bold text-white">Wizard steps</span>
                                                </div>
                                                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                            </div>

                                            <div className="space-y-3">
                                                {wizardSteps.map(step => (
                                                    <div key={step.id} className="flex gap-1 border border-neon-green rounded-xl overflow-hidden h-12">
                                                        <div className="flex-[4] bg-[#070B1A] flex items-center px-3 border-r border-neon-green justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <Layers className="w-3.5 h-3.5 text-neon-green" />
                                                                <span className="text-[11px] text-white font-medium">{step.type}</span>
                                                            </div>
                                                            <ChevronDown className="w-3 h-3 text-gray-500" />
                                                        </div>
                                                        <div className="flex-[6] bg-[#070B1A] flex items-center px-3 justify-between">
                                                            <input
                                                                type="text"
                                                                value={step.title}
                                                                onChange={() => { }}
                                                                className="bg-transparent border-none outline-none text-[11px] text-white w-full pr-6"
                                                            />
                                                            <Trash2 className="w-3.5 h-3.5 text-red-500/50 hover:text-red-500 transition-colors" />
                                                        </div>
                                                    </div>
                                                ))}
                                                <button
                                                    onClick={() => { }}
                                                    className="w-full py-2.5 rounded-xl border border-neon-green text-neon-green text-[11px] font-bold flex items-center justify-center gap-2 hover:bg-neon-green/5 transition-all"
                                                >
                                                    <Plus className="w-3.5 h-3.5" />
                                                    Add steps
                                                </button>
                                            </div>
                                        </div>

                                        {/* Create card details card */}
                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Layers className="w-3.5 h-3.5 text-neon-green" />
                                                    <span className="text-xs font-bold text-white">Create card</span>
                                                </div>
                                                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] text-gray-400 font-medium ml-1">Step title</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="e.g Try new feature"
                                                        className="w-full bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 py-3.5 text-[11px] text-gray-500 pr-10"
                                                        readOnly
                                                    />
                                                    <Pencil className="w-3.5 h-3.5 text-gray-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Steps labels card */}
                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Layers className="w-3.5 h-3.5 text-neon-green" />
                                                    <span className="text-xs font-bold text-white">Steps labels</span>
                                                </div>
                                                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                            </div>
                                            <div className="space-y-3">
                                                {wizardLabels.map(label => (
                                                    <div key={label.id} className="flex gap-2">
                                                        <button className="flex items-center gap-2 bg-[#070B1A] border border-[#1E2540] rounded-xl px-3 py-2 text-[10px] text-white font-bold border-dashed border-white/20">
                                                            <Upload className="w-3 h-3" />
                                                            Icon
                                                        </button>
                                                        <input
                                                            type="text"
                                                            value={label.name}
                                                            onChange={() => { }}
                                                            className="flex-1 bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 text-[11px] text-white"
                                                        />
                                                        <button className="p-2.5 bg-red-500/10 text-red-500 rounded-xl border border-white/5 hover:bg-red-500 hover:text-white transition-all">
                                                            <Trash2 className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                ))}
                                                <button
                                                    onClick={() => { }}
                                                    className="w-full py-2.5 rounded-xl border border-neon-green text-neon-green text-[11px] font-bold flex items-center justify-center gap-2 hover:bg-neon-green/5 transition-all"
                                                >
                                                    <Plus className="w-3.5 h-3.5" />
                                                    Add labels
                                                </button>
                                            </div>
                                        </div>

                                        {/* Cards 1 details card */}
                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Layers className="w-3.5 h-3.5 text-neon-green" />
                                                    <span className="text-xs font-bold text-white">Cards 1</span>
                                                </div>
                                                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                            </div>
                                            <div className="space-y-4">
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] text-gray-400 font-medium ml-1">Action title</label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            placeholder="e.g Get started"
                                                            className="w-full bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 py-3.5 text-[11px] text-gray-500 pr-10"
                                                            readOnly
                                                        />
                                                        <Pencil className="w-3.5 h-3.5 text-gray-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] text-gray-400 font-medium ml-1">Action description</label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            placeholder="e.g Limited time offer"
                                                            className="w-full bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 py-3.5 text-[11px] text-gray-500 pr-10"
                                                            readOnly
                                                        />
                                                        <Pencil className="w-3.5 h-3.5 text-gray-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <div className="flex-[3] space-y-1.5">
                                                        <label className="text-[10px] text-gray-400 font-medium ml-1">Belongs to tab</label>
                                                        <div className="bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 py-3 flex items-center justify-between text-[11px] text-white">
                                                            None
                                                            <ChevronDown className="w-3 h-3 text-gray-500" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 space-y-1.5">
                                                        <label className="text-[10px] text-gray-400 font-medium ml-1">Icon</label>
                                                        <button className="w-full h-[46px] bg-[#070B1A] border border-[#1E2540] rounded-xl flex items-center justify-center text-gray-400 border-dashed border-white/20">
                                                            <Upload className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <div className="flex-[3] space-y-1.5">
                                                        <label className="text-[10px] text-gray-400 font-medium ml-1">Go to</label>
                                                        <div className="bg-[#070B1A] border border-[#1E2540] rounded-xl px-4 py-3 flex items-center justify-between text-[11px] text-white">
                                                            None
                                                            <ChevronDown className="w-3 h-3 text-gray-500" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 space-y-1.5">
                                                        <label className="text-[10px] text-gray-400 font-medium ml-1">Delete</label>
                                                        <button className="w-full h-[46px] bg-[#070B1A] border border-[#1E2540] rounded-xl flex items-center justify-center text-red-500/50 hover:text-red-500 transition-colors">
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => { }}
                                                    className="w-full py-2.5 rounded-xl border border-neon-green text-neon-green text-[11px] font-bold flex items-center justify-center gap-2 hover:bg-neon-green/5 transition-all mt-2"
                                                >
                                                    <Plus className="w-3.5 h-3.5" />
                                                    Add Card
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {wizardActiveTab === 'appearance' && (
                                    <>
                                        {/* Wizard colors card */}
                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Palette className="w-3.5 h-3.5 text-neon-green" />
                                                    <span className="text-xs font-bold text-white">Wizard colors</span>
                                                </div>
                                                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] text-gray-400 font-medium ml-1">Background</label>
                                                    <div className="bg-[#070B1A] border border-[#1E2540] rounded-xl px-3 py-3 flex items-center gap-3">
                                                        <div className="w-4 h-4 rounded bg-white border border-white/10" />
                                                        <span className="text-[10px] text-white font-mono uppercase font-bold tracking-wider">#FFFFFF</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] text-gray-400 font-medium ml-1">Primary text</label>
                                                    <div className="bg-[#070B1A] border border-[#1E2540] rounded-xl px-3 py-3 flex items-center gap-3">
                                                        <div className="w-4 h-4 rounded bg-[#1A1A1A] border border-white/10" />
                                                        <span className="text-[10px] text-white font-mono uppercase font-bold tracking-wider">#1A1A1A</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] text-gray-400 font-medium ml-1">Button color</label>
                                                    <div className="bg-[#070B1A] border border-[#1E2540] rounded-xl px-3 py-3 flex items-center gap-3">
                                                        <div className="w-4 h-4 rounded bg-[#3B82F6]" />
                                                        <span className="text-[10px] text-white font-mono uppercase font-bold tracking-wider">#3B82F6</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] text-gray-400 font-medium ml-1">Secondary text</label>
                                                    <div className="bg-[#070B1A] border border-[#1E2540] rounded-xl px-3 py-3 flex items-center gap-3">
                                                        <div className="w-4 h-4 rounded bg-[#6B7280]" />
                                                        <span className="text-[10px] text-white font-mono uppercase font-bold tracking-wider">#6B7280</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] text-gray-400 font-medium ml-1">Button text</label>
                                                    <div className="bg-[#070B1A] border border-[#1E2540] rounded-xl px-3 py-3 flex items-center gap-3">
                                                        <div className="w-4 h-4 rounded bg-white border border-white/10" />
                                                        <span className="text-[10px] text-white font-mono uppercase font-bold tracking-wider">#FFFFFF</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] text-gray-400 font-medium ml-1">Border color</label>
                                                    <div className="bg-[#070B1A] border border-[#1E2540] rounded-xl px-3 py-3 flex items-center gap-3">
                                                        <div className="w-4 h-4 rounded bg-[#D1D5DB]" />
                                                        <span className="text-[10px] text-white font-mono uppercase font-bold tracking-wider">#D1D5DB</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {wizardActiveTab === 'setup' && (
                                    <>
                                        {/* Trigger delay card */}
                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4 space-y-5">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-3.5 h-3.5 text-neon-green" />
                                                    <span className="text-xs font-bold text-white">Trigger wizard after</span>
                                                </div>
                                                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                            </div>
                                            <div className="space-y-5">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[11px] text-white font-medium">Delay</span>
                                                    <div className="bg-neon-green/10 border border-neon-green text-neon-green px-3 py-1 rounded-lg text-[11px] font-bold">
                                                        0 s
                                                    </div>
                                                </div>
                                                <div className="h-1.5 bg-white/5 rounded-full relative">
                                                    <div className="absolute top-0 left-0 h-full w-[0%] bg-neon-green rounded-full" />
                                                    <div className="absolute top-1/2 -translate-y-1/2 left-[0%] w-4 h-4 bg-neon-green rounded-full shadow-[0_0_10px_rgba(20,255,0,0.5)]" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Visibility card */}
                                        <div className="bg-[#111821] border border-white/5 rounded-2xl p-4 space-y-5">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Eye className="w-3.5 h-3.5 text-neon-green" />
                                                    <span className="text-xs font-bold text-white">Visibility</span>
                                                </div>
                                                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                            </div>
                                            <div className="grid grid-cols-3 gap-2">
                                                <button className="flex flex-col items-center justify-center gap-2 bg-[#070B1A] border border-neon-green text-neon-green py-3 rounded-xl transition-all">
                                                    <Monitor className="w-4 h-4" />
                                                    <div className="flex items-center gap-1">
                                                        <Eye className="w-2.5 h-2.5" />
                                                        <span className="text-[9px] font-bold">Desktop</span>
                                                    </div>
                                                </button>
                                                <button className="flex flex-col items-center justify-center gap-2 bg-[#070B1A] border border-neon-green text-neon-green py-3 rounded-xl transition-all">
                                                    <Tablet className="w-4 h-4" />
                                                    <div className="flex items-center gap-1">
                                                        <Eye className="w-2.5 h-2.5" />
                                                        <span className="text-[9px] font-bold">Tablet</span>
                                                    </div>
                                                </button>
                                                <button className="flex flex-col items-center justify-center gap-2 bg-[#070B1A] border border-neon-green text-neon-green py-3 rounded-xl transition-all">
                                                    <Smartphone className="w-4 h-4" />
                                                    <div className="flex items-center gap-1">
                                                        <Eye className="w-2.5 h-2.5" />
                                                        <span className="text-[9px] font-bold">Mobile</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Footer Actions */}
                            <div className="bg-[#070B1A] border-t border-white/10 px-4 py-4 mt-auto">
                                <div className="flex items-center gap-2">
                                    <button className="flex flex-col items-center justify-center gap-1 px-2 text-gray-500 hover:text-white transition-all">
                                        <RotateCcw className="w-4 h-4" />
                                        <span className="text-[9px] font-medium">Undo</span>
                                    </button>

                                    <div className="flex-1 flex items-center gap-2 ml-2">
                                        <button className="flex-1 flex items-center justify-center gap-2 bg-[#1E2532] text-white py-4.5 rounded-2xl text-[11px] font-bold hover:bg-[#2A3445] transition-all">
                                            <SaveIcon className="w-3.5 h-3.5 text-neon-green" />
                                            Save
                                        </button>
                                        <button
                                            onClick={() => { setIsWizardConfigOpen(false); }}
                                            className="flex-[1.5] flex items-center justify-center gap-2 bg-[#1E2532] text-white py-4.5 rounded-2xl text-[11px] font-bold hover:bg-[#2A3445] transition-all"
                                        >
                                            <Plus className="w-4 h-4 text-neon-green" />
                                            Add to page
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>


                {/* 4. Preview Modal - The actual injected modal preview (appears on webpage only) */}
                <AnimatePresence>
                    {isPreviewModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 top-0 bg-black/50 backdrop-blur-sm z-[45] flex items-center justify-center pointer-events-auto"
                            style={{ bottom: '140px' }} // Leave space for dock and status bar
                            onClick={() => setIsPreviewModalOpen(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="rounded-2xl p-8 w-[85%] max-w-[380px] shadow-2xl relative"
                                style={{ backgroundColor: modalBgColor }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsPreviewModalOpen(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Content */}
                                <div className="text-center">
                                    <h2
                                        className="text-2xl font-bold mb-3"
                                        style={{ color: modalTextColor }}
                                    >
                                        {modalHeadline}
                                    </h2>
                                    <p className="text-gray-500 mb-6">{modalDescription}</p>
                                    <button
                                        className="hover:opacity-90 text-white font-semibold py-3 px-12 rounded-lg transition-colors text-base"
                                        style={{ backgroundColor: modalButtonColor }}
                                    >
                                        {modalButtonLabel}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 6. Banner Preview - The actual injected banner (top or bottom of webpage) */}
                <AnimatePresence>
                    {isBannerPreviewOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: bannerPlacement === 'top' ? -50 : 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: bannerPlacement === 'top' ? -50 : 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className={`absolute left-0 right-0 z-[45] ${bannerPlacement === 'top' ? 'top-0' : 'bottom-[140px]'}`}
                            onClick={() => {
                                if (bannerType === 'image' && bannerActionType === 'form') {
                                    setIsBannerFormOpen(true);
                                }
                            }}
                        >
                            {/* Image Banner */}
                            {bannerType === 'image' && bannerImageUrl ? (
                                <div className="relative">
                                    <img
                                        src={bannerImageUrl}
                                        alt="Banner"
                                        className="w-full h-16 object-cover cursor-pointer"
                                    />
                                    {/* Dismiss Button */}
                                    {bannerDismissible && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setIsBannerPreviewOpen(false); }}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1 rounded-full transition-colors"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    )}
                                </div>
                            ) : (
                                /* Text Banner */
                                <div
                                    className="flex items-center justify-center gap-4 py-3 px-4"
                                    style={{ backgroundColor: bannerBgColor }}
                                >
                                    {/* Banner Text */}
                                    <span
                                        className="text-sm font-medium"
                                        style={{ color: bannerTextColor }}
                                    >
                                        {bannerDescription}
                                    </span>

                                    {/* Button - Opens form if action type is form, otherwise just a link */}
                                    <button
                                        onClick={() => {
                                            if (bannerActionType === 'form') {
                                                setIsBannerFormOpen(true);
                                            }
                                        }}
                                        className="px-4 py-1.5 rounded-md text-xs font-semibold transition-opacity hover:opacity-80"
                                        style={{
                                            backgroundColor: bannerButtonColor,
                                            color: bannerBgColor
                                        }}
                                    >
                                        {bannerButtonLabel}
                                    </button>

                                    {/* Dismiss Button */}
                                    {bannerDismissible && (
                                        <button
                                            onClick={() => setIsBannerPreviewOpen(false)}
                                            className="absolute right-4 opacity-70 hover:opacity-100 transition-opacity"
                                            style={{ color: bannerTextColor }}
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 8. Badge Preview - The actual injected badge */}
                <AnimatePresence>
                    {isBadgePreviewOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute z-[45] cursor-pointer shadow-lg transition-transform hover:scale-105 active:scale-95"
                            style={{
                                ...(() => {
                                    const offset = `${badgeOffset}px`;
                                    if (badgeAttachment === 'element') {
                                        return { top: '35%', left: '55%' }; // Mock position near "Shop" link
                                    }
                                    switch (badgePosition) {
                                        case 'top-left': return { top: offset, left: offset };
                                        case 'top-right': return { top: offset, right: offset };
                                        case 'bottom-left': return { bottom: `calc(140px + ${offset})`, left: offset };
                                        case 'bottom-right': return { bottom: `calc(140px + ${offset})`, right: offset };
                                        default: return { top: offset, right: offset };
                                    }
                                })(),
                            }}
                            onClick={() => {
                                if (badgeActionType === 'form') {
                                    setIsBadgeFormOpen(true);
                                } else if (badgeLink) {
                                    window.open(badgeLink, '_blank');
                                }
                            }}
                        >
                            <div className="relative group/badge">
                                {badgeContentType === 'image' && badgeImageUrl ? (
                                    <div className="relative">
                                        <img src={badgeImageUrl} alt="Badge" className="w-12 h-12 object-contain" />
                                        {badgeDismissible && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setIsBadgePreviewOpen(false); }}
                                                className="absolute -top-2 -right-2 bg-black/60 hover:bg-black/80 text-white p-0.5 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity"
                                            >
                                                <X className="w-2.5 h-2.5" />
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <div
                                        className={`flex items-center justify-center px-3 py-1 text-[10px] font-bold tracking-wider whitespace-nowrap min-w-[40px] ${badgeShape === 'round' ? 'rounded-full aspect-square' :
                                            badgeShape === 'pill' ? 'rounded-full' : 'rounded-sm'
                                            }`}
                                        style={{
                                            backgroundColor: badgeBgColor,
                                            color: badgeTextColor,
                                        }}
                                    >
                                        {badgeText}
                                        {badgeDismissible && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setIsBadgePreviewOpen(false); }}
                                                className="absolute -top-2 -right-2 bg-black/60 hover:bg-black/80 text-white p-0.5 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity"
                                            >
                                                <X className="w-2.5 h-2.5" />
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 7. Banner Form Popup - Opens when clicking banner button (if action type is form) */}
                <AnimatePresence>
                    {isBannerFormOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 top-0 bg-black/50 backdrop-blur-sm z-[46] flex items-center justify-center pointer-events-auto"
                            style={{ bottom: '140px' }}
                            onClick={() => setIsBannerFormOpen(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="bg-white rounded-2xl p-6 w-[85%] max-w-[360px] shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsBannerFormOpen(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Form Content */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">{formHeadline}</h2>
                                    <p className="text-gray-500 text-sm mb-5">{formDescription}</p>

                                    {/* Dynamic Form Fields */}
                                    <div className="space-y-3 mb-4">
                                        {formFields.map((field) => (
                                            <div key={field.id}>
                                                <label className="text-xs text-gray-600 font-medium mb-1 block">
                                                    {field.name} {field.required && <span className="text-red-500">*</span>}
                                                </label>
                                                {field.type === 'Textarea' ? (
                                                    <textarea
                                                        placeholder={`Enter ${field.name.toLowerCase()}`}
                                                        rows={3}
                                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                                                    />
                                                ) : (
                                                    <input
                                                        type={field.type.toLowerCase()}
                                                        placeholder={`Enter ${field.name.toLowerCase()}`}
                                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        onClick={() => {
                                            setIsBannerFormOpen(false);
                                        }}
                                        className="w-full py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                                        style={{ backgroundColor: bannerBgColor }}
                                    >
                                        {formSubmitText}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 9. Badge Form Popup - Opens when clicking badge (if action type is form) */}
                <AnimatePresence>
                    {isBadgeFormOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 top-0 bg-black/50 backdrop-blur-sm z-[46] flex items-center justify-center pointer-events-auto"
                            style={{ bottom: '140px' }}
                            onClick={() => setIsBadgeFormOpen(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="bg-white rounded-2xl p-6 w-[85%] max-w-[360px] shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsBadgeFormOpen(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Form Content */}
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">{badgeFormHeadline}</h2>
                                    <p className="text-gray-500 text-sm mb-5">{badgeFormDescription}</p>

                                    {/* Dynamic Form Fields */}
                                    <div className="space-y-3 mb-4">
                                        {badgeFormFields.map((field) => (
                                            <div key={field.id}>
                                                <label className="text-xs text-gray-600 font-medium mb-1 block">
                                                    {field.name} {field.required && <span className="text-red-500">*</span>}
                                                </label>
                                                <input
                                                    type={field.type.toLowerCase()}
                                                    placeholder={`Enter ${field.name.toLowerCase()}`}
                                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        onClick={() => {
                                            setIsBadgeFormOpen(false);
                                        }}
                                        className="w-full py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                                        style={{ backgroundColor: badgeBgColor }}
                                    >
                                        {badgeFormSubmitText}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 10. FAB Preview - The actual injected FAB */}
                <AnimatePresence>
                    {isFABPreviewOpen && (
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            dragElastic={0.1}
                            dragMomentum={false}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className={`absolute z-[45] cursor-grab active:cursor-grabbing shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 overflow-hidden`}
                            style={{
                                bottom: `calc(140px + ${fabOffset}px)`,
                                [fabPosition === 'bottom-left' ? 'left' : 'right']: `${fabOffset}px`,
                                backgroundColor: fabBgColor,
                                color: fabTextColor,
                                borderRadius: fabShape === 'round' ? '9999px' : fabShape === 'pill' ? '12px' : '0px',
                                // Fixed sizes for icons to ensure perfect shapes
                                width: fabContentType === 'icon' ? (
                                    fabSize === 'small' ? '44px' : fabSize === 'large' ? '72px' : '56px'
                                ) : 'auto',
                                height: fabContentType === 'icon' ? (
                                    fabSize === 'small' ? '44px' : fabSize === 'large' ? '72px' : '56px'
                                ) : 'auto',
                                padding: fabContentType === 'text' ? (
                                    fabSize === 'small' ? '8px 16px' : fabSize === 'large' ? '16px 32px' : '12px 24px'
                                ) : '0px',
                                minWidth: fabContentType === 'icon' ? 'auto' : (
                                    fabSize === 'small' ? '80px' : fabSize === 'large' ? '140px' : '110px'
                                ),
                            }}
                            onClick={() => {
                                if (fabActionType === 'form') {
                                    setIsFABFormOpen(true);
                                } else if (fabLink) {
                                    window.open(fabLink, '_blank');
                                }
                            }}
                        >
                            {fabContentType === 'icon' ? (
                                (() => {
                                    const icons = { Plus, MessageSquare, Heart, Sparkles, HelpCircle };
                                    const IconComp = (icons as any)[fabIconName] || MessageSquare;
                                    return <IconComp className={`${fabSize === 'small' ? 'w-5 h-5' : fabSize === 'large' ? 'w-7 h-7' : 'w-6 h-6'}`} />;
                                })()
                            ) : (
                                <span className={`font-bold whitespace-nowrap uppercase tracking-widest ${fabSize === 'small' ? 'text-xs' : fabSize === 'large' ? 'text-base' : 'text-sm'}`}>
                                    {fabLabel}
                                </span>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 11. FAB Form Popup - Opens when clicking FAB (if action type is form) */}
                <AnimatePresence>
                    {isFABFormOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 top-0 bg-black/50 backdrop-blur-sm z-[46] flex items-center justify-center pointer-events-auto"
                            style={{ bottom: '140px' }}
                            onClick={() => setIsFABFormOpen(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="bg-white rounded-[2rem] p-8 w-[85%] max-w-[400px] shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setIsFABFormOpen(false)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{fabFormHeadline}</h2>
                                        <p className="text-gray-500 text-sm leading-relaxed">{fabFormDescription}</p>
                                    </div>

                                    <div className="space-y-4">
                                        {fabFormFields.map((field) => (
                                            <div key={field.id} className="space-y-1.5">
                                                <label className="text-xs text-gray-700 font-bold uppercase tracking-wider">
                                                    {field.name} {field.required && <span className="text-red-500">*</span>}
                                                </label>
                                                {field.type === 'Textarea' ? (
                                                    <textarea
                                                        placeholder={`Enter ${field.name.toLowerCase()}`}
                                                        rows={3}
                                                        className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-neon-green transition-colors resize-none"
                                                    />
                                                ) : (
                                                    <input
                                                        type={field.type.toLowerCase()}
                                                        placeholder={`Enter ${field.name.toLowerCase()}`}
                                                        className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-neon-green transition-colors"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setIsFABFormOpen(false)}
                                        className="w-full py-5 rounded-2xl text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg"
                                        style={{ backgroundColor: fabBgColor }}
                                    >
                                        {fabFormSubmitText}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 12. Manage Config Modal */}
                <AnimatePresence>
                    {isManageConfigOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md z-[60]"
                            onClick={() => setIsManageConfigOpen(false)}
                        >
                            <motion.div
                                drag
                                dragConstraints={containerRef}
                                dragElastic={0.05}
                                dragMomentum={false}
                                initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                                exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute top-[35%] left-1/2 bg-[#070B1A] border border-[#1E2540] rounded-[2rem] w-full max-w-[340px] max-h-[65%] overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing flex flex-col z-[90]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                                    <div className="flex items-center gap-2.5">
                                        <GripVertical className="w-3.5 h-3.5 text-gray-600" />
                                        <h2 className="text-[9px] font-bold text-white tracking-[0.2em] uppercase">Manage Config</h2>
                                    </div>
                                    <button
                                        onClick={() => setIsManageConfigOpen(false)}
                                        className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="p-6 space-y-6">
                                    {/* Tabs */}
                                    <div className="bg-black/40 border border-white/5 rounded-xl p-1 flex items-center gap-1 overflow-x-auto no-scrollbar">
                                        {(['Clone', 'Modal', 'Banner', 'Badge', 'Fab'] as const).map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveManageTab(tab)}
                                                className={`flex-1 min-w-[65px] py-2 rounded-lg text-[10px] font-bold transition-all ${activeManageTab === tab
                                                    ? 'bg-white/10 text-neon-green ring-1 ring-neon-green/30 shadow-[0_0_10px_rgba(20,255,0,0.1)]'
                                                    : 'text-gray-500 hover:text-gray-300'
                                                    }`}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Summary Bar */}
                                    <div className="flex items-center justify-between px-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-base font-bold text-white uppercase italic tracking-tight">Saved 0</span>
                                        </div>
                                        <button className="px-4 py-1.5 rounded-full bg-neon-green/5 border border-neon-green/20 text-neon-green text-[10px] font-bold hover:bg-neon-green/10 transition-all uppercase tracking-wider">
                                            Delete all
                                        </button>
                                    </div>

                                    {/* Content Area - Empty State */}
                                    <div className="py-8 flex flex-col items-center justify-center text-center space-y-3 bg-white/[0.01] rounded-2xl border border-dashed border-white/5">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                            <Layout className="w-6 h-6 text-gray-700" strokeWidth={1} />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs font-medium">No {activeManageTab.toLowerCase()}s saved</p>
                                            <p className="text-[9px] text-gray-700 uppercase tracking-widest mt-1 font-bold">Empty Vault</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 3. Floating Control Bar (Dock) - Figma Design */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 w-auto max-w-[95vw] bg-[#0F141A] backdrop-blur-xl border border-[#1E2540] rounded-[2rem] py-3 px-5 flex items-center gap-4 shadow-2xl z-[70] overflow-visible"
                >
                    {/* Logo */}
                    <div className="flex items-center border-r border-white/10 pr-4">
                        <div className="w-8 h-8 rounded-lg bg-transparent flex items-center justify-center relative overflow-hidden">
                            <Image
                                src="/preta-dock-logo.png"
                                alt="Preta Logo"
                                width={24}
                                height={24}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Tools Main */}
                    <div className="flex items-center gap-3">
                        {[
                            { icon: CloneIcon, label: "Clone", active: isModalOpen || isInspecting, id: "clone-tool", onClick: () => { setIsModalOpen(!isModalOpen); setIsModalConfigOpen(false); setIsBannerConfigOpen(false); setIsBadgeConfigOpen(false); setIsFABConfigOpen(false); setIsInspectMenuOpen(false); } },
                            { icon: ModalIcon, label: "Modal", active: isModalConfigOpen, id: "modal-tool", onClick: () => { setIsModalConfigOpen(!isModalConfigOpen); setIsModalOpen(false); setIsBannerConfigOpen(false); setIsBadgeConfigOpen(false); setIsFABConfigOpen(false); setIsInspectMenuOpen(false); } },
                            { icon: Wand2, label: "Wizard", active: isWizardConfigOpen, id: "wizard-tool", onClick: () => { setIsWizardConfigOpen(!isWizardConfigOpen); setIsModalOpen(false); setIsModalConfigOpen(false); setIsBannerConfigOpen(false); setIsBadgeConfigOpen(false); setIsFABConfigOpen(false); setIsInspectMenuOpen(false); } },
                            { icon: Megaphone, label: "Banner", active: isBannerConfigOpen, id: "banner-tool", onClick: () => { setIsBannerConfigOpen(!isBannerConfigOpen); setIsModalOpen(false); setIsModalConfigOpen(false); setIsBadgeConfigOpen(false); setIsFABConfigOpen(false); setIsInspectMenuOpen(false); } },
                            { icon: BadgeIcon, label: "Badge", active: isBadgeConfigOpen, id: "badge-tool", onClick: () => { setIsBadgeConfigOpen(!isBadgeConfigOpen); setIsModalOpen(false); setIsModalConfigOpen(false); setIsBannerConfigOpen(false); setIsFABConfigOpen(false); setIsInspectMenuOpen(false); } },
                            { icon: FloatIcon, label: "Float", active: false, id: "float-tool", onClick: () => { } },
                            { icon: ImageIcon, label: "Image", active: false, id: "image-tool", onClick: () => { } },
                            { icon: RedirectIcon, label: "Redirect", active: false, id: "redirect-tool", onClick: () => { } },
                            { icon: SwapIcon, label: "Swap", active: false, id: "swap-tool", onClick: () => { } },
                            { icon: TextReplacementIcon, label: "Text", active: false, id: "text-tool", onClick: () => { } },
                            { icon: Eraser, label: "Eraser", active: false, id: "eraser-tool", onClick: () => { } }
                        ].map((tool, i) => (
                            <div key={i} onClick={tool.onClick} className="flex flex-col items-center gap-1 group cursor-pointer relative">
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${tool.active
                                    ? 'bg-white/10 text-neon-green'
                                    : 'bg-[#1E2732] text-[#9AA4BF] group-hover:text-white group-hover:bg-white/10'
                                    } ${
                                    // PULSE CUE: Pulse the Clone tool when in Step 1 (Idle) - ONLY MANUAL MODE
                                    !isAutoPlaying && !isModalOpen && !isInspecting && !isCloned && tool.id === 'clone-tool' ? 'animate-pulse ring-1 ring-neon-green/50' : ''
                                    }`}
                                >
                                    <tool.icon className="w-4 h-4" strokeWidth={1.5} />
                                </div>
                                <span className={`text-[9px] font-medium transition-colors capitalize ${tool.active ? 'text-neon-green' : 'text-gray-500 group-hover:text-white'
                                    }`}>{tool.label}</span>
                                {/* Active indicator dot */}
                                {tool.active && (
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-green" />
                                )}

                                {/* Tooltip for Step 1 - ONLY MANUAL MODE */}
                                {!isModalOpen && !isInspecting && !isCloned && tool.id === 'clone-tool' && !isAutoPlaying &&
                                    !isModalConfigOpen && !isBannerConfigOpen && !isBadgeConfigOpen && !isFABConfigOpen && !isManageConfigOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neon-green text-black text-[9px] font-bold px-2 py-1 rounded whitespace-nowrap arrow-bottom z-50 pointer-events-none"
                                        >
                                            Start Here
                                        </motion.div>
                                    )}
                            </div>
                        ))}
                    </div>

                    {/* Inspect Dropdown */}
                    <div className="relative">
                        <AnimatePresence>
                            {isInspectMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    className="absolute bottom-full left-0 mb-4 w-64 bg-[#070B1A] border border-[#1E2540] rounded-3xl shadow-2xl overflow-hidden z-50 p-2"
                                >
                                    <div className="flex flex-col">
                                        {[
                                            { icon: Palette, label: "Extract theme", onClick: () => setIsInspectMenuOpen(false) },
                                            { icon: Scan, label: "Scan preta components", onClick: () => setIsInspectMenuOpen(false) },
                                            { icon: EyeOff, label: "Hide my components", onClick: () => setIsInspectMenuOpen(false) }
                                        ].map((item, idx) => (
                                            <div key={idx}>
                                                <button
                                                    onClick={item.onClick}
                                                    className="w-full flex items-center gap-4 px-5 py-4 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all group rounded-2xl"
                                                >
                                                    <item.icon className="w-5 h-5 group-hover:text-neon-green transition-colors" strokeWidth={1.5} />
                                                    <span className="font-medium">{item.label}</span>
                                                </button>
                                                {idx < 2 && <div className="h-px bg-white/5 mx-4" />}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={() => {
                                setIsInspectMenuOpen(!isInspectMenuOpen);
                                setIsModalOpen(false);
                                setIsModalConfigOpen(false);
                                setIsBannerConfigOpen(false);
                                setIsBadgeConfigOpen(false);
                                setIsFABConfigOpen(false);
                            }}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-medium transition-all border ${isInspectMenuOpen ? 'bg-white/10 border-neon-green text-neon-green' : 'bg-[#1A1F2E] hover:bg-[#252A3A] border-white/10 text-white'
                                }`}
                        >
                            Inspect
                            <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isInspectMenuOpen ? 'rotate-180 text-neon-green' : ''}`} />
                        </button>
                    </div>

                    {/* Dashboard/Manage */}
                    <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                        {[
                            { icon: DashboardIcon, label: "Dashboard", onClick: () => { } },
                            {
                                icon: SlidersHorizontal, label: "Manage", active: isManageConfigOpen, onClick: () => {
                                    setIsManageConfigOpen(!isManageConfigOpen);
                                    setIsModalOpen(false);
                                    setIsModalConfigOpen(false);
                                    setIsBannerConfigOpen(false);
                                    setIsBadgeConfigOpen(false);
                                    setIsFABConfigOpen(false);
                                    setIsInspectMenuOpen(false);
                                }
                            }
                        ].map((tool, i) => (
                            <div key={i} onClick={tool.onClick} className="flex flex-col items-center gap-1 group cursor-pointer relative">
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${tool.active
                                    ? 'bg-white/10 text-neon-green'
                                    : 'bg-[#1E2732] text-[#9AA4BF] group-hover:text-white group-hover:bg-white/10'
                                    }`}>
                                    <tool.icon className="w-4 h-4" strokeWidth={1.5} />
                                </div>
                                <span className={`text-[9px] font-medium transition-colors capitalize ${tool.active ? 'text-neon-green' : 'text-gray-500 group-hover:text-white'
                                    }`}>{tool.label}</span>
                                {tool.active && (
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-green" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* User Avatar */}
                    <div className="w-9 h-9 rounded-full border-2 border-[#1E2540] bg-[#1E2732] flex items-center justify-center overflow-hidden cursor-pointer hover:border-white/40 transition-all">
                        <User className="w-5 h-5 text-white/70" />
                    </div>
                </motion.div>

            </div>
        </div >
    );
}

