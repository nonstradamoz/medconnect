"use client";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, ChevronDown, Mail, MapPin, Phone, Plus } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

// --- NAVBAR ---
export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div style={{ position: "fixed", top: 20, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "center", padding: "0 1.5rem", pointerEvents: "none" }}>
        <nav style={{
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          borderRadius: 999,
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          width: "100%",
          maxWidth: 1200,
          padding: "0.8rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pointerEvents: "auto"
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <img src="/logo-icon.png" alt="MedConnect Global" style={{ height: "38px", width: "auto", objectFit: "contain" }} />
            <span style={{ fontWeight: 800, fontSize: "1.4rem", color: "var(--blue-dark)", letterSpacing: "-0.5px" }}>MedConnect</span>
          </Link>

          {/* Links (Desktop) */}
          <div className="nav-links">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Contact Us", path: "/contact" }
            ].map(({ label, path }) => {
              const isActive = pathname === path;
              return (
                <Link key={label} href={path} style={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: isActive ? "var(--blue-dark)" : "var(--text-dark)",
                  textDecoration: "none",
                  background: isActive ? "var(--blue-light)" : "transparent",
                  padding: "0.4rem 1rem",
                  borderRadius: "999px",
                  transition: "all 0.2s ease"
                }}>
                  {label}
                </Link>
              )
            })}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/portal" style={{ 
              fontWeight: 700, 
              fontSize: "0.95rem", 
              color: "#ffffff", 
              textDecoration: "none",
              padding: "0.6rem 1.2rem",
              background: "#111111",
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
            }} className="desktop-only">
              <Users size={16} color="#daa837" />
              Patient Portal
            </Link>
            <Link href="/contact" className="med-button-primary desktop-only">
              Contact Us
              <div className="med-button-icon">
                <ArrowUpRight size={16} strokeWidth={3} />
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
          </div>

        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0,
              background: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              padding: "6rem 2rem 2rem 2rem",
              zIndex: 99,
              borderBottom: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact Us", path: "/contact" },
                { label: "Patient Portal", path: "/portal" }
              ].map(({ label, path }) => (
                <Link
                  key={label}
                  href={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: pathname === path ? "var(--blue-primary)" : "var(--text-dark)",
                    textDecoration: "none"
                  }}
                >
                  {label}
                </Link>
              ))}

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="med-button-primary" style={{ marginTop: "1rem" }}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { Users, Star } from "lucide-react";

import heroImg from "@/assets/hero/image_bg.png";
import heroImgMobile from "@/assets/hero/image_bg_mobile.png";

// --- HERO SECTION ---
function Hero() {
  const [exiting, setExiting] = useState(false);

  const handleExplore = () => {
    setExiting(true);
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      setTimeout(() => setExiting(false), 800);
    }, 500);
  };

  return (
    <motion.section
      className="home-hero-section"
      animate={exiting ? { y: "-30vh", opacity: 0, scale: 0.97 } : { y: 0, opacity: 1, scale: 1 }}
      transition={exiting ? { duration: 0.55, ease: [0.76, 0, 0.24, 1] } : { duration: 0 }}
      style={{ position: "relative", overflow: "hidden", padding: "4rem 0 0 0", background: "linear-gradient(135deg, #daa837 0%, #b58823 100%)", minHeight: "100vh", display: "flex", alignItems: "center" }}
    >

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(218,168,55,0.15) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }}
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: "absolute", bottom: "10%", right: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }}
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{ position: "absolute", top: "40%", right: "30%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }}
      />

      {/* Floating Particle Dots */}
      {[
        { top: "15%", left: "20%", delay: 0 },
        { top: "70%", left: "10%", delay: 1.5 },
        { top: "30%", left: "45%", delay: 0.8 },
        { top: "80%", left: "55%", delay: 2.5 },
        { top: "20%", left: "70%", delay: 1.2 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          style={{ position: "absolute", top: p.top, left: p.left, width: 8, height: 8, borderRadius: "50%", background: "#daa837", pointerEvents: "none", zIndex: 0 }}
        />
      ))}

      {/* Background Watermark Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "22vw",
          fontWeight: 900,
          color: "rgba(255, 255, 255, 0.16)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 0,
          letterSpacing: "-0.04em",
        }}
      >
        MEDCONNECT
      </motion.div>

      <div className="hero-container">

        {/* Left: Text */}
        <div className="hero-text">

          {/* Animated badge
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(218,168,55,0.15)", border: "1px solid rgba(218,168,55,0.4)", borderRadius: 999, padding: "0.4rem 1rem", marginBottom: "1.5rem" }}
          >
            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#daa837" }} />
            </motion.div>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#daa837", letterSpacing: "0.08em", textTransform: "uppercase" }}>what we do...</span>
          </motion.div> */}

          {/* Staggered heading */}
          <div style={{ marginBottom: "1.5rem" }}>
            {["Your trusted", "healthcare guide to", "India and UAE"].map((word, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, skewY: 3 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "block",
                  overflow: "hidden",
                  paddingBottom: "0.3em",
                }}
              >
                <span className="med-heading" style={{
                  display: "block",
                  lineHeight: 1.1,
                  fontSize: "clamp(2.3rem, 5vw, 5rem)",
                  color: word === "India and UAE" ? "#111111" : "#ffffff",
                  textShadow: "none",
                }}>
                  {word}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ marginBottom: "2.5rem", maxWidth: 550 }}
          >
            <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
              Your Cure, Our Care.
            </p>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
              India's leading international and NRI patients services company. Our consultant panel doctors identified hospitals in Mumbai, Delhi and Kerala.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: "inline-block" }}
          >
            <Link href="/contact" className="med-button-primary" style={{ background: "#ffffff", color: "#111111" }}>
              Contact Us
              <div className="med-button-icon" style={{ background: "#111111", color: "#ffffff" }}>
                <ArrowUpRight size={16} strokeWidth={3} />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Right: Image with float animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-wrapper"
        >
          {/* Shimmer ring behind doctor */}
          <motion.div
            className="hero-shimmer-ring"
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", borderRadius: "50%", border: "2px solid rgba(218,168,55,0.3)", pointerEvents: "none" }}
          />

          <picture>
            <source media="(max-width: 1000px)" srcSet={heroImgMobile.src} />
            <img
              src={heroImg.src}
              alt="Doctor"
              className="hero-doctor-img"
            />
          </picture>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="mobile-hide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", cursor: "pointer", zIndex: 50, display: "flex", flexDirection: "column", alignItems: "center", color: "#ffffff" }}
        onClick={handleExplore}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "0.5rem" }}>EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

// --- HIGHLIGHT SERVICES (Home preview) ---
function ServicesPreview() {
  const services = [
    { title: "Wellness & Ayurveda", desc: "Comprehensive detoxification, rejuvenation, and chronic condition management." },
    { title: "Advanced Surgery", desc: "Access to world-class orthopedic, cardiac, and reconstructive surgeries." },
    { title: "Specialized Care", desc: "Leading fertility clinics, advanced dentistry, and ophthalmology solutions." }
  ];

  return (
    <section id="explore" style={{ padding: "6rem 0", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>

        <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", marginBottom: "4rem" }}>
          <div className="med-badge" style={{ marginBottom: "1.5rem" }}>
            MEDICAL SERVICES
          </div>
          <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Comprehensive<br /><span className="med-heading-highlight">Healthcare Services</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 600, margin: "1.5rem auto 0 auto", lineHeight: 1.6 }}>
            MedConnect offers a broad spectrum of healthcare services designed to meet all your medical needs ensuring seamless, coordinated care.
          </p>
        </div>

        <div className="grid-3" style={{ textAlign: "left", marginBottom: "3rem" }}>
          {services.map((s, i) => (
            <motion.div key={i} className="med-card" style={{ padding: "2.5rem", display: "flex", flexDirection: "column" }}>
              <div style={{ width: 64, height: 64, borderRadius: 20, background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                <CheckCircle2 size={32} color="var(--blue-primary)" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "1rem" }}>{s.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, flex: 1, marginBottom: "2rem" }}>{s.desc}</p>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--blue-primary)", fontWeight: 700, textDecoration: "none" }}>
                Read More <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        <Link href="/services" className="med-button-primary" style={{ background: "#ffffff", color: "var(--blue-primary)", border: "2px solid var(--blue-primary)" }}>
          View All Services
          <div className="med-button-icon" style={{ background: "var(--blue-primary)", color: "#fff" }}>
            <ArrowUpRight size={16} strokeWidth={3} />
          </div>
        </Link>
      </div>
    </section>
  );
}

// --- TESTIMONIALS ---
function Testimonials() {
  const stories = [
    { name: "Mark Lewis", role: "Visitor", text: "The staff were welcoming and kept the family informed throughout. The hospital felt calm, clean, and well organised. A truly caring environment." },
    { name: "Sue Parker", role: "Patient", text: "It was a routine checkup but my doctor found something early. Because it was caught in time, I recovered fully. Do not skip them." },
    { name: "Lisa Nair", role: "Patient", text: "My doctor here actually listened — asked about my lifestyle, stress, and sleep. That approach made all the difference." },
  ];

  return (
    <section style={{ padding: "6rem 0", background: "var(--bg-main)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>

        <div style={{ marginBottom: "4rem" }}>
          <div className="med-badge" style={{ marginBottom: "1.5rem" }}>
            PATIENT STORIES
          </div>
          <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Trusted by Patients,<br /><span className="med-heading-highlight">Proven by Care</span>
          </h2>
        </div>

        <div className="grid-3" style={{ textAlign: "left" }}>
          {stories.map((s, i) => (
            <div key={i} className="med-card" style={{ padding: "2.5rem", display: "flex", flexDirection: "column" }}>
              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, flex: 1, marginBottom: "2.5rem" }}>"{s.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--blue-light)", overflow: "hidden" }}>
                  <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${s.name}`} alt={s.name} style={{ width: "100%", height: "100%" }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: "var(--blue-dark)", fontSize: "1.1rem" }}>{s.name}</h4>
                  <p style={{ color: "var(--blue-primary)", fontSize: "0.9rem", fontWeight: 600 }}>{s.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- LARGE CTA BANNER & FOOTER ---
export function Footer({ hideCTA = false }: { hideCTA?: boolean }) {
  return (
    <>
      {/* Massive CTA Banner overlapping footer */}
      {!hideCTA && (
        <div style={{ maxWidth: 1000, margin: "4rem auto -100px auto", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>
          <div style={{
            background: "var(--blue-primary)",
            borderRadius: 32,
            padding: "4rem 2rem",
            textAlign: "center",
            color: "#fff",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Subtle pattern background */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.1, background: "radial-gradient(circle at center, #ffffff 2px, transparent 2.5px) 0 0 / 20px 20px" }} />

            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="med-badge" style={{ background: "#ffffff", color: "var(--blue-primary)", marginBottom: "1.5rem" }}>
                BOOK NOW
              </div>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, marginBottom: "1rem" }}>Ready to Schedule Your Visit?</h2>
              <p style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: 600, margin: "0 auto 2.5rem auto" }}>
                Schedule your appointment today and receive compassionate care from experienced healthcare professionals.
              </p>
              <Link href="/contact" className="med-button-primary" style={{ background: "#ffffff", color: "var(--gold-primary)" }}>
                Contact Us
                <div className="med-button-icon" style={{ background: "var(--gold-primary)", color: "#fff" }}>
                  <ArrowUpRight size={16} strokeWidth={3} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ background: "var(--bg-secondary)", paddingTop: "180px", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "4rem", marginBottom: "4rem" }}>

          {/* Brand Col */}
          <div style={{ gridColumn: "1 / -1", maxWidth: 300 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
              <img src="/logo-icon.png" alt="MedConnect Global" style={{ height: "44px", width: "auto", objectFit: "contain" }} />
              <span style={{ fontWeight: 800, fontSize: "1.5rem", color: "var(--blue-dark)", letterSpacing: "-0.5px" }}>MedConnect</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Compassionate healthcare, trusted specialists, and modern medical care for every stage of life.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "1.5rem" }}>Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {["Home", "About Us", "Services", "Contact Us"].map(l => (
                <Link key={l} href="#" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem" }}>{l}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "1.5rem" }}>Our Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {["Emergency Care", "Cardiology", "Neurology", "General Care"].map(l => (
                <Link key={l} href="#" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem" }}>{l}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "1.5rem" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <Phone size={18} color="var(--blue-primary)" /> +1 (800) 555-1234
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <Mail size={18} color="var(--blue-primary)" /> info@medconnect.com
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>
                <MapPin size={18} color="var(--blue-primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                123 Healthcare Ave, NY 10001
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "2rem 1.5rem 0 1.5rem", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 500 }}>Copyright © {new Date().getFullYear()} MedConnect Global. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

// --- FOUNDER SECTION ---
function FounderSection() {
  return (
    <section style={{ padding: "6rem 0", background: "var(--bg-main)" }}>
      <div className="grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem", alignItems: "center" }}>

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ position: "relative" }}
        >
          {/* Founder photo */}
          <div className="founder-img-wrapper">
            <img
              src="/founder.png"
              alt="Jolly Malayil - CEO, Chairman"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform 0.5s ease" }}
            />
          </div>
          {/* Decorative element */}
          <div style={{ position: "absolute", bottom: -20, right: -20, background: "var(--bg-main)", padding: "1.5rem", borderRadius: 24, boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>
            <p style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.2 }}>
              Visionary<br /><span style={{ color: "#daa837" }}>Leadership</span>
            </p>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="med-badge" style={{ marginBottom: "1.5rem" }}>
            MEET THE FOUNDER
          </div>
          <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
            A Commitment to <span style={{ color: "#daa837" }}>Global Care</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            A traditional Catholic family from Alleppey, Kerala, the Malayil brothers have built a legacy spanning 33+ years across the GCC and beyond — from medical clinics and pharmacies to manufacturing and finance.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            As the youngest brother and Chairman & CEO of Malayil Family Business since 1994, Mr. Jolly Malayil has driven an extraordinary expansion across 20+ businesses and 7 major sectors. MedConnect Global is his vision to bring that same excellence and family spirit to global healthcare — making world-class medical care accessible to all.
          </p>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "0.25rem" }}>Jolly Malayil</h3>
            <p style={{ color: "var(--blue-primary)", fontWeight: 700, fontSize: "0.95rem" }}>Chairman & CEO — Malayil Family Business, Neil Group of Companies & MedConnect Global</p>
          </div>

          <Link href="/founder" className="med-button-primary" style={{ display: "inline-flex", background: "#daa837", color: "#ffffff" }}>
            Know More About The Founder
            <div className="med-button-icon" style={{ color: "#daa837" }}>
              <ArrowRight size={16} strokeWidth={3} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import { FAQ } from "@/components/sections/FAQ";
import { IdentifiedHospitals } from "@/components/sections/IdentifiedHospitals";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesPreview />
      <IdentifiedHospitals />
      <Testimonials />
      <FAQ />
      <FounderSection />
      <Footer />
    </main>
  );
}
