import {
  Code,
  Zap,
  Layout,
  GitBranch,
  CheckCircle,
  Award,
  GraduationCap,
  Heart,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const iconMap = [Layout, Zap, Code, GitBranch];

  return (
    <section id="tentang" className="py-20 md:py-28 relative border-t border-white/5">
      {/* Ambient background light for glassmorphism */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>Profil & Latar Belakang</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Mengenal Muatta Muhariq
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {portfolioData.about.summary}
          </p>
        </div>

        {/* Education Highlight Card with Glassmorphism */}
        <div id="pendidikan" className="mb-14 p-8 sm:p-10 rounded-3xl glass-panel relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl glass-pill text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-400/30 shadow-lg">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full glass-pill text-indigo-300 border border-indigo-500/30">
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
                      className="px-2.5 py-1 rounded-lg glass-pill text-slate-300 text-[11px]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 p-5 rounded-2xl glass-card text-center min-w-[150px] border border-white/10">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Indeks Prestasi Kumulatif
              </div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 mt-1">
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
                className="relative group p-6 rounded-3xl glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl glass-pill text-indigo-400 mb-5 flex items-center justify-center group-hover:scale-110 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-300 border border-indigo-500/20 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interests & Hobbies in Frosted Glass Cards */}
        <div className="p-8 sm:p-9 rounded-3xl glass-panel relative overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-rose-400" />
            <h3 className="text-lg font-bold text-white">
              Minat & Karakter Personal (Hobbies & Interests)
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {portfolioData.about.hobbies.map((hobby) => (
              <div
                key={hobby.category}
                className="p-5 rounded-2xl glass-card border border-white/5"
              >
                <div className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-1.5">
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
