"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const FAQS = [
  {
    q: "How much does DUCKYOURBRAND charge?",
    a: "Engagements start at AED 12,000/month for a 90-day Virality Sprint. Full Growth Systems run AED 22,000–40,000/month. One-time Attention Audits are AED 4,000–6,000. We price by the system we build — not hours, not posts.",
  },
  {
    q: "What makes DYB different from every other UAE marketing agency?",
    a: "Every other agency manages your accounts and charges a retainer whether your content performs or not. DYB builds the mechanism that makes content spread — then documents and hands it to you. We measure success in organic reach, inbound leads, and revenue. Not follower counts.",
  },
  {
    q: "Do you use paid ads?",
    a: "No. 100% organic. We engineer content that spreads through platform algorithms and audience psychology — zero paid amplification, zero influencer fees. If it needs a budget to reach people, it wasn't engineered correctly.",
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
    a: "Yes, if the brand has a story worth engineering. Our entry point is an Attention Audit (AED 4,000–6,000) that tells you exactly whether and how DYB can scale your brand. We turn down clients whose product cannot be made viral — we'd rather be honest upfront.",
  },
  {
    q: "How long is the minimum contract?",
    a: "The Virality Sprint is a 90-day minimum. Full Growth Systems are 6-month minimums. We do not do month-to-month retainers — virality takes a full build cycle to execute properly.",
  },
  {
    q: "Are you based in Egypt or the UAE?",
    a: "Both. Our founding team is Egyptian, with active operations in Dubai and Cairo. We deliver remotely across the full MENA region — Egypt, UAE, Saudi Arabia, Kuwait, Bahrain, and Jordan.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 md:py-36 bg-[#0D0D0D] border-t border-[#1A1A1A]"
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
            <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.45em]">
              FAQ
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              id="faq-heading"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-4xl md:text-6xl font-black text-[#F7F7F7] uppercase leading-none tracking-tighter"
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
                className={`border-b border-[#1A1A1A] transition-colors duration-200 ${isOpen ? "border-[#C62B1E]/25" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                >
                  <span
                    className={`text-sm md:text-base font-medium leading-snug transition-colors duration-200 ${
                      isOpen ? "text-[#F7F7F7]" : "text-[#9B9690] group-hover:text-[#C8C4BE]"
                    }`}
                  >
                    {q}
                  </span>
                  <span
                    className={`mt-0.5 flex-shrink-0 w-4 h-4 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-[#C62B1E]" : "text-[#3A3835]"
                    }`}
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
                      <p className="pb-5 text-[#6B6560] text-sm font-light leading-relaxed max-w-2xl">
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C62B1E] text-[#F7F7F7] text-[10px] font-black px-7 py-4 uppercase tracking-[0.3em] hover:bg-[#a82318] active:scale-95 transition-all duration-200"
          >
            Still have questions? Talk to us.
          </a>
        </motion.div>
      </div>
    </section>
  );
}
