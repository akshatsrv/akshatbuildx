"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { IconArrowRight } from "./Icons";

export default function BlogSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
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
    <section
      id="blog"
      ref={ref}
      className="section-gap"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="container-main">
        <div
          className="reveal bento"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#22d3ee",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 10,
              }}
            >
              Latest Insights
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(24px, 3vw, 34px)",
                fontWeight: 800,
                color: "#edf0f7",
                lineHeight: 1.2,
                marginBottom: 8,
              }}
            >
              From the Blog
            </h2>
            <p style={{ fontSize: 14, color: "#6b7085", maxWidth: 420 }}>
              Deep dives into AI engineering, industry shifts, and the tools
              shaping how we build.
            </p>
          </div>

          <Link
            href="/blog/"
            className="btn-fill"
            style={{
              padding: "14px 28px",
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Read the Blog
            <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
