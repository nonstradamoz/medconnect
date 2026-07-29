"use client";
import { MessageSquare, FileText, Stethoscope, ClipboardList, Plane, Car, Building, Activity, Heart } from "lucide-react";

const steps = [
  { icon: MessageSquare, label: "Free Consultation", desc: "Speak with our experts" },
  { icon: FileText, label: "Upload Reports", desc: "Secure & encrypted" },
  { icon: Stethoscope, label: "Second Opinion", desc: "From top specialists" },
  { icon: ClipboardList, label: "Treatment Plan", desc: "Customized for you" },
  { icon: Plane, label: "Visa & Travel", desc: "Full documentation" },
  { icon: Car, label: "Airport Pickup", desc: "VIP concierge service" },
  { icon: Building, label: "Admission", desc: "Fast-track check-in" },
  { icon: Activity, label: "Treatment", desc: "World-class care" },
  { icon: Heart, label: "Recovery", desc: "Complete follow-up" },
];

export function MedicalJourney() {
  return (
    <section style={{ background: "#ffffff", padding: "6rem 0" }}>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{
            display: "inline-block", background: "#FFF3CD", color: "#B45309",
            fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase",
            letterSpacing: "0.08em", padding: "0.3rem 1rem", borderRadius: "9999px", marginBottom: "1rem"
          }}>Step by Step</span>
          <h2 className="section-heading" style={{ marginBottom: "0.75rem" }}>Your Medical Journey</h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            A seamless, guided process designed for your comfort and peace of mind.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
          position: "relative",
        }}>
          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: "center", position: "relative" }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: "absolute", top: "2.1rem", left: "calc(50% + 2.5rem)", right: "calc(-50% + 2.5rem)",
                  height: "2px", background: "linear-gradient(90deg, #FFC107, #E2E8F0)",
                  zIndex: 0,
                }} />
              )}

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Number */}
                <div style={{
                  width: 70, height: 70,
                  background: "#FFC107",
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1rem",
                  position: "relative",
                }}>
                  <step.icon size={26} style={{ color: "#0F172A" }} />
                  {/* Step number badge */}
                  <div style={{
                    position: "absolute", top: -2, right: 8,
                    width: 20, height: 20,
                    background: "#0F172A",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.65rem", fontWeight: 800, color: "#FFC107",
                  }}>
                    {i + 1}
                  </div>
                </div>

                <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0F172A", marginBottom: "4px" }}>
                  {step.label}
                </h4>
                <p style={{ fontSize: "0.75rem", color: "#94A3B8" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}