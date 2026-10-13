import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ClevioLogo from '../components/ClevioLogo'
import {
  PhoneIcon,
  VideoIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  SendIcon,
  SmileIcon,
  DoubleCheckIcon,
  CheckIcon,
  CloseIcon,
  LightningIcon,
  CalendarIcon,
  ShieldCheckIcon,
  MessageSquareIcon,
  QrCodeIcon,
  SparklesIcon,
  MenuIcon,
  XIcon,
  ArrowRightIcon,
  InstagramIcon,
  LinkedInIcon,
  ShoppingBagIcon,
  ClinicIcon,
  PropertyIcon,
  UserIcon,
} from '../components/Icons'

type Lang = 'id' | 'en'

type Msg = { side: 'user' | 'bot'; text: string; time: string }
type UseCase = {
  key: string
  label: string
  name: string
  title: string
  desc: string
  bullets: string[]
  chat: Msg[]
}
type Plan = {
  name: string
  sub: string
  m: number
  items: string[]
  featured?: boolean
  btnText: string
}

interface HeroScenario {
  key: string
  label: string
  shopName: string
  initialChat: Msg[]
  quickQuestions: { q: string; a: string }[]
}

interface LangCopy {
  nav: { solusi: string; cara: string; bandingkan: string; harga: string; bantuan: string; masuk: string; cta: string }
  hero: {
    title1: string
    title2: string
    sub: string
    cta: string
    learn: string
    trust1: string
    trust2: string
    trust3: string
    chip1: string
    chip2: string
    simulatorHint: string
    scenarios: HeroScenario[]
  }
  how: {
    eyebrow: string
    title: string
    sub: string
    steps: { n: string; t: string; d: string }[]
  }
  comparison: {
    eyebrow: string
    title: string
    sub: string
    botBadge: string
    botTitle: string
    botDesc: string
    botBad: string[]
    botChat: Msg[]
    clevioBadge: string
    clevioTitle: string
    clevioDesc: string
    clevioGood: string[]
    clevioChat: Msg[]
  }
  arthur: {
    eyebrow: string
    title: string
    body: string
    cta: string
  }
  solusi: {
    eyebrow: string
    title: string
  }
  pricing: {
    eyebrow: string
    title: string
    per: string
    popular: string
    plans: Plan[]
  }
  faq: {
    eyebrow: string
    title: string
    viewAll: string
    items: { q: string; a: string }[]
  }
  cta: {
    title: string
    sub: string
    btn: string
  }
  footer: {
    clevio: string
    dukungan: string
    perusahaan: string
    legal: string
    copyright: string
    systems: string
    links: {
      solusi: string
      cara: string
      harga: string
      blog: string
      pusatBantuan: string
      kontak: string
      status: string
      komunitas: string
      tentang: string
      karier: string
      media: string
      mitra: string
      privasi: string
      ketentuan: string
      aiPolicy: string
    }
  }
  useCases: UseCase[]
}

const COPY: Record<Lang, LangCopy> = {
  id: {
    nav: { solusi: 'Solusi', cara: 'Cara Kerja', bandingkan: 'Perbandingan', harga: 'Harga', bantuan: 'Bantuan', masuk: 'Masuk', cta: 'Mulai Gratis' },
    hero: {
      title1: 'Clevio AI Staff',
      title2: 'untuk WhatsApp Anda.',
      sub: 'Menjawab pelanggan, mengatur jadwal, dan mengurus pesanan sepanjang hari. Siap dalam lima menit.',
      cta: 'Mulai Gratis',
      learn: 'Pelajari Lebih Lanjut',
      trust1: 'Respon Cepat & Konsisten',
      trust2: 'Terhubung ke Kalender & Tools',
      trust3: 'Aman & Tepercaya',
      chip1: 'Respon Otomatis 24 Jam',
      chip2: 'Terhubung ke Kalender & Sheets',
      simulatorHint: 'Pilih pertanyaan cepat:',
      scenarios: [
        {
          key: 'shop',
          label: 'Toko Online',
          shopName: 'Toko Nadine',
          initialChat: [
            { side: 'user', text: 'Halo, kak. Ini masih ada kaos oversize warna navy?', time: '09.41' },
            { side: 'bot', text: 'Halo! Ada, kak. Kaos oversize navy masih tersedia ya.', time: '09.41' },
            { side: 'user', text: 'Bisa pesan ukuran L sekaligus 2 pcs?', time: '09.42' },
            { side: 'bot', text: 'Bisa, kak! Totalnya Rp 198.000. Mau dikirim ke alamat yang sama seperti sebelumnya?', time: '09.42' },
          ],
          quickQuestions: [
            { q: 'Ada diskon atau gratis ongkir?', a: 'Ada Kak! Pembelian minimal 2 pcs gratis ongkir se-Jabodetabek dan cashback 5%.' },
            { q: 'Bisa kirim hari ini?', a: 'Bisa Kak! Pembayaran sebelum jam 15.00 langsung dikirim hari ini via ekspedisi pilihan Kakak.' },
            { q: 'Bisa bayar COD?', a: 'Bisa banget Kak! Kami melayani COD via kurir SiCepat dan J&T. Mau diproses sekarang?' },
          ],
        },
        {
          key: 'clinic',
          label: 'Klinik',
          shopName: 'Klinik dr. Sari',
          initialChat: [
            { side: 'user', text: 'Halo dok, mau tanya jadwal pembersihan karang gigi Sabtu ini?', time: '10.15' },
            { side: 'bot', text: 'Halo! Untuk scaling hari Sabtu tersedia slot pk 11.00 dan pk 15.30 bersama drg. Sari. Mau ambil jam berapa Kak?', time: '10.15' },
          ],
          quickQuestions: [
            { q: 'Berapa biaya perawatannya?', a: 'Biaya scaling mulai Rp 250.000 sudah termasuk konsultasi dokter dan dental checkup gratis Kak.' },
            { q: 'Bisa pakai asuransi?', a: 'Bisa Kak! Kami bekerjasama dengan AdMedika, Prudential, dan reimbursement asuransi lainnya.' },
            { q: 'Boleh booking jam 15.30?', a: 'Siap Kak! Slot jam 15.30 hari Sabtu sudah kami reservasi. Boleh minta nama lengkap pasien?' },
          ],
        },
        {
          key: 'property',
          label: 'Properti',
          shopName: 'Reza BSD Property',
          initialChat: [
            { side: 'user', text: 'Halo Mas, cari rumah 2 lantai di BSD budget 2M ada rekomendasi?', time: '11.20' },
            { side: 'bot', text: 'Halo Pak! Ada cluster Foresta di 1.95M siap huni. Mau saya kirim brosur PDF dan denahnya?', time: '11.20' },
          ],
          quickQuestions: [
            { q: 'Bisa kirim brosur & denah?', a: 'Siap Pak! Dokumen brosur dan denah Foresta sudah dikirim. Ada promo subsidi DP 15 juta bulan ini.' },
            { q: 'Bisa survei lokasi Sabtu ini?', a: 'Bisa banget Pak! Jadwal survei pk 10.00 hari Sabtu sudah kami catat bersama agen kami.' },
            { q: 'Bisa simulasi cicilan KPR?', a: 'Bisa Pak! Untuk DP 10% (195 jt), cicilan mulai 12 jutaan/bulan fixed 3 tahun via bank rekanan.' },
          ],
        },
        {
          key: 'personal',
          label: 'Pribadi',
          shopName: 'Leo Personal Staff',
          initialChat: [
            { side: 'user', text: 'Tolong ingatkan bayar tagihan listrik dan asuransi tiap tanggal 25 ya.', time: '08.05' },
            { side: 'bot', text: 'Siap! Pengingat otomatis sudah dijadwalkan setiap tanggal 25 pukul 09.00 pagi.', time: '08.05' },
          ],
          quickQuestions: [
            { q: 'Ada meeting apa hari ini?', a: 'Hari ini ada 2 agenda: pk 10.00 Weekly Sync Tim Produk, dan pk 14.30 Call Vendor di Google Meet.' },
            { q: 'Catat ide konten video', a: 'Siap dicatat ke to-do list: Ide konten video edukasi Clevio AI Staff. Sudah disinkronkan ke kalender.' },
            { q: 'Rangkum email prioritas', a: 'Ada 1 email penting dari Klien Korporat perihal konfirmasi jadwal presentasi proposal besok.' },
          ],
        },
      ],
    },
    how: {
      eyebrow: 'CARA KERJA',
      title: 'Lima menit, lalu selesai.',
      sub: 'Aktifkan asisten AI untuk WhatsApp Anda dalam tiga langkah mudah.',
      steps: [
        { n: '01', t: 'Ngobrol dengan Arthur', d: 'Ceritakan bisnis dengan bahasa sendiri tanpa istilah teknis.' },
        { n: '02', t: 'Hubungkan WhatsApp', d: 'Scan QR satu kali, nomor langsung aktif dijaga AI secara mandiri.' },
        { n: '03', t: 'AI Mulai Bekerja', d: 'Pesan dibalas otomatis sesuai gaya bicara dan katalog brand Anda.' },
      ],
    },
    comparison: {
      eyebrow: 'MENGAPA CLEVIO AI STAFF',
      title: 'Tinggalkan chatbot kaku. Beralih ke asisten AI yang manusiawi.',
      sub: 'Pelanggan di WhatsApp ingin berbicara dengan staf yang memahami konteks percakapan, bukan bot kaku yang menyuruh ketik angka.',
      botBadge: 'CHATBOT LAMA (RULE-BASED)',
      botTitle: 'Kaku & Sering Bikin Pembeli Kabur',
      botDesc: 'Hanya mengenali tombol dan kata kunci kaku. Sekali pelanggan mengetik kalimat bebas, bot langsung macet.',
      botBad: [
        'Hanya membalas jika pelanggan ketik angka (1, 2, 3)',
        'Gagal total saat ada typo, singkatan, atau bahasa santai',
        'Pembeli merasa diabaikan dan langsung pindah ke kompetitor',
      ],
      botChat: [
        { side: 'user', text: 'Halo min, mau tanya kaos polo navy ada diskon gak?', time: '14.10' },
        { side: 'bot', text: 'Format tidak dikenal. Ketik 1 untuk katalog, 2 jam operasional, 3 komplain.', time: '14.10' },
      ],
      clevioBadge: 'CLEVIO AI STAFF (NATURAL & SOLUTIF)',
      clevioTitle: 'Pintar, Luwes, dan Siap Jualan 24/7',
      clevioDesc: 'Memahami bahasa sehari-hari orang Indonesia, gaya belanja WhatsApp, dan proaktif membantu transaksi closing.',
      clevioGood: [
        'Memahami bahasa santai, singkatan, typo, dan konteks percakapan',
        'Proaktif menawarkan promo bundle dan otomatis catat order ke Sheets',
        'Tahu persis kapan harus eskalasi ke staf manusia saat ada kendala',
      ],
      clevioChat: [
        { side: 'user', text: 'Halo min, mau tanya kaos polo navy ada diskon gak?', time: '14.10' },
        { side: 'bot', text: 'Ada Kak! Polo navy diskon 10% + gratis ongkir hari ini. Mau sekalian ukuran apa Kak?', time: '14.10' },
      ],
    },
    arthur: {
      eyebrow: 'SPOTLIGHT ARTHUR',
      title: 'Bangun Asisten AI Sambil Ngobrol.',
      body: 'Arthur akan merangkum kebutuhan bisnis Anda tanpa form panjang atau istilah teknis. Cukup ngobrol seperti biasa, dan asisten digital Anda langsung siap bekerja.',
      cta: 'Coba Ngobrol dengan Arthur',
    },
    solusi: {
      eyebrow: 'SOLUSI UNTUK BERBAGAI INDUSTRI',
      title: 'Satu solusi, banyak kemungkinan.',
    },
    pricing: {
      eyebrow: 'PAKET & HARGA',
      title: 'Pilih paket yang sesuai dengan kebutuhan Anda.',
      per: '/bulan',
      popular: 'PALING POPULER',
      plans: [
        {
          name: 'Growth',
          sub: 'Untuk bisnis yang berkembang',
          m: 299,
          featured: true,
          items: [
            'Hingga 5.000 percakapan/bulan',
            'Integrasi Kalender & Sheets',
            'Custom gaya bicara brand',
            'Dukungan prioritas',
          ],
          btnText: 'Mulai Sekarang',
        },
        {
          name: 'Business',
          sub: 'Untuk skala lebih besar',
          m: 999,
          items: [
            'Percakapan tanpa batas',
            'Multi-agen untuk beberapa nomor',
            'Integrasi lanjutan (CRM, dll)',
            'Dukungan prioritas 24/7',
          ],
          btnText: 'Hubungi Kami',
        },
      ],
    },
    faq: {
      eyebrow: 'PERTANYAAN YANG SERING DIAJUKAN',
      title: 'Masih ada pertanyaan?',
      viewAll: 'Lihat semua pertanyaan',
      items: [
        {
          q: 'Apa itu Clevio AI Staff?',
          a: 'Clevio AI Staff adalah asisten AI terlatih yang berfungsi sebagai staf digital untuk bisnis Anda. Clevio menjawab chat pelanggan secara otomatis di WhatsApp, mengatur reservasi/jadwal, mengecek stok, hingga eskalasi ke staf manusia saat diperlukan.',
        },
        {
          q: 'Apakah bisa terhubung ke nomor WhatsApp saya?',
          a: 'Bisa. Anda cukup melakukan scan QR code WhatsApp Web satu kali melalui dashboard Clevio. Nomor WhatsApp yang Anda gunakan saat ini langsung aktif dikelola oleh AI tanpa perlu ganti nomor.',
        },
        {
          q: 'Apakah sulit untuk memulai dan butuh paham teknis?',
          a: 'Sama sekali tidak. Anda hanya perlu ngobrol santai dengan Arthur (AI Builder kami) selama 5 menit untuk menceritakan produk dan gaya bicara bisnis Anda. Tidak perlu coding atau konfigurasi teknis rumit.',
        },
        {
          q: 'Data bisnis dan pelanggan saya aman tidak?',
          a: 'Sangat aman. Seluruh data pelanggan dan riwayat percakapan bisnis Anda dienkripsi dengan standar enterprise dan disimpan di server privat yang aman. Data Anda tidak digunakan untuk melatih model AI publik.',
        },
        {
          q: 'Apakah bisa dialihkan (eskalasi) ke admin manusia?',
          a: 'Bisa kapan saja. AI secara otomatis memberi notifikasi jika ada pertanyaan spesifik, komplain, atau kondisi yang memerlukan penanganan staf manusia.',
        },
        {
          q: 'Apakah perlu kartu kredit untuk mencoba?',
          a: 'Tidak perlu. Anda bisa mulai dengan masa uji coba gratis tanpa perlu memasukkan kartu kredit atau data pembayaran apa pun.',
        },
      ],
    },
    cta: {
      title: 'Mulai hari ini. Gratis untuk dicoba, tanpa kartu kredit.',
      sub: 'Rasakan sendiri bagaimana Clevio AI Staff membantu bisnis Anda lebih responsif, profesional, dan efisien.',
      btn: 'Mulai Sekarang',
    },
    footer: {
      clevio: 'Clevio AI Staff',
      dukungan: 'Dukungan',
      perusahaan: 'Perusahaan',
      legal: 'Legal',
      copyright: 'Dibuat di Indonesia.',
      systems: 'Semua sistem normal',
      links: {
        solusi: 'Solusi',
        cara: 'Cara Kerja',
        harga: 'Harga',
        blog: 'Blog',
        pusatBantuan: 'Pusat Bantuan',
        kontak: 'Hubungi Kami',
        status: 'Status Sistem',
        komunitas: 'Komunitas',
        tentang: 'Tentang Kami',
        karier: 'Karier',
        media: 'Media',
        mitra: 'Mitra',
        privasi: 'Kebijakan Privasi',
        ketentuan: 'Syarat & Ketentuan',
        aiPolicy: 'Penggunaan AI yang Bertanggung Jawab',
      },
    },
    useCases: [
      {
        key: 'shop',
        label: 'Toko Online',
        name: 'Toko Nadine',
        title: 'Layani pelanggan, terima pesanan, dan kelola stok langsung dari WhatsApp.',
        desc: 'Membantu pembeli memilih produk, memeriksa ketersediaan varian warna dan ukuran, serta mencatat detail pengiriman secara otomatis.',
        bullets: [
          'Jawab pertanyaan produk otomatis 24 jam',
          'Cek stok dan harga real-time akurat',
          'Terima pesanan dan konfirmasi pembayaran',
          'Kirim info pengiriman & resi ke pelanggan',
          'Terhubung langsung ke Google Sheets untuk pencatatan',
        ],
        chat: [
          { side: 'user', text: 'Kak, ini ada yang ukuran M?', time: '10.01' },
          { side: 'bot', text: 'Ada, kak. Ukuran M masih tersedia untuk semua warna. Mau order?', time: '10.01' },
          { side: 'user', text: 'Boleh! Warna beige 1 ya. Berapa harganya?', time: '10.02' },
          { side: 'bot', text: 'Untuk kaos oversize warna beige harganya Rp 99.000. Mau saya proses sekarang?', time: '10.02' },
        ],
      },
      {
        key: 'clinic',
        label: 'Klinik',
        name: 'Klinik dr. Sari',
        title: 'Booking jadwal dokter dan konsultasi tanpa antre telepon.',
        desc: 'Mengatur janji temu pasien, mengirim pengingat jadwal konsultasi, dan menjawab info prosedur atau jam operasional klinik.',
        bullets: [
          'Reservasi dan penjadwalan pasien otomatis',
          'Sinkronisasi langsung dengan Google Calendar dokter',
          'Pengingat jadwal otomatis H-1 sebelum konsultasi',
          'Pemberitahuan syarat pra-tindakan medis',
          'Eskalasi ke perawat/front-desk jika kasus darurat',
        ],
        chat: [
          { side: 'user', text: 'Mau booking konsultasi dokter gigi untuk hari Sabtu.', time: '13.15' },
          { side: 'bot', text: 'Halo! Jadwal dokter gigi hari Sabtu tersedia pukul 10.00, 14.30, dan 16.00. Mau jam berapa?', time: '13.15' },
          { side: 'user', text: 'Jam 14.30 ya.', time: '13.16' },
          { side: 'bot', text: 'Baik, jadwal pk 14.30 sudah dicatat atas nama Kakak ya. Boleh minta nama lengkapnya?', time: '13.16' },
        ],
      },
      {
        key: 'property',
        label: 'Properti',
        name: 'Reza BSD Agent',
        title: 'Kualifikasi calon pembeli dan kirim brosur unit dalam hitungan detik.',
        desc: 'Menyaring kriteria rumah idaman calon pembeli berdasarkan budget dan lokasi, serta otomatis menjadwalkan survei lokasi.',
        bullets: [
          'Kirim brosur PDF dan price list terkini seketika',
          'Filter kebutuhan unit berdasarkan budget & area',
          'Jadwalkan janji temu survei lokasi perumahan',
          'Notifikasi instan ke agen untuk prospek panas',
          'Follow up prospek secara teratur dan sopan',
        ],
        chat: [
          { side: 'user', text: 'Cari rumah 2 lantai di BSD, budget sekitar 2M.', time: '11.20' },
          { side: 'bot', text: 'Halo Pak! Ada 3 cluster yang cocok. Salah satunya cluster Foresta di harga 1.95M. Mau saya kirim brosurnya?', time: '11.20' },
          { side: 'user', text: 'Boleh, kirim brosur dan denahnya.', time: '11.21' },
          { side: 'bot', text: 'Terkirim. Dokumen brosur dan denah siap dicek. Mau dijadwalkan survei lokasi hari Sabtu ini pk 10.00?', time: '11.21' },
        ],
      },
      {
        key: 'personal',
        label: 'Pribadi',
        name: 'Leo Personal Staff',
        title: 'Asisten pribadi cerdas untuk jadwal, email, dan to-do list harian.',
        desc: 'Membantu profesional dan eksekutif mengatur pengingat harian, merangkum pesan penting, dan mengurus tugas-tugas kecil.',
        bullets: [
          'Pengingat tagihan bulanan dan jadwal meeting',
          'Rangkuman pesan dan email penting via chat',
          'Pencatatan ide dan to-do list cepat via voice note',
          'Sinkronisasi kalender pribadi',
          'Tersedia 24 jam di nomor WhatsApp Anda',
        ],
        chat: [
          { side: 'user', text: 'Ingatkan bayar listrik dan asuransi tiap tanggal 25.', time: '08.05' },
          { side: 'bot', text: 'Siap! Pengingat bulanan sudah dibuat untuk tanggal 25 pukul 09.00 pagi.', time: '08.05' },
          { side: 'user', text: 'Ada meeting apa aja hari ini?', time: '08.06' },
          { side: 'bot', text: 'Hari ini ada 2 jadwal: 10.00 Sync Tim Produk, dan 14.00 Call Vendor.', time: '08.06' },
        ],
      },
    ],
  },
  en: {
    nav: { solusi: 'Solutions', cara: 'How It Works', bandingkan: 'Comparison', harga: 'Pricing', bantuan: 'Support', masuk: 'Sign In', cta: 'Start Free' },
    hero: {
      title1: 'Clevio AI Staff',
      title2: 'for your WhatsApp.',
      sub: 'Replies to customers, schedules appointments, and handles orders throughout the day. Ready in five minutes.',
      cta: 'Start Free',
      learn: 'Learn More',
      trust1: 'Fast & Consistent Replies',
      trust2: 'Syncs with Calendars & Tools',
      trust3: 'Secure & Enterprise-Grade',
      chip1: '24/7 Automated Replies',
      chip2: 'Connected to Calendar & Sheets',
      simulatorHint: 'Quick questions:',
      scenarios: [
        {
          key: 'shop',
          label: 'Online Store',
          shopName: 'Nadine Store',
          initialChat: [
            { side: 'user', text: 'Hi, do you still have the navy oversize t-shirt in stock?', time: '09:41' },
            { side: 'bot', text: 'Hello! Yes, navy oversize is in stock.', time: '09:41' },
            { side: 'user', text: 'Can I order 2 pcs in size L?', time: '09:42' },
            { side: 'bot', text: 'Sure! Total is Rp 198,000. Ship to your previous address?', time: '09:42' },
          ],
          quickQuestions: [
            { q: 'Any discounts or free shipping?', a: 'Yes! Orders of 2+ items receive free shipping across Jabodetabek and 5% cashback.' },
            { q: 'Can you ship today?', a: 'Yes! Payments completed before 3 PM ship today via your preferred courier.' },
            { q: 'Is Cash on Delivery available?', a: 'Absolutely! We support COD via SiCepat and J&T. Shall I confirm your order?' },
          ],
        },
        {
          key: 'clinic',
          label: 'Clinic',
          shopName: 'Dr. Sari Clinic',
          initialChat: [
            { side: 'user', text: 'Hello doctor, do you have slots for dental scaling this Saturday?', time: '10:15' },
            { side: 'bot', text: 'Hi! Saturday scaling slots are open at 11:00 AM and 3:30 PM with Dr. Sari. Which works better?', time: '10:15' },
          ],
          quickQuestions: [
            { q: 'How much is the treatment?', a: 'Scaling starts at Rp 250,000 including doctor consultation and dental checkup.' },
            { q: 'Do you accept insurance?', a: 'Yes! We partner with AdMedika, Prudential, and all major insurance reimbursements.' },
            { q: 'Can I book the 3:30 PM slot?', a: 'Done! The 3:30 PM Saturday slot is reserved for you. May I have your full name?' },
          ],
        },
        {
          key: 'property',
          label: 'Property',
          shopName: 'Reza BSD Property',
          initialChat: [
            { side: 'user', text: 'Looking for a 2-story home in BSD with a 2B budget, any ready units?', time: '11:20' },
            { side: 'bot', text: 'Hello! Cluster Foresta is ready at 1.95B. May I send you the PDF brochure and floor plan?', time: '11:20' },
          ],
          quickQuestions: [
            { q: 'Send brochure and floor plan', a: 'Sent! Brochure and floor plan for Foresta are ready. DP subsidy of 15 million applies this month.' },
            { q: 'Can we visit this Saturday?', a: 'Certainly! We have scheduled a site walkthrough this Saturday at 10:00 AM with our agent.' },
            { q: 'Mortgage monthly estimate?', a: 'With 10% down payment (195M), monthly installments start around 12M fixed 3 years.' },
          ],
        },
        {
          key: 'personal',
          label: 'Personal',
          shopName: 'Leo Personal Staff',
          initialChat: [
            { side: 'user', text: 'Please remind me to pay electricity and insurance on the 25th.', time: '08:05' },
            { side: 'bot', text: 'Done! Automatic reminder scheduled for the 25th at 9:00 AM.', time: '08:05' },
          ],
          quickQuestions: [
            { q: 'What meetings do I have today?', a: 'You have 2 meetings today: 10:00 AM Product Sync, and 2:30 PM Vendor Call on Google Meet.' },
            { q: 'Note down video content idea', a: 'Saved to your task list: Educational video on Clevio AI Staff. Synced to your calendar.' },
            { q: 'Summarize urgent emails', a: 'You have 1 priority email from Corporate Client regarding contract draft sign-off.' },
          ],
        },
      ],
    },
    how: {
      eyebrow: 'HOW IT WORKS',
      title: 'Five minutes, then done.',
      sub: 'Activate your business AI WhatsApp assistant in three simple steps.',
      steps: [
        { n: '01', t: 'Talk to Arthur', d: 'Describe your business in plain words without any technical jargon.' },
        { n: '02', t: 'Connect WhatsApp', d: 'Scan the QR code once, your number is immediately staffed by AI.' },
        { n: '03', t: 'AI Gets to Work', d: 'Customers are replied automatically in your brand tone and style.' },
      ],
    },
    comparison: {
      eyebrow: 'WHY CLEVIO AI STAFF',
      title: 'Ditch rigid chatbots. Upgrade to natural conversational AI.',
      sub: 'WhatsApp customers want to converse with staff who understand context, not robots forcing them to type numbers.',
      botBadge: 'LEGACY CHATBOTS (RULE-BASED)',
      botTitle: 'Rigid & Frustrating for Real Buyers',
      botDesc: 'Built on static button logic. The moment a customer types naturally, the chatbot breaks down.',
      botBad: [
        'Only works if customers type exact numbers (Press 1, 2, 3)',
        'Fails completely on slang, typos, or natural questions',
        'Frustrates customers and drives them to competitors',
      ],
      botChat: [
        { side: 'user', text: 'Hi! Any promo for navy polo shirts?', time: '14:10' },
        { side: 'bot', text: 'Invalid format. Reply 1 for catalog, 2 for store hours, 3 for complaints.', time: '14:10' },
      ],
      clevioBadge: 'CLEVIO AI STAFF (CONTEXTUAL & HELPFUL)',
      clevioTitle: 'Intelligent, Empathetic, and Always Ready to Sell',
      clevioDesc: 'Trained to understand conversational nuances, WhatsApp shopping habits, and proactive closing.',
      clevioGood: [
        'Understands natural phrasing, slang, typos, and conversational context',
        'Proactively recommends promo bundles and logs orders to Google Sheets',
        'Smoothly escalates to human staff whenever complex issues arise',
      ],
      clevioChat: [
        { side: 'user', text: 'Hi! Any promo for navy polo shirts?', time: '14:10' },
        { side: 'bot', text: 'Hi! Yes! 10% off + free shipping on 2 pcs today. Sizes M-XL ready, which would you like?', time: '14:10' },
      ],
    },
    arthur: {
      eyebrow: 'SPOTLIGHT ARTHUR',
      title: 'Build an AI Assistant by Chatting.',
      body: 'Arthur translates your business requirements into a production-ready AI staff. No long forms, no complex code. Just chat casually, and your digital staff is ready.',
      cta: 'Try Chatting with Arthur',
    },
    solusi: {
      eyebrow: 'SOLUTIONS FOR EVERY INDUSTRY',
      title: 'One solution, endless possibilities.',
    },
    pricing: {
      eyebrow: 'PLANS & PRICING',
      title: 'Choose the plan that fits your business.',
      per: '/mo',
      popular: 'MOST POPULAR',
      plans: [
        {
          name: 'Growth',
          sub: 'For growing businesses',
          m: 299,
          featured: true,
          items: [
            'Up to 5,000 conversations/mo',
            'Calendar & Google Sheets sync',
            'Custom brand tone & vocabulary',
            'Priority support',
          ],
          btnText: 'Get Started',
        },
        {
          name: 'Business',
          sub: 'For scaling teams',
          m: 999,
          items: [
            'Unlimited conversations',
            'Multi-agent on multiple numbers',
            'Advanced integrations (CRM, webhooks)',
            '24/7 Priority SLA support',
          ],
          btnText: 'Contact Us',
        },
      ],
    },
    faq: {
      eyebrow: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Still have questions?',
      viewAll: 'View all questions',
      items: [
        {
          q: 'What is Clevio AI Staff?',
          a: 'Clevio AI Staff is a trained AI assistant that acts as a digital team member for your business. It automatically replies to customer WhatsApp messages, handles bookings, checks inventory, and escalates to human staff when needed.',
        },
        {
          q: 'Can I connect my existing WhatsApp number?',
          a: 'Yes. Simply scan the WhatsApp Web QR code once from your Clevio dashboard. Your current number is instantly staffed by AI without needing a new SIM card.',
        },
        {
          q: 'Do I need technical skills to get started?',
          a: 'Not at all. You only need a 5-minute chat with Arthur (our AI Builder) to explain your products and preferences. No coding required.',
        },
        {
          q: 'Is my business and customer data secure?',
          a: 'Extremely secure. All customer chats and business data are encrypted to enterprise standards and stored on private, secure servers. Your data is never used to train public AI models.',
        },
        {
          q: 'Can chats be escalated to human staff?',
          a: 'Yes, anytime. The AI automatically detects when a customer requires human attention or requests a manager, and immediately notifies your team.',
        },
        {
          q: 'Do I need a credit card to try it?',
          a: 'No. You can start with our free trial without entering any payment or credit card details.',
        },
      ],
    },
    cta: {
      title: 'Start today. Free to try, no credit card required.',
      sub: 'Experience how Clevio AI Staff makes your business more responsive, professional, and efficient.',
      btn: 'Get Started Now',
    },
    footer: {
      clevio: 'Clevio AI Staff',
      dukungan: 'Support',
      perusahaan: 'Company',
      legal: 'Legal',
      copyright: 'Made in Indonesia.',
      systems: 'All systems normal',
      links: {
        solusi: 'Solutions',
        cara: 'How It Works',
        harga: 'Pricing',
        blog: 'Blog',
        pusatBantuan: 'Help Center',
        kontak: 'Contact Us',
        status: 'System Status',
        komunitas: 'Community',
        tentang: 'About Us',
        karier: 'Careers',
        media: 'Media',
        mitra: 'Partners',
        privasi: 'Privacy Policy',
        ketentuan: 'Terms of Service',
        aiPolicy: 'Responsible AI Policy',
      },
    },
    useCases: [
      {
        key: 'shop',
        label: 'Online Store',
        name: 'Nadine Store',
        title: 'Serve customers, take orders, and manage stock directly in WhatsApp.',
        desc: 'Assists buyers with product choices, checks real-time color and size availability, and records delivery details automatically.',
        bullets: [
          'Automatic 24/7 product inquiries handling',
          'Accurate real-time inventory and pricing checks',
          'Order capture and payment verification',
          'Shipping status and tracking link delivery',
          'Live synchronization with Google Sheets',
        ],
        chat: [
          { side: 'user', text: 'Hi! Do you have size M in stock?', time: '10:01' },
          { side: 'bot', text: 'Hi! Yes, size M is available in all colors. Would you like to order?', time: '10:01' },
          { side: 'user', text: 'Yes, 1 beige please! How much is it?', time: '10:02' },
          { side: 'bot', text: 'The beige oversize tee is Rp 99,000. Shall I process your order now?', time: '10:02' },
        ],
      },
      {
        key: 'clinic',
        label: 'Clinic',
        name: 'Dr. Sari Clinic',
        title: 'Appointment scheduling and consultations without busy phone lines.',
        desc: 'Schedules patient consultations, sends appointment reminders, and provides clinic guidelines and working hours.',
        bullets: [
          'Automated patient appointment bookings',
          'Direct synchronization with doctor Google Calendars',
          'Automatic appointment reminder 24h prior',
          'Pre-consultation guidance and medical requirements',
          'Instant escalation to front desk for emergency inquiries',
        ],
        chat: [
          { side: 'user', text: 'I want to book a dental checkup for Saturday.', time: '13:15' },
          { side: 'bot', text: 'Hello! Dental slots on Saturday are available at 10:00 AM, 2:30 PM, and 4:00 PM. Which one suits you?', time: '13:15' },
          { side: 'user', text: '2:30 PM works great.', time: '13:16' },
          { side: 'bot', text: 'Perfect! The 2:30 PM slot has been reserved for you. May I have your full name?', time: '13:16' },
        ],
      },
      {
        key: 'property',
        label: 'Property',
        name: 'Reza BSD Agent',
        title: 'Qualify buyer leads and send unit brochures in seconds.',
        desc: 'Filters prospective buyer criteria by budget and preferred area, and automatically schedules on-site property walkthroughs.',
        bullets: [
          'Instant PDF brochure and price list delivery',
          'Automated lead qualification by budget & preference',
          'Effortless on-site inspection visit bookings',
          'Hot-lead instant alerts to real estate agents',
          'Courteous, consistent automated follow-ups',
        ],
        chat: [
          { side: 'user', text: 'Looking for a 2-story home in BSD, budget around 2 Billion.', time: '11:20' },
          { side: 'bot', text: 'Hi! We have 3 clusters that match. One is Foresta at 1.95B. Would you like the brochure?', time: '11:20' },
          { side: 'user', text: 'Sure, please send over the floor plan and brochure.', time: '11:21' },
          { side: 'bot', text: 'Sent! Property brochure and layout are ready to view. Would you like to schedule a site visit this Saturday at 10 AM?', time: '11:21' },
        ],
      },
      {
        key: 'personal',
        label: 'Personal',
        name: 'Leo Personal Staff',
        title: 'Smart executive assistant for schedules, emails, and daily reminders.',
        desc: 'Helps busy founders and professionals keep track of monthly bills, meeting schedules, and urgent notifications.',
        bullets: [
          'Monthly bill payments and meeting alerts',
          'Urgent email summaries delivered via WhatsApp chat',
          'Quick task note-taking via voice and text',
          'Personal calendar synchronization',
          'Available 24/7 on your WhatsApp number',
        ],
        chat: [
          { side: 'user', text: 'Remind me to pay electricity and insurance on the 25th.', time: '08:05' },
          { side: 'bot', text: 'Done! Monthly reminder set for the 25th at 9:00 AM.', time: '08:05' },
          { side: 'user', text: 'What meetings do I have scheduled today?', time: '08:06' },
          { side: 'bot', text: 'You have 2 meetings today: 10:00 AM Product Sync, and 2:00 PM Vendor Call.', time: '08:06' },
        ],
      },
    ],
  },
}

export default function Landing() {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('clevio_lang') as Lang) || 'id')
  useEffect(() => {
    localStorage.setItem('clevio_lang', lang)
  }, [lang])

  const t = COPY[lang]
  const [tab, setTab] = useState<string>(t.useCases[0].key)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [comparisonTab, setComparisonTab] = useState<'clevio' | 'bot'>('clevio')

  // Interactive Hero Simulator State
  const [heroScenarioIndex, setHeroScenarioIndex] = useState(0)
  const currentScenario = t.hero.scenarios[heroScenarioIndex] || t.hero.scenarios[0]
  const [simulatedChat, setSimulatedChat] = useState<Msg[]>(currentScenario.initialChat)
  const [isAiTyping, setIsAiTyping] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement | null>(null)

  // Auto-scroll ONLY inside phone chat container (prevents window jumping)
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [simulatedChat, isAiTyping])

  // Sync simulated chat whenever scenario or language changes
  useEffect(() => {
    setSimulatedChat(currentScenario.initialChat)
    setIsAiTyping(false)
  }, [heroScenarioIndex, lang])

  const handleSendQuickAction = (question: string, answer: string, e?: React.MouseEvent) => {
    e?.preventDefault()
    e?.stopPropagation()
    if (isAiTyping) return
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    // Append customer (user) message: green bubble on right
    setSimulatedChat((prev) => [...prev, { side: 'user', text: question, time: timeNow }])
    setIsAiTyping(true)

    // Simulate AI staff (bot) typing response: white bubble on left
    setTimeout(() => {
      setSimulatedChat((prev) => [...prev, { side: 'bot', text: answer, time: timeNow }])
      setIsAiTyping(false)
    }, 700)
  }

  const activeUseCase = t.useCases.find((u) => u.key === tab) || t.useCases[0]

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#1C2974] selection:text-white overflow-x-clip w-full">
      {/* 1. STICKY NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-15 sm:h-16 md:h-22 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <ClevioLogo size="md" className="sm:hidden" variant="dark" />
            <ClevioLogo size="lg" className="hidden sm:inline-flex" variant="dark" />
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-9 text-[15px] font-semibold text-gray-700">
            <a href="#solusi" className="hover:text-black transition-colors">{t.nav.solusi}</a>
            <a href="#cara" className="hover:text-black transition-colors">{t.nav.cara}</a>
            <a href="#perbandingan" className="hover:text-black transition-colors">{t.nav.bandingkan}</a>
            <a href="#harga" className="hover:text-black transition-colors">{t.nav.harga}</a>
            <a href="#faq" className="hover:text-black transition-colors">{t.nav.bantuan}</a>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-2.5 sm:gap-5">
            {/* Lang Switch */}
            <div className="inline-flex items-center bg-gray-100 p-1 rounded-full text-xs font-bold">
              <button
                onClick={() => setLang('id')}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all ${lang === 'id' ? 'bg-[#000000] text-white shadow-sm' : 'text-gray-500 hover:text-black'}`}
              >
                ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all ${lang === 'en' ? 'bg-[#000000] text-white shadow-sm' : 'text-gray-500 hover:text-black'}`}
              >
                EN
              </button>
            </div>

            <a
              href="#harga"
              className="hidden sm:inline-block text-[15px] font-semibold text-gray-700 hover:text-black transition-colors"
            >
              {t.nav.masuk}
            </a>

            <a
              href="#harga"
              className="hidden xs:inline-flex items-center justify-center rounded-xl bg-[#1C2974] hover:bg-[#141d54] text-white px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-[15px] font-semibold transition-all shadow-md shadow-[#1C2974]/20 hover:-translate-y-0.5"
            >
              {t.nav.cta}
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md px-5 py-4 space-y-1 animate-fade-in shadow-xl">
            <a
              href="#solusi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-gray-800 hover:text-[#1C2974] hover:bg-gray-50 active:bg-gray-100 transition-colors group"
            >
              <span>{t.nav.solusi}</span>
              <ChevronLeftIcon className="w-4 h-4 rotate-180 text-gray-400 group-hover:text-[#1C2974] transition-colors" />
            </a>
            <a
              href="#cara"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-gray-800 hover:text-[#1C2974] hover:bg-gray-50 active:bg-gray-100 transition-colors group"
            >
              <span>{t.nav.cara}</span>
              <ChevronLeftIcon className="w-4 h-4 rotate-180 text-gray-400 group-hover:text-[#1C2974] transition-colors" />
            </a>
            <a
              href="#perbandingan"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-gray-800 hover:text-[#1C2974] hover:bg-gray-50 active:bg-gray-100 transition-colors group"
            >
              <span>{t.nav.bandingkan}</span>
              <ChevronLeftIcon className="w-4 h-4 rotate-180 text-gray-400 group-hover:text-[#1C2974] transition-colors" />
            </a>
            <a
              href="#harga"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-gray-800 hover:text-[#1C2974] hover:bg-gray-50 active:bg-gray-100 transition-colors group"
            >
              <span>{t.nav.harga}</span>
              <ChevronLeftIcon className="w-4 h-4 rotate-180 text-gray-400 group-hover:text-[#1C2974] transition-colors" />
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-gray-800 hover:text-[#1C2974] hover:bg-gray-50 active:bg-gray-100 transition-colors group"
            >
              <span>{t.nav.bantuan}</span>
              <ChevronLeftIcon className="w-4 h-4 rotate-180 text-gray-400 group-hover:text-[#1C2974] transition-colors" />
            </a>
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="#harga"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 text-center text-sm font-semibold text-gray-700 hover:text-black rounded-xl hover:bg-gray-50"
              >
                {t.nav.masuk}
              </a>
              <a
                href="#harga"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center rounded-xl bg-[#1C2974] hover:bg-[#141d54] text-white py-3 text-sm font-semibold shadow-md shadow-[#1C2974]/20 active:scale-[0.98] transition-all"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION WITH INTERACTIVE CHAT SIMULATOR */}
      <section id="hero" className="relative border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center lg:h-[calc(100vh-4.5rem)] lg:max-h-[calc(100vh-4.5rem)]">

            {/* Left Column (Headline, CTAs, and Trust points - Exactly 1 full screen on mobile) */}
            <div className="lg:col-span-7 snap-section h-[calc(100dvh-3.75rem)] lg:h-auto flex flex-col justify-center py-6 sm:py-8 lg:py-0">
              <div>
                <h1 className="font-heading font-bold text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] text-black tracking-tight leading-[1.14]">
                  {t.hero.title1}<br />
                  <span className="text-[#1C2974]">{t.hero.title2}</span>
                </h1>

                <p className="mt-3.5 sm:mt-5 text-[15px] sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                  {t.hero.sub}
                </p>

                {/* Action Buttons */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <a
                    href="#harga"
                    className="inline-flex items-center justify-center rounded-xl bg-[#1C2974] hover:bg-[#141d54] text-white px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold shadow-md shadow-[#1C2974]/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all text-center"
                  >
                    {t.hero.cta}
                  </a>
                  <a
                    href="#simulator-mobile"
                    className="lg:hidden inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#1C2974] py-2 text-center"
                  >
                    <span>Coba Simulasi Chat WhatsApp ↓</span>
                  </a>
                  <a
                    href="#perbandingan"
                    className="hidden lg:inline-flex items-center justify-center gap-1.5 text-sm sm:text-base font-semibold text-[#1C2974] hover:text-[#141d54] transition-colors py-2 text-center"
                  >
                    <span>{t.hero.learn}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* 3 Trust points below buttons */}
              <div className="mt-8 pt-5 sm:pt-6 border-t border-gray-100 grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-6 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1C2974] flex items-center justify-center flex-none">
                    <LightningIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-semibold text-gray-800">
                    {t.hero.trust1}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1C2974] flex items-center justify-center flex-none">
                    <CalendarIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-semibold text-gray-800">
                    {t.hero.trust2}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1C2974] flex items-center justify-center flex-none">
                    <ShieldCheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-semibold text-gray-800">
                    {t.hero.trust3}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Simulator Island (Dedicated full screen on mobile, right column on desktop) */}
            <div id="simulator-mobile" className="lg:col-span-5 snap-section h-[calc(100dvh-3.75rem)] lg:h-auto flex flex-col justify-center items-center py-4 lg:py-0 w-full scroll-mt-14">

              {/* Mobile-only header above simulator */}
              <div className="lg:hidden text-center mb-2">
                <p className="text-[10px] font-bold text-[#1C2974] tracking-wider uppercase">SIMULASI INTERAKTIF</p>
                <h2 className="text-sm font-bold text-black mt-0.5">Pilih Skenario Bisnis Anda</h2>
              </div>

              {/* Scenario Selector Tabs on Top of Phone */}
              <div className="w-full max-w-[340px] sm:max-w-[360px] mx-auto mb-2 sm:mb-2.5 grid grid-cols-4 gap-1 bg-gray-100/90 p-1 rounded-xl border border-gray-200/60 shadow-2xs">
                {t.hero.scenarios.map((sc, idx) => {
                  const ScIcon = sc.key === 'shop' ? ShoppingBagIcon : sc.key === 'clinic' ? ClinicIcon : sc.key === 'property' ? PropertyIcon : UserIcon
                  const isSelected = heroScenarioIndex === idx
                  return (
                    <button
                      key={sc.key}
                      type="button"
                      onClick={() => setHeroScenarioIndex(idx)}
                      className={`flex flex-col sm:flex-row items-center justify-center gap-1 py-1.5 px-1 rounded-lg text-[10px] sm:text-xs font-semibold transition-all min-h-[34px] sm:min-h-[36px] ${isSelected
                        ? 'bg-white text-[#1C2974] shadow-xs font-bold'
                        : 'text-gray-500 hover:text-black'
                        }`}
                      title={sc.label}
                    >
                      <ScIcon className={`w-3.5 h-3.5 flex-none ${isSelected ? 'text-[#1C2974]' : 'text-gray-400'}`} />
                      <span className="truncate">{sc.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Native WhatsApp Card (Mobile) & Authentic iPhone Frame (Desktop) */}
              <div className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto rounded-2xl sm:rounded-[44px] p-0 sm:p-2.5 bg-white sm:bg-gradient-to-b sm:from-gray-900 sm:to-black shadow-md sm:shadow-2xl border border-gray-200/90 sm:border-4 sm:border-gray-800 overflow-hidden sm:overflow-visible">
                {/* Dynamic Island - only on tablet/desktop */}
                <div className="hidden sm:block absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />

                {/* Phone Screen */}
                <div className="relative w-full rounded-2xl sm:rounded-[36px] overflow-hidden bg-[#EFEAE2] flex flex-col h-[420px] sm:h-[480px] lg:h-[500px]">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] text-white pt-2.5 sm:pt-8 pb-2 sm:pb-2.5 px-3 sm:px-3.5 flex items-center gap-2.5 shadow-sm z-10 flex-none">
                    <div className="text-white/80 p-0.5">
                      <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold flex-none">
                      {currentScenario.shopName.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-xs leading-tight truncate">{currentScenario.shopName}</div>
                      <div className="text-[10px] text-white/80 leading-tight flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                        <span>Online · Clevio AI</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 sm:gap-3 text-white/90">
                      <PhoneIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <VideoIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  {/* Chat Bubbles Scroll Area */}
                  <div ref={chatContainerRef} className="flex-1 p-3 sm:p-3.5 space-y-2 overflow-y-auto text-xs touch-pan-y no-scrollbar flex flex-col">
                    <div className="text-center mb-1">
                      <span className="inline-block bg-white/70 backdrop-blur-xs text-[10px] font-medium text-gray-500 px-2 py-0.5 rounded-md shadow-2xs">
                        {lang === 'id' ? 'HARI INI' : 'TODAY'}
                      </span>
                    </div>

                    {simulatedChat.map((msg, i) => (
                      <div
                        key={i}
                        className={`max-w-[85%] rounded-xl px-3 py-1.5 sm:py-2 leading-relaxed shadow-xs relative animate-fade-in ${msg.side === 'user'
                          ? 'self-end bg-[#D9FDD3] text-gray-900 rounded-tr-sm ml-auto'
                          : 'self-start bg-white text-gray-900 rounded-tl-sm border border-gray-100/50'
                          }`}
                      >
                        <p className="text-[11px] sm:text-[12px]">{msg.text}</p>
                        <div className="text-[9px] sm:text-[10px] text-gray-500 text-right mt-0.5 sm:mt-1 flex items-center justify-end gap-1">
                          <span>{msg.time}</span>
                          {msg.side === 'user' && <DoubleCheckIcon className="w-3 h-2 sm:w-3.5 sm:h-2.5 text-[#53BDEB]" />}
                        </div>
                      </div>
                    ))}

                    {/* AI Typing Indicator */}
                    {isAiTyping && (
                      <div className="self-start bg-white border border-gray-100 rounded-xl rounded-tl-sm px-3 py-1.5 shadow-xs flex items-center gap-1.5 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 typing-dot" />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 typing-dot" />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 typing-dot" />
                      </div>
                    )}
                  </div>

                  {/* Interactive Quick Action Questions INSIDE Phone */}
                  <div className="px-2.5 sm:px-3 py-2 bg-[#EFEAE2]/95 border-t border-black/5 flex flex-col gap-1.5 flex-none">
                    <div className="flex items-center justify-between text-[10px] text-gray-500 font-medium px-0.5">
                      <span className="flex items-center gap-1 font-semibold text-[#075E54]">
                        <SparklesIcon className="w-2.5 h-2.5" />
                        {lang === 'id' ? 'Tes Respon AI (Klik coba):' : 'Test AI Response (Tap to try):'}
                      </span>
                    </div>
                    {/* Compact Horizontal Scrollable WhatsApp Quick Reply Pills on Mobile / Vertical on Desktop */}
                    <div className="flex sm:flex-col gap-1.5 overflow-x-auto no-scrollbar py-0.5 sm:py-0">
                      {currentScenario.quickQuestions.map((qItem, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={(e) => handleSendQuickAction(qItem.q, qItem.a, e)}
                          disabled={isAiTyping}
                          className="flex-none sm:w-full text-left bg-white/95 hover:bg-white active:scale-[0.98] border border-gray-200/90 hover:border-[#075E54] rounded-full sm:rounded-xl px-2.5 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-medium text-gray-800 transition-all shadow-2xs flex items-center justify-between gap-1.5 group disabled:opacity-50 whitespace-nowrap sm:whitespace-normal"
                        >
                          <span className="truncate max-w-[210px] sm:max-w-none">{qItem.q}</span>
                          <span className="text-[#075E54] flex-none group-hover:translate-x-0.5 transition-transform">
                            <SendIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Input Bar */}
                  <div className="bg-[#F0F2F5] px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center gap-2 border-t border-gray-200/80 flex-none">
                    <div className="text-gray-500 p-0.5">
                      <SmileIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    </div>
                    <div className="flex-1 bg-white rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] text-gray-400 truncate">
                      {lang === 'id' ? 'Pilih pertanyaan di atas...' : 'Select a question above...'}
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#075E54] text-white flex items-center justify-center text-xs flex-none shadow-xs">
                      <SendIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION: CARA KERJA (How It Works) */}
      <section id="cara" className="snap-section relative min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] lg:max-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 lg:py-6 bg-[#F8FAFC] border-b border-gray-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
          <div className="text-center max-w-2xl mx-auto mb-4 lg:mb-6">
            <p className="font-heading font-bold text-[11px] tracking-[0.2em] text-[#1C2974] uppercase">
              {t.how.eyebrow}
            </p>
            <h2 className="mt-1 font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-black">
              {t.how.title}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-600">
              {t.how.sub}
            </p>
          </div>

          {/* Mobile: Single Connected Stepper Island (Zero Clutter, 1 Cohesive Module) */}
          <div className="md:hidden bg-white rounded-2xl border border-gray-200/80 p-4 shadow-xs">
            <div className="space-y-4 relative">
              {/* Continuous vertical connector line */}
              <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-blue-100 -z-0" />

              {t.how.steps.map((step, idx) => (
                <div key={step.n} className="relative z-10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1C2974] text-white font-heading font-bold flex items-center justify-center text-xs flex-none shadow-xs ring-4 ring-white">
                    {step.n}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="w-5 h-5 rounded-md bg-blue-50 text-[#1C2974] flex items-center justify-center flex-none">
                        {idx === 0 ? <MessageSquareIcon className="w-3 h-3" /> : idx === 1 ? <QrCodeIcon className="w-3 h-3" /> : <SparklesIcon className="w-3 h-3" />}
                      </span>
                      <h3 className="font-heading font-bold text-sm text-black">
                        {step.t}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop & Tablet: 3-Column Grid (100% 1:1 Desktop Parity) */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6">
            {t.how.steps.map((step, idx) => (
              <div
                key={step.n}
                className="bg-white rounded-2xl p-5 lg:p-6 border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#1C2974] font-heading font-bold flex items-center justify-center text-xs">
                    {step.n}
                  </span>
                  <span className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#1C2974]">
                    {idx === 0 ? <MessageSquareIcon className="w-4 h-4" /> : idx === 1 ? <QrCodeIcon className="w-4 h-4" /> : <SparklesIcon className="w-4 h-4" />}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base lg:text-lg text-black mb-1">
                  {step.t}
                </h3>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: PERBANDINGAN CHATBOT LAMA VS CLEVIO AI STAFF */}
      <section id="perbandingan" className="snap-section relative min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] lg:max-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 lg:py-4 bg-white border-b border-gray-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
          <div className="text-center max-w-3xl mx-auto mb-3 lg:mb-4">
            <p className="font-heading font-bold text-[11px] tracking-[0.2em] text-[#1C2974] uppercase">
              {t.comparison.eyebrow}
            </p>
            <h2 className="mt-1 font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-black">
              {t.comparison.title}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-normal max-w-2xl mx-auto">
              {t.comparison.sub}
            </p>
          </div>

          {/* Mobile Segmented Switch (clean 1-screen comparison on mobile) */}
          <div className="lg:hidden flex items-center justify-center mb-3">
            <div className="inline-flex bg-gray-100 p-1 rounded-xl border border-gray-200/90 w-full max-w-sm">
              <button
                type="button"
                onClick={() => setComparisonTab('bot')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${comparisonTab === 'bot'
                  ? 'bg-white text-red-700 shadow-xs'
                  : 'text-gray-500 hover:text-black'
                  }`}
              >
                Chatbot Lama
              </button>
              <button
                type="button"
                onClick={() => setComparisonTab('clevio')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${comparisonTab === 'clevio'
                  ? 'bg-[#1C2974] text-white shadow-xs'
                  : 'text-gray-500 hover:text-black'
                  }`}
              >
                Clevio AI Staff
              </button>
            </div>
          </div>

          {/* Comparison Cards (Side-by-side on desktop, switched on mobile for zero scroll fatigue) */}
          <div className="grid lg:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-6 items-stretch">

            {/* Card 1: Chatbot Lama */}
            <div className={`rounded-2xl p-4 sm:p-5 border border-red-200 bg-red-50/20 flex-col justify-between ${comparisonTab === 'bot' ? 'flex' : 'hidden'} lg:flex`}>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold tracking-wider mb-1.5">
                  {t.comparison.botBadge}
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-gray-900 mb-0.5">
                  {t.comparison.botTitle}
                </h3>
                <p className="text-xs text-gray-600 mb-2 leading-snug line-clamp-2">
                  {t.comparison.botDesc}
                </p>

                {/* Simulated Chat Dialogue */}
                <div className="rounded-xl p-2.5 bg-gray-100/90 border border-gray-200 mb-2 space-y-1.5 text-xs font-sans">
                  {t.comparison.botChat.map((m, i) => (
                    <div
                      key={i}
                      className={`max-w-[88%] rounded-xl px-2.5 py-1 leading-relaxed ${m.side === 'user'
                        ? 'self-end bg-gray-300 text-gray-900 ml-auto'
                        : 'self-start bg-white text-gray-800'
                        }`}
                    >
                      <p className="text-[11px]">{m.text}</p>
                      <span className="text-[9px] text-gray-500 block text-right mt-0.5">{m.time}</span>
                    </div>
                  ))}
                </div>

                {/* Pain points */}
                <ul className="space-y-1.5 text-xs text-gray-700">
                  {t.comparison.botBad.map((bad, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-none mt-0.5">
                        <CloseIcon className="w-2.5 h-2.5" />
                      </span>
                      <span>{bad}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Clevio AI Staff */}
            <div className={`rounded-2xl p-4 sm:p-5 border-2 border-[#1C2974] bg-white shadow-xl shadow-[#1C2974]/10 flex-col justify-between relative ${comparisonTab === 'clevio' ? 'flex' : 'hidden'} lg:flex`}>
              <span className="absolute -top-3 right-6 bg-[#1C2974] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                REKOMENDASI BISNIS
              </span>

              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1C2974] text-[10px] font-bold tracking-wider mb-1.5">
                  {t.comparison.clevioBadge}
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-black mb-0.5">
                  {t.comparison.clevioTitle}
                </h3>
                <p className="text-xs text-gray-600 mb-2 leading-snug line-clamp-2">
                  {t.comparison.clevioDesc}
                </p>

                {/* Simulated Chat Dialogue */}
                <div className="rounded-xl p-2.5 bg-[#EFEAE2] border border-gray-200 mb-2 space-y-1.5 text-xs font-sans">
                  {t.comparison.clevioChat.map((m, i) => (
                    <div
                      key={i}
                      className={`max-w-[88%] rounded-xl px-2.5 py-1 leading-relaxed shadow-xs ${m.side === 'user'
                        ? 'self-end bg-[#D9FDD3] text-gray-900 ml-auto'
                        : 'self-start bg-white text-gray-900'
                        }`}
                    >
                      <p className="text-[11px]">{m.text}</p>
                      <div className="text-[9px] text-gray-500 text-right mt-0.5 flex items-center justify-end gap-1">
                        <span>{m.time}</span>
                        {m.side === 'user' && <DoubleCheckIcon className="w-3 h-2 text-[#53BDEB]" />}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Advantages */}
                <ul className="space-y-1.5 text-xs text-gray-800">
                  {t.comparison.clevioGood.map((good, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-50 text-[#1C2974] flex items-center justify-center flex-none mt-0.5">
                        <CheckIcon className="w-2.5 h-2.5" />
                      </span>
                      <span>{good}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-2.5 pt-2.5 border-t border-gray-100">
                <a
                  href="#harga"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#1C2974] hover:bg-[#141d54] text-white py-2 px-4 text-xs font-semibold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Coba Clevio AI Sekarang</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SECTION: SPOTLIGHT ARTHUR (WITH EMBED YOUTUBE VIDEO) */}
      <section id="arthur" className="snap-section relative min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] lg:max-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 lg:py-6 bg-[#F8FAFC] border-b border-gray-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">

            {/* Left Copy */}
            <div className="lg:col-span-5">
              <p className="font-heading font-bold text-[11px] tracking-[0.2em] text-[#1C2974] uppercase">
                {t.arthur.eyebrow}
              </p>
              <h2 className="mt-1 font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-black leading-tight">
                {t.arthur.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {t.arthur.body}
              </p>
              <div className="mt-4 sm:mt-5">
                <a
                  href="#harga"
                  className="inline-flex items-center justify-center rounded-xl bg-[#1C2974] hover:bg-[#141d54] text-white px-6 py-2.5 text-xs sm:text-sm font-semibold shadow-sm transition-all"
                >
                  {t.arthur.cta}
                </a>
              </div>
            </div>

            {/* Right: Embed YouTube Video */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-black aspect-video max-h-[340px] mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/p1hM4oHnngc"
                  title="Clevio AI Staff Arthur Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center text-[11px] text-gray-500 mt-2">
                Tonton video demo singkat bagaimana Arthur merangkum kebutuhan bisnis Anda.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION: SOLUSI UNTUK BERBAGAI INDUSTRI (Use Cases) */}
      <section id="solusi" className="snap-section relative min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] lg:max-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 lg:py-4 bg-white border-b border-gray-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full my-auto">
          <div className="text-center max-w-2xl mx-auto mb-2.5 lg:mb-3">
            <p className="font-heading font-bold text-[11px] tracking-[0.2em] text-[#1C2974] uppercase">
              {t.solusi.eyebrow}
            </p>
            <h2 className="mt-1 font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-black">
              {t.solusi.title}
            </h2>
          </div>

          {/* Pill Tabs with SVG Icons (Clean centered wrap on tablet/desktop, smooth contained scroll on mobile) */}
          <div className="w-full flex justify-center mb-3 lg:mb-4 px-2 overflow-hidden">
            <div className="inline-flex max-w-full bg-gray-100 p-1 rounded-xl border border-gray-200/80 gap-1 overflow-x-auto no-scrollbar">
              {t.useCases.map((u) => {
                const IconComponent = u.key === 'shop' ? ShoppingBagIcon : u.key === 'clinic' ? ClinicIcon : u.key === 'property' ? PropertyIcon : UserIcon
                const isSelected = tab === u.key
                return (
                  <button
                    key={u.key}
                    type="button"
                    onClick={() => setTab(u.key)}
                    className={`inline-flex items-center gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#1C2974] text-white shadow-xs'
                        : 'text-gray-600 hover:text-black hover:bg-white'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 flex-none ${isSelected ? 'text-white' : 'text-gray-500'}`} />
                    <span>{u.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Split Content: Bullet points & WhatsApp Demo Card */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-200/80 shadow-xs grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">

            {/* Left: Bullets */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-blue-50 text-[#1C2974] text-[10px] font-bold uppercase tracking-wider mb-2">
                {activeUseCase.key === 'shop' && <ShoppingBagIcon className="w-3.5 h-3.5 text-[#1C2974]" />}
                {activeUseCase.key === 'clinic' && <ClinicIcon className="w-3.5 h-3.5 text-[#1C2974]" />}
                {activeUseCase.key === 'property' && <PropertyIcon className="w-3.5 h-3.5 text-[#1C2974]" />}
                {activeUseCase.key === 'personal' && <UserIcon className="w-3.5 h-3.5 text-[#1C2974]" />}
                <span>{activeUseCase.label}</span>
              </span>
              <h3 className="font-heading font-bold text-lg sm:text-2xl md:text-3xl text-black leading-snug">
                {activeUseCase.title}
              </h3>
              <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-gray-600 leading-relaxed">
                {activeUseCase.desc}
              </p>

              <ul className="mt-5 sm:mt-8 space-y-2 sm:space-y-3.5">
                {activeUseCase.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-800">
                    <span className="flex-none w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-blue-50 text-[#1C2974] flex items-center justify-center text-xs mt-0.5">
                      <CheckIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: WhatsApp Dialogue Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-[#EFEAE2] flex flex-col h-[280px] sm:h-[360px] md:h-[400px]">
                {/* Header */}
                <div className="bg-[#075E54] text-white px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                    {activeUseCase.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-xs truncate">{activeUseCase.name}</div>
                    <div className="text-[10px] text-white/80">Online</div>
                  </div>
                  <div className="flex gap-2.5 text-xs text-white/90">
                    <PhoneIcon className="w-3.5 h-3.5" />
                    <VideoIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Chat items (touch safe: thumb swipe scrolls page on mobile) */}
                <div className="flex-1 p-3 sm:p-4 space-y-2 sm:space-y-3 overflow-y-auto pointer-events-none sm:pointer-events-auto flex flex-col justify-end text-xs touch-pan-y">
                  {activeUseCase.chat.map((msg, i) => (
                    <div
                      key={i}
                      className={`max-w-[85%] rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 leading-relaxed shadow-xs relative ${msg.side === 'user'
                        ? 'self-end bg-[#D9FDD3] text-gray-900 rounded-tr-sm'
                        : 'self-start bg-white text-gray-900 rounded-tl-sm border border-gray-100/50'
                        }`}
                    >
                      <p className="text-[11px] sm:text-xs">{msg.text}</p>
                      <div className="text-[9px] sm:text-[10px] text-gray-400 text-right mt-0.5 sm:mt-1 flex items-center justify-end gap-1">
                        <span>{msg.time}</span>
                        {msg.side === 'user' && <DoubleCheckIcon className="w-3 h-2 sm:w-3.5 sm:h-2.5 text-[#53BDEB]" />}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input stub */}
                <div className="bg-[#F0F2F5] px-3 py-1.5 sm:py-2 flex items-center gap-2 border-t border-gray-200">
                  <div className="flex-1 bg-white rounded-full px-3 py-1 text-[10px] sm:text-[11px] text-gray-400 truncate">
                    Ketik pesan...
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#075E54] text-white flex items-center justify-center text-[10px]">
                    <SendIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SECTION: PAKET & HARGA (Pricing) */}
      <section id="harga" className="snap-section relative min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] lg:max-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 lg:py-4 bg-[#F8FAFC] border-b border-gray-100 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full my-auto">
          <div className="text-center max-w-2xl mx-auto mb-3 lg:mb-5">
            <p className="font-heading font-bold text-[11px] tracking-[0.2em] text-[#1C2974] uppercase">
              {t.pricing.eyebrow}
            </p>
            <h2 className="mt-1 font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-black">
              {t.pricing.title}
            </h2>
          </div>

          {/* 2 Pricing Cards (Growth & Business) */}
          <div className="grid md:grid-cols-2 max-w-3xl mx-auto gap-4 sm:gap-6 items-stretch">
            {t.pricing.plans.map((p) => {
              const priceVal = p.m
              return (
                <div
                  key={p.name}
                  className={`rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all relative ${p.featured
                    ? 'border-2 border-[#1C2974] bg-white shadow-xl shadow-[#1C2974]/10 lg:-translate-y-1'
                    : 'border border-gray-200/90 bg-white shadow-xs hover:shadow-md'
                    }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1C2974] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                      {t.pricing.popular}
                    </span>
                  )}

                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-xl text-black">{p.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{p.sub}</p>

                    <div className="mt-3 mb-3 flex items-baseline gap-1.5">
                      <span className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-black">
                        {priceVal === 0 ? 'Rp 0' : `Rp ${priceVal}k`}
                      </span>
                      <span className="text-xs text-gray-500">{t.pricing.per}</span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700 border-t border-gray-100 pt-3">
                      {p.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-blue-50 text-[#1C2974] flex items-center justify-center flex-none mt-0.5">
                            <CheckIcon className="w-2.5 h-2.5" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <a
                      href="https://wa.me/?text=Halo%20Clevio,%20saya%20tertarik%20mencoba%20layanan%20Clevio%20AI%20Staff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center rounded-xl py-2.5 text-xs sm:text-sm font-semibold transition-all ${p.featured
                        ? 'bg-[#1C2974] hover:bg-[#141d54] text-white shadow-md'
                        : 'bg-gray-100 hover:bg-gray-200 text-black'
                        }`}
                    >
                      {p.btnText}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. SECTION: PERTANYAAN YANG SERING DIAJUKAN (FAQ) */}
      <section id="faq" className="snap-section relative min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] lg:max-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 lg:py-4 bg-white border-b border-gray-100 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full my-auto">
          <div className="text-center mb-3 lg:mb-4">
            <p className="font-heading font-bold text-[11px] tracking-[0.2em] text-[#1C2974] uppercase">
              {t.faq.eyebrow}
            </p>
            <h2 className="mt-1 font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-black">
              {t.faq.title}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              {lang === 'id'
                ? 'Semua jawaban penting tentang integrasi WhatsApp, keamanan data, dan pengelolaan Clevio AI Staff.'
                : 'All essential answers regarding WhatsApp integration, data privacy, and managing Clevio AI Staff.'}
            </p>
          </div>

          {/* Clean, Refined Single-Column Accordion Island */}
          <div className="bg-white rounded-2xl border border-gray-200/90 divide-y divide-gray-100 p-2 sm:p-4 shadow-xs">
            {t.faq.items.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-2.5 sm:py-3.5 flex items-start justify-between gap-3 text-left group transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-xs sm:text-sm md:text-base text-black group-hover:text-[#1C2974] transition-colors leading-snug">
                      {item.q}
                    </span>
                    <span
                      className={`flex-none w-6 h-6 rounded-full bg-gray-100 group-hover:bg-blue-50 text-[#1C2974] flex items-center justify-center transition-transform duration-200 mt-0.5 ${isOpen ? 'rotate-180 bg-blue-50' : ''
                        }`}
                    >
                      <ChevronDownIcon className="w-3 h-3" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-2.5 sm:pb-3 pr-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans animate-fade-in">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-3 sm:mt-4 text-center">
            <p className="text-xs text-gray-500">
              {lang === 'id' ? 'Punya pertanyaan spesifik untuk bisnis Anda?' : 'Have a specific question for your business?'}{' '}
              <a
                href="#cara"
                className="text-[#1C2974] font-semibold hover:underline inline-flex items-center gap-1 ml-1"
              >
                <span>{t.faq.viewAll}</span>
                <ArrowRightIcon className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 9. SECTION: FINAL CALL TO ACTION */}
      <section className="py-8 sm:py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#1C2974] rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-14 text-white shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-8">
            <div className="max-w-2xl">
              <h2 className="font-heading font-bold text-xl sm:text-3xl md:text-4xl text-white leading-tight">
                {t.cta.title}
              </h2>
              <p className="mt-2 sm:mt-4 text-xs sm:text-base md:text-lg text-white/80 leading-relaxed">
                {t.cta.sub}
              </p>
            </div>
            <div className="flex-none">
              <a
                href="#harga"
                className="inline-flex items-center justify-center rounded-xl bg-white hover:bg-gray-100 text-[#1C2974] font-semibold text-xs sm:text-base px-6 py-3 sm:px-8 sm:py-4 shadow-lg hover:scale-[1.02] transition-all w-full sm:w-auto text-center"
              >
                {t.cta.btn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#F8FAFC] border-t border-gray-200/80 py-8 sm:py-12 md:py-16 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-gray-200">
            {/* Logo column */}
            <div className="col-span-2 md:col-span-1">
              <ClevioLogo size="md" className="sm:hidden" variant="dark" />
              <ClevioLogo size="lg" className="hidden sm:inline-flex" variant="dark" />
              <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.footer.systems}</span>
              </div>
            </div>

            {/* Column 1 */}
            <div>
              <h4 className="font-heading font-bold text-black text-xs uppercase tracking-wider mb-3 sm:mb-4">
                {t.footer.clevio}
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-gray-600">
                <li><a href="#solusi" className="hover:text-black transition-colors">{t.footer.links.solusi}</a></li>
                <li><a href="#cara" className="hover:text-black transition-colors">{t.footer.links.cara}</a></li>
                <li><a href="#perbandingan" className="hover:text-black transition-colors">{t.footer.links.cara}</a></li>
                <li><a href="#harga" className="hover:text-black transition-colors">{t.footer.links.harga}</a></li>
                <li><a href="#" className="hover:text-black transition-colors">{t.footer.links.blog}</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-heading font-bold text-black text-xs uppercase tracking-wider mb-3 sm:mb-4">
                {t.footer.dukungan}
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-gray-600">
                <li><a href="#faq" className="hover:text-black transition-colors">{t.footer.links.pusatBantuan}</a></li>
                <li><a href="#" className="hover:text-black transition-colors">{t.footer.links.kontak}</a></li>
                <li><a href="#" className="hover:text-black transition-colors">{t.footer.links.status}</a></li>
                <li><a href="#" className="hover:text-black transition-colors">{t.footer.links.komunitas}</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-heading font-bold text-black text-xs uppercase tracking-wider mb-3 sm:mb-4">
                {t.footer.perusahaan}
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">{t.footer.links.tentang}</a></li>
                <li><a href="#" className="hover:text-black transition-colors">{t.footer.links.karier}</a></li>
                <li><a href="#" className="hover:text-black transition-colors">{t.footer.links.media}</a></li>
                <li><a href="#" className="hover:text-black transition-colors">{t.footer.links.mitra}</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-heading font-bold text-black text-xs uppercase tracking-wider mb-3 sm:mb-4">
                {t.footer.legal}
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-600">
                <li><Link to="/privacy" className="hover:text-black transition-colors">{t.footer.links.privasi}</Link></li>
                <li><Link to="/terms" className="hover:text-black transition-colors">{t.footer.links.ketentuan}</Link></li>
                <li><a href="#" className="hover:text-black transition-colors">{t.footer.links.aiPolicy}</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-gray-500">
            <div>
              © {new Date().getFullYear()} Clevio AI Staff. {t.footer.copyright} Operator: PT Clevio.
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <a href="#" aria-label="YouTube" className="hover:text-black transition-colors p-1">
                <VideoIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-black transition-colors p-1">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-black transition-colors p-1">
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
