"""Complete, authoritative Clevio AI Pro site builder - Wave 1 (P0) Execution.
Transforms scraped_sites/montarville/pages/index.original.html into a 100% French/Montarville-free
Clevio AI Pro website matching the executive B2B audit & visual mockup with:
- Wave 1 P0: Revised Hero matching mockup (eyebrow with red dash, H1, concise copy, dual CTA, 3 audience badges, rounded hero photo)
- Wave 1 P0: Dedicated Trust & Deliverables strip (Credentials vs What You Leave With with custom SVG icons)
- Wave 1 P0: Metode Workshop header grid (METODE WORKSHOP · Pendekatan terstruktur, berorientasi aksi) + 3 stages + Flipped Learning delivery banner
- Wave 1 P0: Exactly 5 distinct Competencies in Section 4, Navbar, and Footer
- Wave 1 P0: Credible facilitator credentials for Aranggi Soemardjan (Founder Clevio · 13+ tahun track record)
- Wave 1 P0: Corporate consultation WhatsApp flow with pre-filled message
- Wave 1 P0: Accessibility fixes (zoom enabled, mobile menu CTA fixed, misleading gallery CTA fixed)
- Exact Montarville layout fidelity, Section 1 float wrap, full-bleed footer watermark
- Output written to both scraped_sites/montarville/pages/index.html and clevio-ai-pro-web/index.html
"""
import os
import re
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIG_HTML_PATH = os.path.join(ROOT, 'scraped_sites', 'montarville', 'pages', 'index.original.html')
LOCAL_HTML_PATH = os.path.join(ROOT, 'scraped_sites', 'montarville', 'pages', 'index.html')
LOCAL_ASSETS = os.path.join(ROOT, 'scraped_sites', 'montarville', 'assets')

REPO_DIR = r'c:\Users\dell\Documents\antigravity\clevio-ai-pro-web'
REPO_HTML_PATH = os.path.join(REPO_DIR, 'index.html')
REPO_ASSETS = os.path.join(REPO_DIR, 'assets')
CLEVIO_IMG_SRC = os.path.join(REPO_DIR, 'images')

FORM = 'https://docs.google.com/forms/d/e/1FAIpQLScTLClxHJTqTis0Rq7f8cRhor9hGSKAzsU7TSB0c7sIQeqo9Q/viewform'
WA_CONSULT = 'https://wa.me/6281210878144?text=Halo%20Clevio,%20saya%20ingin%20berkonsultasi%20mengenai%20AI%20Thinking%20%26%20Innovation%20Workshop%20untuk%20tim%20organisasi%20kami.%20Mohon%20informasi%20format%20dan%20penawarannya.'
EXT = 'target="_blank" rel="noopener noreferrer"'

# 1. Copy Clevio editorial images to local assets
CLEVIO_IMAGES = {
    'team': 'professional-workshop-team.jpg',
    'training': 'professional-training.jpg',
    'leader': 'leadership-editorial.webp',
    'change': 'workplace-change-editorial.webp',
    'design': 'design-process-editorial.webp',
    'aranggi': 'aranggi-soemardjan.jpg',
}
dest_img_dir = os.path.join(LOCAL_ASSETS, 'images', 'clevio')
os.makedirs(dest_img_dir, exist_ok=True)
for f in CLEVIO_IMAGES.values():
    src_f = os.path.join(CLEVIO_IMG_SRC, f)
    if os.path.exists(src_f):
        shutil.copy2(src_f, os.path.join(dest_img_dir, f))

# Read original HTML
with open(ORIG_HTML_PATH, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

print(f'Original HTML loaded: {len(html)} bytes')

# -----------------------------------------------------------------------------
# A. HEAD & METADATA (ACCESSIBILITY & SEO)
# -----------------------------------------------------------------------------
html = re.sub(r'<html\s+lang="[^"]*"', '<html lang="id"', html, count=1)
html = html.replace('data-content-lang="fr"', 'data-content-lang="id"')

# Fix accessibility: remove user-scalable=0 and maximum-scale=1.0 to enable pinch-to-zoom
html = re.sub(
    r'<meta name="viewport" content="[^"]*"',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"',
    html, count=1, flags=re.I
)

# Title & Description
html = re.sub(
    r'<title>.*?</title>',
    '<title>Clevio AI Pro | AI Thinking &amp; Innovation Workshop untuk Pemimpin Bisnis</title>',
    html, count=1, flags=re.I
)
html = re.sub(
    r'<meta name="description" content="[^"]*"',
    '<meta name="description" content="Ubah potensi AI menjadi keputusan dan rencana aksi nyata bagi bisnis. Workshop intensif 1 hari memadukan Design Thinking dan AI Thinking bagi pemimpin dan pengambil keputusan."',
    html, count=1, flags=re.I
)
html = re.sub(
    r'<meta property="og:title" content="[^"]*"',
    '<meta property="og:title" content="Clevio AI Pro | AI Thinking &amp; Innovation Workshop"',
    html, count=1, flags=re.I
)
html = re.sub(
    r'<meta property="og:description" content="[^"]*"',
    '<meta property="og:description" content="Bawa satu tantangan nyata organisasi Anda. Uji peluang bersama AI dan susun action plan terukur bersama Clevio AI Pro."',
    html, count=1, flags=re.I
)
html = re.sub(
    r'<meta property="og:site_name" content="[^"]*"',
    '<meta property="og:site_name" content="Clevio AI Pro"',
    html, count=1, flags=re.I
)
html = re.sub(
    r'<meta property="og:image" content="[^"]*"',
    '<meta property="og:image" content="/montarville_assets/images/favicon-512x512.png"',
    html, count=1, flags=re.I
)
html = re.sub(r'<meta property="og:url" content="[^"]*"', '<meta property="og:url" content="https://lazverx.github.io/clevio-ai-pro-web/"', html, count=1)
html = html.replace('<meta name="theme-color" content="#fafafa"/>', '<meta name="theme-color" content="#121212"/>')

# Remove preload fonts pointing to montarville.ca
html = re.sub(r'<link rel="preload" as="font" href="https://montarville\.ca[^"]*" crossorigin="">', '', html)
html = re.sub(r'<link rel="preload" data-rocket-preload as="image"[^>]*>', '', html)

# Replace Favicon tags
favicons_html = """
  <script>
    var ff_favicon_url = '/montarville_assets/images/favicon-32x32.png';
    var ff_favicon_url_dark = '/montarville_assets/images/favicon-32x32.png';
  </script>
  <link rel="icon" type="image/svg+xml" href="/montarville_assets/images/favicon.svg" />
  <link rel="icon" type="image/png" sizes="32x32" href="/montarville_assets/images/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/montarville_assets/images/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/montarville_assets/images/favicon-192x192.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/montarville_assets/images/favicon-180x180.png" />
  <link rel="shortcut icon" href="/montarville_assets/images/favicon.ico" type="image/x-icon" />
  <link rel="canonical" href="https://lazverx.github.io/clevio-ai-pro-web/" />
"""
html = re.sub(
    r'<script>\s*var ff_favicon_url[\s\S]*?<link rel="shortcut icon"[^>]*\/>',
    favicons_html.strip(),
    html, count=1, flags=re.I
)

# Clean theme variables in <head>
head_vars_old = re.search(r'var language\s*=\s*\'fr\';[\s\S]*?var ff_locale\s*=\s*\'[^\']*\';', html)
if head_vars_old:
    html = html.replace(
        head_vars_old.group(0),
        "var language = 'id';\n    var ff_local_mode = false;\n    var ff_dev_mode = false;\n    var ff_theme_url = '/montarville_assets/';\n    var ff_root_url = '/';\n    var ff_locale = 'id-ID';"
    )

# -----------------------------------------------------------------------------
# B. CUSTOM CSS (Layout, Hero Mockup Fidelity, Trust Strip, Method Header, Footer Watermark)
# -----------------------------------------------------------------------------
custom_css = """
<style>
  /* Clevio AI Pro Custom Enhancements */
  :root {
    --color-primary: #D0112B;
    --color-dark: #121212;
  }
  
  /* Header Navbar Logo & Nav Items */
  .c-header__scroll {
    display: none !important;
  }
  .c-header__logo {
    display: flex !important;
    align-items: center !important;
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    pointer-events: auto !important;
  }
  
  /* Logo transparency in all navbar and drawer states */
  .c-header__logo,
  .c-header__logo img,
  .c-header__logo-img,
  .c-mobile-menu__logo,
  .c-mobile-menu__logo img,
  .c-screen-menu__inner .c-header__logo img,
  .c-transition-overlay__inner-logo img,
  .c-footer__logo,
  .c-footer__logo img,
  .c-footer__logo-img {
    background: transparent !important;
    background-color: transparent !important;
    box-shadow: none !important;
    border: none !important;
  }

  .c-header__logo-img {
    height: 32px !important;
    width: auto !important;
    object-fit: contain !important;
    display: block !important;
    opacity: 1 !important;
  }
  

  /* Hero Section: Modern 2-Column Executive Layout matching Mockup */
  .c-home-intro__logo {
    display: none !important;
  }
  .c-home-intro__wrapper {
    padding-top: clamp(80px, 11vh, 120px) !important;
    padding-bottom: clamp(30px, 5vh, 60px) !important;
    min-height: auto !important;
    display: flex !important;
    flex-direction: column !important;
  }
  .c-hero-main-grid {
    display: grid !important;
    grid-template-columns: 1.15fr 0.85fr !important;
    gap: clamp(2rem, 4vw, 4.5rem) !important;
    align-items: center !important;
    width: 100% !important;
  }
  @media (max-width: 991px) {
    .c-hero-main-grid {
      grid-template-columns: 1fr !important;
      gap: 1.75rem !important;
    }
  }
  .c-hero-col-left {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  /* Hero Eyebrow */
  .c-hero-eyebrow {
    font-family: 'Sono Proportional', monospace !important;
    font-size: clamp(0.78rem, 0.95vw, 0.9rem) !important;
    color: #D0112B !important;
    text-transform: uppercase !important;
    letter-spacing: 0.08em !important;
    font-weight: 600 !important;
    margin-bottom: 1rem !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
  }
  .c-hero-eyebrow__dash {
    color: #D0112B !important;
    font-weight: 700 !important;
  }

  /* Hero H1 */
  .c-home-intro__title {
    margin-top: 0 !important;
    width: 100% !important;
  }
  .c-home-intro__title h1 {
    font-family: General Sans, sans-serif !important;
    font-size: clamp(2.3rem, 3.8vw, 3.9rem) !important;
    font-weight: 600 !important;
    line-height: 1.12 !important;
    color: #FAFAFA !important;
    margin-bottom: 1.25rem !important;
    width: 100% !important;
    letter-spacing: -0.02em !important;
  }
  .c-home-intro__title h1 strong {
    color: #FAFAFA !important;
    font-weight: 700 !important;
  }

  /* Hero Paragraph */
  .c-home-intro__wysiwyg {
    width: 100% !important;
    max-width: 580px !important;
    margin-bottom: 1.75rem !important;
  }
  .c-home-intro__wysiwyg p {
    font-size: clamp(0.95rem, 1.1vw, 1.08rem) !important;
    color: rgba(250, 250, 250, 0.75) !important;
    line-height: 1.55 !important;
    margin: 0 !important;
  }

  /* Hero CTAs */
  .c-home-intro__ctas {
    margin-top: 0 !important;
    display: flex !important;
    flex-direction: row !important;
    gap: 0.85rem !important;
    align-items: center !important;
    flex-wrap: wrap !important;
    width: 100% !important;
  }
  .c-home-intro__ctas .c-cta {
    font-family: General Sans, sans-serif !important;
    font-size: 0.95rem !important;
    font-weight: 600 !important;
    padding: 0.85rem 1.6rem !important;
    border-radius: 6px !important;
    text-align: center !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    letter-spacing: 0.01em !important;
    text-transform: none !important;
  }
  .c-home-intro__ctas .c-cta::before {
    display: none !important;
  }
  @media (max-width: 768px) {
    .c-home-intro__ctas {
      flex-direction: column !important;
      width: 100% !important;
    }
    .c-home-intro__ctas .c-cta {
      width: 100% !important;
    }
  }

  /* Hero Badges */
  .c-hero-badges {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 0.5rem !important;
    margin-top: 1.25rem !important;
    align-items: center !important;
  }
  .c-hero-badge {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    border-radius: 9999px !important;
    padding: 5px 14px !important;
    font-size: 0.8rem !important;
    font-family: General Sans, sans-serif !important;
    color: rgba(250, 250, 250, 0.82) !important;
    letter-spacing: 0.01em !important;
    white-space: nowrap !important;
  }

  /* Hero Photo Box (Right Column) */
  .c-hero-col-right {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100% !important;
  }
  .c-hero-photo-wrapper {
    width: 100% !important;
    border-radius: 20px !important;
    overflow: hidden !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45) !important;
    aspect-ratio: 16 / 11 !important;
  }
  .c-hero-photo-img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    display: block !important;
  }
  @media (max-width: 991px) {
    .c-hero-col-right {
      display: none !important; /* On mobile, strip appears directly below badges per mockup */
    }
  }

  /* Trust & Deliverables Strip */
  .c-trust-deliverables-strip {
    margin-top: clamp(2.5rem, 4.5vw, 4rem) !important;
    padding: clamp(1.4rem, 2.2vw, 2.2rem) !important;
    background: #161616 !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 14px !important;
    display: grid !important;
    grid-template-columns: auto 1px 1fr !important;
    gap: clamp(1.5rem, 3vw, 3rem) !important;
    align-items: center !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  @media (max-width: 991px) {
    .c-trust-deliverables-strip {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
      padding: 1.4rem !important;
    }
    .c-trust-main-divider {
      width: 100% !important;
      height: 1px !important;
      min-height: 1px !important;
    }
  }
  .c-trust-credentials {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.65rem !important;
  }
  .c-trust-brand-tag {
    font-family: 'Sono Proportional', monospace !important;
    font-size: 0.72rem !important;
    font-weight: 600 !important;
    color: #D0112B !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
  }
  .c-trust-stats-row {
    display: flex !important;
    align-items: center !important;
    gap: clamp(1.25rem, 2vw, 2.2rem) !important;
  }
  .c-trust-stat {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.2rem !important;
  }
  .c-trust-stat__num {
    font-family: General Sans, sans-serif !important;
    font-size: clamp(1.8rem, 2.4vw, 2.5rem) !important;
    font-weight: 600 !important;
    color: #FAFAFA !important;
    line-height: 1 !important;
  }
  .c-trust-stat__label {
    font-family: 'Sono Proportional', monospace !important;
    font-size: 0.75rem !important;
    color: rgba(250, 250, 250, 0.65) !important;
    text-transform: lowercase !important;
    letter-spacing: 0.02em !important;
    line-height: 1.3 !important;
  }
  .c-trust-stat__divider {
    width: 1px !important;
    height: 44px !important;
    background: rgba(255, 255, 255, 0.15) !important;
  }
  .c-trust-main-divider {
    width: 1px !important;
    height: 100% !important;
    min-height: 80px !important;
    background: rgba(255, 255, 255, 0.12) !important;
  }
  .c-trust-deliverables {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.85rem !important;
  }
  .c-trust-deliverables__heading {
    font-family: General Sans, sans-serif !important;
    font-size: 0.98rem !important;
    font-weight: 600 !important;
    color: #FAFAFA !important;
  }
  .c-trust-deliverables__grid {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: clamp(1rem, 2vw, 2rem) !important;
  }
  @media (max-width: 768px) {
    .c-trust-deliverables__grid {
      grid-template-columns: 1fr !important;
      gap: 1.25rem !important;
    }
  }
  .c-deliverable-item {
    display: flex !important;
    gap: 0.85rem !important;
    align-items: flex-start !important;
  }
  .c-deliverable-item__icon {
    flex-shrink: 0 !important;
    margin-top: 2px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .c-deliverable-item__text {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.25rem !important;
  }
  .c-deliverable-item__title {
    font-family: General Sans, sans-serif !important;
    font-size: 0.92rem !important;
    font-weight: 600 !important;
    color: #FAFAFA !important;
    line-height: 1.25 !important;
  }
  .c-deliverable-item__desc {
    font-size: 0.8rem !important;
    color: rgba(250, 250, 250, 0.65) !important;
    line-height: 1.4 !important;
  }

  /* Section 3 (Metode Workshop) Header Grid */
  .c-method-header-grid {
    display: grid !important;
    grid-template-columns: 1.15fr 0.85fr !important;
    gap: clamp(1.5rem, 3vw, 4rem) !important;
    align-items: flex-end !important;
    margin-bottom: clamp(2.5rem, 4vw, 4rem) !important;
    width: 100% !important;
  }
  @media (max-width: 768px) {
    .c-method-header-grid {
      grid-template-columns: 1fr !important;
      gap: 1rem !important;
    }
  }
  .c-method-title {
    font-family: General Sans, sans-serif !important;
    font-size: clamp(2.0rem, 3.2vw, 3.2rem) !important;
    font-weight: 600 !important;
    color: #FAFAFA !important;
    line-height: 1.15 !important;
    margin-top: 0.5rem !important;
    letter-spacing: -0.015em !important;
  }
  .c-method-desc {
    font-size: clamp(0.95rem, 1.1vw, 1.1rem) !important;
    color: rgba(250, 250, 250, 0.72) !important;
    line-height: 1.55 !important;
    margin: 0 !important;
  }

  /* Section 1 (c-home-about): Natural Float Wrap matching original Montarville */
  .c-home-about__title {
    font-size: clamp(2.4rem, 4.4vw, 5.0rem) !important;
    line-height: 1.06 !important;
    word-break: normal !important;
  }
  .c-home-about__title-container {
    max-width: calc(var(--grid-gutter) * -1 + (var(--grid-gutter) + var(--grid-col-width)) * 10) !important;
  }

  /* Delivery Format Banner (Flipped Learning) */
  .c-method-format-banner {
    margin-top: clamp(2rem, 3.5vw, 3.5rem);
    padding: clamp(1.25rem, 2vw, 1.75rem);
    background: rgba(208, 17, 43, 0.08);
    border: 1px solid rgba(208, 17, 43, 0.35);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .c-method-format-banner__tag {
    font-family: 'Sono Proportional', monospace;
    font-size: 0.72rem;
    font-weight: 600;
    color: #D0112B;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .c-method-format-banner__title {
    font-family: General Sans, sans-serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: #FAFAFA;
  }
  .c-method-format-banner__desc {
    font-size: 0.88rem;
    color: rgba(250, 250, 250, 0.75);
    line-height: 1.45;
  }

  /* Section 7 (c-footer): Full-bleed Giant Logo Watermark */
  .c-footer {
    position: relative !important;
    overflow: hidden !important;
    padding-bottom: clamp(140px, 18vw, 280px) !important;
  }
  .c-footer__wrapper {
    position: relative !important;
    z-index: 2 !important;
  }
  .c-footer__logo {
    position: absolute !important;
    left: -2% !important;
    right: -2% !important;
    bottom: -8vw !important;
    width: 104% !important;
    pointer-events: none !important;
    z-index: 0 !important;
    display: flex !important;
    justify-content: flex-start !important;
  }
  .c-footer__logo-img {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    object-fit: contain !important;
    display: block !important;
    opacity: 0.95 !important;
  }

  /* Transition Overlay Logo */
  .c-transition-overlay__inner-logo {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .c-transition-overlay__inner-logo img {
    max-width: 280px;
    width: 70%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  /* Buttons & CTAs */
  .c-cta {
    background-color: #D0112B !important;
    border-color: #D0112B !important;
    color: #FAFAFA !important;
  }
  .c-cta:hover {
    background-color: #B2272B !important;
    border-color: #B2272B !important;
  }
  .c-cta.--secondary {
    background-color: transparent !important;
    border-color: #fafafa40 !important;
    color: #FAFAFA !important;
  }
  .c-cta.--secondary:hover {
    background-color: #fafafa15 !important;
    border-color: #FAFAFA !important;
  }

  /* Hide French Cookie Notice, Tracking Modals, and Dynamic Overlay */
  #cookie-notice, .cky-consent-container, .cky-modal,
  #ff-wp-tracking, .ff-wp-tracking__ctn, .ff-wp-tracking__modal,
  .c-dynamic-content-overlay,
  .c-overlay.c-dynamic-content-overlay {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
  
  /* Smooth page visibility */
  html, body, #page-content, main {
    opacity: 1 !important;
    visibility: visible !important;
  }

  /* ------------------------------------------------------------- */
  /* GELOMBANG 2 (P1): CRO & FRICTION REDUCTION ENHANCEMENTS       */
  /* ------------------------------------------------------------- */

  /* Workshop Information Panel */
  .c-workshop-info-section {
    padding: clamp(60px, 8vw, 110px) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background: #101010;
  }
  .c-info-header {
    margin-bottom: clamp(2rem, 3.5vw, 3.5rem);
    max-width: 820px;
  }
  .c-info-eyebrow {
    font-family: 'Sono Proportional', monospace;
    font-size: 0.75rem;
    color: #D0112B;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
    margin-bottom: 0.65rem;
  }
  .c-info-title {
    font-family: General Sans, sans-serif;
    font-size: clamp(2.0rem, 3.2vw, 3.2rem);
    font-weight: 600;
    color: #FAFAFA;
    line-height: 1.15;
    margin-bottom: 0.85rem;
    letter-spacing: -0.015em;
  }
  .c-info-subtitle {
    font-size: clamp(0.95rem, 1.1vw, 1.1rem);
    color: rgba(250, 250, 250, 0.7);
    line-height: 1.55;
    margin: 0;
  }
  .c-info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(1.25rem, 2vw, 2rem);
  }
  @media (max-width: 768px) {
    .c-info-grid {
      grid-template-columns: 1fr;
    }
  }
  .c-info-card {
    background: #161616;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: clamp(1.5rem, 2.5vw, 2.2rem);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: border-color 0.25s ease, transform 0.25s ease;
  }
  .c-info-card:hover {
    border-color: rgba(208, 17, 43, 0.4);
    transform: translateY(-2px);
  }
  .c-info-card__icon {
    width: 44px;
    height: 44px;
    border-radius: 8px;
    background: rgba(208, 17, 43, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.25rem;
  }
  .c-info-card__title {
    font-family: General Sans, sans-serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: #FAFAFA;
  }
  .c-info-card__desc {
    font-size: 0.9rem;
    color: rgba(250, 250, 250, 0.72);
    line-height: 1.55;
    margin: 0;
  }
  .c-info-card__desc strong {
    color: #FAFAFA;
    font-weight: 600;
  }

  /* Executive FAQ Section */
  .c-faq-section {
    padding: clamp(60px, 8vw, 110px) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background: #0d0d0d;
  }
  .c-faq-header {
    margin-bottom: clamp(2rem, 3.5vw, 3.5rem);
    max-width: 820px;
  }
  .c-faq-eyebrow {
    font-family: 'Sono Proportional', monospace;
    font-size: 0.75rem;
    color: #D0112B;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
    margin-bottom: 0.65rem;
  }
  .c-faq-title {
    font-family: General Sans, sans-serif;
    font-size: clamp(2.0rem, 3.2vw, 3.2rem);
    font-weight: 600;
    color: #FAFAFA;
    line-height: 1.15;
    letter-spacing: -0.015em;
  }
  .c-faq-list {
    display: flex;
    flex-direction: column;
  }
  .c-faq-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: clamp(1.2rem, 1.8vw, 1.75rem) 0;
    transition: border-color 0.25s ease;
  }
  .c-faq-item:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  .c-faq-item summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: General Sans, sans-serif;
    font-size: clamp(1.05rem, 1.25vw, 1.25rem);
    font-weight: 600;
    color: #FAFAFA;
    cursor: pointer;
    list-style: none;
    gap: 1.5rem;
  }
  .c-faq-item summary::-webkit-details-marker {
    display: none;
  }
  .c-faq-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }
  .c-faq-item[open] .c-faq-icon {
    transform: rotate(45deg);
    border-color: #D0112B;
    background: rgba(208, 17, 43, 0.15);
  }
  .c-faq-answer {
    margin-top: 1rem;
    padding-right: clamp(1rem, 4vw, 3rem);
  }
  .c-faq-answer p {
    font-size: clamp(0.92rem, 1.05vw, 1.02rem);
    color: rgba(250, 250, 250, 0.72);
    line-height: 1.6;
    margin: 0;
  }
  .c-faq-answer p strong {
    color: #FAFAFA;
  }

  /* Final Closing Conversion CTA Section */
  .c-closing-cta-section {
    padding: clamp(60px, 8vw, 110px) 0;
    background: #121212;
  }
  .c-closing-cta-card {
    background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%);
    border: 1px solid rgba(208, 17, 43, 0.35);
    border-radius: 16px;
    padding: clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3.5rem);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }
  .c-closing-cta-eyebrow {
    font-family: 'Sono Proportional', monospace;
    font-size: 0.78rem;
    color: #D0112B;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    margin-bottom: 0.85rem;
  }
  .c-closing-cta-title {
    font-family: General Sans, sans-serif;
    font-size: clamp(2.0rem, 3.6vw, 3.6rem);
    font-weight: 600;
    color: #FAFAFA;
    line-height: 1.15;
    max-width: 820px;
    margin-bottom: 1.25rem;
    letter-spacing: -0.015em;
  }
  .c-closing-cta-desc {
    font-size: clamp(0.95rem, 1.15vw, 1.12rem);
    color: rgba(250, 250, 250, 0.75);
    line-height: 1.6;
    max-width: 680px;
    margin: 0 0 2.25rem 0;
  }
  .c-closing-cta-buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .c-closing-cta-buttons .c-cta {
    font-family: General Sans, sans-serif !important;
    font-size: 1rem !important;
    font-weight: 600 !important;
    padding: 0.95rem 2.0rem !important;
    border-radius: 6px !important;
    text-align: center !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    letter-spacing: 0.01em !important;
    text-transform: none !important;
  }
  @media (max-width: 640px) {
    .c-closing-cta-buttons {
      flex-direction: column;
      width: 100%;
    }
    .c-closing-cta-buttons .c-cta {
      width: 100% !important;
    }
  }
  .c-closing-cta-microproof {
    display: flex;
    gap: clamp(1rem, 2.5vw, 2rem);
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.85rem;
    font-size: 0.82rem;
    color: rgba(250, 250, 250, 0.6);
    font-family: General Sans, sans-serif;
  }

  /* ============================================================= */
  /* GELOMBANG 3 ENHANCED: REFINED DESKTOP & MOBILE ENGINE */
  /* ============================================================= */
  
  /* Media overlay never blocks photos */
  .c-media__overlay {
    display: none !important;
  }
  .c-image img, 
  .c-image__wrapper img,
  .c-home-careers__image img,
  .c-home-about__image img,
  .c-home-about__left-image img,
  .c-home-sustainable__image img {
    opacity: 1 !important;
    visibility: visible !important;
  }

  /* ITEM 5: REWORKED EXECUTIVE B2B FOOTER */
  .c-footer {
    padding: clamp(50px, 6vw, 75px) 0 28px 0 !important;
    background: #09090a !important;
    border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
    position: relative !important;
    width: 100% !important;
    box-sizing: border-box !important;
    height: auto !important;
    min-height: auto !important;
  }
  .c-footer__logo {
    display: none !important;
  }
  .c-footer-grid {
    display: grid !important;
    grid-template-columns: 1.4fr 1fr 1fr 1.3fr !important;
    gap: clamp(2rem, 3.5vw, 4rem) !important;
    margin-bottom: clamp(2.5rem, 4vw, 3.5rem) !important;
  }
  @media (max-width: 991px) {
    .c-footer-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 2rem !important;
    }
  }
  @media (max-width: 575px) {
    .c-footer-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
  }
  .c-footer-brand-img {
    height: 32px !important;
    width: auto !important;
    display: block !important;
    margin-bottom: 1.25rem !important;
    background: transparent !important;
  }
  .c-footer-brand-desc {
    font-size: 0.88rem !important;
    line-height: 1.55 !important;
    color: rgba(250, 250, 250, 0.7) !important;
    margin-bottom: 0.65rem !important;
    max-width: 320px !important;
  }
  .c-footer-brand-org {
    font-size: 0.78rem !important;
    color: rgba(250, 250, 250, 0.45) !important;
    margin-bottom: 1.25rem !important;
  }
  .c-footer-socials-row {
    display: flex !important;
    gap: 0.6rem !important;
  }
  .c-footer-social-btn {
    width: 38px !important;
    height: 38px !important;
    border-radius: 8px !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    color: #FAFAFA !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 0.95rem !important;
    transition: all 0.25s ease !important;
    text-decoration: none !important;
  }
  .c-footer-social-btn:hover {
    background: #D0112B !important;
    border-color: #D0112B !important;
    color: #FFFFFF !important;
    transform: translateY(-2px) !important;
  }
  .c-footer-col-header {
    font-family: 'Sono Proportional', monospace !important;
    font-size: 0.75rem !important;
    font-weight: 600 !important;
    color: #D0112B !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
    margin-bottom: 1.25rem !important;
  }
  .c-footer-nav-list {
    list-style: none !important;
    padding: 0 !important;
    margin: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 0.65rem !important;
  }
  .c-footer-nav-link {
    font-family: General Sans, sans-serif !important;
    font-size: 0.88rem !important;
    color: rgba(250, 250, 250, 0.68) !important;
    text-decoration: none !important;
    transition: color 0.2s ease !important;
  }
  .c-footer-nav-link:hover {
    color: #FAFAFA !important;
  }
  .c-footer-cta-text {
    font-size: 0.88rem !important;
    color: rgba(250, 250, 250, 0.72) !important;
    line-height: 1.5 !important;
    margin-bottom: 1rem !important;
  }
  .c-footer-contact-items {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.4rem !important;
    margin-bottom: 1.25rem !important;
  }
  .c-footer-contact-item {
    font-size: 0.85rem !important;
    display: flex !important;
    gap: 0.45rem !important;
  }
  .c-footer-contact-label {
    color: rgba(250, 250, 250, 0.5) !important;
  }
  .c-footer-contact-val {
    color: #FAFAFA !important;
    text-decoration: none !important;
  }
  .c-footer-contact-val:hover {
    color: #D0112B !important;
  }
  .c-footer-btn-wrapper .c-cta {
    display: inline-flex !important;
    padding: 0.75rem 1.4rem !important;
    font-size: 0.85rem !important;
  }
  .c-footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    padding-top: 1.4rem !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    font-size: 0.78rem !important;
    color: rgba(250, 250, 250, 0.45) !important;
    line-height: 1.4 !important;
  }
  @media (max-width: 768px) {
    .c-footer-bottom {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 0.5rem !important;
    }
  }


  /* Section 3: Metode Workshop Authentic Zigzag Layout */
  @media (min-width: 992px) {
    .c-home-expertises__cards {
      display: flex !important;
      flex-direction: column !important;
      width: 100% !important;
    }
    .c-home-expertises__card-container {
      width: 100% !important;
      display: block !important;
    }
    .c-home-expertises__card-container:nth-child(2n+1) .c-expertise-card {
      margin-left: 0 !important;
      margin-right: auto !important;
    }
    .c-home-expertises__card-container:nth-child(2n) .c-expertise-card {
      margin-left: auto !important;
      margin-right: 0 !important;
    }
    .c-home-expertises__card-container:nth-child(2n) .c-home-expertises__card-number {
      display: flex !important;
      justify-content: flex-end !important;
      width: 100% !important;
    }
    .c-home-expertises__card-container:nth-child(2n+1) .c-home-expertises__card-number {
      display: flex !important;
      justify-content: flex-start !important;
      width: 100% !important;
    }
  }

  /* ITEM 1: DESKTOP TOMBOL 1-5 NAVIGATION & SOLID PRECISE COMPETENCY CARD */
  @media (min-width: 992px) {
    /* Remove the Montarville background cutout masks so there is NO lighter halo / putih-putih behind the card */
    .c-home-projects__card-wrapper {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      width: 100% !important;
      height: 100% !important;
    }
    .c-home-projects__card-bg.--left,
    .c-home-projects__card-bg.--right,
    .c-home-projects__card-bg.--top,
    .c-home-projects__card-bg.--bottom {
      display: none !important;
      background-color: transparent !important;
    }
    .c-home-projects__card-bg.--top-bottom {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      width: auto !important;
      height: 100% !important;
      background-color: transparent !important;
    }
    .c-home-projects__cards-images:after {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(18, 18, 18, 0.35);
      pointer-events: none;
      z-index: 2;
    }
    .c-project-card__mobile-thumb-wrapper,
    .c-project-card__inner-sides {
      display: none !important;
    }
    /* Solid, clean executive card matching exact content size with rounded corners & shadow */
    .c-project-card {
      position: relative !important;
      background-color: #FAFAFA !important;
      border-radius: 16px !important;
      padding: 2.2rem 2.2rem 2rem 2.2rem !important;
      width: 440px !important;
      max-width: 90vw !important;
      height: auto !important;
      min-height: auto !important;
      box-sizing: border-box !important;
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45) !important;
      outline: none !important;
      margin: 0 auto !important;
      z-index: 10 !important;
    }
    .c-project-card__inner {
      background: transparent !important;
      padding: 0 !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 1.25rem !important;
      height: auto !important;
    }
    .c-project-card__category {
      background: transparent !important;
      padding: 0 !important;
      margin-bottom: 0 !important;
    }
    .c-project-card__info {
      background: transparent !important;
      padding: 0 !important;
    }
    .c-home-projects__cards-nav-container {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      pointer-events: none !important;
      transform: none !important;
      z-index: 5 !important;
    }
    .c-home-projects__cards-nav {
      position: absolute !important;
      left: var(--grid-margin, 40px) !important;
      top: 50% !important;
      transform: translateY(-50%) !important;
      pointer-events: all !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 0.5rem !important;
    }
    .c-home-projects__cards-nav-link {
      cursor: pointer !important;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }
    .c-home-projects__cards-nav-link.--active {
      background-color: #FAFAFA !important;
      color: #121212 !important;
      font-weight: 700 !important;
      border-color: #FAFAFA !important;
    }
    .c-home-projects__card-image {
      transition: opacity 0.5s ease, transform 0.5s ease !important;
    }
    .c-home-projects__card-image.--active {
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
    }
    .c-hero-screen {
      display: block !important;
    }
  }

  /* ITEM 2 & 3: MOBILE LAYOUT ENGINE WITH PROPORTIONAL 13+ TAHUN CARD & CLEAN COMPETENCY CARDS */
  @media (max-width: 991px) {
    html {
      scroll-snap-type: y proximity !important;
      scroll-behavior: smooth !important;
      overflow-x: hidden !important;
      width: 100% !important;
    }
    body {
      overflow-x: hidden !important;
      width: 100% !important;
      max-width: 100% !important;
    }
    .c-overlay,
    .c-overlay__scroller-container,
    .c-overlay__scroller {
      max-width: 100vw !important;
      overflow-x: hidden !important;
    }

    /* 1 Section = 1 Screen (min-height: 100dvh) */
    .c-hero-screen,
    .c-home-about,
    .c-home-target,
    .c-home-expertises,
    .c-home-careers,
    .c-home-sustainable,
    .c-workshop-info-section,
    .c-faq-section,
    .c-closing-cta-section {
      min-height: 100dvh !important;
      min-height: 100svh !important;
      scroll-snap-align: start !important;
      scroll-snap-stop: normal !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      box-sizing: border-box !important;
      padding-top: clamp(1rem, 3.5vh, 2rem) !important;
      padding-bottom: clamp(1rem, 3.5vh, 2rem) !important;
      width: 100% !important;
      max-width: 100% !important;
      overflow: hidden !important;
    }

    .c-home-intro {
      min-height: auto !important;
      padding: 0 !important;
    }
    .c-home-intro__wrapper {
      padding: 0 !important;
      min-height: auto !important;
    }

    /* Section 0A: Hero Screen on Mobile */
    .c-hero-screen {
      padding: clamp(65px, 9vh, 85px) clamp(16px, 4vw, 24px) 1.5rem clamp(16px, 4vw, 24px) !important;
    }
    .c-hero-screen .c-hero-main-grid {
      display: flex !important;
      flex-direction: column !important;
      gap: 1rem !important;
    }
    .c-hero-screen .c-home-intro__title h1 {
      font-size: clamp(1.85rem, 5.8vw, 2.5rem) !important;
      line-height: 1.15 !important;
      margin-bottom: 0.75rem !important;
    }
    .c-hero-screen .c-home-intro__wysiwyg p {
      font-size: 0.9rem !important;
      line-height: 1.5 !important;
      margin-bottom: 1rem !important;
    }
    .c-hero-screen .c-hero-photo-wrapper {
      display: none !important;
    }

    /* ITEM 2: CARD 13+ TAHUN CLEVIO - NATURAL PROPORTIONS, NO LONJONG, NO BLANK SPACE */
    .c-trust-deliverables-strip {
      min-height: auto !important;
      height: auto !important;
      margin: 1.5rem 0 2rem 0 !important;
      width: 100% !important;
      max-width: 100% !important;
      padding: 1.4rem 1.25rem !important;
      border-radius: 14px !important;
      background: #141414 !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      box-sizing: border-box !important;
      scroll-snap-align: none !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 1.2rem !important;
    }
    .c-trust-credentials {
      display: flex !important;
      flex-direction: column !important;
      gap: 0.45rem !important;
    }
    .c-trust-brand-tag {
      font-family: 'Sono Proportional', monospace !important;
      font-size: 0.72rem !important;
      font-weight: 600 !important;
      color: #D0112B !important;
      letter-spacing: 0.08em !important;
      text-transform: uppercase !important;
    }
    .c-trust-stats-row {
      display: flex !important;
      align-items: center !important;
      gap: 1.5rem !important;
    }
    .c-trust-stat__num {
      font-size: 1.85rem !important;
      font-weight: 600 !important;
      color: #FAFAFA !important;
      line-height: 1 !important;
    }
    .c-trust-stat__label {
      font-family: 'Sono Proportional', monospace !important;
      font-size: 0.72rem !important;
      color: rgba(250, 250, 250, 0.65) !important;
      line-height: 1.3 !important;
    }
    .c-trust-main-divider {
      display: none !important;
    }
    .c-trust-deliverables {
      margin-top: 0 !important;
      padding-top: 1rem !important;
      border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 0.85rem !important;
    }
    .c-trust-deliverables__heading {
      font-size: 0.92rem !important;
      font-weight: 600 !important;
      color: #FAFAFA !important;
      margin-bottom: 0.2rem !important;
    }
    .c-trust-deliverables__grid {
      display: flex !important;
      flex-direction: column !important;
      gap: 0.85rem !important;
    }
    .c-deliverable-item {
      display: flex !important;
      align-items: flex-start !important;
      gap: 0.75rem !important;
    }
    .c-deliverable-item__icon {
      flex-shrink: 0 !important;
      margin-top: 2px !important;
    }
    .c-deliverable-item__title {
      font-size: 0.88rem !important;
      font-weight: 600 !important;
      color: #FAFAFA !important;
    }
    .c-deliverable-item__desc {
      font-size: 0.78rem !important;
      line-height: 1.4 !important;
      color: rgba(250, 250, 250, 0.7) !important;
    }

    /* Section 1: Konteks Perubahan (c-home-about) */
    .c-home-about__surtitle {
      margin-bottom: 0.4rem !important;
    }
    .c-home-about__intro {
      height: auto !important;
      margin-bottom: 0.5rem !important;
    }
    .c-home-about__title {
      font-size: clamp(1.4rem, 4.2vw, 1.85rem) !important;
      line-height: 1.18 !important;
      margin-bottom: 0.5rem !important;
    }
    .c-home-about__left-image {
      float: none !important;
      width: 100% !important;
      max-width: 100% !important;
      height: 120px !important;
      max-height: 120px !important;
      margin: 0 0 0.5rem 0 !important;
      border-radius: 10px !important;
      overflow: hidden !important;
      display: block !important;
    }
    .c-home-about__left-image img {
      width: 100% !important;
      height: 120px !important;
      object-fit: cover !important;
      border-radius: 10px !important;
      display: block !important;
    }
    .c-home-about__content {
      height: auto !important;
      margin: 0 !important;
    }
    .c-home-about__wysiwyg {
      column-count: 1 !important;
    }
    .c-home-about__wysiwyg p {
      font-size: 0.82rem !important;
      line-height: 1.45 !important;
      color: rgba(250, 250, 250, 0.75) !important;
      margin-bottom: 0.35rem !important;
      opacity: 1 !important;
      transform: none !important;
      filter: none !important;
    }
    .c-home-about .c-cta-ctn {
      margin-top: 0.4rem !important;
    }

    /* Section 2: 3 Arah Pengembangan (c-home-target) */
    .c-home-target__title-wrapper {
      height: auto !important;
      margin-bottom: 0.5rem !important;
    }
    .c-home-target__title {
      font-size: clamp(1.4rem, 4.2vw, 1.85rem) !important;
      line-height: 1.15 !important;
      padding-bottom: 0.2rem !important;
      margin-bottom: 0 !important;
      height: auto !important;
    }
    .c-home-target__title .u-word {
      transform: none !important;
    }
    .c-home-target__separator {
      display: none !important;
    }
    .c-home-target__slider {
      height: auto !important;
    }
    .c-home-target__cards {
      display: flex !important;
      flex-direction: column !important;
      gap: 0.45rem !important;
    }
    .c-home-target__card {
      width: 100% !important;
      padding: 0.7rem 0.9rem !important;
      margin-bottom: 0 !important;
      border-radius: 10px !important;
      overflow: hidden !important;
      height: auto !important;
    }
    .c-home-target__card-title {
      font-size: 1rem !important;
      margin-bottom: 0.2rem !important;
    }
    .c-home-target__card-desc {
      font-size: 0.78rem !important;
      line-height: 1.4 !important;
    }

    /* Section 3: Metode Workshop Cards on Mobile */
    .c-method-title {
      font-size: clamp(1.4rem, 4.2vw, 1.85rem) !important;
      line-height: 1.15 !important;
      margin-bottom: 0.5rem !important;
    }
    /* ITEM 3: SECTION LIMA KOMPETENSI DI MOBILE - PHOTO 100% INSIDE THE CARD */
    .c-home-projects {
      min-height: auto !important;
      height: auto !important;
      padding: 0 !important;
      position: relative !important;
    }
    .c-home-projects__wrapper {
      margin-bottom: 0 !important;
    }
    .c-home-projects__title {
      font-size: clamp(1.65rem, 4.8vw, 2.2rem) !important;
      line-height: 1.15 !important;
      display: flex !important;
      flex-direction: row !important;
      align-items: baseline !important;
      gap: 0.45rem !important;
      width: 100% !important;
      padding: 1.25rem clamp(16px, 4vw, 24px) 0.5rem clamp(16px, 4vw, 24px) !important;
    }
    .c-home-projects__title .--left,
    .c-home-projects__title .--right {
      position: static !important;
      display: inline-block !important;
      transform: none !important;
      text-align: left !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    .c-home-projects__cards {
      display: flex !important;
      flex-direction: column !important;
      gap: 1.25rem !important;
      height: auto !important;
      min-height: auto !important;
      width: 100% !important;
      box-sizing: border-box !important;
      padding: 0 clamp(16px, 4vw, 24px) 2rem clamp(16px, 4vw, 24px) !important;
    }
    .c-home-projects__cards-images {
      display: none !important;
    }
    .c-home-projects__cards-overlay-container {
      display: none !important;
    }
    .c-home-projects__card-container {
      display: block !important;
      height: auto !important;
      min-height: auto !important;
      margin: 0 !important;
      padding: 0 !important;
      box-sizing: border-box !important;
      position: relative !important;
      scroll-snap-align: none !important;
    }
    .c-home-projects__card-wrapper {
      display: block !important;
      height: auto !important;
      width: 100% !important;
    }
    .c-home-projects__card-bg.--left,
    .c-home-projects__card-bg.--right,
    .c-home-projects__card-bg.--top,
    .c-home-projects__card-bg.--bottom {
      display: none !important;
    }
    .c-home-projects__card-bg.--top-bottom {
      display: block !important;
      position: relative !important;
      width: 100% !important;
      height: auto !important;
      margin: 0 0 1.5rem 0 !important;
    }

    /* Clean, Elegant Mobile Competency Card with Image Securely INSIDE */
    .c-project-card {
      position: relative !important;
      inset: auto !important;
      transform: none !important;
      opacity: 1 !important;
      visibility: visible !important;
      width: 100% !important;
      height: auto !important;
      min-height: auto !important;
      background: #fafafa !important;
      border-radius: 14px !important;
      padding: 1.15rem !important;
      display: flex !important;
      flex-direction: column !important;
      box-sizing: border-box !important;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35) !important;
      outline: none !important;
    }
    .c-project-card__inner {
      position: relative !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 0.65rem !important;
      padding: 0 !important;
      height: auto !important;
    }
    .c-project-card__category {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      background: transparent !important;
      padding: 0 !important;
      margin-bottom: 0.15rem !important;
    }
    .c-project-card__category-name {
      font-family: 'Sono Proportional', monospace !important;
      font-size: 0.78rem !important;
      font-weight: 700 !important;
      color: #121212 !important;
      text-transform: uppercase !important;
      letter-spacing: 0.08em !important;
    }
    .c-project-card__category-circle {
      width: 8px !important;
      height: 8px !important;
      background-color: #D0112B !important;
      border-radius: 50% !important;
    }
    .c-project-card__inner-sides {
      position: relative !important;
      width: 100% !important;
      height: 190px !important;
      border-radius: 8px !important;
      overflow: hidden !important;
      display: block !important;
      margin: 0 !important;
      background: #181818 !important;
    }
    .c-project-card__inner-sides:before {
      display: none !important;
    }
    .c-project-card__inner-side {
      display: none !important;
    }
    .c-project-card__mobile-thumb-wrapper {
      display: block !important;
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      border-radius: 8px !important;
      overflow: hidden !important;
    }
    .c-project-card__mobile-thumb {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      display: block !important;
    }
    .c-home-projects .c-project-card__info {
      background: transparent !important;
      padding: 0.2rem 0 0 0 !important;
    }
    .c-project-card__title {
      font-family: General Sans, sans-serif !important;
      font-size: 1.25rem !important;
      line-height: 1.22 !important;
      font-weight: 600 !important;
      color: #121212 !important;
      margin: 0 0 0.35rem 0 !important;
    }
    .c-project-card__description p {
      font-size: 0.85rem !important;
      line-height: 1.48 !important;
      color: rgba(18, 18, 18, 0.72) !important;
      margin: 0 !important;
    }
    .c-project-card__redirect-container {
      margin-top: 0.75rem !important;
      display: flex !important;
      justify-content: flex-end !important;
    }
    .c-project-card .c-icon-btn {
      background-color: rgba(18, 18, 18, 0.08) !important;
      border: 1px solid rgba(18, 18, 18, 0.12) !important;
    }
    .c-home-projects__bottom-line-ctn {
      display: none !important;
    }
    .c-home-projects__redirect {
      margin-top: 1rem !important;
      padding: 1.25rem !important;
      border-radius: 14px !important;
      background: rgba(255, 255, 255, 0.03) !important;
      border: 1px solid rgba(255, 255, 255, 0.08) !important;
    }

    /* Section 5: Fasilitator Aranggi Soemardjan (c-home-careers) */
    .c-home-careers__wrapper {
      display: flex !important;
      flex-direction: column !important;
      gap: 1.25rem !important;
    }
    .c-home-careers__image {
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      border-radius: 14px !important;
      overflow: hidden !important;
    }
    .c-home-careers__image img,
    .c-facilitator-img {
      width: 100% !important;
      height: 220px !important;
      object-fit: cover !important;
      border-radius: 14px !important;
      display: block !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
    .c-home-careers__text {
      width: 100% !important;
      max-width: 100% !important;
    }
    .c-home-careers__text h2 {
      font-size: clamp(1.5rem, 4.5vw, 2.0rem) !important;
      line-height: 1.15 !important;
      margin-bottom: 0.4rem !important;
    }
    .c-home-careers__text p {
      font-size: 0.88rem !important;
      line-height: 1.5 !important;
      color: rgba(250, 250, 250, 0.75) !important;
    }

    /* Section 6: Prinsip & Komitmen (c-home-sustainable) */
    .c-home-sustainable__title {
      font-size: clamp(1.5rem, 4.5vw, 2.0rem) !important;
      line-height: 1.15 !important;
    }

    /* Section 7: Logistics (c-workshop-info-section) */
    .c-workshop-info-section {
      padding: clamp(65px, 8vh, 80px) clamp(16px, 4vw, 24px) 2rem clamp(16px, 4vw, 24px) !important;
    }
    .c-info-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 0.65rem !important;
    }
    .c-info-card {
      padding: 0.85rem !important;
      border-radius: 10px !important;
    }
    .c-info-card__icon {
      width: 32px !important;
      height: 32px !important;
      margin-bottom: 0.2rem !important;
    }
    .c-info-card__title {
      font-size: 0.95rem !important;
    }
    .c-info-card__desc {
      font-size: 0.78rem !important;
      line-height: 1.4 !important;
    }
    .c-info-title {
      font-size: clamp(1.5rem, 4.5vw, 2.0rem) !important;
      line-height: 1.15 !important;
      margin-bottom: 0.35rem !important;
    }
    .c-info-subtitle {
      font-size: 0.85rem !important;
      margin-bottom: 0.85rem !important;
    }

    /* Section 8: FAQ (c-faq-section) */
    .c-faq-section {
      padding: clamp(65px, 8vh, 80px) clamp(16px, 4vw, 24px) 2rem clamp(16px, 4vw, 24px) !important;
    }
    .c-faq-header {
      margin-bottom: 1rem !important;
    }
    .c-faq-title {
      font-size: clamp(1.5rem, 4.5vw, 2.0rem) !important;
      line-height: 1.15 !important;
    }
    .c-faq-item {
      padding: 0.75rem 0 !important;
    }
    .c-faq-item summary {
      font-size: 0.9rem !important;
    }
    .c-faq-item p {
      font-size: 0.82rem !important;
      line-height: 1.45 !important;
    }

    /* Section 9: Closing CTA (c-closing-cta-section) */
    .c-closing-cta-section {
      padding: clamp(65px, 8vh, 80px) clamp(16px, 4vw, 24px) 2rem clamp(16px, 4vw, 24px) !important;
    }
    .c-closing-cta-title {
      font-size: clamp(1.6rem, 5.0vw, 2.2rem) !important;
      line-height: 1.15 !important;
    }

    /* Minimum 44px tap targets */
    .c-cta,
    .c-faq-item summary,
    .c-header__link,
    .c-main-menu__item-link {
      min-height: 44px !important;
      display: inline-flex !important;
      align-items: center !important;
    }
  }
</style>
"""
html = html.replace('</head>', f'{custom_css}</head>')

# -----------------------------------------------------------------------------
# C. LOGO REPLACEMENTS
# -----------------------------------------------------------------------------
# Header logo
html = re.sub(
    r'<a href="[^"]*" class="c-header__logo"[^>]*>[\s\S]*?<\/a>',
    '<a href="#beranda" class="c-header__logo" aria-label="Clevio AI Pro"><img src="/montarville_assets/images/clevio-ai-pro-logo-white.png" alt="Clevio AI Pro" class="c-header__logo-img" /></a>',
    html, count=1, flags=re.I
)

# Footer logo
html = re.sub(
    r'<div class="c-footer__logo">[\s\S]*?<\/svg>\s*<\/div>',
    '<div class="c-footer__logo"><img src="/montarville_assets/images/clevio-ai-pro-logo-white.png" alt="Clevio AI Pro" class="c-footer__logo-img" /></div>',
    html, count=1, flags=re.I
)

# Transition overlay logo
html = re.sub(
    r'<div class="c-transition-overlay__inner-logo">[\s\S]*?<\/svg>\s*<\/div>',
    '<div class="c-transition-overlay__inner-logo"><img src="/montarville_assets/images/clevio-ai-pro-logo-white.png" alt="Clevio AI Pro" /></div>',
    html, count=1, flags=re.I
)

# In-text wordmarks
html = re.sub(
    r'<span class="o-logo-wordmark">montarville<span class="o-logo-wordmark__dot" aria-hidden="true">\.<\/span><\/span>',
    '<strong>Clevio AI Pro</strong>',
    html, flags=re.I
)

# -----------------------------------------------------------------------------
# D. SECTION ANCHORS
# -----------------------------------------------------------------------------
for cls, anchor in [
    ('c-home-intro', 'beranda'),
    ('c-home-about', 'tentang'),
    ('c-home-target', 'arah'),
    ('c-home-expertises', 'metode'),
    ('c-home-projects', 'kompetensi'),
    ('c-home-careers', 'fasilitator'),
    ('c-home-sustainable', 'galeri'),
]:
    html = re.sub(rf'<section class="{cls}"', f'<section class="{cls}" id="{anchor}"', html, count=1)

html = re.sub(r'<footer class="c-footer"\s*>', '<footer class="c-footer" id="kontak">', html, count=1)

# -----------------------------------------------------------------------------
# E. IMAGE SWAPPING (Replace Montarville construction photos with Clevio workshop photos)
# -----------------------------------------------------------------------------
# Drop responsive srcsets pointing to montarville.ca
html = re.sub(r'\s(?:data-)?srcset="[^"]*"', '', html)

IMAGE_MAP = {
    'orphisme_photographie_20210816-_28a021101-modifier-web-1000x667.jpg': 'team',
    '2024-12-15-folio-design-g-mining-brossard-pre-yanick-lesperance-photographe-serie-06_01-1000x1500.jpg': 'change',
    'conceptum_trisura-annie-fafard-bd-11-1000x667.jpg': 'training',
    'salle-lunch-1000x665.png': 'leader',
    'orphisme_photographie_20210816-_28a014101-modifier-web-1000x667.jpg': 'design',
    'webpc-passthru-1000x750.webp': 'team',
    'dsc7195__dsc7203.jpg': 'change',
    '14112025-img_0030-modifier_web.jpg': 'design',
    '2024-12-15-folio-design-g-mining-brossard-pre-yanick-lesperance-photographe-serie-06_01-2560x3840.jpg': 'leader',
    'lcm_avocats_29000_web-2560x1920.jpg': 'training',
    'orphisme20220427-img_581702web-1000x667.jpg': 'aranggi',
    'earth-rated-2-600x400.jpg': 'training',
    'earth_rated_0390hd-1440x960.jpg': 'team',
}
for old, key in IMAGE_MAP.items():
    html = html.replace(f'/montarville_assets/images/{old}', f'/montarville_assets/images/clevio/{CLEVIO_IMAGES[key]}')

html = html.replace('alt=""', 'alt="Ilustrasi suasana workshop Clevio AI Pro"')

# Replace 1x1 data-src placeholder gifs with actual image src so every photo renders immediately in all browsers and DevTools full-page screenshots
html = re.sub(
    r'<img\s+src="data:image/gif;base64,[^"]*"\s+data-src="([^"]*)"',
    r'<img src="\1" data-src="\1"',
    html
)

# -----------------------------------------------------------------------------
# F. HEADER & NAVIGATION (ALIGNED TO AUDIT MOCKUP)
# -----------------------------------------------------------------------------
html = html.replace('(Défilez)', '(Scroll)')
html = html.replace('Accéder au contenu principal', 'Lewati ke konten utama')

# Replace Desktop Navbar
desktop_nav_html = f"""<nav class="c-header__main-navigation"><ul class="c-main-menu">
<li class="c-main-menu__item"><a href="#tentang" class="c-main-menu__item-link">Tentang</a></li>
<li class="c-main-menu__item --has-children"><button tabindex="0" class="c-main-menu__item-link" data-toggle-sub-menu>Metode</button>
<div class="c-main-menu__sub-menu-container"><ul class="c-main-menu__sub-menu">
<li class="c-main-menu__item --parent-item"><a class="c-main-menu__item-link" href="#metode">Lihat Metode</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#metode">01 Pahami Konteks Bisnis</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#metode">02 Design Thinking + AI</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#metode">03 Validasi &amp; Rencana Aksi</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#metode">Format Flipped Learning</a></li>
</ul></div></li>
<li class="c-main-menu__item --has-children"><button tabindex="0" class="c-main-menu__item-link" data-toggle-sub-menu>5 Kompetensi</button>
<div class="c-main-menu__sub-menu-container"><ul class="c-main-menu__sub-menu">
<li class="c-main-menu__item --parent-item"><a class="c-main-menu__item-link" href="#kompetensi">Lihat 5 Kompetensi</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#berpikir-kritis">01 Berpikir Kritis &amp; Strategis</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#empati">02 Empati &amp; Kebutuhan Manusia</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#literasi-ai">03 Literasi AI</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#kepemimpinan">04 Kepemimpinan</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#adaptabilitas">05 Adaptabilitas</a></li>
</ul></div></li>
<li class="c-main-menu__item"><a href="#informasi" class="c-main-menu__item-link">Informasi</a></li>
<li class="c-main-menu__item"><a href="#faq" class="c-main-menu__item-link">FAQ</a></li>
<li class="c-main-menu__item"><a href="#fasilitator" class="c-main-menu__item-link">Fasilitator</a></li>
</ul></nav>"""
html = re.sub(
    r'<nav class="c-header__main-navigation">[\s\S]*?<\/nav>',
    desktop_nav_html,
    html, count=1, flags=re.I
)

# Header contact redirection in desktop nav
html = re.sub(
    r'<li class="c-header__contact-redirection-container">[\s\S]*?<\/li>',
    f'<li class="c-header__contact-redirection-container"><a href="{FORM}" {EXT} class="c-header__contact-redirection" aria-label="Buka formulir pendaftaran"><div class="c-header__contact-redirection-text">Daftar Workshop ↗</div></a></li>',
    html, count=1, flags=re.I
)

# Replace Mobile Drawer Menu
mobile_drawer_nav_html = f"""<nav class="c-screen-menu__navigation"><ul class="c-main-menu">
<li class="c-main-menu__item"><a href="#tentang" class="c-main-menu__item-link">Tentang</a></li>
<li class="c-main-menu__item --has-children"><button tabindex="0" class="c-main-menu__item-link" data-toggle-sub-menu>Metode</button>
<div class="c-main-menu__sub-menu-container"><ul class="c-main-menu__sub-menu">
<li class="c-main-menu__item --parent-item"><a class="c-main-menu__item-link" href="#metode">Lihat Metode</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#metode">01 Pahami Konteks Bisnis</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#metode">02 Design Thinking + AI</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#metode">03 Validasi &amp; Rencana Aksi</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#metode">Format Flipped Learning</a></li>
</ul></div></li>
<li class="c-main-menu__item --has-children"><button tabindex="0" class="c-main-menu__item-link" data-toggle-sub-menu>5 Kompetensi</button>
<div class="c-main-menu__sub-menu-container"><ul class="c-main-menu__sub-menu">
<li class="c-main-menu__item --parent-item"><a class="c-main-menu__item-link" href="#kompetensi">Lihat 5 Kompetensi</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#berpikir-kritis">01 Berpikir Kritis &amp; Strategis</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#empati">02 Empati &amp; Kebutuhan Manusia</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#literasi-ai">03 Literasi AI</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#kepemimpinan">04 Kepemimpinan</a></li>
<li class="c-main-menu__item"><a class="c-main-menu__item-link" href="#adaptabilitas">05 Adaptabilitas</a></li>
</ul></div></li>
<li class="c-main-menu__item"><a href="#informasi" class="c-main-menu__item-link">Informasi</a></li>
<li class="c-main-menu__item"><a href="#faq" class="c-main-menu__item-link">FAQ</a></li>
<li class="c-main-menu__item"><a href="#fasilitator" class="c-main-menu__item-link">Fasilitator</a></li>
</ul><div class="c-main-menu__item --contact"><a href="{FORM}" {EXT} class="c-main-menu__item-link" aria-label="Daftar Workshop">Daftar Workshop \u2197</a></div></nav>"""
html = re.sub(
    r'<nav class="c-screen-menu__navigation">[\s\S]*?<\/nav>',
    mobile_drawer_nav_html,
    html, count=1, flags=re.I
)

# Social icons in mobile menu
html = html.replace('fa-facebook-f', 'fa-whatsapp')
html = re.sub(
    r'href="https://www\.facebook\.com[^"]*"',
    f'href="{WA_CONSULT}" {EXT} aria-label="WhatsApp Clevio"',
    html
)
html = re.sub(
    r'href="https://www\.instagram\.com/montarville/?"',
    f'href="https://www.instagram.com/cleviopro/" {EXT} aria-label="Instagram Clevio"',
    html
)
html = re.sub(
    r'href="https://www\.linkedin\.com/company/montarville[^"]*"',
    f'href="https://www.linkedin.com/company/clevio/" {EXT} aria-label="LinkedIn Clevio"',
    html
)

# -----------------------------------------------------------------------------
# G. HERO INTRO CONTENT & TRUST STRIP (WAVE 1 P0: EXACT MOCKUP FIDELITY)
# -----------------------------------------------------------------------------
hero_complete_replacement = f"""<div class="c-home-intro__wrapper | o-wrapper --lg">
  <div class="c-home-intro__logo" style="display:none !important;" aria-hidden="true"></div>
  <div class="c-hero-screen"><div class="c-hero-main-grid">
    <div class="c-hero-col-left">
      <div class="c-hero-eyebrow"><span class="c-hero-eyebrow__dash" aria-hidden="true">—</span> AI Thinking &amp; Innovation Workshop · 1 Hari</div>
      <div class="c-home-intro__title | o-wysiwyg">
        <h1>Ubah potensi AI<br>menjadi <strong>keputusan</strong><br>dan <strong>rencana aksi</strong><br>nyata bagi bisnis.</h1>
      </div>
      <div class="c-home-intro__wysiwyg | o-wysiwyg">
        <p>Bawa 1 tantangan nyata dari organisasi Anda. Gunakan framework Design Thinking &amp; AI Thinking untuk memahami kebutuhan manusia, menguji peluang AI, dan menyusun langkah implementasi yang terukur.</p>
      </div>
      <div class="c-home-intro__ctas">
        <a href="{FORM}" {EXT} class="c-cta">Daftar Workshop</a>
        <a href="{WA_CONSULT}" {EXT} class="c-cta --secondary">Konsultasikan untuk Tim</a>
      </div>
      <div class="c-hero-badges">
        <span class="c-hero-badge">Untuk C-Level</span>
        <span class="c-hero-badge">Untuk Manajer</span>
        <span class="c-hero-badge">Untuk Pengambil Keputusan</span>
      </div>
    </div>
    <div class="c-hero-col-right">
      <div class="c-hero-photo-wrapper">
        <img src="/montarville_assets/images/clevio/professional-workshop-team.jpg" alt="Suasana kolaboratif AI Thinking &amp; Innovation Workshop Clevio AI Pro" class="c-hero-photo-img" />
      </div>
    </div>
  </div>

  </div>

  <!-- Trust & Deliverables Strip -->
  <div class="c-trust-deliverables-strip">
    <div class="c-trust-credentials">
      <div class="c-trust-brand-tag">CLEVIO AI PRO</div>
      <div class="c-trust-stats-row">
        <div class="c-trust-stat">
          <div class="c-trust-stat__num">13+ tahun</div>
          <div class="c-trust-stat__label">membangun Clevio</div>
        </div>
        <div class="c-trust-stat__divider" aria-hidden="true"></div>
        <div class="c-trust-stat">
          <div class="c-trust-stat__num">5</div>
          <div class="c-trust-stat__label">kompetensi<br>teruji</div>
        </div>
      </div>
    </div>
    <div class="c-trust-main-divider" aria-hidden="true"></div>
    <div class="c-trust-deliverables">
      <div class="c-trust-deliverables__heading">Yang Anda bawa pulang</div>
      <div class="c-trust-deliverables__grid">
        <div class="c-deliverable-item">
          <div class="c-deliverable-item__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D0112B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
          </div>
          <div class="c-deliverable-item__text">
            <div class="c-deliverable-item__title">Problem framing</div>
            <div class="c-deliverable-item__desc">Memetakan tantangan bisnis secara jelas.</div>
          </div>
        </div>
        <div class="c-deliverable-item">
          <div class="c-deliverable-item__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D0112B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          <div class="c-deliverable-item__text">
            <div class="c-deliverable-item__title">Peta peluang AI</div>
            <div class="c-deliverable-item__desc">Mengidentifikasi dan memprioritaskan peluang AI yang relevan.</div>
          </div>
        </div>
        <div class="c-deliverable-item">
          <div class="c-deliverable-item__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D0112B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
          </div>
          <div class="c-deliverable-item__text">
            <div class="c-deliverable-item__title">Action plan awal</div>
            <div class="c-deliverable-item__desc">Menyusun langkah implementasi yang terukur dan realistis.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>"""

html = re.sub(
    r'<div class="c-home-intro__wrapper \| o-wrapper --lg">[\s\S]*?(?=<div class="c-home-intro__circles-container">)',
    f'{hero_complete_replacement}\n',
    html, count=1
)

# -----------------------------------------------------------------------------
# H. SECTION 1: KONTEKS PERUBAHAN (c-home-about)
# -----------------------------------------------------------------------------
html = html.replace('>Ce qui nous distingue<', '>KONTEKS PERUBAHAN<')

html = re.sub(
    r'<h2 class="c-home-about__title">Partenaire de vos\s*réussites</h2>',
    '<h2 class="c-home-about__title">Dunia kerja berubah. Kepemimpinan berkembang.</h2>',
    html, count=1, flags=re.I
)

about_wysiwyg_content = """<p><strong>Perspektif yang tepat menentukan arah perubahan.</strong></p>
<p>Otomasi mengubah peran dan proses kerja secara mendasar. Keahlian perlu berkembang seiring kemajuan teknologi, dan nilai organisasi tetap tercipta melalui pertimbangan serta keputusan manusia.</p>
<p>Keunggulan di era AI tidak datang dari tools terbaru saja. Keunggulan datang dari cara berpikir yang terstruktur untuk memecahkan tantangan nyata organisasi.</p>
<p><strong>Clevio AI Pro</strong> membantu pemimpin dan profesional memahami potensi serta keterbatasan AI, lalu menerjemahkannya menjadi langkah kerja yang terukur.</p>"""

html = re.sub(
    r'(<div class="c-home-about__wysiwyg \| o-wysiwyg --2c" data-anim-wysiwyg>)[\s\S]*?(<\/div><div class="c-cta-ctn">)',
    f'\\1{about_wysiwyg_content}\\2',
    html, count=1
)

html = re.sub(
    r'<a href="https://montarville\.ca/a-propos/" class="c-cta">.*?</a>',
    f'<a href="{FORM}" {EXT} class="c-cta">Daftar Workshop Sekarang ↗</a>',
    html, count=1
)

# -----------------------------------------------------------------------------
# I. SECTION 2: TIGA ARAH PENGEMBANGAN (c-home-target)
# -----------------------------------------------------------------------------
html = html.replace('Des services adaptés aux professionnels', 'ARAH PENGEMBANGAN')
html = html.replace('>Vous êtes...<', '>Tiga arah pengembangan<')

target_cards = [
    ('Architecte, designer, ou ingénieur?', '01 Hyper-Productive', 'Fokuskan manusia pada pekerjaan bernilai tinggi.',
     'Memanfaatkan AI untuk meningkatkan fokus dan kualitas kerja strategis yang menuntut pertimbangan manusia.'),
    ('Locataire d’un espace à aménager?', '02 Hyper-Iterative', 'Uji gagasan lebih cepat sebelum investasi membesar.',
     'Menguji asumsi dan menyempurnakan gagasan solutif melalui siklus eksplorasi dan validasi cepat bersama AI.'),
    ('Propriétaire, gestionnaire d’immeuble ou courtier commercial?', '03 Hyper-Impactful', 'Prioritaskan AI pada masalah yang benar-benar bernilai.',
     'Mengarahkan penerapan teknologi pada hasil yang paling relevan dan terukur bagi keberlanjutan organisasi.'),
]
for fr_title, num_title, id_title, id_desc in target_cards:
    html = re.sub(
        rf'<div class="c-home-target__card-title">{re.escape(fr_title)}<\/div>',
        f'<div class="c-home-target__card-title">{num_title}<br><small style="font-size:0.55em;font-weight:400;opacity:0.85">{id_title}</small></div>',
        html, count=1
    )
    html = re.sub(
        rf'<h3 class="c-home-target__card-info-title">{re.escape(fr_title)}</h3>'
        r'(<div class="c-home-target__card-info-description \| o-wysiwyg">)<p>.*?</p>',
        f'<h3 class="c-home-target__card-info-title">{id_title}</h3>\\1<p>{id_desc}</p>',
        html, count=1
    )

html = re.sub(
    r'<a href="https://montarville\.ca/nous-joindre/#formulaire-de-contact" class="c-cta">Travaillez avec nous</a>',
    f'<a href="{FORM}" {EXT} class="c-cta">Daftar workshop ↗</a>',
    html
)

# -----------------------------------------------------------------------------
# J. SECTION 3: METODE WORKSHOP (HEADER GRID + 3 TAHAP PROSES + DELIVERY FORMAT)
# -----------------------------------------------------------------------------
method_intro_html = """<div class="c-home-expertises__intro" data-anim-wysiwyg>
  <div class="c-method-header-grid">
    <div class="c-method-header-left">
      <div class="c-home-expertises__surtitle | u-surtitle" style="color:#D0112B !important; font-weight:600; letter-spacing:0.08em; text-transform:uppercase;">METODE WORKSHOP</div>
      <h2 class="c-method-title">Pendekatan terstruktur, berorientasi aksi.</h2>
    </div>
    <div class="c-method-header-right">
      <p class="c-method-desc">Menggabungkan kekuatan Design Thinking dan AI Thinking dalam format workshop intensif, praktis, dan relevan dengan konteks organisasi Anda.</p>
    </div>
  </div>
</div>"""

html = re.sub(
    r'<div class="c-home-expertises__intro"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*(?=<div class="c-home-expertises__cards)',
    f'{method_intro_html}\n',
    html, count=1
)

expertises = [
    ('gestion-de-construction', 'Gestion de construction', '01 Pahami konteks bisnis',
     'Mengidentifikasi kebutuhan, tantangan, dan peluang nyata organisasi Anda. Peserta membawa satu tantangan nyata dari tempat kerja sebagai bahan utama workshop.<br><strong style="color:#D0112B">Output: Problem Statement yang jelas</strong>'),
    ('projets-forfaitaires', 'Projets forfaitaires', '02 Design Thinking + AI',
     'Merancang alternatif solusi yang berpusat pada manusia dengan dukungan kapabilitas AI. Gagasan diuji sejak awal agar arah solusi tetap relevan dengan kebutuhan pengguna.<br><strong style="color:#D0112B">Output: AI Opportunity Map terprioritas</strong>'),
    ('expertise-en-avant-projet', 'Expertise en avant-projet', '03 Validasi & rencana aksi',
     'Menguji asumsi, menyempurnakan pendekatan, dan menyusun roadmap implementasi. Setiap peserta pulang dengan langkah kerja yang siap dijalankan.<br><strong style="color:#D0112B">Output: Action Plan Awal yang terukur</strong>'),
    ('projets-cles-en-main', 'Projets clés en main', 'Format Flipped Learning · 1 Hari',
     '1 hari intensif praktik langsung berbasis kasus nyata organisasi. Materi dipelajari lebih awal, sehingga waktu workshop difokuskan sepenuhnya untuk diskusi strategis, eksplorasi solusi, dan penyusunan action plan.<br><strong style="color:#D0112B">Fokus: Diskusi interaktif &amp; kerja nyata</strong>'),
]
for idx, (slug, fr_title, id_title, id_desc) in enumerate(expertises):
    btn_color = "--red" if idx % 2 == 1 else "--transparent"
    pattern = (
        rf'<div class="c-expertise-card__inner"><a href="https://montarville\.ca/expertises/{slug}/" class="c-expertise-card__link"[^>]*></a>\s*'
        rf'<h3 class="c-expertise-card__title">{re.escape(fr_title)}</h3>\s*'
        r'<div class="c-expertise-card__info"><div class="c-expertise-card__description \| o-wysiwyg"><p>[\s\S]*?</p></div>\s*'
        r'<div class="c-icon-btn [^"]*" aria-hidden="true"></div></div></div>'
    )
    replacement = (
        f'<div class="c-expertise-card__inner"><a href="{FORM}" {EXT} class="c-expertise-card__link" aria-label="Daftar workshop"></a>'
        f'<h3 class="c-expertise-card__title">{id_title}</h3>'
        f'<div class="c-expertise-card__info"><div class="c-expertise-card__description | o-wysiwyg">'
        f'<p>{id_desc}</p></div><div class="c-icon-btn --arrow-bottom-right {btn_color}" aria-hidden="true"></div></div></div>'
    )
    html = re.sub(pattern, replacement, html, count=1)


# -----------------------------------------------------------------------------
# K. SECTION 4: LIMA KOMPETENSI AI PRO (WAVE 1 P0: TRULY 5 SEPARATE COMPETENCIES)
# -----------------------------------------------------------------------------
html = re.sub(
    r'<span class="c-home-projects__title --left">Nos récentes</span>\s*<span class="c-home-projects__title --right">réalisations</span>',
    '<span class="c-home-projects__title --left">Lima</span><span class="c-home-projects__title --right">kompetensi</span>',
    html, count=1, flags=re.I
)

# 1. Update Navigation Links in Section 4 (Add 05)
nav_links_old = re.search(r'<div class="c-home-projects__cards-nav">[\s\S]*?<\/div>', html)
nav_links_new = """<div class="c-home-projects__cards-nav">
  <a href="#berpikir-kritis" class="c-home-projects__cards-nav-link --active" data-project-index="01" aria-label="Ke kompetensi 01">01</a>
  <a href="#empati" class="c-home-projects__cards-nav-link" data-project-index="02" aria-label="Ke kompetensi 02">02</a>
  <a href="#literasi-ai" class="c-home-projects__cards-nav-link" data-project-index="03" aria-label="Ke kompetensi 03">03</a>
  <a href="#kepemimpinan" class="c-home-projects__cards-nav-link" data-project-index="04" aria-label="Ke kompetensi 04">04</a>
  <a href="#adaptabilitas" class="c-home-projects__cards-nav-link" data-project-index="05" aria-label="Ke kompetensi 05">05</a>
</div>"""
if nav_links_old:
    html = html.replace(nav_links_old.group(0), nav_links_new, 1)

# 2. Update Background Images in Section 4 (Add 05)
images_block_old = re.search(r'<div class="c-home-projects__cards-images">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="c-home-projects__card-container">', html)
images_block_new = """<div class="c-home-projects__cards-images">
  <div class="c-image c-home-projects__card-image --active" data-project-index="01"><div class="c-image__wrapper"><img src="/montarville_assets/images/clevio/workplace-change-editorial.webp" alt="Kompetensi Berpikir Kritis &amp; Strategis" class=""></div></div>
  <div class="c-image c-home-projects__card-image" data-project-index="02"><div class="c-image__wrapper"><img src="/montarville_assets/images/clevio/design-process-editorial.webp" alt="Kompetensi Empati &amp; Kebutuhan Manusia" class=""></div></div>
  <div class="c-image c-home-projects__card-image" data-project-index="03"><div class="c-image__wrapper"><img src="/montarville_assets/images/clevio/leadership-editorial.webp" alt="Kompetensi Literasi AI" class=""></div></div>
  <div class="c-image c-home-projects__card-image" data-project-index="04"><div class="c-image__wrapper"><img src="/montarville_assets/images/clevio/professional-training.jpg" alt="Kompetensi Kepemimpinan" class=""></div></div>
  <div class="c-image c-home-projects__card-image" data-project-index="05"><div class="c-image__wrapper"><img src="/montarville_assets/images/clevio/professional-workshop-team.jpg" alt="Kompetensi Adaptabilitas" class=""></div></div>
</div><div class="c-home-projects__card-container">"""
if images_block_old:
    html = html.replace(images_block_old.group(0), images_block_new, 1)

# 3. Build the 5 distinct card containers
def make_card_html(idx, cid, cat, title, desc, img_path, next_target, next_label):
    return f'''<div class="c-home-projects__card-container"><div class="c-home-projects__card-wrapper"><div class="c-home-projects__card-bg --left"></div><div class="c-home-projects__card-bg --top-bottom"><div class="c-home-projects__card-bg --top"></div><article class="c-project-card" data-project-index="{idx}" id="{cid}"><div class="c-project-card__inner"><a href="{next_target}" class="c-project-card__link" aria-label="{next_label}"></a><div class="c-project-card__category"><span class="c-project-card__category-name">{cat}</span><div class="c-project-card__category-circle" aria-hidden="true"></div></div><div class="c-project-card__inner-sides"><div class="c-project-card__inner-side"></div><div class="c-project-card__mobile-thumb-wrapper"><img src="{img_path}" alt="{title}" class="c-project-card__mobile-thumb" loading="lazy"></div><div class="c-project-card__inner-side"></div></div><div class="c-project-card__info"><h3 class="c-project-card__title">{title}</h3><div class="c-project-card__description | o-wysiwyg"><p>{desc}</p></div><div class="c-project-card__redirect-container"><a href="{next_target}" class="c-icon-btn --arrow-bottom-right --transparent" aria-label="{next_label}"></a></div></div></div></article><div class="c-home-projects__card-bg --bottom"></div></div><div class="c-home-projects__card-bg --right"></div></div></div>'''

competencies_data = [
    ("01", "berpikir-kritis", "Kompetensi 01", "Berpikir Kritis &amp; Strategis", "Mengevaluasi masalah, mempertanyakan asumsi, dan menentukan prioritas penerapan AI yang berdampak bagi organisasi.", "/montarville_assets/images/clevio/workplace-change-editorial.webp", "#empati", "Ke kompetensi 02: Empati & Kebutuhan Manusia"),
    ("02", "empati", "Kompetensi 02", "Empati &amp; Kebutuhan Manusia", "Memahami kebutuhan pengguna dan tim sebelum merancang dan mengintegrasikan solusi teknologi terapan.", "/montarville_assets/images/clevio/design-process-editorial.webp", "#literasi-ai", "Ke kompetensi 03: Literasi AI"),
    ("03", "literasi-ai", "Kompetensi 03", "Literasi AI", "Memahami kemampuan, keterbatasan, dan risiko AI untuk mengambil keputusan adopsi yang bertanggung jawab.", "/montarville_assets/images/clevio/leadership-editorial.webp", "#kepemimpinan", "Ke kompetensi 04: Kepemimpinan"),
    ("04", "kepemimpinan", "Kompetensi 04", "Kepemimpinan", "Mengarahkan kolaborasi lintas fungsi dan memandu perubahan pola kerja dalam implementasi AI.", "/montarville_assets/images/clevio/professional-training.jpg", "#adaptabilitas", "Ke kompetensi 05: Adaptabilitas"),
    ("05", "adaptabilitas", "Kompetensi 05", "Adaptabilitas", "Menguji pendekatan baru secara iteratif, belajar dari umpan balik, dan menyempurnakan strategi bisnis.", "/montarville_assets/images/clevio/professional-workshop-team.jpg", "#fasilitator", "Ke profil Fasilitator"),
]
all_cards_html = "\n".join(make_card_html(*c) for c in competencies_data) + "\n</div>" 

html = re.sub(
    r'<div class="c-home-projects__card-container">[\s\S]*?(?=<div class="c-home-projects__bottom-line-ctn">)',
    f'{all_cards_html}\n',
    html, count=1
)

# Mid-section redirect
html = html.replace('>Vous en voulez plus?<', '>Pimpin perubahan. Bangun nilai bersama AI.<')
html = re.sub(
    r'<a href="https://montarville\.ca/realisations/" class="c-cta">Travaillez avec nous</a>',
    f'<a href="{FORM}" {EXT} class="c-cta">Daftar workshop ↗</a>',
    html
)

# -----------------------------------------------------------------------------
# L. SECTION 5: FASILITATOR (ARANGGI SOEMARDJAN KREDENSIAL KONKRET)
# -----------------------------------------------------------------------------
html = html.replace('>Carrières<', '>FASILITATOR<')
# Clean facilitator image: avoid stuck media-reveal red polygon overlay
html = re.sub(
    r'<div class="c-image \| c-home-careers__image"[^>]*>[\s\S]*?</div>\s*</div>',
    '<div class="c-image c-home-careers__image"><div class="c-image__wrapper"><img src="/montarville_assets/images/aranggi-real.jpg" alt="Aranggi Soemardjan - Founder Clevio" class="c-facilitator-img" onerror="this.onerror=null;this.src=\'/montarville_assets/images/clevio/aranggi-soemardjan.jpg\';"></div></div>',
    html, count=1
)
html = re.sub(
    r'Des relations humaines,\s*simples et franches',
    'Aranggi Soemardjan',
    html, flags=re.I
)

facilitator_content = f"""<div class="c-section-text__wysiwyg | o-wysiwyg">
<h2>Aranggi Soemardjan</h2>
<p><strong style="color:#D0112B">Founder Clevio · Inovator dan Praktisi Teknologi</strong></p>
<p>Membangun Clevio sejak 2013 dengan fokus pada human-centered technology, inovasi pendidikan, dan penerapan AI praktis. Berpengalaman memimpin transformasi digital dan membimbing para pemimpin organisasi menerjemahkan peluang teknologi mutakhir menjadi kapabilitas nyata yang berdampak.</p>
<p>Memadukan metodologi Design Thinking dan AI Thinking untuk menghasilkan pendekatan strategis yang teruji, etis, dan berorientasi pada hasil bisnis terukur.</p>
<p class="c-cta-ctn"><a href="{WA_CONSULT}" {EXT} class="c-cta">Konsultasikan untuk Tim ↗</a></p>
</div>"""

html = re.sub(
    r'<div class="c-section-text__wysiwyg \| o-wysiwyg"><h2>Aranggi Soemardjan</h2>[\s\S]*?</div>',
    facilitator_content,
    html, count=1
)

# -----------------------------------------------------------------------------
# M. SECTION 6: PRINSIP & KOMITMEN (c-home-sustainable)
# -----------------------------------------------------------------------------
html = html.replace(
    '<h2 class="c-home-sustainable__title" data-generic-opacity>Développement durable</h2>',
    '<h2 class="c-home-sustainable__title" data-generic-opacity>Prinsip & Komitmen</h2>'
)
html = re.sub(
    r'<h3>Chez <strong>Clevio AI Pro</strong>[\s\S]*?</h3>',
    '<h3>Bagi Clevio, adopsi kecerdasan artifisial bukan sekadar perlombaan kecepatan teknis, melainkan tentang menempatkan manusia, pertimbangan etis, dan dampak nyata di pusat setiap inovasi.</h3>',
    html, count=1
)
# P0 Bug Fix: Misleading "Pelajari Lebih Lanjut" -> Daftar Workshop
html = re.sub(
    r'<a href="https://montarville\.ca/developpement-durable/" class="c-cta">Découvrez nos engagments</a>',
    f'<a href="{FORM}" {EXT} class="c-cta">Daftar Workshop ↗</a>',
    html, count=1
)

# -----------------------------------------------------------------------------
# GELOMBANG 2 (P1): CRO, DETAIL LOGISTIK, EXECUTIVE FAQ & CLOSING CTA
# -----------------------------------------------------------------------------
wave2_sections_html = f"""
<!-- SECTION: WORKSHOP INFORMATION & LOGISTICS PANEL -->
<section class="c-workshop-info-section" id="informasi">
  <div class="o-wrapper --lg">
    <div class="c-info-header">
      <div class="c-info-eyebrow">DETAIL PENYELENGGARAAN</div>
      <h2 class="c-info-title">Semua informasi penting sebelum Anda mendaftar.</h2>
      <p class="c-info-subtitle">Dirancang transparan untuk memudahkan evaluasi dan persetujuan pengadaan tim organisasi Anda.</p>
    </div>

    <div class="c-info-grid">
      <div class="c-info-card">
        <div class="c-info-card__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D0112B" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="c-info-card__title">Durasi &amp; Format Belajar</div>
        <p class="c-info-card__desc"><strong>1 Hari Intensif (09:00 – 17:00 WIB)</strong> berbasis <em>Flipped Learning</em>. Materi pengantar diberikan sebelum workshop, sehingga seluruh sesi tatap muka difokuskan untuk studi kasus nyata dan perancangan strategi.</p>
      </div>

      <div class="c-info-card">
        <div class="c-info-card__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D0112B" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="c-info-card__title">Opsi Penyelenggaraan</div>
        <p class="c-info-card__desc"><strong>In-House Corporate:</strong> Dikhususkan privat untuk tim perusahaan Anda dengan kurikulum yang dikustomisasi sesuai use-case industri.<br><strong>Public Cohort:</strong> Sesi terbuka lintas organisasi, maksimal 15–20 peserta per kelas.</p>
      </div>

      <div class="c-info-card">
        <div class="c-info-card__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D0112B" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="M12 6V2"/><path d="M12 22v-4"/></svg>
        </div>
        <div class="c-info-card__title">Prasyarat Peserta</div>
        <p class="c-info-card__desc"><strong>Tidak memerlukan latar belakang teknis atau coding.</strong> Cukup membawa 1 tantangan kerja nyata dari organisasi Anda dan laptop kerja. Workshop berfokus pada logika bisnis, problem framing, dan pengambilan keputusan.</p>
      </div>

      <div class="c-info-card">
        <div class="c-info-card__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D0112B" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div class="c-info-card__title">Administrasi &amp; Kerahasiaan Data</div>
        <p class="c-info-card__desc">Tersedia <strong>Invoice Resmi Perusahaan</strong>, perjanjian kerahasiaan data (<em>Non-Disclosure Agreement / NDA</em>) untuk sesi in-house, faktur pajak resmi, serta sertifikat kelulusan eksekutif.</p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION: EXECUTIVE FAQ ACCORDION -->
<section class="c-faq-section" id="faq">
  <div class="o-wrapper --lg">
    <div class="c-faq-header">
      <div class="c-faq-eyebrow">FAQ EKSEKUTIF</div>
      <h2 class="c-faq-title">Pertanyaan yang sering diajukan pengambil keputusan.</h2>
    </div>

    <div class="c-faq-list">
      <details class="c-faq-item" open>
        <summary>
          <span>Apakah peserta harus memiliki latar belakang teknis atau kemampuan coding?</span>
          <div class="c-faq-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
        </summary>
        <div class="c-faq-answer">
          <p><strong>Sama sekali tidak.</strong> Workshop Clevio AI Pro dirancang khusus bagi pemimpin bisnis, direktur, manajer, dan profesional pengambil keputusan. Fokus utama program ini adalah <em>problem framing</em>, evaluasi nilai strategis, mitigasi risiko etis, dan penyusunan rencana aksi bisnis terukur—bukan menulis kode program atau pemodelan teknis.</p>
        </div>
      </details>

      <details class="c-faq-item">
        <summary>
          <span>Bagaimana jaminan kerahasiaan data dan studi kasus internal organisasi kami?</span>
          <div class="c-faq-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
        </summary>
        <div class="c-faq-answer">
          <p>Kami memprioritaskan keamanan informasi organisasi Anda. Untuk sesi in-house corporate, kami dapat menandatangani <strong>Non-Disclosure Agreement (NDA)</strong> resmi sebelum pelaksanaan agar tim Anda dapat mendiskusikan tantangan bisnis dan data operasional dengan aman tanpa kekhawatiran kebocoran informasi.</p>
        </div>
      </details>

      <details class="c-faq-item">
        <summary>
          <span>Apakah workshop ini bisa diselenggarakan secara in-house khusus tim internal?</span>
          <div class="c-faq-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
        </summary>
        <div class="c-faq-answer">
          <p><strong>Ya, sangat bisa.</strong> Banyak organisasi memilih format in-house agar seluruh pimpinan divisi (produk, operasi, SDM, pemasaran, keuangan) memiliki cara pandang yang selaras dalam mengadopsi AI. Format in-house memungkinkan kurikulum dan studi kasus disesuaikan langsung dengan prioritas industri Anda.</p>
        </div>
      </details>

      <details class="c-faq-item">
        <summary>
          <span>Apa perbedaan workshop ini dengan pelatihan tools AI atau prompt engineering biasa?</span>
          <div class="c-faq-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
        </summary>
        <div class="c-faq-answer">
          <p>Pelatihan tools biasa hanya mengajarkan cara menggunakan aplikasi atau trik menulis prompt instan. Clevio AI Pro mengajarkan <strong>arsitektur berpikir strategis (AI Thinking &amp; Design Thinking)</strong>: bagaimana membedah masalah bisnis nyata, memastikan kebutuhan manusia tetap menjadi prioritas, menilai kelayakan investasi AI, dan menyusun roadmap implementasi yang defensibel di hadapan manajemen.</p>
        </div>
      </details>

      <details class="c-faq-item">
        <summary>
          <span>Berapa kapasitas peserta per sesi dan apa format pembelajarannya?</span>
          <div class="c-faq-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
        </summary>
        <div class="c-faq-answer">
          <p>Untuk menjaga kedalaman diskusi dan pendampingan personal oleh fasilitator, setiap cohort dibatasi maksimal <strong>15–20 peserta</strong>. Formatnya <em>1 hari intensif praktis</em> dengan alokasi 80% waktu untuk diskusi, framing tantangan kerja nyata, simulasi solusi, dan pembentukan action plan awal.</p>
        </div>
      </details>

      <details class="c-faq-item">
        <summary>
          <span>Bagaimana proses pendaftaran, penerbitan invoice, dan opsi pembayaran corporate?</span>
          <div class="c-faq-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAFAFA" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </div>
        </summary>
        <div class="c-faq-answer">
          <p>Anda dapat mendaftarkan diri secara individual melalui Google Form resmi atau menghubungi tim kami melalui WhatsApp untuk registrasi corporate. Kami menyediakan proposal program, surat penawaran, invoice resmi perusahaan atas nama <strong>PT Clevio Inovasi Indonesia</strong>, serta kuitansi dan sertifikat pasca-pelatihan.</p>
        </div>
      </details>
    </div>
  </div>
</section>

<!-- SECTION: FINAL CLOSING CONVERSION CTA -->
<section class="c-closing-cta-section">
  <div class="o-wrapper --lg">
    <div class="c-closing-cta-card">
      <div class="c-closing-cta-eyebrow">MULAI SEKARANG</div>
      <h2 class="c-closing-cta-title">Siap mengubah potensi AI menjadi keputusan dan rencana aksi nyata?</h2>
      <p class="c-closing-cta-desc">Bawa 1 tantangan nyata organisasi Anda ke workshop. Bersama Clevio AI Pro, identifikasi peluang relevan dan susun langkah kerja terukur yang siap dieksekusi.</p>
      <div class="c-closing-cta-buttons">
        <a href="{FORM}" {EXT} class="c-cta c-closing-btn-primary">Daftar Workshop Sekarang ↗</a>
        <a href="{WA_CONSULT}" {EXT} class="c-cta --secondary c-closing-btn-secondary">Konsultasikan untuk Tim ↗</a>
      </div>
      <div class="c-closing-cta-microproof">
        <span>✓ Kapasitas terbatas 15–20 peserta</span>
        <span>✓ Tersedia format in-house corporate</span>
        <span>✓ Invoice resmi &amp; NDA perusahaan</span>
      </div>
    </div>
  </div>
</section>
"""

# Insert Wave 2 sections right before the footer
html = html.replace('<footer class="c-footer"', f'{wave2_sections_html}\n<footer class="c-footer"')

# -----------------------------------------------------------------------------
# N. SECTION 7: REWORKED EXECUTIVE B2B FOOTER
# -----------------------------------------------------------------------------
reworked_footer_html = f"""<footer class="c-footer" id="kontak">
  <div class="c-footer__wrapper | o-wrapper --lg">
    <div class="c-footer-grid">
      <!-- Col 1: Brand & Identity -->
      <div class="c-footer-col --brand">
        <div class="c-footer-brand-logo">
          <img src="/montarville_assets/images/clevio-ai-pro-logo-white.png" alt="Clevio AI Pro" class="c-footer-brand-img" />
        </div>
        <p class="c-footer-brand-desc">Workshop satu hari bagi pemimpin dan profesional untuk mengubah potensi AI menjadi keputusan dan rencana aksi nyata bagi organisasi.</p>
        <div class="c-footer-brand-org">PT Clevio Inovasi Indonesia</div>
        <div class="c-footer-socials-row">
          <a href="{WA_CONSULT}" {EXT} class="c-footer-social-btn" aria-label="WhatsApp Clevio"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="https://www.linkedin.com/company/clevio/" {EXT} class="c-footer-social-btn" aria-label="LinkedIn Clevio"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/cleviopro/" {EXT} class="c-footer-social-btn" aria-label="Instagram Clevio"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>

      <!-- Col 2: Program Navigation -->
      <div class="c-footer-col">
        <div class="c-footer-col-header">PROGRAM</div>
        <ul class="c-footer-nav-list">
          <li><a href="#tentang" class="c-footer-nav-link">Tentang Workshop</a></li>
          <li><a href="#metode" class="c-footer-nav-link">3 Tahap Metode</a></li>
          <li><a href="#kompetensi" class="c-footer-nav-link">5 Kompetensi Teruji</a></li>
          <li><a href="#metode" class="c-footer-nav-link">Format Flipped Learning</a></li>
          <li><a href="#arah" class="c-footer-nav-link">3 Arah Pengembangan</a></li>
        </ul>
      </div>

      <!-- Col 3: Informasi & Logistik -->
      <div class="c-footer-col">
        <div class="c-footer-col-header">INFORMASI</div>
        <ul class="c-footer-nav-list">
          <li><a href="#informasi" class="c-footer-nav-link">Jadwal &amp; Format</a></li>
          <li><a href="#informasi" class="c-footer-nav-link">Investasi Program</a></li>
          <li><a href="#fasilitator" class="c-footer-nav-link">Profil Fasilitator</a></li>
          <li><a href="#faq" class="c-footer-nav-link">Pertanyaan Umum (FAQ)</a></li>
          <li><a href="#galeri" class="c-footer-nav-link">Galeri Dokumentasi</a></li>
        </ul>
      </div>

      <!-- Col 4: Konsultasi & Pendaftaran -->
      <div class="c-footer-col --cta">
        <div class="c-footer-col-header">KONSULTASI &amp; DAFTAR</div>
        <p class="c-footer-cta-text">Daftarkan tim atau diskusikan kebutuhan kustomisasi program untuk organisasi Anda.</p>
        <div class="c-footer-contact-items">
          <div class="c-footer-contact-item">
            <span class="c-footer-contact-label">Email:</span>
            <a href="mailto:halo@clevio.co" class="c-footer-contact-val">halo@clevio.co</a>
          </div>
          <div class="c-footer-contact-item">
            <span class="c-footer-contact-label">WhatsApp:</span>
            <a href="{WA_CONSULT}" {EXT} class="c-footer-contact-val">+62 812-1087-8144</a>
          </div>
        </div>
        <div class="c-footer-btn-wrapper">
          <a href="{FORM}" {EXT} class="c-cta --sm" aria-label="Daftar Workshop">Daftar Workshop \u2197</a>
        </div>
      </div>
    </div>

    <!-- Bottom Line / Subfooter -->
    <div class="c-footer-bottom">
      <div class="c-footer-bottom-left">
        &copy; 2026 Clevio AI Pro · PT Clevio Inovasi Indonesia. Seluruh hak cipta dilindungi.
      </div>
      <div class="c-footer-bottom-right">
        Jakarta, Indonesia · AI Thinking &amp; Innovation Series
      </div>
    </div>
  </div>
</footer>"""

html = re.sub(r'<footer class="c-footer"[^>]*>[\s\S]*?<\/footer>', reworked_footer_html, html, count=1, flags=re.I)

# -----------------------------------------------------------------------------
# O. SCRIPTS & COOKIE REMOVAL
# -----------------------------------------------------------------------------
# Remove tracking container block
i_track = html.find('<div class="ff-wp-tracking__ctn"')
if i_track != -1:
    depth = 0
    for m in re.finditer(r'<div\b|</div>', html[i_track:]):
        depth += 1 if m.group(0) == '<div' else -1
        if depth == 0:
            html = html[:i_track] + html[i_track + m.end():]
            break

# Remove speculation rules
html = re.sub(r'<script type="speculationrules">[\s\S]*?</script>', '', html)

# Remove multilingual redirect & cookie setter scripts
html = re.sub(r'<script>\s*//\s*V[ée]rifier si la langue[\s\S]*?</script>', '', html)
html = re.sub(r'<script>\s*//\s*D[ée]finir le cookie[\s\S]*?</script>', '', html)

# Remove tracking scripts & beacons
html = re.sub(r'<script[^>]*id="ff-wp-tracking-scripts-js"[^>]*></script>', '', html)
html = re.sub(r'<script>var rocket_beacon_data[\s\S]*?</script>', '', html)
html = re.sub(r'<script data-name="wpr-wpr-beacon"[^>]*></script>', '', html)
html = re.sub(r'<input type="hidden" id="ff-wp-alerts-post-id"[^>]*>', '', html)

# Rewrite modulepreload scripts to local theme assets before cleaning generic URLs
html = html.replace('https://montarville.ca/wp-content/themes/fatfish/dist/scripts/', '/montarville_assets/js/')

# Clean remaining Montarville / Fatfish URLs
html = re.sub(r'href="https://montarville\.ca[^"]*"', 'href="#"', html)
html = html.replace('href="https://fatfish.ca/"', 'href="#"')

# Write local index.html
with open(LOCAL_HTML_PATH, 'w', encoding='utf-8') as f:
    f.write(html)
print(f'Local index.html successfully generated ({len(html)} bytes)!')

# -----------------------------------------------------------------------------
# P. PACKAGE FOR GITHUB PAGES & VERCEL
# -----------------------------------------------------------------------------
# Replace absolute paths with relative './assets/'
repo_html = html
repo_html = repo_html.replace('/montarville_assets/', './assets/')
repo_html = repo_html.replace('href="/montarville"', 'href="./"')
repo_html = repo_html.replace('href="/montarville/"', 'href="./"')

# Copy assets to repo
if os.path.exists(REPO_ASSETS):
    shutil.rmtree(REPO_ASSETS, ignore_errors=True)
shutil.copytree(LOCAL_ASSETS, REPO_ASSETS)

# Fix relative font paths in CSS
css_dir = os.path.join(REPO_ASSETS, 'css')
for css_file in os.listdir(css_dir):
    if css_file.endswith('.css'):
        fp = os.path.join(css_dir, css_file)
        c = open(fp, encoding='utf-8').read()
        if '/montarville_assets/fonts/' in c:
            c = c.replace('/montarville_assets/fonts/', '../fonts/')
            open(fp, 'w', encoding='utf-8').write(c)

# Ensure .nojekyll exists
with open(os.path.join(REPO_DIR, '.nojekyll'), 'w', encoding='utf-8') as f:
    f.write('')

with open(REPO_HTML_PATH, 'w', encoding='utf-8') as f:
    f.write(repo_html)

print(f'Repo index.html successfully packaged ({len(repo_html)} bytes)!')
