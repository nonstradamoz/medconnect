"use client";
import Link from "next/link";
import { ArrowRight, Shield, Award, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      style={{
        background: "#FFC107",
        position: "relative",
        overflow: "hidden",
        minHeight: "88vh",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "-100px", right: "20%",
        width: "350px", height: "350px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.12)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "60px", left: "10%",
        width: "200px", height: "200px",
        borderRadius: "50%",
        background: "rgba(15,23,42,0.07)",
        pointerEvents: "none",
      }} />

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
        <div>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(15,23,42,0.1)", borderRadius: "9999px",
            padding: "0.35rem 1rem", marginBottom: "1.5rem"
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0F172A", display: "inline-block" }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0F172A", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Premium Medical Concierge
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)",
            fontWeight: 800,
            color: "#0F172A",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}>
            Your Trusted Partner for Quality{" "}
            <span style={{ textDecoration: "underline", textDecorationColor: "rgba(15,23,42,0.3)", textDecorationThickness: "3px" }}>
              Global & Domestic
            </span>{" "}
            Healthcare
          </h1>

          <p style={{
            fontSize: "1.1rem",
            color: "#1E293B",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
            maxWidth: "520px",
          }}>
            Connecting patients to world-class medical expertise across borders — with compassion, cutting-edge technology, and complete peace of mind.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <Link href="/contact" className="btn-dark">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline-white">
              Explore Treatments
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[
              { value: "250+", label: "Specialists" },
              { value: "150+", label: "Hospitals" },
              { value: "20+", label: "Countries" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0F172A", lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1E293B", marginTop: "2px" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Doctor Image */}
        <div className="hero-img-col" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
          {/* Floating trust badges - hidden on mobile */}
          <div className="hero-badge" style={{
            position: "absolute", top: "10%", left: "-8%",
            background: "#ffffff",
            borderRadius: "16px",
            padding: "0.9rem 1.2rem",
            boxShadow: "0 10px 40px rgba(15,23,42,0.15)",
            display: "flex", alignItems: "center", gap: "10px",
            zIndex: 2,
          }}>
            <div style={{ background: "#FFF3CD", borderRadius: "10px", padding: "8px" }}>
              <Award size={20} style={{ color: "#E5AC06" }} />
            </div>
            <div>
              <p style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0F172A" }}>JCI Accredited</p>
              <p style={{ fontSize: "0.7rem", color: "#64748B" }}>Partner Hospitals</p>
            </div>
          </div>

          <div className="hero-badge" style={{
            position: "absolute", top: "40%", right: "-5%",
            background: "#ffffff",
            borderRadius: "16px",
            padding: "0.9rem 1.2rem",
            boxShadow: "0 10px 40px rgba(15,23,42,0.15)",
            display: "flex", alignItems: "center", gap: "10px",
            zIndex: 2,
          }}>
            <div style={{ background: "#F0FDF4", borderRadius: "10px", padding: "8px" }}>
              <Shield size={20} style={{ color: "#16A34A" }} />
            </div>
            <div>
              <p style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0F172A" }}>HIPAA Secure</p>
              <p style={{ fontSize: "0.7rem", color: "#64748B" }}>Your data, protected</p>
            </div>
          </div>

          <div className="hero-badge" style={{
            position: "absolute", bottom: "25%", left: "-5%",
            background: "#ffffff",
            borderRadius: "16px",
            padding: "0.9rem 1.2rem",
            boxShadow: "0 10px 40px rgba(15,23,42,0.15)",
            display: "flex", alignItems: "center", gap: "10px",
            zIndex: 2,
          }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#FFC107" style={{ color: "#FFC107" }} />)}
            </div>
            <div>
              <p style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0F172A" }}>4.9 / 5.0</p>
              <p style={{ fontSize: "0.7rem", color: "#64748B" }}>Patient Rating</p>
            </div>
          </div>

          {/* Doctor Image */}
          <div style={{
            width: "100%",
            maxWidth: "480px",
            borderRadius: "2rem 2rem 0 0",
            overflow: "hidden",
            position: "relative",
          }}>
            <img
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
        </div>
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
