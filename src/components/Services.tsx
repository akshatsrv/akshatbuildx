"use client";

import { useEffect, useRef } from "react";
import { IconGlobe, IconMic, IconBrain, IconLayers } from "./Icons";

const SERVICES = [
  {
    icon: <IconGlobe size={24} color="#0891b2" />,
    title: "Brand Collaboration",
    desc: "Partner with me to amplify your AI brand through high-impact content, product demos, and technical storytelling. From webinars to deep-dive tutorials on Akshat Build X — let's create content that drives both conversation and conversion.",
    cta: "Partner Up",
    href: "#contact",
  },
  {
    icon: <IconMic size={24} color="#818cf8" />,
    title: "Invite to Speak",
    desc: "Keynotes, panels, and workshops on Agentic AI, RAG pipelines, LLM orchestration, and building production AI systems. Deep technical expertise delivered with clarity and real-world project insights.",
    cta: "Book a Talk",
    href: "#contact",
  },
  {
    icon: <IconBrain size={24} color="#34d399" />,
    title: "Mentorship Call",
    desc: "1:1 guidance on breaking into AI engineering, leveling up your GenAI career, or navigating the Agentic AI landscape. Actionable, personalized mentorship drawn from real enterprise experience.",
    cta: "Book a Call",
    href: "#contact",
  },
  {
    icon: <IconLayers size={24} color="#f472b6" />,
    title: "AI Projects & Consulting",
    desc: "End-to-end AI project delivery — from Agentic AI systems and RAG pipelines to voice bots and conversational commerce platforms. I help teams architect, build, and ship production-grade AI solutions.",
    cta: "Start a Project",
    href: "#contact",
  },
];

export default function Services() {
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
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="section-gap" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-main">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 56, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#0891b2", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
            Services
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#111827", lineHeight: 1.2, marginBottom: 14 }}>
            How we can work together
          </h2>
          <p style={{ fontSize: 15, color: "#9ca3af", maxWidth: 480, margin: "0 auto" }}>
            Whether it&apos;s a collaboration, a speaking gig, or building something from scratch.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
          className="services-grid"
        >
          {SERVICES.map((s) => (
            <div key={s.title} className="reveal bento" style={{ display: "flex", flexDirection: "column" }}>
              <div className="icon-box" style={{ marginBottom: 22 }}>
                {s.icon}
              </div>
              <h3 className="font-display" style={{ fontSize: 19, fontWeight: 700, color: "#111827", marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.75, marginBottom: 24, flex: 1 }}>
                {s.desc}
              </p>
              <a href={s.href} className="btn-outline" style={{ alignSelf: "flex-start", padding: "10px 22px", fontSize: 13 }}>
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
