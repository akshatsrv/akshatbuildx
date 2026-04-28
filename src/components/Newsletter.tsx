"use client";

import { useEffect, useRef, useState } from "react";
import { IconMail, IconArrowRight } from "./Icons";

export default function Newsletter() {
  const ref = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      id="newsletter"
      ref={ref}
      style={{
        position: "relative",
        zIndex: 1,
        padding: "100px 0",
      }}
    >
      <div className="container-main">
        <div
          className="reveal bento"
          style={{
            padding: 0,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background: "linear-gradient(90deg, transparent, #22d3ee, transparent)",
            }}
          />

          {/* Content Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
            }}
            className="newsletter-grid"
          >
            {/* Left — Text */}
            <div style={{ padding: "56px 48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div className="icon-box" style={{ width: 40, height: 40, borderRadius: 12 }}>
                  <IconMail size={18} color="#22d3ee" />
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Newsletter
                </span>
              </div>

              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(24px, 3vw, 34px)",
                  fontWeight: 800,
                  color: "#edf0f7",
                  lineHeight: 1.2,
                  marginBottom: 14,
                }}
              >
                Stay ahead with Akshat
              </h2>

              <p style={{ fontSize: 15, color: "#6b7085", lineHeight: 1.75, marginBottom: 8, maxWidth: 400 }}>
                Get the latest blogs, AI deep dives, project breakdowns, and
                actionable insights delivered straight to your inbox. No spam — just signal.
              </p>

              <div style={{ display: "flex", gap: 20, marginTop: 24 }}>
                {[
                  { value: "Weekly", label: "Insights" },
                  { value: "GenAI", label: "Deep Dives" },
                  { value: "Free", label: "Always" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display" style={{ fontSize: 16, fontWeight: 700, color: "#22d3ee" }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: 11, color: "#4a4e5e", marginTop: 2 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div
              style={{
                padding: "56px 48px",
                background: "rgba(255,255,255,0.015)",
                borderLeft: "1px solid #14161f",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: "rgba(34, 211, 238, 0.08)",
                      border: "1px solid rgba(34, 211, 238, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="font-display" style={{ fontSize: 20, fontWeight: 700, color: "#edf0f7", marginBottom: 8 }}>
                    You&apos;re in!
                  </div>
                  <p style={{ fontSize: 14, color: "#6b7085" }}>
                    Welcome aboard. Expect your first email soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{
                      marginTop: 16,
                      background: "none",
                      border: "none",
                      color: "#22d3ee",
                      fontSize: 13,
                      cursor: "pointer",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <>
                  <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "#edf0f7", marginBottom: 8 }}>
                    Join the community
                  </div>
                  <p style={{ fontSize: 13, color: "#5a5e6e", marginBottom: 24, lineHeight: 1.6 }}>
                    AI builders, engineers, and curious minds — all in one inbox.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 14 }}>
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                          width: "100%",
                          padding: "14px 18px",
                          fontSize: 14,
                          background: "#0a0b12",
                          border: "1px solid #1e2030",
                          borderRadius: 12,
                          color: "#edf0f7",
                          outline: "none",
                          transition: "border-color 0.3s ease",
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#22d3ee40"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "#1e2030"; }}
                      />
                    </div>
                    <button type="submit" className="btn-fill" style={{ width: "100%", justifyContent: "center" }}>
                      Subscribe
                      <IconArrowRight size={16} />
                    </button>
                  </form>

                  <p style={{ fontSize: 11, color: "#3a3e52", marginTop: 14, lineHeight: 1.5 }}>
                    Unsubscribe anytime. No spam, ever.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
          }
          .newsletter-grid > div:last-child {
            border-left: none !important;
            border-top: 1px solid #14161f;
          }
        }
      `}</style>
    </section>
  );
}
