"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function IdentifiedHospitals() {
  const locations = [
    {
      name: "Mumbai",
      slug: "mumbai",
      desc: "India's financial capital, housing some of the most advanced multi-specialty medical centers and renowned specialists in the world.",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Delhi",
      slug: "delhi",
      desc: "The national capital, offering world-class healthcare infrastructure, cutting-edge technology, and top-tier medical research facilities.",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Kerala",
      slug: "kerala",
      desc: "A globally recognized destination blending advanced modern medicine with unparalleled post-treatment holistic healing environments.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section style={{ padding: "8rem 0", background: "var(--bg-secondary)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>

        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="med-badge" style={{ marginBottom: "1.5rem" }}>
              PREMIUM DESTINATIONS
            </div>
            <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "1.5rem" }}>
              Our consultant panel doctors identified <br /> hospitals in <span className="med-heading-highlight">Mumbai, Delhi and Kerala</span>
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: 700, margin: "0 auto", lineHeight: 1.7 }}>
              We have meticulously vetted and partnered with the highest-rated JCI-accredited healthcare institutions across India's most capable medical hubs to ensure you receive world-class treatment.
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {locations.map((loc, i) => (
            <Link key={i} href={`/hospitals/${loc.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(218, 168, 55, 0.15)" }}
                style={{
                  background: "#ffffff",
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.04)",
                  height: "100%"
                }}
              >
                <div style={{ position: "relative", height: 220 }}>
                  <img src={loc.image} alt={loc.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 16, right: 16, background: "#111111", color: "#ffffff", padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.85rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                    <Building2 size={14} color="#daa837" /> Top Tier
                  </div>
                </div>
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", height: "calc(100% - 220px)" }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1.5rem", color: "#111111", marginBottom: "1rem" }}>{loc.name}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6, flexGrow: 1 }}>{loc.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem", color: "#daa837", fontWeight: 700, fontSize: "0.95rem" }}>
                    Explore Hospitals <ArrowRight size={18} strokeWidth={3} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
