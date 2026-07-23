"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section style={{
      background: "#FFC107",
      padding: "6rem 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "-100px", right: "-60px",
        width: 350, height: 350, borderRadius: "50%",
        background: "rgba(255,255,255,0.15)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-80px", left: "5%",
        width: 250, height: 250, borderRadius: "50%",
        background: "rgba(15,23,42,0.08)",
        pointerEvents: "none",
      }} />

      <div className="container-wide" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3.25rem)",
          fontWeight: 800,
          color: "#0F172A",
          lineHeight: 1.15,
          marginBottom: "1.25rem",
        }}>
          Ready to Begin Your Healthcare Journey?
        </h2>
        <p style={{
          fontSize: "1.15rem", color: "#1E293B",
          lineHeight: 1.75, marginBottom: "3rem",
          maxWidth: "560px", margin: "0 auto 3rem",
        }}>
          Our dedicated team is available 24/7. Get a free consultation and a personalized treatment plan today.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-dark" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
            Book Free Consultation <ArrowRight size={18} />
          </Link>
          <a href="https://wa.me/1234567890" className="btn-outline-white" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>

        {/* Phone CTA */}
        <div style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "rgba(15,23,42,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <Phone size={20} style={{ color: "#0F172A" }} />
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "0.75rem", color: "#1E293B", fontWeight: 600 }}>24/7 Emergency Helpline</p>
            <a href="tel:+1234567890" style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A", textDecoration: "none" }}>
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
