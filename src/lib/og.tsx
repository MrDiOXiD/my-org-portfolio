import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

// Latin-only on purpose: the OG renderer has no reliable Arabic-script shaping, and a broken Persian card is worse than none.
export function renderOg() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#fff",
          background: "linear-gradient(135deg,#060a16 0%,#0a1128 55%,#12285a 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "#2d63c2", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: 2 }}>CHATRA TECH</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, display: "flex" }}>From idea to impact.</div>
          <div style={{ fontSize: 32, color: "#8fb0ea", display: "flex" }}>Product design · Full-stack development · SEO &amp; growth</div>
        </div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.55)", display: "flex" }}>chatran.team</div>
      </div>
    ),
    OG_SIZE,
  );
}
