import { CheckCircle2, LayoutDashboard, MessageCircle, UploadCloud, Bell } from "lucide-react";
import Link from "next/link";

const features = [
  "Secure Medical Record Upload & AI Analysis",
  "Real-time Appointment & Treatment Tracking",
  "AI Assistant for Instant Medical Queries",
  "Digital Prescriptions & Reports",
  "WhatsApp Sync with Case Manager",
];

export function Technology() {
  return (
    <section style={{ background: "#ffffff", padding: "6rem 0" }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left: Content */}
          <div>
            <span style={{
              display: "inline-block", background: "#FFF3CD", color: "#B45309",
              fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase",
              letterSpacing: "0.08em", padding: "0.3rem 1rem", borderRadius: "9999px", marginBottom: "1rem"
            }}>Smart Technology</span>
            <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
              Healthcare Powered by Intelligent Technology
            </h2>
            <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.75, marginBottom: "2rem" }}>
              Our patient portal puts the full power of your healthcare journey in your hands — from initial consultation to post-treatment follow-up.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {features.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <CheckCircle2 size={20} style={{ color: "#FFC107", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.95rem", color: "#0F172A", fontWeight: 500 }}>{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/portal" className="btn-dark">Access Patient Portal</Link>
          </div>

          {/* Right: Dashboard Mockup */}
          <div style={{ position: "relative" }}>
            {/* Glow */}
            <div style={{
              position: "absolute", inset: "-10%",
              background: "radial-gradient(circle, rgba(255,193,7,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Browser mockup */}
            <div style={{
              background: "#F8FAFC",
              borderRadius: "18px",
              border: "1.5px solid #E2E8F0",
              boxShadow: "0 25px 60px rgba(15,23,42,0.15)",
              overflow: "hidden",
              position: "relative",
            }}>
              {/* Browser bar */}
              <div style={{ background: "#E2E8F0", padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", gap: "6px" }}>
                  {["#FC5F57", "#FEBC2E", "#28C840"].map((c) => (
                    <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{ flex: 1, background: "#ffffff", borderRadius: "8px", height: 26, display: "flex", alignItems: "center", paddingLeft: "0.75rem" }}>
                  <span style={{ fontSize: "0.72rem", color: "#94A3B8" }}>portal.medconnect.global</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div style={{ padding: "1.25rem", display: "flex", gap: "1rem" }}>
                {/* Sidebar */}
                <div style={{ width: 140, flexShrink: 0 }}>
                  {["Dashboard", "Records", "Appointments", "Messages", "Payment"].map((item, i) => (
                    <div key={i} style={{
                      padding: "0.5rem 0.75rem", borderRadius: "8px", marginBottom: "4px",
                      background: i === 0 ? "#FFF3CD" : "transparent",
                      fontSize: "0.75rem", fontWeight: i === 0 ? 700 : 500,
                      color: i === 0 ? "#B45309" : "#64748B",
                      display: "flex", alignItems: "center", gap: "6px",
                    }}>
                      <LayoutDashboard size={12} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main panel */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    {[
                      { label: "Next Visit", val: "Tomorrow", sub: "10:00 AM IST", color: "#FFF3CD", border: "#FDE68A" },
                      { label: "Reports", val: "3 New", sub: "Uploaded & Analyzed", color: "#F0FDF4", border: "#86EFAC" },
                    ].map((c) => (
                      <div key={c.label} style={{ background: c.color, borderRadius: "12px", padding: "0.875rem", border: `1px solid ${c.border}` }}>
                        <p style={{ fontSize: "0.7rem", color: "#64748B", fontWeight: 600 }}>{c.label}</p>
                        <p style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>{c.val}</p>
                        <p style={{ fontSize: "0.65rem", color: "#94A3B8" }}>{c.sub}</p>
                      </div>
                    ))}
                  </div>

                  {/* Upload area */}
                  <div style={{
                    background: "#ffffff", border: "2px dashed #E2E8F0", borderRadius: "12px",
                    padding: "1rem", display: "flex", alignItems: "center", gap: "10px"
                  }}>
                    <UploadCloud size={20} style={{ color: "#FFC107" }} />
                    <div>
                      <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#0F172A" }}>Upload Medical Reports</p>
                      <p style={{ fontSize: "0.65rem", color: "#94A3B8" }}>MRI, CT Scan, Blood Tests</p>
                    </div>
                  </div>

                  {/* Chat preview */}
                  <div style={{
                    background: "#ffffff", borderRadius: "12px", border: "1px solid #E2E8F0",
                    padding: "0.75rem", display: "flex", gap: "8px", alignItems: "center"
                  }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <MessageCircle size={16} style={{ color: "#ffffff" }} />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#0F172A" }}>Case Manager • Online</p>
                      <p style={{ fontSize: "0.65rem", color: "#94A3B8" }}>Your next appointment is confirmed!</p>
                    </div>
                    <div style={{ marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tech-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
