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
            <span style={{ fontSize: 13, color: "#9ca3af" }}>5 min read</span>
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
            google just committed $40 billion to anthropic — and it&apos;s a bigger deal than the number
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
            when your biggest rival is also your biggest backer, something fundamental has shifted in ai
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
                May 1, 2026
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
            src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80"
            alt="AI compute infrastructure"
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
                name: "Microsoft Agent 365",
                url: "https://trustmarque.com/microsoft-365-e7-agent-365-whats-launching-1-may-and-what-it-means",
                desc: "Launched today (May 1) at $15/user/month — a dedicated control plane that treats AI agents like digital workers, complete with identities, policies, and guardrails. Think of it as HR + IT admin for your autonomous agents. Also bundled in the new $99/mo Microsoft 365 E7 'Frontier Suite' alongside Copilot and Entra.",
              },
              {
                num: "02",
                name: "GitHub Copilot CLI v1.0.39",
                url: "https://github.com/github/copilot-cli/releases",
                desc: "Shipped April 28 with a genuinely useful new trick: Ctrl+X→B lets you kick off a task and send it to the background so you keep your terminal free. Also adds /compact, /context, /usage, and /env slash commands, plus permission mode toggle. Small release, big QoL improvement for anyone running long agentic sessions.",
              },
              {
                num: "03",
                name: "GitHub Copilot in Visual Studio — April Update",
                url: "https://github.blog/changelog/2026-04-30-github-copilot-in-visual-studio-april-update/",
                desc: "Landed April 30 with cloud agent sessions launching directly from the IDE — no browser tab switching needed. The new Debugger agent is the standout: it validates fixes against live runtime behavior instead of just static analysis, so it actually confirms the bug is gone, not just that the code looks right.",
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

          {/* Stats Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginBottom: 48,
            }}
          >
            {[
              { v: "$350B", l: "Anthropic valuation (Google deal price)" },
              { v: "$65B", l: "total pledged capital (Google + Amazon combined)" },
              { v: "30×", l: "revenue growth in 15 months ($1B → $30B ARR)" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "#08091a",
                  borderRadius: 12,
                  padding: 20,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(20px, 4vw, 28px)",
                    fontWeight: 900,
                    color: "#22d3ee",
                    marginBottom: 8,
                  }}
                >
                  {stat.v}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#9ca3af",
                    lineHeight: 1.4,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.l}
                </div>
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
            On April 24, Google announced it will invest up to <strong>$40 billion in Anthropic</strong> — $10 billion in cash now at a $350 billion valuation, with another $30 billion tied to performance milestones. One week earlier, Amazon confirmed it was in for $5 billion upfront (up to $20 billion total). That puts Anthropic sitting on roughly <strong>$65 billion in pledged equity capital</strong> and 10 gigawatts of reserved AI training power. In a single month.
          </p>

          <p>
            The compute side is what really caught my attention. Google Cloud is delivering <strong>5 gigawatts of capacity over five years</strong> — via access to roughly one million seventh-generation Ironwood TPU chips. For reference, 5 GW is approximately the peak summer electricity load of the entire city of San Francisco. This isn&apos;t a product partnership or a licensing deal. This is Google handing Anthropic the physical infrastructure to train models that could compete with... Google.
          </p>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: 320,
              borderRadius: 12,
              overflow: "hidden",
              margin: "32px 0 8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&q=80"
              alt="cloud compute infrastructure"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", fontStyle: "italic", marginBottom: 32 }}>
            Cloud compute infrastructure · Unsplash
          </p>

          <p>
            The revenue numbers add context. Anthropic went from <strong>$1B ARR at the end of 2024</strong> to $9B at the end of 2025, and hit <strong>$30B ARR in April 2026</strong> — passing OpenAI&apos;s $25B for the first time. More than 1,000 enterprise clients now pay over $1 million annually, a figure that&apos;s more than doubled recently. Claude has apparently outsold Gemini in the enterprise segment, which makes Google&apos;s willingness to funnel compute to Anthropic both understandable (they&apos;re getting a stake in the winner) and genuinely strange (they&apos;re subsidizing their own competition).
          </p>

          <p>
            The thing nobody is saying loudly: Anthropic is the only frontier lab whose primary training stack runs on something <em>other</em> than NVIDIA GPUs. Their models train on Google TPU pods and Amazon Trainium. If that vertical compute stack works, the GPU monopoly story looks very different by 2027.
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
              &quot;What&apos;s wild is that Google is essentially acknowledging that their own Gemini models might not be enough — so they&apos;re buying into the lab most likely to beat them. This is less about financial returns and more about ensuring Google Cloud becomes the infrastructure layer regardless of which model wins. The question I keep coming back to: <strong>if Anthropic hits $100B ARR by 2027, does Google&apos;s investment look brilliant or does it look like they funded their own replacement?</strong>&quot;
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
              <strong style={{ color: "#111827" }}>Akshat 🤝🏻</strong>
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
