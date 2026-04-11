"use client";
import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const EASE = [0.22, 1, 0.36, 1] as const;

// UAE / MENA / global brand logos using text since SVG logos need external URLs
const logos = [
  { name: "Emirates", sub: "Airline" },
  { name: "Namshi", sub: "Fashion" },
  { name: "Noon", sub: "E-Commerce" },
  { name: "talabat", sub: "Delivery" },
  { name: "Careem", sub: "Mobility" },
  { name: "Anghami", sub: "Streaming" },
  { name: "Fetchr", sub: "Logistics" },
  { name: "Bayut", sub: "Real Estate" },
];

function LogoItem({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-4 border border-[#1A1A1A] bg-[#0D0D0D] hover:border-[#C62B1E]/30 transition-colors duration-300 min-w-[140px]">
      <span
        className="text-[#C8C4BE] font-black text-sm uppercase tracking-[0.15em] leading-none whitespace-nowrap"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {name}
      </span>
      <span className="text-[#3A3835] text-[9px] font-medium uppercase tracking-[0.3em] mt-1">
        {sub}
      </span>
    </div>
  );
}

export function LogoCloudSection() {
  return (
    <section className="py-20 bg-[#0D0D0D] border-t border-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center"
        >
          <p className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.5em] mb-3">
            The brands making noise. The rest are just posting.
          </p>
          <div className="mx-auto h-px max-w-sm bg-[#1A1A1A] [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </motion.div>
      </div>

      {/* Slider row 1 — forward */}
      <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <InfiniteSlider gap={12} speed={30} speedOnHover={10}>
          {logos.map((l) => (
            <LogoItem key={l.name} {...l} />
          ))}
        </InfiniteSlider>
      </div>

      {/* Slider row 2 — reverse */}
      <div className="mt-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <InfiniteSlider gap={12} speed={25} speedOnHover={10} reverse>
          {[...logos].reverse().map((l) => (
            <LogoItem key={l.name + "-r"} {...l} />
          ))}
        </InfiniteSlider>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="h-px bg-[#1A1A1A] [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>
  );
}
