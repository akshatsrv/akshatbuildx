"use client";

import { useEffect, useRef } from "react";
import { IconBrain, IconCode, IconLayers } from "./Icons";

export default function About() {
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
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-gap" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-main">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
            About
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#edf0f7", lineHeight: 1.2, maxWidth: 600 }}>
            Turning complex AI into
            <br />
            <span className="gradient-cool">production reality.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }} className="about-grid">
          {/* Main Text */}
          <div className="reveal bento" style={{ gridRow: "1 / 3" }}>
            <div style={{ fontSize: 15, color: "#8b90a3", lineHeight: 1.9 }}>
              <p style={{ marginBottom: 20 }}>
                I specialize in building enterprise-scale{" "}
                <span style={{ color: "#22d3ee" }}>Agentic AI systems</span>{" "}
                that go beyond prototypes — architecting multi-agent workflows,
                production RAG pipelines, and intelligent automation that
                delivers measurable business outcomes.
              </p>
              <p style={{ marginBottom: 20 }}>
                My work spans the full AI stack: from orchestrating{" "}
                <span style={{ color: "#5b8def" }}>Google ADK & LangGraph</span>{" "}
                agent workflows, to deploying voice bots and WhatsApp commerce
                platforms, to building classification pipelines processing
                hundreds of thousands of records with{" "}
                <span style={{ color: "#5b8def" }}>93% accuracy</span>.
              </p>
              <p>
                I bridge the gap between cutting-edge ML research and
                battle-tested production systems — across{" "}
                <span style={{ color: "#22d3ee" }}>GCP, Azure, and AWS</span>.
              </p>
            </div>
          </div>

          {/* Mini Cards */}
          <div className="reveal bento" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div className="icon-box">
              <IconBrain size={22} color="#22d3ee" />
            </div>
            <div>
              <div className="font-display" style={{ fontSize: 15, fontWeight: 700, color: "#edf0f7", marginBottom: 4 }}>
                Agentic AI
              </div>
              <div style={{ fontSize: 13, color: "#5a5e6e", lineHeight: 1.6 }}>
                Multi-agent orchestration with ~10 concurrent workflows in production
              </div>
            </div>
          </div>

          <div className="reveal bento" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div className="icon-box">
              <IconLayers size={22} color="#5b8def" />
            </div>
            <div>
              <div className="font-display" style={{ fontSize: 15, fontWeight: 700, color: "#edf0f7", marginBottom: 4 }}>
                Full-Stack AI
              </div>
              <div style={{ fontSize: 13, color: "#5a5e6e", lineHeight: 1.6 }}>
                From embeddings to deployment — RAG, fine-tuning, evaluation, and CI/CD
              </div>
            </div>
          </div>
        </div>

        {/* Education Row */}
        <div className="reveal" style={{ display: "flex", gap: 20, marginTop: 20 }} >
          <div className="bento" style={{ flex: 1, display: "flex", gap: 16, alignItems: "center" }}>
            <div className="icon-box">
              <IconCode size={22} color="#9f7aea" />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#edf0f7" }}>
                PG in Data Science
              </div>
              <div style={{ fontSize: 12, color: "#4a4e5e" }}>
                Great Lakes Institute of Management
              </div>
            </div>
          </div>
          <div className="bento" style={{ flex: 1, display: "flex", gap: 16, alignItems: "center" }}>
            <div className="icon-box">
              <IconCode size={22} color="#9f7aea" />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#edf0f7" }}>
                B.Com (Honors)
              </div>
              <div style={{ fontSize: 12, color: "#4a4e5e" }}>
                Madhav Mahavidhyalaya, Jiwaji University
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
