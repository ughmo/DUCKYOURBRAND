"use client";
import React from "react";
import { motion } from "framer-motion";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5 list-none m-0 p-0"
      >
        {[...Array(2)].map((_, dupIdx) => (
          <React.Fragment key={dupIdx}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${dupIdx}-${i}`}
                aria-hidden={dupIdx === 1 ? "true" : "false"}
                tabIndex={dupIdx === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="p-7 border border-[#1A1A1A] hover:border-[#C62B1E]/40 bg-[#0D0D0D] max-w-xs w-full cursor-default select-none group transition-colors duration-300 focus:outline-none"
              >
                {/* Red accent top bar on hover */}
                <div className="w-0 group-hover:w-8 h-px bg-[#C62B1E] mb-4 transition-all duration-500" />

                <blockquote className="m-0 p-0">
                  <p className="text-[#A8A49E] text-sm leading-relaxed font-light group-hover:text-[#C8C4BE] transition-colors duration-300">
                    {text}
                  </p>
                  <footer className="flex items-center gap-3 mt-5 pt-5 border-t border-[#1A1A1A]">
                    <img
                      width={36}
                      height={36}
                      src={image}
                      alt={`Avatar of ${name}`}
                      className="h-9 w-9 rounded-full object-cover ring-1 ring-[#3A3835] group-hover:ring-[#C62B1E]/40 transition-all duration-300"
                    />
                    <div className="flex flex-col">
                      <cite className="font-black not-italic text-xs text-[#F7F7F7] uppercase tracking-[0.1em]">
                        {name}
                      </cite>
                      <span className="text-[11px] text-[#6B6560] mt-0.5 font-medium">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};
