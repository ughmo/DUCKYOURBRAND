"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

// Three.js loaded client-side only — zero SSR overhead
const HorizonBg = dynamic(
  () => import("@/components/ui/horizon-bg").then(m => m.HorizonBg),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-[#000]" /> }
);

const EASE = [0.22, 1, 0.36, 1] as const;

const PROBLEMS = [
  { n: "94%", label: "of UAE branded posts invisible within 24 hours" },
  { n: "1.37%", label: "average organic reach — you're shouting into a void" },
  { n: "AED 15K", label: "average agency retainer. Zero viral guarantee." },
  { n: "0", label: "UAE agencies with a proven, repeatable virality system" },
];

export function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Direct transforms — no spring, no lag. Lenis handles the smooth feel.
  const s1Scale   = useTransform(scrollYProgress, [0, 0.55], [1, 0.92]);
  const s1Rotate  = useTransform(scrollYProgress, [0, 0.55], [0, -1.5]);
  const s1Opacity = useTransform(scrollYProgress, [0.1, 0.48], [1, 0]);

  return (
    <div ref={container} className="relative h-[200vh]">

      {/* ══ SECTION 1 — VIDEO HERO ══════════════════════════════════════ */}
      <motion.section
        aria-label="Hero — DUCKYOURBRAND"
        style={{ scale: s1Scale, rotate: s1Rotate }}
        className="sticky top-0 h-screen overflow-hidden bg-[#0D0D0D]"
        // GPU layer hint without causing paint on every frame
      >
        {/* Looping background video */}
        <video
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-55 pointer-events-none"
          aria-hidden="true"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/55 via-transparent to-[#0D0D0D]/55 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(198,43,30,0.11),transparent_68%)] pointer-events-none" />

        <motion.div
          style={{ opacity: s1Opacity }}
          className="relative z-10 flex flex-col h-full px-6 sm:px-10 md:px-16 pb-8 pt-20"
        >
          {/* ── Centered main content ── */}
          <div className="flex-1 flex flex-col justify-center items-center text-center gap-5 md:gap-7">

            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.7, ease: EASE }}
              className="flex items-center gap-3"
              aria-hidden="true"
            >
              <span className="w-6 h-px bg-[#C62B1E]" />
              <span className="text-[#C62B1E] text-[9px] font-black uppercase tracking-[0.55em]">
                Egypt · UAE · Viral Marketing Agency
              </span>
              <span className="w-6 h-px bg-[#C62B1E]" />
            </motion.div>

            {/* H1 — single line, never wraps */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 1.85, ease: EASE }}
                className="font-black text-[#F7F7F7] uppercase leading-none tracking-tighter whitespace-nowrap"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(1.8rem, 6.8vw, 8.5rem)",
                  textShadow: "0 0 80px rgba(198,43,30,0.3)",
                }}
              >
                DUCKYOURBRAND
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 2.05, ease: EASE }}
              className="text-[#9B9690] font-light max-w-sm md:max-w-md leading-relaxed"
              style={{ fontSize: "clamp(0.78rem, 1.3vw, 0.95rem)" }}
            >
              We build attention and money making machines,{" "}
              <span className="text-[#C8C4BE] font-normal">turning views into revenue.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2, ease: EASE }}
              className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#C62B1E] text-[#F7F7F7] text-[9px] sm:text-[10px] font-black px-6 sm:px-8 py-3.5 uppercase tracking-[0.3em] hover:bg-[#a82318] active:scale-95 transition-all duration-200"
              >
                Work With Us
                <ArrowRight size={10} />
              </a>
              <a
                href="#results"
                className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-black text-[#6B6560] hover:text-[#F7F7F7] uppercase tracking-[0.3em] transition-colors duration-200 group"
              >
                See the Proof
                <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* ── Bottom stats bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="flex items-center justify-between pt-5 border-t border-[#1A1A1A]/70"
            aria-label="Key metrics"
          >
            <span className="text-[9px] font-black text-[#4A4845] uppercase tracking-[0.35em] hidden sm:block">
              Egypt · UAE · 2026
            </span>

            <div className="flex items-center gap-4 sm:gap-6 mx-auto sm:mx-0">
              {[
                { n: "5M+", l: "Organic Views" },
                { n: "0",   l: "Ad Spend" },
                { n: "115%",l: "UAE Penetration" },
              ].map((s, i) => (
                <div key={s.l} className="flex items-center gap-4 sm:gap-6">
                  {i > 0 && <span className="w-px h-3 bg-[#2A2825]" aria-hidden="true" />}
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-black text-[#F7F7F7] leading-none">{s.n}</div>
                    <div className="text-[8px] sm:text-[9px] font-bold text-[#4A4845] uppercase tracking-[0.2em] mt-0.5">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#results"
              className="text-[9px] font-black text-[#C62B1E] uppercase tracking-[0.3em] hover:text-[#F7F7F7] transition-colors hidden sm:block"
              aria-label="Scroll to next section"
            >
              Scroll ↓
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ══ SECTION 2 — THE PROBLEM / THREE.JS HORIZON ══════════════════ */}
      <section
        id="results"
        aria-label="The problem with UAE marketing agencies"
        className="relative h-screen overflow-hidden bg-[#000]"
      >
        {/* Horizon WebGL background */}
        <HorizonBg />

        {/* Text legibility overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_50%,rgba(198,43,30,0.06),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: EASE }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-px bg-[#C62B1E]" aria-hidden="true" />
            <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.45em]">
              The Reality
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-3">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-black text-[#F7F7F7] uppercase leading-none tracking-tighter"
              style={{ fontSize: "clamp(2rem, 5.5vw, 6rem)" }}
            >
              What you&apos;re actually<br />
              <span className="text-[#C62B1E]">paying for.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="text-[#C8C4BE] text-xs sm:text-sm font-light mb-8 max-w-lg"
          >
            Most UAE agencies manage content. None engineer virality. Here&apos;s what the data shows.
          </motion.p>

          {/* Problem stats grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#C62B1E]/12"
            role="list"
            aria-label="UAE marketing industry statistics"
          >
            {PROBLEMS.map(({ n, label }, i) => (
              <motion.div
                key={label}
                role="listitem"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45, ease: EASE }}
                className="bg-black/65 backdrop-blur-sm p-5 md:p-6 flex flex-col gap-2 group hover:bg-[#C62B1E]/8 transition-colors duration-300"
              >
                <span
                  className="font-black text-[#C62B1E] leading-none tracking-tighter"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 3.2rem)" }}
                >
                  {n}
                </span>
                <span className="text-[#4A4845] text-[11px] font-medium leading-snug group-hover:text-[#6B6560] transition-colors duration-300">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, ease: EASE }}
            className="mt-8 flex items-center gap-5 flex-wrap"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C62B1E] text-[#F7F7F7] text-[10px] font-black px-7 py-4 uppercase tracking-[0.3em] hover:bg-[#a82318] active:scale-95 transition-all duration-200 group"
            >
              We do it differently
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <span className="text-[#2A2825] text-[10px] uppercase tracking-[0.3em] font-light hidden sm:block">
              DYB — Built for virality.
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
