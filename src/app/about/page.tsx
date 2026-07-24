"use client";
import { Navbar, Footer } from "../page";
import { Shield, Users, Heart, Plus, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { IdentifiedHospitals } from "@/components/sections/IdentifiedHospitals";

export default function AboutPage() {
  const values = [
    { icon: Shield, title: "Our Vision", desc: "To be the most trusted healthcare guide, setting global standards for quality, safety, and personalized medical travel." },
    { icon: Users, title: "Our Commitment", desc: "Built on deep healthcare expertise, we forge lasting relationships rooted in trust, ensuring every patient receives unparalleled attention and care." },
  ];

  const whyChooseUsReasons = [
    { title: "Expert Consultant Panel", desc: "Our medical panel ensures you receive guidance from the most qualified specialists." },
    { title: "Transparent Process", desc: "No hidden costs, no confusion. We provide clarity at every step of your journey." },
    { title: "Network of Excellence", desc: "Carefully vetted hospitals in top medical hubs ensuring the highest safety standards." },
    { title: "Personalized Care", desc: "Your journey is unique, and our services are tailored to meet your specific needs." },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: "10rem 0 6rem 0", background: "linear-gradient(135deg, #daa837 0%, #b58823 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="med-badge" style={{ marginBottom: "1.5rem", background: "rgba(255,255,255,0.1)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
              WHO WE ARE
            </div>
            <h1 className="med-heading" style={{ marginBottom: "1.5rem", color: "#ffffff" }}>
              Your trusted healthcare guide to <br /><span style={{ color: "#111111", textShadow: "none" }}>India and UAE</span>
            </h1>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                Your Cure, Our Care.
              </p>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
                India's leading international and NRI patients services company. Our consultant panel doctors identified hospitals in Mumbai, Delhi and Kerala.
              </p>
            </div>
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
              OUR MISSION
            </div>
            <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
              Committed to <span className="med-heading-highlight">Excellence</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Our goal at MedConnect Global is to empower patients with seamless access to top-tier medical expertise across India and the UAE.
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
              We ensure that world-class healthcare is both accessible and affordable, guiding you through your medical journey with complete transparency and unwavering support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "8rem 0", background: "linear-gradient(135deg, #daa837 0%, #b58823 100%)", overflow: "hidden" }}>
        <div className="grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <div className="med-badge" style={{ marginBottom: "1.5rem", background: "rgba(255,255,255,0.2)", color: "#111111", border: "1px solid rgba(255,255,255,0.4)" }}>
              OUR ADVANTAGE
            </div>
            <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "2rem", color: "#ffffff" }}>
              Why Choose <span style={{ color: "#111111" }}>Us?</span>
            </h2>
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000"
                alt="Medical Professionals"
                style={{ width: "100%", height: 350, objectFit: "cover", borderRadius: 32, border: "4px solid rgba(255, 255, 255, 0.3)", position: "relative", zIndex: 1, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              />
            </div>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {whyChooseUsReasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
                style={{ padding: "2rem", background: "#ffffff", borderRadius: 24, transition: "all 0.3s ease", cursor: "default", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(218, 168, 55, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <ChevronRight size={20} color="#daa837" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.5rem", color: "#111111" }}>{reason.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>{reason.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <IdentifiedHospitals />
      <section style={{ background: "var(--bg-main)", padding: "8rem 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>

          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="med-badge" style={{ marginBottom: "1.5rem" }}>
                VISION & COMMITMENT
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
                  <h3 style={{ fontWeight: 800, color: "#fff", fontSize: "1.4rem", marginBottom: "1rem" }}>Driven by Expertise and Compassion</h3>
                  <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                    Backed by extensive experience in medical logistics and patient advocacy, our team is dedicated to connecting you with the care you deserve. We handle every detail of your journey, allowing you to focus entirely on your health and recovery.
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
