"use client";
import { useState } from "react";
import { Home, Stethoscope, Map, Sparkles, Car, Languages, UserCheck } from "lucide-react";

const familyServices = [
  { icon: Home, title: "Accommodation", desc: "Comfortable serviced apartments near the hospital." },
  { icon: Stethoscope, title: "Health Checkups", desc: "Comprehensive wellness packages for companions." },
  { icon: Map, title: "Tourism Packages", desc: "Customized backwater tours and local sightseeing." },
  { icon: Sparkles, title: "Ayurveda Wellness", desc: "Rejuvenating therapies for family members." },
  { icon: Car, title: "Transportation", desc: "Dedicated chauffeur services across the city." },
  { icon: Languages, title: "Language Support", desc: "Translators for the entire family, round the clock." },
];

export function InteractiveFamily() {
  const [choice, setChoice] = useState<"yes" | "no" | null>(null);

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
          <div style={{
            background: "#ffffff",
            borderRadius: "24px",
            padding: "3rem",
            border: "1.5px solid #E2E8F0",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}>
            <h2 className="section-heading" style={{ marginBottom: "0.75rem" }}>
              Is your family traveling with you?
            </h2>
            <p style={{ color: "#64748B", marginBottom: "2.5rem" }}>
              We offer complete support for patients and their companions alike.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
              <button
                onClick={() => setChoice("yes")}
                style={{
                  width: 120, height: 52,
                  background: choice === "yes" ? "#FFC107" : "#ffffff",
                  color: choice === "yes" ? "#0F172A" : "#0F172A",
                  border: choice === "yes" ? "2px solid #FFC107" : "2px solid #E2E8F0",
                  borderRadius: "9999px",
                  fontWeight: 700, fontSize: "1rem",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                YES ✓
              </button>
              <button
                onClick={() => setChoice("no")}
                style={{
                  width: 120, height: 52,
                  background: choice === "no" ? "#0F172A" : "#ffffff",
                  color: choice === "no" ? "#ffffff" : "#0F172A",
                  border: choice === "no" ? "2px solid #0F172A" : "2px solid #E2E8F0",
                  borderRadius: "9999px",
                  fontWeight: 700, fontSize: "1rem",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                NO ✗
              </button>
            </div>

            {choice === "yes" && (
              <div style={{ borderTop: "1.5px solid #E2E8F0", paddingTop: "2rem", textAlign: "left" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0F172A", marginBottom: "1.5rem", textAlign: "center" }}>
                  We've got your family covered too! 🏠
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
                  {familyServices.map((s, i) => (
                    <div key={i} style={{
                      padding: "1.25rem", borderRadius: "14px",
                      background: "#F8FAFC", border: "1px solid #E2E8F0",
                      textAlign: "center"
                    }}>
                      <div style={{
                        width: 46, height: 46, borderRadius: "12px",
                        background: "#FFF3CD",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 0.75rem",
                      }}>
                        <s.icon size={20} style={{ color: "#B45309" }} />
                      </div>
                      <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0F172A", marginBottom: "4px" }}>{s.title}</h4>
                      <p style={{ fontSize: "0.75rem", color: "#64748B", lineHeight: 1.5 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                  <a href="/contact" className="btn-yellow">Request Family Package</a>
                </div>
              </div>
            )}

            {choice === "no" && (
              <div style={{ borderTop: "1.5px solid #E2E8F0", paddingTop: "2rem" }}>
                <div style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"
                }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: "50%",
                    background: "#FFF3CD",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <UserCheck size={28} style={{ color: "#B45309" }} />
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0F172A" }}>
                    You're never alone with MedConnect.
                  </h3>
                  <p style={{ color: "#64748B", maxWidth: "400px" }}>
                    Your dedicated Case Manager will be by your side at every step — from arrival to recovery.
                  </p>
                  <a href="/contact" className="btn-dark">Meet Your Case Manager</a>
                </div>
              </div>
            )}
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
