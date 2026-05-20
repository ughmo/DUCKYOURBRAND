"use client";
import { motion } from "framer-motion";

const E = [0.22, 1, 0.36, 1] as const;

type StoryLine = {
  text: string;
  color: string;
  size: string;
  weight: string;
  italic?: boolean;
  mt?: string;
};

const STORY: StoryLine[] = [
  { text: "A misfit gray duck",                    color: "#6B5820", size: "clamp(0.95rem, 1.6vw, 1.8rem)",  weight: "300", mt: "0"    },
  { text: "wished he was a yellow duck.",           color: "#0D0D0D", size: "clamp(1.4rem, 2.6vw, 3rem)",    weight: "900", mt: "3px"  },
  { text: "So he wore one on his cap and clothes",  color: "#2C2100", size: "clamp(0.8rem, 1.1vw, 1.25rem)", weight: "300", mt: "18px" },
  { text: "to fit in.",                             color: "#6B5820", size: "clamp(0.9rem, 1.4vw, 1.6rem)",  weight: "400", mt: "2px"  },
  { text: "It worked.",                             color: "#0D0D0D", size: "clamp(1.8rem, 3.5vw, 4.5rem)",  weight: "900", mt: "18px" },
  { text: "He looked like everyone else.",          color: "#2C2100", size: "clamp(0.8rem, 1.1vw, 1.25rem)", weight: "300", mt: "3px"  },
  { text: "So no one remembered him.",              color: "#0D0D0D", size: "clamp(1.1rem, 2.2vw, 2.6rem)",  weight: "900", mt: "18px" },
  { text: "Still a misfit.",                        color: "#2C2100", size: "clamp(0.9rem, 1.5vw, 1.8rem)",  weight: "500", mt: "18px" },
  { text: "Just hidden.",                           color: "#6B5820", size: "clamp(0.75rem, 1vw, 1.2rem)",   weight: "300", mt: "2px"  },
  { text: "Stop pretending to be the yellow duck.", color: "#2C2100", size: "clamp(0.85rem, 1.3vw, 1.5rem)", weight: "400", mt: "18px", italic: true },
];

export function AboutSection() {
  return (
    <section id="about" style={{ background: "#F5C518", borderTop: "1px solid rgba(196,160,16,0.4)", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem" }}>

        {/*
          Responsive grid:
          - Mobile (<768px):  single column, mascot centered above story
          - Tablet (768px+):  2 columns, mascot left, story right
          Uses Tailwind for breakpoints, inline style only where Tailwind can't reach
        */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-12 items-center">

          {/* MASCOT — full width centered on mobile, left column on desktop */}
          <div
            className="flex justify-center md:block"
            style={{ backgroundColor: "#F5C518", lineHeight: 0 }}
          >
            <img
              src="/mascot-suit.png"
              alt="DYB mascot"
              draggable={false}
              className="w-[72vw] max-w-[340px] md:w-full md:max-w-none"
              style={{
                height: "auto",
                display: "block",
                userSelect: "none",
                willChange: "transform",
              }}
            />
          </div>

          {/* STORY */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.4, ease: E }}
              style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}
            >
              <span style={{ width: "28px", height: "1px", background: "#C62B1E", flexShrink: 0 }} />
              <span style={{
                color: "#C62B1E",
                fontSize: "10px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.42em",
                fontFamily: "'Poppins', sans-serif",
              }}>
                The Story
              </span>
            </motion.div>

            {/* Story lines */}
            {STORY.map(({ text, color, size, weight, italic, mt }, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: E }}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: size,
                  fontWeight: weight,
                  color,
                  fontStyle: italic ? "italic" : "normal",
                  lineHeight: 1.15,
                  marginTop: mt,
                  display: "block",
                }}
              >
                {text}
              </motion.p>
            ))}

            {/* Red rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.45, ease: E }}
              style={{
                width: "36px",
                height: "2px",
                background: "#C62B1E",
                transformOrigin: "left",
                marginTop: "22px",
                marginBottom: "14px",
              }}
            />

            {/* DUCKYOURBRAND. */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.7, ease: E }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(1.4rem, 3.5vw, 5rem)",
                fontWeight: 900,
                color: "#0D0D0D",
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              DUCKYOURBRAND.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
