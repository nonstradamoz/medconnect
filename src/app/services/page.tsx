"use client";
import { Navbar, Footer } from "../page";
import { Services as ServicesGrid } from "@/components/sections/Services";
import { CheckCircle2, MapPin, ChevronRight, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const facilitation = [
    {
      title: "Pre-Travel Planning & Consultation", items: [
        { t: "Patient Interactive Portal", d: "Securely upload your medical documents and records directly through our website." },
        { t: "Expert Second Opinions", d: "Detailed second opinions from renowned doctors before you decide to travel." },
        { t: "Automated Communication", d: "Automated WhatsApp integrations to keep you updated on your itinerary." }
      ]
    },
    {
      title: "Travel & Ground Support", items: [
        { t: "End-to-End Concierge", d: "Complete on-the-ground support including airport transfers and translation." },
        { t: "Accommodation", d: "Arranging safe, comfortable lodging options near your chosen medical facility." }
      ]
    },
    {
      title: "Family & Companion Care", items: [
        { t: "Family Wellness", d: "Comprehensive health check-ups for accompanying family members." }
      ]
    },
    {
      title: "Post-Treatment Care", items: [
        { t: "Appointments", d: "Coordinating crucial aftercare consultations with your medical team." },
        { t: "Reminders", d: "Timely alerts for medication schedules and upcoming follow-ups." }
      ]
    }
  ];



  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: "10rem 0 6rem 0", background: "linear-gradient(135deg, #daa837 0%, #b58823 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="med-badge" style={{ marginBottom: "1.5rem", background: "rgba(255,255,255,0.1)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
              ALL SERVICES
            </div>
            <h1 className="med-heading" style={{ marginBottom: "1.5rem", color: "#ffffff" }}>
              Our Medical <span style={{ color: "#000000ff", textShadow: "0 4px 20px rgba(218, 168, 55, 0.4)" }}>Specialties</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
              We offer a full spectrum of services designed to make your medical journey stress-free, technologically advanced, and successful for both you and your loved ones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid (Reused) */}
      <div style={{ marginTop: "-2rem" }}>
        <ServicesGrid />
      </div>

      {/* End to End Facilitation */}
      <section style={{ background: "var(--bg-secondary)", padding: "8rem 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "5rem" }}
          >
            <div className="med-badge" style={{ marginBottom: "1.5rem" }}>
              FULL SUPPORT
            </div>
            <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Our End-to-End <span className="med-heading-highlight">Facilitation</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {facilitation.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(218, 168, 55, 0.25)" }}
                className="med-card" 
                style={{ 
                  padding: "2.5rem",
                  border: "2px solid #daa837",
                  boxShadow: "0 8px 30px rgba(218, 168, 55, 0.15)",
                  background: "#111111"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: "linear-gradient(135deg, #daa837 0%, #b58823 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.2rem" }}>{i + 1}</span>
                  </div>
                  <h3 style={{ fontWeight: 800, color: "#ffffff", fontSize: "1.2rem", lineHeight: 1.3 }}>{category.title}</h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {category.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 12 }}>
                      <CheckCircle2 size={20} color="#daa837" style={{ flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <strong style={{ display: "block", color: "#ffffff", fontSize: "1rem", marginBottom: "0.25rem" }}>{item.t}</strong>
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.6 }}>{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
