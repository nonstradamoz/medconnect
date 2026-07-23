"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.75rem",
        zIndex: 200,
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "#25D366",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 30px rgba(37,211,102,0.45)",
        textDecoration: "none",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.12)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(37,211,102,0.55)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(37,211,102,0.45)";
      }}
    >
      <MessageCircle size={28} />
      {/* Pulse ring */}
      <span style={{
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: "2px solid #25D366",
        animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite",
      }} />
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
