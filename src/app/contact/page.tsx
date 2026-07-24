"use client";
import { Navbar, Footer } from "../page";
import { Mail, MapPin, Phone, Clock, Send, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const contactInfo = [
    { icon: Phone, title: "Phone - sample ", details: "+1 (555) 123-4567", sub: "24/7 Support Available" },
    { icon: Mail, title: "Email", details: "care@medconnect.global", sub: "Replies within 2 hours" },
    { icon: MapPin, title: "Headquarters", details: "123 Healthcare Ave, Suite 400", sub: "New York, NY 10001" },
    { icon: Clock, title: "Working Hours", details: "Mon - Fri: 8:00 AM - 8:00 PM", sub: "Sat - Sun: 9:00 AM - 5:00 PM" },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: "10rem 0 6rem 0", background: "linear-gradient(135deg, #017aaf 0%, #01587d 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="med-badge" style={{ marginBottom: "1.5rem", background: "rgba(255,255,255,0.1)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}>
              GET IN TOUCH
            </div>
            <h1 className="med-heading" style={{ marginBottom: "1.5rem", color: "#ffffff" }}>
              We're Here for <span style={{ color: "#daa837", textShadow: "0 4px 20px rgba(218, 168, 55, 0.4)" }}>You</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
              Have questions about treatments, pricing, or the process? Our dedicated medical coordinators are available 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "6rem 0", background: "var(--bg-secondary)" }}>
        <div className="grid-2" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 1.5rem" }}>

          {/* Info Side */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 900, color: "var(--blue-dark)", marginBottom: "2rem", letterSpacing: "-0.02em" }}>Get in Touch</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {contactInfo.map((info, i) => (
                <div key={i} className="med-card" style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem", border: "1px solid #f1f5f9" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <info.icon size={24} color="var(--blue-primary)" />
                  </div>
                  <div>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>{info.title}</p>
                    <p style={{ color: "var(--blue-dark)", fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.25rem" }}>{info.details}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="med-card" style={{ padding: "3rem" }}>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--blue-dark)", marginBottom: "0.5rem" }}>Request a Callback</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "2.5rem" }}>Fill out the form below and our medical coordinator will get back to you within 2 hours.</p>

              <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--blue-dark)" }}>First Name</label>
                    <input type="text" placeholder="John" style={{ padding: "1rem", borderRadius: 12, border: "1px solid #e2e8f0", fontSize: "1rem", outline: "none", fontFamily: "inherit", background: "var(--bg-main)" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--blue-dark)" }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{ padding: "1rem", borderRadius: 12, border: "1px solid #e2e8f0", fontSize: "1rem", outline: "none", fontFamily: "inherit", background: "var(--bg-main)" }} />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--blue-dark)" }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ padding: "1rem", borderRadius: 12, border: "1px solid #e2e8f0", fontSize: "1rem", outline: "none", fontFamily: "inherit", background: "var(--bg-main)" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--blue-dark)" }}>Medical Condition / Inquiry</label>
                  <textarea placeholder="Please briefly describe your medical condition..." rows={4} style={{ padding: "1rem", borderRadius: 12, border: "1px solid #e2e8f0", fontSize: "1rem", outline: "none", fontFamily: "inherit", resize: "none", background: "var(--bg-main)" }} />
                </div>

                <button
                  style={{ background: "var(--blue-primary)", color: "#fff", border: "none", padding: "1.2rem", borderRadius: 999, fontSize: "1rem", fontWeight: 800, cursor: "pointer", marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer hideCTA={true} />
    </main>
  );
}
