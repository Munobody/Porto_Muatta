"use client";

import { useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  MessageSquare,
  Sparkles,
  Terminal as TerminalIcon,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-pink-600/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px]" />
        
        {/* Subtle Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-inner">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" style={{ animationDuration: "8s" }} />
              <span>Halo! Saya {portfolioData.personal.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-slate-400">Informatika USK (IPK {portfolioData.personal.stats.gpa})</span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Membangun Solusi Rekayasa{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
                Web & Mobile
              </span>{" "}
              yang Teruji & Skalabel.
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {portfolioData.personal.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#proyek"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#kontak"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 font-medium text-sm transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>Mulai Diskusi</span>
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}?subject=Permintaan%20CV%20-%20Muatta%20Muhariq`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-sm transition"
                title="Kirim permintaan dokumen CV via email"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Minta CV</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 text-sm transition"
                title="Salin email ke clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Email Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Contact Pills */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-1">
                Koneksi:
              </span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-950/90 border border-slate-700/80 p-1 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 rounded-t-xl border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>developer.ts</span>
                </div>
                <div className="w-12 text-right">
                  <span className="text-[10px] text-emerald-400 font-mono">LIVE</span>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto space-y-2">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-indigo-300">softwareEngineer</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-emerald-300">&quot;{portfolioData.personal.name}&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span>{" "}
                  <span className="text-emerald-300">&quot;Informatika USK (IPK 3.61/4.00)&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">primaryStack:</span> [
                  <span className="text-amber-300">&quot;React.js&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;TypeScript&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;Laravel&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;Kotlin&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">designTools:</span> [
                  <span className="text-pink-300">&quot;Photoshop&quot;</span>,{" "}
                  <span className="text-pink-300">&quot;Canva&quot;</span>,{" "}
                  <span className="text-pink-300">&quot;Affinity&quot;</span>,{" "}
                  <span className="text-pink-300">&quot;CapCut&quot;</span>,{" "}
                  <span className="text-pink-300">&quot;Figma&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">devops:</span> [
                  <span className="text-amber-300">&quot;Docker&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;GitHub Actions&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;Linux&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">susUsabilityScore:</span>{" "}
                  <span className="text-emerald-400">&quot;84.20 (Grade A - Excellent)&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">leadership:</span>{" "}
                  <span className="text-emerald-300">&quot;Vice Chairman HMDIF & Bangkit Leader&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">availableForHire:</span>{" "}
                  <span className="text-sky-400">true</span>,
                </div>
                <div>{"};"}</div>
                
                <div className="pt-2 text-slate-500">
                  {"// Bangun aplikasi berkualitas & berdampak nyata"}
                </div>
                <div>
                  <span className="text-indigo-400">softwareEngineer</span>.
                  <span className="text-blue-400">deploySolution</span>();
                  <span className="inline-block w-2 h-4 bg-indigo-400 ml-1 animate-pulse align-middle" />
                </div>
              </div>

              {/* Card Footer Pill */}
              <div className="mx-3 mb-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-slate-300 font-medium">Banda Aceh • Siap Kerja Remote/On-site</span>
                </div>
                <span className="text-[11px] text-indigo-400 font-mono">GPA 3.61</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Counters & Statistics */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition group">
            <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-indigo-400 transition-colors">
              {portfolioData.personal.stats.gpa}
              <span className="text-base font-normal text-slate-400"> / {portfolioData.personal.stats.gpaMax}</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              IPK Informatika USK
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition group">
            <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
              {portfolioData.personal.stats.susScore}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Skor SUS (Grade A - Excellent)
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition group">
            <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-indigo-400 transition-colors">
              {portfolioData.personal.stats.studentsMentored}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Mahasiswa Dibimbing di Lab PBW
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition group">
            <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-indigo-400 transition-colors">
              {portfolioData.personal.stats.projectsCompleted}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Proyek Riil & Capstone Selesai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
