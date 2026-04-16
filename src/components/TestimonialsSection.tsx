"use client";
import { motion } from "framer-motion";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonial-v2";

const EASE = [0.22, 1, 0.36, 1] as const;

const testimonials: Testimonial[] = [
  {
    text: "5 million organic views from a brand nobody knew. I didn't believe it was systematic until I saw it happen in real time — no paid amplification.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&auto=format&fit=crop&q=80",
    name: "Ahmed K.",
    role: "CEO, Egypt",
  },
  {
    text: "Every agency we spoke to promised results. DYB showed us proof before we even signed. That's a completely different conversation.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop&q=80",
    name: "Fatima R.",
    role: "Head of Marketing, Dubai F&B",
  },
  {
    text: "The system they built for us didn't just get views — it got customers. Conversion from organic content was unlike anything we'd seen.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&q=80",
    name: "Omar S.",
    role: "Founder, Riyadh Retail Co.",
  },
  {
    text: "We were invisible on social media for three years. In six weeks with DYB, our brand was being shared by people we'd never heard of.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&auto=format&fit=crop&q=80",
    name: "Nour A.",
    role: "Brand Director, UAE Luxury Brand",
  },
  {
    text: "I've worked with agencies in London, Dubai and New York. None of them could show what DYB showed me: a repeatable system for attention.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&q=80",
    name: "Khalid M.",
    role: "CMO, Regional Hospitality Group",
  },
  {
    text: "Organic reach is dead everywhere — except when you know how to engineer it. These guys know how.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&auto=format&fit=crop&q=80",
    name: "Sara H.",
    role: "Marketing Manager, Tech Startup UAE",
  },
  {
    text: "The ROI was immediate. By week three we had more inbound leads than our entire last quarter of paid campaigns.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&auto=format&fit=crop&q=80",
    name: "Aliza K.",
    role: "Growth Lead, E-commerce Brand",
  },
  {
    text: "I was skeptical that organic could be engineered. DYB walked me through their exact framework before I signed anything. That transparency is rare.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&auto=format&fit=crop&q=80",
    name: "Tariq F.",
    role: "VP Marketing, MENA Retail",
  },
  {
    text: "DYB doesn't talk about vanity metrics. Every conversation is about attention that converts. That's rare in this industry.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&auto=format&fit=crop&q=80",
    name: "Hana S.",
    role: "Digital Director, UAE Agency",
  },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-24 md:py-36 bg-[#0D0D0D] border-t border-[#1A1A1A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-xl">
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
            <span className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em]">
              Social Proof
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              id="testimonials-heading"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
              className="text-4xl md:text-6xl font-black text-[#F7F7F7] uppercase leading-tight"
            >
              They saw it.<br />
              <span className="text-[#C62B1E]">They believed it.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            className="text-[#A8A49E] text-base font-light leading-relaxed mt-4"
          >
            From Egypt to the UAE — brands that stopped paying for invisible content.
          </motion.p>
        </div>

        {/* Scrolling columns */}
        <div
          className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] max-h-[720px] overflow-hidden"
          role="region"
          aria-label="Scrolling testimonials"
        >
          <TestimonialsColumn testimonials={col1} duration={18} />
          <TestimonialsColumn testimonials={col2} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={col3} className="hidden lg:block" duration={20} />
        </div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[#A8A49E] hover:text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-300 group"
          >
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
            Become the next proof
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
