import React, { useState, useEffect } from 'react';

type Lang = 'id' | 'en';

interface ContentData {
  header: {
    hours: string;
    cta: string;
    menu: string;
    close: string;
  };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrompt: string;
    ctaLink: string;
  };
  intro: {
    catch1: string;
    catch2: string;
    desc: string[];
    items: {
      num: string;
      title: string;
      body: string[];
    }[];
    btnText: string;
  };
  works: {
    titleJp: string;
    titleEn: string;
    lead1: string;
    lead2: string;
    btnText: string;
    enCaption1: string;
    enCaption2: string;
    items: {
      id: string;
      tag: string;
      title: string;
      subtitle: string;
      desc: string;
      img: string;
      enNote?: string[];
    }[];
  };
  event: {
    titleJp: string;
    titleEn: string;
    desc: string[];
    btnText: string;
    pickups: {
      stage: string;
      tag: string;
      title: string;
      meta1Label: string;
      meta1Value: string;
      meta2Label: string;
      meta2Value: string;
      img: string;
    }[];
  };
  sale: {
    titleJp: string;
    titleEn: string;
    tab1: string;
    tab2: string;
    tab1Desc: string;
    tab2Desc: string;
    btnText: string;
    competencies: {
      num: string;
      tag1: string;
      tag2: string;
      title: string;
      desc: string;
      img: string;
    }[];
    audiences: {
      num: string;
      tag1: string;
      tag2: string;
      title: string;
      desc: string;
      img: string;
    }[];
  };
  company1: {
    titleJp: string;
    titleEn: string;
    lead: string;
    links: {
      jp: string;
      en: string;
      desc: string;
    }[];
  };
  company2: {
    titleJp: string;
    titleEn: string;
    lead: string;
    links: {
      jp: string;
      en: string;
      desc: string;
    }[];
  };
  videos: {
    titleJp: string;
    titleEn: string;
    btnText: string;
    items: {
      id: string;
      date: string;
      tag: string;
      title: string;
      duration: string;
    }[];
  };
  footer: {
    ctaTitleJp: string;
    ctaTitleEn: string;
    ctaBtn1: string;
    ctaBtn2: string;
    telTime: string;
    areaLabel: string;
    areaDesc: string;
    addressLabel: string;
    addressBody: string;
    copyright: string;
  };
}

const DATA: Record<Lang, ContentData> = {
  id: {
    header: {
      hours: '09:00–18:00 · Senin–Jumat',
      cta: 'Daftar Workshop',
      menu: 'MENU',
      close: 'CLOSE',
    },
    hero: {
      title1: 'Bukan diganti AI.',
      title2: 'Tapi Memimpin AI.',
      subtitle: 'Workshop 1 Hari · AI Thinking & Innovation untuk Pemimpin dan Profesional',
      ctaPrompt: 'Jadwalkan sesi untuk tim atau organisasi Anda',
      ctaLink: 'Konsultasi & Pendaftaran via WhatsApp',
    },
    intro: {
      catch1: 'Dunia kerja sedang berubah.',
      catch2: 'Cara lama tidak lagi cukup.',
      desc: [
        'Mengandalkan cara kerja konvensional di tengah akselerasi AI bukan lagi pilihan yang aman.',
        'Pemimpin masa depan tidak sekadar menggunakan alat, melainkan mengarahkan empati,',
        'konteks strategis, dan penciptaan nilai baru bagi organisasi.',
      ],
      items: [
        {
          num: '01',
          title: 'Pekerjaan rutin mudah digantikan.',
          body: [
            'Tugas administratif, rekapitulasi laporan, dan analisis standar kini diselesaikan oleh otomasi dalam hitungan detik.',
            'Keunggulan kompetitif berpindah pada kemampuan merumuskan masalah yang tepat.',
          ],
        },
        {
          num: '02',
          title: 'Rasa aman bisa menjadi ilusi.',
          body: [
            'Profesional dan tim yang menguasai orkestrasi AI bekerja berkali lipat lebih cepat dan presisi.',
            'Standar produktivitas lintas industri bergeser secara permanen di setiap level kepemimpinan.',
          ],
        },
        {
          num: '03',
          title: 'Menjadi korban otomasi atau pencipta nilai.',
          body: [
            'AI hanya mengolah pola dari masa lalu, sedangkan manusia menentukan empati, arah, dan keputusan.',
            'Kita memiliki pilihan untuk memimpin AI demi melahirkan solusi nyata yang berdampak.',
          ],
        },
      ],
      btnText: 'Diskusikan Kebutuhan Tim Anda',
    },
    works: {
      titleJp: 'Hasil yang Dicapai',
      titleEn: 'Outcomes / 3H',
      lead1: 'Tiga dampak utama yang dibangun',
      lead2: 'untuk pemimpin dan tim modern.',
      btnText: 'Konsultasi Program',
      enCaption1: 'Building executive AI capability',
      enCaption2: 'with human empathy and strategic clarity',
      items: [
        {
          id: '02',
          tag: 'PILAR 01 · HYPER-PRODUCTIVE',
          title: 'Hyper-Productive: Bekerja lebih fokus dan berdampak.',
          subtitle: 'Mengorkestrasi asisten AI lintas fungsi kerja.',
          desc: 'Memangkas beban pekerjaan teknis berulang hingga puluhan persen sehingga pemimpin dapat berfokus penuh pada pengambilan keputusan strategis.',
          img: 'unsplash-gallery-1.jpg',
        },
        {
          id: '03',
          tag: 'PILAR 02 · HYPER-ITERATIVE',
          title: 'Hyper-Iterative: Validasi ide lebih cepat dan terukur.',
          subtitle: 'Eksplorasi solusi dalam hitungan jam, bukan minggu.',
          desc: 'Mengubah gagasan kasar menjadi prototipe dan simulasi strategi yang langsung diuji terhadap kebutuhan pengguna nyata secara tangkas.',
          img: 'unsplash-process.jpg',
        },
        {
          id: '04',
          tag: 'PILAR 03 · HYPER-IMPACTFUL',
          title: 'Hyper-Impactful: Mengubah peluang menjadi nilai nyata.',
          subtitle: 'Inovasi yang relevan bagi pertumbuhan bisnis.',
          desc: 'Memadukan empati manusia dan ketajaman konteks bisnis untuk melahirkan terobosan layanan maupun efisiensi operasional yang terukur.',
          img: 'unsplash-gallery-2.jpg',
          enNote: [
            'AI processes patterns from the past.',
            'Humans define direction, empathy, and new value.',
          ],
        },
        {
          id: '05',
          tag: 'PRINSIP UTAMA · HUMAN LEADERSHIP',
          title: 'Kolaborasi Lintas Fungsi Berbasis Studi Kasus Nyata.',
          subtitle: 'Praktik langsung dengan tantangan aktual organisasi Anda.',
          desc: 'Setiap peserta tidak hanya mempelajari teori, melainkan langsung membedah alur kerja dan menyusun solusi AI siap pakai.',
          img: 'unsplash-gallery-4.jpg',
        },
      ],
    },
    event: {
      titleJp: 'Program Workshop',
      titleEn: 'Curriculum',
      desc: [
        'Dirancang sebagai perjalanan transformasi utuh, bukan sekadar seminar satu arah.',
        'Dimulai dari pemetaan tantangan sebelum sesi, lokakarya intensif satu hari penuh, hingga pendampingan implementasi pasca-sesi.',
      ],
      btnText: 'Daftar Sesi Berikutnya',
      pickups: [
        {
          stage: 'TAHAP 01 · PRA-SESI (H-14)',
          tag: 'Diagnostic & Alignment',
          title: 'Identifikasi masalah utama dan pemetaan peluang penggunaan AI di unit kerja.',
          meta1Label: 'Fokus Utama',
          meta1Value: 'Asesmen kesiapan & pemilihan studi kasus nyata peserta',
          meta2Label: 'Output Tahap 01',
          meta2Value: 'Dokumen prioritas masalah & target efisiensi tim',
          img: 'unsplash-challenge.jpg',
        },
        {
          stage: 'TAHAP 02 · SESI UTAMA (1 HARI PENUH)',
          tag: 'Intensive Workshop',
          title: 'Praktik intensif AI Thinking, perancangan solusi, dan pembuatan prototipe kerja.',
          meta1Label: 'Metode Belajar',
          meta1Value: 'Simulasi interaktif, studi kasus & eksperimen terarah',
          meta2Label: 'Output Tahap 02',
          meta2Value: 'Prototipe asisten AI & cetak biru solusi siap uji',
          img: 'unsplash-gallery-3.jpg',
        },
        {
          stage: 'TAHAP 03 · IMPLEMENTASI (H+14)',
          tag: 'Execution & Review',
          title: 'Uji coba solusi di lingkungan kerja nyata, evaluasi hasil, dan penyempurnaan alur.',
          meta1Label: 'Pendampingan',
          meta1Value: 'Klinik evaluasi dampak & optimasi adopsi tim',
          meta2Label: 'Output Tahap 03',
          meta2Value: 'Solusi AI tervalidasi yang siap diterapkan berkelanjutan',
          img: 'unsplash-hero.jpg',
        },
      ],
    },
    sale: {
      titleJp: 'Kompetensi & Format',
      titleEn: 'Capabilities',
      tab1: '5 Kompetensi Inti',
      tab2: 'Peserta & Format',
      tab1Desc: 'Lima kapabilitas strategis yang dilatih secara mendalam selama rangkaian workshop berlangsung.',
      tab2Desc: 'Dirancang khusus bagi pengambil keputusan, pimpinan unit, dan tim inovasi lintas industri.',
      btnText: 'Konsultasikan Jadwal & Kuota',
      competencies: [
        {
          num: '01',
          tag1: 'Kompetensi 01',
          tag2: 'Human Empathy',
          title: 'Empati & Pemahaman Masalah',
          desc: 'Menemukan akar persoalan manusia dan pelanggan yang benar-benar layak diselesaikan sebelum memilih teknologi.',
          img: 'unsplash-gallery-1.jpg',
        },
        {
          num: '02',
          tag1: 'Kompetensi 02',
          tag2: 'Critical Framing',
          title: 'Berpikir Kritis & Strategis',
          desc: 'Mengajukan pertanyaan tajam, menguji asumsi bisnis, dan memvalidasi kualitas keluaran AI secara objektif.',
          img: 'unsplash-challenge.jpg',
        },
        {
          num: '03',
          tag1: 'Kompetensi 03',
          tag2: 'AI Orchestration',
          title: 'Kolaborasi Manusia & AI',
          desc: 'Mengorkestrasi berbagai model AI sebagai mitra berpikir strategis untuk memperluas kapasitas analisis tim.',
          img: 'unsplash-process.jpg',
        },
        {
          num: '04',
          tag1: 'Kompetensi 04',
          tag2: 'Rapid Prototyping',
          title: 'Eksperimen & Iterasi Cepat',
          desc: 'Membangun, menguji, dan memperbaiki prototipe solusi kerja dalam siklus waktu yang sangat singkat.',
          img: 'unsplash-gallery-2.jpg',
        },
        {
          num: '05',
          tag1: 'Kompetensi 05',
          tag2: 'Value Creation',
          title: 'Kepemimpinan Penciptaan Nilai',
          desc: 'Menerjemahkan terobosan teknologi menjadi dampak bisnis nyata, efisiensi biaya, dan pertumbuhan organisasi.',
          img: 'unsplash-gallery-4.jpg',
        },
      ],
      audiences: [
        {
          num: 'A1',
          tag1: 'Profil Peserta',
          tag2: 'C-Level & Directors',
          title: 'Pemimpin & Pengambil Keputusan',
          desc: 'Direksi, VP, dan kepala divisi yang menentukan arah strategi bisnis serta transformasi kapabilitas organisasi.',
          img: 'unsplash-hero.jpg',
        },
        {
          num: 'A2',
          tag1: 'Profil Peserta',
          tag2: 'Managers & Leads',
          title: 'Manajer & Profesional Senior',
          desc: 'Pemimpin tim operasional, produk, pemasaran, SDM, dan keuangan yang ingin melipatgandakan dampak kerja.',
          img: 'unsplash-gallery-3.jpg',
        },
        {
          num: 'F1',
          tag1: 'Format Sesi',
          tag2: 'Full-Day Intensive',
          title: '1 Hari Penuh · 09:00–17:00 WIB',
          desc: 'Tersedia dalam format In-House eksklusif untuk perusahaan maupun kelas publik terbatas dengan kurasi peserta.',
          img: 'unsplash-gallery-1.jpg',
        },
      ],
    },
    company1: {
      titleJp: 'Dipandu Oleh',
      titleEn: 'Facilitator',
      lead: 'Aranggi Soemardjan · Praktisi inovasi, pendiri Clevio, dan pelopor pendidikan pemikiran komputasional & AI.',
      links: [
        {
          jp: 'Pendiri Ekosistem Inovasi Clevio',
          en: 'Founder of Clevio & Coach Playground',
          desc: 'Lebih dari satu dekade mendampingi korporasi, pemimpin bisnis, dan talenta teknologi membangun budaya inovasi.',
        },
        {
          jp: 'Inovator AI Terapan Lintas Industri',
          en: 'Agriana.ai & Applied AI Solutions',
          desc: 'Mengembangkan berbagai solusi asisten cerdas dan otomasi proses bisnis yang berorientasi pada dampak manusia.',
        },
        {
          jp: 'Latar Belakang Riset & Kepemimpinan Global',
          en: 'Harvard Seed for Social Innovation Fellow',
          desc: 'Memadukan ketajaman strategi bisnis dengan pendekatan human-centered design dalam setiap sesi pendampingan.',
        },
      ],
    },
    company2: {
      titleJp: 'Rekam Jejak',
      titleEn: 'Recognition',
      lead: 'Pengalaman nyata mendampingi transformasi digital dan meraih apresiasi inovasi nasional maupun internasional.',
      links: [
        {
          jp: 'Profil SOSOK Harian Kompas',
          en: 'Featured National Innovation Figure',
          desc: 'Diangkat dalam rubrik prestisius SOSOK Harian Kompas atas dedikasi membangun literasi kreator teknologi di Indonesia.',
        },
        {
          jp: 'Anugerah Ristekdikti & Apresiasi Nasional',
          en: 'National Research & Innovation Awardee',
          desc: 'Pengakuan atas kontribusi metodologi pembelajaran berbasis proyek dan pemecahan masalah nyata.',
        },
        {
          jp: 'Pendekatan Human-First AI Thinking',
          en: '100% Case-Study Driven Workshop',
          desc: 'Dirancang agar peserta dari latar belakang non-teknis sekalipun mampu memimpin inisiatif AI dengan percaya diri.',
        },
      ],
    },
    videos: {
      titleJp: 'Dokumentasi Sesi',
      titleEn: 'Session Highlights',
      btnText: 'Tonton Cuplikan Lengkap',
      items: [
        {
          id: 'p28s931M61c',
          date: 'VIDEO 01',
          tag: 'Executive Insight',
          title: 'Mengapa Pemimpin Perlu Menguasai AI Thinking, Bukan Sekadar Prompting',
          duration: 'Cuplikan Dokumentasi · YouTube Shorts',
        },
        {
          id: 'gR9A7eA4wP0',
          date: 'VIDEO 02',
          tag: 'Workshop Atmosphere',
          title: 'Suasana Kolaborasi, Eksperimen Cepat & Diskusi Strategis Clevio AI Pro',
          duration: 'Cuplikan Dokumentasi · YouTube Shorts',
        },
      ],
    },
    footer: {
      ctaTitleJp: 'Pendaftaran & Konsultasi',
      ctaTitleEn: 'Contact Us',
      ctaBtn1: 'Hubungi via WhatsApp',
      ctaBtn2: 'Jadwalkan In-House',
      telTime: 'Senin–Jumat 09:00–18:00 WIB (Respons Cepat via WhatsApp)',
      areaLabel: 'Format Penyelenggaraan Workshop',
      areaDesc: 'Tersedia untuk sesi tatap muka eksklusif di Jakarta & kota besar di Indonesia, serta sesi Hybrid / In-House khusus organisasi.',
      addressLabel: 'Clevio AI Pro · Executive AI Thinking & Innovation',
      addressBody: 'Jakarta, Indonesia · WhatsApp: +62 822-2111-8860 · Web: clev.io/pro',
      copyright: '© Clevio AI Pro. All Rights Reserved.',
    },
  },
  en: {
    header: {
      hours: '09:00–18:00 · Mon–Fri',
      cta: 'Register Now',
      menu: 'MENU',
      close: 'CLOSE',
    },
    hero: {
      title1: 'Not replaced by AI.',
      title2: 'Leading with AI.',
      subtitle: '1-Day Executive Workshop · AI Thinking & Innovation for Leaders and Professionals',
      ctaPrompt: 'Bring this program to your leadership team',
      ctaLink: 'Inquire & Register via WhatsApp',
    },
    intro: {
      catch1: 'The workplace is shifting.',
      catch2: 'Old playbooks no longer suffice.',
      desc: [
        'Relying on conventional workflows amid rapid AI acceleration is no longer a safe strategy.',
        'Future-ready leaders do not merely operate tools; they direct human empathy,',
        'strategic judgment, and new value creation across their organizations.',
      ],
      items: [
        {
          num: '01',
          title: 'Routine work is rapidly automated.',
          body: [
            'Administrative tasks, standard reporting, and baseline analysis are now completed by automation in seconds.',
            'True competitive advantage shifts toward framing the right high-leverage problems.',
          ],
        },
        {
          num: '02',
          title: 'Standing still is an illusion of safety.',
          body: [
            'Professionals and teams who orchestrate AI operate with exponentially greater speed and clarity.',
            'Productivity benchmarks are shifting permanently across every management layer.',
          ],
        },
        {
          num: '03',
          title: 'Be disrupted by automation, or create new value.',
          body: [
            'AI processes patterns from the past; humans define empathy, strategic direction, and judgment.',
            'We can choose to lead AI intentionally to build solutions that deliver measurable impact.',
          ],
        },
      ],
      btnText: 'Discuss Your Team Requirements',
    },
    works: {
      titleJp: 'Key Outcomes',
      titleEn: 'Outcomes / 3H',
      lead1: 'Three core pillars designed for',
      lead2: 'modern leaders and high-impact teams.',
      btnText: 'Program Inquiry',
      enCaption1: 'Building executive AI capability',
      enCaption2: 'with human empathy and strategic clarity',
      items: [
        {
          id: '02',
          tag: 'PILLAR 01 · HYPER-PRODUCTIVE',
          title: 'Hyper-Productive: Work with sharper focus and higher leverage.',
          subtitle: 'Orchestrate AI assistants across core workflows.',
          desc: 'Eliminate repetitive operational bottlenecks so leaders and teams can dedicate their energy to high-stakes strategic decisions.',
          img: 'unsplash-gallery-1.jpg',
        },
        {
          id: '03',
          tag: 'PILLAR 02 · HYPER-ITERATIVE',
          title: 'Hyper-Iterative: Validate ideas faster with measurable clarity.',
          subtitle: 'Explore and test solutions in hours, not weeks.',
          desc: 'Transform raw concepts into working prototypes and strategic simulations tested directly against real user needs.',
          img: 'unsplash-process.jpg',
        },
        {
          id: '04',
          tag: 'PILLAR 03 · HYPER-IMPACTFUL',
          title: 'Hyper-Impactful: Turn emerging opportunities into real value.',
          subtitle: 'Innovation grounded in business relevance.',
          desc: 'Combine deep human empathy with commercial acumen to launch service breakthroughs and measurable operational gains.',
          img: 'unsplash-gallery-2.jpg',
          enNote: [
            'AI processes patterns from the past.',
            'Humans define direction, empathy, and new value.',
          ],
        },
        {
          id: '05',
          tag: 'CORE PRINCIPLE · HUMAN LEADERSHIP',
          title: 'Cross-Functional Collaboration Built on Real Case Studies.',
          subtitle: 'Hands-on execution with your actual business challenges.',
          desc: 'Participants go beyond theory to dissect live organizational workflows and architect ready-to-deploy AI solutions.',
          img: 'unsplash-gallery-4.jpg',
        },
      ],
    },
    event: {
      titleJp: 'Program Structure',
      titleEn: 'Curriculum',
      desc: [
        'Architected as a complete transformation journey rather than a passive one-way seminar.',
        'Spanning pre-session diagnostic mapping, an intensive full-day workshop, and post-session implementation review.',
      ],
      btnText: 'Reserve Next Cohort',
      pickups: [
        {
          stage: 'STAGE 01 · PRE-SESSION (D-14)',
          tag: 'Diagnostic & Alignment',
          title: 'Identify priority bottlenecks and map high-value AI opportunities across your unit.',
          meta1Label: 'Core Focus',
          meta1Value: 'Readiness assessment & participant case selection',
          meta2Label: 'Stage 01 Output',
          meta2Value: 'Priority problem brief & team efficiency targets',
          img: 'unsplash-challenge.jpg',
        },
        {
          stage: 'STAGE 02 · CORE WORKSHOP (1 FULL DAY)',
          tag: 'Intensive Workshop',
          title: 'Hands-on AI Thinking, solution architecture, and rapid workflow prototyping.',
          meta1Label: 'Learning Method',
          meta1Value: 'Interactive simulation, live case studies & guided sprints',
          meta2Label: 'Stage 02 Output',
          meta2Value: 'Working AI assistant prototype & testable solution blueprint',
          img: 'unsplash-gallery-3.jpg',
        },
        {
          stage: 'STAGE 03 · IMPLEMENTATION (D+14)',
          tag: 'Execution & Review',
          title: 'Deploy solutions in real workflows, evaluate outcomes, and refine team adoption.',
          meta1Label: 'Mentorship',
          meta1Value: 'Impact evaluation clinic & workflow optimization',
          meta2Label: 'Stage 03 Output',
          meta2Value: 'Validated AI solution ready for sustained scaling',
          img: 'unsplash-hero.jpg',
        },
      ],
    },
    sale: {
      titleJp: 'Competencies & Format',
      titleEn: 'Capabilities',
      tab1: '5 Core Competencies',
      tab2: 'Audience & Format',
      tab1Desc: 'Five strategic capabilities practiced intensively throughout the Clevio AI Pro workshop.',
      tab2Desc: 'Tailored for decision-makers, business unit heads, and cross-functional innovation teams.',
      btnText: 'Check Schedule & Availability',
      competencies: [
        {
          num: '01',
          tag1: 'Competency 01',
          tag2: 'Human Empathy',
          title: 'Empathy & Problem Discovery',
          desc: 'Uncover the root human and customer problems truly worth solving before selecting any technology.',
          img: 'unsplash-gallery-1.jpg',
        },
        {
          num: '02',
          tag1: 'Competency 02',
          tag2: 'Critical Framing',
          title: 'Critical & Strategic Thinking',
          desc: 'Ask incisive questions, challenge business assumptions, and objectively validate AI-generated outputs.',
          img: 'unsplash-challenge.jpg',
        },
        {
          num: '03',
          tag1: 'Competency 03',
          tag2: 'AI Orchestration',
          title: 'Human & AI Collaboration',
          desc: 'Orchestrate multiple AI models as strategic thinking partners to expand your team’s analytical capacity.',
          img: 'unsplash-process.jpg',
        },
        {
          num: '04',
          tag1: 'Competency 04',
          tag2: 'Rapid Prototyping',
          title: 'Rapid Experimentation & Iteration',
          desc: 'Build, test, and refine working solution prototypes within tightly compressed feedback loops.',
          img: 'unsplash-gallery-2.jpg',
        },
        {
          num: '05',
          tag1: 'Competency 05',
          tag2: 'Value Creation',
          title: 'Value Creation Leadership',
          desc: 'Translate technological capability into measurable business impact, cost efficiency, and organizational growth.',
          img: 'unsplash-gallery-4.jpg',
        },
      ],
      audiences: [
        {
          num: 'A1',
          tag1: 'Participant Profile',
          tag2: 'C-Level & Directors',
          title: 'Executives & Decision Makers',
          desc: 'Board members, VPs, and division heads shaping corporate strategy and organizational capability transformation.',
          img: 'unsplash-hero.jpg',
        },
        {
          num: 'A2',
          tag1: 'Participant Profile',
          tag2: 'Managers & Leads',
          title: 'Senior Managers & Professionals',
          desc: 'Leaders across operations, product, marketing, HR, and finance seeking exponential workflow impact.',
          img: 'unsplash-gallery-3.jpg',
        },
        {
          num: 'F1',
          tag1: 'Session Format',
          tag2: 'Full-Day Intensive',
          title: '1 Full Day · 09:00–17:00 WIB',
          desc: 'Available as exclusive corporate In-House cohorts or curated limited-seat executive public sessions.',
          img: 'unsplash-gallery-1.jpg',
        },
      ],
    },
    company1: {
      titleJp: 'Led By',
      titleEn: 'Facilitator',
      lead: 'Aranggi Soemardjan · Innovation practitioner, founder of Clevio, and pioneer in computational & AI thinking education.',
      links: [
        {
          jp: 'Founder of Clevio Innovation Ecosystem',
          en: 'Founder of Clevio & Coach Playground',
          desc: 'Over a decade advising enterprises, business leaders, and technology talent on building sustainable innovation cultures.',
        },
        {
          jp: 'Applied Cross-Industry AI Innovator',
          en: 'Agriana.ai & Applied AI Solutions',
          desc: 'Architecting intelligent assistant ecosystems and business workflow automation centered on human impact.',
        },
        {
          jp: 'Global Leadership & Research Foundation',
          en: 'Harvard Seed for Social Innovation Fellow',
          desc: 'Blending executive business strategy with human-centered design in every advisory and workshop engagement.',
        },
      ],
    },
    company2: {
      titleJp: 'Track Record',
      titleEn: 'Recognition',
      lead: 'Proven experience guiding digital transformation and earning national and international innovation recognition.',
      links: [
        {
          jp: 'Kompas Daily SOSOK Feature',
          en: 'Featured National Innovation Figure',
          desc: 'Profiled in Kompas Daily’s prestigious SOSOK column for pioneering technology creator literacy in Indonesia.',
        },
        {
          jp: 'Ristekdikti National Innovation Award',
          en: 'National Research & Innovation Awardee',
          desc: 'Recognized for project-based learning methodologies focused on real-world problem solving.',
        },
        {
          jp: 'Human-First AI Thinking Methodology',
          en: '100% Case-Study Driven Workshop',
          desc: 'Designed so leaders from both non-technical and technical backgrounds can spearhead AI initiatives with confidence.',
        },
      ],
    },
    videos: {
      titleJp: 'Session Highlights',
      titleEn: 'Documentation',
      btnText: 'Watch Full Highlights',
      items: [
        {
          id: 'p28s931M61c',
          date: 'VIDEO 01',
          tag: 'Executive Insight',
          title: 'Why Leaders Must Master AI Thinking Rather Than Mere Prompting',
          duration: 'Session Highlight · YouTube Shorts',
        },
        {
          id: 'gR9A7eA4wP0',
          date: 'VIDEO 02',
          tag: 'Workshop Atmosphere',
          title: 'Inside Clevio AI Pro: Rapid Experimentation & Strategic Group Sprints',
          duration: 'Session Highlight · YouTube Shorts',
        },
      ],
    },
    footer: {
      ctaTitleJp: 'Registration & Inquiry',
      ctaTitleEn: 'Contact Us',
      ctaBtn1: 'Contact via WhatsApp',
      ctaBtn2: 'Book In-House Cohort',
      telTime: 'Mon–Fri 09:00–18:00 WIB (Fast Response via WhatsApp)',
      areaLabel: 'Workshop Delivery Formats',
      areaDesc: 'Available for exclusive in-person cohorts in Jakarta and major Indonesian cities, as well as tailored Hybrid / In-House corporate sessions.',
      addressLabel: 'Clevio AI Pro · Executive AI Thinking & Innovation',
      addressBody: 'Jakarta, Indonesia · WhatsApp: +62 822-2111-8860 · Web: clev.io/pro',
      copyright: '© Clevio AI Pro. All Rights Reserved.',
    },
  },
};

const WA_URL =
  'https://wa.me/6282221118860?text=Halo%20Tim%20Clevio%20AI%20Pro%2C%20saya%20ingin%20berkonsultasi%20mengenai%20Workshop%20Executive%20AI%20Thinking%20%26%20Innovation.';

const MARQUEE_SLIDES = [
  { img: 'unsplash-gallery-1.jpg', wide: true, label: 'Executive Alignment' },
  { img: 'unsplash-process.jpg', wide: false, label: 'AI Orchestration' },
  { img: 'unsplash-gallery-2.jpg', wide: false, label: 'Rapid Prototyping' },
  { img: 'unsplash-gallery-3.jpg', wide: true, label: 'Collaborative Sprint' },
  { img: 'unsplash-challenge.jpg', wide: false, label: 'Critical Framing' },
  { img: 'unsplash-gallery-4.jpg', wide: true, label: 'Value Creation' },
];

export default function ClevioPro() {
  const [lang, setLang] = useState<Lang>('id');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'tab1' | 'tab2'>('tab1');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const t = DATA[lang];
  const baseUrl = import.meta.env.BASE_URL;
  const asset = (file: string) => `${baseUrl}clevio-pro/${file}`;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen || activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, activeVideo]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nkg-root">
      <style>{`
        .nkg-root {
          --clr-primary-default: #202020;
          --clr-primary-dark: #0F0F0F;
          --clr-primary-light: #4A4A4A;
          --clr-secondary-default: #AD8A72;
          --clr-secondary-dark: #5F433E;
          --clr-secondary-light: #D6B996;
          --clr-bg-01: #F2EDE7;
          --clr-bg-02: #E9E1DA;
          --clr-text-primary: #333333;
          --clr-text-secondary: #757575;
          --clr-text-placeholder: #BDBDBD;
          --clr-text-light: #F5F2EE;
          --clr-wht: #FFFFFF;
          --clr-blk: #0F0F0F;
          --font-jp-heading: 'Noto Serif', Georgia, serif;
          --font-jp-text: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-en-heading: 'Cardo', Georgia, serif;
          --font-en-text: 'Jost', sans-serif;
          background-color: var(--clr-bg-01);
          color: var(--clr-text-primary);
          font-family: var(--font-jp-text);
          line-height: 1.9;
          letter-spacing: 0.04em;
          overflow-x: hidden;
        }

        /* Subtle Japanese paper grain texture matching nakagawa-corp.com */
        .nkg-paper {
          background-color: var(--clr-bg-01);
          background-image: radial-gradient(rgba(32, 32, 32, 0.035) 1px, transparent 0);
          background-size: 24px 24px;
        }
        .nkg-paper-alt {
          background-color: var(--clr-bg-02);
          background-image: radial-gradient(rgba(32, 32, 32, 0.04) 1px, transparent 0);
          background-size: 24px 24px;
        }

        /* Nakagawa Dual Heading (.ttl-dual) */
        .nkg-ttl-dual {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .nkg-ttl-dual.is-center {
          align-items: center;
          text-align: center;
        }
        .nkg-ttl-dual .font-jp {
          font-family: var(--font-jp-heading);
          font-size: clamp(1.85rem, 3.2vw, 3rem);
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0.12em;
          color: var(--clr-primary-default);
        }
        .nkg-ttl-dual .font-en {
          font-family: var(--font-en-heading);
          font-size: clamp(0.875rem, 1.1vw, 1.05rem);
          font-style: italic;
          letter-spacing: 0.14em;
          color: var(--clr-secondary-default);
        }

        /* Nakagawa Signature Pill-Arrow Button (.btn a) */
        .nkg-btn {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.75rem;
          padding: 0.5rem 0;
          color: var(--clr-primary-default);
          font-family: var(--font-jp-text);
          font-size: 0.9375rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-decoration: none;
          transition: color 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
        }
        .nkg-btn-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 1.625rem;
          border-radius: 999px;
          background-color: var(--clr-primary-default);
          border: 1px solid var(--clr-primary-default);
          color: var(--clr-wht);
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          flex-shrink: 0;
        }
        .nkg-btn:hover .nkg-btn-pill {
          background-color: transparent;
          color: var(--clr-primary-default);
          transform: translateX(4px);
        }

        /* Light variant for dark backgrounds (.home-intro__btn) */
        .nkg-btn-light {
          color: var(--clr-text-light);
        }
        .nkg-btn-light .nkg-btn-pill {
          background-color: var(--clr-text-light);
          border-color: var(--clr-text-light);
          color: var(--clr-primary-default);
        }
        .nkg-btn-light:hover .nkg-btn-pill {
          background-color: transparent;
          color: var(--clr-text-light);
        }

        /* Solid Primary Button (.btn-priamry) */
        .nkg-btn-solid {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.15rem 1.75rem;
          background-color: var(--clr-primary-default);
          border: 1px solid var(--clr-primary-default);
          color: var(--clr-wht);
          font-size: 0.9375rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nkg-btn-solid:hover {
          background-color: var(--clr-secondary-dark);
          border-color: var(--clr-secondary-dark);
        }

        /* Animated vertical scroll line (.home-intro__scroll & .home-works__scroll) */
        @keyframes nkg-scroll-line {
          0%, 5% {
            clip-path: inset(0 0 0 0);
          }
          35% {
            clip-path: inset(100% 0 0 0);
          }
          36% {
            clip-path: inset(0 0 100% 0);
          }
          90%, 100% {
            clip-path: inset(0 0 0 0);
          }
        }
        .nkg-scroll-indicator {
          width: 1px;
          height: 4.25rem;
          animation: nkg-scroll-line 2.6s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Continuous Marquee (.home-event__slides) */
        @keyframes nkg-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .nkg-marquee-track {
          display: flex;
          align-items: flex-end;
          gap: 2.25rem;
          width: max-content;
          animation: nkg-marquee 42s linear infinite;
        }
        .nkg-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .nkg-scroll-indicator,
          .nkg-marquee-track {
            animation: none;
          }
        }
      `}</style>

      {/* =====================================================================
          HEADER (.header.header-main)
      ===================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          menuOpen
            ? 'bg-transparent text-[#202020]'
            : scrolled
              ? 'bg-[#F2EDE7]/95 backdrop-blur-md text-[#202020] shadow-[0_1px_0_rgba(32,32,32,0.08)] py-3.5'
              : 'bg-gradient-to-b from-black/60 to-transparent text-[#F5F2EE] py-6'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-5 sm:px-10 lg:px-14 flex items-center justify-between">
          {/* Brand Logo (.header--logo) */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Clevio AI Pro"
          >
            <span className="flex items-center gap-1" aria-hidden="true">
              <span
                className="block w-2.5 h-5 rounded-[2px] transition-colors duration-300"
                style={{
                  backgroundColor: menuOpen || scrolled ? '#202020' : '#F5F2EE',
                  transform: 'skewY(-22deg)',
                }}
              />
              <span
                className="block w-2.5 h-5 rounded-[2px] bg-[#AD8A72]"
                style={{ transform: 'skewY(22deg)' }}
              />
            </span>
            <span className="flex items-baseline gap-2">
              <span
                className="text-xl sm:text-2xl tracking-[0.06em] font-normal"
                style={{ fontFamily: 'var(--font-en-text)' }}
              >
                CLEVIO
              </span>
              <span
                className="text-xs sm:text-sm tracking-[0.18em] uppercase opacity-80"
                style={{ fontFamily: 'var(--font-en-heading)', fontStyle: 'italic' }}
              >
                AI Pro
              </span>
            </span>
          </a>

          {/* Right Actions (.header--actions) */}
          <div className="flex items-center gap-4 sm:gap-8 lg:gap-10">
            {/* Phone & Hours (.header--tel) */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden xl:flex flex-col items-end pb-1 border-b transition-opacity hover:opacity-75 ${
                menuOpen || scrolled ? 'border-[#202020]/30' : 'border-white/30'
              }`}
            >
              <span
                className="text-base tracking-[0.08em] font-medium leading-none"
                style={{ fontFamily: 'var(--font-en-text)' }}
              >
                +62 822-2111-8860
              </span>
              <span className="text-[11px] tracking-[0.08em] opacity-75 mt-1">
                {t.header.hours}
              </span>
            </a>

            {/* Language Switcher (ID / EN) */}
            <div
              className={`flex items-center text-xs tracking-[0.14em] border rounded-full p-0.5 ${
                menuOpen || scrolled
                  ? 'border-[#202020]/25 text-[#202020]'
                  : 'border-white/30 text-[#F5F2EE]'
              }`}
              style={{ fontFamily: 'var(--font-en-text)' }}
              role="group"
              aria-label="Language switcher"
            >
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                  lang === 'id'
                    ? menuOpen || scrolled
                      ? 'bg-[#202020] text-[#F5F2EE]'
                      : 'bg-[#F5F2EE] text-[#202020]'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                  lang === 'en'
                    ? menuOpen || scrolled
                      ? 'bg-[#202020] text-[#F5F2EE]'
                      : 'bg-[#F5F2EE] text-[#202020]'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                EN
              </button>
            </div>

            {/* Header CTA (.header__btn.btn-cta) */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-3 px-5 py-2.5 text-xs tracking-[0.12em] uppercase transition-all ${
                menuOpen || scrolled
                  ? 'bg-[#202020] text-[#F5F2EE] hover:bg-[#5F433E]'
                  : 'bg-[#F5F2EE] text-[#202020] hover:bg-[#D6B996]'
              }`}
            >
              <span>{t.header.cta}</span>
              <span aria-hidden="true">→</span>
            </a>

            {/* Menu Button (.header--menu_btn) */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2.5 py-2 cursor-pointer group focus:outline-none"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125 ${
                  menuOpen
                    ? 'bg-[#AD8A72]'
                    : scrolled
                      ? 'bg-[#202020]'
                      : 'bg-[#F5F2EE]'
                }`}
              />
              <span
                className="text-xs sm:text-sm tracking-[0.18em] font-medium"
                style={{ fontFamily: 'var(--font-en-text)' }}
              >
                {menuOpen ? t.header.close : t.header.menu}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================================
          FULL-SCREEN ARCHITECTURAL MODAL MENU (#modal)
      ===================================================================== */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-500 overflow-y-auto ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-14 pt-32 pb-16 min-h-screen flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Multi-column Navigation (.modal__nav) */}
            <nav className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex flex-col gap-6">
                <p
                  className="text-xs tracking-[0.2em] uppercase text-[#AD8A72]"
                  style={{ fontFamily: 'var(--font-en-text)' }}
                >
                  01 / Program & Architecture
                </p>
                <ul className="flex flex-col gap-4 border-l border-[#202020]/15 pl-5">
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('tantangan')}
                      className="text-left group cursor-pointer"
                    >
                      <span
                        className="block text-xl text-[#202020] group-hover:text-[#AD8A72] transition-colors"
                        style={{ fontFamily: 'var(--font-jp-heading)' }}
                      >
                        {t.intro.catch1}
                      </span>
                      <span
                        className="text-xs tracking-[0.14em] text-[#757575] uppercase"
                        style={{ fontFamily: 'var(--font-en-text)' }}
                      >
                        The Shifting Workplace
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('dampak')}
                      className="text-left group cursor-pointer"
                    >
                      <span
                        className="block text-xl text-[#202020] group-hover:text-[#AD8A72] transition-colors"
                        style={{ fontFamily: 'var(--font-jp-heading)' }}
                      >
                        {t.works.titleJp} (3H)
                      </span>
                      <span
                        className="text-xs tracking-[0.14em] text-[#757575] uppercase"
                        style={{ fontFamily: 'var(--font-en-text)' }}
                      >
                        Hyper-Productive · Iterative · Impactful
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('program')}
                      className="text-left group cursor-pointer"
                    >
                      <span
                        className="block text-xl text-[#202020] group-hover:text-[#AD8A72] transition-colors"
                        style={{ fontFamily: 'var(--font-jp-heading)' }}
                      >
                        {t.event.titleJp}
                      </span>
                      <span
                        className="text-xs tracking-[0.14em] text-[#757575] uppercase"
                        style={{ fontFamily: 'var(--font-en-text)' }}
                      >
                        H-14 Pre-Session · 1-Day Core · H+14 Review
                      </span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <p
                  className="text-xs tracking-[0.2em] uppercase text-[#AD8A72]"
                  style={{ fontFamily: 'var(--font-en-text)' }}
                >
                  02 / Capabilities & Leadership
                </p>
                <ul className="flex flex-col gap-4 border-l border-[#202020]/15 pl-5">
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('kompetensi')}
                      className="text-left group cursor-pointer"
                    >
                      <span
                        className="block text-xl text-[#202020] group-hover:text-[#AD8A72] transition-colors"
                        style={{ fontFamily: 'var(--font-jp-heading)' }}
                      >
                        {t.sale.titleJp}
                      </span>
                      <span
                        className="text-xs tracking-[0.14em] text-[#757575] uppercase"
                        style={{ fontFamily: 'var(--font-en-text)' }}
                      >
                        5 Core AI Thinking Competencies
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('mentor')}
                      className="text-left group cursor-pointer"
                    >
                      <span
                        className="block text-xl text-[#202020] group-hover:text-[#AD8A72] transition-colors"
                        style={{ fontFamily: 'var(--font-jp-heading)' }}
                      >
                        Aranggi Soemardjan
                      </span>
                      <span
                        className="text-xs tracking-[0.14em] text-[#757575] uppercase"
                        style={{ fontFamily: 'var(--font-en-text)' }}
                      >
                        Facilitator & Track Record
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('dokumentasi')}
                      className="text-left group cursor-pointer"
                    >
                      <span
                        className="block text-xl text-[#202020] group-hover:text-[#AD8A72] transition-colors"
                        style={{ fontFamily: 'var(--font-jp-heading)' }}
                      >
                        {t.videos.titleJp}
                      </span>
                      <span
                        className="text-xs tracking-[0.14em] text-[#757575] uppercase"
                        style={{ fontFamily: 'var(--font-en-text)' }}
                      >
                        Video Documentation
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Modal Right Contact Card (.modal__cta) */}
            <div className="lg:col-span-4 bg-[#F2EDE7] p-8 sm:p-10 flex flex-col gap-6">
              <div className="nkg-ttl-dual">
                <span className="font-jp !text-2xl">{t.footer.ctaTitleJp}</span>
                <span className="font-en">{t.footer.ctaTitleEn}</span>
              </div>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="nkg-btn-solid">
                <span>{t.footer.ctaBtn1}</span>
                <span aria-hidden="true">→</span>
              </a>
              <div className="pt-4 border-t border-[#202020]/15 flex flex-col gap-1">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-medium tracking-[0.06em] text-[#202020]"
                  style={{ fontFamily: 'var(--font-en-text)' }}
                >
                  +62 822-2111-8860
                </a>
                <p className="text-xs text-[#757575]">{t.footer.telTime}</p>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-[#202020]/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#757575]">
            <span>{t.footer.addressLabel}</span>
            <span>{t.footer.copyright}</span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          HERO & INTRO WRAPPER (.home-hero-wrp)
          Fixed full-viewport visual backdrop + scrolling dark narrative overlay
      ===================================================================== */}
      <div className="relative bg-[#0F0F0F] text-[#F5F2EE]">
        {/* Sticky Full-Screen Architectural Backdrop (.home-hero) */}
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0">
          <img
            src={asset('unsplash-hero.jpg')}
            alt="Clevio AI Pro Executive Architecture"
            className="w-full h-full object-cover object-center scale-105 opacity-45"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.45) 50%, rgba(15,15,15,0.92) 100%)',
            }}
          />
        </div>

        {/* Hero Foreground Overlay (.home-hero__txtarea + .home-hero__cta) */}
        <div className="relative z-10 -mt-[100vh]">
          <section className="min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 sm:px-12 lg:px-20 max-w-[1720px] mx-auto">
            <div className="my-auto py-16 max-w-4xl">
              <p
                className="text-xs sm:text-sm tracking-[0.24em] uppercase text-[#D6B996] mb-6"
                style={{ fontFamily: 'var(--font-en-text)' }}
              >
                Executive AI Thinking &amp; Innovation
              </p>
              <h1
                className="text-3xl sm:text-5xl lg:text-[3.5rem] font-normal leading-[1.45] tracking-[0.1em] text-[#F5F2EE] mb-8"
                style={{ fontFamily: 'var(--font-jp-heading)' }}
              >
                <span className="block">{t.hero.title1}</span>
                <span className="block text-[#D6B996]">{t.hero.title2}</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#F5F2EE]/85 tracking-[0.08em] leading-[2] max-w-2xl">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Bottom bar with Scroll Line & Floating Right Hero CTA (.home-hero__cta) */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pt-6">
              <div className="flex items-center gap-4">
                <span className="nkg-scroll-indicator bg-[#F5F2EE]" aria-hidden="true" />
                <span
                  className="text-[11px] tracking-[0.22em] uppercase text-[#F5F2EE]/70"
                  style={{ fontFamily: 'var(--font-en-text)' }}
                >
                  Scroll to explore
                </span>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 bg-black/45 backdrop-blur-sm px-6 py-4 border-l-2 border-[#AD8A72]">
                <p className="text-xs tracking-[0.06em] text-[#F5F2EE]/80">{t.hero.ctaPrompt}</p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm sm:text-base font-medium tracking-[0.08em] text-[#F5F2EE] border-b border-[#F5F2EE] pb-1 hover:text-[#D6B996] hover:border-[#D6B996] transition-colors"
                >
                  <span>{t.hero.ctaLink}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>

          {/* =================================================================
              INTRO SECTION (.home-intro)
              Centered Poetic Lead + Vertical Dividers + 01, 02, 03 Blocks
          ================================================================= */}
          <section
            id="tantangan"
            className="relative z-10 py-28 sm:py-40 lg:py-48 px-6 sm:px-10 bg-gradient-to-b from-transparent via-[#0F0F0F]/90 to-[#0F0F0F]"
          >
            <div className="max-w-[760px] mx-auto flex flex-col items-center text-center gap-14">
              {/* Lead Block (.home-intro__lead) */}
              <div className="flex flex-col items-center gap-8">
                <h2
                  className="text-2xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.55] tracking-[0.12em] text-[#F5F2EE]"
                  style={{ fontFamily: 'var(--font-jp-heading)' }}
                >
                  <span className="block">{t.intro.catch1}</span>
                  <span className="block text-[#D6B996] mt-1">{t.intro.catch2}</span>
                </h2>
                <div className="flex flex-col gap-2 text-sm sm:text-base lg:text-[1.0625rem] text-[#F5F2EE]/85 leading-[2.2] tracking-[0.06em]">
                  {t.intro.desc.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>

              <span className="block w-px h-12 bg-[#BDBDBD]/45" aria-hidden="true" />

              {/* Numbered Items 01, 02, 03 (.home-intro__item) */}
              {t.intro.items.map((item) => (
                <React.Fragment key={item.num}>
                  <div className="flex flex-col items-center gap-4 max-w-[680px]">
                    <div className="flex flex-col items-center gap-1">
                      <p
                        className="text-2xl sm:text-3xl italic text-[#D6B996]"
                        style={{ fontFamily: 'var(--font-en-heading)' }}
                      >
                        {item.num}
                      </p>
                      <h3
                        className="text-xl sm:text-2xl lg:text-[1.75rem] font-normal leading-[1.6] tracking-[0.1em] text-[#F5F2EE]"
                        style={{ fontFamily: 'var(--font-jp-heading)' }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-1.5 text-sm sm:text-base text-[#F5F2EE]/80 leading-[2] tracking-[0.06em]">
                      {item.body.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <span className="block w-px h-12 bg-[#BDBDBD]/45" aria-hidden="true" />
                </React.Fragment>
              ))}

              {/* Intro Bottom CTA (.home-intro__btn) */}
              <div className="pt-2">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nkg-btn nkg-btn-light"
                >
                  <span>{t.intro.btnText}</span>
                  <span className="nkg-btn-pill" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* =====================================================================
          ASYMMETRIC PARALLAX SHOWCASE (.home-works -> Dampak 3H)
      ===================================================================== */}
      <section id="dampak" className="nkg-paper py-28 sm:py-36 lg:py-48 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
          {/* .home-works__head */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2 lg:pt-10">
              <div>
                <h2 className="nkg-ttl-dual mb-10">
                  <span className="font-jp">{t.works.titleJp}</span>
                  <span className="font-en">{t.works.titleEn}</span>
                </h2>
                <p
                  className="text-lg sm:text-xl leading-[1.9] tracking-[0.08em] text-[#202020] mb-10"
                  style={{ fontFamily: 'var(--font-jp-heading)' }}
                >
                  {t.works.lead1}
                  <br />
                  {t.works.lead2}
                </p>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="nkg-btn">
                  <span>{t.works.btnText}</span>
                  <span className="nkg-btn-pill" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>

              <div className="hidden lg:flex items-end justify-between pt-20 pr-8">
                <span className="nkg-scroll-indicator bg-[#202020]" aria-hidden="true" />
                <p
                  className="text-[11px] tracking-[0.14em] uppercase text-right text-[#757575] leading-relaxed"
                  style={{ fontFamily: 'var(--font-en-text)' }}
                >
                  {t.works.enCaption1}
                  <br />
                  {t.works.enCaption2}
                </p>
              </div>
            </div>

            {/* Large Right Image (.home-works__head-img--01) */}
            <div className="lg:col-span-7 overflow-hidden">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#E9E1DA]">
                <img
                  src={asset('unsplash-hero.jpg')}
                  alt="Clevio AI Pro Executive Collaboration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* .home-works__body — Staggered Asymmetric Editorial Gallery for 3H */}
          <div className="mt-20 sm:mt-32 lg:mt-44 flex flex-col gap-20 lg:gap-32">
            {/* Row 1: Item 02 (Left Wide) + Item 03 (Right Vertical Split) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Item 02: Hyper-Productive */}
              <article className="lg:col-span-6 lg:mt-16">
                <div className="aspect-[4/3] overflow-hidden bg-[#E9E1DA]">
                  <img
                    src={asset(t.works.items[0].img)}
                    alt={t.works.items[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="pt-7 sm:pl-8 max-w-xl">
                  <p
                    className="text-xs tracking-[0.16em] uppercase text-[#AD8A72] mb-2"
                    style={{ fontFamily: 'var(--font-en-text)' }}
                  >
                    {t.works.items[0].tag}
                  </p>
                  <h3
                    className="text-xl sm:text-2xl text-[#202020] leading-[1.5] tracking-[0.06em] mb-3"
                    style={{ fontFamily: 'var(--font-jp-heading)' }}
                  >
                    {t.works.items[0].title}
                  </h3>
                  <p className="text-sm text-[#757575] leading-[1.9]">{t.works.items[0].desc}</p>
                </div>
              </article>

              {/* Item 03: Hyper-Iterative */}
              <article className="lg:col-span-5 lg:col-start-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-6 aspect-[3/4] overflow-hidden bg-[#E9E1DA]">
                  <img
                    src={asset(t.works.items[1].img)}
                    alt={t.works.items[1].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="sm:col-span-6 pt-2">
                  <p
                    className="text-xs tracking-[0.16em] uppercase text-[#AD8A72] mb-2"
                    style={{ fontFamily: 'var(--font-en-text)' }}
                  >
                    {t.works.items[1].tag}
                  </p>
                  <h3
                    className="text-lg sm:text-xl text-[#202020] leading-[1.5] tracking-[0.06em] mb-3"
                    style={{ fontFamily: 'var(--font-jp-heading)' }}
                  >
                    {t.works.items[1].title}
                  </h3>
                  <p className="text-sm text-[#757575] leading-[1.9]">{t.works.items[1].desc}</p>
                </div>
              </article>
            </div>

            {/* Row 2: Item 04 (Left Asymmetric) + Item 05 (Right Wide) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Item 04: Hyper-Impactful */}
              <article className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-6 sm:order-2 aspect-[3/4] overflow-hidden bg-[#E9E1DA]">
                  <img
                    src={asset(t.works.items[2].img)}
                    alt={t.works.items[2].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="sm:col-span-6 sm:order-1 flex flex-col justify-between h-full">
                  <div>
                    <p
                      className="text-xs tracking-[0.16em] uppercase text-[#AD8A72] mb-2"
                      style={{ fontFamily: 'var(--font-en-text)' }}
                    >
                      {t.works.items[2].tag}
                    </p>
                    <h3
                      className="text-lg sm:text-xl text-[#202020] leading-[1.5] tracking-[0.06em] mb-3"
                      style={{ fontFamily: 'var(--font-jp-heading)' }}
                    >
                      {t.works.items[2].title}
                    </h3>
                    <p className="text-sm text-[#757575] leading-[1.9] mb-6">
                      {t.works.items[2].desc}
                    </p>
                  </div>
                  {t.works.items[2].enNote && (
                    <p
                      className="text-[11px] tracking-[0.14em] uppercase text-[#AD8A72] pt-4 border-t border-[#202020]/15"
                      style={{ fontFamily: 'var(--font-en-text)' }}
                    >
                      {t.works.items[2].enNote[0]}
                      <br />
                      {t.works.items[2].enNote[1]}
                    </p>
                  )}
                </div>
              </article>

              {/* Item 05: Human Leadership */}
              <article className="lg:col-span-6 lg:col-start-7">
                <div className="aspect-[16/10] overflow-hidden bg-[#E9E1DA]">
                  <img
                    src={asset(t.works.items[3].img)}
                    alt={t.works.items[3].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="pt-7 sm:pl-8 max-w-xl">
                  <p
                    className="text-xs tracking-[0.16em] uppercase text-[#AD8A72] mb-2"
                    style={{ fontFamily: 'var(--font-en-text)' }}
                  >
                    {t.works.items[3].tag}
                  </p>
                  <h3
                    className="text-xl sm:text-2xl text-[#202020] leading-[1.5] tracking-[0.06em] mb-3"
                    style={{ fontFamily: 'var(--font-jp-heading)' }}
                  >
                    {t.works.items[3].title}
                  </h3>
                  <p className="text-sm text-[#757575] leading-[1.9]">{t.works.items[3].desc}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FULL-BLEED PARALLAX DIVIDER (.home-img-parallax)
      ===================================================================== */}
      <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[620px] overflow-hidden">
        <img
          src={asset('unsplash-challenge.jpg')}
          alt="Clevio Executive Workshop Space"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* =====================================================================
          SPLIT STICKY LEFT + RIGHT PICKUP CARDS + MARQUEE (.home-event -> Program 3 Langkah)
      ===================================================================== */}
      <section id="program" className="nkg-paper py-28 sm:py-36 lg:py-44 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-14 lg:gap-20">
            {/* Left Column (.home-event__left) */}
            <div className="w-full lg:w-[360px] shrink-0 flex flex-col justify-between lg:sticky lg:top-32">
              <div>
                <h2 className="nkg-ttl-dual mb-10">
                  <span className="font-jp">{t.event.titleJp}</span>
                  <span className="font-en">{t.event.titleEn}</span>
                </h2>
                <div className="flex flex-col gap-4 text-sm sm:text-base text-[#333333] leading-[2] mb-10">
                  {t.event.desc.map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </div>
              </div>
              <div>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="nkg-btn">
                  <span>{t.event.btnText}</span>
                  <span className="nkg-btn-pill" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column (.home-event__right) — 3 Stage Pickup Cards */}
            <div className="flex-1 w-full flex flex-col gap-8">
              {t.event.pickups.map((p) => (
                <article
                  key={p.stage}
                  className="bg-white p-7 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8 lg:gap-12 shadow-[0_2px_20px_rgba(32,32,32,0.03)] hover:shadow-[0_12px_32px_rgba(32,32,32,0.07)] transition-shadow"
                >
                  <div className="flex-1 flex flex-col gap-5 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#202020]/10 pb-3">
                      <span
                        className="text-xs sm:text-sm tracking-[0.14em] font-medium text-[#202020]"
                        style={{ fontFamily: 'var(--font-en-text)' }}
                      >
                        {p.stage}
                      </span>
                      <span className="text-xs px-3 py-1 bg-[#F2EDE7] text-[#5F433E] tracking-[0.08em]">
                        {p.tag}
                      </span>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl text-[#202020] leading-[1.55] tracking-[0.06em]"
                      style={{ fontFamily: 'var(--font-jp-heading)' }}
                    >
                      {p.title}
                    </h3>

                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#202020]/10 text-xs sm:text-sm">
                      <div>
                        <dt className="text-[#757575] text-xs mb-1">{p.meta1Label}</dt>
                        <dd className="text-[#202020] font-medium">{p.meta1Value}</dd>
                      </div>
                      <div>
                        <dt className="text-[#757575] text-xs mb-1">{p.meta2Label}</dt>
                        <dd className="text-[#202020] font-medium">{p.meta2Value}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="w-full md:w-[240px] lg:w-[280px] shrink-0 aspect-[4/3] overflow-hidden bg-[#E9E1DA]">
                    <img
                      src={asset(p.img)}
                      alt={p.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Continuous Horizontal Image Marquee (.home-event__slides) */}
        <div className="mt-24 sm:mt-32 overflow-hidden">
          <div className="nkg-marquee-track">
            {[...MARQUEE_SLIDES, ...MARQUEE_SLIDES].map((slide, idx) => (
              <div
                key={idx}
                className={`shrink-0 overflow-hidden bg-[#E9E1DA] relative group ${
                  slide.wide
                    ? 'w-[290px] sm:w-[440px] aspect-[16/10]'
                    : 'w-[200px] sm:w-[280px] aspect-[4/5]'
                }`}
              >
                <img
                  src={asset(slide.img)}
                  alt={slide.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span
                  className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-[#F5F2EE] text-[10px] tracking-[0.16em] uppercase px-2.5 py-1"
                  style={{ fontFamily: 'var(--font-en-text)' }}
                >
                  {slide.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          TABBED SHOWCASE SECTION (.home-sale -> 5 Kompetensi Inti & Format)
      ===================================================================== */}
      <section id="kompetensi" className="nkg-paper-alt py-28 sm:py-36 lg:py-44 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col items-center">
          <h2 className="nkg-ttl-dual is-center mb-12">
            <span className="font-jp">{t.sale.titleJp}</span>
            <span className="font-en">{t.sale.titleEn}</span>
          </h2>

          {/* Tab Buttons (.home-sale__tabs) */}
          <div
            className="w-full max-w-2xl grid grid-cols-2 border-b border-[#202020]/20 mb-12"
            role="tablist"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'tab1'}
              onClick={() => setActiveTab('tab1')}
              className={`py-4 px-4 text-sm sm:text-lg tracking-[0.1em] transition-all cursor-pointer border-b-2 -mb-px ${
                activeTab === 'tab1'
                  ? 'border-[#202020] text-[#202020] font-medium bg-white/50'
                  : 'border-transparent text-[#757575] hover:text-[#202020]'
              }`}
              style={{ fontFamily: 'var(--font-jp-heading)' }}
            >
              {t.sale.tab1}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'tab2'}
              onClick={() => setActiveTab('tab2')}
              className={`py-4 px-4 text-sm sm:text-lg tracking-[0.1em] transition-all cursor-pointer border-b-2 -mb-px ${
                activeTab === 'tab2'
                  ? 'border-[#202020] text-[#202020] font-medium bg-white/50'
                  : 'border-transparent text-[#757575] hover:text-[#202020]'
              }`}
              style={{ fontFamily: 'var(--font-jp-heading)' }}
            >
              {t.sale.tab2}
            </button>
          </div>

          <p className="text-sm sm:text-base text-[#333333] text-center max-w-2xl mb-14">
            {activeTab === 'tab1' ? t.sale.tab1Desc : t.sale.tab2Desc}
          </p>

          {/* Tab Panel Cards (.post-sale) */}
          {activeTab === 'tab1' ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.sale.competencies.map((item) => (
                <article
                  key={item.num}
                  className="bg-white flex flex-col justify-between overflow-hidden group shadow-[0_2px_16px_rgba(32,32,32,0.03)]"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-[#E9E1DA] relative">
                      <img
                        src={asset(item.img)}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span
                        className="absolute top-4 left-4 bg-[#202020] text-[#F5F2EE] text-xs tracking-[0.16em] px-3 py-1"
                        style={{ fontFamily: 'var(--font-en-text)' }}
                      >
                        {item.num}
                      </span>
                    </div>
                    <div className="p-7 sm:p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[11px] px-2.5 py-0.5 bg-[#F2EDE7] text-[#5F433E] tracking-[0.06em]">
                          {item.tag1}
                        </span>
                        <span
                          className="text-[11px] px-2.5 py-0.5 border border-[#202020]/15 text-[#757575] tracking-[0.08em]"
                          style={{ fontFamily: 'var(--font-en-text)' }}
                        >
                          {item.tag2}
                        </span>
                      </div>
                      <h3
                        className="text-xl text-[#202020] leading-[1.5] tracking-[0.06em] mb-3"
                        style={{ fontFamily: 'var(--font-jp-heading)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#757575] leading-[1.9]">{item.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.sale.audiences.map((item) => (
                <article
                  key={item.num}
                  className="bg-white flex flex-col justify-between overflow-hidden group shadow-[0_2px_16px_rgba(32,32,32,0.03)]"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-[#E9E1DA] relative">
                      <img
                        src={asset(item.img)}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span
                        className="absolute top-4 left-4 bg-[#202020] text-[#F5F2EE] text-xs tracking-[0.16em] px-3 py-1"
                        style={{ fontFamily: 'var(--font-en-text)' }}
                      >
                        {item.num}
                      </span>
                    </div>
                    <div className="p-7 sm:p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[11px] px-2.5 py-0.5 bg-[#F2EDE7] text-[#5F433E] tracking-[0.06em]">
                          {item.tag1}
                        </span>
                        <span
                          className="text-[11px] px-2.5 py-0.5 border border-[#202020]/15 text-[#757575] tracking-[0.08em]"
                          style={{ fontFamily: 'var(--font-en-text)' }}
                        >
                          {item.tag2}
                        </span>
                      </div>
                      <h3
                        className="text-xl text-[#202020] leading-[1.5] tracking-[0.06em] mb-3"
                        style={{ fontFamily: 'var(--font-jp-heading)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#757575] leading-[1.9]">{item.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-14">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="nkg-btn">
              <span>{t.sale.btnText}</span>
              <span className="nkg-btn-pill" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          VIDEO DOCUMENTATION SECTION (.home-post style 2-column editorial list)
      ===================================================================== */}
      <section id="dokumentasi" className="nkg-paper py-24 sm:py-32 border-b border-[#202020]/10">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <h2 className="nkg-ttl-dual">
              <span className="font-jp">{t.videos.titleJp}</span>
              <span className="font-en">{t.videos.titleEn}</span>
            </h2>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="nkg-btn">
              <span>{t.header.cta}</span>
              <span className="nkg-btn-pill" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {t.videos.items.map((vid, idx) => (
              <article
                key={vid.id}
                onClick={() => setActiveVideo(vid.id)}
                className="bg-white p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center cursor-pointer group shadow-[0_2px_16px_rgba(32,32,32,0.03)] hover:shadow-[0_12px_30px_rgba(32,32,32,0.08)] transition-all"
              >
                <div className="sm:col-span-5 aspect-[4/3] overflow-hidden bg-[#202020] relative">
                  <img
                    src={asset(idx === 0 ? 'video1-thumb.jpg' : 'video2-thumb.jpg')}
                    alt={vid.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white/95 text-[#202020] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-7 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs tracking-[0.14em] text-[#AD8A72]"
                      style={{ fontFamily: 'var(--font-en-text)' }}
                    >
                      {vid.date}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 bg-[#F2EDE7] text-[#5F433E]">
                      {vid.tag}
                    </span>
                  </div>
                  <h3
                    className="text-lg sm:text-xl text-[#202020] group-hover:text-[#AD8A72] transition-colors leading-[1.5]"
                    style={{ fontFamily: 'var(--font-jp-heading)' }}
                  >
                    {vid.title}
                  </h3>
                  <p className="text-xs text-[#757575]">{vid.duration}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          ALTERNATING SPLIT FEATURE BLOCKS (.home-company & .home-company--reverse)
          Block 1: Dipandu Oleh Aranggi Soemardjan
          Block 2: Rekam Jejak & Ekosistem Inovasi
      ===================================================================== */}
      <section id="mentor" className="nkg-paper relative z-10">
        {/* Block 1: Image Left (62%), Content Right (38%) */}
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-[58%] min-h-[420px] sm:min-h-[580px] lg:min-h-[720px] bg-[#E9E1DA] overflow-hidden relative">
            <img
              src={asset('aranggi-real.jpg')}
              alt="Aranggi Soemardjan - Clevio AI Pro Facilitator"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-full lg:w-[42%] flex flex-col justify-center px-6 sm:px-14 lg:px-20 py-16 lg:py-24">
            <div className="max-w-md flex flex-col gap-10">
              <h2 className="nkg-ttl-dual">
                <span className="font-jp">{t.company1.titleJp}</span>
                <span className="font-en">{t.company1.titleEn}</span>
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#202020] leading-[1.8]">
                {t.company1.lead}
              </p>
              <div className="flex flex-col divide-y divide-[#202020]/15 border-y border-[#202020]/15">
                {t.company1.links.map((lnk) => (
                  <a
                    key={lnk.en}
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-5 flex items-center justify-between gap-4 group"
                  >
                    <div>
                      <span
                        className="block text-base sm:text-lg text-[#202020] group-hover:text-[#AD8A72] transition-colors"
                        style={{ fontFamily: 'var(--font-jp-heading)' }}
                      >
                        {lnk.jp}
                      </span>
                      <span
                        className="block text-xs italic text-[#AD8A72] mb-1"
                        style={{ fontFamily: 'var(--font-en-heading)' }}
                      >
                        {lnk.en}
                      </span>
                      <span className="block text-xs text-[#757575] leading-relaxed">
                        {lnk.desc}
                      </span>
                    </div>
                    <span className="nkg-btn-pill shrink-0 group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Block 2 (.home-company--reverse): Content Left (42%), Image Right (58%) */}
        <div className="flex flex-col lg:flex-row-reverse items-stretch">
          <div className="w-full lg:w-[58%] min-h-[380px] sm:min-h-[520px] lg:min-h-[680px] bg-[#E9E1DA] overflow-hidden relative">
            <img
              src={asset('unsplash-gallery-3.jpg')}
              alt="Clevio Innovation Track Record"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full lg:w-[42%] flex flex-col justify-center px-6 sm:px-14 lg:px-20 py-16 lg:py-24">
            <div className="max-w-md flex flex-col gap-10 lg:ml-auto">
              <h2 className="nkg-ttl-dual">
                <span className="font-jp">{t.company2.titleJp}</span>
                <span className="font-en">{t.company2.titleEn}</span>
              </h2>
              <p className="text-base sm:text-lg font-medium text-[#202020] leading-[1.8]">
                {t.company2.lead}
              </p>
              <div className="flex flex-col divide-y divide-[#202020]/15 border-y border-[#202020]/15">
                {t.company2.links.map((lnk) => (
                  <a
                    key={lnk.en}
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-5 flex items-center justify-between gap-4 group"
                  >
                    <div>
                      <span
                        className="block text-base sm:text-lg text-[#202020] group-hover:text-[#AD8A72] transition-colors"
                        style={{ fontFamily: 'var(--font-jp-heading)' }}
                      >
                        {lnk.jp}
                      </span>
                      <span
                        className="block text-xs italic text-[#AD8A72] mb-1"
                        style={{ fontFamily: 'var(--font-en-heading)' }}
                      >
                        {lnk.en}
                      </span>
                      <span className="block text-xs text-[#757575] leading-relaxed">
                        {lnk.desc}
                      </span>
                    </div>
                    <span className="nkg-btn-pill shrink-0 group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOOTER PARALLAX IMAGE + OVERLAPPING CTA CARD + DARK FOOTER (.footer)
      ===================================================================== */}
      <div className="relative w-full h-[280px] sm:h-[420px] overflow-hidden">
        <img
          src={asset('unsplash-gallery-4.jpg')}
          alt="Clevio Executive Session"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <footer className="bg-[#0F0F0F] text-[#F5F2EE] relative z-10">
        {/* Overlapping Contact Card (.footer--cta .cta) */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 -mt-24 sm:-mt-32 relative z-20">
          <div className="bg-[#F2EDE7] text-[#202020] p-8 sm:p-14 lg:p-20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-4">
                <h2 className="nkg-ttl-dual">
                  <span className="font-jp">{t.footer.ctaTitleJp}</span>
                  <span className="font-en">{t.footer.ctaTitleEn}</span>
                </h2>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nkg-btn-solid"
                >
                  <span>{t.footer.ctaBtn1}</span>
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nkg-btn-solid !bg-transparent !text-[#202020] hover:!bg-[#202020] hover:!text-[#F5F2EE]"
                >
                  <span>{t.footer.ctaBtn2}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-[#202020]/15 lg:pl-10 flex flex-col gap-1">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl font-medium tracking-[0.06em] text-[#202020] hover:text-[#AD8A72] transition-colors"
                  style={{ fontFamily: 'var(--font-en-text)' }}
                >
                  +62 822-2111-8860
                </a>
                <p className="text-xs text-[#757575]">{t.footer.telTime}</p>
              </div>
            </div>

            {/* Format / Coverage Bar (.cta__area) */}
            <div className="mt-10 pt-8 border-t border-[#202020]/15 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-xs sm:text-sm">
              <span className="font-semibold text-[#202020] shrink-0">{t.footer.areaLabel}</span>
              <span className="text-[#757575]">{t.footer.areaDesc}</span>
            </div>
          </div>
        </div>

        {/* Dark Footer Body (.footer_body) */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 pt-20 pb-14">
          <div className="flex flex-col lg:flex-row justify-between gap-12 pb-14 border-b border-white/10">
            <div className="max-w-md flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1" aria-hidden="true">
                  <span
                    className="block w-2.5 h-5 rounded-[2px] bg-[#F5F2EE]"
                    style={{ transform: 'skewY(-22deg)' }}
                  />
                  <span
                    className="block w-2.5 h-5 rounded-[2px] bg-[#AD8A72]"
                    style={{ transform: 'skewY(22deg)' }}
                  />
                </span>
                <span
                  className="text-xl tracking-[0.1em] text-[#F5F2EE]"
                  style={{ fontFamily: 'var(--font-en-heading)' }}
                >
                  CLEVIO AI PRO
                </span>
              </div>
              <p className="text-xs text-[#BDBDBD] leading-relaxed">{t.footer.addressLabel}</p>
              <p className="text-xs text-[#757575] leading-relaxed">{t.footer.addressBody}</p>
            </div>

            <div className="flex flex-wrap gap-8 sm:gap-14 text-xs tracking-[0.12em] uppercase text-[#BDBDBD]">
              <button
                type="button"
                onClick={() => scrollToSection('tantangan')}
                className="hover:text-[#D6B996] transition-colors cursor-pointer"
              >
                01 / {t.works.titleEn}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('program')}
                className="hover:text-[#D6B996] transition-colors cursor-pointer"
              >
                02 / {t.event.titleEn}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('kompetensi')}
                className="hover:text-[#D6B996] transition-colors cursor-pointer"
              >
                03 / {t.sale.titleEn}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('mentor')}
                className="hover:text-[#D6B996] transition-colors cursor-pointer"
              >
                04 / {t.company1.titleEn}
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#757575]">
            <p>{t.footer.copyright}</p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BDBDBD] hover:text-[#D6B996] transition-colors"
            >
              WhatsApp: +62 822-2111-8860
            </a>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          YOUTUBE VIDEO MODAL
      ===================================================================== */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-md aspect-[9/16] max-h-[85vh] bg-black overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black cursor-pointer"
              aria-label="Close video"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
