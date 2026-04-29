"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { IconYouTube, IconGlobe, IconTarget, IconCpu } from "./Icons";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 120)
          );
        }
      }),
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="section-gap" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-main">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 56, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
            Projects & Content
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#edf0f7", lineHeight: 1.2 }}>
            Featured work
          </h2>
        </div>

        {/* ABX YouTube — Featured Card */}
        <div
          className="reveal bento"
          style={{
            padding: 0,
            marginBottom: 24,
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            overflow: "hidden",
          }}
        >
          {/* Logo */}
          <div
            style={{
              position: "relative",
              background: "#f8f8f8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/abx-logo.png"
              alt="Akshat Build X"
              width={140}
              height={140}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Content */}
          <div style={{ padding: "32px 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <h3 className="font-display" style={{ fontSize: 22, fontWeight: 800, color: "#edf0f7" }}>
                Akshat Build X
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "4px 10px",
                  borderRadius: 6,
                  background: "rgba(255, 0, 0, 0.08)",
                  border: "1px solid rgba(255, 0, 0, 0.12)",
                }}
              >
                <IconYouTube size={12} color="#ef4444" />
                <span style={{ fontSize: 10, fontWeight: 700, color: "#ef4444", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  YouTube
                </span>
              </div>
            </div>
            <p style={{ fontSize: 15, color: "#22d3ee", fontWeight: 600, marginBottom: 10 }}>
              Building the Future with AI & Technology
            </p>
            <p style={{ fontSize: 13, color: "#6b7085", lineHeight: 1.7, marginBottom: 20, maxWidth: 440 }}>
              Deep dives into GenAI, agentic systems, RAG pipelines, and production ML.
              Practical tutorials and real-world project breakdowns.
            </p>
            <a
              href="https://www.youtube.com/@AkshatBuildX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill"
              style={{ padding: "10px 22px", fontSize: 13 }}
            >
              Visit Channel
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="projects-grid"
        >
          {/* Gyaan.ai */}
          <div className="reveal bento">
            <div className="icon-box" style={{ marginBottom: 18 }}>
              <IconGlobe size={22} color="#5b8def" />
            </div>
            <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: "#edf0f7", marginBottom: 6 }}>
              Gyaan.ai
            </h3>
            <div style={{ fontSize: 12, color: "#5b8def", fontWeight: 600, marginBottom: 12 }}>
              Socratic AI Tutor
            </div>
            <p style={{ fontSize: 13, color: "#6b7085", lineHeight: 1.7, marginBottom: 16 }}>
              Personalized AI tutoring with RAG, LangGraph, MongoDB Atlas vector search,
              and local Gemma LLMs. Adapts to student grade level.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Next.js", "LangGraph", "RAG", "MongoDB"].map((t) => (
                <span key={t} className="chip" style={{ fontSize: 11 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* WhatsApp Commerce */}
          <div className="reveal bento">
            <div className="icon-box" style={{ marginBottom: 18 }}>
              <IconTarget size={22} color="#34d399" />
            </div>
            <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: "#edf0f7", marginBottom: 6 }}>
              WhatsApp Commerce
            </h3>
            <div style={{ fontSize: 12, color: "#34d399", fontWeight: 600, marginBottom: 12 }}>
              Conversational Commerce
            </div>
            <p style={{ fontSize: 13, color: "#6b7085", lineHeight: 1.7, marginBottom: 16 }}>
              End-to-end commerce platform for US & Mexico via WhatsApp.
              Google ADK + LangGraph + Infobip CPaaS with multi-turn ordering.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Google ADK", "LangGraph", "Infobip"].map((t) => (
                <span key={t} className="chip" style={{ fontSize: 11 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Legal AI */}
          <div className="reveal bento">
            <div className="icon-box" style={{ marginBottom: 18 }}>
              <IconCpu size={22} color="#f59e0b" />
            </div>
            <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: "#edf0f7", marginBottom: 6 }}>
              AI Legal Assistant
            </h3>
            <div style={{ fontSize: 12, color: "#f59e0b", fontWeight: 600, marginBottom: 12 }}>
              Contract Intelligence
            </div>
            <p style={{ fontSize: 13, color: "#6b7085", lineHeight: 1.7, marginBottom: 16 }}>
              Automated contract clause extraction and compliance workflows
              with RAG architecture and precision/recall evaluation.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["RAG", "GenAI", "NLP"].map((t) => (
                <span key={t} className="chip" style={{ fontSize: 11 }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Latest Blog */}
          <div className="reveal bento">
            <div className="icon-box" style={{ marginBottom: 18, background: "rgba(129, 140, 248, 0.06)", borderColor: "rgba(129, 140, 248, 0.1)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: "#edf0f7", marginBottom: 6 }}>
              Latest Blog
            </h3>
            <div style={{ fontSize: 12, color: "#818cf8", fontWeight: 600, marginBottom: 12 }}>
              OpenAI vs Microsoft
            </div>
            <p style={{ fontSize: 13, color: "#6b7085", lineHeight: 1.7, marginBottom: 16 }}>
              Deep dive into the restructured OpenAI-Microsoft deal and what it means for multi-cloud AI infrastructure.
            </p>
            <a href="/blog/openai-just-fired-its-client" className="btn-outline" style={{ padding: "8px 16px", fontSize: 12, width: "100%", justifyContent: "center" }}>
              Read Analysis
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          section > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
