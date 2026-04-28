"use client";

import { useEffect, useRef } from "react";
import { IconAward } from "./Icons";

const ROLES = [
  {
    period: "2025 — Present",
    role: "GenAI Engineer",
    company: "AutoZone Service LLP",
    highlights: [
      "Architected enterprise Agentic AI with Google ADK & LangGraph — ~10 concurrent agent workflows",
      "Deployed Voice Bot & call routing via Dialogflow CX, reducing handling time",
      "Built WhatsApp Commerce platform (US & Mexico) with LangGraph + Infobip CPaaS",
      "Production RAG engine on Vertex AI, Cloud Run & Apigee with vector store architecture",
      "Classification pipeline: ~500K records/year at 93% accuracy, saving ~100 manual hours/year",
      "Developing Generative AI Legal Assistant for contract clause extraction with RAG",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Developer Data Scientist",
    company: "AmIgo Labs",
    highlights: [
      "Conversational Database AI Bot with AWS S3, RDS, Vanna AI & Qdrant — 35% faster query resolution",
      "RAG system with Fast Embedding — 40% processing time reduction, 25% retrieval accuracy boost",
      "Generative AI tool for CRM email queries — 27% faster response times",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Developer Data Scientist | AI Engineer",
    company: "Kanini Software Solutions",
    highlights: [
      "Azure Function APIs for project management & documentation automation (70-80% NLP accuracy)",
      "Production deployment with Azure Functions, Cosmos DB, Docker & API management",
      "Healthcare workflow automation with EHR integration — 40% admin task reduction",
    ],
  },
];

const CERTS = [
  { name: "Generative AI Fundamentals", from: "Databricks", year: "2024" },
  { name: "Encoder-Decoder Architecture", from: "Google", year: "2024" },
  { name: "Azure Fundamentals", from: "Microsoft", year: "2023" },
  { name: "Intro to Generative AI", from: "Google", year: "2023" },
  { name: "ML on AWS", from: "Coursera", year: "2023" },
  { name: "Intermediate SQL", from: "HackerRank", year: "2022" },
];

export default function Experience() {
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
      { threshold: 0.03 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="work" ref={ref} className="section-gap" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-main">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 56, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
            Experience
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#edf0f7", lineHeight: 1.2 }}>
            Work history
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          <div className="timeline-line" />

          {ROLES.map((r) => (
            <div
              key={r.period}
              className="reveal"
              style={{ position: "relative", paddingLeft: 56, marginBottom: 48 }}
            >
              <div className="timeline-dot" />
              <div className="bento">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                  <div>
                    <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: "#edf0f7" }}>
                      {r.role}
                    </h3>
                    <div style={{ fontSize: 14, color: "#22d3ee", marginTop: 3 }}>{r.company}</div>
                  </div>
                  <div className="chip" style={{ fontSize: 11 }}>{r.period}</div>
                </div>

                <ul style={{ listStyle: "none", padding: 0 }}>
                  {r.highlights.map((h, i) => (
                    <li
                      key={i}
                      style={{
                        position: "relative",
                        paddingLeft: 18,
                        marginBottom: 8,
                        fontSize: 13,
                        color: "#6b7085",
                        lineHeight: 1.65,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 8,
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#2a2d3a",
                        }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal" style={{ marginTop: 80 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 32 }}>
            <IconAward size={20} color="#22d3ee" />
            <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: "#edf0f7" }}>
              Certifications
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 14,
              maxWidth: 760,
              margin: "0 auto",
            }}
            className="cert-grid"
          >
            {CERTS.map((c) => (
              <div
                key={c.name}
                className="bento"
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#c9cdd8" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "#4a4e5e", marginTop: 2 }}>{c.from}</div>
                </div>
                <div className="chip" style={{ fontSize: 10, padding: "4px 10px" }}>{c.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) { .cert-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
