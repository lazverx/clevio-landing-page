import { useState, useEffect } from 'react'
import ClevioLogo from '../components/ClevioLogo'
import { ArrowRightIcon, PhoneIcon } from '../components/Icons'

type Lang = 'id' | 'en'

const WA_URL_ID =
  'https://wa.me/6282221118860?text=Halo%20Tim%20Clevio%20AI%20Pro%2C%20saya%20tertarik%20mendaftar%20Workshop%20Clevio%20AI%20Pro.'
const WA_URL_EN =
  'https://wa.me/6282221118860?text=Hello%20Clevio%20AI%20Pro%20Team%2C%20I%20would%20like%20to%20inquire%20about%20the%20Clevio%20AI%20Pro%20Workshop.'
const WA_INHOUSE_ID =
  'https://wa.me/6282221118860?text=Halo%20Tim%20Clevio%20AI%20Pro%2C%20saya%20ingin%20berdiskusi%20mengenai%20In-House%20Workshop%20untuk%20organisasi%20kami.'
const WA_INHOUSE_EN =
  'https://wa.me/6282221118860?text=Hello%20Clevio%20AI%20Pro%20Team%2C%20I%20would%20like%20to%20discuss%20an%20In-House%20Workshop%20for%20our%20organisation.'
const MENTOR_ARTICLE_URL =
  'https://rumahpengetahuan.web.id/aranggi-soemardjan-pengantar-masa-depan/'
const VIDEO_WORKSHOP_EMBED =
  'https://drive.google.com/file/d/1OYTSNpAidncScOpdwzD30jPdOUzE9OkY/preview'
const VIDEO_ARANGGI_EMBED =
  'https://drive.google.com/file/d/1Qtgxb8THbVPC-9d77CmZxg0x0w99Mb80/preview'

export default function ClevioPro() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return localStorage.getItem('clevio-language') === 'en' ? 'en' : 'id'
    } catch {
      return 'id'
    }
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeStage, setActiveStage] = useState<number>(0)
  const [activeVideo, setActiveVideo] = useState<'workshop' | 'mentor' | null>(null)

  const isEn = lang === 'en'
  const waHref = isEn ? WA_URL_EN : WA_URL_ID
  const waInhouseHref = isEn ? WA_INHOUSE_EN : WA_INHOUSE_ID

  const changeLang = (next: Lang) => {
    setLang(next)
    document.documentElement.lang = next
    try {
      localStorage.setItem('clevio-language', next)
    } catch {
      return
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = isEn
      ? 'Clevio AI Pro | Not replaced by AI. Lead with AI.'
      : 'Clevio AI Pro | Bukan diganti AI. Tapi Memimpin AI.'
  }, [lang, isEn])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        setActiveVideo(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const stages = [
    {
      num: '01',
      badge: isEn ? 'PRE-SESSION · D-14' : 'PRA-SESI · H-14',
      title: isEn ? 'Understand your business context' : 'Pahami konteks bisnis Anda',
      summary: isEn
        ? 'Mapping real organisational challenges and expectations before the workshop begins.'
        : 'Memetakan tantangan dan ekspektasi nyata organisasi sebelum sesi tatap muka dimulai.',
      detail: isEn
        ? 'Participants do not arrive empty-handed. Two weeks prior to the workshop, our AI learning assistant guides you in identifying high-priority business bottlenecks and framing the right questions to bring into the room.'
        : 'Peserta tidak datang dengan tangan kosong. Dua minggu sebelum sesi, asisten pembelajaran membantu mengidentifikasi hambatan prioritas di tempat kerja Anda agar siap dibedah di ruang workshop.',
      deliverable: isEn
        ? 'Context Brief & Priority Problem Statement'
        : 'Peta Konteks Bisnis & Rumusan Masalah Prioritas',
      img: './clevio-pro/unsplash-challenge.jpg',
    },
    {
      num: '02',
      badge: isEn ? 'CORE WORKSHOP · 1 FULL DAY' : 'SESI INTI · 1 HARI PENUH',
      title: isEn ? 'Design solutions with AI' : 'Rancang solusi dengan AI',
      summary: isEn
        ? 'Hands-on problem deconstruction with Design Thinking and rapid AI prototyping.'
        : 'Bedah akar masalah dengan Design Thinking dan rancang prototipe solusi bersama AI.',
      detail: isEn
        ? 'Guided directly by Aranggi Soemardjan, participants combine human empathy, Higher-Order Thinking (HOTS), and cross-functional AI orchestration to turn raw challenges into working solution prototypes within a single day.'
        : 'Dipandu langsung oleh Bpk. Aranggi Soemardjan, peserta memadukan empati pengguna, penalaran kritis (HOTS), dan orkestrasi asisten AI untuk mengubah masalah nyata menjadi prototipe solusi dalam satu hari.',
      deliverable: isEn
        ? 'Working AI-Assisted Solution Prototype'
        : 'Prototipe Solusi Berbasis AI yang Siap Diuji',
      img: './clevio-pro/unsplash-process.jpg',
    },
    {
      num: '03',
      badge: isEn ? 'IMPLEMENTATION · D+14' : 'IMPLEMENTASI · H+14',
      title: isEn
        ? 'Validate and iterate for execution'
        : 'Validasi dan iterasi untuk implementasi',
      summary: isEn
        ? 'Testing assumptions in your actual workplace and refining the execution roadmap.'
        : 'Menguji asumsi langsung di lingkungan kerja dan menyempurnakan langkah eksekusi.',
      detail: isEn
        ? 'True impact happens after the classroom. Over the two weeks following the workshop, participants test their prototypes with real stakeholders, gather feedback, iterate, and lock in an actionable implementation plan.'
        : 'Dampak sejati diukur di lapangan kerja. Selama dua minggu pasca-sesi, peserta menguji prototipe kepada pengguna nyata, mengumpulkan umpan balik, melakukan iterasi, dan mengunci rencana implementasi.',
      deliverable: isEn
        ? 'Validated Prototype & Organisational Action Plan'
        : 'Prototipe Tervalidasi & Rencana Eksekusi Nyata',
      img: './clevio-pro/unsplash-gallery-2.jpg',
    },
  ]

  return (
    <div
      id="top"
      className="min-h-screen bg-[#F4F1EA] text-[#101614] selection:bg-[#B8502B] selection:text-white overflow-x-clip w-full"
      style={{ fontFamily: '"Plus Jakarta Sans", "Manrope", sans-serif' }}
    >
      <header className="sticky top-0 z-40 bg-[#F4F1EA]/90 backdrop-blur-md border-b border-[#DED9CE]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-4">
          <a
            href="#top"
            className="inline-flex items-baseline gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101614]"
          >
            <ClevioLogo size="md" variant="dark" sublabel="" />
            <span
              className="text-2xl italic font-normal text-[#B8502B] -ml-0.5"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              AI Pro
            </span>
          </a>

          <nav
            aria-label={isEn ? 'Main navigation' : 'Navigasi utama'}
            className="hidden xl:flex items-center gap-1 bg-[#E8E3D8] p-1 rounded-full border border-[#D8D2C5]"
          >
            {[
              { href: '#tantangan', num: '01', label: isEn ? 'Challenge' : 'Realita' },
              { href: '#hasil', num: '02', label: isEn ? '3H Impact' : 'Dampak 3H' },
              { href: '#kurikulum', num: '03', label: isEn ? 'Process' : 'Alur 3 Tahap' },
              { href: '#kompetensi', num: '04', label: isEn ? 'Capabilities' : 'Kompetensi' },
              { href: '#mentor', num: '05', label: isEn ? 'Facilitator' : 'Fasilitator' },
              { href: '#galeri', num: '06', label: isEn ? 'Gallery' : 'Galeri' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2C3330] hover:bg-white hover:text-[#101614] transition-all flex items-center gap-1.5"
              >
                <span className="text-[10px] font-bold text-[#B8502B] tabular-nums">
                  {item.num}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div
              role="group"
              aria-label={isEn ? 'Language selection' : 'Pilihan bahasa'}
              className="inline-flex items-center bg-[#E8E3D8] p-0.5 rounded-full border border-[#D8D2C5] text-[11px] font-bold"
            >
              <button
                type="button"
                onClick={() => changeLang('id')}
                aria-pressed={lang === 'id'}
                aria-label="Bahasa Indonesia"
                className={`min-w-[34px] min-h-[34px] px-2.5 rounded-full inline-flex items-center justify-center transition-all ${
                  lang === 'id'
                    ? 'bg-[#101614] text-white shadow-xs'
                    : 'text-[#525855] hover:text-[#101614]'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => changeLang('en')}
                aria-pressed={lang === 'en'}
                aria-label="English"
                className={`min-w-[34px] min-h-[34px] px-2.5 rounded-full inline-flex items-center justify-center transition-all ${
                  lang === 'en'
                    ? 'bg-[#101614] text-white shadow-xs'
                    : 'text-[#525855] hover:text-[#101614]'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-[#B8502B] hover:bg-[#9E4120] text-white px-5 py-2 text-xs font-bold tracking-wide transition-colors"
            >
              <span>{isEn ? 'Register Workshop' : 'Daftar Workshop'}</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={
                isEn
                  ? mobileMenuOpen
                    ? 'Close menu'
                    : 'Open menu'
                  : mobileMenuOpen
                    ? 'Tutup menu'
                    : 'Buka menu'
              }
              className="xl:hidden w-10 h-10 rounded-full border border-[#D8D2C5] bg-white flex flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`w-4 h-px bg-[#101614] transition-transform ${
                  mobileMenuOpen ? 'translate-y-[3.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`w-4 h-px bg-[#101614] transition-transform ${
                  mobileMenuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-[#DED9CE] bg-[#F4F1EA] px-6 py-4 space-y-1 shadow-xl">
            {[
              { href: '#tantangan', label: isEn ? '01 · Current Challenge' : '01 · Tantangan Saat Ini' },
              { href: '#hasil', label: isEn ? '02 · 3H Outcomes' : '02 · Hasil yang Dicapai (3H)' },
              { href: '#kurikulum', label: isEn ? '03 · 3-Step Programme' : '03 · Alur Program 3 Langkah' },
              { href: '#kompetensi', label: isEn ? '04 · Capabilities & Format' : '04 · Kompetensi & Format' },
              { href: '#mentor', label: isEn ? '05 · Facilitator Profile' : '05 · Profil Fasilitator' },
              { href: '#galeri', label: isEn ? '06 · Gallery & Contact' : '06 · Galeri & Pendaftaran' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[46px] flex items-center justify-between text-sm font-bold text-[#101614] border-b border-[#DED9CE]/60 last:border-b-0"
              >
                <span>{item.label}</span>
                <ArrowRightIcon className="w-4 h-4 text-[#B8502B]" />
              </a>
            ))}
            <div className="pt-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[46px] rounded-full inline-flex items-center justify-center gap-2 bg-[#B8502B] text-white text-sm font-bold"
              >
                <span>{isEn ? 'Register Workshop' : 'Daftar Workshop'}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* SCREEN 01: ASYMMETRIC BENTO HERO */}
        <section className="min-h-[calc(100svh-72px)] flex flex-col justify-center py-6 sm:py-8 px-4 sm:px-8 max-w-[1320px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 flex-1 items-stretch">
            <div className="lg:col-span-7 rounded-2xl bg-[#101614] text-[#F4F1EA] p-7 sm:p-11 lg:p-14 flex flex-col justify-between relative overflow-hidden">
              <div>
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D98260] mb-6">
                  {isEn
                    ? 'AI THINKING & INNOVATION WORKSHOP'
                    : 'WORKSHOP AI THINKING & INNOVATION'}
                </p>

                <h1 className="font-extrabold text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.04em] text-white">
                  {isEn ? (
                    <>
                      Not replaced by AI.
                      <br />
                      <span
                        className="italic font-normal text-[#E8C5B0]"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                      >
                        But leading with AI.
                      </span>
                    </>
                  ) : (
                    <>
                      Bukan diganti AI.
                      <br />
                      <span
                        className="italic font-normal text-[#E8C5B0]"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                      >
                        Tapi Memimpin AI.
                      </span>
                    </>
                  )}
                </h1>

                <p className="mt-6 text-base sm:text-lg lg:text-[19px] text-[#B8C0BC] leading-relaxed max-w-[44ch]">
                  {isEn
                    ? 'A one-day intensive workshop for leaders and professionals ready to turn AI potential into real organisational value.'
                    : 'Workshop 1 hari untuk pemimpin dan profesional yang siap menciptakan nilai nyata dengan AI.'}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[50px] inline-flex items-center justify-center gap-3 rounded-full bg-[#B8502B] hover:bg-[#9E4120] text-white px-7 py-3.5 text-sm font-bold transition-colors"
                  >
                    <span>{isEn ? 'Register Workshop' : 'Daftar Workshop'}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveVideo('workshop')}
                    className="min-h-[50px] inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-sm font-semibold transition-colors"
                  >
                    <span>{isEn ? 'Watch Preview' : 'Cuplikan Sesi'}</span>
                    <span aria-hidden="true" className="text-xs text-[#D98260]">
                      ▶
                    </span>
                  </button>
                </div>

                <a
                  href="#tantangan"
                  className="text-xs font-semibold text-[#949E99] hover:text-white inline-flex items-center gap-1.5"
                >
                  <span>{isEn ? 'Explore below' : ' Eksplorasi'}</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
              <div className="relative flex-1 min-h-[260px] rounded-2xl overflow-hidden border border-[#D8D2C5] bg-[#1C2421]">
                <img
                  src="./clevio-pro/unsplash-hero.jpg"
                  alt={
                    isEn
                      ? 'Executive architecture representing leadership in the age of AI'
                      : 'Arsitektur kepemimpinan strategis di era AI'
                  }
                  className="w-full h-full object-cover sepia-[.12] contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101614]/90 via-[#101614]/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="inline-block w-fit px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-xs text-[10px] font-bold tracking-[0.16em] uppercase text-white mb-2">
                    {isEn ? 'EXECUTIVE BRIEF' : 'PRINSIP EKSEKUTIF'}
                  </span>
                  <p className="text-sm sm:text-base font-medium text-white leading-snug">
                    {isEn
                      ? 'AI processes past patterns. Humans define empathy, direction, and new value creation.'
                      : 'AI mengolah data masa lalu. Manusia menentukan empati, arah, dan penciptaan nilai baru.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-2xl bg-white border border-[#DED9CE] p-4 sm:p-5">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#757A77]">
                    {isEn ? 'FORMAT' : 'FORMAT'}
                  </p>
                  <p
                    className="mt-1 text-lg sm:text-xl font-extrabold text-[#101614]"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    {isEn ? '1 Full Day' : '1 Hari'}
                  </p>
                  <p className="text-[11px] text-[#5C615E] mt-0.5">In-Person / Hybrid</p>
                </div>

                <div className="rounded-2xl bg-white border border-[#DED9CE] p-4 sm:p-5">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#757A77]">
                    {isEn ? 'CYCLE' : 'SIKLUS'}
                  </p>
                  <p
                    className="mt-1 text-lg sm:text-xl font-extrabold text-[#101614] tabular-nums"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    H-14 · H+14
                  </p>
                  <p className="text-[11px] text-[#5C615E] mt-0.5">Flipped Learning</p>
                </div>

                <div className="rounded-2xl bg-[#E8E3D8] border border-[#D8D2C5] p-4 sm:p-5">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#757A77]">
                    {isEn ? 'FOCUS' : 'FOKUS'}
                  </p>
                  <p
                    className="mt-1 text-lg sm:text-xl font-extrabold text-[#B8502B]"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    3H + 5C
                  </p>
                  <p className="text-[11px] text-[#5C615E] mt-0.5">Value Creation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCREEN 02: TANTANGAN SAAT INI (VISUAL POSTER + HORIZONTAL LEDGER STACK) */}
        <section
          id="tantangan"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-8 max-w-[1320px] mx-auto scroll-mt-[72px]"
        >
          <div className="grid lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden relative min-h-[340px] bg-[#101614] text-white p-8 sm:p-10 flex flex-col justify-between">
              <img
                src="./clevio-pro/unsplash-challenge.jpg"
                alt={isEn ? 'Changing workplace dynamics' : 'Perubahan dinamika dunia kerja'}
                className="absolute inset-0 w-full h-full object-cover opacity-30 sepia-[.15]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#101614]/85 via-[#101614]/70 to-[#101614]/95" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-[#B8502B] text-white text-[10px] font-bold tracking-[0.18em] uppercase">
                  {isEn ? '01 · CURRENT CHALLENGE' : '01 · TANTANGAN SAAT INI'}
                </span>
                <h2 className="mt-5 font-extrabold text-[34px] sm:text-[44px] leading-[1.06] tracking-[-0.035em] text-white">
                  {isEn ? (
                    <>
                      The workplace
                      <br />
                      <span
                        className="italic font-normal text-[#E8C5B0]"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                      >
                        is changing fast.
                      </span>
                    </>
                  ) : (
                    <>
                      Dunia kerja
                      <br />
                      <span
                        className="italic font-normal text-[#E8C5B0]"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                      >
                        sedang berubah.
                      </span>
                    </>
                  )}
                </h2>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/15">
                <p className="text-sm sm:text-base text-[#C6CEC9] leading-relaxed">
                  {isEn
                    ? 'Standing still with old habits amidst rapid AI acceleration is the greatest risk for modern leaders and organisations.'
                    : 'Bertahan dengan pola kerja lama di tengah percepatan AI adalah risiko terbesar bagi pemimpin maupun organisasi saat ini.'}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
              {[
                {
                  num: '01',
                  label: isEn ? 'AUTOMATION RISK' : 'RISIKO OTOMASI',
                  title: isEn
                    ? 'Routine work is easily replaced.'
                    : 'Pekerjaan rutin mudah digantikan.',
                  desc: isEn
                    ? 'Standard administration, data compilation, and repetitive analysis are now executed by AI in seconds.'
                    : 'Tugas administratif, rekapitulasi laporan, dan analisis berulang kini diambil alih otomasi dalam hitungan detik.',
                },
                {
                  num: '02',
                  label: isEn ? 'COMPLACENCY TRAP' : 'JEBAKAN ZONA NYAMAN',
                  title: isEn
                    ? 'A false sense of security.'
                    : 'Rasa aman bisa menjadi ilusi.',
                  desc: isEn
                    ? 'Leaders who master AI orchestration work up to 10x faster, redefining performance benchmarks across industries.'
                    : 'Profesional yang menguasai orkestrasi AI bekerja 10x lebih cepat, menggeser standar kinerja di setiap level jabatan.',
                },
                {
                  num: '03',
                  label: isEn ? 'LEADERSHIP CHOICE' : 'PILIHAN KEPEMIMPINAN',
                  title: isEn
                    ? 'We can choose: become a victim of automation or a value creator.'
                    : 'Kita bisa memilih: menjadi korban otomasi atau pencipta nilai.',
                  desc: isEn
                    ? 'True advantage belongs to those who frame problems, exercise empathy, and direct AI toward new breakthroughs.'
                    : 'Keunggulan nyata dimiliki oleh mereka yang mampu merumuskan masalah, berempati, dan mengarahkan AI untuk mencipta nilai baru.',
                },
              ].map((row, i) => (
                <div
                  key={row.num}
                  className={`rounded-2xl p-6 sm:p-8 border transition-all flex flex-col sm:flex-row sm:items-center gap-5 ${
                    i === 2
                      ? 'bg-[#101614] text-white border-[#101614]'
                      : 'bg-white text-[#101614] border-[#DED9CE]'
                  }`}
                >
                  <div className="sm:w-24 flex-shrink-0">
                    <span
                      className="block text-4xl sm:text-5xl italic font-normal text-[#B8502B] leading-none"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      {row.num}
                    </span>
                    <span
                      className={`mt-1 block text-[9px] font-bold tracking-[0.16em] uppercase ${
                        i === 2 ? 'text-[#949E99]' : 'text-[#757A77]'
                      }`}
                    >
                      {row.label}
                    </span>
                  </div>

                  <div className="flex-1 sm:border-l sm:pl-6 border-current/15">
                    <h3 className="font-extrabold text-xl sm:text-2xl tracking-[-0.02em]">
                      {row.title}
                    </h3>
                    <p
                      className={`mt-1.5 text-sm sm:text-[15px] leading-relaxed ${
                        i === 2 ? 'text-[#B8C0BC]' : 'text-[#525855]'
                      }`}
                    >
                      {row.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCREEN 03: HASIL YANG DICAPAI 3H (ASYMMETRIC 1 + 2 BENTO SHOWCASE) */}
        <section
          id="hasil"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-8 max-w-[1320px] mx-auto scroll-mt-[72px]"
        >
          <div className="rounded-3xl bg-white border border-[#DED9CE] p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8 border-b border-[#E8E3D8]">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B8502B]">
                  {isEn ? '02 · OUTCOMES ACHIEVED (3H)' : '02 · HASIL YANG DICAPAI (3H)'}
                </span>
                <h2 className="mt-2 font-extrabold text-[32px] sm:text-[42px] leading-[1.08] tracking-[-0.035em] text-[#101614]">
                  {isEn ? (
                    <>
                      Three shifts in{' '}
                      <span
                        className="italic font-normal text-[#B8502B]"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                      >
                        executive capability.
                      </span>
                    </>
                  ) : (
                    <>
                      Tiga lompatan kapasitas{' '}
                      <span
                        className="italic font-normal text-[#B8502B]"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                      >
                        kepemimpinan.
                      </span>
                    </>
                  )}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#525855] max-w-md">
                {isEn
                  ? 'Moving your team beyond basic tool usage into high-leverage strategic execution.'
                  : 'Membawa tim Anda melampaui sekadar pengguna fitur menuju pencipta terobosan yang terukur.'}
              </p>
            </div>

            <div className="mt-8 grid lg:grid-cols-12 gap-5 items-stretch">
              <div className="lg:col-span-5 rounded-2xl bg-[#101614] text-white p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold tracking-[0.16em] uppercase text-[#E8C5B0]">
                      {isEn ? 'PILLAR 01 · FOCUS' : 'PILAR 01 · FOKUS KERJA'}
                    </span>
                    <span
                      className="text-4xl italic text-[#D98260]"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      01
                    </span>
                  </div>

                  <h3 className="mt-6 font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] text-white">
                    Hyper-Productive
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-[#E8C5B0]">
                    {isEn
                      ? 'Work with greater focus and impact.'
                      : 'Bekerja lebih fokus dan berdampak.'}
                  </p>
                  <p className="mt-4 text-sm sm:text-[15px] text-[#B8C0BC] leading-relaxed">
                    {isEn
                      ? 'Delegate repetitive research, drafting, and operational analysis to cross-functional AI assistants so leaders can focus on high-value strategic decisions.'
                      : 'Mendelegasikan beban riset awal, penyusunan draf, dan analisis operasional kepada asisten AI lintas fungsi sehingga waktu Anda tercurah pada keputusan bernilai tinggi.'}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between text-xs">
                  <span className="text-[#949E99]">
                    {isEn ? 'Key Shift' : 'Pergeseran Utama'}
                  </span>
                  <span className="font-bold text-white">
                    {isEn ? 'Routine Load → Strategic Focus' : 'Beban Rutin → Fokus Strategis'}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="flex-1 rounded-2xl bg-[#F4F1EA] border border-[#DED9CE] p-7 sm:p-8 flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#B8502B]">
                        {isEn ? 'PILLAR 02 · AGILITY' : 'PILAR 02 · KETANGKASAN VALIDASI'}
                      </span>
                      <h3 className="mt-1 font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] text-[#101614]">
                        Hyper-Iterative
                      </h3>
                      <p className="mt-1 text-base font-bold text-[#2C3330]">
                        {isEn
                          ? 'Validate ideas faster and more measurably.'
                          : 'Validasi ide lebih cepat dan terukur.'}
                      </p>
                    </div>
                    <span
                      className="text-4xl italic text-[#B8502B] leading-none"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      02
                    </span>
                  </div>
                  <p className="mt-3 text-sm sm:text-[15px] text-[#525855] leading-relaxed">
                    {isEn
                      ? 'Transform raw ideas into tangible prototypes within hours, testing assumptions directly against real user needs before committing heavy resources.'
                      : 'Mengubah gagasan menjadi prototipe solusi dalam hitungan jam untuk menguji asumsi langsung terhadap kebutuhan pengguna nyata.'}
                  </p>
                </div>

                <div className="flex-1 rounded-2xl bg-[#E8E3D8] border border-[#D8D2C5] p-7 sm:p-8 flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#B8502B]">
                        {isEn ? 'PILLAR 03 · VALUE CREATION' : 'PILAR 03 · PENCIPTAAN NILAI'}
                      </span>
                      <h3 className="mt-1 font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] text-[#101614]">
                        Hyper-Impactful
                      </h3>
                      <p className="mt-1 text-base font-bold text-[#2C3330]">
                        {isEn
                          ? 'Turn opportunities into tangible value.'
                          : 'Mengubah peluang menjadi nilai nyata.'}
                      </p>
                    </div>
                    <span
                      className="text-4xl italic text-[#B8502B] leading-none"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      03
                    </span>
                  </div>
                  <p className="mt-3 text-sm sm:text-[15px] text-[#525855] leading-relaxed">
                    {isEn
                      ? 'Align technological capability with human empathy and business acumen to deliver solutions that truly matter to your organisation.'
                      : 'Menyatukan kapabilitas teknologi dengan empati manusia dan ketajaman strategi untuk melahirkan inovasi yang berdampak nyata bagi organisasi.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCREEN 04: PROGRAM WORKSHOP (INTERACTIVE SPLIT PROCESS EXPLORER) */}
        <section
          id="kurikulum"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-8 max-w-[1320px] mx-auto scroll-mt-[72px]"
        >
          <div className="mb-7 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B8502B]">
                {isEn ? '03 · WORKSHOP PROGRAMME' : '03 · PROGRAM WORKSHOP'}
              </span>
              <h2 className="mt-1.5 font-extrabold text-[32px] sm:text-[44px] leading-[1.06] tracking-[-0.035em] text-[#101614]">
                {isEn ? (
                  <>
                    Three steps. One day.{' '}
                    <span
                      className="italic font-normal text-[#B8502B]"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      Tangible impact.
                    </span>
                  </>
                ) : (
                  <>
                    Tiga langkah. Satu hari.{' '}
                    <span
                      className="italic font-normal text-[#B8502B]"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      Dampak nyata.
                    </span>
                  </>
                )}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525855]">
              {isEn
                ? 'Select any stage below to inspect the learning flow and deliverable.'
                : 'Klik tahapan di bawah untuk melihat detail alur dan hasil tiap fase.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              {stages.map((st, idx) => {
                const isSelected = activeStage === idx
                return (
                  <button
                    key={st.num}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`w-full text-left rounded-2xl p-6 border transition-all flex items-start gap-4 ${
                      isSelected
                        ? 'bg-[#101614] text-white border-[#101614] shadow-md'
                        : 'bg-white text-[#101614] border-[#DED9CE] hover:border-[#101614]'
                    }`}
                  >
                    <span
                      className={`text-3xl italic leading-none pt-0.5 ${
                        isSelected ? 'text-[#D98260]' : 'text-[#B8502B]'
                      }`}
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      {st.num}
                    </span>
                    <div className="flex-1">
                      <span
                        className={`block text-[10px] font-bold tracking-[0.16em] uppercase ${
                          isSelected ? 'text-[#949E99]' : 'text-[#757A77]'
                        }`}
                      >
                        {st.badge}
                      </span>
                      <h3 className="mt-1 font-extrabold text-lg sm:text-xl tracking-[-0.02em]">
                        {st.title}
                      </h3>
                      <p
                        className={`mt-1 text-xs sm:text-sm leading-relaxed ${
                          isSelected ? 'text-[#B8C0BC]' : 'text-[#525855]'
                        }`}
                      >
                        {st.summary}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="lg:col-span-7 rounded-2xl bg-white border border-[#DED9CE] p-6 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="aspect-[16/7.5] w-full rounded-xl overflow-hidden bg-[#101614] mb-6 relative">
                  <img
                    src={stages[activeStage].img}
                    alt={stages[activeStage].title}
                    className="w-full h-full object-cover sepia-[.12] contrast-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#101614]/85 text-white text-[10px] font-bold tracking-[0.16em] uppercase">
                    {stages[activeStage].badge}
                  </div>
                </div>

                <div className="flex items-baseline gap-3">
                  <span
                    className="text-3xl italic text-[#B8502B]"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    {stages[activeStage].num}
                  </span>
                  <h3 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] text-[#101614]">
                    {stages[activeStage].title}
                  </h3>
                </div>

                <p className="mt-3 text-sm sm:text-base text-[#424744] leading-relaxed">
                  {stages[activeStage].detail}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E8E3D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#757A77] block">
                    {isEn ? 'STAGE DELIVERABLE' : 'LUARAN TAHAP INI'}
                  </span>
                  <span className="text-sm font-bold text-[#101614]">
                    {stages[activeStage].deliverable}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveStage(i)}
                      aria-label={`Tahap ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        activeStage === i ? 'w-8 bg-[#B8502B]' : 'w-2 bg-[#D8D2C5]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCREEN 05: KOMPETENSI + PESERTA & FORMAT (LEFT DARK ANCHOR + RIGHT 5-TILE BENTO) */}
        <section
          id="kompetensi"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-8 max-w-[1320px] mx-auto scroll-mt-[72px]"
        >
          <div className="grid lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-5 rounded-2xl bg-[#101614] text-white p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#D98260]">
                  {isEn ? '04 · AUDIENCE & FORMAT' : '04 · PESERTA & FORMAT'}
                </span>

                <div className="mt-6 pb-7 border-b border-white/15">
                  <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#949E99]">
                    {isEn ? 'WHO IT IS FOR' : 'UNTUK SIAPA'}
                  </p>
                  <h2 className="mt-2 font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] text-white leading-snug">
                    {isEn
                      ? 'Leaders, managers, and cross-functional professionals.'
                      : 'Pemimpin, manajer, dan profesional lintas fungsi.'}
                  </h2>
                  <p className="mt-2.5 text-sm text-[#B8C0BC] leading-relaxed">
                    {isEn
                      ? 'Who want to strengthen their way of thinking, make strategic decisions, and lead innovation in their organisation.'
                      : 'Yang ingin memperkuat cara berpikir, mengambil keputusan, dan memimpin inovasi di organisasinya.'}
                  </p>
                </div>

                <div className="mt-7">
                  <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#949E99]">
                    {isEn ? 'FORMAT' : 'FORMAT'}
                  </p>
                  <h3 className="mt-1.5 font-extrabold text-2xl sm:text-3xl text-[#E8C5B0] tracking-[-0.03em]">
                    {isEn ? '1 full day' : '1 hari penuh'}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#B8C0BC]">
                    {isEn
                      ? 'In-person or hybrid · Public Batch & Corporate In-House.'
                      : 'In-person atau hybrid · Public Batch & In-House Corporate.'}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/15">
                <a
                  href={waInhouseHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[46px] rounded-full bg-white hover:bg-[#E8E3D8] text-[#101614] px-6 py-3 text-xs font-bold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>
                    {isEn
                      ? 'Consult Schedule via WhatsApp'
                      : 'Konsultasikan Jadwal via WhatsApp'}
                  </span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
              <div className="rounded-2xl bg-[#E8E3D8] border border-[#D8D2C5] px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#B8502B]">
                    {isEn ? 'TAKEAWAY CAPABILITIES' : 'KOMPETENSI YANG DIBAWA PULANG'}
                  </span>
                  <h3 className="font-extrabold text-xl sm:text-2xl tracking-[-0.03em] text-[#101614]">
                    {isEn
                      ? 'Frameworks and skills to lead in the age of AI.'
                      : 'Kerangka berpikir dan keterampilan untuk memimpin di era AI.'}
                  </h3>
                </div>
                <span
                  className="text-3xl italic text-[#B8502B]"
                  style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                >
                  5 Pillars
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    num: '01',
                    title: isEn
                      ? 'Higher-Order Thinking (HOTS)'
                      : 'Berpikir tingkat tinggi (HOTS)',
                    desc: isEn
                      ? 'Critical, structured reasoning to evaluate AI output and avoid hallucinations.'
                      : 'Penalaran kritis dan terstruktur untuk memfilter bias serta halusinasi AI.',
                  },
                  {
                    num: '02',
                    title: 'Design Thinking',
                    desc: isEn
                      ? 'Deep human empathy to frame the right problems before building solutions.'
                      : 'Empati mendalam terhadap kebutuhan manusia dalam merumuskan solusi.',
                  },
                ].map((c) => (
                  <div
                    key={c.num}
                    className="rounded-2xl bg-white border border-[#DED9CE] p-6 flex flex-col justify-between"
                  >
                    <span
                      className="text-3xl italic text-[#B8502B] leading-none"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      {c.num}
                    </span>
                    <div className="mt-4">
                      <h4 className="font-extrabold text-lg text-[#101614]">{c.title}</h4>
                      <p className="mt-1 text-xs sm:text-sm text-[#525855] leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    num: '03',
                    title: isEn ? 'AI Literacy' : 'Literasi AI',
                    desc: isEn
                      ? 'Prompt orchestration, data synthesis, and ethical governance.'
                      : 'Orkestrasi prompt, pembacaan data, dan etika tata kelola.',
                  },
                  {
                    num: '04',
                    title: isEn ? 'Leadership' : 'Kepemimpinan',
                    desc: isEn
                      ? 'Directing systemic transformation and building team character.'
                      : 'Mengarahkan perubahan sistemik dan membangun karakter tim.',
                  },
                  {
                    num: '05',
                    title: isEn ? 'Adaptability' : 'Adaptabilitas',
                    desc: isEn
                      ? 'Self-directed continuous learning (Metagogy) in a fast-moving era.'
                      : 'Kemandirian belajar berkelanjutan (Metagogy) di era perubahan.',
                  },
                ].map((c) => (
                  <div
                    key={c.num}
                    className="rounded-2xl bg-white border border-[#DED9CE] p-5 flex flex-col justify-between"
                  >
                    <span
                      className="text-2xl italic text-[#B8502B] leading-none"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      {c.num}
                    </span>
                    <div className="mt-3">
                      <h4 className="font-extrabold text-base text-[#101614]">{c.title}</h4>
                      <p className="mt-1 text-xs text-[#525855] leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SCREEN 06: DIPANDU OLEH ARANGGI SOEMARDJAN (3-COLUMN MAGAZINE FEATURE) */}
        <section
          id="mentor"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-8 max-w-[1320px] mx-auto scroll-mt-[72px]"
        >
          <div className="rounded-3xl bg-white border border-[#DED9CE] p-6 sm:p-10 lg:p-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B8502B]">
                  {isEn ? '05 · LED BY' : '05 · DIPANDU OLEH'}
                </span>
                <h2 className="mt-2 font-extrabold text-[36px] sm:text-[46px] leading-[1.04] tracking-[-0.035em] text-[#101614]">
                  Aranggi
                  <br />
                  <span
                    className="italic font-normal text-[#B8502B]"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    Soemardjan.
                  </span>
                </h2>
                <p className="mt-3 text-base sm:text-lg font-bold text-[#2C3330]">
                  {isEn
                    ? 'Serial Innovator · Social Change Architect'
                    : 'Serial Innovator · Arsitek Perubahan Sosial'}
                </p>
                <p className="mt-3.5 text-sm sm:text-[15px] text-[#525855] leading-relaxed">
                  {isEn
                    ? 'Experienced in leading innovation and transformation across industries. Combining engineering precision, business management, and human empathy to turn AI into practical breakthroughs.'
                    : 'Berpengalaman memimpin inovasi dan transformasi lintas industri. Memadukan ketajaman rekayasa teknik, manajemen bisnis, dan sosiologi untuk menerjemahkan AI menjadi terobosan nyata.'}
                </p>

                <div className="mt-6 pt-5 border-t border-[#E8E3D8] flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveVideo('mentor')}
                    className="min-h-[44px] rounded-full bg-[#101614] hover:bg-[#2C3330] text-white px-5 py-2.5 text-xs font-bold inline-flex items-center gap-2 transition-colors"
                  >
                    <span>{isEn ? 'Watch Profile Video' : 'Putar Video Profil'}</span>
                    <span aria-hidden="true" className="text-[#D98260]">
                      ▶
                    </span>
                  </button>

                  <a
                    href={MENTOR_ARTICLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#101614] hover:text-[#B8502B] underline underline-offset-4 inline-flex items-center gap-1.5"
                  >
                    <span>
                      {isEn ? 'Read Harian Kompas Feature' : 'Liputan SOSOK Harian Kompas'}
                    </span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="rounded-2xl overflow-hidden bg-[#101614] border border-[#DED9CE] p-2.5">
                  <div className="aspect-[4/4.3] rounded-xl overflow-hidden">
                    <img
                      src="./clevio-pro/aranggi-real.jpg"
                      alt="Aranggi Soemardjan"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-3 pb-1 px-2 text-center">
                    <p
                      className="text-sm italic text-[#E8C5B0]"
                      style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                    >
                      &ldquo;Get High &amp; Fly, AND Get Down &amp; Dirty&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col gap-3.5">
                {[
                  {
                    num: '01',
                    title: isEn ? '3 US Patents' : '3 Hak Paten AS',
                    desc: isEn
                      ? 'Inventor of global elevator safety systems in the United States.'
                      : 'Invensi sistem keamanan elevator global di Amerika Serikat.',
                  },
                  {
                    num: '02',
                    title: 'Kompas SOSOK',
                    desc: isEn
                      ? '1995 internet pioneer & recipient of the 2012 Ristek Award.'
                      : 'Pionir ekosistem internet 1995 & peraih Ristek Award 2012.',
                  },
                  {
                    num: '03',
                    title: 'Clevio & Agriana.ai',
                    desc: isEn
                      ? 'Founder of Clevio Coder Camp & AI agricultural ecosystem.'
                      : 'Pendiri Clevio Coder Camp & ekosistem pangan berbasis AI.',
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="rounded-2xl bg-[#F4F1EA] border border-[#DED9CE] p-4 sm:p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-sm text-[#101614]">{item.title}</h3>
                      <span
                        className="text-lg italic text-[#B8502B]"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                      >
                        {item.num}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#525855] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SCREEN 07: GALERI, EKOSISTEM & PENDAFTARAN WHATSAPP */}
        <section
          id="galeri"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-between pt-6 pb-0 px-4 sm:px-8 max-w-[1320px] mx-auto scroll-mt-[72px]"
        >
          <div className="grid lg:grid-cols-12 gap-5 items-stretch my-auto py-4">
            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B8502B]">
                  {isEn ? '06 · GALLERY & ECOSYSTEM' : '06 · GALERI & EKOSISTEM'}
                </span>
                <h2 className="mt-1 font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] text-[#101614]">
                  {isEn
                    ? 'Collaborative exploration in the workshop room.'
                    : 'Suasana eksplorasi dan kolaborasi di ruang workshop.'}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                <button
                  type="button"
                  onClick={() => setActiveVideo('workshop')}
                  aria-label={
                    isEn
                      ? 'Play Clevio AI Pro workshop video'
                      : 'Putar video dokumentasi sesi Clevio AI Pro'
                  }
                  className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#101614] border border-[#DED9CE] text-left block"
                >
                  <img
                    src="./clevio-pro/unsplash-gallery-4.jpg"
                    alt="Video dokumentasi Clevio AI Pro"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-4 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-[#E8C5B0] block">
                        VIDEO HIGHLIGHT
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {isEn ? 'Watch Workshop Session' : 'Tonton Cuplikan Sesi'}
                      </span>
                    </div>
                    <span className="w-10 h-10 rounded-full bg-[#B8502B] text-white flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5">
                        <polygon points="8 5 19 12 8 19 8 5" />
                      </svg>
                    </span>
                  </div>
                </button>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-[#DED9CE]">
                  <img
                    src="./clevio-pro/unsplash-gallery-1.jpg"
                    alt="Sesi diskusi strategis"
                    className="w-full h-full object-cover sepia-[.08]"
                    loading="lazy"
                  />
                </div>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-[#DED9CE]">
                  <img
                    src="./clevio-pro/unsplash-gallery-2.jpg"
                    alt="Kolaborasi pemetaan masalah"
                    className="w-full h-full object-cover sepia-[.08]"
                    loading="lazy"
                  />
                </div>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-[#DED9CE]">
                  <img
                    src="./clevio-pro/unsplash-gallery-3.jpg"
                    alt="Eksplorasi prototipe solusi"
                    className="w-full h-full object-cover sepia-[.08]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {[
                  { name: 'Harian Kompas', sub: 'Rubrik SOSOK' },
                  { name: 'Ristek Award', sub: 'Inovasi 2012' },
                  { name: 'Harvard Seed', sub: 'Social Impact' },
                  { name: 'Agriana.ai', sub: 'AI Pangan' },
                  { name: 'Clevio Camp', sub: 'EdTech' },
                ].map((org) => (
                  <div
                    key={org.name}
                    className="rounded-xl bg-white border border-[#DED9CE] px-3 py-2.5 text-center"
                  >
                    <p className="text-[11px] font-extrabold text-[#101614]">{org.name}</p>
                    <p className="text-[10px] text-[#757A77]">{org.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="kontak"
              className="lg:col-span-5 rounded-3xl bg-[#101614] text-white p-8 sm:p-11 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#B8502B] text-white text-[10px] font-bold tracking-[0.18em] uppercase">
                  {isEn ? '07 · REGISTRATION' : '07 · PENDAFTARAN'}
                </span>

                <h2 className="mt-5 font-extrabold text-[32px] sm:text-[42px] leading-[1.06] tracking-[-0.035em] text-white">
                  {isEn ? (
                    <>
                      Ready to lead
                      <br />
                      <span
                        className="italic font-normal text-[#E8C5B0]"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                      >
                        change with AI?
                      </span>
                    </>
                  ) : (
                    <>
                      Siap memimpin
                      <br />
                      <span
                        className="italic font-normal text-[#E8C5B0]"
                        style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                      >
                        perubahan dengan AI?
                      </span>
                    </>
                  )}
                </h2>

                <p className="mt-4 text-sm sm:text-base text-[#B8C0BC] leading-relaxed">
                  {isEn
                    ? 'Secure your seat at the next Clevio AI Pro Public Batch or schedule a tailored In-House session for your leadership team.'
                    : 'Amankan tempat Anda di workshop Clevio AI Pro atau jadwalkan sesi in-house khusus untuk tim kepemimpinan Anda.'}
                </p>

                <div className="mt-7">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[52px] rounded-full bg-[#B8502B] hover:bg-[#9E4120] text-white px-7 py-3.5 text-sm font-bold inline-flex items-center justify-center gap-3 transition-colors"
                  >
                    <span>
                      {isEn ? 'Register via WhatsApp' : 'Daftar Workshop via WhatsApp'}
                    </span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 space-y-2 text-xs text-[#949E99]">
                <div className="flex items-center justify-between">
                  <span>WhatsApp</span>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:underline tabular-nums inline-flex items-center gap-1.5"
                  >
                    <PhoneIcon className="w-3.5 h-3.5 text-[#D98260]" />
                    <span>+62 822-2111-8860</span>
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Email</span>
                  <a
                    href="mailto:clevioaipro@gmail.com"
                    className="font-semibold text-white hover:underline"
                  >
                    clevioaipro@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Website</span>
                  <a
                    href="https://cleviopro.vercel.app"
                    className="font-semibold text-white hover:underline"
                  >
                    chiefaiofficer.id
                  </a>
                </div>
              </div>
            </div>
          </div>

          <footer className="py-4 border-t border-[#DED9CE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5C615E]">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#101614]">clevio AI Pro</span>
              <span>·</span>
              <span>© 2026 Clevio AI Pro. All rights reserved.</span>
            </div>
            <a href="#top" className="font-bold text-[#101614] hover:text-[#B8502B]">
              {isEn ? 'Back to top ↑' : 'Kembali ke atas ↑'}
            </a>
          </footer>
        </section>
      </main>

      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pemutar Video Clevio AI Pro"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl bg-[#101614] border border-white/20 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 text-white text-xs sm:text-sm">
              <span className="font-bold">
                {activeVideo === 'workshop'
                  ? isEn
                    ? 'Clevio AI Pro Workshop Highlight'
                    : 'Cuplikan Pengalaman Workshop Clevio AI Pro'
                  : isEn
                    ? 'Facilitator Profile: Aranggi Soemardjan'
                    : 'Profil Fasilitator: Aranggi Soemardjan'}
              </span>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white"
              >
                {isEn ? 'Close ✕' : 'Tutup ✕'}
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={activeVideo === 'workshop' ? VIDEO_WORKSHOP_EMBED : VIDEO_ARANGGI_EMBED}
                title="Video Clevio AI Pro"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
