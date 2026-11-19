"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  MessageSquare,
  MapPin,
  Check,
  Copy,
  ChevronDown,
  ChevronUp,
  Sparkles,
  PhoneCall,
  Clock,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web App Development",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 relative border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-3 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>Kontak & Diskusi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Mari Mewujudkan Ide Anda Bersama
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-normal">
            Punya proyek baru, pertanyaan teknis, atau ingin mendiskusikan peluang kerja sama? Pintu komunikasi saya selalu terbuka!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info & FAQ */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-9 rounded-3xl glass-panel space-y-6">
              <h3 className="text-xl font-bold text-white">
                Informasi Kontak Langsung
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Anda dapat mengirim pesan melalui formulir atau menghubungi saya secara langsung melalui saluran di bawah ini:
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl glass-card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl glass-pill text-indigo-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Email Utama</div>
                      <div className="text-sm font-medium text-white">{portfolioData.personal.email}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-white transition cursor-pointer"
                    title="Salin email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <a
                  href={portfolioData.personal.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl glass-card hover:border-emerald-500/40 transition group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl glass-pill text-emerald-400 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">WhatsApp & Telepon</div>
                      <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition">
                        {portfolioData.personal.phone}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                    Chat &rarr;
                  </span>
                </a>

                {/* Location & Timezone Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-card">
                  <div className="w-10 h-10 rounded-xl glass-pill text-purple-400 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Lokasi & Zona Waktu</div>
                    <div className="text-sm font-medium text-white">
                      {portfolioData.personal.location} (WIB / UTC+7)
                    </div>
                  </div>
                </div>

                {/* Response Time Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-card">
                  <div className="w-10 h-10 rounded-xl glass-pill text-amber-400 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Estimasi Respons</div>
                    <div className="text-sm font-medium text-white">
                      Dalam kurun waktu kurang dari 24 jam
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ Dropdown */}
            <div className="p-8 rounded-3xl glass-panel">
              <h4 className="text-base font-bold text-white mb-4">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h4>
              <div className="space-y-3">
                {portfolioData.faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="glass-card rounded-2xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-medium text-slate-200 hover:text-indigo-400 transition cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-indigo-400 shrink-0 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/15 rounded-full blur-[80px] pointer-events-none" />

              {submitted ? (
                <div className="text-center py-16 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full glass-pill text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Terima Kasih, Pesan Terkirim!
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Pesan Anda dari <span className="text-indigo-400 font-semibold">{formData.name}</span> telah diterima. Saya akan segera menghubungi Anda kembali di <span className="text-indigo-400 font-semibold">{formData.email}</span>.
                  </p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          service: "Web App Development",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl glass-card text-slate-200 text-sm font-medium transition cursor-pointer"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Kirim Pesan Langsung
                    </h3>
                    <p className="text-sm text-slate-300 mt-1 font-normal">
                      Silakan isi formulir di bawah ini dengan detail kebutuhan Anda.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Rian Pratama"
                        className="w-full px-4 py-3 rounded-2xl glass-input text-white placeholder-slate-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@perusahaan.com"
                        className="w-full px-4 py-3 rounded-2xl glass-input text-white placeholder-slate-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Layanan / Topik yang Diminati
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl glass-input text-white text-sm"
                    >
                      <option value="Web App Development" className="bg-slate-900 text-white">Web App Development (React / Next.js)</option>
                      <option value="UI/UX & Creative Graphic Design" className="bg-slate-900 text-white">UI/UX & Graphic Design (Photoshop / Figma / Canva)</option>
                      <option value="API & Backend Systems" className="bg-slate-900 text-white">Full-Stack & Backend Systems (Laravel / Node.js)</option>
                      <option value="DevOps & Deployment" className="bg-slate-900 text-white">DevOps & Deployment (Docker / CI/CD)</option>
                      <option value="Tawaran Pekerjaan Full-time" className="bg-slate-900 text-white">Peluang Kerja / Posisi Full-Time</option>
                      <option value="Lainnya" className="bg-slate-900 text-white">Lainnya / Pertanyaan Umum</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Pesan atau Detail Proyek *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ceritakan gambaran proyek Anda, timeline, atau ekspektasi yang diinginkan..."
                      className="w-full px-4 py-3 rounded-2xl glass-input text-white placeholder-slate-500 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-indigo-600/35 hover:shadow-indigo-500/50 flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Kirim Pesan Sekarang</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Privasi terjaga, informasi Anda tidak akan dibagikan kepada pihak mana pun.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

