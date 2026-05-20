"use client";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";

const pillars = [
  {
    number: "01",
    title: "Disruptive Marketing Psychology",
    description: "We use human psychology to make content that spreads. Discomfort is the trigger. Safe content is invisible.",
    detail: "Psychology-first content engineering",
  },
  {
    number: "02",
    title: "Proven Campaign Track Record",
    description: "Not promises. Not potential. Results. 5M+ organic views. Zero ad spend. Egypt. That campaign exists. You can watch it.",
    detail: "Real results. Real numbers.",
  },
  {
    number: "03",
    title: "Repeatable Content System",
    description: "One viral campaign is luck. A system delivers it monthly. That is what DYB builds — a machine that produces results on demand.",
    detail: "Monthly viral results by design",
  },
];

export function SystemSection() {
  return (
    <section id="system" className="py-32 bg-[#F5C518] border-t border-[#C4A010]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
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
            <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em]">The System</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-black text-[#0D0D0D] uppercase leading-tight mb-4"
            >
              Three things no <br />
              <span className="text-[#C62B1E]">competitor combines.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#2C2100] text-lg max-w-xl font-light"
          >
            Not a service list. A machine.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-[#C4A010]/40">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-black/5 p-8 md:p-10 overflow-hidden group cursor-default"
            >
              <Spotlight size={280} />

              {/* Hover border reveal */}
              <motion.div
                className="absolute inset-0 border border-[#C62B1E]/0 group-hover:border-[#C62B1E]/20 transition-colors duration-500"
              />

              <motion.div
                initial={{ opacity: 0.15 }}
                whileHover={{ opacity: 0.4 }}
                className="text-[#C4A010]/25 text-8xl font-black leading-none mb-6 select-none transition-opacity duration-300"
              >
                {pillar.number}
              </motion.div>

              <h3 className="text-xl font-black text-[#0D0D0D] uppercase leading-tight mb-4 transition-colors duration-200">
                {pillar.title}
              </h3>
              <p className="text-[#2C2100] font-light leading-relaxed mb-6 text-sm group-hover:text-[#0D0D0D] transition-colors duration-300">
                {pillar.description}
              </p>
              <div className="flex items-center gap-2">
                <motion.span
                  className="h-px bg-[#C62B1E] origin-left"
                  initial={{ width: "1rem" }}
                  whileInView={{ width: "1rem" }}
                  whileHover={{ width: "2rem" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.3em]">
                  {pillar.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
