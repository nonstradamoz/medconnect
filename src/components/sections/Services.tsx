"use client";
import { ArrowRight, Activity, Bone, Eye, HeartPulse, Baby, Sparkles, Plus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { icon: Sparkles, title: "Wellness & Ayurveda", desc: "Comprehensive detoxification, rejuvenation, and chronic condition management in serene environments." },
  { icon: Bone, title: "Orthopedic Surgery", desc: "Advanced joint replacements, spinal care, and tailored sports medicine." },
  { icon: HeartPulse, title: "Cardiology", desc: "Expert diagnostics, interventional procedures, and complete cardiovascular care." },
  { icon: Baby, title: "Cosmetic & Plastic", desc: "Reconstructive and aesthetic procedures meticulously tailored to your goals." },
  { icon: Activity, title: "Fertility & IVF", desc: "Access to leading fertility clinics and advanced reproductive technologies." },
  { icon: Eye, title: "Comprehensive Care", desc: "State-of-the-art dental implants, surgeries, and advanced ophthalmology." },
];

export function Services() {
  return (
    <section style={{ padding: "6rem 0", background: "var(--bg-main)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>
        
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="med-badge" style={{ marginBottom: "1.5rem" }}>
              MEDICAL SERVICES
            </div>
            <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Comprehensive<br /><span className="med-heading-highlight">Healthcare Services</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="med-card"
              style={{
                padding: "2.5rem",
                display: "flex", flexDirection: "column"
              }}
            >
              <div style={{
                width: 64, height: 64,
                background: "var(--blue-light)",
                borderRadius: "20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "2rem",
              }}>
                <s.icon size={32} color="var(--blue-primary)" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "1rem" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, flex: 1, marginBottom: "2rem" }}>
                {s.desc}
              </p>
              
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--blue-primary)", fontWeight: 700, textDecoration: "none" }}>
                Read More <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
