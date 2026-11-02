import React, { useState, useEffect } from 'react';
import ClevioLogo from '../components/ClevioLogo';

type Lang = 'id' | 'en';

interface ContentData {
  nav: {
    challenge: string;
    outcomes: string;
    curriculum: string;
    competencies: string;
    mentor: string;
    highlights: string;
    cta: string;
  };
  hero: {
    title: string;
    lead: string;
    cta: string;
  };
  sectionOutcomes: {
    label: string;
    title: string;
    intro: string;
    cards: {
      title: string;
      note?: string;
      body: string;
      ctaText: string;
    }[];
  };
  sectionCurriculum: {
    label: string;
    title: string;
    intro: string;
    cards: {
      stage: string;
      title: string;
      timing: string;
      body: string;
      outputLabel: string;
      outputValue: string;
    }[];
  };
  sectionCompetencies: {
    label: string;
    title: string;
    intro: string;
    items: {
      num: string;
      title: string;
      tag: string;
      body: string;
    }[];
  };
  sectionMentor: {
    label: string;
    title: string;
    intro: string;
    name: string;
    role: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  sectionHighlights: {
    label: string;
    title: string;
    items: {
      id: string;
      tag: string;
      title: string;
      desc: string;
    }[];
  };
  sectionCta: {
    label: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    hotline: string;
    hours: string;
  };
  footer: {
    primaryNav: string[];
    secondaryNav: string[];
    office: string;
    contacts: string;
    rights: string;
  };
}

const DATA: Record<Lang, ContentData> = {
  id: {
    nav: {
      challenge: 'Tantangan',
      outcomes: 'Hasil 3H',
      curriculum: 'Kurikulum',
      competencies: 'Kompetensi',
      mentor: 'Mentor',
      highlights: 'Dokumentasi',
      cta: 'Daftar Workshop',
    },
    hero: {
      title: 'Bukan diganti AI. Tapi Memimpin AI.',
      lead: 'Workshop intensif satu hari bagi pemimpin dan profesional untuk mengembangkan pemikiran strategis, mengorkestrasi asisten AI lintas fungsi, dan melahirkan nilai nyata bagi organisasi.',
      cta: 'Eksplorasi Kurikulum & Hasil ↓',
    },
    sectionOutcomes: {
      label: 'Hasil yang Dicapai',
      title: 'Tiga Pilar Dampak Utama',
      intro: 'Kapabilitas eksekutif yang dibangun secara terarah untuk meningkatkan daya ungkit fokus, kecepatan iterasi ide, dan pertumbuhan nilai bisnis yang terukur.',
      cards: [
        {
          title: 'Hyper-Productive: Fokus Penuh pada Keputusan Strategis',
          note: 'Pilar 01 · Efisiensi',
          body: 'Mengorkestrasi asisten AI lintas fungsi kerja untuk memangkas pekerjaan teknis berulang, membebaskan kapasitas analitis bagi keputusan bernilai tinggi.',
          ctaText: 'Konsultasi via WhatsApp',
        },
        {
          title: 'Hyper-Iterative: Validasi Solusi dalam Hitungan Jam',
          note: 'Pilar 02 · Agilitas',
          body: 'Mengubah gagasan awal menjadi prototipe alur kerja dan simulasi strategi yang langsung diuji terhadap kebutuhan nyata secara tangkas dan objektif.',
          ctaText: 'Konsultasi via WhatsApp',
        },
        {
          title: 'Hyper-Impactful: Mengubah Peluang Menjadi Hasil Nyata',
          note: 'Pilar 03 · Nilai Nyata',
          body: 'Mengawinkan kepekaan empati manusia dengan ketajaman komputasi AI untuk melahirkan terobosan layanan serta efisiensi biaya yang berdampak finansial.',
          ctaText: 'Konsultasi via WhatsApp',
        },
      ],
    },
    sectionCurriculum: {
      label: 'Struktur Program',
      title: 'Arsitektur Transformasi 3 Langkah',
      intro: 'Dirancang sebagai perjalanan transformasi menyeluruh: pemetaan kebutuhan sebelum sesi, lokakarya intensif 1 hari, hingga review implementasi lapangan.',
      cards: [
        {
          stage: 'Tahap 01',
          timing: 'H-14 Pra-Sesi',
          title: 'Diagnostic & Problem Mapping',
          body: 'Asesmen kesiapan alur kerja unit kerja dan identifikasi tantangan operasional utama yang paling bernilai tinggi untuk dipecahkan dengan AI.',
          outputLabel: 'Output Tahap 01',
          outputValue: 'Dokumen prioritas tantangan dan dataset konteks kerja siap olah.',
        },
        {
          stage: 'Tahap 02',
          timing: 'Hari-H Workshop (09:00 - 17:00 WIB)',
          title: 'Intensive Workshop & Rapid Prototyping',
          body: 'Simulasi tatap muka membedah studi kasus aktual, merancang arsitektur asisten cerdas, dan membangun prototipe solusi kerja secara langsung.',
          outputLabel: 'Output Tahap 02',
          outputValue: 'Prototipe asisten AI teruji dan cetak biru implementasi siap eksekusi.',
        },
        {
          stage: 'Tahap 03',
          timing: 'H+14 Pasca-Sesi',
          title: 'Execution Review & Adoption Clinic',
          body: 'Pendampingan evaluasi hasil uji coba di lingkungan kerja nyata bersama fasilitator untuk memastikan adopsi berkelanjutan di seluruh tim.',
          outputLabel: 'Output Tahap 03',
          outputValue: 'Laporan dampak operasional dan rekomendasi penskalaan sistematis.',
        },
      ],
    },
    sectionCompetencies: {
      label: 'Kapabilitas Eksekutif',
      title: '5 Kompetensi Inti AI Thinking',
      intro: 'Lima keahlian mendasar yang dilatih secara intensif untuk memastikan setiap pemimpin mampu memandu transformasi organisasi secara mandiri dan percaya diri.',
      items: [
        {
          num: '01',
          title: 'Empati & Pemahaman Masalah',
          tag: 'Human Empathy',
          body: 'Menemukan akar persoalan pelanggan dan pemangku kepentingan yang benar-benar bernilai tinggi sebelum memilih instrumen teknologi.',
        },
        {
          num: '02',
          title: 'Berpikir Kritis & Framing',
          tag: 'Critical Framing',
          body: 'Mengajukan pertanyaan terarah, menantang asumsi lama organisasi, serta memvalidasi objektivitas keluaran model AI secara ketat.',
        },
        {
          num: '03',
          title: 'Orkestrasi AI Lintas Fungsi',
          tag: 'AI Orchestration',
          body: 'Memadukan beragam agen cerdas sebagai mitra berpikir strategis untuk melipatgandakan analisis di divisi operasi, pemasaran, dan produk.',
        },
        {
          num: '04',
          title: 'Eksperimen & Prototyping Cepat',
          tag: 'Rapid Prototyping',
          body: 'Membangun dan menguji prototipe alur kerja dalam siklus jam untuk meminimalkan risiko biaya dan mempercepat kepastian bisnis.',
        },
        {
          num: '05',
          title: 'Kepemimpinan Penciptaan Nilai',
          tag: 'Value Creation',
          body: 'Menerjemahkan kapabilitas teknologi mutakhir menjadi keunggulan kompetitif, efisiensi anggaran, dan penciptaan nilai baru organisasi.',
        },
        {
          num: '06',
          title: 'Format Sesi In-House & Publik',
          tag: 'Delivery Format',
          body: 'Tersedia dalam kelas In-House eksklusif bagi korporasi maupun cohort publik eksekutif dengan kuota peserta terkurasi dan terbatas.',
        },
      ],
    },
    sectionMentor: {
      label: 'Fasilitator & Rekam Jejak',
      title: 'Dipandu Oleh Praktisi Inovasi Berpengalaman',
      intro: 'Menghadirkan pengalaman nyata mendampingi kepemimpinan digital dan meraih apresiasi inovasi di tingkat nasional maupun internasional.',
      name: 'Aranggi Soemardjan',
      role: 'Inovator AI Terapan · Pendiri Clevio & Coach Playground',
      pillars: [
        {
          title: 'Profil SOSOK Harian Kompas',
          desc: 'Diangkat dalam rubrik profil prestisius SOSOK Harian Kompas atas dedikasi lebih dari satu dekade membangun budaya kreator dan literasi teknologi.',
        },
        {
          title: 'Anugerah Inovasi Ristekdikti & Harvard Seed Fellow',
          desc: 'Pengakuan nasional dan fellowship internasional dalam memadukan pemikiran komputasional dengan dampak sosial-ekonomi nyata.',
        },
        {
          title: 'Inisiator Ekosistem AI Terapan (Agriana.ai)',
          desc: 'Merancang dan mengimplementasikan sistem asisten pintar dan otomatisasi proses bisnis aktual lintas industri secara bertanggung jawab.',
        },
      ],
    },
    sectionHighlights: {
      label: 'Dokumentasi & Insight',
      title: 'Cuplikan Sesi & Perspektif Kepemimpinan',
      items: [
        {
          id: 'p28s931M61c',
          tag: 'Perspektif Eksekutif · YouTube Shorts',
          title: 'Mengapa Pemimpin Perlu Menguasai AI Thinking, Bukan Sekadar Prompting',
          desc: 'Diskusi mendalam mengenai pergeseran peran pemimpin dari operator perintah menjadi arsitek perumusan masalah strategis.',
        },
        {
          id: 'gR9A7eA4wP0',
          tag: 'Suasana Sesi · YouTube Shorts',
          title: 'Kolaborasi Kelompok, Eksperimen Prototipe & Simulasi Kerja Clevio AI Pro',
          desc: 'Dokumentasi dinamika ruang lokakarya saat peserta membedah masalah nyata perusahaan dan menguji prototipe asisten AI.',
        },
      ],
    },
    sectionCta: {
      label: 'Pendaftaran & Konsultasi',
      title: 'Pimpin Transformasi AI Organisasi Anda',
      lead: 'Konsultasikan kebutuhan spesifik unit kerja Anda untuk penyelenggaraan workshop In-House korporasi atau daftarkan diri pada sesi publik eksekutif berikutnya.',
      ctaPrimary: 'Daftar via WhatsApp →',
      ctaSecondary: 'Konsultasi Sesi In-House →',
      hotline: '+62 822-2111-8860',
      hours: 'Senin - Jumat · 09:00 - 18:00 WIB (Respons Cepat via WhatsApp)',
    },
    footer: {
      primaryNav: ['Clevio AI Pro', 'Tantangan', 'Hasil 3H', 'Kurikulum', 'Kompetensi', 'Mentor'],
      secondaryNav: ['In-House Workshop', 'Public Executive Cohort', 'Dokumentasi Video', 'Kontak WhatsApp'],
      office: 'Clevio AI Pro · Executive AI Thinking & Innovation · Jakarta, Indonesia',
      contacts: 'Hotline: +62 822-2111-8860 · Email: clevioaipro@gmail.com · Web: clev.io/pro',
      rights: '© 2026 Clevio AI Pro. Hak cipta dilindungi undang-undang.',
    },
  },
  en: {
    nav: {
      challenge: 'Challenge',
      outcomes: '3H Outcomes',
      curriculum: 'Curriculum',
      competencies: 'Capabilities',
      mentor: 'Facilitator',
      highlights: 'Highlights',
      cta: 'Register Workshop',
    },
    hero: {
      title: 'Not replaced by AI. Leading with AI.',
      lead: 'An intensive one-day executive workshop for leaders and professionals to cultivate strategic thinking, orchestrate cross-functional AI assistants, and generate measurable organizational value.',
      cta: 'Explore Curriculum & Outcomes ↓',
    },
    sectionOutcomes: {
      label: 'Core Outcomes',
      title: 'Three Pillars of Strategic Impact',
      intro: 'Executive capabilities intentionally engineered to maximize strategic focus, accelerate solution iteration, and deliver quantifiable commercial value.',
      cards: [
        {
          title: 'Hyper-Productive: Focus Entirely on High-Stakes Strategy',
          note: 'Pillar 01 · Efficiency',
          body: 'Orchestrate cross-functional AI assistants to eliminate repetitive operational bottlenecks, redirecting executive bandwidth to decisions with exponential leverage.',
          ctaText: 'Inquire via WhatsApp',
        },
        {
          title: 'Hyper-Iterative: High-Velocity Solution Validation',
          note: 'Pillar 02 · Agility',
          body: 'Transform rough concepts into functional workflow prototypes and strategic simulations tested directly against user requirements within hours rather than weeks.',
          ctaText: 'Inquire via WhatsApp',
        },
        {
          title: 'Hyper-Impactful: Converting Opportunities into Bottom-Line Growth',
          note: 'Pillar 03 · Real Value',
          body: 'Combine human empathy and commercial discernment with AI analytical depth to generate service breakthroughs and measurable operational cost efficiencies.',
          ctaText: 'Inquire via WhatsApp',
        },
      ],
    },
    sectionCurriculum: {
      label: 'Program Architecture',
      title: 'A Structured 3-Stage Transformation Journey',
      intro: 'Designed as a complete capability journey: pre-session diagnostic alignment, 1-day intensive co-creation, and post-session operational review.',
      cards: [
        {
          stage: 'Stage 01',
          timing: 'Pre-Session (D-14)',
          title: 'Diagnostic & Problem Mapping',
          body: 'Evaluate workflow readiness, surface primary operational friction points, and identify the highest-leverage business challenges suited for AI solutioning.',
          outputLabel: 'Stage 01 Output',
          outputValue: 'Strategic problem brief and clean departmental context datasets.',
        },
        {
          stage: 'Stage 02',
          timing: 'Core Workshop (09:00 - 17:00 WIB)',
          title: 'Intensive Workshop & Rapid Prototyping',
          body: 'Interactive cohort sprints dissecting live case studies, configuring multi-agent thinking workflows, and building working solution prototypes in real time.',
          outputLabel: 'Stage 02 Output',
          outputValue: 'Tested AI assistant prototype and ready-to-deploy implementation blueprint.',
        },
        {
          stage: 'Stage 03',
          timing: 'Post-Session (D+14)',
          title: 'Execution Review & Adoption Clinic',
          body: 'Guided review of workflow pilot results in real workplace environments to resolve operational friction and secure sustained team adoption.',
          outputLabel: 'Stage 03 Output',
          outputValue: 'Documented impact report and systematic scaling recommendations.',
        },
      ],
    },
    sectionCompetencies: {
      label: 'Executive Capabilities',
      title: '5 Core AI Thinking Competencies',
      intro: 'Five foundational capabilities practiced intensively to ensure leaders steer organizational innovation independently and with rigorous judgment.',
      items: [
        {
          num: '01',
          title: 'Empathy & Problem Discovery',
          tag: 'Human Empathy',
          body: 'Uncovering the true human and customer problems worth solving before committing organizational capital to technology.',
        },
        {
          num: '02',
          title: 'Critical Thinking & Framing',
          tag: 'Critical Framing',
          body: 'Asking incisive questions, challenging legacy organizational assumptions, and objectively auditing AI-generated strategic outputs.',
        },
        {
          num: '03',
          title: 'Cross-Functional AI Orchestration',
          tag: 'AI Orchestration',
          body: 'Harmonizing diverse intelligent agents as cognitive thinking partners to multiply analytical reach across operations, marketing, and strategy.',
        },
        {
          num: '04',
          title: 'Rapid Experimentation & Prototyping',
          tag: 'Rapid Prototyping',
          body: 'Constructing and validating working workflow prototypes in rapid cycles to compress innovation risk and accelerate business certainty.',
        },
        {
          num: '05',
          title: 'Value Creation Leadership',
          tag: 'Value Creation',
          body: 'Translating technological advances into durable competitive differentiation, operational cost reduction, and executive clarity.',
        },
        {
          num: '06',
          title: 'In-House & Executive Cohorts',
          tag: 'Delivery Format',
          body: 'Available as tailored in-house corporate workshops or curated public executive cohorts with strictly limited seats.',
        },
      ],
    },
    sectionMentor: {
      label: 'Facilitator & Track Record',
      title: 'Guided by Proven Innovation Practitioners',
      intro: 'Grounded in real-world leadership experience advising digital transformation and receiving national and international innovation honors.',
      name: 'Aranggi Soemardjan',
      role: 'Applied AI Innovator · Founder of Clevio & Coach Playground',
      pillars: [
        {
          title: 'Kompas Daily SOSOK Profile',
          desc: 'Featured in Kompas Daily prestigious SOSOK column for pioneering technology creator literacy and project-based computational learning in Indonesia.',
        },
        {
          title: 'Ristekdikti National Innovation Award & Harvard Seed Fellow',
          desc: 'National recognition and global fellowship honoring project-based methodologies addressing authentic socio-economic challenges.',
        },
        {
          title: 'Applied AI Ecosystem Pioneer (Agriana.ai)',
          desc: 'Architecting intelligent assistant ecosystems and operational process automation engineered for measurable commercial impact.',
        },
      ],
    },
    sectionHighlights: {
      label: 'Documentation & Insights',
      title: 'Session Highlights & Leadership Insights',
      items: [
        {
          id: 'p28s931M61c',
          tag: 'Executive Perspective · YouTube Shorts',
          title: 'Why Leaders Must Master AI Thinking Rather Than Mere Prompting',
          desc: 'In-depth breakdown of how leadership evolves from operational task commanding into strategic cognitive problem architecture.',
        },
        {
          id: 'gR9A7eA4wP0',
          tag: 'Workshop Atmosphere · YouTube Shorts',
          title: 'Group Sprints, Rapid Prototyping & Live Co-Creation at Clevio AI Pro',
          desc: 'Inside the workshop floor as executive participants dissect real corporate challenges and validate AI assistant workflows.',
        },
      ],
    },
    sectionCta: {
      label: 'Registration & Inquiry',
      title: 'Lead Your Organization AI Transformation',
      lead: 'Discuss your departmental requirements for a dedicated corporate In-House cohort or reserve seats in the upcoming executive public session.',
      ctaPrimary: 'Register via WhatsApp →',
      ctaSecondary: 'Inquire In-House Cohort →',
      hotline: '+62 822-2111-8860',
      hours: 'Monday - Friday · 09:00 - 18:00 WIB (Fast Response via WhatsApp)',
    },
    footer: {
      primaryNav: ['Clevio AI Pro', 'Challenge', '3H Outcomes', 'Curriculum', 'Capabilities', 'Facilitator'],
      secondaryNav: ['In-House Workshop', 'Public Executive Cohort', 'Video Documentation', 'WhatsApp Hotline'],
      office: 'Clevio AI Pro · Executive AI Thinking & Innovation · Jakarta, Indonesia',
      contacts: 'Hotline: +62 822-2111-8860 · Email: clevioaipro@gmail.com · Web: clev.io/pro',
      rights: '© 2026 Clevio AI Pro. All rights reserved.',
    },
  },
};

const WA_URL =
  'https://wa.me/6282221118860?text=Halo%20Tim%20Clevio%20AI%20Pro%2C%20saya%20tertarik%20mendaftar%20Workshop%20Executive%20AI%20Thinking%20%26%20Innovation.';

export default function ClevioPro() {
  const [lang, setLang] = useState<Lang>('id');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = DATA[lang];

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
    <div className="cypher-root min-h-screen bg-white text-[#181818] selection:bg-[#181818] selection:text-white antialiased font-['Instrument_Sans',sans-serif]">
      <style>{`
        :root {
          --color-background-100: #ffffff;
          --color-foreground-100: #181818;
          --color-foreground-60: rgba(24, 24, 24, 0.6);
          --color-foreground-50: rgba(24, 24, 24, 0.5);
          --color-foreground-30: rgba(24, 24, 24, 0.18);
          --color-foreground-20: rgba(24, 24, 24, 0.12);
          --color-foreground-10: rgba(24, 24, 24, 0.06);
          --site-header-height: 5rem;
        }

        /* 1:1 Cypher Capital Fluid Typography Classes */
        .cypher-display-fluid {
          font-size: clamp(2.5rem, 5.2vw, 4.75rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
          font-weight: 500;
        }
        .cypher-display-medium {
          font-size: clamp(2rem, 3.8vw, 3.25rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          font-weight: 500;
        }
        .cypher-headline-large {
          font-size: clamp(1.25rem, 1.8vw, 1.75rem);
          line-height: 1.25;
          letter-spacing: -0.02em;
          font-weight: 500;
        }
        .cypher-body-large {
          font-size: clamp(1rem, 1.15vw, 1.125rem);
          line-height: 1.6;
          letter-spacing: -0.01em;
        }
        .cypher-label-medium {
          font-size: 0.8125rem;
          line-height: 1.4;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 500;
        }

        /* 1:1 Cypher Section Label with Hairline Divider */
        .cypher-section-label {
          width: 100%;
          min-height: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .cypher-section-label::before {
          content: "";
          position: absolute;
          inset-inline: 0;
          top: 50%;
          border-bottom: 1px solid var(--color-foreground-20);
          z-index: 0;
        }
        .cypher-section-label-text {
          position: relative;
          z-index: 1;
          background: var(--color-background-100);
          padding-inline: 1.5rem;
          color: var(--color-foreground-50);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 500;
          white-space: nowrap;
        }

        /* 1:1 Cypher Wipe Button */
        .cypher-wipe-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1.5px solid var(--color-foreground-100);
          padding-block: 0.5rem;
          padding-inline: 0;
          font-size: 0.9375rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--color-foreground-100);
          text-decoration: none;
          background: transparent;
          cursor: pointer;
          transition: padding 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cypher-wipe-btn:hover {
          padding-inline: 0.75rem;
          background-color: var(--color-foreground-10);
        }

        /* 1:1 Cypher Ruled Detail Card */
        .cypher-ruled-card {
          border-top: 1px solid var(--color-foreground-20);
          border-bottom: 1px solid var(--color-foreground-20);
          padding-block: 2.25rem;
          transition: background-color 0.25s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .cypher-ruled-card:hover {
          background-color: rgba(24, 24, 24, 0.02);
        }

        /* 1:1 Cypher Action Row */
        .cypher-action-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--color-foreground-20);
          padding-block: 1.5rem;
          text-decoration: none;
          color: inherit;
          transition: padding-inline 0.25s ease, background-color 0.25s ease;
        }
        .cypher-action-row:hover {
          padding-inline: 0.75rem;
          background-color: rgba(24, 24, 24, 0.02);
        }

        /* 1:1 Cypher Stretch Arrow */
        .cypher-arrow {
          display: inline-flex;
          align-items: center;
          transition: transform 0.25s ease;
        }
        .cypher-action-row:hover .cypher-arrow,
        .cypher-ruled-card:hover .cypher-arrow {
          transform: translateX(4px);
        }
      `}</style>

      {/* =====================================================================
          HEADER (1:1 Cypher Capital Header with Official Clevio Logo)
      ===================================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#181818]/15 h-[var(--site-header-height)]">
        <div className="max-w-[1440px] h-full mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Official Clevio Logo */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none" aria-label="Clevio AI Pro Home">
            <ClevioLogo variant="dark" size="md" sublabel="AI Pro" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-tight text-[#181818]/70">
            <a href="#tantangan" className="hover:text-[#181818] transition-colors">{t.nav.challenge}</a>
            <a href="#dampak" className="hover:text-[#181818] transition-colors">{t.nav.outcomes}</a>
            <a href="#kurikulum" className="hover:text-[#181818] transition-colors">{t.nav.curriculum}</a>
            <a href="#kompetensi" className="hover:text-[#181818] transition-colors">{t.nav.competencies}</a>
            <a href="#mentor" className="hover:text-[#181818] transition-colors">{t.nav.mentor}</a>
            <a href="#dokumentasi" className="hover:text-[#181818] transition-colors">{t.nav.highlights}</a>
          </nav>

          {/* Right Action: Language Switcher + Wipe Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center text-xs tracking-wider border border-[#181818]/20 rounded-full p-0.5">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'id' ? 'bg-[#181818] text-white' : 'text-[#181818]/60 hover:text-[#181818]'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                  lang === 'en' ? 'bg-[#181818] text-white' : 'text-[#181818]/60 hover:text-[#181818]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Wipe Button CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex cypher-wipe-btn !text-xs !py-1 uppercase tracking-wider font-semibold"
            >
              <span>{t.nav.cta}</span>
              <span className="cypher-arrow">→</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#181818] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#181818]/15 px-6 py-6 flex flex-col gap-4 text-sm font-medium">
            <a href="#tantangan" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">{t.nav.challenge}</a>
            <a href="#dampak" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">{t.nav.outcomes}</a>
            <a href="#kurikulum" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">{t.nav.curriculum}</a>
            <a href="#kompetensi" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">{t.nav.competencies}</a>
            <a href="#mentor" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">{t.nav.mentor}</a>
            <a href="#dokumentasi" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">{t.nav.highlights}</a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center py-2.5 bg-[#181818] text-white font-medium rounded-none"
            >
              {t.nav.cta} →
            </a>
          </div>
        )}
      </header>

      {/* =====================================================================
          SECTION 0: HERO (1:1 Cypher Capital Hero with Monochromatic Flowing Ribbons)
      ===================================================================== */}
      <section id="tantangan" className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden pt-12 pb-16 border-b border-[#181818]/15">
        {/* Monochromatic Flowing SVG Ribbons (Exact Cypher Capital Vector Aesthetic, No stock images) */}
        <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 810" preserveAspectRatio="none" className="w-full h-full" fill="none">
            <path
              d="M-222.7 504.4C-222.7 504.4 304.8 504.4 749 504.4C1193.2 504.4 1176.7 692.7 1668 692.7"
              stroke="#e5e5e5"
              strokeWidth="120"
            />
            <path
              d="M-222.7 504.4C-222.7 504.4 60.4 504.4 504.6 504.4C948.8 504.4 1176.7 -52.4 1668 -52.4"
              stroke="#f0f0f0"
              strokeWidth="120"
            />
            <path
              d="M-222.7 504.4C-222.7 504.4 304.8 504.4 749 504.4C1193.2 504.4 1176.7 259.5 1668 259.5"
              stroke="#d4d4d4"
              strokeWidth="120"
            />
            <path
              d="M-223 504.4C-223 504.4 -299 504.4 145.2 504.4C912.8 504.4 657.4 924.4 1668 924.4"
              stroke="#f7f7f7"
              strokeWidth="120"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center my-auto">
          <div className="max-w-4xl space-y-8">
            <h1 className="cypher-display-fluid">
              {t.hero.title}
            </h1>

            <p className="cypher-body-large text-[#181818]/70 max-w-2xl">
              {t.hero.lead}
            </p>

            <div className="pt-4">
              <a href="#dampak" className="cypher-wipe-btn text-base font-medium">
                <span>{t.hero.cta}</span>
                <span className="cypher-arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Real-Time Institutional Metric Bar */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-8 border-t border-[#181818]/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div>
            <span className="block text-[#181818]/50 uppercase tracking-widest font-mono mb-1">Format Program</span>
            <span className="block font-medium text-[#181818]">1 Hari Penuh (09:00 - 17:00 WIB)</span>
          </div>
          <div>
            <span className="block text-[#181818]/50 uppercase tracking-widest font-mono mb-1">Siklus Transformasi</span>
            <span className="block font-medium text-[#181818]">H-14 Pra-Sesi s/d H+14 Review</span>
          </div>
          <div>
            <span className="block text-[#181818]/50 uppercase tracking-widest font-mono mb-1">Metodologi</span>
            <span className="block font-medium text-[#181818]">100% Berbasis Kasus Aktual</span>
          </div>
          <div>
            <span className="block text-[#181818]/50 uppercase tracking-widest font-mono mb-1">Hotline Pendaftaran</span>
            <span className="block font-medium text-[#181818]">+62 822-2111-8860</span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 1: CAPABILITIES / 3H OUTCOMES (1:1 Cypher Capabilities)
      ===================================================================== */}
      <section id="dampak" className="py-24 sm:py-32">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          {/* Cypher Section Label */}
          <div className="cypher-section-label">
            <span className="cypher-section-label-text">{t.sectionOutcomes.label}</span>
          </div>

          {/* Section Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h2 className="cypher-display-medium">{t.sectionOutcomes.title}</h2>
            </div>
            <div className="lg:col-span-6">
              <p className="cypher-body-large text-[#181818]/60 lg:pt-3">
                {t.sectionOutcomes.intro}
              </p>
            </div>
          </div>

          {/* Ruled Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.sectionOutcomes.cards.map((c, i) => (
              <div key={i} className="cypher-ruled-card p-6 sm:p-8 space-y-8">
                <div className="space-y-4">
                  {c.note && (
                    <span className="text-xs font-mono text-[#181818]/50 tracking-wider uppercase">
                      {c.note}
                    </span>
                  )}
                  <h3 className="cypher-headline-large">{c.title}</h3>
                  <p className="cypher-body-large text-[#181818]/60">{c.body}</p>
                </div>
                <div className="pt-4 border-t border-[#181818]/10">
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cypher-wipe-btn !text-xs !py-1 uppercase font-semibold tracking-wider"
                  >
                    <span>{c.ctaText}</span>
                    <span className="cypher-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: PROPRIETARY / CURRICULUM (1:1 Cypher Proprietary Investments)
      ===================================================================== */}
      <section id="kurikulum" className="py-24 sm:py-32 border-t border-[#181818]/15 bg-[#fbfbfb]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          <div className="cypher-section-label">
            <span className="cypher-section-label-text !bg-[#fbfbfb]">{t.sectionCurriculum.label}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h2 className="cypher-display-medium">{t.sectionCurriculum.title}</h2>
            </div>
            <div className="lg:col-span-6">
              <p className="cypher-body-large text-[#181818]/60 lg:pt-3">
                {t.sectionCurriculum.intro}
              </p>
            </div>
          </div>

          {/* 3 Structured Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.sectionCurriculum.cards.map((st, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#181818]/15 p-8 sm:p-10 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#181818]/10 pb-3">
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#181818]">
                      {st.stage}
                    </span>
                    <span className="text-xs text-[#181818]/50 uppercase font-mono">{st.timing}</span>
                  </div>
                  <h3 className="cypher-headline-large">{st.title}</h3>
                  <p className="cypher-body-large text-[#181818]/65">{st.body}</p>
                </div>

                <div className="pt-4 border-t border-[#181818]/10 text-xs space-y-1">
                  <span className="block text-[#181818]/45 font-mono uppercase">{st.outputLabel}</span>
                  <p className="font-medium text-[#181818]">{st.outputValue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: INFRASTRUCTURE / 5 CAPABILITIES (1:1 Cypher Infrastructure Grid)
      ===================================================================== */}
      <section id="kompetensi" className="py-24 sm:py-32 border-t border-[#181818]/15">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          <div className="cypher-section-label">
            <span className="cypher-section-label-text">{t.sectionCompetencies.label}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h2 className="cypher-display-medium">{t.sectionCompetencies.title}</h2>
            </div>
            <div className="lg:col-span-6">
              <p className="cypher-body-large text-[#181818]/60 lg:pt-3">
                {t.sectionCompetencies.intro}
              </p>
            </div>
          </div>

          {/* 6 Institutional Ruled Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {t.sectionCompetencies.items.map((item) => (
              <div key={item.num} className="border-t border-[#181818]/15 pt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-[#181818]/40">{item.num}</span>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#181818]/60">
                    {item.tag}
                  </span>
                </div>
                <h3 className="cypher-headline-large">{item.title}</h3>
                <p className="cypher-body-large text-[#181818]/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: VALUES / LEADERSHIP & TRACK RECORD (1:1 Cypher Values)
      ===================================================================== */}
      <section id="mentor" className="py-24 sm:py-32 border-t border-[#181818]/15 bg-[#fbfbfb]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          <div className="cypher-section-label">
            <span className="cypher-section-label-text !bg-[#fbfbfb]">{t.sectionMentor.label}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h2 className="cypher-display-medium">{t.sectionMentor.title}</h2>
            <p className="cypher-body-large text-[#181818]/70">
              <strong className="text-[#181818] font-semibold">{t.sectionMentor.name}</strong> — {t.sectionMentor.role}
            </p>
            <p className="cypher-body-large text-[#181818]/60">{t.sectionMentor.intro}</p>
          </div>

          {/* 3 Pillars of Track Record */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.sectionMentor.pillars.map((pil, idx) => (
              <div key={idx} className="bg-white border border-[#181818]/15 p-8 sm:p-10 space-y-4">
                <span className="text-xs font-mono text-[#181818]/40">0{idx + 1} / TRACK RECORD</span>
                <h3 className="cypher-headline-large">{pil.title}</h3>
                <p className="cypher-body-large text-[#181818]/65">{pil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: HIGHLIGHTS & ACTION ROWS (1:1 Cypher Action Rows)
      ===================================================================== */}
      <section id="dokumentasi" className="py-24 sm:py-32 border-t border-[#181818]/15">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          <div className="cypher-section-label">
            <span className="cypher-section-label-text">{t.sectionHighlights.label}</span>
          </div>

          <div className="max-w-2xl">
            <h2 className="cypher-display-medium">{t.sectionHighlights.title}</h2>
          </div>

          {/* Action Rows with Stretching Arrows */}
          <div className="border-t border-[#181818]/15">
            {t.sectionHighlights.items.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setActiveVideo(vid.id)}
                className="cypher-action-row cursor-pointer group"
              >
                <div className="space-y-1 max-w-3xl">
                  <span className="text-xs font-mono text-[#181818]/50 uppercase tracking-wider">{vid.tag}</span>
                  <h3 className="cypher-headline-large group-hover:underline">{vid.title}</h3>
                  <p className="cypher-body-large text-[#181818]/60">{vid.desc}</p>
                </div>
                <div className="cypher-arrow text-xl pl-4">→</div>
              </div>
            ))}

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cypher-action-row group"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#181818]/50 uppercase tracking-wider">Hotline WhatsApp</span>
                <h3 className="cypher-headline-large group-hover:underline">+62 822-2111-8860 (Konsultasi Program & Sesi In-House)</h3>
                <p className="cypher-body-large text-[#181818]/60">Tim Clevio siap membantu menyesuaikan silabus dengan prioritas tantangan perusahaan Anda.</p>
              </div>
              <div className="cypher-arrow text-xl pl-4">→</div>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: FINAL REGISTRATION CTA (1:1 Cypher Institutional Closing)
      ===================================================================== */}
      <section className="py-28 sm:py-36 border-t border-[#181818]/15 bg-[#181818] text-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
          <span className="text-xs font-mono text-white/50 uppercase tracking-widest block">
            {t.sectionCta.label}
          </span>
          <h2 className="cypher-display-fluid max-w-4xl">
            {t.sectionCta.title}
          </h2>
          <p className="cypher-body-large text-white/70 max-w-2xl">
            {t.sectionCta.lead}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white text-[#181818] font-semibold text-sm tracking-wide hover:bg-white/85 transition-colors"
            >
              {t.sectionCta.ctaPrimary}
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/30 text-white font-medium text-sm tracking-wide hover:border-white hover:bg-white/10 transition-colors"
            >
              {t.sectionCta.ctaSecondary}
            </a>
          </div>

          <div className="pt-8 border-t border-white/15 text-xs text-white/50 font-mono space-y-1">
            <p>Hotline Pendaftaran: <span className="text-white">{t.sectionCta.hotline}</span></p>
            <p>{t.sectionCta.hours}</p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOOTER (1:1 Cypher Capital Institutional Multi-Column Footer)
      ===================================================================== */}
      <footer className="border-t border-[#181818]/15 bg-white py-16">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-[#181818]/15">
            {/* Brand Logo */}
            <div className="lg:col-span-4 space-y-4">
              <ClevioLogo variant="dark" size="md" sublabel="AI Pro" />
              <p className="text-xs text-[#181818]/60 leading-relaxed max-w-sm">
                {t.footer.office}
              </p>
              <p className="text-xs font-mono text-[#181818]/50">
                {t.footer.contacts}
              </p>
            </div>

            {/* Primary Navigation Column */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#181818]/40 block mb-2">Navigasi</span>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#tantangan" className="hover:underline">{t.nav.challenge}</a></li>
                <li><a href="#dampak" className="hover:underline">{t.nav.outcomes}</a></li>
                <li><a href="#kurikulum" className="hover:underline">{t.nav.curriculum}</a></li>
                <li><a href="#kompetensi" className="hover:underline">{t.nav.competencies}</a></li>
                <li><a href="#mentor" className="hover:underline">{t.nav.mentor}</a></li>
              </ul>
            </div>

            {/* Secondary Column */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#181818]/40 block mb-2">Pendaftaran & Program</span>
              <ul className="space-y-2 text-sm text-[#181818]/70">
                <li><a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">In-House Corporate Cohort</a></li>
                <li><a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Public Executive Cohort</a></li>
                <li><a href="#dokumentasi" className="hover:underline">Video Dokumentasi Sesi</a></li>
                <li><a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Konsultasi via WhatsApp</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#181818]/50 font-mono">
            <p>{t.footer.rights}</p>
            <a href="#tantangan" className="hover:underline">Kembali ke Atas ↑</a>
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
            className="relative w-full max-w-md aspect-[9/16] max-h-[85vh] bg-black overflow-hidden border border-white/20 shadow-2xl"
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
