"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string; // e.g. "w-full h-[500px] rounded-2xl overflow-hidden"
};

export default function NeuralBackdrop({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- HiDPI-safe resize ---
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // --- Particles / state ---
    let animationId = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      connections: number[];
    }> = [];

    const numParticles = 50;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * (canvas.clientWidth || 1),
        y: Math.random() * (canvas.clientHeight || 1),
        vx: (Math.random() - 0.5) * 1.0, // faster movement
        vy: (Math.random() - 0.5) * 1.0,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.4, // slightly brighter base
        connections: [],
      });
    }

    let waveOffset = 0;
    let paused = false;

    const animate = () => {
      if (paused) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const w = canvas.clientWidth || 1;
      const h = canvas.clientHeight || 1;

      ctx.clearRect(0, 0, w, h);

      // background gradient waves
      waveOffset += 0.004;
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      // gradient.addColorStop(
      //   0,
      //   `rgba(3, 2, 19, ${0.08 + Math.sin(waveOffset) * 0.03})`
      // );
      // gradient.addColorStop(
      //   0.5,
      //   `rgba(30, 64, 175, ${0.1 + Math.sin(waveOffset + 1) * 0.02})` // deep vibrant blue
      // );
      // gradient.addColorStop(
      //   1,
      //   `rgba(147, 51, 234, ${0.05 + Math.sin(waveOffset + 2) * 0.02})`
      // );
      // ctx.fillStyle = gradient;
      // ctx.fillRect(0, 0, w, h);

      // particles + connections
      // particles.forEach((p, i) => {
      //   p.x += p.vx;
      //   p.y += p.vy;

      //   if (p.x < 0 || p.x > w) p.vx *= -1;
      //   if (p.y < 0 || p.y > h) p.vy *= -1;

      //   p.x = Math.max(0, Math.min(w, p.x));
      //   p.y = Math.max(0, Math.min(h, p.y));

      //   // draw particle with strong glow
      //   ctx.beginPath();
      //   ctx.shadowBlur = 20;
      //   ctx.shadowColor = `rgba(30, 64, 175, ${p.opacity})`;
      //   ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      //   ctx.fillStyle = `rgba(30, 64, 175, ${p.opacity * 1.2})`;
      //   ctx.fill();

      //   // reset shadow after drawing
      //   ctx.shadowBlur = 0;
      //   ctx.shadowColor = "transparent";

      //   p.connections = [];
      //   for (let j = i + 1; j < particles.length; j++) {
      //     const o = particles[j];
      //     const dx = p.x - o.x;
      //     const dy = p.y - o.y;
      //     const dist = Math.hypot(dx, dy);
      //     if (dist < 120) {
      //       p.connections.push(j);
      //       const op = ((120 - dist) / 120) * 0.7; // stronger opacity
      //       ctx.beginPath();
      //       ctx.moveTo(p.x, p.y);
      //       ctx.lineTo(o.x, o.y);
      //       ctx.strokeStyle = `rgba(30, 64, 175, ${op})`;
      //       ctx.lineWidth = 0.8;
      //       ctx.stroke();
      //     }
      //   }
      // });

      // flowing data streams
      // for (let i = 0; i < 5; i++) {
      //   const streamY = (h / 6) * (i + 1);
      //   const streamOffset = waveOffset * 50 + i * 30;

      //   ctx.beginPath();
      //   ctx.moveTo(-20, streamY);
      //   for (let x = 0; x < w + 20; x += 10) {
      //     const y = streamY + Math.sin((x + streamOffset) * 0.01) * 20;
      //     ctx.lineTo(x, y);
      //   }

      //   const sg = ctx.createLinearGradient(0, 0, w, 0);
      //   sg.addColorStop(0, "rgba(30, 64, 175, 0)");
      //   sg.addColorStop(
      //     0.3,
      //     `rgba(30, 64, 175, ${0.3 + Math.sin(waveOffset + i) * 0.1})`
      //   );
      //   sg.addColorStop(
      //     0.7,
      //     `rgba(147, 51, 234, ${0.2 + Math.sin(waveOffset + i + 1) * 0.1})`
      //   );
      //   sg.addColorStop(1, "rgba(147, 51, 234, 0)");
      //   ctx.strokeStyle = sg;
      //   ctx.lineWidth = 1.4;
      //   ctx.stroke();
      // }

      // subtle grid
      ctx.strokeStyle = "rgba(30, 64, 175, 0.12)";
      ctx.lineWidth = 0.6;
      for (let x = 0; x < w; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    const onVis = () => {
      paused = document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", onVis);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block" }}
    />
  );
}
