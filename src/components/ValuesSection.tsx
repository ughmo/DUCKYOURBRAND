"use client";
import { motion } from "framer-motion";

const values = [
  { number: "01", title: "No Filler, Only Firepower", description: "Every piece of content is intentional. If it doesn't drive attention, it doesn't exist." },
  { number: "02", title: "Speed Without Excuses", description: "The market doesn't wait. Neither do we. Fast execution beats perfect planning." },
  { number: "03", title: "Results Over Aesthetics", description: "Pretty content that nobody sees is a failure. Ugly content that goes viral is a win." },
  { number: "04", title: "Provoke Attention", description: "Safe is invisible. We provoke because the alternative is being ignored." },
  { number: "05", title: "Own The Outcome", description: "We don't blame algorithms. We build systems that work regardless. Full accountability." },
];

export function ValuesSection() {
  return (
    <section className="py-32 bg-[#0D0D0D] border-t border-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Sticky left */}
          <div className="md:sticky top-32">
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
              <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em]">Values</span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl font-black text-[#F7F7F7] uppercase leading-tight"
              >
                What we stand for.<br />
                <span className="text-[#C62B1E]">No exceptions.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#9B9690] font-light leading-relaxed mb-10"
            >
              These aren't company values on a wall. They are the operating system of every campaign, every post, every result.
            </motion.p>

            {/* Archetype */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="border-l-2 border-[#C62B1E] pl-6 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-[#C62B1E]/5"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ transformOrigin: "bottom" }}
              />
              <div className="relative">
                <div className="text-[10px] text-[#C62B1E] font-black uppercase tracking-[0.4em] mb-2">Brand Archetype</div>
                <div className="text-2xl font-black text-[#F7F7F7] uppercase mb-2">The Outlaw</div>
                <p className="text-[#9B9690] text-sm font-light">
                  "The safe choice costs more than you think."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values list */}
          <div className="space-y-px">
            {values.map((value, i) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-[#0D0D0D] border-b border-[#1A1A1A] p-6 flex gap-6 hover:bg-[#1A1A1A] transition-all duration-300 cursor-default"
              >
                <motion.span
                  className="text-[#3A3835] font-black text-sm mt-0.5 flex-shrink-0 group-hover:text-[#C62B1E] transition-colors duration-300"
                >
                  {value.number}
                </motion.span>
                <div>
                  <h3 className="font-black text-[#F7F7F7] uppercase tracking-wide mb-2 text-sm group-hover:text-[#F7F7F7] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-[#6B6560] text-sm font-light leading-relaxed group-hover:text-[#9B9690] transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
