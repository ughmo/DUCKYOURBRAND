"use client";

const items = [
  "5M+ Organic Views",
  "Zero Ad Spend",
  "Proven System",
  "UAE · MENA",
  "Attention Engineered",
  "Offensive Marketing",
  "Repeatable Virality",
  "The Outlaw Agency",
  "No Filler. Only Firepower.",
  "Results Over Aesthetics",
];

export function TickerBar() {
  const doubled = [...items, ...items];

  return (
    <div className="w-full bg-[#C62B1E] py-3 overflow-hidden border-y border-[#a82318]">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-[#F7F7F7] text-xs font-bold uppercase tracking-[0.25em] whitespace-nowrap"
          >
            {item}
            <span className="text-[#a82318]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
