"use client";
import { Award, Play } from "lucide-react";

const hospitals = [
  {
    name: "Aster Medcity",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=700&h=450",
    badges: ["JCI", "NABH"]
  },
  {
    name: "Apollo Hospitals",
    location: "Chennai, India",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=700&h=450",
    badges: ["JCI", "NABL"]
  },
  {
    name: "Rajagiri Hospital",
    location: "Aluva, Kerala",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=700&h=450",
    badges: ["NABH", "ISO"]
  },
];

export function HospitalNetwork() {
  return (
    <>
      {/* Wave top */}
      <div style={{ background: "#0F172A", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "70px", display: "block", transform: "rotate(180deg)" }}>
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>

      <section style={{ background: "#0F172A", padding: "5rem 0 6rem" }}>
        <div className="container-wide">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={{
                display: "inline-block", background: "rgba(255,193,7,0.15)", color: "#FFC107",
                fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase",
                letterSpacing: "0.08em", padding: "0.3rem 1rem", borderRadius: "9999px", marginBottom: "0.75rem"
              }}>Our Network</span>
              <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#ffffff" }}>
                Premium Partner Hospitals
              </h2>
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}>
            {hospitals.map((h, i) => (
              <div
                key={i}
                className="card-hover"
                style={{ borderRadius: "18px", overflow: "hidden", position: "relative", cursor: "pointer" }}
              >
                <div style={{ height: 240, overflow: "hidden", position: "relative" }}>
                  <img
                    src={h.image}
                    alt={h.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 50%)"
                  }} />
                  {/* Play btn */}
                  <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 52, height: 52, borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    color: "#ffffff",
                  }}>
                    <Play size={20} style={{ marginLeft: "2px" }} />
                  </div>

                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem" }}>
                    <div style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
                      {h.badges.map((b) => (
                        <span key={b} style={{
                          background: "#FFC107", color: "#0F172A",
                          fontSize: "0.65rem", fontWeight: 800, padding: "2px 8px", borderRadius: "5px"
                        }}>{b}</span>
                      ))}
                    </div>
                    <h3 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 700 }}>{h.name}</h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem" }}>{h.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave bottom */}
      <div style={{ background: "#0F172A", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "70px", display: "block" }}>
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>
    </>
  );
}
