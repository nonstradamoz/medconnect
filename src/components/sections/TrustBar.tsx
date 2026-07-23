"use client";
import { ShieldCheck, Award, Cpu, Plane, HeadphonesIcon, MessageCircle } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "NABH Hospitals" },
  { icon: Award, label: "JCI Accredited" },
  { icon: ShieldCheck, label: "HIPAA Secure" },
  { icon: HeadphonesIcon, label: "24/7 Support" },
  { icon: Cpu, label: "AI Powered" },
  { icon: Plane, label: "Visa Assistance" },
  { icon: MessageCircle, label: "WhatsApp Updates" },
];

export function TrustBar() {
  return (
    <div style={{
      background: "#0F172A",
      padding: "1.25rem 0",
      overflow: "hidden",
    }}>
      <div className="container-wide" style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "0",
      }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 1.5rem" }}>
              <item.icon size={16} style={{ color: "#FFC107", flexShrink: 0 }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#CBD5E1", whiteSpace: "nowrap" }}>
                {item.label}
              </span>
            </div>
            {i < items.length - 1 && (
              <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "1.2rem" }}>|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
