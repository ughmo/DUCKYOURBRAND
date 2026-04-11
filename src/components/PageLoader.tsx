"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MascotWithEyes } from "@/components/ui/mascot-eyes";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] bg-[#0D0D0D] flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Red wipe */}
          <motion.div
            className="absolute inset-0 bg-[#C62B1E]"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            style={{ transformOrigin: "top" }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.76, 0, 0.24, 1] }}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative z-10 flex flex-col items-center gap-5"
          >
            {/* Mascot — eyes track cursor even during load */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
              <MascotWithEyes
                src="/mascot.png"
                imgClassName="w-28 h-auto"
              />
            </motion.div>

            {/* Logo text */}
            <span
              className="font-black text-[#F7F7F7] text-lg uppercase tracking-[0.1em]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              DUCKYOURBRAND
            </span>

            {/* Progress bar */}
            <div className="w-40 h-px bg-[#1A1A1A] overflow-hidden">
              <motion.div
                className="h-full bg-[#C62B1E]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
