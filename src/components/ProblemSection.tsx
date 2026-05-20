"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { number: "1.37%", label: "Facebook organic reach" },
  { number: "7.6%", label: "Instagram organic reach" },
  { number: "3%", label: "X organic reach" },
  { number: "1,500+", label: "UAE agencies. Zero proven viral." },
];

const proofLines = [
  "An unknown brand. Egypt.",
  "Organic. Zero ad spend.",
  "5 million views and counting.",
  "One system. Repeatable.",
  "Now the UAE gets it.",
];

export function ProblemSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="results" className="py-32 bg-[#F5C518] border-t border-[#C4A010]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-8 h-px bg-[#C62B1E] origin-left block"
            />
            <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em]">The Crisis</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={headerInView ? { y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
              className="text-4xl md:text-6xl font-black text-[#0D0D0D] uppercase leading-tight mb-4"
            >
              Is your content<br />
              <span className="text-[#C62B1E]">invisible?</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
            className="text-[#2C2100] text-lg max-w-xl font-light leading-relaxed"
          >
            Most brands are paying agencies to post content nobody sees. The numbers don&apos;t lie.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#C4A010]/40 mb-px">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className="bg-black/5 p-6 md:p-8 group hover:bg-black/10 transition-colors duration-300"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                className="text-4xl md:text-5xl font-black text-[#C62B1E] leading-none mb-2 drop-shadow-sm"
              >
                {s.number}
              </motion.div>
              <div className="text-[#2C2100] text-xs font-medium leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="border border-[#C62B1E]/30 bg-black/8 p-8 md:p-12 relative overflow-hidden"
        >
          {/* opacity-only pulse — no scale so no repaint */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,43,30,0.06),transparent_70%)]"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
          />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em] mb-4">The Gap DYB Fills</div>
              <h3 className="text-3xl md:text-4xl font-black text-[#0D0D0D] uppercase leading-tight mb-4">
                5M+ organic views.<br />Zero ad spend.<br />
                <span className="text-[#C62B1E]">Proven. Repeatable.</span>
              </h3>
              <p className="text-[#2C2100] font-light leading-relaxed">
                No agency in UAE can show organic viral results. DYB can.
                The market is wide open. The timing is now.
              </p>
            </div>
            <div className="space-y-3">
              {proofLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: EASE }}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.09, type: "spring" }}
                    className="w-1.5 h-1.5 bg-[#C62B1E] rounded-full flex-shrink-0"
                  />
                  <span className="text-[#0D0D0D] font-medium">{line}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
