"use client";
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MinimalistHeroProps {
  logoText: string;
  navLinks?: { label: string; href: string }[];
  mainText: string;
  readMoreHref?: string;
  readMoreLabel?: string;
  imageSrc: string;
  imageAlt: string;
  circleBg?: string;
  overlayText: { part1: string; part2: string; accentPart?: string };
  socialLinks?: { icon: LucideIcon; href: string }[];
  locationText?: string;
  statsBar?: { label: string }[];
  className?: string;
  animationDelay?: number;
}

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreHref = "#",
  readMoreLabel = "Read More",
  imageSrc,
  imageAlt,
  circleBg = "#C62B1E",
  overlayText,
  socialLinks,
  locationText,
  statsBar,
  className,
  animationDelay = 0,
}: MinimalistHeroProps) => {
  const d = animationDelay;
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      className={cn(
        "relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#0D0D0D] px-8 md:px-14 pb-8",
        className
      )}
    >
      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:54px_54px]" />
      {/* Red glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_55%,rgba(198,43,30,0.10),transparent_70%)]" />

      {/* Optional nav header (for standalone use) */}
      {navLinks && (
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: d }}
          className="relative z-30 flex w-full max-w-7xl items-center justify-between pt-6"
        >
          <span
            className="font-black text-[#F7F7F7] text-base uppercase tracking-[0.08em]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {logoText}
          </span>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[10px] font-black text-[#9B9690] hover:text-[#F7F7F7] uppercase tracking-[0.25em] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.header>
      )}

      {/* 3-column grid */}
      <div
        className={cn(
          "relative z-10 grid w-full max-w-7xl flex-grow grid-cols-1 md:grid-cols-3 gap-8 items-center",
          navLinks ? "" : "pt-24"
        )}
      >
        {/* Left — description */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: d + 0.9, ease: EASE }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <p className="text-[#9B9690] text-sm font-light leading-relaxed max-w-[220px] mx-auto md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreHref}
            className="mt-5 inline-flex items-center gap-2 text-[10px] font-black text-[#C62B1E] uppercase tracking-[0.35em] hover:gap-3 transition-all duration-300"
          >
            {readMoreLabel}
          </a>
        </motion.div>

        {/* Center — image + circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center min-h-[320px]">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.0, ease: EASE, delay: d + 0.2 }}
            className="absolute z-0 h-[260px] w-[260px] md:h-[360px] md:w-[360px] lg:h-[440px] lg:w-[440px] rounded-full"
            style={{ background: circleBg }}
          />
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-auto w-44 md:w-60 lg:w-72 object-cover scale-150"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE, delay: d + 0.4 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80";
            }}
          />
        </div>

        {/* Right — big headline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: d + 1.0, ease: EASE }}
          className="order-3 text-center md:text-left"
        >
          <h1
            className="font-black text-[#F7F7F7] uppercase leading-none tracking-tighter"
            style={{
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {overlayText.part1}
            <br />
            {overlayText.part2}
            {overlayText.accentPart && (
              <>
                <br />
                <span className="text-[#C62B1E]">{overlayText.accentPart}</span>
              </>
            )}
          </h1>
        </motion.div>
      </div>

      {/* Footer bar */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: d + 1.2 }}
        className="relative z-30 flex w-full max-w-7xl items-center justify-between pt-5 border-t border-[#1A1A1A]"
      >
        <div className="flex items-center gap-5">
          {socialLinks?.map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} className="text-[#6B6560] hover:text-[#F7F7F7] transition-colors">
              <Icon size={15} />
            </a>
          ))}
        </div>

        {statsBar && (
          <div className="hidden md:flex items-center gap-6">
            {statsBar.map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && <span className="w-px h-3 bg-[#3A3835]" />}
                <span className="text-[10px] font-black text-[#9B9690] uppercase tracking-[0.3em]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {locationText && (
          <span className="text-[10px] font-black text-[#6B6560] uppercase tracking-[0.35em]">
            {locationText}
          </span>
        )}
      </motion.footer>
    </div>
  );
};
