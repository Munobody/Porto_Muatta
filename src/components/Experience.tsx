"use client";

import { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  Users,
  ExternalLink,
  ShieldCheck,
  Award,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const [activeMode, setActiveMode] = useState<"experience" | "organization">("experience");

  return (
    <section id="pengalaman" className="py-20 md:py-28 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Rekam Jejak & Kontribusi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Pengalaman Kerja & Kepemimpinan
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Kombinasi pengalaman asisten laboratorium, program industri Bangkit by Google, serta kepemimpinan di himpunan mahasiswa.
          </p>

          {/* Toggle Button between Work Experience & Organizational Leadership */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveMode("experience")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeMode === "experience"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Pengajaran & Studi Industri</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveMode("organization")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeMode === "organization"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Kepemimpinan Organisasi</span>
            </button>
          </div>
        </div>

        {/* Experience Timeline */}
        {activeMode === "experience" ? (
          <div className="relative max-w-4xl mx-auto animate-in fade-in duration-300">
            {/* Vertical line indicator */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800 -translate-x-1/2" />

            <div className="space-y-12">
              {portfolioData.experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={exp.organization + exp.period}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline Node Point */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center z-10 shadow-lg shadow-indigo-500/30">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    </div>

                    {/* Spacer for opposite side on Desktop */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Content Card */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        isEven ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 shadow-xl shadow-black/20">
                        {/* Period & Type */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className="text-xs text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-800">
                            {exp.type}
                          </span>
                        </div>

                        {/* Role & Org */}
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <div className="text-sm text-indigo-400 font-medium mt-1 mb-2">
                          {exp.organization}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2 mb-4">
                          {exp.achievements.map((ach, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>

                        {/* Link to PBW documentation if present */}
                        {exp.link && (
                          <div className="mb-4">
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4"
                            >
                              <span>Lihat Modul Dokumentasi Daring PBW</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}

                        {/* Skills tags */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                          {exp.skills.map((s) => (
                            <span
                              key={s}
                              className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Organizational Leadership Cards */
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
            {portfolioData.organizations.map((org) => (
              <div
                key={org.period + org.role}
                className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/30 transition-all shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30 text-xs font-semibold">
                        Tahun {org.period}
                      </span>
                      <span className="text-xs text-slate-400">{org.institution}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {org.role}
                    </h3>
                    <div className="text-sm font-medium text-indigo-400">
                      {org.organization}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {org.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Tanggung Jawab & Kontribusi Kunci:
                  </div>
                  {org.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
