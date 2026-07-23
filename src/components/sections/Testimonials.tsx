"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Anderson",
    country: "United Kingdom 🇬🇧",
    treatment: "Hip Replacement",
    quote: "The level of care was beyond my expectations. From airport pickup to surgery and recovery in Kerala, everything was flawlessly organized.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Aisha Al-Mansoori",
    country: "UAE 🇦🇪",
    treatment: "Cardiology",
    quote: "MedConnect Global made a terrifying diagnosis manageable. The Case Manager was always available on WhatsApp, and the doctors at Aster were world-class.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "David Chen",
    country: "Australia 🇦🇺",
    treatment: "Dental Implants",
    quote: "I saved over 60% on dental work without compromising on quality. The clinic was state-of-the-art and I even enjoyed a backwater tour during recovery!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
];

export function Testimonials() {
  return (
    <>
      {/* Top wave */}
      <div style={{ background: "#F1F5F9", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "70px", display: "block", transform: "rotate(180deg)" }}>
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>

      <section style={{ background: "#F1F5F9", padding: "5rem 0" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{
              display: "inline-block", background: "#FFF3CD", color: "#B45309",
              fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase",
              letterSpacing: "0.08em", padding: "0.3rem 1rem", borderRadius: "9999px", marginBottom: "1rem"
            }}>Patient Stories</span>
            <h2 className="section-heading">Stories of Healing & Recovery</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "2rem",
                  border: "1.5px solid #E2E8F0",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Quote size={36} style={{ color: "#FFC107", opacity: 0.3, position: "absolute", top: "1.5rem", right: "1.5rem" }} />

                <div style={{ display: "flex", gap: "4px", marginBottom: "1.25rem" }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="#FFC107" style={{ color: "#FFC107" }} />
                  ))}
                </div>

                <p style={{ color: "#475569", lineHeight: 1.75, fontSize: "0.9rem", flex: 1, fontStyle: "italic", marginBottom: "1.5rem" }}>
                  "{t.quote}"
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid #F1F5F9", paddingTop: "1.25rem" }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", border: "2px solid #FFC107" }}
                  />
                  <div>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0F172A" }}>{t.name}</h4>
                    <p style={{ fontSize: "0.75rem", color: "#64748B" }}>{t.country} · {t.treatment}</p>
                  </div>
                </div>
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
