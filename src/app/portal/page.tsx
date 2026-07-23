"use client";
import { useState, useRef } from "react";
import { 
  LayoutDashboard, FileText, Calendar, CreditCard, MessageSquare, 
  UploadCloud, Bell, CheckCircle2, File, Loader2, ArrowRight,
  User, Search, Clock, Activity
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [uploadedFiles, setUploadedFiles] = useState<{name: string, size: string, status: "uploading"|"completed"}[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const newFile = { name: file.name, size: (file.size / 1024 / 1024).toFixed(2) + " MB", status: "uploading" as const };
      
      setUploadedFiles(prev => [newFile, ...prev]);
      
      setTimeout(() => {
        setUploadedFiles(prev => prev.map(f => f.name === file.name ? { ...f, status: "completed" } : f));
      }, 2000);
    }
  };

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: FileText, label: "Medical Records" },
    { icon: Calendar, label: "Appointments" },
    { icon: CreditCard, label: "Payments" },
  ];

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #017aaf 0%, #004261 100%)", 
      fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    }}>
      
      {/* Background Animated Blobs */}
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity }} style={{ position: "absolute", top: "5%", left: "10%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(218,168,55,0.2) 0%, transparent 70%)", borderRadius: "50%", zIndex: 0 }} />
      <motion.div animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }} transition={{ duration: 25, repeat: Infinity }} style={{ position: "absolute", bottom: "5%", right: "10%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", borderRadius: "50%", zIndex: 0 }} />

      {/* Main Glassmorphism Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          width: "100%", 
          maxWidth: 1400, 
          height: "85vh", 
          background: "rgba(255, 255, 255, 0.75)", 
          backdropFilter: "blur(24px)", 
          WebkitBackdropFilter: "blur(24px)",
          borderRadius: 32, 
          border: "1px solid rgba(255, 255, 255, 0.4)", 
          boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
          display: "flex",
          overflow: "hidden",
          zIndex: 10
        }}
      >
        
        {/* Sidebar */}
        <aside className="portal-sidebar">
          
          {/* Logo Area */}
          <div style={{ height: 80, display: "flex", alignItems: "center", padding: "0 1.5rem" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--gold-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1rem", color: "#111" }}>M</div>
              <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "#1e293b" }}>MedConnect</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav style={{ padding: "1.5rem 1rem", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            {navItems.map((item, index) => {
              const isActive = activeTab === item.label;
              return (
                <button 
                  key={index} 
                  onClick={() => setActiveTab(item.label)}
                  style={{
                    display: "flex", alignItems: "center", gap: 14, padding: "1rem", borderRadius: 16, border: "none", cursor: "pointer",
                    background: isActive ? "rgba(255,255,255,0.9)" : "transparent",
                    color: isActive ? "var(--blue-primary)" : "#64748b",
                    fontWeight: isActive ? 800 : 600,
                    fontSize: "0.95rem",
                    transition: "all 0.2s ease",
                    boxShadow: isActive ? "0 4px 15px rgba(0,0,0,0.05)" : "none",
                    textAlign: "left"
                  }}
                >
                  <item.icon size={20} style={{ color: isActive ? "var(--gold-primary)" : "#94a3b8" }} />
                  {item.label}
                </button>
              )
            })}
          </nav>
          
          {/* Support Widget */}
          <div style={{ padding: "1.5rem" }}>
            <div style={{ background: "rgba(1, 122, 175, 0.1)", padding: "1.5rem", borderRadius: 20, border: "1px solid rgba(1,122,175,0.2)" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--blue-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", boxShadow: "0 8px 20px rgba(1, 122, 175, 0.4)" }}>
                <MessageSquare size={20} color="#fff" />
              </div>
              <h4 style={{ fontWeight: 800, color: "#1e293b", fontSize: "1rem", marginBottom: 4 }}>Case Manager</h4>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.2rem" }}>Sarah is online</p>
              <button style={{ width: "100%", padding: "0.85rem", background: "var(--blue-primary)", border: "none", borderRadius: 12, fontWeight: 700, color: "#fff", cursor: "pointer", fontSize: "0.9rem", transition: "transform 0.2s", boxShadow: "0 4px 15px rgba(1,122,175,0.3)" }}>Chat Now</button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          
          <div className="portal-mobile-header" style={{ overflowX: "auto" }}>
            <div style={{ display: "flex", gap: "1rem", whiteSpace: "nowrap" }}>
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(item.label)}
                  style={{
                    background: activeTab === item.label ? "var(--blue-primary)" : "transparent",
                    color: activeTab === item.label ? "#fff" : "#1e293b",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "0.9rem"
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Top Header */}
          <header className="desktop-only" style={{ height: 80, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2.5rem", borderBottom: "1px solid rgba(255,255,255,0.5)" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1e293b" }}>{activeTab}</h1>
            
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <Search size={18} color="#94a3b8" style={{ position: "absolute", left: 16 }} />
                <input type="text" placeholder="Search..." style={{ padding: "0.7rem 1rem 0.7rem 2.8rem", borderRadius: 999, border: "1px solid rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.5)", outline: "none", fontSize: "0.9rem", width: 250 }} />
              </div>

              <button style={{ position: "relative", background: "rgba(255,255,255,0.8)", width: 44, height: 44, borderRadius: "50%", border: "none", cursor: "pointer", color: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
                <Bell size={20} />
                <span style={{ position: "absolute", top: 10, right: 12, width: 8, height: 8, background: "#ef4444", borderRadius: "50%" }} />
              </button>
              
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", background: "rgba(255,255,255,0.8)", padding: "0.4rem 1.5rem 0.4rem 0.4rem", borderRadius: 999, boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--gold-primary)", overflow: "hidden", border: "2px solid #fff" }}>
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.9rem", fontWeight: 800, color: "#1e293b", lineHeight: 1 }}>James Wilson</p>
                  <p style={{ fontSize: "0.75rem", color: "#64748b", marginTop: 4, fontWeight: 600 }}>MC-49281</p>
                </div>
              </div>
            </div>
          </header>

          {/* Dynamic Content */}
          <div style={{ flex: 1, overflowY: "auto", padding: "2.5rem" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ height: "100%" }}
              >
                {/* DASHBOARD TAB */}
                {activeTab === "Dashboard" && (
                  <div>
                    <div style={{ marginBottom: "2.5rem" }}>
                      <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#1e293b", marginBottom: "0.5rem" }}>Welcome back, James!</h2>
                      <p style={{ color: "#64748b", fontSize: "1.1rem" }}>Here is the latest update on your healthcare journey.</p>
                    </div>
                    
                    <div className="grid-3" style={{ marginBottom: "2.5rem" }}>
                      {/* Card 1 */}
                      <div style={{ background: "rgba(255,255,255,0.9)", padding: "1.5rem", borderRadius: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid rgba(255,255,255,0.5)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
                          <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(1, 122, 175, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue-primary)" }}>
                            <Calendar size={24} />
                          </div>
                          <div>
                            <p style={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 600 }}>Next Appointment</p>
                            <p style={{ color: "#1e293b", fontSize: "1.1rem", fontWeight: 800 }}>Oct 12, 2026</p>
                          </div>
                        </div>
                        <div style={{ background: "#f8f9fa", padding: "1rem", borderRadius: 12 }}>
                          <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1e293b", marginBottom: 4 }}>Cardiology Consultation</p>
                          <p style={{ fontSize: "0.85rem", color: "#64748b" }}>Dr. Sarah Jenkins • Apollo Hospital</p>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div style={{ background: "rgba(255,255,255,0.9)", padding: "1.5rem", borderRadius: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid rgba(255,255,255,0.5)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
                          <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(218, 168, 55, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-primary)" }}>
                            <Activity size={24} />
                          </div>
                          <div>
                            <p style={{ color: "#64748b", fontSize: "0.85rem", fontWeight: 600 }}>Recent Activity</p>
                            <p style={{ color: "#1e293b", fontSize: "1.1rem", fontWeight: 800 }}>Lab Results</p>
                          </div>
                        </div>
                        <div style={{ background: "#f8f9fa", padding: "1rem", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1e293b", marginBottom: 4 }}>Blood Panel</p>
                            <p style={{ fontSize: "0.85rem", color: "#64748b" }}>Uploaded 2 days ago</p>
                          </div>
                          <button style={{ border: "none", background: "none", color: "var(--blue-primary)", fontWeight: 700, cursor: "pointer" }}>View</button>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", padding: "1.5rem", borderRadius: 24, boxShadow: "0 10px 30px rgba(15,23,42,0.3)", color: "#fff" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
                          <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold-primary)" }}>
                            <CreditCard size={24} />
                          </div>
                          <div>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", fontWeight: 600 }}>Outstanding Balance</p>
                            <p style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 800 }}>$1,240.00</p>
                          </div>
                        </div>
                        <button style={{ width: "100%", padding: "1rem", background: "var(--gold-primary)", border: "none", borderRadius: 12, fontWeight: 800, color: "#111", cursor: "pointer", transition: "transform 0.2s" }}>
                          Pay Now
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* MEDICAL RECORDS TAB */}
                {activeTab === "Medical Records" && (
                  <div>
                    <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1e293b", marginBottom: "2rem" }}>Medical Records</h2>
                    
                    {/* Drag and Drop Zone */}
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      style={{ 
                        border: "2px dashed rgba(1,122,175,0.3)", 
                        borderRadius: 24, 
                        padding: "3rem 2rem", 
                        textAlign: "center", 
                        background: "rgba(255,255,255,0.6)",
                        cursor: "pointer",
                        marginBottom: "3rem",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        style={{ display: "none" }} 
                        onChange={handleFileUpload} 
                      />
                      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(1,122,175,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem auto", color: "var(--blue-primary)" }}>
                        <UploadCloud size={32} />
                      </div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>Click or drag files to upload</h3>
                      <p style={{ color: "#64748b", fontSize: "0.95rem" }}>Supported formats: PDF, JPG, PNG (Max 50MB)</p>
                    </div>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e293b", marginBottom: "1.5rem" }}>Uploaded Documents</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {uploadedFiles.length === 0 && (
                        <p style={{ color: "#64748b", fontStyle: "italic" }}>No files uploaded yet.</p>
                      )}
                      
                      {uploadedFiles.map((file, i) => (
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          key={i} 
                          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.2rem 1.5rem", background: "rgba(255,255,255,0.8)", borderRadius: 16, border: "1px solid rgba(0,0,0,0.05)" }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(1,122,175,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue-primary)" }}>
                              <File size={24} />
                            </div>
                            <div>
                              <p style={{ fontWeight: 700, color: "#1e293b", fontSize: "1rem" }}>{file.name}</p>
                              <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: 4 }}>{file.size} • Uploaded just now</p>
                            </div>
                          </div>
                          
                          {file.status === "uploading" ? (
                            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--blue-primary)", fontWeight: 600, fontSize: "0.9rem" }}>
                              <Loader2 size={18} className="animate-spin" /> Uploading...
                            </div>
                          ) : (
                            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#10b981", fontWeight: 600, fontSize: "0.9rem" }}>
                              <CheckCircle2 size={18} /> Complete
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Fallback for other tabs */}
                {(activeTab === "Appointments" || activeTab === "Payments") && (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", color: "#64748b" }}>
                    <Loader2 size={48} style={{ marginBottom: "1.5rem", opacity: 0.2 }} />
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1e293b" }}>{activeTab}</h2>
                    <p>This module is currently being updated.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </motion.div>
    </div>
  );
}
