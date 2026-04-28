"use client";

import Image from "next/image";
import { IconArrowRight } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <div className="container-main" style={{ paddingTop: 140, paddingBottom: 80 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 80,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            {/* Label */}
            <div
              className="chip chip-accent"
              style={{ marginBottom: 32, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              Senior AI Engineer
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: "clamp(40px, 5.5vw, 68px)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#edf0f7",
                marginBottom: 24,
              }}
            >
              Building intelligent
              <br />
              <span className="gradient-accent">systems</span> that
              <br />
              think & act.
            </h1>

            <p
              style={{
                fontSize: 16,
                color: "#6b7085",
                maxWidth: 460,
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              I architect enterprise-grade Agentic AI systems, production RAG
              pipelines, and multi-agent orchestration — shipping solutions that
              drive measurable business impact.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#services" className="btn-fill">
                View Services
                <IconArrowRight size={16} />
              </a>
              <a href="#about" className="btn-outline">
                About Me
              </a>
            </div>

            {/* Compact Stats */}
            <div
              style={{
                display: "flex",
                gap: 48,
                marginTop: 56,
                paddingTop: 32,
                borderTop: "1px solid #14161f",
              }}
            >
              {[
                { value: "93%", label: "ML Accuracy" },
                { value: "10+", label: "Agent Workflows" },
                { value: "35%", label: "Query Speed Gain" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display gradient-accent" style={{ fontSize: 28, fontWeight: 800 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 12, color: "#4a4e5e", marginTop: 4, letterSpacing: "0.02em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div
            className="hero-photo"
            style={{
              position: "relative",
              width: 360,
              height: 440,
              borderRadius: 28,
              overflow: "hidden",
              border: "1px solid #1a1d28",
              flexShrink: 0,
            }}
          >
            <Image
              src="/akshat-photo.png"
              alt="Akshat Shrivastava"
              fill
              sizes="360px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            {/* Gradient overlay at bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 120,
                background: "linear-gradient(transparent, #08090d)",
              }}
            />
            {/* Name badge */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 24,
                right: 24,
              }}
            >
              <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "#edf0f7" }}>
                Akshat Shrivastava
              </div>
              <div style={{ fontSize: 12, color: "#22d3ee", marginTop: 2 }}>
                GenAI / Data Scientist
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          borderTop: "1px solid #14161f",
          borderBottom: "1px solid #14161f",
          padding: "14px 0",
          background: "rgba(8, 9, 13, 0.6)",
        }}
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: "flex", gap: 48, alignItems: "center" }}>
              {[
                "Google ADK", "LangGraph", "LangChain", "Vertex AI",
                "Dialogflow CX", "OpenAI", "Gemini", "FastAPI",
                "RAG Pipelines", "Docker", "Terraform", "Azure",
                "GCP", "AWS", "Qdrant", "ChromaDB",
              ].map((t) => (
                <span
                  key={`${i}-${t}`}
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#3a3e52",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { display: none !important; }
        }
      `}</style>
    </section>
  );
}
