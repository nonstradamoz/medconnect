"use client";
import { Search, Users, Zap, Shield, Star, HeartPulse } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCount({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const cards = [
  { icon: Search, title: "Find Specialists", desc: "Access our curated network of internationally certified doctors and specialists across every major medical discipline.", color: "#017aaf" },
  { icon: Users, title: "Personalized Care", desc: "Every patient gets a dedicated Case Manager who personally coordinates every aspect of their medical journey.", color: "#daa837" },
  { icon: Zap, title: "Emergency Support", desc: "Our international desk operates 24/7 with real-time WhatsApp updates, medical guidance, and on-ground assistance.", color: "#22c7ff" },
];

const stats = [
  { value: 250, suffix: "+", label: "Certified Specialists" },
  { value: 150, suffix: "+", label: "Partner Hospitals" },
  { value: 20, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
];

export function WhyTrustUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 14 } },
  };

  return (
    <section style={{ background: "var(--bg-main)", padding: "8rem 0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(218,168,55,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container-wide">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="med-badge" style={{ marginBottom: "1.5rem" }}>Why Choose Us</div>
          <h2 className="med-heading" style={{ marginBottom: "1.25rem", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            A Healthcare Partner<br /><span className="med-heading-highlight">You Can Trust</span>
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            We don't just arrange treatments — we personally guide every patient from their first consultation to complete recovery.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "5rem" }}>
          {cards.map((card, i) => (
            <motion.div key={i} variants={itemVariants} whileHover={{ scale: 1.02, y: -8 }} style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)", borderRadius: 24, padding: "2.5rem 2rem", textAlign: "center", cursor: "default", backdropFilter: "blur(12px)", transition: "border-color 0.3s, box-shadow 0.3s" }}
              onHoverStart={(e: any) => { (e.target as HTMLElement).style.borderColor = `${card.color}40`; }}
              onHoverEnd={(e: any) => { (e.target as HTMLElement).style.borderColor = "var(--border-subtle)"; }}>
              <div style={{ width: 64, height: 64, background: `${card.color}15`, border: `1px solid ${card.color}30`, clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.75rem" }}>
                <card.icon size={26} style={{ color: card.color }} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.85rem" }}>{card.title}</h3>
              <p style={{ fontSize: "0.935rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Stats Bar */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
          style={{ background: "linear-gradient(135deg, rgba(1,122,175,0.12), rgba(1,122,175,0.06))", border: "1px solid rgba(1,122,175,0.2)", borderRadius: 24, padding: "3rem 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem" }}>
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "2.5rem", fontWeight: 900, color: "#ffffff", lineHeight: 1, letterSpacing: "-2px", background: "linear-gradient(135deg, #017aaf, #22c7ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                <AnimatedCount target={stat.value} suffix={stat.suffix} />
              </p>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", marginTop: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
