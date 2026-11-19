export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Web App" | "Mobile & ML" | "Enterprise" | "Open Source & Docs";
  description: string;
  longDescription: string;
  imageGradient: string;
  tags: string[];
  metricsBadge?: string;
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  link?: string;
}

export interface OrganizationItem {
  period: string;
  role: string;
  organization: string;
  institution: string;
  description: string;
  highlights: string[];
}

export interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export const portfolioData = {
  personal: {
    name: "Muatta Muhariq",
    nickname: "Atta",
    title: "Software Engineer & Informatics Graduate",
    tagline: "Bridging Modern Web & Mobile Engineering with Scalable Architecture & Human-Centered Design",
    bio: "Lulusan baru (Fresh Graduate) Informatika Universitas Syiah Kuala (IPK 3.61 / 4.00) dengan fondasi rekayasa perangkat lunak yang kokoh. Berpengalaman memimpin proyek Scrum di Bangkit Academy, mengajar DevOps & Web Programming sebagai Asisten Dosen, serta membangun aplikasi skala riil (React, TypeScript, Laravel, Kotlin, Tailwind).",
    availability: "Terbuka untuk Posisi Full-Time, Kontrak, atau Kolaborasi Proyek",
    location: "Langsa, Indonesia",
    email: "muhariqmuatta27@gmail.com",
    phone: "+62-851-7217-2897",
    whatsapp: "https://wa.me/6285172172897",
    linkedin: "https://linkedin.com/in/muatta-muhariq",
    github: "https://github.com/Munobody",
    avatarUrl: "/MuattaMuhariq_FullBody.jpg",
    avatarCloseUpUrl: "/MuattaMuhariq_CloseUp.jpg",
    stats: {
      gpa: "3.61",
      gpaMax: "4.00",
      projectsCompleted: "5+",
      satisfaction: "100%",
    },
  },

  education: {
    institution: "Universitas Syiah Kuala",
    degree: "Sarjana Komputer (S.Kom) - Informatika / Computer Science",
    period: "2021 – 2025",
    gpa: "3.61 / 4.00",
    location: "Banda Aceh, Aceh",
    status: "Fresh Graduate / Lulusan Informatika",
    coursework: [
      "Web Development",
      "Frontend Development",
      "DevOps & CI/CD",
      "Mobile App Development",
      "Software Engineering Principles",
      "Database Systems",
    ],
  },

  about: {
    summary:
      "Saya adalah Muatta Muhariq, fresh graduate Informatika dari Universitas Syiah Kuala dengan passion tinggi dalam pemrograman, antarmuka pengguna, dan prinsip rekayasa perangkat lunak modern. Terbiasa memadukan ketepatan logika backend, otomasi deployment (Docker, CI/CD), dan keindahan desain visual (Figma & Tailwind) untuk menghasilkan solusi teknologi yang berdampak nyata.",
    highlights: [
      {
        title: "User-Centered & Clean Code",
        desc: "Fokus pada arsitektur kode terstruktur rapi, performa responsif, dan pengalaman pengguna yang intuitif di berbagai perangkat.",
      },
      {
        title: "DevOps & Modern Workflow",
        desc: "Berpengalaman membawakan workshop Docker, GitHub Actions CI/CD pipelines, dan manajemen sprint Jira / Scrum.",
      },
      {
        title: "Full-Stack & Mobile Capability",
        desc: "Keahlian multi-platform mulai dari React.js, Next.js, Laravel, PHP, hingga Android Mobile dengan Kotlin & ML API.",
      },
      {
        title: "Proven Leadership & Mentorship",
        desc: "Pernah menjabat Wakil Ketua Himpunan Mahasiswa Informatika (2023 & 2024), Project Leader di Bangkit, serta Asisten Lab.",
      },
    ],
    hobbies: [
      {
        category: "Buku & Pemikiran",
        items: "Psikologi, Sosiologi, & Filsafat untuk memahami perilaku manusia dan dinamika masyarakat.",
      },
      {
        category: "Olahraga Aktif",
        items: "Sepak bola, Futsal, dan Bola Basket untuk menjaga stamina dan sportivitas tim.",
      },
      {
        category: "Kepemimpinan & Public Speaking",
        items: "Komunikasi publik, dinamika organisasi, dan pengembangan diri sebagai pemimpin masa depan.",
      },
      {
        category: "Desain & Kreativitas",
        items: "Eksplorasi visual dan editing menggunakan Figma, Adobe Photoshop, Canva, Affinity, dan CapCut.",
      },
    ],
  },

  skillCategories: [
    {
      category: "Bahasa Pemrograman",
      iconName: "Code",
      skills: [
        { name: "TypeScript & JavaScript", level: "Mahir", description: "ES6+, async/await, type safety, modular frontend & backend" },
        { name: "PHP", level: "Mahir", description: "OOP, MVC architecture, Laravel framework, WordPress custom theme" },
        { name: "Kotlin", level: "Menengah - Lanjutan", description: "Modern Android development, coroutines, clean architecture" },
        { name: "HTML5 & CSS3 / Modern CSS", level: "Mahir", description: "Semantic markup, responsive layouts, Tailwind CSS" },
        { name: "SQL", level: "Mahir", description: "Relational database schema, MySQL, complex queries & optimization" },
      ],
    },
    {
      category: "Frameworks & Web Tech",
      iconName: "Layers",
      skills: [
        { name: "React.js & Next.js", level: "Mahir", description: "SPA, SSR, component reusable architecture, responsive state management" },
        { name: "Laravel", level: "Mahir", description: "Routing, Eloquent ORM, Blade, authentication, REST API" },
        { name: "Tailwind CSS", level: "Mahir", description: "Rapid utility-first styling, design system, responsive UI" },
        { name: "D3.js Data Visualization", level: "Menengah", description: "Transforming government asset data into interactive charts and graphs" },
        { name: "Node.js & Express", level: "Menengah", description: "RESTful API development, middleware, JSON integration" },
      ],
    },
    {
      category: "DevOps & Database",
      iconName: "Server",
      skills: [
        { name: "Docker & Containerization", level: "Menengah - Lanjutan", description: "Dockerfile, compose, container isolation, dependency management" },
        { name: "GitHub Actions (CI/CD)", level: "Menengah", description: "Automated testing, building, and deployment workflows" },
        { name: "MySQL & MongoDB", level: "Mahir", description: "Relational and NoSQL data modeling, integrity, and indexing" },
        { name: "Linux Environment", level: "Mahir", description: "Command line, server management, deployment setups" },
      ],
    },
    {
      category: "Tools & Management",
      iconName: "Wrench",
      skills: [
        { name: "Git & GitHub", level: "Mahir", description: "Version control, branching strategy, PR reviews, team collaboration" },
        { name: "Scrum & Agile (Jira)", level: "Mahir", description: "Sprint planning, user stories, task delegation, daily stand-up leader" },
        { name: "Code Quality & Testing", level: "Mahir", description: "Best practices penulisan kode modular, refactoring, dan pengujian fungsional" },
        { name: "CI/CD & DevOps Pipeline", level: "Menengah", description: "Otomasi testing, build verification, dan environment deployment" },
      ],
    },
    {
      category: "Desain Grafis & Kreativitas",
      iconName: "Palette",
      skills: [
        { name: "Adobe Photoshop", level: "Mahir", description: "Manipulasi foto, digital imaging, pembuatan poster, banner promosi, dan aset grafis raster berkualitas tinggi" },
        { name: "Canva", level: "Mahir", description: "Desain cepat untuk media sosial, pembuatan slide presentasi (pitch deck), materi promosi, dan infografis menarik" },
        { name: "Affinity (Designer & Photo)", level: "Menengah - Mahir", description: "Grafik vektor presisi, ilustrasi digital, layouting profesional, dan pengolahan gambar non-destruktif" },
        { name: "CapCut", level: "Mahir", description: "Video editing kreatif, dynamic motion, sinkronisasi audio & beat, transisi halus, dan produksi video konten media sosial" },
        { name: "Figma", level: "Mahir", description: "Desain UI/UX interaktif, wireframing, high-fidelity prototyping, dan pembuatan design system web & mobile" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "sipema",
      title: "SIPEMA",
      subtitle: "Public Complaint System Universitas Syiah Kuala",
      category: "Web App",
      description: "Sistem pengaduan masyarakat kampus berbasis web responsif yang dilengkapi pelacakan status real-time dan hak akses terverifikasi.",
      longDescription: "Dikembangkan menggunakan React.js dan TypeScript untuk Universitas Syiah Kuala. Memungkinkan mahasiswa dan masyarakat mengajukan, mengkategorikan, serta memantau progres pengaduan ke unit terkait secara transparan.",
      imageGradient: "from-blue-700 via-indigo-700 to-slate-900",
      metricsBadge: "Official Campus Platform",
      tags: ["React.js", "TypeScript", "Tailwind CSS", "REST API", "RBAC", "UI/UX"],
      features: [
        "Desain antarmuka responsif dan alur penanganan laporan pengaduan yang transparan",
        "Role-Based Access Control (Masyarakat, Admin Unit, Stakeholder Kampus)",
        "Notifikasi dan pelacakan status pengaduan langsung secara transparan",
        "Komponen modular dengan validasi client-side ketat dan error handling",
      ],
      demoUrl: "https://sistem-pengaduan-masyarakat-ten.vercel.app/",
      githubUrl: "https://github.com/Munobody",
      featured: true,
    },
    {
      id: "si-ira",
      title: "SI-IRA BAPPEDA Aceh",
      subtitle: "Information System for Meeting & Asset Management",
      category: "Enterprise",
      description: "Sistem Informasi Rapat dan Manajemen Aset untuk BAPPEDA Aceh dengan fitur booking ruangan rapat real-time dan visualisasi data interaktif.",
      longDescription: "Membantu koordinasi penggunaan ruangan rapat tanpa tumpang tindih jadwal, menampilkan kapasitas & fasilitas ruangan, serta memvisualisasikan data aset pemerintah daerah secara interaktif.",
      imageGradient: "from-emerald-700 via-teal-800 to-slate-900",
      metricsBadge: "D3.js Data Viz & Laravel",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "D3.js", "GitHub"],
      features: [
        "Pengecekan ketersediaan ruangan dan pengajuan booking rapat tanpa konflik jadwal",
        "Modul visualisasi data interaktif menggunakan D3.js untuk mempermudah analisis aset daerah",
        "Antarmuka responsif yang menyajikan informasi kapasitas dan fasilitas ruangan",
        "Kolaborasi tim 3 orang menggunakan GitHub untuk manajemen versi kode",
      ],
      demoUrl: undefined,
      githubUrl: "https://github.com/Munobody/Bappeda-Aceh",
      featured: true,
    },
    {
      id: "lokatravel",
      title: "LokaTravel",
      subtitle: "Tourism App for Local Tourism and MSMEs",
      category: "Mobile & ML",
      description: "Aplikasi mobile Android berbasis Kotlin untuk rekomendasi destinasi wisata di Indonesia dan pemberdayaan UMKM lokal.",
      longDescription: "Proyek akhir capstone Bangkit Academy 2024. Bertindak sebagai Project Leader mengimplementasikan metodologi Scrum, integrasi model Machine Learning untuk peramalan & rekomendasi atraksi wisata.",
      imageGradient: "from-amber-600 via-orange-700 to-slate-900",
      metricsBadge: "Bangkit Capstone • Project Leader",
      tags: ["Kotlin", "Android", "Machine Learning API", "Scrum", "Figma", "MSME Support"],
      features: [
        "Integrasi model Machine Learning untuk rekomendasi wisata cerdas dan forecasting pengunjung",
        "Fitur katalog promosi UMKM lokal di sekitar destinasi wisata",
        "Antarmuka pengguna intuitif dan performa Android yang responsif dan efisien",
        "Dipimpin dengan framework Scrum: sprint planning, delegasi tugas, dan daily stand-up",
      ],
      demoUrl: undefined,
      githubUrl: "https://github.com/Munobody/LokaTravel-C241-PS475",
      featured: true,
    },
    {
      id: "sekilas-aceh",
      title: "Sekilas Aceh",
      subtitle: "News Portal Website with Custom Theme",
      category: "Web App",
      description: "Portal berita online independen dengan custom theme WordPress yang dibangun dari nol menggunakan PHP dan Tailwind CSS.",
      longDescription: "Menyajikan berita dan informasi seputar Aceh dengan optimasi performa loading yang sangat cepat, arsitektur SEO-friendly, dan tata kelola konten dinamis.",
      imageGradient: "from-rose-700 via-purple-800 to-slate-900",
      metricsBadge: "Custom WP Theme & SEO",
      tags: ["WordPress", "PHP", "Tailwind CSS", "Custom Theme", "SEO", "Web Performance"],
      features: [
        "Custom theme WordPress dibangun khusus dari nol (tanpa theme template bawaan)",
        "Tampilan antarmuka responsif dioptimalkan untuk mobile reader dengan Tailwind CSS",
        "Optimasi asset management dan struktur SEO untuk visibilitas mesin pencari",
        "Konfigurasi deployment dan stabilitas server portal berita",
      ],
      demoUrl: "https://sekilasaceh.com/",
      githubUrl: "https://github.com/Munobody",
      featured: false,
    },
    {
      id: "docs-pbw",
      title: "Dokumentasi Praktikum PBW",
      subtitle: "Online Documentation & Practical Guide",
      category: "Open Source & Docs",
      description: "Portal dokumentasi materi praktikum Pemrograman Berbasis Web (PBW) untuk mahasiswa Informatika Universitas Syiah Kuala.",
      longDescription: "Dibangun dan dikelola untuk mendampingi pembelajaran praktikum intensif dalam 16 pertemuan laboratorium mengenai dasar Linux, HTML, CSS, JavaScript, PHP, Laravel, Tailwind CSS, dan Git.",
      imageGradient: "from-cyan-700 via-blue-800 to-slate-900",
      metricsBadge: "16 Sesi Praktikum",
      tags: ["Documentation", "Web Programming", "Laravel", "Tailwind", "Git", "Education"],
      features: [
        "Materi terstruktur: Linux CLI, HTML/CSS, Modern JS, PHP, Laravel, Tailwind, Git",
        "Akses materi dan panduan studi kasus interaktif untuk praktikum Informatika",
        "Mendukung pembelajaran praktis dan proyek kolaboratif mahasiswa",
      ],
      demoUrl: "https://docs-pbw-inf-224.vercel.app/",
      githubUrl: "https://github.com/Munobody",
      featured: false,
    },
  ] as Project[],

  experiences: [
    {
      period: "Agu 2024 – Des 2024",
      role: "Teaching Assistant (Asisten Dosen)",
      organization: "Software Development and Operations (PPL / DevOps)",
      location: "Universitas Syiah Kuala, Banda Aceh",
      type: "Akademik / Pengajaran",
      description: "Membimbing mahasiswa dalam penerapan metodologi Agile, containerization aplikasi menggunakan Docker, dan otomasi pipeline CI/CD di GitHub Actions.",
      achievements: [
        "Mengimplementasikan Jira untuk pelatihan manajemen proyek agile (Scrum & Kanban), pembuatan user stories, sprint tracking, dan issue lifecycle.",
        "Menyelenggarakan hands-on workshop Docker: containerization aplikasi multi-tier, manajemen dependensi, dan environment reproducible.",
        "Memperkenalkan GitHub Actions untuk CI/CD: otomasi automated testing, build verification, dan deployment workflow.",
      ],
      skills: ["Docker", "GitHub Actions", "Jira", "Scrum", "CI/CD", "DevOps Principles"],
    },
    {
      period: "Feb 2024 – Jun 2024",
      role: "Mobile Development Cohort & Project Leader",
      organization: "Bangkit Academy (Google, GoTo, Tokopedia)",
      location: "Online / Nasional",
      type: "Studi Independen Bersertifikat",
      description: "Program intensif pengembangan aplikasi Android kelas dunia yang didukung oleh Google. Terpilih sebagai Project Leader pada proyek capstone LokaTravel.",
      achievements: [
        "Memimpin tim capstone multi-disiplin (Mobile & Machine Learning) menggunakan kerangka kerja Scrum (sprint planning, delegasi, dan daily stand-up).",
        "Mengembangkan aplikasi Android berbasis Kotlin dengan performa tinggi dan interaksi UI yang ramah pengguna.",
        "Mengintegrasikan model Machine Learning untuk fitur rekomendasi destinasi wisata cerdas dan forecasting pengunjung.",
      ],
      skills: ["Kotlin", "Android Studio", "Scrum / Agile", "Machine Learning Integration", "Figma", "Git"],
    },
    {
      period: "Feb 2024 – Mei 2024",
      role: "Teaching Assistant (Asisten Laboratorium)",
      organization: "Website-Based Programming Laboratory (PBW)",
      location: "Universitas Syiah Kuala, Banda Aceh",
      type: "Akademik / Laboratorium",
      description: "Mendampingi mahasiswa dalam 16 sesi praktikum intensif pemrograman web modern dan ekosistem Linux.",
      achievements: [
        "Membimbing mahasiswa mengenai fundamental Linux, HTML, CSS, JavaScript, PHP, Laravel, Tailwind CSS, dan version control Git.",
        "Merancang silabus modul praktikum, studi kasus proyek, serta metode pembelajaran interaktif dan diskusi solutif.",
        "Membangun dan mengelola website dokumentasi online resmi untuk mempermudah akses belajar: docs-pbw-inf-224.vercel.app.",
      ],
      skills: ["PHP", "Laravel", "JavaScript", "Tailwind CSS", "Linux", "Git", "Public Teaching"],
      link: "https://docs-pbw-inf-224.vercel.app/",
    },
  ] as ExperienceItem[],

  organizations: [
      {
      period: "2025",
      role: "Staff Ekonomi Kreatif",
      organization: "Komite Nasional Pemuda Indonesia (KNPI) Banda Aceh)",
      institution: "Kota Banda Aceh",
      description: "Memegang tanggung jawab strategis dalam operasional organisasi kepemudaan tentang ekonomi kreatif dan hubungan kolaborasi eksternal.",
      highlights: [
        "Mendampingi Ketua Himpunan dalam perumusan kebijakan penting dan bertindak sebagai pelaksana tugas saat Ketua berhalangan.",
        "Mengawasi jalannya divisi internal untuk memastikan seluruh program kerja akademik maupun kemahasiswaan terlaksana sesuai target.",
        "Membangun dan memelihara kemitraan eksternal serta melakukan monitoring dan evaluasi berkala.",
      ],
    },
    {
      period: "2024",
      role: "Vice Chairman I (Wakil Ketua I)",
      organization: "Himpunan Mahasiswa Informatika (HMDIF)",
      institution: "Universitas Syiah Kuala",
      description: "Memegang tanggung jawab strategis dalam operasional organisasi mahasiswa tingkat program studi dan hubungan kolaborasi eksternal.",
      highlights: [
        "Mendampingi Ketua Himpunan dalam perumusan kebijakan penting dan bertindak sebagai pelaksana tugas saat Ketua berhalangan.",
        "Mengawasi jalannya divisi internal untuk memastikan seluruh program kerja akademik maupun kemahasiswaan terlaksana sesuai target.",
        "Membangun dan memelihara kemitraan eksternal serta melakukan monitoring dan evaluasi berkala.",
      ],
    },
    {
      period: "2023",
      role: "Vice Chairman II (Wakil Ketua II)",
      organization: "Himpunan Mahasiswa Informatika (HMDIF)",
      institution: "Universitas Syiah Kuala",
      description: "Berperan aktif dalam supervisi program internal, penguatan jejaring mahasiswa, dan pembinaan kader organisasi.",
      highlights: [
        "Membantu kepemimpinan himpunan dalam koordinasi kegiatan harian dan advokasi kebutuhan mahasiswa.",
        "Mengawasi pelaksanaan program kerja divisi internal agar berjalan efektif dan efisien.",
        "Menjalin relasi strategis dengan organisasi kemahasiswaan lain dan alumni.",
      ],
    },
    {
      period: "2022",
      role: "Member of People Development",
      organization: "Badan Eksekutif Mahasiswa (BEM) FMIPA",
      institution: "Universitas Syiah Kuala",
      description: "Terlibat aktif dalam tata kelola mahasiswa, advokasi kesejahteraan mahasiswa, dan manajemen event skala fakultas.",
      highlights: [
        "Dipercaya sebagai Person in Charge (PIC) Turnamen Basket POM MIPA 2022 (perencanaan, koordinasi, dan eksekusi acara).",
        "Memimpin pelaksanaan Expo pada PIL MIPA XXIV sebagai Person in Charge pengarah kepanitiaan dan keterlibatan stakeholder.",
        "Menjadi penghubung antara mahasiswa dan pihak dekanat dalam penyampaian aspirasi.",
      ],
    },
  ] as OrganizationItem[],

  services: [
    {
      title: "Frontend Web Development",
      subtitle: "React.js • TypeScript • Next.js",
      description: "Membangun antarmuka web interaktif, cepat, dan modern dengan desain responsif berbasis Tailwind CSS.",
      icon: "Code2",
      deliverables: [
        "Implementasi pixel-perfect dari Figma ke kode nyata",
        "Desain antarmuka intuitif dan optimalisasi kenyamanan pengguna",
        "Komponen modular, type-safe (TypeScript), dan arsitektur rapi",
        "Optimasi Core Web Vitals & responsivitas multi-device",
      ],
    },
    {
      title: "Full-Stack Web & Enterprise System",
      subtitle: "Laravel • PHP • MySQL • D3.js",
      description: "Pengembangan sistem web end-to-end lengkap dengan autentikasi berjenjang (RBAC), database terstruktur, dan modul visualisasi data interaktif.",
      icon: "ServerCog",
      deliverables: [
        "Sistem manajemen data & dashboard administratif",
        "Visualisasi data interaktif (D3.js / Charts)",
        "Autentikasi role-based (Masyarakat, Admin, Pimpinan)",
        "Integrasi RESTful API & dokumentasi rapi",
      ],
    },
    {
      title: "DevOps & Deployment Automation",
      subtitle: "Docker • CI/CD • GitHub Actions",
      description: "Setup pipeline deployment otomatis dan isolasi container aplikasi agar siap berjalan stabil di server produksi tanpa kendala dependensi.",
      icon: "Gauge",
      deliverables: [
        "Containerization aplikasi dengan Docker & Docker Compose",
        "Automated build & test pipelines dengan GitHub Actions",
        "Konfigurasi deployment ke Vercel, VPS, atau Cloud",
        "Manajemen environment Linux & best practices keamanan",
      ],
    },
    {
      title: "UI/UX & Creative Graphic Design",
      subtitle: "Figma • Photoshop • Canva • Affinity • CapCut",
      description: "Merancang visual yang memikat, antarmuka pengguna intuitif, aset promosi digital, dan editing video kreatif untuk media sosial maupun produk digital.",
      icon: "Palette",
      deliverables: [
        "Desain UI/UX web & mobile berbasis Figma yang siap diimplementasi",
        "Aset visual, poster & manipulasi foto berkualitas tinggi via Photoshop & Affinity",
        "Materi presentasi, infografis & visual konten media sosial dengan Canva",
        "Video editing kreatif, reels & konten promosi dinamis menggunakan CapCut",
      ],
    },
    {
      title: "Agile Project Management & Scrum",
      subtitle: "Jira • Sprint Planning • Leadership",
      description: "Memimpin atau berkolaborasi dalam tim pengembangan software dengan kerangka kerja Scrum untuk memastikan delivery tepat waktu dan terukur.",
      icon: "Sparkles",
      deliverables: [
        "Sprint planning, delegasi tugas, dan user stories di Jira",
        "Fasilitasi daily stand-up dan sprint review",
        "Dokumentasi teknis yang jelas dan mudah dipahami",
        "Komunikasi transparan antara tim teknis dan stakeholders",
      ],
    },
  ],

  testimonials: [
    {
      name: "Koordinator Laboratorium Informatika",
      role: "Laboratorium PBW & PPL",
      company: "Universitas Syiah Kuala",
      avatar: "USK",
      content: "Muatta menunjukkan dedikasi luar biasa sebagai asisten dosen. Materinya terstruktur rapi, dokumentasi daringnya sangat membantu proses praktikum, dan pemahamannya terhadap Docker serta CI/CD sangat solid.",
    },
    {
      name: "Tim Kolaborator Capstone",
      role: "Bangkit Academy 2024",
      company: "LokaTravel Project",
      avatar: "LT",
      content: "Sebagai Project Leader, Atta mengelola sprint Scrum dengan sangat disiplin. Komunikasinya jelas, solutif saat menghadapi kendala teknis integrasi ML dan Android Kotlin, sehingga aplikasi kami selesai tepat waktu.",
    },
    {
      name: "Pengguna & Stakeholder SIPEMA",
      role: "Usability Testing Team",
      company: "Sistem Pengaduan Masyarakat",
      avatar: "SP",
      content: "Aplikasi SIPEMA karya Muatta terbukti sangat mudah digunakan dan responsif. Alur pengaduan transparan serta tampilan antarmukanya modern dan ramah pengguna.",
    },
  ],

  faqs: [
    {
      q: "Apa latar belakang pendidikan dan keahlian utama Muatta?",
      a: "Saya adalah lulusan baru (Fresh Graduate) S1 Informatika dari Universitas Syiah Kuala dengan IPK 3.61/4.00. Keahlian utama saya berfokus pada Web Development (React, Next.js, TypeScript, Laravel, Tailwind), DevOps (Docker, GitHub Actions), dan Android Development (Kotlin).",
    },
    {
      q: "Apakah Muatta terbuka untuk kesempatan kerja full-time atau freelance?",
      a: "Sangat terbuka! Saya siap untuk peran Frontend Developer, Backend / Full-Stack Engineer, Associate DevOps Engineer, maupun kontrak proyek software dan website profesional.",
    },
    {
      q: "Bagaimana pengalaman kepemimpinan dan kerja tim Muatta?",
      a: "Saya berpengalaman menjabat sebagai Wakil Ketua I dan II Himpunan Mahasiswa Informatika USK (2023 & 2024), Project Leader di Bangkit Academy dengan framework Scrum, serta memimpin kepanitiaan event kampus.",
    },
    {
      q: "Bagaimana cara tercepat untuk menghubungi Muatta?",
      a: "Cara tercepat adalah melalui WhatsApp di +62-851-7217-2897 atau melalui email di muhariqmuatta27@gmail.com. Saya aktif dan responsif dalam waktu kurang dari 24 jam.",
    },
  ],
};
