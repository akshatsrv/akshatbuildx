"use client";

import Link from "next/link";
import Image from "next/image";

export default function BlogPost() {
  return (
    <main
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #e5e7eb",
          padding: "16px 0",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            <Image
              src="/abx-logo.png"
              alt="ABX"
              width={32}
              height={32}
              style={{ borderRadius: 8 }}
            />
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#111827",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Akshat Build{" "}
              <span style={{ color: "#0891b2" }}>X</span>
            </span>
          </Link>
          <Link
            href="/blog/"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#6b7280",
              textDecoration: "none",
              padding: "8px 20px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
            }}
          >
            ← All Posts
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <header style={{ paddingTop: 60, paddingBottom: 40 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#0891b2",
                background: "#f0fdfa",
                padding: "5px 12px",
                borderRadius: 4,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Industry Analysis
            </span>
            <span style={{ fontSize: 13, color: "#9ca3af" }}>6 min read</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.15,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            OpenAI just fired its most important client — kinda
          </h1>

          <p
            style={{
              fontSize: 20,
              color: "#6b7280",
              lineHeight: 1.5,
              fontStyle: "italic",
              marginBottom: 32,
            }}
          >
            Microsoft&apos;s exclusive deal is dead. Here&apos;s what that
            actually means if you&apos;re building with AI.
          </p>

          {/* Author */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingBottom: 32,
              borderBottom: "1px solid #f3f4f6",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#0891b2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
                fontWeight: 800,
                color: "#fff",
              }}
            >
              A
            </div>
            <div>
              <div
                style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}
              >
                Akshat Shrivastava
              </div>
              <div style={{ fontSize: 13, color: "#9ca3af" }}>
                Apr 29, 2026
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(240px, 40vw, 420px)",
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 48,
            border: "1px solid #e5e7eb",
          }}
        >
          <Image
            src="/blog-featured.jpg"
            alt="OpenAI and Microsoft"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Article Body */}
        <div className="article-body">
          {/* DevTools of the Week */}
          <div
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: 16,
              padding: "clamp(24px, 4vw, 40px)",
              marginBottom: 48,
            }}
          >
            <h3
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#0891b2",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 28,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              DevTools of the Week
            </h3>

            {[
              {
                num: "01",
                name: "Cursor 3",
                url: "https://cursor.com/blog/cursor-3",
                desc: "The biggest redesign since they forked VS Code. Cursor 3 replaces the Composer pane with a full Agents Window where you can run multiple AI agents simultaneously across local, worktree, SSH, and cloud environments. The local-to-cloud handoff is the headline feature — start a session on your machine, slide it to the cloud while you're offline, and pick it back up later.",
              },
              {
                num: "02",
                name: "OpenAI Codex App (April Update)",
                url: "https://openai.com/codex/",
                desc: "The April 16 update turned Codex into something closer to a background employee than a code generator. Multiple agents can now run in parallel on your Mac with their own cursors — not interfering with your active work — and Codex can schedule tasks to wake up and continue across days.",
              },
              {
                num: "03",
                name: "DeepSeek V4",
                url: "https://deepseek.com",
                desc: "Dropped April 24 and reset the price floor to $0.14 per million tokens. It doesn't beat GPT-5.5 or Claude Opus 4.7 on SWE-bench Verified, but for high-volume, lower-stakes workloads the price delta is genuinely hard to ignore.",
              },
            ].map((tool, idx) => (
              <div
                key={tool.num}
                style={{
                  borderBottom:
                    idx < 2 ? "1px solid #e5e7eb" : "none",
                  paddingBottom: idx < 2 ? 24 : 0,
                  marginBottom: idx < 2 ? 24 : 0,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#d1d5db",
                    marginBottom: 6,
                  }}
                >
                  {tool.num}
                </div>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener"
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#111827",
                    textDecoration: "none",
                    display: "inline-block",
                    marginBottom: 8,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {tool.name}
                </a>
                <p
                  style={{
                    fontSize: 15,
                    color: "#6b7280",
                    lineHeight: 1.7,
                  }}
                >
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>

          {/* The Story */}
          <h2
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: "#111827",
              marginBottom: 24,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            The Story
          </h2>

          <p>
            On April 27, Microsoft and OpenAI announced a restructured deal
            that ends OpenAI&apos;s exclusivity with Azure. Under the original
            arrangement, OpenAI was locked to Microsoft&apos;s cloud — Azure
            had right of first refusal on everything, and Microsoft held
            exclusive rights to OpenAI&apos;s IP. That&apos;s done.{" "}
            <strong>
              OpenAI can now sell to any cloud provider — AWS, Google Cloud,
              whoever.
            </strong>{" "}
            The license Microsoft holds continues through 2032, but it&apos;s
            no longer exclusive.
          </p>

          <p>
            The timing isn&apos;t accidental. The Financial Times had reported
            that Microsoft was weighing legal action against OpenAI and Amazon
            over a $50 billion cloud arrangement — OpenAI had committed to AWS
            in a way Microsoft viewed as a breach of the original exclusivity
            terms. The new deal forecloses that lawsuit. Both sides walk away
            with what they actually needed: OpenAI gets the freedom to sell to
            any cloud, Microsoft gets a guaranteed license through 2032 and
            retains &quot;primary cloud partner&quot; status.
          </p>

          <p>
            The detail getting the least attention is the{" "}
            <strong style={{ color: "#0891b2" }}>AGI clause removal</strong>.
            In the original deal, there was a provision about what happens if
            OpenAI &quot;reaches AGI&quot; — Microsoft would have some
            mechanism to weigh in. That clause is gone entirely. Microsoft no
            longer has any stake or say in how OpenAI defines or declares
            artificial general intelligence. It signals something real: OpenAI
            is operating increasingly as an independent entity.
          </p>

          <p>
            For builders using OpenAI&apos;s API, the practical implication
            plays out over the next 12–18 months. Right now, if you&apos;re on
            AWS or GCP, you&apos;re either going through Azure OpenAI Service
            or directly to OpenAI&apos;s API endpoints. The new deal means AWS
            and Google Cloud can now legitimately compete to host
            OpenAI&apos;s products — which historically means better pricing,
            better SLAs, and your AI stack and your infra stack can finally
            live in the same cloud.
          </p>

          {/* My Take */}
          <div
            style={{
              background: "#f0fdfa",
              borderLeft: "4px solid #0891b2",
              borderRadius: "0 12px 12px 0",
              padding: "clamp(24px, 4vw, 36px)",
              margin: "48px 0",
            }}
          >
            <h3
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#0891b2",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 14,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              My Take
            </h3>
            <p
              style={{
                fontSize: 17,
                color: "#374151",
                lineHeight: 1.7,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              &quot;The original Microsoft-OpenAI deal was described as a
              partnership, but it functioned more like a lifeline that came
              with structural strings. OpenAI needed the $13 billion and the
              compute; Microsoft needed the model access before Google could
              consolidate its lead. That dynamic is over — OpenAI raised $122
              billion from other sources and doesn&apos;t need those strings
              anymore. Microsoft isn&apos;t the loser here either, but the
              narrative shifted on April 27. If you&apos;re an enterprise team
              that&apos;s been defaulting to Azure for OpenAI access,
              it&apos;s worth asking: does that default still make sense in a
              multi-cloud world, or is it just inertia?&quot;
            </p>
          </div>

          {/* Sign off */}
          <div
            style={{
              borderTop: "1px solid #f3f4f6",
              paddingTop: 32,
              marginTop: 48,
              marginBottom: 60,
            }}
          >
            <p style={{ fontSize: 17, color: "#6b7280" }}>
              Until next time,{" "}
              <strong style={{ color: "#111827" }}>Akshat</strong>
            </p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer
        style={{
          background: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 13, color: "#9ca3af" }}>
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "#374151", fontWeight: 600 }}>
            Akshat BuildX
          </span>{" "}
          · Crafted with precision
        </p>
      </footer>

      <style jsx>{`
        .article-body p {
          font-size: 17px;
          line-height: 1.8;
          color: #374151;
          margin-bottom: 24px;
        }
        .article-body strong {
          color: #111827;
          font-weight: 700;
        }

        @media (max-width: 640px) {
          .article-body p {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}
