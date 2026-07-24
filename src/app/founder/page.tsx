"use client";
import { Navbar, Footer } from "../page";
import { motion } from "framer-motion";
import { Plus, Award, Globe, HeartPulse } from "lucide-react";

export default function FounderPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero / Intro Section */}
      <section style={{ padding: "8rem 0 4rem 0", background: "linear-gradient(180deg, #eff5fb 0%, #ffffff 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 1.5rem", textAlign: "center", position: "relative", zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="med-badge" style={{ marginBottom: "2rem", background: "var(--gold-light)", color: "var(--gold-primary)" }}>
              THE VISIONARY
            </div>
            <h1 className="med-heading" style={{ marginBottom: "1.5rem", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Meet Our <span style={{ color: "#017aaf" }}>Founder</span>
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
              A lifelong dedication to bridging the gap between world-class medical expertise and patients in need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: "4rem 0 8rem 0", background: "var(--bg-main)" }}>
        <div className="grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem", alignItems: "flex-start" }}>
          
          {/* Left: Founder Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: "sticky", top: "120px" }}
            className="sticky-desktop"
          >
            <div style={{ position: "relative", borderRadius: 32, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.06)" }}>
              <img 
                src="/founder.png" 
                alt="Jolly Malayil" 
                className="founder-img"
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", background: "linear-gradient(0deg, rgba(15,23,42,0.8) 0%, transparent 100%)", padding: "3rem 2rem 2rem 2rem" }}>
                <h3 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 800 }}>Jolly Malayil</h3>
                <p style={{ color: "#daa837", fontWeight: 700, fontSize: "1.1rem" }}>Founder & CEO, Chairman</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Biography */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ paddingTop: "2rem" }}
          >
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "2rem" }}>
              A Story of <span style={{ color: "#017aaf" }}>Compassion and Excellence</span>
            </h2>
            
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              With over two decades of experience in the international healthcare sector, our founder realized that finding the right medical care across borders was often a stressful and fragmented process for patients. 
            </p>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              MedConnect Global was established to solve this exact problem. By leveraging a vast network of internationally accredited hospitals and combining it with a seamless, patient-first concierge service, the mission has always been clear: to make world-class healthcare accessible to everyone.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", marginBottom: "3rem" }}>
              
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", background: "#eff5fb", padding: "2rem", borderRadius: 24 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                  <Award size={28} color="#017aaf" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "0.5rem" }}>20+ Years Experience</h4>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>Pioneering medical travel facilitation and forging strong partnerships with top-tier global medical institutions.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", background: "#eff5fb", padding: "2rem", borderRadius: 24 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                  <Globe size={28} color="#017aaf" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "0.5rem" }}>Global Network</h4>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>Built an exclusive network of JCI-accredited hospitals spanning across Asia, Europe, and the Americas.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", background: "#eff5fb", padding: "2rem", borderRadius: 24 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                  <HeartPulse size={28} color="#017aaf" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "0.5rem" }}>Patient-Centric Approach</h4>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>Instilled a company culture where empathy and holistic patient wellness are the core of every decision made.</p>
                </div>
              </div>

            </div>

            <blockquote style={{ padding: "2rem", borderLeft: "4px solid #daa837", background: "rgba(218, 168, 55, 0.05)", borderRadius: "0 24px 24px 0", fontSize: "1.25rem", fontStyle: "italic", color: "var(--blue-dark)", fontWeight: 600 }}>
              "Our goal isn't just to connect patients with doctors. It's to hold their hand through their entire journey to recovery, ensuring peace of mind at every step."
            </blockquote>

          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
