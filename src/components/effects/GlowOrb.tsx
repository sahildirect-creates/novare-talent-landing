"use client";

import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  color?: string;
  size?: string;
}

export default function GlowOrb({
  className,
  color = "rgba(124, 58, 237, 0.15)",
  size = "600px",
}: GlowOrbProps) {
  return (
    <div
      className={cn("absolute rounded-full pointer-events-none blur-3xl", className)}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        width: size,
        height: size,
      }}
    />
  );
}
