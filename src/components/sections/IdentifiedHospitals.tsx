"use client";

import { motion } from "framer-motion";
import { Building2, ArrowRight, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function IdentifiedHospitals() {
  const locations = [
    {
      name: "Mumbai",
      slug: "mumbai",
      desc: "India's financial capital, housing some of the most advanced multi-specialty medical centers and renowned specialists in the world.",
      image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "Delhi",
      slug: "delhi",
      desc: "The national capital, offering world-class healthcare infrastructure, cutting-edge technology, and top-tier medical research facilities.",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "Kerala",
      slug: "kerala",
      desc: "A globally recognized destination blending advanced modern medicine with unparalleled post-treatment holistic healing environments.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
    }
  ];

  return (
    <section style={{ padding: "8rem 0", background: "#050505", position: "relative", overflow: "hidden" }}>
      {/* Background glow effects */}
      <div style={{ position: "absolute", top: "10%", left: "-10%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(218,168,55,0.06) 0%, rgba(0,0,0,0) 70%)", borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 70%)", borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: 8, 
              padding: "0.5rem 1.2rem", 
              background: "rgba(218, 168, 55, 0.1)", 
              border: "1px solid rgba(218, 168, 55, 0.2)", 
              borderRadius: 999, 
              color: "#daa837", 
              fontSize: "0.85rem", 
              fontWeight: 700, 
              letterSpacing: "1px", 
              marginBottom: "1.5rem" 
            }}>
              <ShieldCheck size={16} /> PREMIUM DESTINATIONS
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#ffffff", fontWeight: 800, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              World-Class Hospitals in <br />
              <span style={{ color: "#daa837", position: "relative" }}>
                Prime Locations
              </span>
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", maxWidth: 700, margin: "0 auto", lineHeight: 1.7 }}>
              We have meticulously vetted and partnered with the highest-rated JCI-accredited healthcare institutions across India's most capable medical hubs to ensure you receive world-class treatment.
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {locations.map((loc, i) => (
            <Link key={i} href={`/hospitals/${loc.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover="hover"
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  height: 480,
                  cursor: "pointer",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                }}
              >
                <motion.div 
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <img src={loc.image} alt={loc.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ 
                    position: "absolute", 
                    inset: 0, 
                    background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 50%, rgba(5,5,5,0.1) 100%)" 
                  }} />
                </motion.div>
                
                <div style={{ position: "absolute", top: 20, right: 20 }}>
                  <motion.div 
                    variants={{ hover: { background: "#daa837", color: "#111", borderColor: "#daa837" } }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      background: "rgba(0,0,0,0.5)", 
                      backdropFilter: "blur(10px)",
                      color: "#fff", 
                      padding: "0.5rem 1.2rem", 
                      borderRadius: 999, 
                      fontSize: "0.85rem", 
                      fontWeight: 700, 
                      display: "flex", 
                      alignItems: "center", 
                      gap: 6,
                      border: "1px solid rgba(255,255,255,0.15)"
                    }}
                  >
                    <Star size={14} fill="currentColor" /> Top Tier
                  </motion.div>
                </div>

                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem" }}>
                  <motion.div variants={{ hover: { y: -5 } }} transition={{ duration: 0.4 }}>
                    <h3 style={{ fontWeight: 800, fontSize: "2.2rem", color: "#ffffff", marginBottom: "0.5rem", letterSpacing: "-0.5px" }}>{loc.name}</h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                      {loc.desc}
                    </p>
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "0.5rem", 
                      color: "#daa837", 
                      fontWeight: 700, 
                      fontSize: "0.95rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}>
                      Explore Facilities 
                      <motion.div variants={{ hover: { x: 5 } }} transition={{ duration: 0.3 }}>
                        <ArrowRight size={18} strokeWidth={2.5} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
