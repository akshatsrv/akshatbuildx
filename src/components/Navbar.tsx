"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "";
      for (const l of NAV_LINKS) {
        const el = document.getElementById(l.href.slice(1));
        if (el && el.getBoundingClientRect().top <= 140) current = l.href.slice(1);
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "14px 0" : "22px 0",
        background: scrolled ? "rgba(255, 255, 255, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/abx-logo.png" alt="ABX" width={36} height={36} style={{ borderRadius: 10 }} />
          <span className="font-display" style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>
            Akshat Build <span style={{ color: "#0891b2" }}>X</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 14px",
                  fontSize: 13,
                  fontWeight: 500,
                  color: isActive ? "#0891b2" : "#6b7280",
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#111827"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "#0891b2" : "#6b7280"; }}
              >
                {link.label}
              </a>
            );
          })}
          <a href="#contact" className="btn-fill" style={{ padding: "9px 22px", fontSize: 13, marginLeft: 12 }}>
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-nav-toggle"
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "1px solid #e5e7eb",
            borderRadius: 10,
            padding: "7px 11px",
            color: "#374151",
            cursor: "pointer",
            fontSize: 18,
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "\u2715" : "\u2630"}
        </button>
      </div>

      {/* Mobile Panel */}
      {mobileOpen && (
        <div style={{ padding: "12px 32px 20px", background: "rgba(255,255,255,0.98)", borderBottom: "1px solid #e5e7eb" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ display: "block", padding: "10px 0", fontSize: 14, color: "#6b7280", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 769px) { .nav-mobile-btn { display: none !important; } }
        @media (max-width: 768px) { .nav-desktop { display: none !important; } .nav-mobile-btn { display: block !important; } }
      `}</style>
    </nav>
  );
}
