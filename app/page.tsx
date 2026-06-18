'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    // Show promo after 5 seconds for impact
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const closePromo = () => {
    setShowPromo(false);
  };

  return (
    <>
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      <script dangerouslySetInnerHTML={{ __html: `
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                "on-secondary-container": "#785a14",
                "on-primary-container": "#d5e2cc",
                "gold-leaf": "#E0B96A",
                "linen": "#F4F1ED",
                "secondary-fixed-dim": "#e9c171",
                "background": "#fcf9f5",
                "surface-bright": "#fcf9f5",
                "sage-deep": "#4D544A",
                "surface-container": "#f0ede9",
                "surface": "#fcf9f5",
                "primary-container": "#596554",
                "secondary-fixed": "#ffdea1",
                "secondary-container": "#fed583",
                "on-background": "#1c1c19",
                "tertiary-fixed-dim": "#c2c9bc",
                "surface-container-highest": "#e5e2de",
                "surface-container-low": "#f6f3ef",
                "on-primary-fixed-variant": "#3e4a3a",
                "surface-variant": "#e5e2de",
                "surface-container-lowest": "#ffffff",
                "on-tertiary-fixed": "#171d15",
                "tertiary": "#454c42",
                "surface-container-high": "#ebe8e4",
                "on-surface-variant": "#444841",
                "on-error-container": "#93000a",
                "error": "#ba1a1a",
                "on-tertiary": "#ffffff",
                "surface-tint": "#566251",
                "on-secondary-fixed": "#261900",
                "primary-fixed": "#d9e7d1",
                "tertiary-fixed": "#dee5d7",
                "on-tertiary-container": "#d9e0d3",
                "secondary": "#775a13",
                "paper-white": "#FFFFFF",
                "on-secondary": "#ffffff",
                "inverse-surface": "#31302e",
                "on-tertiary-fixed-variant": "#42493f",
                "primary": "#414d3d",
                "surface-dim": "#dcdad6",
                "on-surface": "#1c1c19",
                "tertiary-container": "#5d645a",
                "primary-fixed-dim": "#bdcab6",
                "on-primary": "#ffffff",
                "on-error": "#ffffff",
                "on-secondary-fixed-variant": "#5c4300",
                "error-container": "#ffdad6",
                "outline-variant": "#c5c8bf",
                "on-primary-fixed": "#141e11",
                "inverse-on-surface": "#f3f0ec",
                "outline": "#757871",
                "inverse-primary": "#bdcab6"
              },
              "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
              },
              "spacing": {
                "gutter": "24px",
                "unit": "8px",
                "container-max": "1200px",
                "margin-desktop": "64px",
                "margin-mobile": "20px"
              },
              "fontFamily": {
                "display-lg": ["ebGaramond"],
                "body-lg": ["inter"],
                "body-md": ["inter"],
                "headline-sm": ["ebGaramond"],
                "interactive": ["outfit"],
                "headline-md": ["ebGaramond"],
                "display-lg-mobile": ["ebGaramond"],
                "label-caps": ["outfit"]
              },
              "fontSize": {
                "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "500" }],
                "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "headline-sm": ["24px", { "lineHeight": "32px", "fontWeight": "500" }],
                "interactive": ["14px", { "lineHeight": "20px", "fontWeight": "500" }],
                "headline-md": ["32px", { "lineHeight": "40px", "fontWeight": "400" }],
                "display-lg-mobile": ["36px", { "lineHeight": "44px", "fontWeight": "500" }],
                "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "600" }]
              }
            },
          },
        }
      ` }} />
      <style dangerouslySetInnerHTML={{ __html: `
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .bg-glass {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
        }
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .accordion-open .accordion-content {
          max-height: 500px;
        }
        .premium-shadow {
          box-shadow: 0 20px 40px rgba(89, 101, 84, 0.05);
        }
      ` }} />
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      
      <main className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen">
        {/* Top Navigation */}
        <header className="docked full-width top-0 sticky z-50 bg-paper-white/80 dark:bg-surface/80 backdrop-blur-md shadow-sm">
          <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
            <div className="flex items-center gap-4">
              <img
                alt="Walimatul ID Logo"
                className="h-8 md:h-10"
                src="https://lh3.googleusercontent.com/aida/AP1WRLs_Xb7AXqhIP9N7I0Kf10-5BM1Ro0Ks0UrnkQM9521bvej9wexI4k2lO4mkZ6Sc1VfFDUizMWQYyHPu_x6ZRgM-4Gr2VjsAsUHIyaVBBbiCSM_raAr-75H1r-9NhJ_mI_iXKvx2Oh_Lk9FIDwSlH7Q3E8J2ZlE3a1xOG8lJpe-YnDcEaj1NHxrgqK3K-JYvCfPAfCQhtYbKlmEpSvFYZXrI683XAkfeqVU7VfRrneEIZEa6KjQ5QgFzXL2M"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                className="text-primary dark:text-primary-fixed font-bold border-b-2 border-gold-leaf pb-1 font-label-caps text-label-caps"
                href="#"
              >
                Beranda
              </a>
              <a
                className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors font-label-caps text-label-caps"
                href="#themes"
              >
                Tema
              </a>
              <a
                className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors font-label-caps text-label-caps"
                href="#pricing"
              >
                Harga
              </a>
              <a
                className="text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors font-label-caps text-label-caps"
                href="#faq"
              >
                FAQ
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-label-caps hover:bg-sage-deep transition-all transform active:scale-95">
                Masuk
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative bg-primary-container overflow-hidden pt-16 pb-24 md:py-32">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-on-primary-container space-y-6">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white">
                Buat Undangan Pernikahan Digital
              </h1>
              <p className="font-body-lg text-body-lg text-white/80 max-w-lg">
                Jasa pembuatan undangan digital pernikahan modern dan praktis.
                Dapatkan undangan online yang unik, interaktif, dan mudah dibagikan kepada seluruh tamu Anda.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-gold-leaf text-sage-deep px-8 py-3 rounded-full font-label-caps text-label-caps hover:opacity-90 transition-all">
                  Buat Undangan
                </button>
                <button className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-full font-label-caps text-label-caps hover:bg-white/10 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  Coba Gratis
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-leaf/20 rounded-full blur-3xl"></div>
              <img
                alt="Digital Invitations Showcase"
                className="w-full h-auto drop-shadow-2xl animate-pulse-slow"
                src="/assets/landing/mockup.png"
              />
            </div>
          </div>
        </section>

        {/* Partners Row */}
        <section className="bg-linen py-12 border-b border-outline-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <p className="font-label-caps text-label-caps text-on-surface-variant mb-8 uppercase tracking-widest">
              Telah Dipercaya 500+ Pasangan di Seluruh Indonesia
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
              <span className="font-display-lg text-headline-sm">RAI & EKI</span>
              <span className="font-display-lg text-headline-sm">LAA & HAR</span>
              <span className="font-display-lg text-headline-sm">A & FAD</span>
              <span className="font-display-lg text-headline-sm">NRA & RAR</span>
            </div>
          </div>
        </section>

        {/* Theme Selection */}
        <section className="py-24 bg-background" id="themes">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-display-lg text-display-lg text-primary">Pilihan Tema Undangan</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Kami memiliki puluhan tema undangan pernikahan digital. Silahkan pilih tema dibawah, jika butuh tema custom bisa langsung hubungi admin.
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <button className="px-6 py-2 bg-primary text-white rounded-full font-label-caps text-label-caps">Semua</button>
                <button className="px-6 py-2 bg-surface-container-high text-primary rounded-full font-label-caps text-label-caps hover:bg-primary/10 transition-all">Dengan Foto</button>
                <button className="px-6 py-2 bg-surface-container-high text-primary rounded-full font-label-caps text-label-caps hover:bg-primary/10 transition-all">Non-Foto</button>
              </div>
            </div>

            {/* Bento-ish Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Theme Card 1 */}
              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    alt="Floral 05 Theme"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLtiAFA2vECLI5Sh3Gy0b4snkj5d7AyleWt04Tt_8DUWutiCc0nivS_P48Y0yIopWFhqcV-WU5aqs3KZkqJhfthkg9bq8To17un6MhIubiqMjzBmb4UzOUgJlknq9yGztpkewzaivmj1Kw-QS9ggdpjbfPhyURTevEeSMhiNPePYfNROyGGUk2j4j9oRC280QrNoCpCSOkwbgx6zvnME6PXEc_uLtBcgT7sEIv48GxVAkyJ4hPtmZPvjifUi"
                  />
                  <div className="absolute top-3 left-3 bg-gold-leaf text-sage-deep text-[10px] px-3 py-1 font-bold rounded-full">NEW</div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display-lg text-headline-sm text-primary">Floral - 05</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-on-surface-variant line-through text-xs">Rp 198.000</span>
                    <span className="text-primary font-bold">Rp 99.000</span>
                    <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded font-bold">50%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button className="border border-outline py-2 text-xs font-label-caps hover:bg-primary hover:text-white transition-all">LIHAT TEMA</button>
                    <button className="bg-primary text-white py-2 text-xs font-label-caps hover:bg-sage-deep transition-all">PILIH TEMA</button>
                  </div>
                </div>
              </div>

              {/* Theme Card 2 */}
              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    alt="Luxury 02 Theme"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLs7RepROjeiRvJKk-WahBqRP7Tnk4DGIwp9uImWWVYc9hb5af_OCG-8E1G3DbvKjh8oEXJvlz4pQWomsWxX_bv7D2fQXUZ5o0oPDoz8Mx2Fo8xEFVVkh6njwF2y74iVyzgG6O4KXLvRslzAdiAgulaPdcfz9lDQaFITUgnzhH0AqFEy0GzIYiV8WP7hJBOr1Gn85QhL09xrXZ6pg0ruQqITorUVIk-6LRCyvnodUyMpjaEM57ncJWuN-SFS"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display-lg text-headline-sm text-primary">Luxury - 02</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-on-surface-variant line-through text-xs">Rp 198.000</span>
                    <span className="text-primary font-bold">Rp 99.000</span>
                    <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded font-bold">50%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button className="border border-outline py-2 text-xs font-label-caps hover:bg-primary hover:text-white transition-all">LIHAT TEMA</button>
                    <button className="bg-primary text-white py-2 text-xs font-label-caps hover:bg-sage-deep transition-all">PILIH TEMA</button>
                  </div>
                </div>
              </div>

              {/* Theme Card 3 */}
              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    alt="Luxury 04 Theme"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLsP8YC5w-M0bsAjbONnCh9Z78zL7c8-pBNLkslBs_jHs7inrQxYWYU3u00k2xLj5Sp99Z8R1Y-XiJXYQG6Z29YFai6U3zkG-XBhZWQyrEJcHnmzma6yySizbWAGUfvJsiOZH0H807E6B_Cu1v4IItqZAyO8Q_PYiqpKzkUXxLHuI_z1PltJ2dx7RQH0ePr26ux73NGHowgAErtY-puq-uYmPN50K3-JemTy6JBWPwR1LART5j0jNiekYR4"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display-lg text-headline-sm text-primary">Luxury - 04</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-on-surface-variant line-through text-xs">Rp 198.000</span>
                    <span className="text-primary font-bold">Rp 99.000</span>
                    <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded font-bold">50%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button className="border border-outline py-2 text-xs font-label-caps hover:bg-primary hover:text-white transition-all">LIHAT TEMA</button>
                    <button className="bg-primary text-white py-2 text-xs font-label-caps hover:bg-sage-deep transition-all">PILIH TEMA</button>
                  </div>
                </div>
              </div>

              {/* Theme Card 4 */}
              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    alt="Floral 07 Theme"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLvRt-Uk0QDdZuJP5nG9IQHTq4Z26fm2gfinoGWzYbc8yU3HMvWxsfu9JxrEj3Em-Sask0BmQ_CnazmljeS3bhi3r85ErcCB-qH_dkOti3GkHL0o0W9pWfQGjB41MRE1ciAUmKgVEbfBdzS5NXFOhXVbk_mMDBpfLQwdWx_oOd8xmYv1A3hS-a_gXQvqFltqWTO9Rkk0ml7Pts0lCFM6D22qhf50XwxKZJTS5a5OUMVYqM8VBlA8mztGHcSV"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display-lg text-headline-sm text-primary">Floral - 07</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-on-surface-variant line-through text-xs">Rp 198.000</span>
                    <span className="text-primary font-bold">Rp 99.000</span>
                    <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded font-bold">50%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button className="border border-outline py-2 text-xs font-label-caps hover:bg-primary hover:text-white transition-all">LIHAT TEMA</button>
                    <button className="bg-primary text-white py-2 text-xs font-label-caps hover:bg-sage-deep transition-all">PILIH TEMA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-linen" id="pricing">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-display-lg text-display-lg text-primary mb-4">
                Mau Coba Dulu? <span className="italic text-gold-leaf underline decoration-1 underline-offset-8">Silakan, Gratis!</span>
              </h2>
              <p className="font-body-lg text-on-surface-variant">Mulai dari paket trial 2 hari — rasakan sendiri kemudahannya sebelum memutuskan.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Free Trial */}
              <div className="bg-paper-white p-10 rounded-2xl premium-shadow border-t-4 border-gold-leaf relative transition-transform hover:scale-105">
                <div className="mb-8">
                  <h3 className="font-display-lg text-headline-sm text-primary mb-2">Free Trial</h3>
                  <p className="text-on-surface-variant text-xs line-through">Rp 19.000</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-lg text-4xl text-primary">Rp 0</span>
                    <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase">GRATISSS</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 text-sm">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Akses tema non-foto (terbatas)</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Aktif 2 hari</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Detail mempelai & acara</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> RSVP & Ucapan</li>
                  <li className="flex items-center gap-3 text-on-surface-variant/40 line-through"><span className="material-symbols-outlined text-sm">cancel</span> Ganti lagu</li>
                  <li className="flex items-center gap-3 text-on-surface-variant/40 line-through"><span className="material-symbols-outlined text-sm">cancel</span> Galeri foto & Video</li>
                </ul>
                <button className="w-full border-2 border-dashed border-gold-leaf py-4 rounded-xl font-label-caps text-label-caps text-primary hover:bg-gold-leaf/10 transition-all">COBA GRATIS</button>
              </div>

              {/* Non Foto */}
              <div className="bg-paper-white p-10 rounded-2xl premium-shadow border-t-4 border-primary relative transition-transform hover:scale-105 z-10 md:scale-110">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-4 py-1 rounded-full font-bold">BEST SELLER</div>
                <div className="mb-8">
                  <h3 className="font-display-lg text-headline-sm text-primary mb-2">Non Foto</h3>
                  <p className="text-on-surface-variant text-xs line-through">Rp 99.000</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-lg text-4xl text-primary">Rp 59.000</span>
                    <span className="bg-red-100 text-red-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase">40% OFF</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 text-sm">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Akses SEMUA tema non-foto</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Aktif 1 Tahun</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Love Story & Live Streaming</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Ganti lagu favorit</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Bebas Revisi</li>
                  <li className="flex items-center gap-3 text-on-surface-variant/40 line-through"><span className="material-symbols-outlined text-sm">cancel</span> Galeri foto</li>
                </ul>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-label-caps text-label-caps hover:bg-sage-deep transition-all shadow-lg">PILIH PAKET</button>
              </div>

              {/* Dengan Foto */}
              <div className="bg-paper-white p-10 rounded-2xl premium-shadow border-t-4 border-gold-leaf relative transition-transform hover:scale-105">
                <div className="mb-8">
                  <h3 className="font-display-lg text-headline-sm text-primary mb-2">Dengan Foto</h3>
                  <p className="text-on-surface-variant text-xs line-through">Rp 198.000</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-lg text-4xl text-primary">Rp 99.000</span>
                    <span className="bg-red-100 text-red-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase">50% OFF</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 text-sm">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Akses SEMUA tema (Premium)</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Aktif 1 Tahun</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Galeri Foto & Video Prewed</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Custom Nama Tamu</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Musik Latar Bebas</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Unlimited Share</li>
                </ul>
                <button className="w-full bg-sage-deep text-white py-4 rounded-xl font-label-caps text-label-caps hover:opacity-90 transition-all shadow-lg">PILIH PAKET</button>
              </div>
            </div>
          </div>
        </section>

        {/* General Features Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-display-lg text-display-lg text-primary">Fitur Unggulan Kami</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {/* Feature Boxes */}
              <div className="bg-paper-white p-8 rounded-xl premium-shadow text-center flex flex-col items-center gap-4 group hover:bg-primary transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all">
                  <span className="material-symbols-outlined">photo_library</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant group-hover:text-white">GALLERY POTO</span>
              </div>
              <div className="bg-paper-white p-8 rounded-xl premium-shadow text-center flex flex-col items-center gap-4 group hover:bg-primary transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant group-hover:text-white">HITUNG MUNDUR</span>
              </div>
              <div className="bg-paper-white p-8 rounded-xl premium-shadow text-center flex flex-col items-center gap-4 group hover:bg-primary transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all">
                  <span className="material-symbols-outlined">map</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant group-hover:text-white">NAVIGASI LOKASI</span>
              </div>
              <div className="bg-paper-white p-8 rounded-xl premium-shadow text-center flex flex-col items-center gap-4 group hover:bg-primary transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant group-hover:text-white">AMPLOP DIGITAL</span>
              </div>
              <div className="bg-paper-white p-8 rounded-xl premium-shadow text-center flex flex-col items-center gap-4 group hover:bg-primary transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all">
                  <span className="material-symbols-outlined">person_add</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant group-hover:text-white">CUSTOM TAMU</span>
              </div>
              <div className="bg-paper-white p-8 rounded-xl premium-shadow text-center flex flex-col items-center gap-4 group hover:bg-primary transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all">
                  <span className="material-symbols-outlined">live_tv</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant group-hover:text-white">FITUR LIVE</span>
              </div>
              <div className="bg-paper-white p-8 rounded-xl premium-shadow text-center flex flex-col items-center gap-4 group hover:bg-primary transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all">
                  <span className="material-symbols-outlined">event_available</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant group-hover:text-white">FITUR RSVP</span>
              </div>
              <div className="bg-paper-white p-8 rounded-xl premium-shadow text-center flex flex-col items-center gap-4 group hover:bg-primary transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant group-hover:text-white">LOVE STORY</span>
              </div>
              <div className="bg-paper-white p-8 rounded-xl premium-shadow text-center flex flex-col items-center gap-4 group hover:bg-primary transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all">
                  <span className="material-symbols-outlined">share</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant group-hover:text-white">UNLIMITED SHARE</span>
              </div>
              <div className="bg-paper-white p-8 rounded-xl premium-shadow text-center flex flex-col items-center gap-4 group hover:bg-primary transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all">
                  <span className="material-symbols-outlined">music_note</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant group-hover:text-white">MUSIK LATAR</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-linen" id="faq">
          <div className="max-w-3xl mx-auto px-margin-mobile">
            <h2 className="font-display-lg text-display-lg text-primary text-center mb-12">
              Pertanyaan Seputar <span className="italic">Undangan Digital</span>
            </h2>
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className={`bg-paper-white rounded-xl overflow-hidden premium-shadow ${openFaq === 1 ? 'accordion-open' : ''}`}>
                <button
                  className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-surface-container-low"
                  onClick={() => toggleAccordion(1)}
                >
                  <span className="font-headline-sm text-primary text-lg">Apa itu paket Trial Gratis?</span>
                  <span
                    className="material-symbols-outlined transition-transform duration-300"
                    style={{ transform: openFaq === 1 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    expand_more
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="p-6 pt-0 text-on-surface-variant text-sm border-t border-linen">
                    Paket Trial adalah kesempatan untuk mencoba platform Walimatul.id secara gratis selama 2 × 24 jam. Kamu bisa isi data acara, pilih tema tanpa foto (terbatas), dan melihat preview undangan secara live.
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className={`bg-paper-white rounded-xl overflow-hidden premium-shadow ${openFaq === 2 ? 'accordion-open' : ''}`}>
                <button
                  className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-surface-container-low"
                  onClick={() => toggleAccordion(2)}
                >
                  <span className="font-headline-sm text-primary text-lg">Berapa lama undangan saya aktif?</span>
                  <span
                    className="material-symbols-outlined transition-transform duration-300"
                    style={{ transform: openFaq === 2 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    expand_more
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="p-6 pt-0 text-on-surface-variant text-sm border-t border-linen">
                    Undangan aktif selama 1 tahun sejak tanggal pembelian. Lebih dari cukup untuk semua rangkaian acara pernikahan kamu.
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className={`bg-paper-white rounded-xl overflow-hidden premium-shadow ${openFaq === 3 ? 'accordion-open' : ''}`}>
                <button
                  className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-surface-container-low"
                  onClick={() => toggleAccordion(3)}
                >
                  <span className="font-headline-sm text-primary text-lg">Bisakah saya ganti tema setelah membeli?</span>
                  <span
                    className="material-symbols-outlined transition-transform duration-300"
                    style={{ transform: openFaq === 3 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    expand_more
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="p-6 pt-0 text-on-surface-variant text-sm border-t border-linen">
                    Bisa! Semua tema tersedia setelah checkout dan kamu bebas mengganti tema kapan saja tanpa biaya tambahan.
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className={`bg-paper-white rounded-xl overflow-hidden premium-shadow ${openFaq === 4 ? 'accordion-open' : ''}`}>
                <button
                  className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-surface-container-low"
                  onClick={() => toggleAccordion(4)}
                >
                  <span className="font-headline-sm text-primary text-lg">Bagaimana cara membayar?</span>
                  <span
                    className="material-symbols-outlined transition-transform duration-300"
                    style={{ transform: openFaq === 4 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    expand_more
                  </span>
                </button>
                <div className="accordion-content">
                  <div className="p-6 pt-0 text-on-surface-variant text-sm border-t border-linen">
                    Pembayaran tersedia via QRIS, transfer bank (BCA, Mandiri, BNI, BRI), ShopeePay, GoPay, dan OVO. Semua aman dan terverifikasi otomatis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-sage-deep relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 gap-4 transform -rotate-12 scale-150">
              <div className="h-64 bg-white/20 rounded-xl"></div>
              <div className="h-64 bg-white/20 rounded-xl mt-12"></div>
              <div className="h-64 bg-white/20 rounded-xl"></div>
              <div className="h-64 bg-white/20 rounded-xl mt-12"></div>
              <div className="h-64 bg-white/20 rounded-xl"></div>
              <div className="h-64 bg-white/20 rounded-xl mt-12"></div>
            </div>
          </div>
          <div className="max-w-container-max mx-auto px-margin-mobile text-center relative z-10">
            <h2 className="font-display-lg text-4xl md:text-5xl text-white mb-6">
              Masih Ragu? <span className="italic text-gold-leaf">Coba Dulu, Gratis 2 Hari!</span>
            </h2>
            <p className="font-body-lg text-white/70 max-w-2xl mx-auto mb-10">
              Tidak perlu bayar dulu — coba sendiri, rasakan kemudahannya, lihat hasilnya. Kalau cocok, baru upgrade. Ratusan pasangan sudah membuktikannya.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="w-full md:w-auto bg-gold-leaf text-sage-deep px-10 py-4 rounded-full font-label-caps text-label-caps font-bold shadow-xl hover:scale-105 transition-all">
                MULAI TRIAL GRATIS SEKARANG
              </button>
              <button className="w-full md:w-auto border border-white/30 text-white px-10 py-4 rounded-full font-label-caps text-label-caps hover:bg-white/10 transition-all">
                LANGSUNG PILIH PAKET
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
            {/* Brand & Contact */}
            <div className="space-y-6">
              <img
                alt="Walimatul ID Logo"
                className="h-10"
                src="https://lh3.googleusercontent.com/aida/AP1WRLs_Xb7AXqhIP9N7I0Kf10-5BM1Ro0Ks0UrnkQM9521bvej9wexI4k2lO4mkZ6Sc1VfFDUizMWQYyHPu_x6ZRgM-4Gr2VjsAsUHIyaVBBbiCSM_raAr-75H1r-9NhJ_mI_iXKvx2Oh_Lk9FIDwSlH7Q3E8J2ZlE3a1xOG8lJpe-YnDcEaj1NHxrgqK3K-JYvCfPAfCQhtYbKlmEpSvFYZXrI683XAkfeqVU7VfRrneEIZEa6KjQ5QgFzXL2M"
              />
              <p className="font-body-md text-on-surface-variant">
                Walimatul ID adalah platform untuk membuat website undangan digital dengan layanan lengkap. Solusi impian untuk momen spesial Anda.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-sm">face_nod</span>
                </a>
                <a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-sm">alternate_email</span>
                </a>
                <a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-sm">public</span>
                </a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h4 className="font-label-caps text-label-caps text-primary uppercase">Informasi Kontak</h4>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm mt-1">call</span> 0851 2800 2066
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm mt-1">mail</span> walimatul@gmail.com
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm mt-1">location_on</span> Tanggeung, Cianjur, Jawa Barat
                </li>
              </ul>
            </div>

            {/* Theme Options */}
            <div className="space-y-4">
              <h4 className="font-label-caps text-label-caps text-primary uppercase">Pilihan Tema</h4>
              <ul className="space-y-2 font-body-md text-on-surface-variant">
                <li><a className="hover:text-gold-leaf transition-all" href="#">Tema Basic</a></li>
                <li><a className="hover:text-gold-leaf transition-all" href="#">Tema Standar</a></li>
                <li><a className="hover:text-gold-leaf transition-all" href="#">Tema Premium</a></li>
                <li><a className="hover:text-gold-leaf transition-all" href="#">Tema Non-Wedding</a></li>
              </ul>
            </div>

            {/* Other Links */}
            <div className="space-y-4">
              <h4 className="font-label-caps text-label-caps text-primary uppercase">Menu Lainnya</h4>
              <ul className="space-y-2 font-body-md text-on-surface-variant">
                <li><a className="hover:text-gold-leaf transition-all" href="#">Tentang Kami</a></li>
                <li><a className="hover:text-gold-leaf transition-all" href="#">Blog</a></li>
                <li><a className="hover:text-gold-leaf transition-all" href="#">Pendaftaran Reseller</a></li>
                <li><a className="hover:text-gold-leaf transition-all" href="#">Kebijakan Privasi</a></li>
                <li><a className="hover:text-gold-leaf transition-all" href="#">Syarat dan Ketentuan</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="border-t border-outline-variant/30 py-8 px-margin-mobile text-center">
            <p className="font-body-md text-sm text-on-surface-variant/60">
              Copyright © 2024 Walimatul ID All Rights Reserved.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp */}
        <a
          className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 z-50"
          href="#"
        >
          <span className="material-symbols-outlined">chat</span>
        </a>

        {/* Promo Modal */}
        {showPromo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" id="promoModal">
            <div className="absolute inset-0 bg-sage-deep/80 backdrop-blur-sm" onClick={closePromo}></div>
            <div className="relative bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl transform transition-all">
              <div className="bg-primary p-8 text-center text-white relative">
                <button
                  className="absolute top-4 right-4 text-white/60 hover:text-white"
                  onClick={closePromo}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
                <div className="inline-block px-4 py-1 bg-gold-leaf text-sage-deep text-[10px] font-bold rounded-full mb-4 uppercase">
                  Promo Terbatas
                </div>
                <h2 className="font-display-lg text-3xl mb-2">Diskon Spesial 10%</h2>
                <p className="text-white/80 text-sm">Rayakan hari bahagiamu dengan undangan digital mewah</p>
              </div>
              <div className="p-8 text-center bg-paper-white">
                <p className="text-on-surface-variant text-xs mb-4">Gunakan kode kupon ini untuk 20 orang pertama:</p>
                <div className="flex items-center justify-between bg-linen p-4 rounded-xl border-2 border-dashed border-gold-leaf mb-6">
                  <span className="font-display-lg text-2xl tracking-widest text-primary">SPESIAL10</span>
                  <button className="bg-gold-leaf text-sage-deep px-4 py-2 rounded-lg font-label-caps text-[10px]">
                    SALIN KODE
                  </button>
                </div>
                {/* Countdown */}
                <div className="flex justify-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-display-lg text-primary">03</div>
                    <div className="text-[10px] font-label-caps text-on-surface-variant">JAM</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display-lg text-primary">37</div>
                    <div className="text-[10px] font-label-caps text-on-surface-variant">MENIT</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display-lg text-primary">27</div>
                    <div className="text-[10px] font-label-caps text-on-surface-variant">DETIK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}