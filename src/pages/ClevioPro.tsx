import React, { useState, useEffect } from 'react';
import ClevioLogo from '../components/ClevioLogo';

type Lang = 'id' | 'en';

interface ContentData {
  nav: {
    challenge: string;
    mission: string;
    outcomes: string;
    whyUs: string;
    curriculum: string;
    competencies: string;
    mentor: string;
    highlights: string;
    cta: string;
  };
  hero: {
    tag: string;
    h1Line1: string;
    h1Line2: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: { label: string; value: string }[];
  };
  mission: {
    label: string;
    quote: string;
    highlight: string;
    desc: string;
  };
  benefits: {
    label: string;
    title: string;
    items: {
      num: string;
      title: string;
      highlight: string;
      desc: string;
    }[];
  };
  whyUs: {
    label: string;
    title: string;
    items: {
      num: string;
      title: string;
      highlight: string;
      desc: string;
    }[];
  };
  aiStack: {
    label: string;
    title: string;
    subtitle: string;
    steps: {
      num: string;
      name: string;
      desc: string;
    }[];
  };
  curriculum: {
    label: string;
    title: string;
    stages: {
      stage: string;
      timing: string;
      title: string;
      focus: string;
      output: string;
      img: string;
    }[];
  };
  competencies: {
    label: string;
    title: string;
    items: {
      num: string;
      name: string;
      tag: string;
      desc: string;
    }[];
  };
  mentor: {
    label: string;
    name: string;
    title: string;
    bio: string;
    accolades: {
      title: string;
      desc: string;
    }[];
  };
  videos: {
    label: string;
    title: string;
    items: {
      id: string;
      title: string;
      category: string;
      duration: string;
      thumb: string;
    }[];
  };
  goal: {
    label: string;
    title: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    hotline: string;
    hours: string;
  };
  footer: {
    rights: string;
    contact: string;
    email: string;
    web: string;
  };
}

const CONTENT: Record<Lang, ContentData> = {
  id: {
    nav: {
      challenge: 'Tantangan',
      mission: 'Misi',
      outcomes: 'Hasil 3H',
      whyUs: 'Mengapa Kami',
      curriculum: 'Kurikulum',
      competencies: 'Kompetensi',
      mentor: 'Mentor',
      highlights: 'Dokumentasi',
      cta: 'Daftar Workshop',
    },
    hero: {
      tag: 'EXECUTIVE WORKSHOP · AI THINKING & INNOVATION',
      h1Line1: 'Bukan diganti AI.',
      h1Line2: 'Tapi Memimpin AI.',
      desc: 'Workshop 1 hari intensif bagi para pemimpin dan profesional untuk menguasai pemikiran strategis, mengorkestrasi asisten AI lintas divisi, dan melahirkan nilai bisnis nyata yang terukur.',
      ctaPrimary: 'Daftar Workshop',
      ctaSecondary: 'Konsultasi via WhatsApp',
      metrics: [
        { label: 'Format Sesi', value: '1 Hari Penuh (09:00 - 17:00)' },
        { label: 'Siklus Transformasi', value: 'H-14 Pra-Sesi s/d H+14 Implementasi' },
        { label: 'Metodologi', value: '100% Berbasis Studi Kasus Nyata' },
        { label: 'Hotline WhatsApp', value: '+62 822-2111-8860' },
      ],
    },
    mission: {
      label: 'Misi Kami',
      quote: 'Membekali para pemimpin dengan cara berpikir kritis, orkestrasi AI, dan validasi inovasi berkecepatan tinggi agar tidak sekadar menjadi pengguna pasif, melainkan',
      highlight: 'arsitek masa depan organisasi.',
      desc: 'AI hanya memproses pola dari masa lalu. Manusia memegang kendali atas empati, arah strategis, dan penciptaan nilai baru yang tidak tergantikan.',
    },
    benefits: {
      label: 'Dampak & Hasil Nyata',
      title: 'Hasil Mengintegrasikan AI Thinking ke Kepemimpinan Anda',
      items: [
        {
          num: '01',
          title: 'Hyper-Productive: Fokus Penuh pada Strategi',
          highlight: 'Memangkas beban teknis operasional',
          desc: 'Mengorkestrasi asisten AI lintas fungsi untuk menyelesaikan tugas rutin berulang, sehingga pemimpin dapat memusatkan energi pada keputusan strategis berdaya ungkit tinggi.',
        },
        {
          num: '02',
          title: 'Hyper-Iterative: Eksplorasi Solusi Berkecepatan Tinggi',
          highlight: 'Validasi ide dalam hitungan jam',
          desc: 'Mengubah gagasan kasar menjadi simulasi strategi dan prototipe kerja yang langsung diuji terhadap kebutuhan nyata secara terukur tanpa membuang waktu berminggu-minggu.',
        },
        {
          num: '03',
          title: 'Hyper-Impactful: Mengubah Peluang Menjadi Hasil Nyata',
          highlight: 'Inovasi yang berdampak finansial dan operasional',
          desc: 'Memadukan kepekaan empati manusia dengan ketajaman analisis AI untuk menghasilkan terobosan layanan serta efisiensi biaya yang terukur bagi pertumbuhan bisnis.',
        },
        {
          num: '04',
          title: 'Human-AI Co-Intelligence: Kolaborasi Cerdas Masa Depan',
          highlight: 'Mitra berpikir strategis lintas divisi',
          desc: 'Membangun sinergi di mana AI memperluas kapasitas analisis tim, sementara manusia menentukan konteks etis, penilaian bisnis, dan arah penciptaan nilai baru.',
        },
      ],
    },
    whyUs: {
      label: 'Mengapa Clevio AI Pro',
      title: 'Bukan Sekadar Pelatihan Prompting Biasa',
      items: [
        {
          num: '01',
          title: 'Transformasi Fundamental',
          highlight: 'Rekonstruksi alur kerja nyata',
          desc: 'Fokus pada arsitektur cara berpikir dan perancangan alur kerja strategis, bukan sekadar trik prompting singkat yang cepat usang.',
        },
        {
          num: '02',
          title: 'Praktik Nyata 100%',
          highlight: 'Tantangan aktual organisasi Anda',
          desc: 'Peserta membawa langsung masalah nyata dari perusahaan masing-masing dan pulang membawa rancangan solusi AI yang siap dieksekusi.',
        },
        {
          num: '03',
          title: 'Kontinuitas Pendampingan',
          highlight: 'H-14 s/d H+14 terstruktur',
          desc: 'Perjalanan menyeluruh mulai dari pemetaan kebutuhan pra-sesi, workshop intensif 1 hari, hingga review implementasi pasca-sesi bersama fasilitator.',
        },
      ],
    },
    aiStack: {
      label: 'Orkestrasi AI Eksekutif',
      title: 'Kerangka Kerja AI Thinking untuk Pemimpin',
      subtitle: 'Tiga langkah terarah untuk mengubah tantangan bisnis kompleks menjadi solusi AI siap kerja.',
      steps: [
        {
          num: 'Tahap 01',
          name: 'Problem Framing & Empathy Mapping',
          desc: 'Mendefinisikan akar masalah sebenarnya dari kacamata pelanggan dan pemangku kepentingan sebelum memilih teknologi.',
        },
        {
          num: 'Tahap 02',
          name: 'Multi-Model Synthesis & Strategy Formulation',
          desc: 'Mengorkestrasi model AI terdepan untuk mengeksplorasi alternatif strategi, membedah risiko, dan memvalidasi hipotesis.',
        },
        {
          num: 'Tahap 03',
          name: 'Rapid Prototyping & Decision Blueprint',
          desc: 'Merancang prototipe alur kerja interaktif dan rencana implementasi terukur yang siap diuji langsung di lapangan.',
        },
      ],
    },
    curriculum: {
      label: 'Struktur Program',
      title: 'Perjalanan Transformasi 3 Langkah',
      stages: [
        {
          stage: 'Tahap 01',
          timing: 'Pra-Sesi (H-14)',
          title: 'Diagnostic & Alignment',
          focus: 'Identifikasi tantangan utama dan pemetaan peluang efisiensi di unit kerja masing-masing.',
          output: 'Brief prioritas masalah dan data konteks kerja siap olah.',
          img: 'unsplash-challenge.jpg',
        },
        {
          stage: 'Tahap 02',
          timing: 'Hari-H (1 Hari Penuh · 09:00 - 17:00)',
          title: 'Intensive Workshop & Co-Creation',
          focus: 'Lokakarya tatap muka intensif membedah studi kasus nyata, simulasi AI Thinking, dan pembuatan prototipe kerja.',
          output: 'Prototipe asisten AI teruji dan cetak biru solusi siap pakai.',
          img: 'unsplash-gallery-1.jpg',
        },
        {
          stage: 'Tahap 03',
          timing: 'Pasca-Sesi (H+14)',
          title: 'Implementation & Review Clinic',
          focus: 'Uji coba solusi di lingkungan kerja sebenarnya, evaluasi adopsi tim, dan penyempurnaan alur kerja.',
          output: 'Laporan dampak nyata dan rekomendasi adopsi berkelanjutan.',
          img: 'unsplash-hero.jpg',
        },
      ],
    },
    competencies: {
      label: 'Kompetensi Inti',
      title: '5 Kapabilitas Strategis yang Dibangun',
      items: [
        {
          num: '01',
          name: 'Empati & Pemahaman Masalah',
          tag: 'Human Empathy',
          desc: 'Menemukan akar persoalan manusia yang layak diselesaikan sebelum menentukan instrumen teknologi.',
        },
        {
          num: '02',
          name: 'Berpikir Kritis & Framing',
          tag: 'Critical Framing',
          desc: 'Mengajukan pertanyaan tajam, menantang asumsi lama, dan menguji kualitas luaran AI secara objektif.',
        },
        {
          num: '03',
          name: 'Orkestrasi AI Lintas Fungsi',
          tag: 'AI Orchestration',
          desc: 'Memadukan berbagai agen dan model AI untuk memperluas daya analisis di bidang operasional, marketing, dan strategi.',
        },
        {
          num: '04',
          name: 'Eksperimen & Prototyping Cepat',
          tag: 'Rapid Prototyping',
          desc: 'Membangun dan menguji prototipe solusi kerja dalam hitungan jam untuk meminimalkan risiko bisnis.',
        },
        {
          num: '05',
          name: 'Kepemimpinan Penciptaan Nilai',
          tag: 'Value Creation',
          desc: 'Menerjemahkan kecanggihan teknologi menjadi pertumbuhan bisnis nyata, efisiensi biaya, dan kepemimpinan tim.',
        },
        {
          num: '06',
          name: 'Format Sesi In-House & Publik',
          tag: 'Program Delivery',
          desc: 'Tersedia dalam format kelas In-House eksklusif bagi korporasi maupun cohort publik eksekutif dengan kuota terbatas.',
        },
      ],
    },
    mentor: {
      label: 'Fasilitator Utama',
      name: 'Aranggi Soemardjan',
      title: 'Inovator AI Terapan, Pendiri Clevio & Coach Playground',
      bio: 'Praktisi inovasi dengan pengalaman lebih dari satu dekade mendampingi korporasi, pemimpin bisnis, dan talenta nasional mengadopsi teknologi berorientasi dampak manusia.',
      accolades: [
        {
          title: 'SOSOK Harian Kompas',
          desc: 'Diangkat dalam rubrik profil prestisius SOSOK Harian Kompas atas dedikasi membangun literasi kreator teknologi di Indonesia.',
        },
        {
          title: 'Anugerah Inovasi Ristekdikti',
          desc: 'Penghargaan nasional atas kontribusi metodologi pembelajaran berbasis pemecahan masalah dan proyek inovatif.',
        },
        {
          title: 'Harvard Seed Fellow',
          desc: 'Alumnus program inovasi sosial global, memadukan strategi kepemimpinan human-centered dengan akselerasi teknologi modern.',
        },
        {
          title: 'Pengembang Solusi AI Terapan',
          desc: 'Inisiator Agriana.ai dan berbagai ekosistem asisten pintar berbasis kecerdasan komputasi praktis.',
        },
      ],
    },
    videos: {
      label: 'Dokumentasi & Cuplikan',
      title: 'Melihat Lebih Dekat Pengalaman Workshop',
      items: [
        {
          id: 'p28s931M61c',
          title: 'Mengapa Pemimpin Perlu Menguasai AI Thinking, Bukan Sekadar Prompting',
          category: 'Executive Insight',
          duration: 'YouTube Shorts',
          thumb: 'video1-thumb.jpg',
        },
        {
          id: 'gR9A7eA4wP0',
          title: 'Suasana Kolaborasi, Eksperimen Cepat & Diskusi Strategis Sesi Clevio AI Pro',
          category: 'Session Highlights',
          duration: 'YouTube Shorts',
          thumb: 'video2-thumb.jpg',
        },
      ],
    },
    goal: {
      label: 'Langkah Berikutnya',
      title: 'Pimpin Transformasi AI Organisasi Anda Hari Ini',
      desc: 'Diskusikan kebutuhan tim Anda untuk penyelenggaraan workshop In-House eksklusif atau daftarkan diri pada sesi publik eksekutif berikutnya.',
      ctaPrimary: 'Daftar via WhatsApp',
      ctaSecondary: 'Konsultasikan Kebutuhan In-House',
      hotline: '+62 822-2111-8860',
      hours: 'Senin - Jumat · 09:00 - 18:00 WIB',
    },
    footer: {
      rights: '© 2026 Clevio AI Pro. Hak Cipta Dilindungi.',
      contact: 'WhatsApp: +62 822-2111-8860',
      email: 'clevioaipro@gmail.com',
      web: 'clev.io/pro',
    },
  },
  en: {
    nav: {
      challenge: 'Challenge',
      mission: 'Mission',
      outcomes: '3H Outcomes',
      whyUs: 'Why Us',
      curriculum: 'Curriculum',
      competencies: 'Capabilities',
      mentor: 'Facilitator',
      highlights: 'Highlights',
      cta: 'Register Workshop',
    },
    hero: {
      tag: 'EXECUTIVE WORKSHOP · AI THINKING & INNOVATION',
      h1Line1: 'Not replaced by AI.',
      h1Line2: 'Leading with AI.',
      desc: 'An intensive 1-day executive workshop for leaders and professionals to master strategic framing, orchestrate cross-functional AI assistants, and generate measurable organizational value.',
      ctaPrimary: 'Register Workshop',
      ctaSecondary: 'Inquire via WhatsApp',
      metrics: [
        { label: 'Format', value: '1 Full Day (09:00 - 17:00)' },
        { label: 'Transformation Cycle', value: 'D-14 Pre-Session to D+14 Implementation' },
        { label: 'Methodology', value: '100% Real-World Case Study Driven' },
        { label: 'WhatsApp Hotline', value: '+62 822-2111-8860' },
      ],
    },
    mission: {
      label: 'Our Mission',
      quote: 'Equipping leaders and professionals with critical thinking, AI orchestration, and rapid validation capabilities so they do not merely react to automation, but become',
      highlight: 'the architects of organizational value.',
      desc: 'AI processes past patterns. Humans command empathy, strategic direction, and the creation of unprecedented commercial and social value.',
    },
    benefits: {
      label: 'Real Outcomes',
      title: 'The Tangible Impact of Integrating AI Thinking into Leadership',
      items: [
        {
          num: '01',
          title: 'Hyper-Productive: Focus Entirely on High-Leverage Strategy',
          highlight: 'Eliminate repetitive operational drag',
          desc: 'Orchestrate cross-functional AI assistants to automate operational friction, liberating executive energy for critical high-stakes decision making.',
        },
        {
          num: '02',
          title: 'Hyper-Iterative: High-Velocity Solution Validation',
          highlight: 'Validate ideas in hours, not weeks',
          desc: 'Transform raw concepts into operational simulations and working prototypes tested directly against customer needs without wasting months.',
        },
        {
          num: '03',
          title: 'Hyper-Impactful: Convert Opportunities into Measurable Growth',
          highlight: 'Innovation with bottom-line impact',
          desc: 'Unite human empathy with computational power to launch service breakthroughs and sustainable cost efficiencies that drive enterprise value.',
        },
        {
          num: '04',
          title: 'Human-AI Co-Intelligence: The Next Era of Collaboration',
          highlight: 'Strategic thinking partners across divisions',
          desc: 'Create genuine synergy where AI amplifies analytical reach, while humans guide contextual ethics, strategic judgment, and value creation.',
        },
      ],
    },
    whyUs: {
      label: 'Why Clevio AI Pro',
      title: 'Far Beyond Generic Prompting Tutorials',
      items: [
        {
          num: '01',
          title: 'Fundamental Transformation',
          highlight: 'Real workflow restructuring',
          desc: 'Focus on strategic cognitive architecture and operational workflow redesign, rather than superficial prompt tricks that become obsolete.',
        },
        {
          num: '02',
          title: '100% Practical Execution',
          highlight: 'Your actual corporate challenges',
          desc: 'Participants bring real challenges from their organization and leave with tested AI-assisted blueprints ready for deployment.',
        },
        {
          num: '03',
          title: 'Sustained Mentorship',
          highlight: 'Structured D-14 to D+14 cycle',
          desc: 'A complete transformation journey: pre-session diagnostic alignment, 1-day intensive co-creation, and post-session adoption review.',
        },
      ],
    },
    aiStack: {
      label: 'Executive AI Orchestration',
      title: 'The AI Thinking Framework for Leaders',
      subtitle: 'Three structured steps to transform complex business challenges into validated AI-powered solutions.',
      steps: [
        {
          num: 'Stage 01',
          name: 'Problem Framing & Empathy Mapping',
          desc: 'Pinpoint the true human problem and core business bottleneck before selecting any technical instrument.',
        },
        {
          num: 'Stage 02',
          name: 'Multi-Model Synthesis & Strategy Formulation',
          desc: 'Orchestrate cutting-edge models to explore alternative paths, stress-test risks, and validate strategic hypotheses.',
        },
        {
          num: 'Stage 03',
          name: 'Rapid Prototyping & Decision Blueprint',
          desc: 'Build interactive workflow prototypes and an actionable roadmap ready for live organizational testing.',
        },
      ],
    },
    curriculum: {
      label: 'Program Architecture',
      title: 'A 3-Stage Transformation Journey',
      stages: [
        {
          stage: 'Stage 01',
          timing: 'Pre-Session (D-14)',
          title: 'Diagnostic & Alignment',
          focus: 'Assess workflow readiness, map operational friction points, and define quantifiable outcome targets.',
          output: 'Strategic problem brief and clean context datasets.',
          img: 'unsplash-challenge.jpg',
        },
        {
          stage: 'Stage 02',
          timing: 'Cohort Day (1 Full Day · 09:00 - 17:00)',
          title: 'Intensive Workshop & Co-Creation',
          focus: 'Interactive in-person workshop practicing live AI Thinking simulations, rapid prototyping, and critical validation.',
          output: 'Working AI assistant prototype and testable deployment blueprint.',
          img: 'unsplash-gallery-1.jpg',
        },
        {
          stage: 'Stage 03',
          timing: 'Post-Session (D+14)',
          title: 'Implementation & Review Clinic',
          focus: 'Deploy solutions in real workflows, evaluate team adoption, and refine processes with the facilitator.',
          output: 'Documented impact report and sustained scaling recommendations.',
          img: 'unsplash-hero.jpg',
        },
      ],
    },
    competencies: {
      label: 'Core Capabilities',
      title: '5 Strategic Competencies Mastered',
      items: [
        {
          num: '01',
          name: 'Empathy & Problem Discovery',
          tag: 'Human Empathy',
          desc: 'Uncovering the root human problems worth solving before committing capital and technology.',
        },
        {
          num: '02',
          name: 'Critical Thinking & Framing',
          tag: 'Critical Framing',
          desc: 'Asking incisive questions, dismantling legacy assumptions, and rigorously vetting AI outputs.',
        },
        {
          num: '03',
          name: 'Cross-Functional AI Orchestration',
          tag: 'AI Orchestration',
          desc: 'Harmonizing AI agents and models to multiply analytical power across operations, product, and marketing.',
        },
        {
          num: '04',
          name: 'Rapid Experimentation & Prototyping',
          tag: 'Rapid Prototyping',
          desc: 'Building and testing solution prototypes in hours to dramatically derisk corporate initiatives.',
        },
        {
          num: '05',
          name: 'Value Creation Leadership',
          tag: 'Value Creation',
          desc: 'Converting emerging technology into bottom-line business growth, cost efficiency, and organizational clarity.',
        },
        {
          num: '06',
          name: 'In-House & Executive Cohorts',
          tag: 'Program Delivery',
          desc: 'Available as tailored in-house corporate workshops or curated public executive masterclasses with limited seats.',
        },
      ],
    },
    mentor: {
      label: 'Lead Facilitator',
      name: 'Aranggi Soemardjan',
      title: 'Applied AI Innovator, Founder of Clevio & Coach Playground',
      bio: 'Innovation practitioner with over a decade guiding enterprise leadership, technology creators, and high-impact teams in human-centered AI adoption.',
      accolades: [
        {
          title: 'SOSOK Kompas Daily',
          desc: 'Profiled in Kompas Daily prestigious SOSOK column for pioneering technology creator literacy in Indonesia.',
        },
        {
          title: 'Ristekdikti Innovation Award',
          desc: 'National recognition for project-based learning methodologies addressing real-world socio-economic problems.',
        },
        {
          title: 'Harvard Seed Fellow',
          desc: 'Alumnus of the global social innovation initiative, combining human-centered design with cutting-edge technological acceleration.',
        },
        {
          title: 'Applied AI Ecosystem Pioneer',
          desc: 'Creator of Agriana.ai and various intelligent assistant systems engineered for measurable productivity impact.',
        },
      ],
    },
    videos: {
      label: 'Documentation & Highlights',
      title: 'Inside the Workshop Experience',
      items: [
        {
          id: 'p28s931M61c',
          title: 'Why Leaders Must Master AI Thinking Rather Than Mere Prompting',
          category: 'Executive Insight',
          duration: 'YouTube Shorts',
          thumb: 'video1-thumb.jpg',
        },
        {
          id: 'gR9A7eA4wP0',
          title: 'Collaborative Sprints, Rapid Prototyping & Strategic Debate at Clevio AI Pro',
          category: 'Session Highlights',
          duration: 'YouTube Shorts',
          thumb: 'video2-thumb.jpg',
        },
      ],
    },
    goal: {
      label: 'Take Action',
      title: 'Lead Your Organization AI Transformation Today',
      desc: 'Consult your team requirements for an exclusive in-house program or reserve seats for the upcoming executive public cohort.',
      ctaPrimary: 'Register via WhatsApp',
      ctaSecondary: 'Schedule In-House Discussion',
      hotline: '+62 822-2111-8860',
      hours: 'Monday - Friday · 09:00 - 18:00 WIB',
    },
    footer: {
      rights: '© 2026 Clevio AI Pro. All Rights Reserved.',
      contact: 'WhatsApp: +62 822-2111-8860',
      email: 'clevioaipro@gmail.com',
      web: 'clev.io/pro',
    },
  },
};

const WA_URL =
  'https://wa.me/6282221118860?text=Halo%20Tim%20Clevio%20AI%20Pro%2C%20saya%20tertarik%20mendaftar%20Workshop%20Executive%20AI%20Thinking%20%26%20Innovation.';

const ColorStop: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[#FF5522] font-inherit">{children}</span>
);

export default function ClevioPro() {
  const [lang, setLang] = useState<Lang>('id');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = CONTENT[lang];
  const baseUrl = import.meta.env.BASE_URL;
  const asset = (file: string) => `${baseUrl}clevio-pro/${file}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeVideo]);

  return (
    <div className="zeggo-theme bg-black text-white min-h-screen selection:bg-[#FF5522] selection:text-white font-sans antialiased">
      <style>{`
        :root {
          --primary: #FF5522;
          --gutter: clamp(1.25rem, 1rem + 2vw, 3.5rem);
        }
        .zeggo-gutter {
          padding-left: var(--gutter);
          padding-right: var(--gutter);
        }
        color-stop {
          color: #FF5522;
          font-weight: inherit;
        }
        /* Custom smooth scrollbars */
        html {
          scrollbar-width: thin;
          scrollbar-color: #333333 #000000;
        }
      `}</style>

      {/* =====================================================================
          HEADER (Zeggo Header Style with Official Clevio Logo & ID/EN Switch)
      ===================================================================== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3.5' : 'bg-transparent py-5'
        }`}
      >
        <div className="zeggo-gutter max-w-7xl mx-auto flex items-center justify-between">
          {/* Official Clevio AI Pro Logo from ClevioLogo Component */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none" aria-label="Clevio AI Pro Home">
            <ClevioLogo variant="light" size="md" sublabel="AI Pro" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest text-white/70">
            <a href="#tantangan" className="hover:text-white transition-colors">{t.nav.challenge}</a>
            <a href="#misi" className="hover:text-white transition-colors">{t.nav.mission}</a>
            <a href="#dampak" className="hover:text-white transition-colors">{t.nav.outcomes}</a>
            <a href="#mengapa" className="hover:text-white transition-colors">{t.nav.whyUs}</a>
            <a href="#kurikulum" className="hover:text-white transition-colors">{t.nav.curriculum}</a>
            <a href="#kompetensi" className="hover:text-white transition-colors">{t.nav.competencies}</a>
            <a href="#mentor" className="hover:text-white transition-colors">{t.nav.mentor}</a>
            <a href="#dokumentasi" className="hover:text-white transition-colors">{t.nav.highlights}</a>
          </nav>

          {/* Header Actions: Language Switcher + CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Switcher Pill */}
            <div className="flex items-center text-xs tracking-wider border border-white/20 rounded-full p-0.5 bg-black/40">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'id' ? 'bg-[#FF5522] text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'en' ? 'bg-[#FF5522] text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Zeggo Style Pill CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase border border-white/20 bg-white text-black hover:bg-[#FF5522] hover:text-white hover:border-[#FF5522] transition-all"
            >
              {t.nav.cta}
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-wider">
            <a href="#tantangan" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF5522]">{t.nav.challenge}</a>
            <a href="#misi" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF5522]">{t.nav.mission}</a>
            <a href="#dampak" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF5522]">{t.nav.outcomes}</a>
            <a href="#mengapa" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF5522]">{t.nav.whyUs}</a>
            <a href="#kurikulum" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF5522]">{t.nav.curriculum}</a>
            <a href="#kompetensi" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF5522]">{t.nav.competencies}</a>
            <a href="#mentor" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF5522]">{t.nav.mentor}</a>
            <a href="#dokumentasi" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FF5522]">{t.nav.highlights}</a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center rounded-full py-2.5 bg-[#FF5522] text-white font-semibold"
            >
              {t.nav.cta}
            </a>
          </div>
        )}
      </header>

      {/* =====================================================================
          SECTION 1: HERO SECTION (.section-hero)
      ===================================================================== */}
      <section id="tantangan" className="section-hero relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-32 zeggo-gutter max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-6">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#FF5522]">
            {t.hero.tag}
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]">
            <span className="block">{t.hero.h1Line1}</span>
            <span className="block">
              <ColorStop>{t.hero.h1Line2}</ColorStop>
            </span>
          </h1>

          <p className="text-base sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide bg-white text-black hover:bg-[#FF5522] hover:text-white transition-all shadow-lg"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Real-Time Capability Ribbon */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.hero.metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <span className="block text-xs uppercase tracking-wider text-white/50">{m.label}</span>
              <span className="block text-sm sm:text-base font-semibold text-white">{m.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: MISSION SECTION (.section-missions)
      ===================================================================== */}
      <section id="misi" className="section-missions min-h-[60vh] flex flex-col justify-center py-24 md:py-36 border-t border-white/10 zeggo-gutter max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#FF5522] font-semibold">{t.mission.label}</span>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
            {t.mission.quote} <ColorStop>{t.mission.highlight}</ColorStop>
          </p>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            {t.mission.desc}
          </p>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: BENEFITS SECTION (.section-benefits)
      ===================================================================== */}
      <section id="dampak" className="section-benefits py-24 md:py-36 border-t border-white/10 zeggo-gutter max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#FF5522] font-semibold">{t.benefits.label}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              {t.benefits.title}
            </h2>
          </div>

          {/* Right Column Numbered Cards */}
          <div className="lg:col-span-7 space-y-12">
            {t.benefits.items.map((item) => (
              <div key={item.num} className="border-b border-white/15 pb-10 space-y-3">
                <span className="text-xs font-mono text-[#FF5522] tracking-wider font-semibold">{item.num}</span>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  <ColorStop>{item.highlight}.</ColorStop> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: WHY US SECTION (.section-why-us)
      ===================================================================== */}
      <section id="mengapa" className="section-why-us py-24 md:py-36 border-t border-white/10 zeggo-gutter max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#FF5522] font-semibold">{t.whyUs.label}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {t.whyUs.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whyUs.items.map((item) => (
              <div
                key={item.num}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-white/30 transition-all"
              >
                <span className="text-xs font-mono text-[#FF5522] font-semibold">{item.num}</span>
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  <ColorStop>{item.highlight}.</ColorStop> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: AI ORCHESTRATION SPOTLIGHT (.section-zegbot style)
      ===================================================================== */}
      <section className="section-zegbot py-24 md:py-36 border-t border-white/10 zeggo-gutter max-w-7xl mx-auto">
        <div className="space-y-6 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#FF5522] font-semibold">{t.aiStack.label}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
            {t.aiStack.title}
          </h2>
          <p className="text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
            {t.aiStack.subtitle}
          </p>
        </div>

        {/* 3 Step Interactive Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.aiStack.steps.map((st, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/15 space-y-4 relative overflow-hidden group hover:border-[#FF5522]/50 transition-all"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF5522]/10 rounded-full blur-2xl group-hover:bg-[#FF5522]/20 transition-all" />
              <span className="text-xs font-mono tracking-widest uppercase text-white/50">{st.num}</span>
              <h3 className="text-xl font-medium text-white">{st.name}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: CURRICULUM ARCHITECTURE (.section-solutions style)
      ===================================================================== */}
      <section id="kurikulum" className="section-solutions py-24 md:py-36 border-t border-white/10 zeggo-gutter max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#FF5522] font-semibold">{t.curriculum.label}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {t.curriculum.title}
            </h2>
          </div>

          <div className="space-y-8">
            {t.curriculum.stages.map((stg) => (
              <div
                key={stg.stage}
                className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 hover:border-white/25 transition-all"
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF5522]/20 text-[#FF5522] font-semibold">
                      {stg.stage}
                    </span>
                    <span className="text-xs text-white/60 tracking-wider uppercase font-mono">{stg.timing}</span>
                  </div>

                  <h3 className="text-2xl font-medium text-white">{stg.title}</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/10 text-xs sm:text-sm">
                    <div>
                      <span className="block text-white/50 mb-1">Fokus Pelaksanaan:</span>
                      <p className="text-white/80">{stg.focus}</p>
                    </div>
                    <div>
                      <span className="block text-white/50 mb-1">Output Konkret:</span>
                      <p className="text-white/80 font-medium">{stg.output}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-72 aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-white/5 shrink-0">
                  <img
                    src={asset(stg.img)}
                    alt={stg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: CORE CAPABILITIES (.section-features style)
      ===================================================================== */}
      <section id="kompetensi" className="section-features py-24 md:py-36 border-t border-white/10 zeggo-gutter max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#FF5522] font-semibold">{t.competencies.label}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {t.competencies.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.competencies.items.map((comp) => (
              <div
                key={comp.num}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/30 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#FF5522] font-semibold">{comp.num}</span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/15 text-white/60">
                      {comp.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white">{comp.name}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: FACILITATOR & RECOGNITION (.section-brands style)
      ===================================================================== */}
      <section id="mentor" className="section-brands py-24 md:py-36 border-t border-white/10 zeggo-gutter max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Real Photo */}
          <div className="lg:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/15">
            <img
              src={asset('aranggi-real.jpg')}
              alt={t.mentor.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Bio & Accolades */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#FF5522] font-semibold">{t.mentor.label}</span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">{t.mentor.name}</h2>
            <p className="text-sm sm:text-base text-[#FF5522] font-medium">{t.mentor.title}</p>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">{t.mentor.bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              {t.mentor.accolades.map((acc, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-sm font-semibold text-white">{acc.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{acc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: VIDEO HIGHLIGHTS
      ===================================================================== */}
      <section id="dokumentasi" className="py-24 md:py-36 border-t border-white/10 zeggo-gutter max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#FF5522] font-semibold">{t.videos.label}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {t.videos.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.videos.items.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setActiveVideo(vid.id)}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/30 transition-all cursor-pointer group space-y-4"
              >
                <div className="aspect-video rounded-xl overflow-hidden bg-black/60 relative">
                  <img
                    src={asset(vid.thumb)}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF5522] group-hover:text-white transition-all shadow-xl">
                      <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span className="text-[#FF5522] font-semibold">{vid.category}</span>
                    <span>{vid.duration}</span>
                  </div>
                  <h3 className="text-lg font-medium text-white group-hover:text-[#FF5522] transition-colors">
                    {vid.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10: GOALS / FINAL CTA (.section-goals style)
      ===================================================================== */}
      <section className="section-goals py-28 md:py-40 border-t border-white/10 zeggo-gutter max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-widest text-[#FF5522] font-semibold">{t.goal.label}</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            {t.goal.title}
          </h2>
          <p className="text-base sm:text-xl text-white/75 leading-relaxed">
            {t.goal.desc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-9 py-4 text-sm font-semibold tracking-wide bg-white text-black hover:bg-[#FF5522] hover:text-white transition-all shadow-xl"
            >
              {t.goal.ctaPrimary}
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 text-sm font-semibold tracking-wide border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all"
            >
              {t.goal.ctaSecondary}
            </a>
          </div>

          <div className="pt-8 text-xs text-white/50 space-y-1">
            <p>Hotline WhatsApp: <span className="text-white font-medium">{t.goal.hotline}</span></p>
            <p>{t.goal.hours}</p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOOTER (Zeggo Style with Giant Brand Wordmark)
      ===================================================================== */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-12 zeggo-gutter">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
            {/* Official Logo */}
            <ClevioLogo variant="light" size="md" sublabel="AI Pro" />

            <div className="flex flex-wrap items-center gap-6 text-xs text-white/60">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {t.footer.contact}
              </a>
              <span className="text-white/20">|</span>
              <a href={`mailto:${t.footer.email}`} className="hover:text-white transition-colors">
                {t.footer.email}
              </a>
              <span className="text-white/20">|</span>
              <span>{t.footer.web}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>{t.footer.rights}</p>
            <a href="#tantangan" className="hover:text-white transition-colors">
              Back to top ↑
            </a>
          </div>

          {/* Giant ZEGGO-style SVG wordmark stretching across screen */}
          <div className="w-full overflow-hidden select-none opacity-90 pt-8" aria-hidden="true">
            <svg viewBox="0 0 1400 130" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text
                x="50%"
                y="105"
                textAnchor="middle"
                fontSize="120"
                fontWeight="800"
                letterSpacing="4"
                fill="#FF5522"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                CLEVIO AI PRO
              </text>
            </svg>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          VIDEO PLAYER MODAL
      ===================================================================== */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-md aspect-[9/16] max-h-[85vh] bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#FF5522] transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Clevio AI Pro Session Documentation"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
