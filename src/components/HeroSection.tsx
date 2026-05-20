"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative h-screen overflow-hidden bg-[#F5C518]"
    >
      {/* Very faint texture — barely perceptible depth on yellow */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ezgif-43d7510c8c092116.gif"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.018, mixBlendMode: "multiply" }}
      />

      {/* Radial depth — lighter centre fading to slightly richer yellow at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.12) 0%, transparent 65%)" }}
      />

      {/* Top shadow — blends the black nav into the yellow hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

      {/* Bottom fade to yellow */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#F5C518] to-transparent pointer-events-none" />

      {/* LEFT ZONE — copy */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-14 md:px-20 lg:px-24 pt-24 pb-16 max-w-[65%] min-w-[320px]">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 2.0, ease: E }}
          className="flex items-center gap-2.5 mb-10"
        >
          <span className="w-5 h-px bg-[#C62B1E]" />
          <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.42em]">
            Viral Marketing · UAE & MENA
          </span>
        </motion.div>

        {/* H1 */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 2.08, ease: E }}
            className="font-black text-[#0D0D0D] uppercase leading-none tracking-tighter"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 9rem)",
            }}
          >
            You copied<br />everyone.
          </motion.h1>
        </div>

        {/* Subhead */}
        <div className="overflow-hidden mb-5">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 2.26, ease: E }}
            className="font-black text-[#0D0D0D]/60 leading-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(1.1rem, 2.2vw, 2.6rem)",
            }}
          >
            That&apos;s why no one cares.
          </motion.p>
        </div>

        {/* Italic question */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.44, ease: E }}
          className="text-[#0D0D0D]/50 italic mb-10"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(0.85rem, 1.1vw, 1.15rem)",
          }}
        >
          Want to be the one brand your market can&apos;t ignore?
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.56, ease: E }}
          className="flex items-center gap-6 flex-wrap mb-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-[#0D0D0D] text-[#F5C518] text-[11px] font-black px-8 py-4 uppercase tracking-[0.28em] hover:bg-[#C62B1E] hover:text-[#F7F7F7] active:scale-95 transition-all duration-200 group"
          >
            Duck the Norm
            <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#results"
            className="text-[11px] font-black text-[#0D0D0D]/50 hover:text-[#0D0D0D] uppercase tracking-[0.28em] transition-colors duration-200"
          >
            See what we&apos;ve done →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.7, ease: E }}
          className="text-[#0D0D0D]/35 text-[10px] font-bold uppercase tracking-[0.25em]"
        >
          5M+ views · 115% growth · UAE & MENA
        </motion.p>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.85, duration: 0.5 }}
        className="absolute bottom-5 left-8 sm:left-14 md:left-20 lg:left-24 right-8"
      >
        <div className="flex items-center gap-1 text-[9px] font-black text-[#0D0D0D]/25 uppercase tracking-[0.35em]">
          UAE · MENA · 2026
        </div>
      </motion.div>
    </section>
  );
}
