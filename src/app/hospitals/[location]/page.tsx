"use client";

import { notFound } from "next/navigation";
import { Navbar, Footer } from "../../page";
import { motion } from "framer-motion";
import { MapPin, Building2, Activity, ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const hospitalData = {
  mumbai: {
    title: "Mumbai",
    desc: "Explore our partnered JCI-accredited, world-class healthcare facilities in India's financial capital.",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000",
    hospitals: [
      { name: "Lilavati Hospital & Research Centre", spec: "Multi-Specialty", beds: 314, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
      { name: "Kokilaben Dhirubhai Ambani Hospital", spec: "Oncology, Neurology, Cardiology", beds: 750, img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" },
      { name: "Nanavati Max Super Speciality Hospital", spec: "Orthopedics, Transplants", beds: 350, img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" },
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
      { name: "Fortis Escorts Heart Institute", spec: "Cardiology, Cardiac Surgery", beds: 310, img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" },
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
      { name: "Amrita Hospital", spec: "Cardiology, Oncology", beds: 1300, img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" },
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
    <main style={{ background: "#050505", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ padding: "12rem 0 8rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={data.image} alt={data.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #050505 0%, transparent 40%, #050505 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 0%, rgba(5,5,5,0.8) 100%)" }} />
        </div>
        
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem", textAlign: "center", position: "relative", zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: 8, 
              padding: "0.5rem 1.2rem", 
              background: "rgba(218, 168, 55, 0.15)", 
              border: "1px solid rgba(218, 168, 55, 0.3)", 
              borderRadius: 999, 
              color: "#daa837", 
              fontSize: "0.9rem", 
              fontWeight: 700, 
              letterSpacing: "1px", 
              marginBottom: "1.5rem",
              backdropFilter: "blur(10px)"
            }}>
              <MapPin size={16} strokeWidth={2.5} /> {data.title.toUpperCase()} LOCATION
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 800, marginBottom: "1.5rem", color: "#ffffff", lineHeight: 1.1, letterSpacing: "-1px" }}>
              Top Hospitals in <span style={{ color: "#daa837" }}>{data.title}</span>
            </h1>
            <div style={{ maxWidth: 650, margin: "0 auto" }}>
              <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                {data.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hospitals Grid */}
      <section style={{ padding: "4rem 0 10rem 0", position: "relative" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {data.hospitals.map((hosp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover="hover"
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
                }}
              >
                <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
                  <motion.img 
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={hosp.img} alt={hosp.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                  <div style={{ position: "absolute", top: 16, right: 16 }}>
                    <div style={{ 
                      background: "rgba(0,0,0,0.6)", 
                      backdropFilter: "blur(10px)",
                      color: "#fff", 
                      padding: "0.5rem 1rem", 
                      borderRadius: 999, 
                      fontSize: "0.85rem", 
                      fontWeight: 700, 
                      display: "flex", 
                      alignItems: "center", 
                      gap: 6,
                      border: "1px solid rgba(255,255,255,0.1)"
                    }}>
                      <Building2 size={14} color="#daa837" /> {hosp.beds} Beds
                    </div>
                  </div>
                </div>
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1.4rem", color: "#ffffff", marginBottom: "1rem", lineHeight: 1.3 }}>{hosp.name}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "2rem", flexGrow: 1 }}>
                    <div style={{ background: "rgba(218, 168, 55, 0.15)", padding: "0.4rem", borderRadius: "50%" }}>
                      <Activity size={16} color="#daa837" />
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", fontWeight: 500 }}>{hosp.spec}</span>
                  </div>
                  
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <motion.div 
                      variants={{ hover: { background: "rgba(218, 168, 55, 0.15)", borderColor: "#daa837" } }}
                      transition={{ duration: 0.2 }}
                      style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "space-between",
                        padding: "1rem 1.2rem",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 16,
                        color: "#daa837", 
                        fontWeight: 700, 
                        fontSize: "0.95rem"
                      }}
                    >
                      Consult for this hospital 
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </motion.div>
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
