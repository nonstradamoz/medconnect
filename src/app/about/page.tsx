"use client";
import { Navbar, Footer } from "../page";
import { Shield, Users, Heart, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    { icon: Shield, title: "Our Vision", desc: "To be the most trusted and patient-centric global facilitator of medical tourism, setting the standard for quality, safety, digital convenience, and personalized support in healthcare travel." },
    { icon: Users, title: "Our Commitment", desc: "Our foundation is built on deep expertise in healthcare facilitation. We focus on building lasting relationships based on trust, ensuring that every patient receives the highest level of attention and care." },
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ padding: "10rem 0 6rem 0", background: "linear-gradient(135deg, #017aaf 0%, #01587d 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="med-badge" style={{ marginBottom: "1.5rem", background: "rgba(255,255,255,0.1)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Plus size={16} strokeWidth={3} /> WHO WE ARE
            </div>
            <h1 className="med-heading" style={{ marginBottom: "1.5rem", color: "#ffffff" }}>
              Compassionate Care <br /><span style={{ color: "#daa837", textShadow: "0 4px 20px rgba(218, 168, 55, 0.4)" }}>Beyond Borders</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
              Your trusted bridge to global healthcare excellence. We believe that quality care should be accessible and affordable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Middle Section (Split Layout) */}
      <section style={{ padding: "6rem 0", background: "var(--bg-secondary)" }}>
        <div className="grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "absolute", top: "5%", left: "-5%", width: "100%", height: "100%", background: "var(--blue-light)", borderRadius: 32, transform: "rotate(-3deg)" }} />
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
              alt="Medical Team" 
              style={{ width: "100%", height: 500, objectFit: "cover", borderRadius: 32, position: "relative", zIndex: 2 }}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="med-badge" style={{ marginBottom: "1.5rem" }}>
              <Plus size={16} strokeWidth={3} /> OUR MISSION
            </div>
            <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
              Dedicated to <span className="med-heading-highlight">Excellence</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              At MedConnect Global, our mission is simple yet profound: to empower individuals to make informed decisions about their healthcare by providing seamless access to the finest medical expertise, both globally and domestically.
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
              We believe that quality care should be accessible and affordable, and we are committed to guiding you on your path to recovery with integrity, transparency, and empathy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ background: "var(--bg-main)", padding: "8rem 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>
          
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="med-badge" style={{ marginBottom: "1.5rem" }}>
                <Plus size={16} strokeWidth={3} /> VISION & COMMITMENT
              </div>
              <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Our Core <span className="med-heading-highlight">Values</span>
              </h2>
            </motion.div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }}
                className="med-card" style={{ padding: "3rem" }}
              >
                <div style={{ width: 64, height: 64, borderRadius: 20, background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                  <v.icon size={32} color="var(--blue-primary)" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontWeight: 800, color: "var(--blue-dark)", fontSize: "1.4rem", marginBottom: "1rem" }}>{v.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
            
            {/* Third full width card for full commitment text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              className="med-card"
              style={{ gridColumn: "1 / -1", padding: "3rem", background: "var(--blue-primary)" }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem", flexWrap: "wrap" }}>
                <div style={{ width: 64, height: 64, borderRadius: 20, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Heart size={32} color="var(--blue-primary)" />
                </div>
                <div style={{ flex: 1, minWidth: 300 }}>
                  <h3 style={{ fontWeight: 800, color: "#fff", fontSize: "1.4rem", marginBottom: "1rem" }}>Addressing Our New Business Status</h3>
                  <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                    While MedConnect Global is a new name in medical tourism, our foundation is built on deep expertise in healthcare facilitation, patient advocacy, and medical logistics. Our team is driven by a passion for connecting patients with the care they deserve. We focus on building lasting relationships based on trust, ensuring that every patient who partners with us receives the highest level of attention and care.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
