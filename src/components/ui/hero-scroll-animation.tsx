"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef, forwardRef } from "react";

interface SectionProps {
  scrollYProgress: MotionValue<number>;
  children: React.ReactNode;
}

export const ScrollSection1 = ({ scrollYProgress, children }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  return (
    <motion.section style={{ scale, rotate }} className="sticky top-0 h-screen overflow-hidden">
      {children}
    </motion.section>
  );
};

export const ScrollSection2 = ({ scrollYProgress, children }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3, 0]);
  return (
    <motion.section style={{ scale, rotate }} className="relative h-screen overflow-hidden">
      {children}
    </motion.section>
  );
};

export const HeroScrollContainer = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className = "" }, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const childArray = React.Children.toArray(children);

  return (
    <div ref={container} className={`relative h-[200vh] ${className}`}>
      {childArray[0] &&
        React.cloneElement(childArray[0] as React.ReactElement<SectionProps>, { scrollYProgress })}
      {childArray[1] &&
        React.cloneElement(childArray[1] as React.ReactElement<SectionProps>, { scrollYProgress })}
    </div>
  );
});

HeroScrollContainer.displayName = "HeroScrollContainer";
