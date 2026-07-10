"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: { bounce: number };
};

export function Spotlight({ className, size = 200 }: SpotlightProps) {
  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_80%)] blur-2xl",
        className,
      )}
      style={{ width: size, height: size }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
