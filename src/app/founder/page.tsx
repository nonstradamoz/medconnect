"use client";
import { Navbar, Footer } from "../page";
import { motion } from "framer-motion";
import { Award, Globe, HeartPulse, Users, TrendingUp, Building2, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function FounderPage() {
  const milestones = [
    { year: "1981", event: "The five Malayil brothers move to the GCC countries to build their future." },
    { year: "1987", event: "The family commences business in the health sector under \"Malayil Medical Establishments\" in Al Ain City, UAE." },
    { year: "1994", event: "Mr. Jolly Malayil takes over as Chairman & CEO of Malayil Family Business, expanding into multiple sectors." },
    { year: "2000s", event: "Neil Group of Companies and Jolly Malayil Brothers emerge as diversified investment arms, spanning medical, finance, telecom, and real estate." },
    { year: "2020", event: "During COVID-19, JMV Wealth Management is incorporated, investing in capital markets and tech startups." },
    { year: "Today", event: "MedConnect Global — Jolly Malayil's vision to make world-class healthcare accessible to patients everywhere." },
  ];

  const stats = [
    { value: "33+", label: "Years of Legacy", icon: Award },
    { value: "20+", label: "Businesses Built", icon: Building2 },
    { value: "200+", label: "Happy Employees", icon: Users },
    { value: "7", label: "Major Sectors", icon: TrendingUp },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: "8rem 0 5rem 0", background: "linear-gradient(180deg, #eff5fb 0%, #ffffff 100%)", position: "relative", overflow: "hidden" }}>
        {/* Decorative background */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(circle at top right, rgba(218, 168, 55,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 1.5rem", textAlign: "center", position: "relative", zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="med-badge" style={{ marginBottom: "2rem" }}>
              THE VISIONARY
            </div>
            <h1 className="med-heading" style={{ marginBottom: "1.5rem", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Meet Our <span style={{ color: "#daa837" }}>Founder</span>
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 650, margin: "0 auto 2rem auto" }}>
              A lifelong entrepreneur, family patriarch, and visionary leader who has dedicated 33+ years to building businesses that improve lives — from healthcare clinics in the UAE to global investment and now, MedConnect Global.
            </p>
            <blockquote style={{ display: "inline-block", padding: "1.2rem 2rem", borderLeft: "4px solid #daa837", background: "rgba(218,168,55,0.07)", borderRadius: "0 16px 16px 0", fontSize: "1.1rem", fontStyle: "italic", color: "var(--blue-dark)", fontWeight: 600, textAlign: "left" }}>
              "Let's Grow Together" — Jolly Malayil
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: "4rem 0 6rem 0", background: "var(--bg-main)" }}>
        <div className="grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem", alignItems: "flex-start" }}>

          {/* Left: Founder Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: "sticky", top: "120px" }}
            className="sticky-desktop"
          >
            <div style={{ position: "relative", borderRadius: 32, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }}>
              <img
                src="/founder.png"
                alt="Jolly Malayil"
                className="founder-img"
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", background: "linear-gradient(0deg, rgba(15,23,42,0.9) 0%, transparent 100%)", padding: "3rem 2rem 2rem 2rem" }}>
                <h3 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 800 }}>Jolly Malayil</h3>
                <p style={{ color: "#daa837", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>Chairman & CEO</p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>Malayil Family Business · Neil Group of Companies · MedConnect Global</p>
              </div>
            </div>

            {/* External link to JMV */}
            <Link href="https://jmvwealth.com" target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: "1.5rem", padding: "1rem", borderRadius: 16, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", color: "#daa837", fontWeight: 700, textDecoration: "none", transition: "all 0.2s ease", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}
            >
              <Globe size={18} />
              Visit JMV Wealth Management
              <ExternalLink size={14} />
            </Link>
          </motion.div>

          {/* Right: Biography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ paddingTop: "1rem" }}
          >
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "2rem" }}>
              The <span style={{ color: "#daa837" }}>Malayil Legacy</span>
            </h2>

            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              The Malayil family is a traditional, Catholic family hailing from Alleppey, Kerala. Their ancestors were involved in the trading, exporting and brokering of spices for several generations. The children of the late Mr. Avarachan Malayil and late Mrs. Thressiamma Attuvathalackal — namely Mr. Appachan, Mr. Noble, Mr. Johnny, late Mr. Joy, and <strong style={{ color: "var(--blue-dark)" }}>Mr. Jolly Malayil</strong> — inherited their ancestors' skills and flair for business.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              In 1987, the five brothers commenced their business in the health sector under <strong style={{ color: "var(--blue-dark)" }}>"Malayil Medical Establishments"</strong> in Al Ain City, UAE. Following the untimely loss of Mr. Joy Malayil, the youngest brother — Jolly Malayil — stepped forward with a clear-cut vision and became the Chairman and CEO of the Malayil Family Business in <strong style={{ color: "var(--blue-dark)" }}>1994</strong>.
            </p>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              Under his leadership, the business expanded into the <strong style={{ color: "var(--blue-dark)" }}>Neil Group of Companies</strong>, now a diversified investment group spanning Medical Clinics, Pharmacies, Trading, Bar & Restaurants, QSO of Food Chains, Telecom & Banking outsourcing, Manufacturing, Warehousing, Construction and Leasing — across 7 major sectors and 20+ businesses. <strong style={{ color: "var(--blue-dark)" }}>MedConnect Global</strong> is the next chapter: bringing this same legacy of care and excellence to patients worldwide.
            </p>

            {/* Feature highlights */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.2rem", marginBottom: "3rem" }}>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", background: "#eff5fb", padding: "1.75rem", borderRadius: 24 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                  <Award size={26} color="#daa837" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "0.4rem" }}>33+ Years of Business Excellence</h4>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>From spice trading roots in Kerala to a multi-sector empire spanning the GCC and beyond — a legacy built on integrity and hard work.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", background: "#eff5fb", padding: "1.75rem", borderRadius: 24 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                  <HeartPulse size={26} color="#daa837" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "0.4rem" }}>Healthcare Roots Since 1987</h4>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>The Malayil family's very first business was a medical establishment in the UAE — making healthcare a founding pillar of the family's entrepreneurial journey.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", background: "#eff5fb", padding: "1.75rem", borderRadius: 24 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                  <Globe size={26} color="#daa837" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--blue-dark)", marginBottom: "0.4rem" }}>Angel Investor & Capital Markets Pioneer</h4>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>Through JMV Wealth Management, Jolly Malayil also invests in start-up tech companies, supporting young entrepreneurs and innovative ideas globally.</p>
                </div>
              </div>
            </div>

            <blockquote style={{ padding: "2rem", borderLeft: "4px solid #daa837", background: "rgba(218, 168, 55, 0.05)", borderRadius: "0 24px 24px 0", fontSize: "1.2rem", fontStyle: "italic", color: "var(--blue-dark)", fontWeight: 600 }}>
              "There is no doubt that it is around the family and the home that all the greatest virtues are created, strengthened and maintained." — Winston Churchill
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: "6rem 0", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="med-badge" style={{ marginBottom: "1.5rem" }}>THE JOURNEY</div>
            <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
              A Timeline of <span style={{ color: "#daa837" }}>Milestones</span>
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, #daa837 0%, #daa837 100%)", opacity: 0.2 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  style={{ display: "flex", gap: "2rem", alignItems: "center", flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
                >
                  <div style={{ flex: 1, background: "#fff", padding: "1.5rem 2rem", borderRadius: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.04)", textAlign: i % 2 === 0 ? "right" : "left" }}>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{m.event}</p>
                  </div>
                  <div style={{ flexShrink: 0, width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #daa837 0%, #b58823 100%)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, boxShadow: "0 4px 15px rgba(218, 168, 55,0.3)" }}>
                    <span style={{ color: "#fff", fontWeight: 900, fontSize: "0.7rem", textAlign: "center", lineHeight: 1.2 }}>{m.year}</span>
                  </div>
                  <div style={{ flex: 1 }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #daa837 0%, #b58823 100%)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "#fff" }}>
              The Numbers Behind <span style={{ color: "#daa837" }}>The Legacy</span>
            </h2>
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 24, padding: "2.5rem", textAlign: "center" }}
              >
                <s.icon size={32} color="#daa837" style={{ marginBottom: "1rem" }} />
                <p style={{ fontSize: "3rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{s.value}</p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600, marginTop: "0.5rem" }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
