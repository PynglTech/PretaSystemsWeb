"use client";

import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    pulsePhase: number;
}

export default function NetworkAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.offsetWidth;
        let height = canvas.offsetHeight;

        // Set canvas size
        const resizeCanvas = () => {
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Create more nodes for a denser network
        const nodeCount = 80;
        const nodes: Node[] = [];
        const maxDistance = 100;

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2 + 1,
                pulsePhase: Math.random() * Math.PI * 2,
            });
        }

        let animationId: number;
        let time = 0;

        const drawShield = (cx: number, cy: number, size: number, pulse: number) => {
            ctx.save();
            ctx.translate(cx, cy);

            // Outer glow
            const gradient = ctx.createRadialGradient(0, 0, size * 0.3, 0, 0, size * 1.5);
            gradient.addColorStop(0, `rgba(57, 255, 20, ${0.15 + pulse * 0.1})`);
            gradient.addColorStop(1, "rgba(57, 255, 20, 0)");
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(0, 0, size * 1.5, 0, Math.PI * 2);
            ctx.fill();

            // Shield shape
            ctx.beginPath();
            ctx.moveTo(0, -size);
            ctx.lineTo(size * 0.8, -size * 0.5);
            ctx.lineTo(size * 0.8, size * 0.2);
            ctx.quadraticCurveTo(size * 0.4, size * 0.8, 0, size);
            ctx.quadraticCurveTo(-size * 0.4, size * 0.8, -size * 0.8, size * 0.2);
            ctx.lineTo(-size * 0.8, -size * 0.5);
            ctx.closePath();

            // Shield fill with gradient
            const shieldGradient = ctx.createLinearGradient(0, -size, 0, size);
            shieldGradient.addColorStop(0, `rgba(57, 255, 20, ${0.2 + pulse * 0.1})`);
            shieldGradient.addColorStop(1, `rgba(57, 255, 20, ${0.05})`);
            ctx.fillStyle = shieldGradient;
            ctx.fill();

            // Shield border
            ctx.strokeStyle = `rgba(57, 255, 20, ${0.6 + pulse * 0.3})`;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Checkmark inside
            ctx.beginPath();
            ctx.moveTo(-size * 0.3, 0);
            ctx.lineTo(-size * 0.1, size * 0.25);
            ctx.lineTo(size * 0.3, -size * 0.25);
            ctx.strokeStyle = `rgba(57, 255, 20, ${0.8 + pulse * 0.2})`;
            ctx.lineWidth = 3;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.stroke();

            ctx.restore();
        };

        const animate = () => {
            time += 0.02;
            ctx.clearRect(0, 0, width, height);

            // Update and draw nodes
            nodes.forEach((node, index) => {
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                // Pulsing effect
                const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5;
                const currentRadius = node.radius * (1 + pulse * 0.3);

                // Draw node with glow
                ctx.beginPath();
                ctx.arc(node.x, node.y, currentRadius * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(57, 255, 20, ${0.1 * pulse})`;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(57, 255, 20, ${0.5 + pulse * 0.5})`;
                ctx.fill();
            });

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.5;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(57, 255, 20, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            // Draw central shield (larger and more prominent)
            const pulse = Math.sin(time) * 0.5 + 0.5;
            drawShield(width / 2, height * 0.35, 60, pulse);

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.8 }}
        />
    );
}
