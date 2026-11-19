"use client";

import { useState } from "react";
import Image from "next/image";
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
  User,
  Camera,
  GraduationCap,
  Award,
  Briefcase,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [heroTab, setHeroTab] = useState<"profile" | "code">("profile");
  const [photoVariant, setPhotoVariant] = useState<"fullBody" | "closeUp">("fullBody");
  const [imageError, setImageError] = useState(false);

  const activePhoto =
    photoVariant === "fullBody"
      ? portfolioData.personal.avatarUrl
      : (portfolioData.personal.avatarCloseUpUrl || portfolioData.personal.avatarUrl);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows & Glassmorphic Backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Large Glowing Orbs for Frosted Glass Reflection */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-pink-600/15 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/3 left-10 w-[420px] h-[420px] bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[130px] animate-float" />

        {/* Subtle Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-indigo-950/30">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" style={{ animationDuration: "8s" }} />
              <span>Halo! Saya {portfolioData.personal.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-slate-300 font-normal">Informatika USK (IPK {portfolioData.personal.stats.gpa})</span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Membangun Solusi Rekayasa{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                Web & Mobile
              </span>{" "}
              yang Teruji & Skalabel.
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {portfolioData.personal.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#proyek"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-indigo-600/35 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#kontak"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl glass-card text-slate-200 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>Mulai Diskusi</span>
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}?subject=Permintaan%20CV%20-%20Muatta%20Muhariq`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl glass-card text-slate-300 hover:text-white text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                title="Kirim permintaan dokumen CV via email"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Minta CV</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl glass-pill text-slate-300 hover:text-white text-sm transition cursor-pointer"
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
            <div className="flex items-center gap-3 pt-4 border-t border-white/10 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1">
                Koneksi:
              </span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-indigo-500/50 transition cursor-pointer"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-indigo-500/50 transition cursor-pointer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-indigo-500/50 transition cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Glassmorphic Profile Card & Terminal Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl glass-panel p-2 shadow-2xl border border-white/10 backdrop-blur-2xl">
              {/* Glass Header Switcher */}
              <div className="flex items-center justify-between p-2 rounded-2xl bg-white/[0.03] border border-white/5 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/70 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setHeroTab("profile")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      heroTab === "profile"
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Foto Profil</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHeroTab("code")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      heroTab === "code"
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <TerminalIcon className="w-3.5 h-3.5" />
                    <span>developer.ts</span>
                  </button>
                </div>
              </div>

              {/* View 1: Formal Profile Photo Container */}
              {heroTab === "profile" ? (
                <div className="p-3 animate-in fade-in zoom-in-95 duration-200">
                  {/* Photo Frame Container */}
                  <div className="relative rounded-2xl overflow-hidden h-[440px] sm:h-[480px] w-full bg-gradient-to-br from-slate-900/90 via-slate-950 to-indigo-950/70 border border-white/10 shadow-inner group">
                    {/* Background glow behind silhouette/photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 pointer-events-none" />

                    {!imageError ? (
                      /* Actual Profile Image */
                      <img
                        src={activePhoto}
                        alt="Foto Formal Muatta Muhariq"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      /* Elegant Fallback Avatar Slot when image is not yet uploaded */
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative z-0">
                        {/* Avatar Silhouette with decorative ring */}
                        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 border-2 border-indigo-400/40 flex items-center justify-center mb-4 shadow-xl backdrop-blur-md relative">
                          <User className="w-14 h-14 text-indigo-300" />
                          <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-indigo-600 text-white shadow-md">
                            <Camera className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <h4 className="text-base font-bold text-white mb-1">
                          Slot Foto Formal
                        </h4>
                        <p className="text-xs text-slate-300 max-w-xs leading-relaxed mb-3">
                          Tampilkan foto formal Anda di sini. Cukup letakkan file foto di:
                        </p>
                        <div className="px-3 py-1.5 rounded-lg bg-slate-950/90 border border-indigo-500/30 text-indigo-300 font-mono text-[11px] shadow-sm">
                          public/MuattaMuhariq_FullBody.jpg
                        </div>
                      </div>
                    )}

                    {/* Floating Glass Chips Over Photo */}
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
                      <div className="px-3 py-1.5 rounded-xl glass-pill text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>{portfolioData.personal.nickname}</span>
                      </div>

                      {/* Photo Variant Toggle Pill */}
                      {portfolioData.personal.avatarCloseUpUrl && (
                        <div className="flex items-center p-0.5 rounded-xl glass-pill bg-slate-950/60 border border-white/10 text-[10px]">
                          <button
                            type="button"
                            onClick={() => setPhotoVariant("fullBody")}
                            className={`px-2 py-0.5 rounded-lg font-medium transition cursor-pointer ${
                              photoVariant === "fullBody"
                                ? "bg-indigo-600 text-white"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            Full
                          </button>
                          <button
                            type="button"
                            onClick={() => setPhotoVariant("closeUp")}
                            className={`px-2 py-0.5 rounded-lg font-medium transition cursor-pointer ${
                              photoVariant === "closeUp"
                                ? "bg-indigo-600 text-white"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            Close-Up
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 z-20">
                      <div className="px-3 py-1.5 rounded-xl glass-pill text-indigo-200 text-xs font-medium flex items-center gap-1.5 shadow-lg backdrop-blur-md animate-float">
                        <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                        <span>USK • IPK {portfolioData.personal.stats.gpa}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-3 right-3 z-20">
                      <div className="p-3.5 rounded-xl glass-panel border border-white/15 backdrop-blur-xl flex items-center justify-between shadow-2xl">
                        <div>
                          <div className="text-sm font-bold text-white flex items-center gap-1.5">
                            <span>{portfolioData.personal.name}</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          </div>
                          <div className="text-[11px] text-slate-300 mt-0.5">
                            Software Engineer & Informatics Graduate
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                            Available for Hire
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Highlights Under Photo */}
                  <div className="mt-3 p-3.5 rounded-2xl glass-card flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{portfolioData.personal.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Software Engineer & Designer</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* View 2: Developer Code Terminal */
                <div className="p-2 animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto space-y-2 rounded-2xl bg-slate-950/80 border border-white/5">
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
                      <span className="text-slate-400">focus:</span>{" "}
                      <span className="text-emerald-300">&quot;Full-Stack, Mobile &amp; UI/UX&quot;</span>,
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

                  <div className="mx-2 mt-3 p-3 rounded-xl glass-card flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-slate-300 font-medium">Banda Aceh • Siap Kerja Remote/On-site</span>
                    </div>
                    <span className="text-[11px] text-indigo-400 font-mono">GPA 3.61</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Minimalist Statistics Bar */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-6 rounded-3xl glass-card group">
            <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-indigo-400 transition-colors">
              {portfolioData.personal.stats.gpa}
              <span className="text-base font-normal text-slate-400"> / {portfolioData.personal.stats.gpaMax}</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1.5 font-medium">
              IPK Informatika USK
            </div>
          </div>

          <div className="p-6 rounded-3xl glass-card group">
            <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-indigo-400 transition-colors">
              {portfolioData.personal.stats.projectsCompleted}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1.5 font-medium">
              Proyek Web, Mobile &amp; Sistem
            </div>
          </div>

          <div className="p-6 rounded-3xl glass-card group">
            <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
              {portfolioData.personal.stats.satisfaction}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1.5 font-medium">
              Komitmen Kualitas &amp; Tepat Waktu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
