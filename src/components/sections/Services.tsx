"use client";
import { ArrowRight, Activity, Bone, Eye, HeartPulse, Baby, Sparkles } from "lucide-react";
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } },
  };

  return (
    <section style={{ padding: "6rem 0", background: "var(--bg-main)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>
        
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ type: "spring", duration: 0.8 }}
          >
            <div className="med-badge" style={{ marginBottom: "1.5rem" }}>
              MEDICAL SERVICES
            </div>
            <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              Comprehensive<br /><span className="med-heading-highlight">Healthcare Services</span>
            </h2>
          </motion.div>
        </div>

        <motion.div 
          className="grid-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
              className="med-card"
              style={{
                padding: "2.5rem",
                display: "flex", flexDirection: "column",
                transition: "box-shadow 0.3s ease",
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
        </motion.div>
      </div>
    </section>
  );
}
