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

  return (
    <div
      id="top"
      className="min-h-screen bg-[#FAF9F5] text-[#141413] selection:bg-[#141413] selection:text-[#FAF9F5] overflow-x-clip w-full"
      style={{ fontFamily: '"Source Sans 3", "Inter", sans-serif' }}
    >
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E2E0D8]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-10 h-[72px] flex items-center justify-between gap-4">
          <a
            href="#top"
            className="inline-flex items-baseline gap-1.5 mr-auto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141413]"
          >
            <ClevioLogo size="md" variant="dark" sublabel="" />
            <span
              className="text-xl font-medium tracking-[-0.03em] text-[#575651] -ml-1"
              style={{ fontFamily: '"Manrope", sans-serif' }}
            >
              AI Pro
            </span>
          </a>

          <nav
            aria-label={isEn ? 'Main navigation' : 'Navigasi utama'}
            className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-[#4A4945]"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            <a href="#tantangan" className="hover:text-[#141413] transition-colors py-1">
              {isEn ? 'Challenge' : 'Tantangan'}
            </a>
            <a href="#hasil" className="hover:text-[#141413] transition-colors py-1">
              {isEn ? '3H Outcomes' : 'Hasil 3H'}
            </a>
            <a href="#kurikulum" className="hover:text-[#141413] transition-colors py-1">
              {isEn ? 'Curriculum' : 'Kurikulum'}
            </a>
            <a href="#kompetensi" className="hover:text-[#141413] transition-colors py-1">
              {isEn ? 'Capabilities' : 'Kompetensi'}
            </a>
            <a href="#mentor" className="hover:text-[#141413] transition-colors py-1">
              {isEn ? 'Facilitator' : 'Mentor'}
            </a>
            <a href="#galeri" className="hover:text-[#141413] transition-colors py-1">
              {isEn ? 'Gallery' : 'Galeri'}
            </a>
            <a href="#kontak" className="hover:text-[#141413] transition-colors py-1">
              {isEn ? 'Contact' : 'Kontak'}
            </a>
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[40px] inline-flex items-center justify-center gap-2.5 bg-[#141413] hover:bg-[#2C2C2A] text-white px-5 py-2 text-[12px] font-bold tracking-wide transition-colors"
              style={{ fontFamily: '"Manrope", sans-serif' }}
            >
              <span>{isEn ? 'Register Workshop' : 'Daftar Workshop'}</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div
            role="group"
            aria-label={isEn ? 'Language selection' : 'Pilihan bahasa'}
            className="inline-flex items-center flex-shrink-0 gap-0.5 text-[11px] font-bold text-[#6E6D68]"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            <button
              type="button"
              onClick={() => changeLang('id')}
              aria-pressed={lang === 'id'}
              aria-label="Bahasa Indonesia"
              className={`min-w-[30px] min-h-[44px] px-1.5 inline-flex items-center justify-center transition-colors ${
                lang === 'id'
                  ? 'text-[#141413] underline underline-offset-[6px]'
                  : 'hover:text-[#141413]'
              }`}
            >
              ID
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => changeLang('en')}
              aria-pressed={lang === 'en'}
              aria-label="English"
              className={`min-w-[30px] min-h-[44px] px-1.5 inline-flex items-center justify-center transition-colors ${
                lang === 'en'
                  ? 'text-[#141413] underline underline-offset-[6px]'
                  : 'hover:text-[#141413]'
              }`}
            >
              EN
            </button>
          </div>

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
                  ? 'Tutup menu navigasi'
                  : 'Buka menu navigasi'
            }
            className="lg:hidden w-11 h-11 border border-[#D9D7CE] flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`w-4 h-px bg-[#141413] transition-transform ${
                mobileMenuOpen ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`w-4 h-px bg-[#141413] transition-transform ${
                mobileMenuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E2E0D8] bg-[#FAF9F5] px-6 py-4 space-y-1 shadow-lg">
            {[
              { href: '#tantangan', label: isEn ? '01 · Current Challenge' : '01 · Tantangan Saat Ini' },
              { href: '#hasil', label: isEn ? '02 · 3H Outcomes' : '02 · Hasil yang Dicapai (3H)' },
              { href: '#kurikulum', label: isEn ? '03 · Workshop Programme' : '03 · Program Workshop' },
              { href: '#kompetensi', label: isEn ? '04 · Capabilities & Format' : '04 · Kompetensi & Format' },
              { href: '#mentor', label: isEn ? '05 · Facilitator Profile' : '05 · Profil Mentor' },
              { href: '#galeri', label: isEn ? '06 · Gallery' : '06 · Galeri' },
              { href: '#kontak', label: isEn ? '07 · Contact & Registration' : '07 · Kontak & Pendaftaran' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[46px] flex items-center justify-between text-sm font-semibold text-[#141413] border-b border-[#E2E0D8]/60 last:border-b-0"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                <span>{item.label}</span>
                <ArrowRightIcon className="w-4 h-4 text-[#6E6D68]" />
              </a>
            ))}
            <div className="pt-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 bg-[#141413] text-white text-sm font-bold"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                <span>{isEn ? 'Register Workshop' : 'Daftar Workshop'}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="min-h-[calc(100svh-72px)] flex flex-col justify-between bg-[#FAF9F5] border-b border-[#E2E0D8]">
          <div className="flex-1 flex items-center max-w-[1240px] w-full mx-auto px-6 sm:px-10 py-10 lg:py-12">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
              <div className="lg:col-span-7">
                <p
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6E6D68] mb-5"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn
                    ? 'AI THINKING & INNOVATION WORKSHOP'
                    : 'WORKSHOP AI THINKING & INNOVATION'}
                </p>

                <h1
                  className="font-extrabold text-[42px] sm:text-[58px] lg:text-[72px] leading-[1.03] tracking-[-0.05em] text-[#141413]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? (
                    <>
                      Not replaced by AI.
                      <br />
                      <span className="text-[#575651]">Lead with AI.</span>
                    </>
                  ) : (
                    <>
                      Bukan diganti AI.
                      <br />
                      <span className="text-[#575651]">Tapi Memimpin AI.</span>
                    </>
                  )}
                </h1>

                <p className="mt-6 text-[18px] sm:text-[21px] text-[#4A4945] leading-[1.48] max-w-[44ch]">
                  {isEn
                    ? 'A one-day intensive workshop for leaders, managers, and professionals ready to create tangible organisational value with AI.'
                    : 'Workshop intensif 1 hari untuk pemimpin, manajer, dan profesional yang siap menciptakan nilai nyata dengan AI.'}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[52px] inline-flex items-center justify-center gap-3.5 bg-[#141413] hover:bg-[#2C2C2A] text-white px-7 py-4 text-[13px] font-bold transition-colors"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    <span>{isEn ? 'Register Workshop' : 'Daftar Workshop'}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveVideo('workshop')}
                    className="min-h-[52px] inline-flex items-center justify-center gap-2.5 border border-[#C8C6BC] bg-white hover:border-[#141413] text-[#141413] px-6 py-4 text-[13px] font-bold transition-colors"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    <span>{isEn ? 'Watch Session Preview' : 'Lihat Cuplikan Sesi'}</span>
                    <span aria-hidden="true" className="text-xs">
                      ▶
                    </span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white border border-[#DCDAD0] p-3.5 shadow-xs">
                  <div className="aspect-[4/4.2] w-full overflow-hidden bg-[#141413]">
                    <img
                      src="./clevio-pro/unsplash-hero.jpg"
                      alt={
                        isEn
                          ? 'Strategic leadership architecture in the age of AI'
                          : 'Arsitektur kepemimpinan strategis di era AI'
                      }
                      className="w-full h-full object-cover grayscale contrast-120"
                    />
                  </div>
                  <div className="pt-3.5 px-1 flex items-center justify-between text-xs text-[#575651]">
                    <span>
                      {isEn
                        ? 'Human perspective. Technological potential.'
                        : 'Perspektif manusia. Potensi teknologi.'}
                    </span>
                    <span
                      className="font-bold text-[#141413]"
                      style={{ fontFamily: '"Manrope", sans-serif' }}
                    >
                      Clevio AI Pro
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E2E0D8] bg-white">
            <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-4 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
              <div>
                <p
                  className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#7A7974]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? 'PROGRAMME DURATION' : 'DURASI PROGRAM'}
                </p>
                <p
                  className="mt-0.5 text-xs sm:text-sm font-bold text-[#141413]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? '1 Full Day' : '1 Hari Penuh'}
                </p>
              </div>
              <div className="sm:border-l sm:border-[#E2E0D8] sm:pl-6">
                <p
                  className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#7A7974]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? 'SESSION FORMAT' : 'FORMAT SESI'}
                </p>
                <p
                  className="mt-0.5 text-xs sm:text-sm font-bold text-[#141413]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  In-Person / Hybrid
                </p>
              </div>
              <div className="sm:border-l sm:border-[#E2E0D8] sm:pl-6">
                <p
                  className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#7A7974]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? 'LEARNING CYCLE' : 'SIKLUS PENDAMPINGAN'}
                </p>
                <p
                  className="mt-0.5 text-xs sm:text-sm font-bold text-[#141413] tabular-nums"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? 'D-14 to D+14' : 'H-14 s/d H+14'}
                </p>
              </div>
              <div className="sm:border-l sm:border-[#E2E0D8] sm:pl-6 flex items-center justify-end">
                <a
                  href="#tantangan"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#141413] hover:opacity-70"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  <span>{isEn ? 'Next: Current Challenge' : 'Lanjut: Tantangan Saat Ini'}</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="tantangan"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-between bg-[#141413] text-[#FAF9F5] scroll-mt-[72px]"
        >
          <div className="flex-1 flex flex-col justify-center max-w-[1240px] w-full mx-auto px-6 sm:px-10 py-12 lg:py-16">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 lg:pb-12 border-b border-white/15">
              <div className="lg:col-span-7">
                <p
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#9E9D96] mb-3"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? '01 / CURRENT CHALLENGE' : '01 / TANTANGAN SAAT INI'}
                </p>
                <h2
                  className="font-extrabold text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.06] tracking-[-0.045em] text-white"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? 'The workplace is evolving.' : 'Dunia kerja sedang berubah.'}
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[16px] sm:text-[18px] text-[#B8B6AE] leading-relaxed">
                  {isEn
                    ? 'Relying on conventional routines amidst rapid AI acceleration is no longer a safe option for leaders or organisations.'
                    : 'Mengandalkan cara kerja rutin di tengah percepatan AI bukan lagi pilihan yang aman bagi pemimpin maupun organisasi.'}
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  tag: isEn ? 'ROUTINE AUTOMATION' : 'OTOMASI RUTINITAS',
                  title: isEn
                    ? 'Routine work is easily replaced.'
                    : 'Pekerjaan rutin mudah digantikan.',
                  desc: isEn
                    ? 'Administrative tasks, standard reporting, and repetitive data processing are now completed by automation in seconds.'
                    : 'Tugas administratif, penyusunan laporan standar, dan pengolahan data berulang kini diambil alih mesin dalam hitungan detik.',
                },
                {
                  num: '02',
                  tag: isEn ? 'SHIFTING STANDARDS' : 'PERGESERAN STANDAR',
                  title: isEn
                    ? 'A false sense of security.'
                    : 'Rasa aman bisa menjadi ilusi.',
                  desc: isEn
                    ? 'Professionals who orchestrate AI operate up to 10x faster, shifting performance expectations across every role.'
                    : 'Profesional yang mampu mengorkestrasi AI bekerja 10x lebih cepat, menggeser ekspektasi kinerja di setiap level organisasi.',
                },
                {
                  num: '03',
                  tag: isEn ? 'STRATEGIC CHOICE' : 'KEPUTUSAN STRATEGIS',
                  title: isEn
                    ? 'Victim of automation or value creator.'
                    : 'Korban otomasi atau pencipta nilai.',
                  desc: isEn
                    ? 'We can choose: be displaced by automation or lead AI to create breakthroughs, products, and new business value.'
                    : 'Kita dapat memilih: tergerus oleh otomasi atau memimpin AI untuk melahirkan terobosan, produk, dan nilai bisnis baru.',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-white/[0.04] border border-white/15 p-7 sm:p-9 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold tracking-[0.15em] text-[#9E9D96] mb-8">
                      <span style={{ fontFamily: '"Manrope", sans-serif' }}>{item.tag}</span>
                      <span className="tabular-nums text-white">{item.num}</span>
                    </div>
                    <h3
                      className="font-extrabold text-2xl sm:text-[26px] text-white tracking-[-0.03em] leading-snug"
                      style={{ fontFamily: '"Manrope", sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3.5 text-[15px] text-[#B8B6AE] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/15">
            <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between text-xs text-[#9E9D96]">
              <span className="font-semibold tabular-nums" style={{ fontFamily: '"Manrope", sans-serif' }}>
                {isEn ? 'SECTION 01 / 06 · THE CHANGING LANDSCAPE' : 'BAGIAN 01 / 06 · KONTEKS PERUBAHAN'}
              </span>
              <a
                href="#hasil"
                className="inline-flex items-center gap-2 font-bold text-white hover:opacity-75"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                <span>{isEn ? 'Next: Outcomes Achieved (3H)' : 'Berikutnya: Hasil yang Dicapai (3H)'}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="hasil"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-between bg-white border-b border-[#E2E0D8] scroll-mt-[72px]"
        >
          <div className="flex-1 flex flex-col justify-center max-w-[1240px] w-full mx-auto px-6 sm:px-10 py-12 lg:py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
              <div>
                <p
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6E6D68] mb-3"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? '02 / OUTCOMES ACHIEVED' : '02 / HASIL YANG DICAPAI'}
                </p>
                <h2
                  className="font-extrabold text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.06] tracking-[-0.045em] text-[#141413]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn
                    ? 'Three core impacts for leaders and teams.'
                    : 'Tiga dampak utama bagi pemimpin dan tim.'}
                </h2>
              </div>
              <p className="text-[15px] text-[#575651] max-w-sm">
                {isEn
                  ? 'Building new capacity to work with sharper focus, validate ideas rapidly, and deliver meaningful outcomes.'
                  : 'Membangun kapasitas baru untuk bekerja lebih fokus, menguji ide secara tangkas, dan menghasilkan dampak nyata.'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Hyper-Productive',
                  subtitle: isEn
                    ? 'Work with greater focus and impact.'
                    : 'Bekerja lebih fokus dan berdampak.',
                  desc: isEn
                    ? 'Orchestrate cross-functional AI assistants to eliminate repetitive technical work and accelerate decision-making.'
                    : 'Mengorkestrasi berbagai asisten AI lintas fungsi untuk memangkas pekerjaan teknis berulang dan mempercepat pengambilan keputusan.',
                  shift: isEn ? 'From routine load → Strategic focus' : 'Dari beban rutin → Fokus strategis',
                  dark: false,
                },
                {
                  num: '02',
                  title: 'Hyper-Iterative',
                  subtitle: isEn
                    ? 'Validate ideas faster and more measurably.'
                    : 'Validasi ide lebih cepat dan terukur.',
                  desc: isEn
                    ? 'Turn abstract concepts into working solution prototypes that can be tested directly against real user needs.'
                    : 'Mengubah gagasan menjadi prototipe solusi yang dapat langsung diuji terhadap kebutuhan pengguna nyata dalam waktu singkat.',
                  shift: isEn ? 'From old assumptions → Rapid experiments' : 'Dari asumsi lama → Eksperimen cepat',
                  dark: false,
                },
                {
                  num: '03',
                  title: 'Hyper-Impactful',
                  subtitle: isEn
                    ? 'Turn opportunities into tangible value.'
                    : 'Mengubah peluang menjadi nilai nyata.',
                  desc: isEn
                    ? 'Combine human empathy with critical thinking to create innovations that drive direct organisational value.'
                    : 'Memadukan empati manusia dan ketajaman berpikir kritis untuk melahirkan inovasi yang berdampak langsung pada organisasi.',
                  shift: isEn ? 'From AI hype → Tangible business value' : 'Dari wacana AI → Nilai bisnis nyata',
                  dark: true,
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className={`p-8 sm:p-10 flex flex-col justify-between border ${
                    pillar.dark
                      ? 'bg-[#141413] text-white border-[#141413]'
                      : 'bg-[#FAF9F5] text-[#141413] border-[#E2E0D8]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span
                        className={`text-xs font-bold tracking-[0.14em] uppercase ${
                          pillar.dark ? 'text-[#9E9D96]' : 'text-[#6E6D68]'
                        }`}
                        style={{ fontFamily: '"Manrope", sans-serif' }}
                      >
                        {isEn ? `PILLAR ${pillar.num}` : `PILAR ${pillar.num}`}
                      </span>
                      <span
                        className={`font-extrabold text-3xl tabular-nums ${
                          pillar.dark ? 'text-white' : 'text-[#141413]'
                        }`}
                        style={{ fontFamily: '"Manrope", sans-serif' }}
                      >
                        {pillar.num}
                      </span>
                    </div>

                    <h3
                      className="font-extrabold text-[28px] sm:text-[32px] tracking-[-0.04em]"
                      style={{ fontFamily: '"Manrope", sans-serif' }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className={`mt-2 text-base font-bold ${
                        pillar.dark ? 'text-white' : 'text-[#141413]'
                      }`}
                    >
                      {pillar.subtitle}
                    </p>
                    <p
                      className={`mt-3 text-[15px] leading-relaxed ${
                        pillar.dark ? 'text-[#B8B6AE]' : 'text-[#575651]'
                      }`}
                    >
                      {pillar.desc}
                    </p>
                  </div>

                  <div
                    className={`mt-10 pt-4 border-t text-xs font-semibold ${
                      pillar.dark
                        ? 'border-white/15 text-[#EAE8E0]'
                        : 'border-[#E2E0D8] text-[#141413]'
                    }`}
                  >
                    {pillar.shift}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#E2E0D8] bg-[#FAF9F5]">
            <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between text-xs text-[#6E6D68]">
              <span className="font-semibold tabular-nums" style={{ fontFamily: '"Manrope", sans-serif' }}>
                {isEn ? 'SECTION 02 / 06 · THREE IMPACT PILLARS' : 'BAGIAN 02 / 06 · TIGA PILAR DAMPAK'}
              </span>
              <a
                href="#kurikulum"
                className="inline-flex items-center gap-2 font-bold text-[#141413] hover:opacity-70"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                <span>{isEn ? 'Next: Workshop Programme' : 'Berikutnya: Program Workshop'}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="kurikulum"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-between bg-[#F2F0E8] border-b border-[#E2E0D8] scroll-mt-[72px]"
        >
          <div className="flex-1 flex flex-col justify-center max-w-[1240px] w-full mx-auto px-6 sm:px-10 py-12 lg:py-16">
            <div className="grid lg:grid-cols-12 gap-8 items-center mb-10 lg:mb-12">
              <div className="lg:col-span-7">
                <p
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6E6D68] mb-3"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? '03 / WORKSHOP PROGRAMME' : '03 / PROGRAM WORKSHOP'}
                </p>
                <h2
                  className="font-extrabold text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.06] tracking-[-0.045em] text-[#141413]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn
                    ? 'Three steps. One day. Tangible impact.'
                    : 'Tiga langkah. Satu hari. Dampak nyata.'}
                </h2>
                <p className="mt-3.5 text-[16px] sm:text-[18px] text-[#4A4945] max-w-[46ch]">
                  {isEn
                    ? 'Bring a real challenge from your workplace. Develop it into ideas, a tested prototype, and an action plan.'
                    : 'Bawa tantangan nyata dari lingkungan kerja Anda. Kembangkan menjadi gagasan, prototipe, dan rencana eksekusi.'}
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden border border-[#DCDAD0] bg-white p-2.5">
                  <img
                    src="./clevio-pro/unsplash-process.jpg"
                    alt={
                      isEn
                        ? 'Solution design and prototyping process'
                        : 'Proses perancangan solusi dan prototipe'
                    }
                    className="w-full h-[180px] sm:h-[200px] object-cover grayscale contrast-120"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  phase: isEn ? 'STAGE 01 · PRE-SESSION (D-14)' : 'TAHAP 01 · PRA-SESI (H-14)',
                  title: isEn
                    ? 'Understand your business context'
                    : 'Pahami konteks bisnis Anda',
                  desc: isEn
                    ? 'Identify the needs, challenges, and highest-priority opportunities in your organisation before the session begins.'
                    : 'Mengidentifikasi kebutuhan, tantangan, dan peluang paling strategis di organisasi Anda sebelum sesi dimulai.',
                  output: isEn
                    ? 'Output: Problem Map & Priority Targets'
                    : 'Output: Peta Masalah & Target Prioritas',
                },
                {
                  num: '02',
                  phase: isEn ? 'STAGE 02 · CORE SESSION (1 DAY)' : 'TAHAP 02 · SESI INTI (1 HARI)',
                  title: isEn ? 'Design solutions with AI' : 'Rancang solusi dengan AI',
                  desc: isEn
                    ? 'Deconstruct root problems with Design Thinking and build solution prototypes alongside AI assistants.'
                    : 'Membedah akar masalah dengan Design Thinking dan membangun prototipe solusi bersama asisten AI.',
                  output: isEn
                    ? 'Output: AI-Powered Solution Prototype'
                    : 'Output: Prototipe Solusi Berbasis AI',
                },
                {
                  num: '03',
                  phase: isEn ? 'STAGE 03 · IMPLEMENTATION (D+14)' : 'TAHAP 03 · IMPLEMENTASI (H+14)',
                  title: isEn
                    ? 'Validate and iterate for execution'
                    : 'Validasi dan iterasi nyata',
                  desc: isEn
                    ? 'Test solutions in your real workplace, refine from user feedback, and define concrete implementation steps.'
                    : 'Menguji solusi di lapangan kerja nyata, menyempurnakan dari umpan balik, dan menyusun langkah eksekusi.',
                  output: isEn
                    ? 'Output: Validated Execution Roadmap'
                    : 'Output: Rencana Implementasi Teruji',
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-white border border-[#DCDAD0] p-7 sm:p-9 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#ECEAE2]">
                      <span
                        className="font-extrabold text-3xl text-[#141413] tracking-[-0.04em] tabular-nums"
                        style={{ fontFamily: '"Manrope", sans-serif' }}
                      >
                        {step.num}
                      </span>
                      <span
                        className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#6E6D68]"
                        style={{ fontFamily: '"Manrope", sans-serif' }}
                      >
                        {step.phase}
                      </span>
                    </div>
                    <h3
                      className="font-extrabold text-xl sm:text-2xl text-[#141413] tracking-[-0.03em]"
                      style={{ fontFamily: '"Manrope", sans-serif' }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[15px] text-[#575651] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#ECEAE2] text-xs font-bold text-[#141413]">
                    {step.output}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#DCDAD0] bg-[#FAF9F5]">
            <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between text-xs text-[#6E6D68]">
              <span className="font-semibold tabular-nums" style={{ fontFamily: '"Manrope", sans-serif' }}>
                {isEn ? 'SECTION 03 / 06 · LEARNING PATHWAY' : 'BAGIAN 03 / 06 · ALUR PEMBELAJARAN'}
              </span>
              <a
                href="#kompetensi"
                className="inline-flex items-center gap-2 font-bold text-[#141413] hover:opacity-70"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                <span>{isEn ? 'Next: Capabilities & Format' : 'Berikutnya: Kompetensi & Format'}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="kompetensi"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-between bg-white border-b border-[#E2E0D8] scroll-mt-[72px]"
        >
          <div className="flex-1 flex flex-col justify-center max-w-[1240px] w-full mx-auto px-6 sm:px-10 py-12 lg:py-16">
            <div className="mb-8 lg:mb-10">
              <p
                className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6E6D68] mb-2.5"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                {isEn ? '04 / TAKEAWAY CAPABILITIES' : '04 / KOMPETENSI YANG DIBAWA PULANG'}
              </p>
              <h2
                className="font-extrabold text-[32px] sm:text-[44px] tracking-[-0.045em] text-[#141413] leading-tight"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                {isEn
                  ? 'Frameworks and skills to lead in the age of AI.'
                  : 'Kerangka berpikir dan keterampilan untuk memimpin di era AI.'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  num: '01',
                  title: isEn ? 'Higher-Order Thinking (HOTS)' : 'Berpikir tingkat tinggi (HOTS)',
                  desc: isEn
                    ? 'Critical and strategic reasoning to filter AI bias and hallucinations.'
                    : 'Penalaran kritis dan strategis untuk memfilter halusinasi AI.',
                },
                {
                  num: '02',
                  title: 'Design Thinking',
                  desc: isEn
                    ? 'Deep empathy for real human needs as the foundation of innovation.'
                    : 'Empati mendalam terhadap kebutuhan nyata manusia.',
                },
                {
                  num: '03',
                  title: isEn ? 'AI Literacy' : 'Literasi AI',
                  desc: isEn
                    ? 'Prompt orchestration, data synthesis, and responsible AI governance.'
                    : 'Orkestrasi prompt, pengelolaan data, dan tata kelola.',
                },
                {
                  num: '04',
                  title: isEn ? 'Leadership' : 'Kepemimpinan',
                  desc: isEn
                    ? 'Guiding systemic change and building resilient team character.'
                    : 'Mengarahkan perubahan sistemik dan karakter tim.',
                },
                {
                  num: '05',
                  title: isEn ? 'Adaptability' : 'Adaptabilitas',
                  desc: isEn
                    ? 'Self-directed continuous learning (Metagogy) amidst disruption.'
                    : 'Kemandirian belajar berkelanjutan (Metagogy).',
                },
              ].map((comp) => (
                <div
                  key={comp.num}
                  className="bg-[#FAF9F5] border border-[#E2E0D8] p-6 flex flex-col justify-between"
                >
                  <span
                    className="text-2xl font-extrabold text-[#141413] tabular-nums mb-5 block"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    {comp.num}
                  </span>
                  <div>
                    <h3
                      className="font-bold text-[17px] text-[#141413] leading-snug"
                      style={{ fontFamily: '"Manrope", sans-serif' }}
                    >
                      {comp.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-[13px] text-[#575651] leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-7 bg-[#FAF9F5] border border-[#E2E0D8] p-7 sm:p-9 flex flex-col justify-center">
                <p
                  className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#6E6D68] mb-2"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? 'WHO IT IS FOR' : 'UNTUK SIAPA'}
                </p>
                <h3
                  className="font-extrabold text-2xl sm:text-[26px] text-[#141413] tracking-[-0.03em]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn
                    ? 'Leaders, managers, and cross-functional professionals.'
                    : 'Pemimpin, manajer, dan profesional lintas fungsi.'}
                </h3>
                <p className="mt-2.5 text-[15px] text-[#575651] leading-relaxed max-w-[52ch]">
                  {isEn
                    ? 'Designed for those who want to strengthen strategic thinking, make sharper decisions, and lead meaningful innovation.'
                    : 'Yang ingin memperkuat cara berpikir, mengambil keputusan strategis, dan memimpin inovasi nyata di dalam organisasinya.'}
                </p>
              </div>

              <div className="md:col-span-5 bg-[#141413] text-white p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <p
                    className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#9E9D96] mb-2"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    {isEn ? 'PROGRAMME FORMAT' : 'FORMAT PELAKSANAAN'}
                  </p>
                  <h3
                    className="font-extrabold text-2xl sm:text-[26px] text-white tracking-[-0.03em]"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    {isEn ? '1 full day · In-person or hybrid.' : '1 hari penuh · In-person atau hybrid.'}
                  </h3>
                  <p className="mt-2 text-sm text-[#B8B6AE] leading-relaxed">
                    {isEn
                      ? 'Available for Public Batches and tailored Corporate In-House sessions.'
                      : 'Tersedia untuk jadwal Public Batch maupun sesi khusus In-House Corporate.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/15">
                  <a
                    href={waInhouseHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:opacity-75"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    <span>
                      {isEn
                        ? 'Discuss Team Schedule via WhatsApp'
                        : 'Diskusikan Jadwal Tim via WhatsApp'}
                    </span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E2E0D8] bg-[#FAF9F5]">
            <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between text-xs text-[#6E6D68]">
              <span className="font-semibold tabular-nums" style={{ fontFamily: '"Manrope", sans-serif' }}>
                {isEn ? 'SECTION 04 / 06 · CAPABILITIES & FORMAT' : 'BAGIAN 04 / 06 · KOMPETENSI & FORMAT'}
              </span>
              <a
                href="#mentor"
                className="inline-flex items-center gap-2 font-bold text-[#141413] hover:opacity-70"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                <span>{isEn ? 'Next: Facilitator Profile' : 'Berikutnya: Profil Mentor'}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="mentor"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-between bg-[#141413] text-[#FAF9F5] scroll-mt-[72px]"
        >
          <div className="flex-1 flex flex-col justify-center max-w-[1240px] w-full mx-auto px-6 sm:px-10 py-12 lg:py-16">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <div className="bg-white/5 border border-white/15 p-3">
                  <div className="aspect-[4/3.4] w-full overflow-hidden bg-black">
                    <img
                      src="./clevio-pro/aranggi-real.jpg"
                      alt="Aranggi Soemardjan"
                      className="w-full h-full object-cover object-top grayscale contrast-115"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#9E9D96]">
                    <span>&ldquo;Get High &amp; Fly, AND Get Down &amp; Dirty&rdquo;</span>
                    <span className="text-white font-semibold">
                      {isEn ? 'Lead Facilitator' : 'Fasilitator Utama'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <p
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#9E9D96] mb-3"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? '05 / LED BY' : '05 / DIPANDU OLEH'}
                </p>
                <h2
                  className="font-extrabold text-[36px] sm:text-[48px] lg:text-[56px] tracking-[-0.045em] text-white leading-[1.05]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  Aranggi Soemardjan
                </h2>
                <p className="mt-2 text-lg sm:text-xl font-semibold text-[#EAE8E0]">
                  {isEn
                    ? 'Serial Innovator for the Greater Good · Social Change Architect'
                    : 'Serial Innovator for the Greater Good · Arsitek Perubahan Sosial'}
                </p>
                <p className="mt-4 text-[16px] sm:text-[17px] text-[#B8B6AE] leading-relaxed max-w-[54ch]">
                  {isEn
                    ? 'Experienced in leading cross-industry innovation and transformation. Connecting an understanding of human needs with technological potential through Design Thinking and AI.'
                    : 'Berpengalaman memimpin inovasi dan transformasi lintas industri. Menghubungkan pemahaman atas kebutuhan manusia dengan potensi teknologi melalui Design Thinking dan AI.'}
                </p>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: isEn ? '3 US Patents' : '3 Hak Paten AS',
                      sub: isEn
                        ? 'Global elevator safety and structural inventions in the United States.'
                        : 'Invensi sistem keamanan elevator global di Amerika Serikat.',
                    },
                    {
                      title: 'SOSOK Harian Kompas',
                      sub: isEn
                        ? '1995 internet ecosystem pioneer & 2012 Ristek Award recipient.'
                        : 'Pionir ekosistem internet 1995 & peraih Ristek Award 2012.',
                    },
                    {
                      title: 'Clevio & Agriana.ai',
                      sub: isEn
                        ? 'Driving technopreneurship education & AI agricultural ecosystems.'
                        : 'Penggerak technopreneurship & ekosistem pangan berbasis AI.',
                    },
                  ].map((cred) => (
                    <div
                      key={cred.title}
                      className="p-4 bg-white/[0.04] border border-white/15"
                    >
                      <p
                        className="text-xs font-bold text-white"
                        style={{ fontFamily: '"Manrope", sans-serif' }}
                      >
                        {cred.title}
                      </p>
                      <p className="mt-1 text-xs text-[#B8B6AE] leading-relaxed">{cred.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setActiveVideo('mentor')}
                    className="min-h-[46px] inline-flex items-center gap-2.5 bg-white hover:bg-[#EAE8E0] text-[#141413] px-6 py-3 text-xs font-bold transition-colors"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    <span>{isEn ? 'Watch Facilitator Video' : 'Tonton Video Profil'}</span>
                    <span aria-hidden="true">▶</span>
                  </button>

                  <a
                    href={MENTOR_ARTICLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:opacity-75 border-b border-white pb-0.5"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    <span>
                      {isEn
                        ? 'Read Harian Kompas SOSOK Feature'
                        : 'Baca Liputan SOSOK Harian Kompas'}
                    </span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/15">
            <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between text-xs text-[#9E9D96]">
              <span className="font-semibold tabular-nums" style={{ fontFamily: '"Manrope", sans-serif' }}>
                {isEn ? 'SECTION 05 / 06 · PROGRAMME FACILITATOR' : 'BAGIAN 05 / 06 · FASILITATOR PROGRAM'}
              </span>
              <a
                href="#galeri"
                className="inline-flex items-center gap-2 font-bold text-white hover:opacity-75"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                <span>{isEn ? 'Next: Gallery & Ecosystem' : 'Berikutnya: Galeri & Ekosistem'}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="galeri"
          className="min-h-[calc(100svh-72px)] flex flex-col justify-between bg-[#FAF9F5] border-b border-[#E2E0D8] scroll-mt-[72px]"
        >
          <div className="flex-1 flex flex-col justify-center max-w-[1240px] w-full mx-auto px-6 sm:px-10 py-12 lg:py-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-10">
              <div>
                <p
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6E6D68] mb-2.5"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn ? '06 / GALLERY & DOCUMENTATION' : '06 / GALERI & DOKUMENTASI'}
                </p>
                <h2
                  className="font-extrabold text-[32px] sm:text-[42px] tracking-[-0.045em] text-[#141413]"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  {isEn
                    ? 'Collaborative learning environment.'
                    : 'Suasana kolaborasi dan pembelajaran.'}
                </h2>
              </div>
              <p className="text-sm text-[#575651] max-w-xs">
                {isEn
                  ? 'Exchanging perspectives, framing problems, and exploring practical AI solutions together.'
                  : 'Pertukaran perspektif, pemetaan masalah, dan eksplorasi solusi bersama.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  src: './clevio-pro/unsplash-gallery-1.jpg',
                  num: '01',
                  caption: isEn ? 'Fresh strategic perspectives' : 'Perspektif strategis baru',
                },
                {
                  src: './clevio-pro/unsplash-gallery-2.jpg',
                  num: '02',
                  caption: isEn ? 'Cross-functional collaboration' : 'Kolaborasi lintas fungsi',
                },
                {
                  src: './clevio-pro/unsplash-gallery-3.jpg',
                  num: '03',
                  caption: isEn ? 'Solution prototype design' : 'Perancangan prototipe solusi',
                },
              ].map((img) => (
                <figure key={img.num} className="m-0 bg-white border border-[#E2E0D8] p-2.5">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#141413]">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="pt-2.5 px-1 flex items-center gap-2 text-xs text-[#4A4945]">
                    <span className="font-bold text-[#7A7974] tabular-nums">{img.num}</span>
                    <span className="font-medium">{img.caption}</span>
                  </figcaption>
                </figure>
              ))}

              <figure className="m-0 bg-white border border-[#E2E0D8] p-2.5">
                <button
                  type="button"
                  onClick={() => setActiveVideo('workshop')}
                  aria-label={
                    isEn
                      ? 'Play Clevio AI Pro session video'
                      : 'Putar video dokumentasi sesi Clevio AI Pro'
                  }
                  className="group relative aspect-[4/3] w-full overflow-hidden bg-[#141413] block text-left"
                >
                  <img
                    src="./clevio-pro/unsplash-gallery-4.jpg"
                    alt={
                      isEn
                        ? 'Clevio AI Pro session video highlight'
                        : 'Cuplikan video sesi Clevio AI Pro'
                    }
                    className="w-full h-full object-cover grayscale contrast-115 opacity-80 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/35">
                    <span className="w-12 h-12 rounded-full bg-white text-[#141413] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5">
                        <polygon points="8 5 19 12 8 19 8 5" />
                      </svg>
                    </span>
                  </span>
                </button>
                <figcaption className="pt-2.5 px-1 flex items-center gap-2 text-xs text-[#4A4945]">
                  <span className="font-bold text-[#7A7974] tabular-nums">04</span>
                  <span className="font-medium">
                    {isEn ? 'Watch session video highlight' : 'Tonton video dokumentasi sesi'}
                  </span>
                </figcaption>
              </figure>
            </div>

            <div className="mt-10 pt-8 border-t border-[#E2E0D8]">
              <p
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E6D68] mb-4"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                {isEn
                  ? 'TRUSTED BY & ECOSYSTEM HIGHLIGHTS'
                  : 'DIPERCAYA OLEH & SOROTAN EKOSISTEM'}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { name: 'Harian Kompas', sub: isEn ? 'SOSOK Feature' : 'Liputan SOSOK' },
                  { name: 'Ristek Award', sub: isEn ? 'Innovation Award' : 'Anugerah Inovasi' },
                  { name: 'Harvard Seed', sub: 'Social Innovation' },
                  { name: 'Agriana.ai', sub: isEn ? 'AI Food Ecosystem' : 'Ekosistem Pangan AI' },
                  { name: 'Clevio Camp', sub: isEn ? 'EdTech Innovation' : 'Inovasi Pendidikan' },
                ].map((org) => (
                  <div
                    key={org.name}
                    className="px-4 py-3.5 bg-white border border-[#E2E0D8] text-center"
                  >
                    <p
                      className="text-xs font-bold text-[#141413]"
                      style={{ fontFamily: '"Manrope", sans-serif' }}
                    >
                      {org.name}
                    </p>
                    <p className="text-[11px] text-[#6E6D68] mt-0.5">{org.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#E2E0D8] bg-white">
            <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between text-xs text-[#6E6D68]">
              <span className="font-semibold tabular-nums" style={{ fontFamily: '"Manrope", sans-serif' }}>
                {isEn ? 'SECTION 06 / 06 · COLLABORATIVE SPACE' : 'BAGIAN 06 / 06 · RUANG KOLABORASI'}
              </span>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 font-bold text-[#141413] hover:opacity-70"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                <span>{isEn ? 'Registration & Contact' : 'Pendaftaran & Kontak'}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <div
        id="kontak"
        className="min-h-[calc(100svh-72px)] flex flex-col justify-between bg-[#F2F0E8] scroll-mt-[72px]"
      >
        <section className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-6 py-16">
          <p
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6E6D68] mb-4"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            {isEn ? 'TAKE YOUR NEXT STRATEGIC STEP' : 'MULAI LANGKAH STRATEGIS ANDA'}
          </p>
          <h2
            className="font-extrabold text-[36px] sm:text-[48px] lg:text-[56px] tracking-[-0.045em] text-[#141413] leading-[1.06]"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            {isEn ? 'Ready to lead change with AI?' : 'Siap memimpin perubahan dengan AI?'}
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#4A4945] max-w-lg">
            {isEn
              ? 'Secure your place at the Clevio AI Pro workshop or schedule an in-house session for your organisation.'
              : 'Amankan tempat Anda di workshop Clevio AI Pro atau jadwalkan sesi in-house untuk organisasi Anda.'}
          </p>
          <div className="mt-8">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[54px] inline-flex items-center justify-center gap-4 bg-[#141413] hover:bg-[#2C2C2A] text-white px-9 py-4 text-sm font-bold transition-colors"
              style={{ fontFamily: '"Manrope", sans-serif' }}
            >
              <span>
                {isEn ? 'Register Workshop via WhatsApp' : 'Daftar Workshop via WhatsApp'}
              </span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-3.5 text-xs text-[#6E6D68]">
            {isEn
              ? 'Our team will confirm schedule availability directly via WhatsApp.'
              : 'Tim Clevio AI Pro akan mengonfirmasi jadwal dan ketersediaan tempat langsung melalui WhatsApp.'}
          </p>
        </section>

        <footer className="bg-[#141413] text-[#FAF9F5] border-t border-[#2C2C2A]">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
            <div className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/10">
              <div className="flex items-center gap-6">
                <a href="#top" className="inline-flex items-baseline gap-1.5">
                  <ClevioLogo size="sm" variant="light" sublabel="" />
                  <span
                    className="text-lg font-medium tracking-[-0.03em] text-[#B8B6AE] -ml-1"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                  >
                    AI Pro
                  </span>
                </a>
                <span className="hidden sm:inline-block h-4 w-px bg-white/15" />
                <nav className="hidden sm:flex items-center gap-6 text-xs text-[#B8B6AE]">
                  <a href="#tantangan" className="hover:text-white transition-colors">
                    {isEn ? 'Challenge' : 'Tantangan'}
                  </a>
                  <a href="#hasil" className="hover:text-white transition-colors">
                    {isEn ? '3H Outcomes' : 'Hasil 3H'}
                  </a>
                  <a href="#kurikulum" className="hover:text-white transition-colors">
                    {isEn ? 'Curriculum' : 'Kurikulum'}
                  </a>
                  <a href="#kompetensi" className="hover:text-white transition-colors">
                    {isEn ? 'Capabilities' : 'Kompetensi'}
                  </a>
                  <a href="#mentor" className="hover:text-white transition-colors">
                    {isEn ? 'Facilitator' : 'Mentor'}
                  </a>
                  <a href="#galeri" className="hover:text-white transition-colors">
                    {isEn ? 'Gallery' : 'Galeri'}
                  </a>
                </nav>
              </div>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[38px] inline-flex items-center justify-center bg-white hover:bg-[#EAE8E0] text-[#141413] px-5 py-2 text-xs font-bold transition-colors"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                {isEn ? 'Register Workshop' : 'Daftar Workshop'}
              </a>
            </div>

            <div className="py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#9E9D96]">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span>© 2026 Clevio AI Pro. All rights reserved.</span>
                <span className="hidden sm:inline text-white/15">|</span>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors tabular-nums"
                >
                  <PhoneIcon className="w-3.5 h-3.5" />
                  <span>+62 822-2111-8860</span>
                </a>
                <span className="hidden sm:inline text-white/15">|</span>
                <a href="https://cleviopro.vercel.app" className="hover:text-white transition-colors">
                  chiefaiofficer.id
                </a>
                <span className="hidden sm:inline text-white/15">|</span>
                <a
                  href="mailto:clevioaipro@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  clevioaipro@gmail.com
                </a>
              </div>

              <a href="#top" className="hover:text-white transition-colors">
                {isEn ? 'Back to top ↑' : 'Kembali ke atas ↑'}
              </a>
            </div>
          </div>
        </footer>
      </div>

      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pemutar Video Clevio AI Pro"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-4xl bg-[#141413] border border-[#2C2C2A] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#2C2C2A] text-white text-xs sm:text-sm">
              <span className="font-bold" style={{ fontFamily: '"Manrope", sans-serif' }}>
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
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white"
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
