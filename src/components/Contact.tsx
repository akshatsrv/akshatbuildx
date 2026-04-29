"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { IconMail, IconLinkedIn, IconYouTube, IconArrowRight } from "./Icons";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 100)
          );
        }
      }),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const LINKS = [
    {
      icon: <IconMail size={20} color="#0891b2" />,
      label: "Email",
      value: "Drop me a line",
      href: "mailto:Akshatshrivastava18@gmail.com",
    },
    {
      icon: <IconLinkedIn size={18} color="#818cf8" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/akshat-shrivastava18",
    },
    {
      icon: <IconYouTube size={20} color="#ef4444" />,
      label: "YouTube",
      value: "Akshat Build X",
      href: "https://www.youtube.com/@AkshatBuildX",
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-gap" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-main" style={{ maxWidth: 720 }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 48, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#0891b2", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
            Contact
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#111827", lineHeight: 1.2, marginBottom: 14 }}>
            Let&apos;s build together
          </h2>
          <p style={{ fontSize: 15, color: "#9ca3af", maxWidth: 400, margin: "0 auto", lineHeight: 1.7 }}>
            Open for collaborations, speaking engagements, and AI consulting projects.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="contact-grid">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="reveal bento"
              style={{
                padding: "24px",
                textDecoration: "none",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div className="icon-box">{link.icon}</div>
              <div>
                <div style={{ fontSize: 11, color: "#d1d5db", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                  {link.label}
                </div>
                <div style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>
                  {link.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: "center", marginTop: 48 }}>
          <a href="mailto:Akshatshrivastava18@gmail.com" className="btn-fill" style={{ fontSize: 15, padding: "16px 36px" }}>
            Get in Touch
            <IconArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: 100,
          background: "#f8f9fb",
          borderTop: "1px solid #e2e5ea",
        }}
      >
        <div
          className="container-main"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 32px",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/abx-logo.png" alt="ABX" width={24} height={24} style={{ borderRadius: 6 }} />
            <span className="font-display" style={{ fontSize: 13, fontWeight: 600, color: "#e5e7eb" }}>
              Akshat Build X
            </span>
            <span style={{ fontSize: 12, color: "#6b7280" }}>
              &copy; {new Date().getFullYear()} Akshat Shrivastava
            </span>
          </div>
          <div style={{ fontSize: 12, color: "#6b7280" }}>
            Crafted with precision
          </div>
        </div>
      </footer>

      <style jsx>{`
        @media (max-width: 640px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
