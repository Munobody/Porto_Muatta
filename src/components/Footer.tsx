"use client";

import { ArrowUp, Mail, MessageSquare, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950/80 border-t border-white/5 py-12 relative overflow-hidden backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-center">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-3">
            <a
              href="#"
              className="flex items-center gap-2 group text-white font-bold text-xl tracking-tight"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                <span className="font-mono text-sm font-bold">M</span>
              </div>
              <span className="group-hover:text-indigo-400 transition-colors">
                {portfolioData.personal.nickname}
                <span className="text-indigo-400">.dev</span>
              </span>
            </a>
            <p className="text-sm text-slate-300 max-w-md font-normal">
              {portfolioData.personal.tagline}. Dirancang dan dikembangkan dengan standar rekayasa perangkat lunak modern.
            </p>
          </div>

          {/* Social links & Back to Top */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl glass-card text-slate-300 hover:text-white hover:border-indigo-500/50 transition cursor-pointer"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl glass-card text-slate-300 hover:text-white hover:border-indigo-500/50 transition cursor-pointer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-3 rounded-2xl glass-card text-slate-300 hover:text-white hover:border-indigo-500/50 transition cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-2xl glass-card text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition cursor-pointer"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="ml-2 flex items-center gap-2 px-4 py-3 rounded-2xl glass-card text-indigo-300 hover:text-white text-xs font-semibold transition cursor-pointer hover:border-indigo-400/40"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 {portfolioData.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>menggunakan Next.js, React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
