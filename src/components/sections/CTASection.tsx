"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #017aaf 0%, #0c4a6e 100%)",
      padding: "6rem 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "-100px", right: "-60px",
        width: 350, height: 350, borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-80px", left: "5%",
        width: 250, height: 250, borderRadius: "50%",
        background: "rgba(0,0,0,0.15)",
        pointerEvents: "none",
      }} />

      <div className="container-wide" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3.25rem)",
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.15,
          marginBottom: "1.25rem",
        }}>
          Ready to Begin Your Healthcare Journey?
        </h2>
        <p style={{
          fontSize: "1.15rem", color: "rgba(255,255,255,0.85)",
          lineHeight: 1.75, marginBottom: "3rem",
          maxWidth: "560px", margin: "0 auto 3rem",
        }}>
          Our dedicated team is available 24/7. Get a free consultation and a personalized treatment plan today.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" style={{
            background: "#daa837", color: "#111111",
            fontWeight: 800, padding: "0.9rem 2rem", borderRadius: 999,
            display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none",
            boxShadow: "0 4px 14px rgba(0,0,0,0.2)"
          }}>
            Book Free Consultation <ArrowRight size={18} strokeWidth={3} />
          </Link>
          <a href="https://wa.me/1234567890" style={{
            background: "rgba(255,255,255,0.1)", color: "#ffffff", border: "1.5px solid rgba(255,255,255,0.2)",
            fontWeight: 700, padding: "0.8rem 2rem", borderRadius: 999,
            display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none"
          }}>
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>

        {/* Phone CTA */}
        <div style={{ marginTop: "3.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Phone size={20} style={{ color: "#ffffff" }} />
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>24/7 Emergency Helpline</p>
            <a href="tel:+1234567890" style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", textDecoration: "none" }}>
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
