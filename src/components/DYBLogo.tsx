"use client";
import { motion } from "framer-motion";

interface DYBLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  className?: string;
}

const fontSizes = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-3xl",
  xl: "text-5xl",
};

const trackings = {
  sm: "tracking-[0.06em]",
  md: "tracking-[0.08em]",
  lg: "tracking-[0.10em]",
  xl: "tracking-[0.12em]",
};

export function DYBLogo({ size = "md", animated = false, className = "" }: DYBLogoProps) {
  const content = (
    <span
      className={`font-black uppercase leading-none select-none text-[#F7F7F7] ${fontSizes[size]} ${trackings[size]} ${className}`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      DUCKYOURBRAND
    </span>
  );

  if (!animated) return content;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.div>
  );
}
