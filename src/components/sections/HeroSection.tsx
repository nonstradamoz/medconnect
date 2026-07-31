"use client";
// This component is legacy — the homepage uses the inline Hero in page.tsx
// Kept for compatibility with any other routes that might import it.
import Link from "next/link";
import { ArrowRight, Shield, Award, Star } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section style={{ background: "linear-gradient(135deg, #017aaf 0%, #0c4a6e 100%)", position: "relative", overflow: "hidden", minHeight: "88vh", display: "flex", alignItems: "stretch" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Your trusted healthcare guide to{" "}
            <span style={{ textDecoration: "underline", textDecorationColor: "#daa837", textDecorationThickness: "4px" }}>India and UAE</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "520px" }}>
            <strong>Your Cure, Our Care.</strong> India's leading international and NRI patients services company.
          </p>
          <Link href="/contact" style={{ background: "#daa837", color: "#111111", fontWeight: 800, padding: "0.9rem 2rem", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            Contact Us <ArrowRight size={18} strokeWidth={3} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
