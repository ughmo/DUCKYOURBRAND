"use client";
import { motion } from "framer-motion";
import { DYBLogo } from "./DYBLogo";

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1A1A1A] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <DYBLogo size="md" />
            <p className="text-[#6B6560] text-xs font-medium mt-3 tracking-wider">
              Attention is engineered, not earned.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-1 md:text-right"
          >
            <span className="text-[#6B6560] text-[10px] font-black uppercase tracking-[0.3em]">Egypt · UAE</span>
            <span className="text-[#6B6560] text-[10px] font-black uppercase tracking-[0.3em]">Markets 2026</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-px bg-[#1A1A1A] origin-left mb-6"
        />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[#6B6560] text-[10px] font-medium">
            © 2026 DUCKYOURBRAND. Not for redistribution. Internal use only.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[#6B6560] text-[10px] font-black uppercase tracking-[0.3em]">
              Built on 5M views. Fueled by zero ad spend.
            </span>
            <span className="text-[#C62B1E] font-black text-xs">◆</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
