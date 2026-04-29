"use client";

import { useEffect, useRef } from "react";

/**
 * Stack section — replaces Skills.
 * Uses grouped chip/tag clusters instead of bar graphs.
 */

const STACK = [
  {
    category: "Agentic & GenAI",
    color: "#0891b2",
    tools: ["Google ADK", "LangGraph", "LangChain", "RAG Architecture", "Prompt Engineering", "Agent Suite"],
  },
  {
    category: "Large Language Models",
    color: "#2563eb",
    tools: ["OpenAI", "Azure OpenAI", "Gemini", "Gemma", "Llama", "Mistral", "Vanna AI"],
  },
  {
    category: "ML & Data Science",
    color: "#9f7aea",
    tools: ["Python", "TensorFlow", "Scikit-Learn", "Hugging Face", "NumPy", "Pandas", "SciPy", "Statsmodel", "NLP"],
  },
  {
    category: "Cloud & DevOps",
    color: "#34d399",
    tools: ["GCP", "Vertex AI", "Cloud Run", "Azure Functions", "AWS S3", "AWS RDS", "Docker", "Terraform", "Apigee"],
  },
  {
    category: "Databases & Vectors",
    color: "#f59e0b",
    tools: ["Qdrant", "ChromaDB", "MongoDB Atlas", "PostgreSQL", "MySQL", "Cosmos DB", "AlloyDB", "NoSQL"],
  },
  {
    category: "APIs & Frameworks",
    color: "#ec4899",
    tools: ["FastAPI", "Django", "Next.js", "Streamlit", "Dialogflow CX", "Infobip CPaaS"],
  },
  {
    category: "Fine-Tuning & Optimization",
    color: "#06b6d4",
    tools: ["LoRA", "PEFT", "Prompt Tuning", "Model Quantization", "Fast Embedding"],
  },
  {
    category: "Evaluation",
    color: "#8b5cf6",
    tools: ["ROUGE", "BLEU", "LLM-as-Judge", "Tool Trajectory", "Precision/Recall"],
  },
];

export default function Stack() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".reveal").forEach((el, i) =>
            setTimeout(() => el.classList.add("visible"), i * 80)
          );
        }
      }),
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stack" ref={ref} className="section-gap" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-main">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 56, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#0891b2", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
            Tech Stack
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#111827", lineHeight: 1.2, marginBottom: 14 }}>
            Tools & technologies
          </h2>
          <p style={{ fontSize: 15, color: "#9ca3af", maxWidth: 420, margin: "0 auto" }}>
            The stack I use to build, deploy, and evaluate AI systems.
          </p>
        </div>

        {/* Stack Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
          className="stack-grid"
        >
          {STACK.map((group) => (
            <div key={group.category} className="reveal bento">
              {/* Category Label */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: group.color,
                    flexShrink: 0,
                  }}
                />
                <span className="font-display" style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>
                  {group.category}
                </span>
              </div>

              {/* Tool Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="chip"
                    style={{
                      borderColor: `${group.color}18`,
                      color: "#6b7280",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) { .stack-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
