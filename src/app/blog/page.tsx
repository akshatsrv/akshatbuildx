"use client";

import Link from "next/link";
import Image from "next/image";

const POSTS = [
  {
    slug: "google-committed-40-billion-to-anthropic",
    title: "google just committed $40 billion to anthropic — and it's a bigger deal than the number",
    subtitle:
      "when your biggest rival is also your biggest backer, something fundamental has shifted in ai",
    date: "May 1, 2026",
    readTime: "5 min read",
    tag: "Industry Analysis",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
  },
  {
    slug: "openai-just-fired-its-client",
    title: "OpenAI just fired its most important client — kinda",
    subtitle:
      "Microsoft's exclusive deal is dead. Here's what that actually means if you're building with AI.",
    date: "Apr 29, 2026",
    readTime: "6 min read",
    tag: "Industry Analysis",
    image: "/blog-featured.jpg",
  },
];

export default function BlogIndex() {
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
            maxWidth: 1100,
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
            href="/"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#6b7280",
              textDecoration: "none",
              padding: "8px 20px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              transition: "all 0.2s",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Header */}
      <header
        style={{
          padding: "80px 24px 60px",
          textAlign: "center",
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: "#f0fdfa",
              color: "#0891b2",
              fontSize: 12,
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: 20,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 20,
            }}
          >
            Blog
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.15,
              marginBottom: 16,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            Latest Insights
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#6b7280",
              lineHeight: 1.6,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Deep dives into AI engineering, industry shifts, and the tools
            shaping how we build.
          </p>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "60px 24px 100px",
        }}
      >
        <div className="blog-grid">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <article className="blog-card">
                {/* Image */}
                <div className="blog-card-image">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Content */}
                <div className="blog-card-body">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#0891b2",
                        background: "#f0fdfa",
                        padding: "4px 10px",
                        borderRadius: 4,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {post.tag}
                    </span>
                    <span style={{ fontSize: 12, color: "#9ca3af" }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#111827",
                      lineHeight: 1.3,
                      marginBottom: 10,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {post.title}
                  </h2>

                  <p
                    style={{
                      fontSize: 15,
                      color: "#6b7280",
                      lineHeight: 1.6,
                      marginBottom: 20,
                    }}
                  >
                    {post.subtitle}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "auto",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: "#0891b2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 800,
                          color: "#fff",
                        }}
                      >
                        A
                      </div>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#374151",
                        }}
                      >
                        Akshat Shrivastava
                      </span>
                    </div>
                    <span style={{ fontSize: 13, color: "#9ca3af" }}>
                      {post.date}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

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
        .blog-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .blog-card {
          display: grid;
          grid-template-columns: 380px 1fr;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .blog-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
          border-color: #d1d5db;
        }
        .blog-card-image {
          position: relative;
          min-height: 260px;
        }
        .blog-card-body {
          padding: 32px 36px;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .blog-card {
            grid-template-columns: 1fr !important;
          }
          .blog-card-image {
            min-height: 200px;
          }
          .blog-card-body {
            padding: 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
