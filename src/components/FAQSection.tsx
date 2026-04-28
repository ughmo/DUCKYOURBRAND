"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const FAQS = [
  {
    q: "What packages does DUCKYOURBRAND offer?",
    a: "We offer three engagement tiers: the Attention Audit (a one-time strategy session to map your viral potential), the Virality Sprint (a 90-day system build), and the Full Growth System (ongoing monthly management). We also build custom Enterprise programs for larger brands across MENA.",
  },
  {
    q: "What makes DYB different from every other agency in the region?",
    a: "Every other agency manages your accounts and charges a retainer whether your content performs or not. DYB builds the mechanism that makes content spread — then documents and hands it to you. We measure success in organic reach, inbound leads, and revenue. Not follower counts.",
  },
  {
    q: "How does DYB approach content and paid media?",
    a: "Our system is built around organic content that earns attention on its own merit. When content is engineered correctly, you reach far more people and spend significantly less. Clients consistently see better returns from our organic system than from previous paid campaigns — because the content actually stops the scroll.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients see meaningful organic reach increases within 3–4 weeks of launch. Viral moments typically occur in weeks 3–8. Revenue impact — inbound leads, DMs, direct sales — typically follows within 6 weeks.",
  },
  {
    q: "Which platforms do you work on?",
    a: "TikTok, Instagram Reels, and YouTube Shorts are our primary channels — the three platforms where organic virality is still achievable at scale in 2025. We also consult on X and LinkedIn for B2B brands.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes, if the brand has a story worth engineering. Our entry point is an Attention Audit that tells you exactly whether and how DYB can scale your brand. We turn down clients whose product cannot be made viral — we'd rather be honest upfront.",
  },
  {
    q: "How long is the minimum engagement?",
    a: "The Virality Sprint is a 90-day minimum. Full Growth Systems are 6-month minimums. We do not do month-to-month retainers — virality takes a full build cycle to execute properly.",
  },
  {
    q: "Which countries and markets do you serve?",
    a: "We operate across the entire MENA region — Egypt, UAE, Saudi Arabia, Kuwait, Bahrain, Qatar, Jordan, Lebanon, Morocco, and beyond. Our system is built for Arab market audiences and cultural dynamics at a native level.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 md:py-36 bg-[#F5C518] border-t border-black/10"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-px bg-[#C62B1E]" aria-hidden="true" />
            <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.45em]">FAQ</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              id="faq-heading"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-4xl md:text-6xl font-black text-[#0D0D0D] uppercase leading-none tracking-tighter"
            >
              Your questions.<br />
              <span className="text-[#C62B1E]">Straight answers.</span>
            </motion.h2>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-px" role="list">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={q}
                role="listitem"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: EASE }}
                className={`border-b transition-colors duration-200 ${isOpen ? "border-[#C62B1E]/35" : "border-black/10"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                >
                  <span className={`text-sm md:text-base font-medium leading-snug transition-colors duration-200 ${isOpen ? "text-[#0D0D0D]" : "text-[#3A3835] group-hover:text-[#0D0D0D]"}`}>
                    {q}
                  </span>
                  <span
                    className={`mt-0.5 flex-shrink-0 w-4 h-4 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45 text-[#C62B1E]" : "text-[#6B6560]"}`}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-[#3A3835] text-sm font-light leading-relaxed max-w-2xl">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex items-center gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C62B1E] text-[#F7F7F7] text-[10px] font-black px-7 py-4 uppercase tracking-[0.3em] hover:bg-[#a82318] active:scale-95 transition-all duration-200 group"
          >
            Still have questions? Talk to us.
            <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
