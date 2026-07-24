"use client";
import { Navbar, Footer } from "../page";
import { motion } from "framer-motion";
import { ShieldCheck, Plus } from "lucide-react";

export default function TermsPage() {
  const terms = [
    { num: "1", title: "Our Role", desc: "MedConnect Global acts as a facilitator, connecting patients with independent healthcare providers. We do not provide medical advice or medical services ourselves. The contract for medical treatment is strictly between you and the healthcare provider." },
    { num: "2", title: "Medical Information & Privacy", desc: "You are responsible for providing accurate and complete medical history through our secure upload portal. We handle your medical information with the utmost confidentiality in accordance with applicable privacy laws." },
    { num: "3", title: "Payments & Fees", desc: "We provide transparent cost estimates for medical packages. Our facilitation fees are clearly stated. Payments are typically made directly to the healthcare providers or in accordance with agreed schedules." },
    { num: "4", title: "Cancellations & Refunds", desc: "Policies regarding cancellations of medical procedures, accommodation, or travel arrangements are governed by the respective providers. We will facilitate discussions regarding refunds where applicable." },
    { num: "5", title: "Liability", desc: "While we strive to partner only with reputable providers, MedConnect Global is not liable for the outcome of any medical treatment or the negligence of any healthcare provider." },
    { num: "6", title: "Patient Responsibility", desc: "You are responsible for obtaining appropriate travel insurance, visas, and complying with all medical and travel regulations." },
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ padding: "10rem 0 6rem 0", background: "linear-gradient(135deg, #daa837 0%, #b58823 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="med-badge" style={{ marginBottom: "1.5rem", background: "rgba(255,255,255,0.1)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
              LEGAL
            </div>
            <h1 className="med-heading" style={{ marginBottom: "1.5rem", color: "#ffffff" }}>
              Terms of <span style={{ color: "#daa837", textShadow: "0 4px 20px rgba(218, 168, 55, 0.4)" }}>Business</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
              Transparent Partnerships for Your Peace of Mind
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "6rem 0", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="med-card" style={{ padding: "4rem" }}
          >
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "4rem", textAlign: "center", maxWidth: 600, margin: "0 auto 4rem auto" }}>
              These Terms of Business outline the relationship between MedConnect Global ("We," "Us") and the patient ("You"). By engaging our services, you agree to these terms.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {terms.map((term, i) => (
                <div key={i} style={{ display: "flex", gap: "2rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "var(--blue-primary)", fontWeight: 900, fontSize: "1.2rem" }}>{term.num}</span>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 800, color: "var(--blue-dark)", fontSize: "1.25rem", marginBottom: "0.75rem" }}>{term.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>{term.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid #f1f5f9", textAlign: "center" }}>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontStyle: "italic" }}>* Note: This is a simplified summary.</p>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
