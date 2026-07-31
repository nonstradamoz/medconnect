"use client";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How can I book an appointment?", a: "You can easily book an appointment online through our website or call our clinic directly. Our clinic is open Monday to Saturday. Please check our contact page for detailed timings." },
  { q: "Do you accept health insurance?", a: "Yes, we accept most major health insurance plans. Please contact our billing department prior to your visit to verify your specific coverage details." },
  { q: "What medical services do you provide?", a: "We provide comprehensive services including emergency care, cardiology, neurology, pediatrics, orthopedics, and general wellness checkups." },
  { q: "Can I consult with a doctor online?", a: "Absolutely. We offer secure telehealth consultations for follow-ups, minor illnesses, and medical advice from the comfort of your home." },
  { q: "What should I bring to my first appointment?", a: "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant past medical records or test results." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ padding: "8rem 0", background: "var(--bg-secondary)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", right: "-10%", transform: "translateY(-50%)", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(1,122,175,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <div className="med-badge" style={{ marginBottom: "1.5rem" }}>FAQ</div>
          <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Have Questions?<br /><span className="med-heading-highlight">We Have Answers.</span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ background: isOpen ? "rgba(1,122,175,0.08)" : "var(--bg-card)", border: `1px solid ${isOpen ? "rgba(1,122,175,0.3)" : "rgba(255,255,255,0.06)"}`, borderRadius: 16, overflow: "hidden", transition: "background 0.3s, border-color 0.3s" }}>
                <button onClick={() => setOpenIndex(isOpen ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: "1.5rem 1.75rem" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: isOpen ? "#ffffff" : "rgba(255,255,255,0.85)", paddingRight: "2rem", transition: "color 0.2s" }}>{faq.q}</h3>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: isOpen ? "rgba(1,122,175,0.3)" : "rgba(255,255,255,0.06)", border: `1px solid ${isOpen ? "rgba(1,122,175,0.5)" : "rgba(255,255,255,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.3s ease", color: isOpen ? "#22c7ff" : "rgba(255,255,255,0.5)" }}>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.975rem", lineHeight: 1.8, padding: "0 1.75rem 1.75rem", paddingRight: "4rem" }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
