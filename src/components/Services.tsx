import {
  Code2,
  Palette,
  ServerCog,
  Gauge,
  Check,
  Star,
  Quote,
  Sparkles,
} from "lucide-react";
import { portfolioData, ServiceItem } from "@/data/portfolioData";

export default function Services() {
  const iconComponents: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    ServerCog: <ServerCog className="w-6 h-6" />,
    Gauge: <Gauge className="w-6 h-6" />,
    Sparkles: <Sparkles className="w-6 h-6" />,
  };

  return (
    <section id="layanan" className="py-20 md:py-28 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Solusi & Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Bagaimana Saya Bisa Membantu Proyek Anda
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Dari perencanaan arsitektur hingga deployment produksi, saya siap mewujudkan ide Anda menjadi aplikasi web yang tangguh.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {portfolioData.services.map((service: ServiceItem) => (
            <div
              key={service.title}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 group shadow-xl shadow-black/20 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  {iconComponents[service.icon] || <Code2 className="w-6 h-6" />}
                </div>

                <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-1">
                  {service.subtitle}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Cakupan Kerja:
                  </div>
                  {service.deliverables.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs text-slate-400">Konsultasi gratis</span>
                <a
                  href="#kontak"
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition"
                >
                  Diskusikan kebutuhan &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Sub-section */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">
              Apa Kata Klien & Rekan Kerja
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Kepercayaan dan kepuasan partner adalah prioritas utama dalam setiap baris kode yang ditulis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center shadow-md">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                    <p className="text-xs text-slate-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

