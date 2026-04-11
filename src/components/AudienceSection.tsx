"use client";
import { motion } from "framer-motion";

const industries = ["Restaurants", "Gyms & Fitness", "Automotive", "Retail", "Hospitality", "E-commerce", "Services", "Personal Brands"];
const feelings = [
  "Watched a competitor go viral and couldn't explain it",
  "Paid agencies for beautiful content nobody saw",
  "Know their content is invisible — and can't fix it",
  "Want to be the one brand their market can't stop talking about",
];

export function AudienceSection() {
  return (
    <section className="py-32 bg-[#F7F7F7] border-t border-[#E8E5DF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-8 h-px bg-[#C62B1E] origin-left block"
            />
            <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em]">Who We Serve</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-black text-[#0D0D0D] uppercase leading-tight"
            >
              Built for founders<br />
              <span className="text-[#C62B1E]">ready to own their market.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#E8E5DF]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#F7F7F7] p-8 md:p-12"
          >
            <div className="text-[10px] text-[#6B6560] font-black uppercase tracking-[0.4em] mb-6">Profile</div>
            <p className="text-[#0D0D0D] font-bold text-lg mb-8 leading-snug">
              UAE founders, 28–50. Real budget. Done posting into the void.
            </p>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, i) => (
                <motion.span
                  key={industry}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  whileHover={{ backgroundColor: "#0D0D0D", color: "#F7F7F7" }}
                  className="border border-[#0D0D0D] text-[#0D0D0D] text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1.5 transition-colors duration-200 cursor-default"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#0D0D0D] p-8 md:p-12"
          >
            <div className="text-[10px] text-[#C62B1E] font-black uppercase tracking-[0.4em] mb-6">What They Feel</div>
            <div className="space-y-5">
              {feelings.map((feeling, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-4"
                >
                  <span className="text-[#C62B1E] font-black text-sm mt-0.5 flex-shrink-0">→</span>
                  <span className="text-[#C8C4BE] font-light text-sm leading-relaxed">{feeling}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-8 pt-6 border-t border-[#1A1A1A]"
            >
              <p className="text-[#F7F7F7] font-bold">They're right. Something is missing.</p>
              <p className="text-[#C62B1E] font-black text-lg uppercase mt-1">That something is DYB.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
