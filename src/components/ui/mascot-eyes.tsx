"use client";
import { useEffect, useRef } from "react";

// Eye positions as % of the image's rendered width/height
// Calibrated to the DYB duck mascot PNG
const EYES = [
  { id: "left",  xPct: 0.408, yPct: 0.335 },
  { id: "right", xPct: 0.578, yPct: 0.335 },
];

const MAX_RADIUS = 3.2; // px — subtle, matches the squinting angry eyes
const PUPIL_SIZE = 7;   // px diameter

interface Props {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
}

export function MascotWithEyes({ src, alt = "DYB Mascot", className = "", imgClassName = "" }: Props) {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const imgRef   = useRef<HTMLImageElement>(null);
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef   = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const pupils = [leftRef.current, rightRef.current];

    const tick = () => {
      const img = imgRef.current;
      if (img) {
        const rect = img.getBoundingClientRect();
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        EYES.forEach((eye, i) => {
          const el = pupils[i];
          if (!el) return;

          // Eye centre in viewport coords
          const ex = rect.left + rect.width  * eye.xPct;
          const ey = rect.top  + rect.height * eye.yPct;

          const dx = mx - ex;
          const dy = my - ey;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const clamped = Math.min(dist, MAX_RADIUS) / Math.max(dist, 0.001);

          const tx = dx * clamped;
          const ty = dy * clamped;

          el.style.transform = `translate(calc(-50% + ${tx.toFixed(2)}px), calc(-50% + ${ty.toFixed(2)}px))`;
        });
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative inline-block select-none ${className}`}>
      {/* Mascot image — lighten blend removes the pure-black bg */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        draggable={false}
        className={`block ${imgClassName}`}
        style={{ mixBlendMode: "lighten" }}
      />

      {/* Pupils — direct DOM updates, no React re-renders */}
      {EYES.map((eye, i) => (
        <div
          key={eye.id}
          ref={i === 0 ? leftRef : rightRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            top:    `${eye.yPct * 100}%`,
            left:   `${eye.xPct * 100}%`,
            width:  PUPIL_SIZE,
            height: PUPIL_SIZE,
            borderRadius: "50%",
            background: "#1a0a00",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            willChange: "transform",
            // Subtle shadow so pupil reads over the white sclera
            boxShadow: "0 0 2px 1px rgba(0,0,0,0.6)",
          }}
        />
      ))}
    </div>
  );
}
