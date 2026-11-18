import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muatta Muhariq | Software Engineer & Informatics Graduate",
  description:
    "Portofolio profesional Muatta Muhariq - Fresh Graduate Informatika Universitas Syiah Kuala (IPK 3.61/4.00). Spesialisasi Web Development (React, TypeScript, Laravel), Mobile Development (Kotlin), DevOps (Docker, CI/CD), dan UI/UX & Graphic Design (Photoshop, Figma, Canva, Affinity, CapCut).",
  keywords: [
    "Muatta Muhariq",
    "Muatta",
    "Atta",
    "Software Engineer",
    "Web Developer",
    "Informatika Universitas Syiah Kuala",
    "USK",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "Kotlin",
    "Tailwind CSS",
    "Docker",
    "DevOps",
    "Photoshop",
    "Figma",
    "Banda Aceh",
  ],
  authors: [{ name: "Muatta Muhariq", url: "https://github.com/Munobody" }],
  creator: "Muatta Muhariq",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://muatta.dev",
    title: "Muatta Muhariq | Software Engineer & Informatics Graduate",
    description:
      "Portofolio profesional Muatta Muhariq - Rekayasa perangkat lunak modern, UI/UX design, dan DevOps.",
    siteName: "Muatta Muhariq Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muatta Muhariq | Software Engineer",
    description:
      "Fresh Graduate Informatika Universitas Syiah Kuala (IPK 3.61). Web & Mobile Developer, DevOps, & Creative Designer.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-full flex flex-col font-sans antialiased bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
