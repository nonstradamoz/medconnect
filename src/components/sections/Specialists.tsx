"use client";
import { MapPin, GraduationCap, Languages } from "lucide-react";
import Link from "next/link";

const specialists = [
  {
    name: "Dr. Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=480",
    role: "Senior Cardiologist",
    hospital: "Aster Medcity, Kochi",
    experience: "15+ Years",
    trained: "UK, USA",
    langs: "English, Arabic"
  },
  {
    name: "Dr. Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=480",
    role: "Orthopedic Surgeon",
    hospital: "Apollo Hospitals",
    experience: "20+ Years",
    trained: "Germany, India",
    langs: "English, Hindi"
  },
  {
    name: "Dr. Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1594824416967-8e6583d7890b?auto=format&fit=crop&q=80&w=400&h=480",
    role: "Oncologist",
    hospital: "Rajagiri Hospital",
    experience: "12+ Years",
    trained: "Spain, UK",
    langs: "English, Spanish"
  },
  {
    name: "Dr. Amina Al-Sayed",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=480",
    role: "Neurologist",
    hospital: "KIMS Healthcare",
    experience: "18+ Years",
    trained: "USA, UAE",
    langs: "English, Arabic"
  }
];

export function Specialists() {
  return (
    <section style={{ background: "#ffffff", padding: "6rem 0" }}>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{
            display: "inline-block", background: "#FFF3CD", color: "#B45309",
            fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase",
            letterSpacing: "0.08em", padding: "0.3rem 1rem", borderRadius: "9999px", marginBottom: "0.75rem"
          }}>Our Team</span>
          <h2 className="section-heading">World-Class Specialists</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}>
          {specialists.map((doc, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1.5px solid #E2E8F0",
              }}
            >
              <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                <img
                  src={doc.image}
                  alt={doc.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 50%)"
                }} />
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem" }}>
                  <h3 style={{ color: "#ffffff", fontSize: "1.05rem", fontWeight: 700 }}>{doc.name}</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8rem" }}>{doc.role}</p>
                </div>
              </div>

              <div style={{ padding: "1.25rem 1.5rem" }}>
                {[
                  { Icon: MapPin, text: doc.hospital },
                  { Icon: GraduationCap, text: `${doc.trained} · ${doc.experience}` },
                  { Icon: Languages, text: doc.langs },
                ].map(({ Icon, text }, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.5rem" }}>
                    <Icon size={14} style={{ color: "#FFC107", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8rem", color: "#475569" }}>{text}</span>
                  </div>
                ))}

                <Link href="/contact" style={{
                  display: "block", marginTop: "1rem",
                  background: "#0F172A", color: "#ffffff",
                  borderRadius: "10px", padding: "0.65rem",
                  textAlign: "center", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none",
                  transition: "background 0.2s",
                }}>
                  Book Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
