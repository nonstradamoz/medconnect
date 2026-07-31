"use client";
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, MapPin, Phone, Star, Users, Zap, Shield, Check } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import heroImg from "@/assets/hero/image_bg.png";
import heroImgMobile from "@/assets/hero/image_bg_mobile.png";
import { FAQ } from "@/components/sections/FAQ";
import { IdentifiedHospitals } from "@/components/sections/IdentifiedHospitals";

// ─── NAVBAR ─────────────────────────────────────────────
export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "fixed", top: 20, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "center", padding: "0 1.5rem", pointerEvents: "none" }}
      >
        <nav style={{
          background: "rgba(2, 9, 23, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: 999,
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
          width: "100%", maxWidth: 1200, padding: "0.75rem 1.25rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          pointerEvents: "auto",
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img src="/logo-icon.png" alt="MedConnect" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
            <span style={{ fontWeight: 800, fontSize: "1.25rem", color: "#ffffff", letterSpacing: "-0.5px" }}>MedConnect</span>
          </Link>
          <div className="nav-links">
            {[{ label: "Home", path: "/" }, { label: "About Us", path: "/about" }, { label: "Services", path: "/services" }, { label: "Contact Us", path: "/contact" }].map(({ label, path }) => {
              const isActive = pathname === path;
              return (
                <Link key={label} href={path} style={{
                  fontWeight: 600, fontSize: "0.9rem",
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  background: isActive ? "rgba(1,122,175,0.2)" : "transparent",
                  padding: "0.4rem 1rem", borderRadius: 999, transition: "all 0.2s ease",
                  border: isActive ? "1px solid rgba(1,122,175,0.3)" : "1px solid transparent",
                }}>
                  {label}
                </Link>
              );
            })}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Link href="/portal" className="desktop-only" style={{ fontWeight: 700, fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", padding: "0.5rem 1.1rem", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", gap: "0.4rem", transition: "all 0.2s" }}>
              <Users size={14} color="#daa837" /> Patient Portal
            </Link>
            <Link href="/contact" className="med-button-primary desktop-only" style={{ padding: "0.6rem 1rem 0.6rem 1.4rem", fontSize: "0.875rem" }}>
              Contact Us <div className="med-button-icon" style={{ width: 28, height: 28 }}><ArrowUpRight size={14} strokeWidth={3} /></div>
            </Link>
            <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </nav>
      </motion.div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} style={{ position: "fixed", top: 0, left: 0, right: 0, background: "rgba(2,9,23,0.98)", backdropFilter: "blur(24px)", padding: "6rem 2rem 3rem", zIndex: 99, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
              {[{ label: "Home", path: "/" }, { label: "About Us", path: "/about" }, { label: "Services", path: "/services" }, { label: "Contact Us", path: "/contact" }, { label: "Patient Portal", path: "/portal" }].map(({ label, path }) => (
                <Link key={label} href={path} onClick={() => setMobileOpen(false)} style={{ fontWeight: 700, fontSize: "1.4rem", color: pathname === path ? "#22c7ff" : "rgba(255,255,255,0.8)", textDecoration: "none" }}>{label}</Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="med-button-primary" style={{ marginTop: "1rem" }}>Get in Touch</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── HERO ────────────────────────────────────────────────
function Hero() {
  const [exiting, setExiting] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const handleExplore = () => {
    setExiting(true);
    setTimeout(() => { window.scrollTo({ top: window.innerHeight, behavior: "smooth" }); setTimeout(() => setExiting(false), 800); }, 400);
  };
  const stats = [{ value: "250+", label: "Specialists" }, { value: "150+", label: "Hospitals" }, { value: "20+", label: "Countries" }, { value: "98%", label: "Satisfaction" }];
  return (
    <motion.section className="home-hero-section" style={{ position: "relative", overflow: "hidden", padding: "4rem 0 0 0", background: "var(--bg-main)", minHeight: "100vh", display: "flex", alignItems: "center", opacity: heroOpacity, y: heroY }}
      animate={exiting ? { scale: 0.97, opacity: 0 } : { scale: 1, opacity: 1 }} transition={exiting ? { duration: 0.5 } : { duration: 0 }}>
      {/* Radial glows */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: "5%", left: "15%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(218,168,55,0.1) 0%, transparent 70%)" }} />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} style={{ position: "absolute", bottom: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(1,122,175,0.15) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>
      {/* Particles */}
      {[{ top: "20%", left: "8%", delay: 0, size: 6, color: "#daa837" }, { top: "65%", left: "12%", delay: 1.5, size: 4, color: "#017aaf" }, { top: "40%", left: "88%", delay: 0.8, size: 5, color: "#22c7ff" }, { top: "75%", left: "80%", delay: 2.2, size: 4, color: "#daa837" }, { top: "15%", left: "75%", delay: 1.0, size: 6, color: "#017aaf" }].map((p, i) => (
        <motion.div key={i} animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: p.delay }} style={{ position: "absolute", top: p.top, left: p.left, width: p.size, height: p.size, borderRadius: "50%", background: p.color, pointerEvents: "none", zIndex: 0 }} />
      ))}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5 }} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "20vw", fontWeight: 900, color: "rgba(255,255,255,0.02)", whiteSpace: "nowrap", pointerEvents: "none", zIndex: 0, letterSpacing: "-0.04em" }}>MEDCONNECT</motion.div>

      <div className="hero-container">
        <div className="hero-text">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(218,168,55,0.1)", border: "1px solid rgba(218,168,55,0.3)", borderRadius: 999, padding: "0.4rem 1rem", marginBottom: "2rem" }}>
            <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }}><div style={{ width: 7, height: 7, borderRadius: "50%", background: "#daa837" }} /></motion.div>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#daa837", letterSpacing: "0.08em", textTransform: "uppercase" }}>Trusted Healthcare Guide</span>
          </motion.div>

          <div style={{ marginBottom: "1.75rem" }}>
            {[{ text: "Your trusted", gold: false }, { text: "healthcare guide to", gold: false }, { text: "India and UAE", gold: true }].map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 48, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }} style={{ display: "block", overflow: "hidden", paddingBottom: "0.15em" }}>
                <span className="med-heading" style={{ display: "block", lineHeight: 1.08, fontSize: "clamp(2.5rem, 5.5vw, 5.25rem)", ...(line.gold ? { background: "linear-gradient(135deg, #daa837, #f5cc60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : { color: "#ffffff" }) }}>{line.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} style={{ marginBottom: "2.75rem", maxWidth: 520 }}>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
              <span style={{ color: "#ffffff", fontWeight: 700 }}>Your Cure, Our Care.</span>{" "}India&rsquo;s leading international and NRI patients services company with consultant-identified hospitals in Mumbai, Delhi, and Kerala.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", marginBottom: "3.5rem" }}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="med-button-primary">Get Free Consultation <div className="med-button-icon"><ArrowUpRight size={16} strokeWidth={3} /></div></Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.7)", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", padding: "0.85rem 1.75rem", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, transition: "all 0.25s" }}>
                Explore Treatments <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 + i * 0.1 }}>
                <p style={{ fontSize: "2rem", fontWeight: 900, color: "#ffffff", lineHeight: 1, letterSpacing: "-1px" }}>{s.value}</p>
                <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="hero-image-wrapper">
          <motion.div className="hero-shimmer-ring" animate={{ scale: [1, 1.06, 1], opacity: [0.25, 0.55, 0.25] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", borderRadius: "50%", border: "1.5px solid rgba(218,168,55,0.35)", pointerEvents: "none" }} />
          <picture>
            <source media="(max-width: 1000px)" srcSet={heroImgMobile.src} />
            <img src={heroImg.src} alt="Doctor" className="hero-doctor-img" />
          </picture>
        </motion.div>
      </div>

      <motion.div className="mobile-hide" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} onClick={handleExplore} whileHover={{ scale: 1.1 }} style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", cursor: "pointer", zIndex: 50, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.4)" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ChevronDown size={20} /></motion.div>
      </motion.div>
    </motion.section>
  );
}

// ─── SERVICES PREVIEW ────────────────────────────────────
function ServicesPreview() {
  const services = [
    { icon: Zap, title: "Wellness & Ayurveda", desc: "Comprehensive detoxification, rejuvenation, and chronic condition management in serene environments.", color: "#daa837" },
    { icon: Shield, title: "Advanced Surgery", desc: "Access to world-class orthopedic, cardiac, and reconstructive surgeries with top specialists.", color: "#017aaf" },
    { icon: Star, title: "Specialized Care", desc: "Leading fertility clinics, advanced dentistry, and ophthalmology solutions tailored to you.", color: "#22c7ff" },
  ];
  return (
    <section id="explore" style={{ padding: "8rem 0", background: "var(--bg-secondary)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(1,122,175,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="med-badge" style={{ marginBottom: "1.5rem" }}>Medical Services</div>
          <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", marginBottom: "1.25rem" }}>
            Comprehensive<br /><span className="med-heading-highlight">Healthcare Services</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            MedConnect offers a broad spectrum of healthcare services designed to meet all your medical needs with seamless, coordinated care.
          </p>
        </motion.div>

        <div className="grid-3" style={{ marginBottom: "3.5rem" }}>
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ type: "spring", stiffness: 70, damping: 14, delay: i * 0.12 }} whileHover={{ y: -8, scale: 1.02 }} className="med-card" style={{ padding: "2.5rem", display: "flex", flexDirection: "column", cursor: "default" }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: `${s.color}18`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                <s.icon size={26} color={s.color} strokeWidth={1.75} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.9rem" }}>{s.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.975rem", lineHeight: 1.75, flex: 1, marginBottom: "2rem" }}>{s.desc}</p>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: s.color, fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ textAlign: "center" }}>
          <Link href="/services" className="med-button-primary" style={{ display: "inline-flex" }}>
            View All Services <div className="med-button-icon"><ArrowUpRight size={16} strokeWidth={3} /></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────
function Testimonials() {
  const stories = [
    { name: "Mark Lewis", role: "Visitor from UK", rating: 5, text: "The staff were welcoming and kept the family informed throughout. The hospital felt calm, clean, and well organised. A truly caring environment." },
    { name: "Sue Parker", role: "Patient", rating: 5, text: "It was a routine checkup but my doctor found something early. Because it was caught in time, I recovered fully. Do not skip them." },
    { name: "Lisa Nair", role: "Patient from UAE", rating: 5, text: "My doctor here actually listened — asked about my lifestyle, stress, and sleep. That holistic approach made all the difference in my recovery." },
  ];
  return (
    <section style={{ padding: "8rem 0", background: "var(--bg-main)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", height: 1, background: "linear-gradient(to right, transparent, rgba(1,122,175,0.3), transparent)" }} />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="med-badge" style={{ marginBottom: "1.5rem" }}>Patient Stories</div>
          <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Trusted by Patients,<br /><span className="med-heading-highlight">Proven by Care</span>
          </h2>
        </motion.div>
        <div className="grid-3">
          {stories.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ type: "spring", stiffness: 60, damping: 14, delay: i * 0.12 }} whileHover={{ y: -6 }} className="med-card" style={{ padding: "2.5rem", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 3, marginBottom: "1.5rem" }}>
                {Array.from({ length: s.rating }).map((_, si) => (<Star key={si} size={14} fill="#daa837" style={{ color: "#daa837" }} />))}
              </div>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.8, flex: 1, marginBottom: "2rem" }}>"{s.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(1,122,175,0.2)", border: "1px solid rgba(1,122,175,0.3)", overflow: "hidden", flexShrink: 0 }}>
                  <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${s.name}`} alt={s.name} style={{ width: "100%", height: "100%" }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 800, color: "#ffffff", fontSize: "1rem" }}>{s.name}</h4>
                  <p style={{ color: "#22c7ff", fontSize: "0.8rem", fontWeight: 600 }}>{s.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOUNDER ──────────────────────────────────────────────
function FounderSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  return (
    <section ref={ref} style={{ padding: "8rem 0", background: "var(--bg-secondary)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 30% 50%, rgba(218,168,55,0.04) 0%, transparent 60%)" }} />
      <div className="grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ position: "relative" }}>
          <div className="founder-img-wrapper">
            <motion.img src="/founder.png" alt="Jolly Malayil - CEO, Chairman" style={{ width: "100%", height: "100%", objectFit: "cover", y: imgY } as any} />
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: "spring" }} style={{ position: "absolute", bottom: -20, right: -20, background: "var(--bg-main)", border: "1px solid var(--border-subtle)", padding: "1.5rem", borderRadius: 20, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
            <p style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.3 }}>
              Visionary<br /><span style={{ background: "linear-gradient(135deg, #daa837, #f5cc60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Leadership</span>
            </p>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <div className="med-badge" style={{ marginBottom: "1.5rem" }}>Meet The Founder</div>
          <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.75rem" }}>
            A Commitment to <span style={{ background: "linear-gradient(135deg, #daa837, #f5cc60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Global Care</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>A traditional Catholic family from Alleppey, Kerala, the Malayil brothers have built a legacy spanning 33+ years across the GCC and beyond — from medical clinics and pharmacies to manufacturing and finance.</p>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>As Chairman & CEO of Malayil Family Business since 1994, Mr. Jolly Malayil has driven expansion across 20+ businesses and 7 major sectors. MedConnect Global is his vision to bring that same excellence to global healthcare.</p>
          <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, marginBottom: "2.5rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.35rem" }}>Jolly Malayil</h3>
            <p style={{ color: "#22c7ff", fontWeight: 600, fontSize: "0.875rem" }}>Chairman & CEO — Malayil Family Business, Neil Group & MedConnect Global</p>
          </div>
          <Link href="/founder" className="med-button-primary" style={{ display: "inline-flex", background: "rgba(218,168,55,0.12)", color: "#daa837", border: "1px solid rgba(218,168,55,0.3)" }}>
            Know More About The Founder <div className="med-button-icon" style={{ background: "rgba(218,168,55,0.2)" }}><ArrowRight size={16} strokeWidth={3} /></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────
export function Footer({ hideCTA = false }: { hideCTA?: boolean }) {
  return (
    <>
      {!hideCTA && (
        <div style={{ maxWidth: 1060, margin: "0 auto -100px auto", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ type: "spring", stiffness: 70, damping: 18 }} style={{ background: "linear-gradient(135deg, #017aaf 0%, #0c4a6e 100%)", borderRadius: 32, padding: "5rem 3rem", textAlign: "center", color: "#fff", position: "relative", overflow: "hidden", border: "1px solid rgba(1,122,175,0.3)", boxShadow: "0 40px 80px rgba(1,122,175,0.2)" }}>
            <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", top: -80, right: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
            <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", bottom: -60, left: -40, width: 220, height: 220, borderRadius: "50%", background: "rgba(0,0,0,0.15)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="med-badge" style={{ marginBottom: "1.5rem", background: "rgba(255,255,255,0.15)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>Book Now</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, marginBottom: "1.25rem", color: "#ffffff" }}>Ready to Schedule Your Visit?</h2>
              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", maxWidth: 540, margin: "0 auto 3rem", lineHeight: 1.75 }}>Schedule your appointment today and receive compassionate care from experienced healthcare professionals.</p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-block" }}>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "#ffffff", color: "#0c4a6e", fontWeight: 800, padding: "0.9rem 1.25rem 0.9rem 2rem", borderRadius: 999, textDecoration: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}>
                  Contact Us <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, background: "#daa837", borderRadius: "50%" }}><ArrowUpRight size={16} strokeWidth={3} style={{ color: "#ffffff" }} /></div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}

      <footer style={{ background: "var(--bg-secondary)", paddingTop: "180px", paddingBottom: "3rem", borderTop: "1px solid var(--border-subtle)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>
            <div style={{ gridColumn: "1 / -1", maxWidth: 320 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
                <img src="/logo-icon.png" alt="MedConnect" style={{ height: "38px", width: "auto" }} />
                <span style={{ fontWeight: 800, fontSize: "1.35rem", color: "#ffffff", letterSpacing: "-0.5px" }}>MedConnect</span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.925rem", lineHeight: 1.8 }}>Compassionate healthcare, trusted specialists, and modern medical care for every stage of life.</p>
            </div>
            <div>
              <h4 style={{ fontSize: "0.875rem", fontWeight: 800, color: "#ffffff", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Links</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {["Home", "About Us", "Services", "Contact Us"].map(l => (<Link key={l} href="#" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600, fontSize: "0.925rem" }}>{l}</Link>))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "0.875rem", fontWeight: 800, color: "#ffffff", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Services</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {["Emergency Care", "Cardiology", "Neurology", "General Care"].map(l => (<Link key={l} href="#" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600, fontSize: "0.925rem" }}>{l}</Link>))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: "0.875rem", fontWeight: 800, color: "#ffffff", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Contact</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[{ icon: Phone, text: "+1 (800) 555-1234" }, { icon: Mail, text: "info@medconnect.com" }, { icon: MapPin, text: "123 Healthcare Ave, NY 10001" }].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "var(--text-muted)", fontSize: "0.925rem", fontWeight: 500 }}>
                    <Icon size={16} color="#22c7ff" style={{ flexShrink: 0, marginTop: 2 }} /> {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "2rem", textAlign: "center" }}>
            <p style={{ color: "var(--text-subtle)", fontSize: "0.875rem" }}>Copyright © {new Date().getFullYear()} MedConnect Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── HOME ─────────────────────────────────────────────────
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
