import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muatta Muhariq | Software Engineer & Informatics Graduate",
  description:
    "Portofolio profesional Muatta Muhariq - Fresh Graduate Informatika Universitas Syiah Kuala (IPK 3.61/4.00). Berpengalaman di Web Development (React, TypeScript, Laravel), Mobile Development (Kotlin), dan DevOps (Docker, CI/CD).",
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
