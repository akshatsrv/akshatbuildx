"use client";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function BlogPost() {
  const ref = useRef<HTMLDivElement>(null);

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
    <main style={{ background: "#08090d", minHeight: "100vh" }}>
      <Navbar />
      
      <div ref={ref} className="container-main" style={{ paddingTop: 140, paddingBottom: 80 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          
          {/* Header Area */}
          <div className="reveal" style={{ marginBottom: 48 }}>
            <div style={{ 
              display: "inline-block", 
              background: "rgba(34, 211, 238, 0.1)", 
              color: "#22d3ee", 
              fontSize: 12, 
              fontWeight: 700, 
              padding: "6px 14px", 
              borderRadius: 6, 
              textTransform: "uppercase", 
              letterSpacing: "0.1em",
              marginBottom: 20
            }}>
              Analysis
            </div>
            <h1 className="font-display" style={{ 
              fontSize: "clamp(32px, 5vw, 56px)", 
              fontWeight: 800, 
              color: "#edf0f7", 
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-0.03em"
            }}>
              OpenAI just fired its most important client — kinda
            </h1>
            <p style={{ fontSize: 20, color: "#8b90a3", lineHeight: 1.5, fontStyle: "italic", fontWeight: 400 }}>
              Microsoft&apos;s exclusive deal is dead. Here&apos;s what that actually means if you&apos;re building with AI.
            </p>
          </div>

          {/* Author Meta */}
          <div className="reveal" style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 14, 
            paddingBottom: 40, 
            borderBottom: "1px solid #14161f",
            marginBottom: 48
          }}>
            <div style={{ 
              width: 44, 
              height: 44, 
              borderRadius: "50%", 
              background: "linear-gradient(135deg, #111320, #1e2030)",
              border: "1px solid #2a2d3a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 800,
              color: "#22d3ee"
            }}>
              A
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#edf0f7" }}>Akshat Shrivastava</div>
              <div style={{ fontSize: 13, color: "#5a5e6e" }}>Apr 29, 2026 • 6 min read</div>
            </div>
          </div>

          {/* Content Body */}
          <div className="reveal" style={{ fontSize: 17, color: "#c9cdd8", lineHeight: 1.8 }}>
            
            {/* DevTools Section */}
            <div style={{ marginBottom: 64 }}>
              <div style={{ 
                background: "#0e1017", 
                border: "1px solid #1a1d28", 
                borderRadius: 20, 
                padding: "32px 40px" 
              }}>
                <h3 className="font-display" style={{ 
                  fontSize: 13, 
                  fontWeight: 800, 
                  color: "#22d3ee", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.15em",
                  marginBottom: 24
                }}>
                  DevTools of the Week
                </h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                  {[
                    {
                      num: "01",
                      name: "Cursor 3",
                      url: "https://cursor.com/blog/cursor-3",
                      desc: "The biggest redesign since they forked VS Code. Cursor 3 replaces the Composer pane with a full Agents Window where you can run multiple AI agents simultaneously across local, worktree, SSH, and cloud environments. The local-to-cloud handoff is the headline feature — start a session on your machine, slide it to the cloud while you're offline, and pick it back up later."
                    },
                    {
                      num: "02",
                      name: "OpenAI Codex App (April Update)",
                      url: "https://openai.com/codex/",
                      desc: "The April 16 update turned Codex into something closer to a background employee than a code generator. Multiple agents can now run in parallel on your Mac with their own cursors — not interfering with your active work — and Codex can schedule tasks to wake up and continue across days."
                    },
                    {
                      num: "03",
                      name: "DeepSeek V4",
                      url: "https://deepseek.com",
                      desc: "Dropped April 24 and reset the price floor to $0.14 per million tokens. It doesn't beat GPT-5.5 or Claude Opus 4.7 on SWE-bench Verified, but for high-volume, lower-stakes workloads the price delta is genuinely hard to ignore. If you're doing any inference at scale this week, the math is worth running."
                    }
                  ].map((tool) => (
                    <div key={tool.num} style={{ borderBottom: "1px solid #14161f", paddingBottom: 32 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#4a4e5e", marginBottom: 6 }}>{tool.num}</div>
                      <a href={tool.url} target="_blank" rel="noopener" style={{ 
                        fontSize: 20, 
                        fontWeight: 800, 
                        color: "#edf0f7", 
                        textDecoration: "none",
                        display: "inline-block",
                        marginBottom: 10
                      }}>
                        {tool.name}
                      </a>
                      <p style={{ fontSize: 15, color: "#8b90a3", lineHeight: 1.65 }}>{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Story Section */}
            <div style={{ marginBottom: 64 }}>
              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 800, color: "#edf0f7", marginBottom: 24 }}>The Story</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <p>
                  On April 27, Microsoft and OpenAI announced a restructured deal that ends OpenAI&apos;s exclusivity with Azure. Under the original arrangement, OpenAI was locked to Microsoft&apos;s cloud — Azure had right of first refusal on everything, and Microsoft held exclusive rights to OpenAI&apos;s IP. That&apos;s done. <strong style={{ color: "#edf0f7" }}>OpenAI can now sell to any cloud provider — AWS, Google Cloud, whoever.</strong> The license Microsoft holds continues through 2032, but it&apos;s no longer exclusive.
                </p>
                <p>
                  The timing isn&apos;t accidental. The Financial Times had reported that Microsoft was weighing legal action against OpenAI and Amazon over a $50 billion cloud arrangement — OpenAI had committed to AWS in a way Microsoft viewed as a breach of the original exclusivity terms. The new deal forecloses that lawsuit. Both sides walk away with what they actually needed: OpenAI gets the freedom to sell to any cloud, Microsoft gets a guaranteed license through 2032 and retains &quot;primary cloud partner&quot; status.
                </p>
                <p>
                  The detail getting the least attention is the <strong style={{ color: "#22d3ee" }}>AGI clause removal</strong>. In the original deal, there was a provision about what happens if OpenAI &quot;reaches AGI&quot; — Microsoft would have some mechanism to weigh in. That clause is gone entirely. Microsoft no longer has any stake or say in how OpenAI defines or declares artificial general intelligence. It signals something real: OpenAI is operating increasingly as an independent entity.
                </p>
                <p>
                  For builders using OpenAI&apos;s API, the practical implication plays out over the next 12–18 months. Right now, if you&apos;re on AWS or GCP, you&apos;re either going through Azure OpenAI Service or directly to OpenAI&apos;s API endpoints. The new deal means AWS and Google Cloud can now legitimately compete to host OpenAI&apos;s products — which historically means better pricing, better SLAs, and your AI stack and your infra stack can finally live in the same cloud.
                </p>
              </div>
            </div>

            {/* My Take Section */}
            <div style={{ marginBottom: 80 }}>
              <div style={{ 
                background: "rgba(34, 211, 238, 0.03)", 
                borderLeft: "4px solid #22d3ee", 
                borderRadius: "0 12px 12px 0", 
                padding: "32px 36px" 
              }}>
                <h3 className="font-display" style={{ fontSize: 13, fontWeight: 800, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>
                  My Take
                </h3>
                <p style={{ fontSize: 18, color: "#c9cdd8", lineHeight: 1.7, fontStyle: "italic" }}>
                  &quot;The original Microsoft-OpenAI deal was described as a partnership, but it functioned more like a lifeline that came with structural strings. OpenAI needed the $13 billion and the compute; Microsoft needed the model access before Google could consolidate its lead. That dynamic is over — OpenAI raised $122 billion from other sources and doesn&apos;t need those strings anymore. Microsoft isn&apos;t the loser here either, but the narrative shifted on April 27. If you&apos;re an enterprise team that&apos;s been defaulting to Azure for OpenAI access, it&apos;s worth asking: does that default still make sense in a multi-cloud world, or is it just inertia?&quot;
                </p>
              </div>
            </div>

          </div>

          {/* Sign off */}
          <div className="reveal" style={{ borderTop: "1px solid #14161f", paddingTop: 40, marginBottom: 80 }}>
            <p style={{ fontSize: 17, color: "#8b90a3" }}>
              Until next time, <strong style={{ color: "#edf0f7" }}>Akshat 🤝🏻</strong>
            </p>
          </div>

        </div>
      </div>

      <Contact />
      
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}
