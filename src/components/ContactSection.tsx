"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const requirements = [
  "You have budget and the nerve to spend it",
  "You want attention that converts, not content that looks good",
  "You can handle bold, offensive marketing",
  "You are ready to be the brand nobody ignores",
];

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[#0D0D0D] border-t border-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
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
              <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em]">Work With Us</span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl font-black text-[#F7F7F7] uppercase leading-tight"
              >
                Ready to own<br />
                <span className="text-[#C62B1E]">your market?</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#9B9690] font-light leading-relaxed mb-8 max-w-md"
            >
              We don't work with everyone. We work with founders who want results more than they want approval.
            </motion.p>

            <div className="space-y-3">
              {requirements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.08, type: "spring" }}
                    className="w-1.5 h-1.5 bg-[#C62B1E] rounded-full flex-shrink-0"
                  />
                  <span className="text-[#C8C4BE] text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#1A1A1A] border border-[#3A3835] p-8 md:p-10 relative overflow-hidden"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-px bg-[#C62B1E]" />
            <div className="absolute top-0 right-0 w-px h-16 bg-[#C62B1E]" />

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: "Full Name", type: "text", placeholder: "Your name" },
                { label: "Business Email", type: "email", placeholder: "you@yourbrand.com" },
                { label: "Brand / Business", type: "text", placeholder: "Brand name + industry" },
              ].map((field, i) => (
                <motion.div
                  key={field.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <label className="text-[#9B9690] text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full bg-[#0D0D0D] border border-[#3A3835] text-[#F7F7F7] px-4 py-3 text-sm font-medium focus:border-[#C62B1E] focus:outline-none transition-colors duration-200 placeholder:text-[#3A3835]"
                    placeholder={field.placeholder}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.44 }}
              >
                <label className="text-[#9B9690] text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                  What do you want?
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-[#0D0D0D] border border-[#3A3835] text-[#F7F7F7] px-4 py-3 text-sm font-medium focus:border-[#C62B1E] focus:outline-none transition-colors duration-200 placeholder:text-[#3A3835] resize-none"
                  placeholder="I want to be the brand everyone in my city is talking about."
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.52 }}
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
      </div>
    </section>
  );
}
