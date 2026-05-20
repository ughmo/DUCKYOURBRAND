"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    id: "01",
    eyebrow: "Start Here",
    title: "Viral Diagnostic™",
    price: "AED 997",
    tag: "One-Time",
    q: "Want to know if your brand can actually go viral?",
    description: "We go deep into your brand, your audience, and your market. You leave with a clear roadmap — what to post, where, and why it will spread. Mo does this personally. Not a junior. Not a template.",
    deliverable: "Full virality roadmap + content blueprint",
    cta: "Book Your Diagnostic →",
  },
  {
    id: "02",
    eyebrow: "The Proof",
    title: "The Campaign",
    price: "AED 10,000",
    tag: "100K Views Guaranteed",
    q: "Ready to see what 100,000 organic views looks like for your brand?",
    description: "21 days. One campaign. 100,000 organic views — or we rebuild for free. This is the same system that drove 2M+ views for Gloss Boss Car Wash with AED 0 in ad spend. Engineered. Not hoped for.",
    deliverable: "Campaign strategy + content execution + results",
    cta: "Claim Your Campaign →",
  },
  {
    id: "03",
    eyebrow: "The Machine",
    title: "Attention Machine™",
    price: "AED 15,000–30,000 / month",
    tag: "Ongoing Retainer",
    q: "Want your brand to be the one everyone talks about — every single month?",
    description: "We install a repeatable content system inside your brand. Monthly viral campaigns, founder brand building, and a pipeline of inbound leads — all organic. The companies that own attention own their market.",
    deliverable: "Monthly campaigns + founder content + lead pipeline",
    cta: "Build Your Machine →",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-[#F5C518] border-t border-[#C4A010]/40 overflow-hidden">
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
            <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em]">Services</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
              className="text-4xl md:text-6xl font-black uppercase leading-tight mb-4"
            >
              <span className="text-[#6B5820]">We don&apos;t manage</span><br />
              <span className="text-[#0D0D0D]">social media.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#2C2100] text-lg max-w-xl font-light"
          >
            Three offers. Each with a clear outcome. Pick the one that matches where you are.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-px bg-[#C4A010]/40">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="relative bg-[#EDB80D] p-8 md:p-10 flex flex-col group hover:bg-[#E8B20A] transition-colors duration-300"
            >
              {/* Bottom red rule */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-[#C62B1E] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
              />

              {/* Eyebrow + number */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em]">{s.eyebrow}</span>
                <span className="text-[#C4A010]/60 text-4xl font-black leading-none">{s.id}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-[#0D0D0D] uppercase mb-1 leading-tight">
                {s.title}
              </h3>

              {/* Price + tag */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-[#C62B1E] font-black text-lg">{s.price}</span>
                <span className="text-[#6B5820] text-[10px] font-black uppercase tracking-[0.2em] border border-[#6B5820]/30 px-2 py-0.5">{s.tag}</span>
              </div>

              {/* Conversational question */}
              <p className="text-[#0D0D0D] font-bold text-sm leading-snug mb-4 italic">
                {s.q}
              </p>

              {/* Description */}
              <p className="text-[#2C2100] font-light text-sm leading-relaxed mb-6 flex-1">
                {s.description}
              </p>

              {/* Deliverable */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-4 h-px bg-[#C62B1E]" />
                <span className="text-[#6B5820] text-[10px] font-black uppercase tracking-[0.2em]">{s.deliverable}</span>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="text-[#C62B1E] text-[11px] font-black uppercase tracking-[0.25em] hover:text-[#0D0D0D] transition-colors duration-200 group-hover:translate-x-1 inline-block transition-transform"
              >
                {s.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[#6B5820] text-xs font-medium mt-10 text-center uppercase tracking-[0.3em]"
        >
          Not sure where to start? The Viral Diagnostic™ is always the right first step.
        </motion.p>

      </div>
    </section>
  );
}
