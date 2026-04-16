import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DUCKYOURBRAND — Viral Marketing Agency UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D0D0D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 32, height: 2, background: "#C62B1E" }} />
          <span style={{ color: "#C62B1E", fontSize: 13, fontWeight: 900, letterSpacing: "0.3em", textTransform: "uppercase" }}>
            Viral Marketing · UAE & MENA
          </span>
        </div>

        {/* Main heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ color: "#F7F7F7", fontSize: 88, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", textTransform: "uppercase" }}>
            DUCK YOUR
          </div>
          <div style={{ color: "#C62B1E", fontSize: 88, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", textTransform: "uppercase" }}>
            BRAND.
          </div>
          <div style={{ color: "#6B6560", fontSize: 22, fontWeight: 300, marginTop: 16 }}>
            5M+ organic views. Zero ad spend. UAE&apos;s only proven viral system.
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ color: "#3A3835", fontSize: 13, fontWeight: 900, letterSpacing: "0.25em", textTransform: "uppercase" }}>
            duckyourbrand.com
          </span>
          <span style={{ color: "#3A3835", fontSize: 13, fontWeight: 900, letterSpacing: "0.25em", textTransform: "uppercase" }}>
            Dubai · UAE · MENA
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
