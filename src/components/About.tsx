import {
  Code,
  Zap,
  Layout,
  GitBranch,
  CheckCircle,
  Award,
  GraduationCap,
  BookOpen,
  Heart,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const iconMap = [Layout, Zap, Code, GitBranch];

  return (
    <section id="tentang" className="py-20 md:py-28 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Profil & Latar Belakang</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Mengenal Muatta Muhariq
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {portfolioData.about.summary}
          </p>
        </div>

        {/* Education Highlight Card */}
        <div id="pendidikan" className="mb-14 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                    {portfolioData.education.period}
                  </span>
                  <span className="text-xs text-slate-400">
                    {portfolioData.education.location}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {portfolioData.education.institution}
                </h3>
                <p className="text-sm font-medium text-indigo-300 mt-0.5">
                  {portfolioData.education.degree}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="text-slate-400 font-medium">Mata Kuliah Utama:</span>
                  {portfolioData.education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center min-w-[140px]">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Indeks Prestasi Kumulatif
              </div>
              <div className="text-3xl font-black text-indigo-400 mt-1">
                {portfolioData.education.gpa}
              </div>
              <div className="text-[11px] text-emerald-400 font-medium mt-1">
                Predikat Sangat Memuaskan
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars / Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {portfolioData.about.highlights.map((item, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div
                key={item.title}
                className="relative group p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interests & Hobbies from CV */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-rose-400" />
            <h3 className="text-lg font-bold text-white">
              Minat & Karakter Personal (Hobbies & Interests)
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.about.hobbies.map((hobby) => (
              <div
                key={hobby.category}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80"
              >
                <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                  {hobby.category}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {hobby.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
