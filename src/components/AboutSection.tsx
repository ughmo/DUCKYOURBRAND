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
  { text: "A misfit gray duck",                    color: "#A8A49E", size: "clamp(0.95rem, 1.6vw, 1.8rem)",  weight: "300", mt: "0"    },
  { text: "wished he was a yellow duck.",           color: "#F7F7F7", size: "clamp(1.4rem, 2.6vw, 3rem)",    weight: "900", mt: "3px"  },
  { text: "So he wore one on his cap and clothes",   color: "#6B6560", size: "clamp(0.8rem, 1.1vw, 1.25rem)", weight: "300", mt: "18px" },
  { text: "to fit in.",                             color: "#A8A49E", size: "clamp(0.9rem, 1.4vw, 1.6rem)",  weight: "400", mt: "2px"  },
  { text: "It worked.",                             color: "#F7F7F7", size: "clamp(1.8rem, 3.5vw, 4.5rem)",  weight: "900", mt: "18px" },
  { text: "He looked like everyone else.",          color: "#6B6560", size: "clamp(0.8rem, 1.1vw, 1.25rem)", weight: "300", mt: "3px"  },
  { text: "So no one remembered him.",              color: "#D0CCC6", size: "clamp(1.1rem, 2.2vw, 2.6rem)",  weight: "900", mt: "18px" },
  { text: "Still a misfit.",                        color: "#C8C4BE", size: "clamp(0.9rem, 1.5vw, 1.8rem)",  weight: "500", mt: "18px" },
  { text: "Just hidden.",                           color: "#6B6560", size: "clamp(0.75rem, 1vw, 1.2rem)",   weight: "300", mt: "2px"  },
  { text: "Stop pretending to be the yellow duck.", color: "#E0DCD6", size: "clamp(0.85rem, 1.3vw, 1.5rem)", weight: "400", mt: "18px", italic: true },
];

export function AboutSection() {
  return (
    <section id="about" style={{ background: "#0D0D0D", borderTop: "1px solid #111", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}>

          {/* LEFT — mascot. NO opacity animation on ancestor of blend-mode element = no flash */}
          <div style={{ lineHeight: 0, backgroundColor: "#0D0D0D", position: "relative" }}>
            <img
              src="/mascot-suit.png"
              alt="DYB mascot"
              draggable={false}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                userSelect: "none",
                mixBlendMode: "lighten",
                willChange: "transform",
              }}
            />
          </div>

          {/* RIGHT — story */}
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

            {/* Story lines — staggered fade up */}
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
                color: "#F7F7F7",
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
