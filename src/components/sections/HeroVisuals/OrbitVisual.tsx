import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OrbitConfig {
  radius: number;
  icons: string[];
}

const ORBITS: OrbitConfig[] = [
  {
    radius: 170,
    icons: ["1.png", "2.png"],
  },
  {
    radius: 320,
    icons: ["3.png", "4.png", "5.png"],
  },
  {
    radius: 470,
    icons: ["6.png", "7.png", "8.png", "9.png", "10.png"],
  },
  {
    radius: 620,
    icons: ["11.png", "12.png", "13.png", "14.png", "15.png"],
  },
  {
    radius: 770,
    icons: ["16.png", "17.png", "18.png", "19.png", "20.png"],
  },
];

export const OrbitVisual = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative flex h-[600px] w-full items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Central glow/element if needed, for now just the orbits */}

      {ORBITS.map((orbit, orbitIndex) => (
        <div
          key={`orbit-${orbitIndex}`}
          className="absolute flex items-center justify-center rounded-full border border-white/5 bg-transparent"
          style={{
            width: orbit.radius * 2,
            height: orbit.radius * 2,
          }}
        >
          {orbit.icons.map((icon, iconIndex) => {
            const angle = (360 / orbit.icons.length) * iconIndex - 90; // Start from top
            const radian = (angle * Math.PI) / 180;
            const x = Math.cos(radian) * orbit.radius;
            const y = Math.sin(radian) * orbit.radius;

            return (
              <div
                key={icon}
                className="absolute flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-xl transition-transform hover:scale-110"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div className="relative h-10 w-10">
                  <Image
                    src={`/icons/${icon}`}
                    alt={`Integration icon ${icon}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {/* Core Logo/Center Piece - optional based on original SVG having a center element */}
      <div className="absolute z-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#0A0A0A] border border-white/10 shadow-2xl">
        <div className="h-12 w-12 rounded-full bg-green-500/20 blur-xl absolute" />
        {/* Original had a green P logo or similar in SVG? 
                 SVG line 131: linearGradient... #0078D4, #1380DA... 
                 Wait, the original SVG had multiple filter/groups. 
                 One group had `fill="#0A0A0A"`.
                 Group 5 had icons? 
                 
                 The user reference has a green logo in the center. I'll check if I have a logo asset or just leave a placeholder or the "P" from the original if feasible.
                 The original code lines 39-41 depict a logo-like shape with blues.
                 The user reference `uploaded_media...` has a green "P" logo. 
                 I'll assume the user wants `OrbitVisual` to focus on the orbits primarily. 
                 I'll add a generic central hub or logo if I can find one, otherwise just a styled circle.
             */}
        <div className="text-3xl font-bold text-white">P</div>
      </div>
    </div>
  );
};
