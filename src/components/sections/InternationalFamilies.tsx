"use client";
import { Plane, Home, Users, Calendar, Clock, CreditCard, Shield, Globe2 } from "lucide-react";

const benefits = [
  { icon: Plane, title: "Airport Concierge", desc: "VIP pickup and drop-off from the airport." },
  { icon: Home, title: "Family Accommodation", desc: "Luxury hotels near your treatment center." },
  { icon: Users, title: "Language Translators", desc: "Native speakers for seamless communication." },
  { icon: Calendar, title: "Fast Appointments", desc: "Zero waiting time for international patients." },
  { icon: Clock, title: "Recovery Planning", desc: "Tailored post-treatment recovery programs." },
  { icon: CreditCard, title: "Insurance Support", desc: "Assistance with international health claims." },
  { icon: Shield, title: "Medical Visa", desc: "End-to-end visa documentation assistance." },
  { icon: Globe2, title: "Global Support", desc: "Support in 15+ languages, 24 hours a day." },
];

export function InternationalFamilies() {
  return (
    <section style={{ background: "#ffffff", padding: "6rem 0" }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          {/* Left: Image */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "24px", overflow: "hidden", height: "520px" }}>
              <img
                src="https://images.unsplash.com/photo-1551076805-e18690c5e561?auto=format&fit=crop&q=80&w=700"
                alt="International patient care"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {/* Floating stat */}
            <div style={{
              position: "absolute", bottom: "2rem", right: "-2rem",
              background: "#FFC107", borderRadius: "16px",
              padding: "1.25rem 1.5rem",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
            }}>
              <p style={{ fontSize: "2rem", fontWeight: 800, color: "#0F172A", lineHeight: 1 }}>98%</p>
              <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1E293B" }}>Satisfaction Rate</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span style={{
              display: "inline-block", background: "#FFF3CD", color: "#B45309",
              fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase",
              letterSpacing: "0.08em", padding: "0.3rem 1rem", borderRadius: "9999px", marginBottom: "1rem"
            }}>Why Choose Us</span>
            <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
              Why International Families Choose MedConnect
            </h2>
            <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.7, marginBottom: "2rem" }}>
              We take care of every detail — from medical visas to post-treatment recovery — so you can focus entirely on healing.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{
                    width: 38, height: 38, flexShrink: 0,
                    background: "#FFF3CD",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <b.icon size={18} style={{ color: "#B45309" }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0F172A", marginBottom: "2px" }}>{b.title}</h4>
                    <p style={{ fontSize: "0.8rem", color: "#64748B", lineHeight: 1.5 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .intl-grid { grid-template-columns: 1fr !important; }
          .intl-img { display: none; }
        }
      `}</style>
    </section>
  );
}
