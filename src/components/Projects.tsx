"use client";

import { useState } from "react";
import {
  ExternalLink,
  FolderGit2,
  Sparkles,
  Layers,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("Semua");

  const categories = ["Semua", "Web App", "Enterprise", "Mobile & ML", "Open Source & Docs"];

  const filteredProjects =
    activeFilter === "Semua"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="proyek" className="py-20 md:py-28 relative border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-3 shadow-sm">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Portofolio Proyek</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Karya & Proyek Terpilih
            </h2>
            <p className="mt-3 text-slate-300 text-base max-w-xl font-normal">
              Eksplorasi aplikasi web nyata yang berfokus pada arsitektur scalable, pengalaman pengguna terbaik, dan performa tinggi.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/40 border border-indigo-400/40"
                    : "glass-card text-slate-300 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl glass-card overflow-hidden group transition-all duration-300"
            >
              {/* Project Preview Header / Graphical Banner */}
              <div
                className={`h-48 w-full bg-gradient-to-br ${project.imageGradient} p-5 flex flex-col justify-between relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" />
                
                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/90 text-slate-950 text-[11px] font-bold shadow-md">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Abstract Preview Mockup in Banner */}
                <div className="relative z-10 rounded-xl bg-slate-950/70 border border-white/10 p-3 shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-rose-400/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-400/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
                    <span className="text-[10px] text-slate-400 ml-2 font-mono truncate">
                      {project.id}.app
                    </span>
                  </div>
                  <div className="h-4 w-3/4 bg-white/10 rounded mb-1.5" />
                  <div className="h-3 w-1/2 bg-white/5 rounded" />
                </div>
              </div>

              {/* Project Details Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-xs font-semibold text-indigo-400 mb-2">
                    {project.subtitle}
                  </div>

                  {project.metricsBadge && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-950/90 text-indigo-300 border border-indigo-500/30 text-xs font-medium mb-3">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{project.metricsBadge}</span>
                    </div>
                  )}

                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights / Features */}
                  <div className="mt-4 space-y-2">
                    {project.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 text-indigo-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links / Footer CTA */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition cursor-pointer"
                    >
                      <span>Kunjungi Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="flex-1 text-center py-2 text-xs text-slate-500 font-medium">
                      Proyek Internal / Riset
                    </span>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition cursor-pointer"
                      title="Source code di GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
