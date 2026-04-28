"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const CUTS = [
  { bg: "#C62B1E", text: "#F7F7F7", word: "DUCK" },
  { bg: "#0D0D0D", text: "#F5C518", word: "YOUR" },
  { bg: "#F5C518", text: "#0D0D0D", word: "BRAND" },
];

export function PageLoader() {
  const [phase, setPhase] = useState<"cuts" | "hold" | "done">("cuts");
  const [cutIndex, setCutIndex] = useState(0);

  useEffect(() => {
    // Rapid match cuts — each frame ~160ms
    const timings = [0, 160, 320];
    const cutTimers = timings.map((t, i) =>
      setTimeout(() => setCutIndex(i), t)
    );
    // After cuts, hold the final loading screen
    const holdTimer = setTimeout(() => setPhase("hold"), 520);
    // Dismiss
    const doneTimer = setTimeout(() => setPhase("done"), 2200);

    return () => {
      cutTimers.forEach(clearTimeout);
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ── Match cut frames ── */}
          <AnimatePresence mode="wait">
            {phase === "cuts" && (
              <motion.div
                key={`cut-${cutIndex}`}
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: CUTS[cutIndex].bg }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.05 }}
              >
                <span
                  className="font-black uppercase leading-none select-none"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "clamp(4rem, 18vw, 14rem)",
                    color: CUTS[cutIndex].text,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {CUTS[cutIndex].word}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Hold screen — text logo + progress bar ── */}
          <AnimatePresence>
            {phase === "hold" && (
              <motion.div
                key="hold"
                className="absolute inset-0 bg-[#F5C518] flex flex-col items-center justify-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="font-black text-[#6B6560] uppercase leading-none tracking-tighter select-none"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "clamp(1.4rem, 4vw, 3rem)",
                  }}
                >
                  DUCKYOURBRAND
                </motion.span>

                <div className="w-36 h-px bg-black/15 overflow-hidden">
                  <motion.div
                    className="h-full bg-[#C62B1E]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
