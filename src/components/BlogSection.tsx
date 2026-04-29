"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { IconArrowRight } from "./Icons";

export default function BlogSection() {
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
    <section id="blog" ref={ref} className="section-gap" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-main">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
            Latest Insights
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#edf0f7", lineHeight: 1.2 }}>
            From the Blog
          </h2>
        </div>

        {/* Featured Blog Card — Editorial Style */}
        <div className="reveal bento" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1.2fr",
            minHeight: 400
          }} className="blog-featured-grid">
            
            {/* Visual/Image Area */}
            <div style={{ 
              position: "relative",
              background: "#08090d",
              borderRight: "1px solid #14161f",
              overflow: "hidden"
            }}>
              <Image 
                src="/blog-featured.jpg" 
                alt="OpenAI and Microsoft Partnership" 
                fill
                style={{ objectFit: "cover", opacity: 0.8 }}
              />
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: "linear-gradient(90deg, transparent 60%, #0e1017 100%)" 
              }} />
              
              <div style={{ 
                position: "absolute", 
                bottom: 20, 
                left: 20, 
                fontSize: 10, 
                fontWeight: 700, 
                color: "#22d3ee", 
                textTransform: "uppercase", 
                letterSpacing: "0.2em",
                zIndex: 2,
                background: "rgba(8, 9, 13, 0.6)",
                padding: "4px 8px",
                borderRadius: 4,
                backdropFilter: "blur(4px)"
              }}>
                Editorial / Analysis
              </div>
            </div>

            {/* Content Area */}
            <div style={{ padding: "48px 56px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span className="chip chip-accent" style={{ fontSize: 10 }}>Industry News</span>
                <span style={{ fontSize: 12, color: "#5a5e6e" }}>6 min read</span>
              </div>

              <h3 className="font-display" style={{ 
                fontSize: "clamp(24px, 3vw, 32px)", 
                fontWeight: 800, 
                color: "#edf0f7", 
                lineHeight: 1.2,
                marginBottom: 16
              }}>
                OpenAI just fired its most important client — kinda
              </h3>

              <p style={{ fontSize: 16, color: "#8b90a3", lineHeight: 1.6, marginBottom: 32, flex: 1 }}>
                Microsoft&apos;s exclusive deal is dead. Here&apos;s what that actually means if you&apos;re building with AI. 
                The restructuring ends OpenAI&apos;s exclusivity with Azure, opening doors for AWS and Google Cloud.
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#111320", border: "1px solid #22d3ee", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#22d3ee" }}>A</div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#edf0f7" }}>Akshat Shrivastava</span>
                </div>
                
                <a href="/blog/openai-just-fired-its-client" className="btn-fill" style={{ padding: "12px 24px", fontSize: 13 }}>
                  Read Full Post
                  <IconArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .blog-featured-grid { grid-template-columns: 1fr !important; }
          .blog-featured-grid > div:first-child { border-right: none !important; border-bottom: 1px solid #14161f; height: 300px; }
          .blog-featured-grid > div:last-child { padding: 32px !important; }
        }
      `}</style>
    </section>
  );
}
