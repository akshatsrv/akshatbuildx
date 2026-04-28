import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshat Shrivastava | Senior AI Engineer",
  description:
    "Senior AI Engineer specializing in Agentic AI, RAG pipelines, LLM orchestration, and production-grade multi-agent systems across GCP, Azure & AWS.",
  keywords: [
    "Akshat Shrivastava",
    "AI Engineer",
    "Agentic AI",
    "RAG",
    "LangGraph",
    "Google ADK",
    "LLM Orchestration",
  ],
  openGraph: {
    title: "Akshat Shrivastava | Senior AI Engineer",
    description:
      "Building enterprise-scale Agentic AI systems, RAG pipelines, and multi-agent orchestration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="mesh-bg" />
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
