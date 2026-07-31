"use client";
import Link from "next/link";
import { ArrowRight, Shield, Award, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } },
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #017aaf 0%, #0c4a6e 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "88vh",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {/* Decorative circles */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "-100px", right: "20%",
          width: "350px", height: "350px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute", bottom: "60px", left: "10%",
          width: "200px", height: "200px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.1)",
          pointerEvents: "none",
        }}
      />

      <div className="container-wide hero-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: "2rem",
        paddingTop: "5rem",
        paddingBottom: "8rem",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.15)", borderRadius: "9999px",
            padding: "0.35rem 1rem", marginBottom: "1.5rem"
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#daa837", display: "inline-block" }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              what we do...
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} style={{
            fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}>
            Your trusted healthcare guide to{" "}
            <span style={{ textDecoration: "underline", textDecorationColor: "#daa837", textDecorationThickness: "4px" }}>
              India and UAE
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
            maxWidth: "520px",
          }}>
            <strong>Your Cure, Our Care.</strong> India's leading international and NRI patients services company. Our consultant panel doctors identified hospitals in Mumbai, Delhi and Kerala.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <Link href="/contact" style={{ 
              background: "#daa837", color: "#111111", 
              fontWeight: 800, padding: "0.9rem 2rem", borderRadius: 999,
              display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.2s"
            }}>
              Contact Us <ArrowRight size={18} strokeWidth={3} />
            </Link>
            <Link href="/services" style={{ 
              background: "rgba(255,255,255,0.1)", color: "#ffffff", border: "1.5px solid rgba(255,255,255,0.2)",
              fontWeight: 700, padding: "0.9rem 2rem", borderRadius: 999,
              display: "inline-flex", alignItems: "center", textDecoration: "none",
              backdropFilter: "blur(10px)", transition: "background 0.2s"
            }}>
              Explore Treatments
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[
              { value: "250+", label: "Specialists" },
              { value: "150+", label: "Hospitals" },
              { value: "20+", label: "Countries" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1, type: "spring" }}
              >
                <p style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Doctor Image */}
        <motion.div 
          className="hero-img-col" 
          style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end", y: yImage }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Floating trust badges - hidden on mobile */}
          <motion.div 
            className="hero-badge" 
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{
              position: "absolute", top: "10%", left: "-8%",
              background: "#ffffff",
              borderRadius: "16px",
              padding: "0.9rem 1.2rem",
              boxShadow: "0 10px 40px rgba(15,23,42,0.15)",
              display: "flex", alignItems: "center", gap: "10px",
              zIndex: 2,
              cursor: "pointer"
            }}>
            <div style={{ background: "#FFF3CD", borderRadius: "10px", padding: "8px" }}>
              <Award size={20} style={{ color: "#E5AC06" }} />
            </div>
            <div>
              <p style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0F172A" }}>JCI Accredited</p>
              <p style={{ fontSize: "0.7rem", color: "#64748B" }}>Partner Hospitals</p>
            </div>
          </motion.div>

          <motion.div 
            className="hero-badge" 
            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{
              position: "absolute", top: "40%", right: "-5%",
              background: "#ffffff",
              borderRadius: "16px",
              padding: "0.9rem 1.2rem",
              boxShadow: "0 10px 40px rgba(15,23,42,0.15)",
              display: "flex", alignItems: "center", gap: "10px",
              zIndex: 2,
              cursor: "pointer"
            }}>
            <div style={{ background: "#F0FDF4", borderRadius: "10px", padding: "8px" }}>
              <Shield size={20} style={{ color: "#16A34A" }} />
            </div>
            <div>
              <p style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0F172A" }}>HIPAA Secure</p>
              <p style={{ fontSize: "0.7rem", color: "#64748B" }}>Your data, protected</p>
            </div>
          </motion.div>

          <motion.div 
            className="hero-badge" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{
              position: "absolute", bottom: "25%", left: "-5%",
              background: "#ffffff",
              borderRadius: "16px",
              padding: "0.9rem 1.2rem",
              boxShadow: "0 10px 40px rgba(15,23,42,0.15)",
              display: "flex", alignItems: "center", gap: "10px",
              zIndex: 2,
              cursor: "pointer"
            }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#FFC107" style={{ color: "#FFC107" }} />)}
            </div>
            <div>
              <p style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0F172A" }}>4.9 / 5.0</p>
              <p style={{ fontSize: "0.7rem", color: "#64748B" }}>Patient Rating</p>
            </div>
          </motion.div>

          {/* Doctor Image */}
          <div style={{
            width: "100%",
            maxWidth: "480px",
            borderRadius: "2rem 2rem 0 0",
            overflow: "hidden",
            position: "relative",
          }}>
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600&h=700"
              alt="Medical specialist"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Wave Bottom Divider */}
      <div style={{
        position: "absolute",
        bottom: -2,
        left: 0,
        right: 0,
        lineHeight: 0,
      }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 3rem !important;
            padding-bottom: 4rem !important;
          }
          .hero-img-col {
            width: 100%;
            margin-top: 4rem;
          }
          .hero-img-col > div:last-child {
            max-width: 280px !important;
            max-height: 300px;
            transform: translateY(150px);
          }
          .hero-img-col > div:last-child img {
            max-height: 300px;
            object-fit: cover;
            object-position: bottom center;
          }
          .hero-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}