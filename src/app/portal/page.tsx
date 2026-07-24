"use client";
import { useState, useRef } from "react";
import { 
  LayoutDashboard, FileText, Calendar, CreditCard, MessageSquare, 
  UploadCloud, Bell, CheckCircle2, File, Loader2, ArrowRight,
  User, Search, Clock, Activity, Globe, Menu, X
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{name: string, size: string, status: "uploading"|"completed", date?: string}[]>([
    { name: "Blood_Test_Results_2026.pdf", size: "2.4 MB", status: "completed", date: "Oct 10, 2026" },
    { name: "Cardiology_Consult_Notes.pdf", size: "1.1 MB", status: "completed", date: "Sep 28, 2026" },
    { name: "MRI_Scan_Summary.jpg", size: "5.7 MB", status: "completed", date: "Aug 15, 2026" }
  ]);
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
      height: "100vh", 
      background: "var(--bg-secondary)", 
      fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
      display: "flex",
      overflow: "hidden"
    }}>
      <style>{`
        .appointments-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .appointment-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }
        .appointment-info {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .appointment-actions {
          display: flex;
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .appointments-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .appointments-header button {
            width: 100%;
          }
          .appointment-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .appointment-actions {
            width: 100%;
            flex-direction: column;
          }
          .appointment-actions button {
            width: 100%;
          }
        }
      `}</style>
      
      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ 
          width: "100%", 
          height: "100vh", 
          display: "flex",
          overflow: "hidden",
          zIndex: 10
        }}
      >
        
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", zIndex: 999 }}
          />
        )}

        {/* Sidebar */}
        <aside className={`portal-sidebar ${isMobileMenuOpen ? 'open' : ''}`} style={{ background: "var(--bg-main)", borderRight: "1px solid rgba(0,0,0,0.05)" }}>
          
          {/* Logo Area */}
          <div style={{ height: 80, display: "flex", alignItems: "center", padding: "0 1.5rem" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <img src="/logo-icon.png" alt="MedConnect Global" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
              <span style={{ fontWeight: 800, fontSize: "1.3rem", color: "var(--blue-dark)", letterSpacing: "-0.5px" }}>MedConnect</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav style={{ padding: "1.5rem 1rem", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            {navItems.map((item, index) => {
              const isActive = activeTab === item.label;
              return (
                <button 
                  key={index} 
                  onClick={() => {
                    setActiveTab(item.label);
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    display: "flex", alignItems: "center", gap: 14, padding: "1rem", borderRadius: 16, border: "none", cursor: "pointer",
                    background: isActive ? "var(--blue-light)" : "transparent",
                    color: isActive ? "var(--blue-dark)" : "#64748b",
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

            {/* Main Website Link */}
            <Link href="/" style={{
              display: "flex", alignItems: "center", gap: 14, padding: "1rem", borderRadius: 16, border: "none", cursor: "pointer",
              background: "transparent",
              color: "#64748b",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              marginTop: "auto"
            }}>
              <Globe size={20} style={{ color: "#94a3b8" }} />
              Return to Website
            </Link>
          </nav>
          
          {/* Support Widget */}
          <div style={{ padding: "1.5rem" }}>
            <div style={{ background: "rgba(218, 168, 55, 0.1)", padding: "1.5rem", borderRadius: 20, border: "1px solid rgba(218, 168, 55,0.2)" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--blue-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", boxShadow: "0 8px 20px rgba(218, 168, 55, 0.4)" }}>
                <MessageSquare size={20} color="#fff" />
              </div>
              <h4 style={{ fontWeight: 800, color: "#1e293b", fontSize: "1rem", marginBottom: 4 }}>Case Manager</h4>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.2rem" }}>Sarah is online</p>
              <button style={{ width: "100%", padding: "0.85rem", background: "var(--blue-primary)", border: "none", borderRadius: 12, fontWeight: 700, color: "#fff", cursor: "pointer", fontSize: "0.9rem", transition: "transform 0.2s", boxShadow: "0 4px 15px rgba(218, 168, 55,0.3)" }}>Chat Now</button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          
          <div className="portal-mobile-header">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--blue-dark)", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Menu size={28} />
            </button>
            <h1 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e293b", margin: 0, flex: 1, textAlign: "center" }}>{activeTab}</h1>
            <div style={{ width: 28 }} /> {/* Spacer to balance the hamburger icon */}
          </div>

          {/* Top Header */}
          <header className="desktop-only" style={{ height: 80, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2.5rem", borderBottom: "1px solid rgba(0,0,0,0.05)", background: "var(--bg-secondary)" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1e293b" }}>{activeTab}</h1>
            
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <Search size={18} color="#94a3b8" style={{ position: "absolute", left: 16 }} />
                <input type="text" placeholder="Search..." style={{ padding: "0.7rem 1rem 0.7rem 2.8rem", borderRadius: 999, border: "1px solid rgba(0,0,0,0.1)", background: "#ffffff", outline: "none", fontSize: "0.9rem", width: 250 }} />
              </div>

              <button style={{ position: "relative", background: "#ffffff", width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.05)", cursor: "pointer", color: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}>
                <Bell size={20} />
                <span style={{ position: "absolute", top: 10, right: 12, width: 8, height: 8, background: "#ef4444", borderRadius: "50%" }} />
              </button>
              
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", background: "#ffffff", padding: "0.4rem 1.5rem 0.4rem 0.4rem", borderRadius: 999, boxShadow: "0 4px 10px rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.05)" }}>
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
                          <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(218, 168, 55, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue-primary)" }}>
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
                        border: "2px dashed rgba(218, 168, 55,0.3)", 
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
                      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(218, 168, 55,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem auto", color: "var(--blue-primary)" }}>
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
                            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(218, 168, 55,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue-primary)" }}>
                              <File size={24} />
                            </div>
                            <div>
                              <p style={{ fontWeight: 700, color: "#1e293b", fontSize: "1rem" }}>{file.name}</p>
                              <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: 4 }}>{file.size} • Uploaded {file.date || "just now"}</p>
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
                
                {/* APPOINTMENTS TAB */}
                {activeTab === "Appointments" && (
                  <div>
                    <div className="appointments-header">
                      <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1e293b" }}>Appointments</h2>
                      <button style={{ background: "var(--blue-primary)", color: "#fff", padding: "0.8rem 1.5rem", borderRadius: 12, fontWeight: 700, border: "none", cursor: "pointer" }}>Book New Appointment</button>
                    </div>
                    
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e293b", marginBottom: "1.5rem" }}>Upcoming</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
                      {[
                        { date: "Oct 12, 2026", time: "10:30 AM", doctor: "Dr. Sarah Jenkins", type: "Cardiology Consultation", location: "Apollo Hospital, Room 302" },
                        { date: "Nov 05, 2026", time: "02:00 PM", doctor: "Dr. Michael Chen", type: "Annual Physical Checkup", location: "MedConnect Central Clinic" }
                      ].map((apt, i) => (
                        <div key={i} className="appointment-card">
                          <div className="appointment-info">
                            <div style={{ background: "rgba(218, 168, 55,0.1)", color: "var(--blue-primary)", padding: "1rem", borderRadius: 16, textAlign: "center", minWidth: 80 }}>
                              <p style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase" }}>{apt.date.split(' ')[0]}</p>
                              <p style={{ fontSize: "1.5rem", fontWeight: 900 }}>{apt.date.split(' ')[1].replace(',', '')}</p>
                            </div>
                            <div>
                              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>{apt.type}</h4>
                              <p style={{ color: "#64748b", fontSize: "0.95rem", marginBottom: 4 }}>{apt.doctor} • {apt.time}</p>
                              <p style={{ color: "#94a3b8", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: 4 }}><Clock size={14} /> {apt.location}</p>
                            </div>
                          </div>
                          <div className="appointment-actions">
                            <button style={{ border: "1px solid rgba(0,0,0,0.1)", background: "transparent", color: "#1e293b", padding: "0.6rem 1.2rem", borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>Reschedule</button>
                            <button style={{ border: "none", background: "rgba(218, 168, 55,0.1)", color: "var(--blue-primary)", padding: "0.6rem 1.2rem", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Join Video Call</button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e293b", marginBottom: "1.5rem" }}>Past Appointments</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      <div className="appointment-card" style={{ background: "rgba(255,255,255,0.5)" }}>
                        <div className="appointment-info">
                          <div style={{ background: "#f1f5f9", color: "#64748b", padding: "1rem", borderRadius: 16, textAlign: "center", minWidth: 80 }}>
                            <p style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase" }}>Sep</p>
                            <p style={{ fontSize: "1.5rem", fontWeight: 900 }}>28</p>
                          </div>
                          <div>
                            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#64748b", marginBottom: 4 }}>Initial Consultation</h4>
                            <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>Dr. Sarah Jenkins</p>
                          </div>
                        </div>
                        <span style={{ padding: "0.4rem 1rem", background: "#f1f5f9", color: "#64748b", borderRadius: 999, fontSize: "0.85rem", fontWeight: 700 }}>Completed</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* PAYMENTS TAB */}
                {activeTab === "Payments" && (
                  <div>
                    <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1e293b", marginBottom: "2rem" }}>Billing & Payments</h2>
                    
                    <div className="grid-3" style={{ marginBottom: "3rem" }}>
                      <div style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", padding: "1.5rem", borderRadius: 24, color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>
                          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", fontWeight: 600, marginBottom: 8 }}>Total Due</p>
                          <p style={{ fontSize: "2.5rem", fontWeight: 900 }}>$1,240.00</p>
                        </div>
                        <button style={{ background: "var(--gold-primary)", color: "#111", border: "none", padding: "0.8rem", borderRadius: 12, fontWeight: 800, cursor: "pointer", marginTop: "1.5rem" }}>Pay Full Balance</button>
                      </div>
                    </div>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e293b", marginBottom: "1.5rem" }}>Pending Invoices</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
                      {[
                        { invoice: "INV-2026-892", date: "Oct 10, 2026", desc: "Cardiology Consultation & Tests", amount: "$1,240.00" }
                      ].map((inv, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem", background: "#ffffff", borderRadius: 16, border: "1px solid rgba(239,68,68,0.2)", borderLeft: "4px solid #ef4444", boxShadow: "0 4px 15px rgba(0,0,0,0.02)" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(239,68,68,0.1)", color: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <FileText size={24} />
                            </div>
                            <div>
                              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>{inv.desc}</h4>
                              <p style={{ color: "#64748b", fontSize: "0.9rem" }}>{inv.invoice} • Billed on {inv.date}</p>
                            </div>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                            <p style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e293b" }}>{inv.amount}</p>
                            <button style={{ background: "#ef4444", color: "#fff", border: "none", padding: "0.6rem 1.2rem", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>Pay Now</button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e293b", marginBottom: "1.5rem" }}>Payment History</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {[
                        { invoice: "INV-2026-442", date: "Sep 28, 2026", desc: "Initial General Consultation", amount: "$150.00", status: "Paid via Visa ending in 4242" },
                        { invoice: "INV-2026-118", date: "Aug 15, 2026", desc: "MRI Scan (Copay)", amount: "$75.00", status: "Paid via Mastercard ending in 8891" }
                      ].map((inv, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem", background: "rgba(255,255,255,0.7)", borderRadius: 16, border: "1px solid rgba(0,0,0,0.05)" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(16,185,129,0.1)", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <CheckCircle2 size={24} />
                            </div>
                            <div>
                              <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: 4 }}>{inv.desc}</h4>
                              <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: 2 }}>{inv.invoice} • {inv.date}</p>
                              <p style={{ color: "#94a3b8", fontSize: "0.75rem" }}>{inv.status}</p>
                            </div>
                          </div>
                          <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#64748b" }}>{inv.amount}</p>
                        </div>
                      ))}
                    </div>
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
