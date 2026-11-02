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
      desc: 'Workshop 1 hari intensif bagi para pemimpin dan profesional untuk menguasai pemikiran strategis, mengorkestrasi asisten AI lintas fungsi, dan melahirkan nilai nyata bagi organisasi.',
      ctaPrimary: 'Daftar Workshop',
      ctaSecondary: 'Konsultasi via WhatsApp',
      metrics: [
        { label: 'Format Sesi', value: '1 Hari Penuh (09:00 - 17:00)' },
        { label: 'Siklus Transformasi', value: 'H-14 Pra-Sesi s/d H+14 Implementasi' },
        { label: 'Metodologi', value: '100% Berbasis Kasus Nyata' },
        { label: 'Hotline WhatsApp', value: '+62 822-2111-8860' },
      ],
    },
    mission: {
      label: 'Misi Kami',
      quote: 'Membekali para pemimpin dengan cara berpikir kritis, orkestrasi AI, dan validasi inovasi berkecepatan tinggi agar tidak sekadar menjadi pengguna, melainkan',
      highlight: 'arsitek nilai masa depan organisasi.',
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
          highlight: 'Inovasi yang berdampak nyata',
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
          highlight: 'Innovation with real impact',
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
    <div className="zeggo-app bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans antialiased">
      <style>{`
        :root {
          --header-height: calc(var(--spacing, 0.25rem) * 16);
          --gutter: clamp(1rem, 0.7rem + 1.5vw, 2.5rem);
          --breakpoint-3xl: 120rem;
        }

        /* 1:1 ZEGGO Typography Scale */
        .text-h0 {
          letter-spacing: -0.04em;
          font-size: 4.25rem;
          line-height: 0.9;
        }
        @media (min-width: 48rem) {
          .text-h0 {
            font-size: 6rem;
          }
        }
        @media (min-width: 64rem) {
          .text-h0 {
            font-size: 11rem;
            line-height: 0.86;
          }
        }

        .text-h1 {
          letter-spacing: -0.03em;
          font-size: 2.3125rem;
          line-height: 1;
        }
        @media (min-width: 48rem) {
          .text-h1 {
            font-size: 3.625rem;
            line-height: 0.9;
          }
        }
        @media (min-width: 64rem) {
          .text-h1 {
            font-size: 6.5rem;
          }
        }

        .text-h2 {
          letter-spacing: -0.02em;
          font-size: 1.6875rem;
          line-height: 1.05;
        }
        @media (min-width: 48rem) {
          .text-h2 {
            font-size: 2.375rem;
          }
        }
        @media (min-width: 64rem) {
          .text-h2 {
            font-size: 3.5rem;
          }
        }

        .text-h3 {
          letter-spacing: -0.01em;
          font-size: 1.25rem;
          line-height: 1.2;
        }
        @media (min-width: 48rem) {
          .text-h3 {
            font-size: 1.5rem;
          }
        }
        @media (min-width: 64rem) {
          .text-h3 {
            font-size: 1.875rem;
          }
        }

        .text-h4 {
          letter-spacing: -0.01em;
          font-size: 1.125rem;
          line-height: 1.35;
        }
        @media (min-width: 48rem) {
          .text-h4 {
            font-size: 1.25rem;
          }
        }
        @media (min-width: 64rem) {
          .text-h4 {
            font-size: 1.375rem;
          }
        }

        /* 1:1 ZEGGO Section Structure (Each section 1 full screen) */
        .zeggo-section {
          min-height: 100dvh;
          padding-top: calc(var(--header-height) + var(--gutter));
          padding-bottom: var(--gutter);
          padding-inline: var(--gutter);
          width: 100%;
          margin-inline: auto;
          max-width: calc(var(--breakpoint-3xl) + (var(--gutter) * 2));
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* 1:1 ZEGGO 12-Column Grid */
        .zeggo-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 1.5rem;
        }

        /* 1:1 ZEGGO Pill Button System */
        .zeggo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          padding-inline: 1.75rem;
          height: 2.75rem;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          white-space: nowrap;
        }
        .zeggo-btn-primary {
          background-color: #ffffff;
          color: #000000;
        }
        .zeggo-btn-primary:hover {
          background-color: rgba(255, 255, 255, 0.82);
          transform: translateY(-1px);
        }
        .zeggo-btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #ffffff;
        }
        .zeggo-btn-secondary:hover {
          border-color: #ffffff;
          background-color: rgba(255, 255, 255, 0.08);
          transform: translateY(-1px);
        }

        /* Pure black & white monochrome imagery */
        .zeggo-img {
          filter: grayscale(1);
          transition: filter 0.5s ease, transform 0.5s ease;
        }
        .zeggo-img:hover {
          filter: grayscale(0.2);
          transform: scale(1.02);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* =====================================================================
          HEADER (1:1 ZEGGO Header with Official Clevio Logo & ID/EN Switcher)
      ===================================================================== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
        style={{ height: 'var(--header-height)' }}
      >
        <div className="h-full px-[var(--gutter)] max-w-[calc(var(--breakpoint-3xl)+(var(--gutter)*2))] mx-auto flex items-center justify-between">
          {/* Official Clevio Logo from ClevioLogo Component */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none" aria-label="Clevio AI Pro Home">
            <ClevioLogo variant="light" size="md" sublabel="AI Pro" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest text-white/60">
            <a href="#tantangan" className="hover:text-white transition-colors">{t.nav.challenge}</a>
            <a href="#misi" className="hover:text-white transition-colors">{t.nav.mission}</a>
            <a href="#dampak" className="hover:text-white transition-colors">{t.nav.outcomes}</a>
            <a href="#mengapa" className="hover:text-white transition-colors">{t.nav.whyUs}</a>
            <a href="#kurikulum" className="hover:text-white transition-colors">{t.nav.curriculum}</a>
            <a href="#kompetensi" className="hover:text-white transition-colors">{t.nav.competencies}</a>
            <a href="#mentor" className="hover:text-white transition-colors">{t.nav.mentor}</a>
            <a href="#dokumentasi" className="hover:text-white transition-colors">{t.nav.highlights}</a>
          </nav>

          {/* Actions: ID/EN Switcher + ZEGGO Pill CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* ID / EN Language Switcher */}
            <div className="flex items-center text-xs tracking-wider border border-white/20 rounded-full p-0.5 bg-black">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'id' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'en' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Pill CTA Button */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex zeggo-btn zeggo-btn-primary !h-9 !px-5 !text-xs uppercase tracking-wider font-semibold"
            >
              {t.nav.cta}
            </a>

            {/* Mobile Menu Toggle */}
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

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-wider">
            <a href="#tantangan" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/80">{t.nav.challenge}</a>
            <a href="#misi" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/80">{t.nav.mission}</a>
            <a href="#dampak" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/80">{t.nav.outcomes}</a>
            <a href="#mengapa" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/80">{t.nav.whyUs}</a>
            <a href="#kurikulum" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/80">{t.nav.curriculum}</a>
            <a href="#kompetensi" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/80">{t.nav.competencies}</a>
            <a href="#mentor" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/80">{t.nav.mentor}</a>
            <a href="#dokumentasi" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/80">{t.nav.highlights}</a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center rounded-full py-2.5 bg-white text-black font-semibold"
            >
              {t.nav.cta}
            </a>
          </div>
        )}
      </header>

      {/* =====================================================================
          SECTION 1: HERO (.section.section-hero 1:1 ZEGGO)
      ===================================================================== */}
      <section id="tantangan" className="zeggo-section justify-end pb-12 sm:pb-20">
        <div className="mt-auto space-y-6 max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-white/50 font-mono">
            {t.hero.tag}
          </p>

          <h1 className="text-h2 font-medium max-w-screen-md">
            <span className="block">{t.hero.h1Line1}</span>
            <span className="block text-white font-bold">{t.hero.h1Line2}</span>
          </h1>

          <p className="text-h4 max-w-screen-sm text-white/80">
            {t.hero.desc}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="zeggo-btn zeggo-btn-primary">
              {t.hero.ctaPrimary}
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="zeggo-btn zeggo-btn-secondary">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Real-time Capability Ribbon at Bottom of Hero */}
        <div className="mt-16 md:mt-24 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.hero.metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <span className="block text-xs uppercase tracking-wider text-white/40">{m.label}</span>
              <span className="block text-sm sm:text-base font-medium text-white">{m.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: MISSION (.section.section-missions 1:1 ZEGGO)
      ===================================================================== */}
      <section id="misi" className="zeggo-section justify-end pb-24 border-t border-white/10">
        <div className="mt-auto space-y-6 max-w-4xl">
          <h2 className="text-h1">{t.mission.label}</h2>
          <p className="text-h4 max-w-2xl text-white/90 leading-relaxed">
            {t.mission.quote} <span className="text-white font-semibold underline decoration-white/40">{t.mission.highlight}</span>
          </p>
          <p className="text-body max-w-xl text-white/60 leading-relaxed">
            {t.mission.desc}
          </p>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: BENEFITS (.section.section-benefits 1:1 ZEGGO)
      ===================================================================== */}
      <section id="dampak" className="zeggo-section justify-center border-t border-white/10 py-16">
        <div className="zeggo-grid relative size-full items-start">
          {/* Left Column Sticky Header */}
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 space-y-4">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono">{t.benefits.label}</span>
            <h2 className="text-h2 sticky">
              {t.benefits.title}
            </h2>
          </div>

          {/* Right Column Numbered Items */}
          <div className="col-span-12 lg:col-span-7 space-y-12">
            {t.benefits.items.map((item) => (
              <div key={item.num} className="border-b border-white/10 pb-8 space-y-3">
                <span className="text-xs font-mono text-white/50 tracking-wider font-semibold">{item.num}</span>
                <h3 className="text-h3 text-white">
                  {item.title}
                </h3>
                <p className="text-body text-white/70 max-w-xl">
                  <span className="text-white font-medium">{item.highlight}.</span> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: WHY US (.section.section-why-us 1:1 ZEGGO)
      ===================================================================== */}
      <section id="mengapa" className="zeggo-section justify-between border-t border-white/10 py-16">
        <div className="space-y-12 w-full">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono">{t.whyUs.label}</span>
            <h2 className="text-h1">{t.whyUs.title}</h2>
          </div>

          <div className="zeggo-grid w-full">
            {t.whyUs.items.map((item) => (
              <div
                key={item.num}
                className="col-span-12 md:col-span-4 p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 hover:border-white/25 transition-all"
              >
                <span className="text-xs font-mono text-white/40 font-semibold">{item.num}</span>
                <h3 className="text-h3 text-white">{item.title}</h3>
                <p className="text-body text-white/70 leading-relaxed">
                  <span className="text-white font-medium">{item.highlight}.</span> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: AI ORCHESTRATION SPOTLIGHT (.section.section-zegbot 1:1 ZEGGO)
      ===================================================================== */}
      <section className="zeggo-section justify-end pb-20 border-t border-white/10">
        <div className="mt-auto space-y-10 w-full">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono">{t.aiStack.label}</span>
            <h2 className="text-h2">
              {t.aiStack.title}
            </h2>
            <p className="text-h4 text-white/75">
              {t.aiStack.subtitle}
            </p>
          </div>

          <div className="zeggo-grid w-full">
            {t.aiStack.steps.map((st, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-4 p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-white/30 transition-all"
              >
                <span className="text-xs font-mono tracking-widest uppercase text-white/40">{st.num}</span>
                <h3 className="text-h3 text-white">{st.name}</h3>
                <p className="text-body text-white/70">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: CURRICULUM ARCHITECTURE (.section.section-solutions 1:1 ZEGGO)
      ===================================================================== */}
      <section id="kurikulum" className="zeggo-section justify-center border-t border-white/10 py-16">
        <div className="space-y-12 w-full">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono">{t.curriculum.label}</span>
            <h2 className="text-h2">{t.curriculum.title}</h2>
          </div>

          <div className="space-y-6">
            {t.curriculum.stages.map((stg) => (
              <div
                key={stg.stage}
                className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 hover:border-white/25 transition-all"
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white font-semibold">
                      {stg.stage}
                    </span>
                    <span className="text-xs text-white/50 tracking-wider uppercase font-mono">{stg.timing}</span>
                  </div>

                  <h3 className="text-h3 text-white">{stg.title}</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/10 text-xs sm:text-sm">
                    <div>
                      <span className="block text-white/40 mb-1">Fokus Pelaksanaan:</span>
                      <p className="text-white/80">{stg.focus}</p>
                    </div>
                    <div>
                      <span className="block text-white/40 mb-1">Output Konkret:</span>
                      <p className="text-white font-medium">{stg.output}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-72 aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-white/5 shrink-0">
                  <img
                    src={asset(stg.img)}
                    alt={stg.title}
                    className="w-full h-full object-cover zeggo-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: FACILITATOR & RECOGNITION (.section.section-brands 1:1 ZEGGO)
      ===================================================================== */}
      <section id="mentor" className="zeggo-section justify-center border-t border-white/10 py-16">
        <div className="zeggo-grid items-center w-full">
          {/* Photo */}
          <div className="col-span-12 lg:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/15">
            <img
              src={asset('aranggi-real.jpg')}
              alt={t.mentor.name}
              className="w-full h-full object-cover object-top zeggo-img"
            />
          </div>

          {/* Bio & Recognition Badges */}
          <div className="col-span-12 lg:col-span-7 space-y-6 lg:pl-6">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono">{t.mentor.label}</span>
            <h2 className="text-h2 text-white">{t.mentor.name}</h2>
            <p className="text-h4 text-white/80 font-medium">{t.mentor.title}</p>
            <p className="text-body text-white/70">{t.mentor.bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              {t.mentor.accolades.map((acc, idx) => (
                <div key={idx} className="space-y-1 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="text-sm font-semibold text-white">{acc.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{acc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: CORE CAPABILITIES (.section.section-features 1:1 ZEGGO)
      ===================================================================== */}
      <section id="kompetensi" className="zeggo-section justify-between border-t border-white/10 py-16">
        <div className="space-y-12 w-full">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono">{t.competencies.label}</span>
            <h2 className="text-h2">{t.competencies.title}</h2>
          </div>

          <div className="zeggo-grid w-full">
            {t.competencies.items.map((comp) => (
              <div
                key={comp.num}
                className="col-span-12 md:col-span-6 lg:col-span-4 p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/30 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white/40 font-semibold">{comp.num}</span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/15 text-white/60">
                      {comp.tag}
                    </span>
                  </div>
                  <h3 className="text-h3 text-white">{comp.name}</h3>
                  <p className="text-body text-white/70">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: VIDEO DOCUMENTATION
      ===================================================================== */}
      <section id="dokumentasi" className="zeggo-section justify-center border-t border-white/10 py-16">
        <div className="space-y-12 w-full">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-white/40 font-mono">{t.videos.label}</span>
            <h2 className="text-h2">{t.videos.title}</h2>
          </div>

          <div className="zeggo-grid w-full">
            {t.videos.items.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setActiveVideo(vid.id)}
                className="col-span-12 md:col-span-6 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all cursor-pointer group space-y-4"
              >
                <div className="aspect-video rounded-xl overflow-hidden bg-black relative">
                  <img
                    src={asset(vid.thumb)}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-all shadow-xl">
                      <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-white/40">
                    <span className="text-white font-medium">{vid.category}</span>
                    <span>{vid.duration}</span>
                  </div>
                  <h3 className="text-h3 text-white group-hover:underline">
                    {vid.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10: GOALS / FINAL CTA (.section.section-goals 1:1 ZEGGO)
      ===================================================================== */}
      <section className="zeggo-section justify-between border-t border-white/10 py-16">
        <div className="relative">
          <span className="text-xs uppercase tracking-widest text-white/40 font-mono block mb-2">
            {t.goal.label}
          </span>
          <p className="text-h2 leading-none max-w-4xl">
            {t.goal.title}
          </p>
        </div>

        <div className="zeggo-grid border-t border-white/10 pt-10 items-end">
          <div className="col-span-12 md:col-span-6 space-y-2">
            <span className="text-sm text-white/60 font-mono">Executive Program & Corporate In-House</span>
            <p className="text-body text-white/50">{t.goal.hours}</p>
          </div>

          <div className="col-span-12 md:col-span-6 space-y-6">
            <p className="text-h4 text-white/80">
              {t.goal.desc}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="zeggo-btn zeggo-btn-primary">
                {t.goal.ctaPrimary}
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="zeggo-btn zeggo-btn-secondary">
                {t.goal.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOOTER (1:1 ZEGGO Pure Black & White Footer with Sleek SVG Wordmark)
      ===================================================================== */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-12 px-[var(--gutter)] max-w-[calc(var(--breakpoint-3xl)+(var(--gutter)*2))] mx-auto">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
            {/* Official Logo */}
            <ClevioLogo variant="light" size="md" sublabel="AI Pro" />

            <div className="flex flex-wrap items-center gap-6 text-xs text-white/50">
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

          {/* Giant ZEGGO-style SVG wordmark: Pure monochrome white stroke (No orange!) */}
          <div className="w-full overflow-hidden select-none pt-4" aria-hidden="true">
            <svg viewBox="0 0 1400 130" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text
                x="50%"
                y="105"
                textAnchor="middle"
                fontSize="120"
                fontWeight="800"
                letterSpacing="6"
                fill="none"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1.5"
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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-md aspect-[9/16] max-h-[85vh] bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
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
