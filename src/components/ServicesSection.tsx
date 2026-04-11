"use client";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";

const services = [
  {
    title: "Viral Campaign Engineering",
    description: "We identify psychological triggers, build the hook, and execute the campaign. Not hope. Engineering.",
    tags: ["Psychology", "Hook Building", "Execution"],
  },
  {
    title: "Offensive Content Strategy",
    description: "Content that provokes. Content that spreads. Content that makes your competitor's followers find you.",
    tags: ["Strategy", "Provocation", "Spread"],
  },
  {
    title: "Repeatable Content System",
    description: "We install a system inside your brand that produces viral content monthly. One viral hit is luck. A system is DYB.",
    tags: ["System", "Monthly", "Scalable"],
  },
  {
    title: "Make The Founder Unavoidable",
    description: "The founder is the product. We make you the one name everyone in your market knows — whether they want to or not.",
    tags: ["Personal Brand", "Authority", "Visibility"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-[#0D0D0D] border-t border-[#1A1A1A] overflow-hidden">
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
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-black text-[#F7F7F7] uppercase leading-tight mb-4"
            >
              We don't manage<br />
              <span className="text-[#C62B1E]">social media.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[#9B9690] text-lg max-w-xl font-light"
          >
            Four things. Each one tied to a specific result. None of them are content calendars.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#1A1A1A]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#0D0D0D] p-8 md:p-10 group overflow-hidden"
            >
              <Spotlight size={220} />

              <motion.div
                className="absolute bottom-0 left-0 h-px bg-[#C62B1E] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
              />

              <div className="text-[#C62B1E] text-[10px] font-black uppercase tracking-[0.4em] mb-4">0{i + 1}</div>
              <h3 className="text-xl font-black text-[#F7F7F7] uppercase mb-4 leading-tight group-hover:text-[#F7F7F7]">
                {service.title}
              </h3>
              <p className="text-[#6B6560] font-light text-sm leading-relaxed mb-6 group-hover:text-[#9B9690] transition-colors duration-300">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ borderColor: "#C62B1E", color: "#F7F7F7" }}
                    className="text-[#6B6560] text-[10px] font-black uppercase tracking-[0.2em] border border-[#3A3835] px-2.5 py-1 transition-colors duration-200 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
