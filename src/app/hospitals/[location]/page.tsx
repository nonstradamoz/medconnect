"use client";

import { notFound } from "next/navigation";
import { Navbar, Footer } from "../../page";
import { motion } from "framer-motion";
import { MapPin, Building2, ChevronRight, Activity, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const hospitalData = {
  mumbai: {
    title: "Mumbai",
    desc: "Explore our partnered JCI-accredited, world-class healthcare facilities in India's financial capital.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=1000",
    hospitals: [
      { name: "Lilavati Hospital & Research Centre", spec: "Multi-Specialty", beds: 314, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
      { name: "Kokilaben Dhirubhai Ambani Hospital", spec: "Oncology, Neurology, Cardiology", beds: 750, img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" },
      { name: "Nanavati Max Super Speciality Hospital", spec: "Orthopedics, Transplants", beds: 350, img: "https://images.unsplash.com/photo-1512675828443-4f454c42253a?auto=format&fit=crop&q=80&w=800" },
      { name: "Breach Candy Hospital", spec: "Cardiology, General Surgery", beds: 212, img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  delhi: {
    title: "Delhi",
    desc: "Explore our partnered JCI-accredited, world-class healthcare facilities in the national capital.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1000",
    hospitals: [
      { name: "AIIMS New Delhi", spec: "Multi-Specialty, Research", beds: 2478, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
      { name: "Medanta - The Medicity (Gurugram)", spec: "Cardiology, Neurology, Transplants", beds: 1250, img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" },
      { name: "Fortis Escorts Heart Institute", spec: "Cardiology, Cardiac Surgery", beds: 310, img: "https://images.unsplash.com/photo-1512675828443-4f454c42253a?auto=format&fit=crop&q=80&w=800" },
      { name: "Apollo Hospitals Indraprastha", spec: "Oncology, Multi-Specialty", beds: 718, img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  kerala: {
    title: "Kerala",
    desc: "Explore our partnered JCI-accredited, world-class healthcare facilities blending modern medicine with holistic healing.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000",
    hospitals: [
      { name: "Aster Medcity (Kochi)", spec: "Multi-Specialty, Transplants", beds: 670, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
      { name: "KIMSHEALTH (Trivandrum)", spec: "Cardiology, Orthopedics, Pediatrics", beds: 650, img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" },
      { name: "Amrita Hospital", spec: "Cardiology, Oncology", beds: 1300, img: "https://images.unsplash.com/photo-1512675828443-4f454c42253a?auto=format&fit=crop&q=80&w=800" },
      { name: "Rajagiri Hospital", spec: "Gastroenterology, Neurology", beds: 500, img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800" }
    ]
  }
};

export default function HospitalsLocationPage({ params }: { params: Promise<{ location: string }> }) {
  const unwrappedParams = use(params);
  const data = hospitalData[unwrappedParams.location as keyof typeof hospitalData];

  if (!data) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ padding: "10rem 0 6rem 0", background: "linear-gradient(135deg, #daa837 0%, #b58823 100%)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: `url(${data.image})`, backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "overlay" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem", textAlign: "center", position: "relative", zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="med-badge" style={{ marginBottom: "1.5rem", background: "rgba(255,255,255,0.1)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
              <MapPin size={16} strokeWidth={3} /> {data.title.toUpperCase()}
            </div>
            <h1 className="med-heading" style={{ marginBottom: "1.5rem", color: "#ffffff" }}>
              Top Hospitals in <span style={{ color: "#111111", textShadow: "none" }}>{data.title}</span>
            </h1>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7 }}>
                {data.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hospitals Grid */}
      <section style={{ padding: "6rem 0", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {data.hospitals.map((hosp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="med-card"
                style={{ overflow: "hidden", background: "#ffffff" }}
              >
                <div style={{ position: "relative", height: 220 }}>
                  <img src={hosp.img} alt={hosp.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 16, right: 16, background: "#111111", color: "#ffffff", padding: "0.4rem 1rem", borderRadius: 999, fontSize: "0.85rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                    <Building2 size={14} color="#daa837" /> {hosp.beds} Beds
                  </div>
                </div>
                <div style={{ padding: "2rem" }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1.4rem", color: "var(--blue-dark)", marginBottom: "1rem", lineHeight: 1.3 }}>{hosp.name}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    <Activity size={18} color="#daa837" />
                    <span style={{ color: "var(--text-muted)", fontSize: "0.95rem", fontWeight: 600 }}>{hosp.spec}</span>
                  </div>
                  
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#111111", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
                    Consult for this hospital <ArrowUpRight size={16} color="#daa837" strokeWidth={3} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
