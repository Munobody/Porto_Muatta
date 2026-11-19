"use client";

import { useState } from "react";
import {
  Code,
  Layers,
  Server,
  Database,
  Wrench,
  Cpu,
  Palette,
  Sparkles,
} from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categoryIcons: Record<string, React.ReactNode> = {
    "Bahasa Pemrograman": <Code className="w-5 h-5" />,
    "Frameworks & Web Tech": <Layers className="w-5 h-5" />,
    "DevOps & Database": <Server className="w-5 h-5" />,
    "Tools & Management": <Wrench className="w-5 h-5" />,
    "Desain Grafis & Kreativitas": <Palette className="w-5 h-5" />,
  };

  const currentCategory: SkillCategory = portfolioData.skillCategories[activeTab];

  return (
    <section id="keahlian" className="py-20 md:py-28 relative border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-3 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Keahlian & Spesialisasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Keterampilan Teknis & Tools
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-normal">
            Kombinasi bahasa pemrograman, framework modern, metodologi agile, dan perkakas desain yang terasah dari proyek nyata dan pengajaran laboratorium.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {portfolioData.skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              type="button"
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/35 scale-105 border border-indigo-400/40"
                  : "glass-card text-slate-300 hover:text-white hover:border-white/20"
              }`}
            >
              {categoryIcons[cat.category] || <Layers className="w-5 h-5" />}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
          {currentCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-3xl glass-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform" />
                    <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-lg glass-pill text-indigo-300 border border-indigo-500/20">
                    {skill.level}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Design Philosophy Note from CV */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">
                Kreativitas & Desain Visual:
              </div>
              <p className="text-sm text-slate-300 italic max-w-2xl leading-relaxed">
                &ldquo;I find pleasure in the process of designing, where I can combine creativity, precision, and strategic thinking to create something unique and meaningful.&rdquo;
              </p>
            </div>
          </div>
          {/* Creative software badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 shrink-0">
            {["Adobe Photoshop", "Canva", "Affinity", "CapCut", "Figma"].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs font-medium shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Quick summary badges banner */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-2.5 text-xs text-slate-400">
          <span className="text-slate-500 font-medium mr-2">Teknologi Utama:</span>
          {[
            "React.js",
            "TypeScript",
            "Laravel",
            "Kotlin",
            "Tailwind CSS",
            "Docker",
            "GitHub Actions",
            "Jira (Scrum)",
            "D3.js",
            "Adobe Photoshop",
            "Canva",
            "Affinity",
            "CapCut",
            "Figma",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

