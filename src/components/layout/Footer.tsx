"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe2, Share2, MessageCircle } from "lucide-react";

const footerLinks = {
  Services: ["Orthopedics", "Cardiology", "Ayurveda", "Fertility", "Cancer Care", "Neurology"],
  Countries: ["UAE", "Saudi Arabia", "Kuwait", "Oman", "UK", "USA", "Australia"],
  Company: ["About Us", "Our Specialists", "Hospital Network", "Patient Portal", "Contact"],
};

export function Footer() {
  return (
    <footer style={{ background: "#0F172A", color: "#CBD5E1", fontFamily: "inherit" }}>
      {/* Main Footer */}
      <div className="container-wide" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem" }}>
          {/* Brand Column */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div style={{
                width: 40, height: 40, background: "#FFC107", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: "1.1rem", color: "#0F172A"
              }}>M</div>
              <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#ffffff" }}>
                MedConnect <span style={{ color: "#FFC107" }}>Global</span>
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Your Trusted Partner for Quality Global & Domestic Healthcare.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href="tel:+1234567890" style={{ color: "#CBD5E1", textDecoration: "none", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "8px" }}>
                <Phone size={14} /> +1 (234) 567-890
              </a>
              <a href="mailto:care@medconnect.global" style={{ color: "#CBD5E1", textDecoration: "none", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "8px" }}>
                <Mail size={14} /> care@medconnect.global
              </a>
              <span style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={14} /> Dubai Healthcare City, UAE
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#FFC107")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Emergency */}
          <div>
            <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              24/7 Emergency
            </h4>
            <div style={{
              background: "rgba(255,193,7,0.1)", border: "1px solid rgba(255,193,7,0.3)",
              borderRadius: "12px", padding: "1rem", marginBottom: "1.5rem"
            }}>
              <p style={{ color: "#FFC107", fontWeight: 700, fontSize: "1.2rem" }}>+1 (234) 567-891</p>
              <p style={{ fontSize: "0.8rem", color: "#94A3B8" }}>Available round the clock</p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[Globe2, Share2, MessageCircle, Phone, Mail].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#94A3B8", transition: "all 0.2s", textDecoration: "none"
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#FFC107"; (e.currentTarget as HTMLElement).style.color = "#0F172A"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "#94A3B8"; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1.25rem 0" }}>
        <div className="container-wide" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#64748B" }}>
            © {new Date().getFullYear()} MedConnect Global. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "HIPAA Compliance"].map((link) => (
              <Link key={link} href="#" style={{ fontSize: "0.8rem", color: "#64748B", textDecoration: "none" }}>
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
