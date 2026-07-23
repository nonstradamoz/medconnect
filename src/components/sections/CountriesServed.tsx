"use client";

const countries = [
  "🇮🇳 India", "🇦🇪 UAE", "🇴🇲 Oman", "🇶🇦 Qatar", "🇸🇦 Saudi Arabia",
  "🇰🇼 Kuwait", "🇧🇭 Bahrain", "🇲🇻 Maldives", "🇧🇩 Bangladesh", "🇱🇰 Sri Lanka",
  "🇰🇪 Kenya", "🇳🇬 Nigeria", "🇬🇧 UK", "🇨🇦 Canada", "🇦🇺 Australia", "🇺🇸 USA"
];

export function CountriesServed() {
  return (
    <>
      {/* Top wave */}
      <div style={{ background: "#F1F5F9", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "70px", display: "block", transform: "rotate(180deg)" }}>
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>

      <section style={{ background: "#F1F5F9", padding: "5rem 0" }}>
        <div className="container-wide" style={{ textAlign: "center" }}>
          <span style={{
            display: "inline-block", background: "#FFF3CD", color: "#B45309",
            fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase",
            letterSpacing: "0.08em", padding: "0.3rem 1rem", borderRadius: "9999px", marginBottom: "1rem"
          }}>Global Reach</span>
          <h2 className="section-heading" style={{ marginBottom: "0.75rem" }}>Patients from Around the World</h2>
          <p className="section-subheading" style={{ margin: "0 auto 3rem" }}>
            Our dedicated international desk provides seamless support in every country we serve.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
            {countries.map((c) => (
              <div key={c} style={{
                background: "#ffffff",
                border: "1.5px solid #E2E8F0",
                borderRadius: "9999px",
                padding: "0.5rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#0F172A",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: "6px",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#FFC107";
                  (e.currentTarget as HTMLElement).style.borderColor = "#FFC107";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "#ffffff";
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom wave */}
      <div style={{ background: "#F1F5F9", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "70px", display: "block" }}>
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>
    </>
  );
}
