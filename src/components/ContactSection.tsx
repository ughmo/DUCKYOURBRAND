"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const MENA = [
  { code: "AE", flag: "🇦🇪", name: "UAE" },
  { code: "EG", flag: "🇪🇬", name: "Egypt" },
  { code: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "KW", flag: "🇰🇼", name: "Kuwait" },
  { code: "BH", flag: "🇧🇭", name: "Bahrain" },
  { code: "QA", flag: "🇶🇦", name: "Qatar" },
  { code: "JO", flag: "🇯🇴", name: "Jordan" },
  { code: "LB", flag: "🇱🇧", name: "Lebanon" },
  { code: "MA", flag: "🇲🇦", name: "Morocco" },
  { code: "TN", flag: "🇹🇳", name: "Tunisia" },
];

const requirements = [
  "You have budget and the nerve to spend it",
  "You want attention that converts, not content that looks good",
  "You can handle bold, fearless marketing",
  "You are ready to be the brand nobody ignores",
];

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[#F5C518] border-t border-[#C4A010]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Main contact grid ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: EASE }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-8 h-px bg-[#C62B1E] origin-left block"
              />
              <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em]">Work With Us</span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
                className="text-4xl md:text-6xl font-black text-[#0D0D0D] uppercase leading-tight"
              >
                Ready to own<br />
                <span className="text-[#C62B1E]">your market?</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              className="text-[#2C2100] font-light leading-relaxed mb-8 max-w-md"
            >
              We don&apos;t work with everyone. We work with founders who want results more than they want approval.
            </motion.p>

            <div className="space-y-3">
              {requirements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: EASE }}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.08, type: "spring" }}
                    className="w-1.5 h-1.5 bg-[#C62B1E] rounded-full flex-shrink-0"
                  />
                  <span className="text-[#0D0D0D] text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            className="bg-[#0D0D0D] border border-[#1A1A1A] p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-px bg-[#C62B1E]" />
            <div className="absolute top-0 right-0 w-px h-16 bg-[#C62B1E]" />

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: "Full Name",       type: "text",  placeholder: "Your name" },
                { label: "Business Email",  type: "email", placeholder: "you@yourbrand.com" },
                { label: "Brand / Business",type: "text",  placeholder: "Brand name + industry" },
              ].map((field, i) => (
                <motion.div
                  key={field.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: EASE }}
                >
                  <label className="text-[#A8A49E] text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-[#0D0D0D] border border-[#3A3835] text-[#F7F7F7] px-4 py-3 text-sm font-medium focus:border-[#C62B1E] focus:outline-none transition-colors duration-200 placeholder:text-[#3A3835]"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.44, ease: EASE }}
              >
                <label className="text-[#A8A49E] text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                  What do you want?
                </label>
                <textarea
                  rows={3}
                  placeholder="I want to be the brand everyone in my city is talking about."
                  className="w-full bg-[#0D0D0D] border border-[#3A3835] text-[#F7F7F7] px-4 py-3 text-sm font-medium focus:border-[#C62B1E] focus:outline-none transition-colors duration-200 placeholder:text-[#3A3835] resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.52, ease: EASE }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(198,43,30,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group w-full bg-[#C62B1E] text-[#F7F7F7] font-black text-sm px-8 py-4 uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300"
              >
                Send It
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                >
                  <ArrowRight size={15} />
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* ── MENA Region Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          className="mt-20 pt-12 border-t border-[#C4A010]/40"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#C62B1E]" aria-hidden="true" />
            <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.45em]">
              Where We Operate
            </span>
          </div>

          <p className="text-[#2C2100] text-sm font-light mb-8 max-w-lg">
            UAE-first. Engineered for the Arab world. One system — built to dominate every MENA market.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-[#C4A010]/40">
            {MENA.map(({ flag, name }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="bg-black/5 px-5 py-4 flex items-center gap-3 group hover:bg-black/10 transition-colors duration-200"
              >
                <span className="text-lg leading-none select-none" aria-hidden="true">{flag}</span>
                <span className="text-[#2C2100] group-hover:text-[#0D0D0D] text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
