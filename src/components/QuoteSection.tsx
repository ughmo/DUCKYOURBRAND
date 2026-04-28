"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { DotPattern } from "@/components/ui/dot-pattern";

const EASE = [0.22, 1, 0.36, 1] as const;

export function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#F5C518] border-t border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Dot-pattern bordered quote card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative border border-[#C62B1E]/50"
        >
          {/* Dot pattern fill */}
          <DotPattern
            width={10}
            height={10}
            cx={1}
            cy={1}
            cr={0.8}
            className="fill-[#C62B1E]/10"
          />

          {/* Corner squares */}
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-[#C62B1E]" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-[#C62B1E]" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-[#C62B1E]" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-[#C62B1E]" />

          <div className="relative z-10 py-12 px-8 md:px-16 md:py-20">

            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#C62B1E] text-xs md:text-sm font-black uppercase tracking-[0.4em] mb-6"
            >
              The DYB Rule
            </motion.p>

            <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-tight">
              {([
                { bold: "\u201cIf it\u2019s comfortable,", thin: "" },
                { bold: "you are doing", thin: "something" },
                { bold: "", thin: "wrong.\u201d" },
              ] as { bold: string; thin: string }[]).map(({ bold, thin }, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75, delay: 0.2 + i * 0.12, ease: EASE }}
                    className="flex flex-wrap gap-x-3 gap-y-1 items-baseline"
                  >
                    {bold && (
                      <span className="font-black text-[#0D0D0D]">{bold}</span>
                    )}
                    {thin && (
                      <span className="font-thin text-[#6B6560]">{thin}</span>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Attribution */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
              className="flex items-center gap-4 mt-10 origin-left"
            >
              <span className="w-12 h-px bg-[#C62B1E]" />
              <span className="text-[#6B6560] text-[10px] font-black uppercase tracking-[0.5em]">
                DUCKYOURBRAND
              </span>

            </motion.div>
          </div>

          {/* Scrolling watermark behind */}
          <motion.div
            style={{ x: bgX }}
            className="absolute inset-0 flex items-center pointer-events-none select-none whitespace-nowrap overflow-hidden"
          >
            <span className="text-[#C62B1E]/[0.04] text-[14vw] font-black leading-none">
              DUCKYOURBRAND &nbsp; DUCKYOURBRAND
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
