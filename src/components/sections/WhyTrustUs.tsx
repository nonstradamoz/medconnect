"use client";
import { Search, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const HexIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div style={{ position: "relative", width: 70, height: 70, margin: "0 auto 1.25rem" }}>
    {/* Hexagon background */}
    <div style={{
      width: 70, height: 70,
      background: "#017aaf",
      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <Icon size={28} style={{ color: "#ffffff" }} />
    </div>
  </div>
);

const cards = [
  {
    icon: Search,
    title: "Find Specialists",
    desc: "Access our curated network of internationally certified doctors and specialists across every major medical discipline."
  },
  {
    icon: Users,
    title: "Personalized Care",
    desc: "Every patient gets a dedicated Case Manager who personally coordinates every aspect of their medical journey."
  },
  {
    icon: Zap,
    title: "Emergency Support",
    desc: "Our international desk operates 24/7 with real-time WhatsApp updates, medical guidance, and on-ground assistance."
  },
];

export function WhyTrustUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
  };

  return (
    <section style={{ background: "#ffffff", padding: "6rem 0", overflow: "hidden" }}>
      <div className="container-wide">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span style={{
            display: "inline-block",
            background: "#e0f2fe",
            color: "#0369a1",
            fontWeight: 700,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            padding: "0.3rem 1rem",
            borderRadius: "9999px",
            marginBottom: "1rem",
          }}>
            Why Choose Us
          </span>
          <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
            A Healthcare Partner You Can Trust
          </h2>
          <p className="section-subheading" style={{ margin: "0 auto" }}>
            We don't just arrange treatments — we personally guide every patient from their first consultation to complete recovery.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.03, translateY: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              style={{
                background: "#ffffff",
                border: "1.5px solid #E2E8F0",
                borderRadius: "20px",
                padding: "2.5rem 2rem",
                textAlign: "center",
                cursor: "pointer",
                transition: "box-shadow 0.3s ease, border 0.3s ease",
              }}
            >
              <HexIcon icon={card.icon} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.75rem" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.7 }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
