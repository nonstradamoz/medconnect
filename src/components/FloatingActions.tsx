"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, PhoneCall, X } from "lucide-react";
import { useState } from "react";

export function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        zIndex: 9999
      }}>
        {/* Call Button */}
        <motion.a
          href="tel:+1234567890"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#22c55e",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 32px rgba(34, 197, 94, 0.4)",
            cursor: "pointer",
            position: "relative"
          }}
        >
          {/* Pulsing ring */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "2px solid #22c55e",
            }}
          />
          <PhoneCall size={24} />
        </motion.a>

        {/* Chat Button */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "var(--blue-primary)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 40px rgba(1, 122, 175, 0.4)",
            border: "none",
            cursor: "pointer",
            position: "relative"
          }}
        >
          <AnimatePresence mode="wait">
            {isChatOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <MessageCircle size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              position: "fixed",
              bottom: "100px",
              right: "2rem",
              width: "350px",
              height: "500px",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "24px",
              boxShadow: "0 20px 80px rgba(0, 0, 0, 0.15)",
              zIndex: 9998,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}
          >
            {/* Header */}
            <div style={{ background: "var(--blue-primary)", padding: "1.2rem", color: "#fff" }}>
              <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>MedConnect Assistant</h3>
              <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.8, marginTop: "0.2rem" }}>We typically reply in a few minutes.</p>
            </div>
            
            {/* Messages Area */}
            <div style={{ flex: 1, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", overflowY: "auto", background: "rgba(248, 249, 250, 0.5)" }}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{ background: "#ffffff", padding: "1rem", borderRadius: "16px 16px 16px 0", maxWidth: "85%", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9" }}
              >
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#1e293b", lineHeight: 1.5 }}>
                  Hi there! 👋 Welcome to MedConnect Global. How can we assist you with your healthcare journey today?
                </p>
              </motion.div>
            </div>

            {/* Input Area */}
            <div style={{ padding: "1rem", borderTop: "1px solid rgba(0,0,0,0.05)", background: "#ffffff", display: "flex", gap: "0.5rem" }}>
              <input 
                type="text" 
                placeholder="Type your message..." 
                style={{ flex: 1, padding: "0.8rem 1rem", borderRadius: "999px", border: "1px solid #e2e8f0", outline: "none", fontSize: "0.95rem" }}
              />
              <button style={{ width: "42px", height: "42px", borderRadius: "50%", background: "var(--gold-primary)", border: "none", color: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <MessageCircle size={18} style={{ transform: "rotate(-45deg)", marginLeft: 2, marginBottom: 2 }} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
