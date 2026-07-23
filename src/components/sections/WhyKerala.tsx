"use client";
import { PiggyBank, HeartHandshake, Leaf, Plane, Clock, Award } from "lucide-react";

const benefits = [
  { icon: PiggyBank, title: "60–80% Lower Cost", desc: "Premium healthcare at a fraction of Western prices." },
  { icon: HeartHandshake, title: "World-Class Quality", desc: "JCI & NABH accredited hospitals with top technology." },
  { icon: Leaf, title: "Ayurvedic Heritage", desc: "The birthplace of Ayurveda for holistic healing." },
  { icon: Plane, title: "Easy Access", desc: "Direct international flights to Kochi & Trivandrum." },
  { icon: Clock, title: "Minimal Wait Time", desc: "Fast-track treatment scheduling for international patients." },
  { icon: Award, title: "Excellence Awards", desc: "Repeatedly ranked among Asia's top medical destinations." },
];

export function WhyKerala() {
  return (
    <section style={{
      background: "#0F172A",
      padding: "6rem 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: 350, height: 350,
        borderRadius: "50%",
        background: "rgba(255,193,7,0.06)",
        pointerEvents: "none",
      }} />

      <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          {/* Left */}
          <div>
            <span style={{
              display: "inline-block", background: "rgba(255,193,7,0.15)", color: "#FFC107",
              fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase",
              letterSpacing: "0.08em", padding: "0.3rem 1rem", borderRadius: "9999px", marginBottom: "1rem"
            }}>God's Own Country</span>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Why Kerala is the World's Premier Medical Destination
            </h2>
            <p style={{ color: "#94A3B8", lineHeight: 1.75, marginBottom: "2rem", fontSize: "1rem" }}>
              Kerala blends advanced modern medicine with ancient Ayurvedic wisdom, set in one of the most serene natural environments on earth — the perfect place to heal.
            </p>
            <a href="/contact" className="btn-yellow">Start Your Journey</a>
          </div>

          {/* Right: Cinematic image with overlay */}
          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", height: "440px" }}>
            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=700"
              alt="Kerala backwaters"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(15,23,42,0.5) 0%, transparent 70%)"
            }} />

            {/* Benefit pills overlaid */}
            <div style={{ position: "absolute", inset: 0, padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "0.75rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {benefits.map((b, i) => (
                  <span key={i} style={{
                    background: "rgba(255,193,7,0.95)",
                    color: "#0F172A",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}>
                    <b.icon size={12} />
                    {b.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid below */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1.25rem",
          marginTop: "3rem",
        }}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "1.5rem",
              display: "flex", gap: "14px", alignItems: "flex-start",
            }}>
              <div style={{
                width: 42, height: 42, flexShrink: 0,
                background: "rgba(255,193,7,0.15)",
                borderRadius: "12px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <b.icon size={20} style={{ color: "#FFC107" }} />
              </div>
              <div>
                <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.9rem", marginBottom: "4px" }}>{b.title}</h4>
                <p style={{ color: "#94A3B8", fontSize: "0.8rem", lineHeight: 1.5 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
