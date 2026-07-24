"use client";
import { Plus, Minus, X } from "lucide-react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  return (
    <section style={{ padding: "6rem 0", background: "var(--bg-main)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
        
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="med-badge" style={{ marginBottom: "1.5rem" }}>
            FAQ
          </div>
          <h2 className="med-heading" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Have Questions?<br /><span className="med-heading-highlight">We Have Answers.</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                style={{ 
                  borderBottom: "1px solid #f1f5f9", 
                  paddingBottom: "1.5rem",
                  paddingTop: i === 0 ? 0 : "1.5rem"
                }}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{ 
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", 
                    background: "none", border: "none", cursor: "pointer", textAlign: "left",
                    padding: 0
                  }}
                >
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--blue-dark)", paddingRight: "2rem" }}>
                    {faq.q}
                  </h3>
                  <div style={{ 
                    width: 32, height: 32, borderRadius: "50%", 
                    background: "var(--blue-light)", color: "var(--blue-primary)", 
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    transition: "all 0.3s ease",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                  }}>
                    {isOpen ? <X size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginTop: "1rem", paddingRight: "3rem" }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
