"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        boxShadow: "0 1px 8px rgba(15,23,42,0.06)",
      }}
    >
      <div className="container-wide" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "76px" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{
            width: 40, height: 40,
            background: "#FFC107",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "1.1rem", color: "#0F172A"
          }}>M</div>
          <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "#0F172A", fontFamily: "inherit" }}>
            MedConnect <span style={{ color: "#FFC107" }}>Global</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#0F172A",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FFC107")}
              onMouseLeave={e => (e.currentTarget.style.color = "#0F172A")}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href="tel:+1234567890"
            style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", fontWeight: 600, color: "#475569", textDecoration: "none" }}
            className="hide-mobile"
          >
            <Phone size={15} />
            +1 (234) 567-890
          </a>
          <Link href="/contact" className="btn-dark" style={{ fontSize: "0.85rem", padding: "0.6rem 1.4rem" }}>
            Book Consultation
          </Link>
          <button
            style={{ display: "none", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setOpen(!open)}
            className="mobile-menu-btn"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: "absolute", top: "76px", left: 0, right: 0,
          background: "#ffffff", borderBottom: "1px solid #e2e8f0",
          padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem"
        }}>
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ fontSize: "1rem", fontWeight: 600, color: "#0F172A", textDecoration: "none" }}
            >
              {item}
            </Link>
          ))}
          <Link href="/contact" className="btn-dark" onClick={() => setOpen(false)} style={{ textAlign: "center" }}>
            Book Consultation
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hide-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
