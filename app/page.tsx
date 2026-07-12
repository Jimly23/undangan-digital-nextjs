'use client';

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showPromo, setShowPromo] = useState(false);
  const [orderModal, setOrderModal] = useState<{name: string, price: string} | null>(null);
  const [orderForm, setOrderForm] = useState({ name: '', phone: '' });

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderModal) return;
    const text = `Halo Youvitation,%0ASaya ingin memesan tema undangan.%0A%0A*Detail Pesanan:*%0ATema: ${orderModal.name}%0AHarga: ${orderModal.price}%0A%0A*Data Pemesan:*%0ANama Lengkap: ${orderForm.name}%0ANo. WhatsApp: ${orderForm.phone}%0A%0AMohon informasi lebih lanjut terkait pemesanan tema ini.`;
    const waNumber = '6282329322353';
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
  };

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
      <script dangerouslySetInnerHTML={{
        __html: `
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
      <style dangerouslySetInnerHTML={{
        __html: `
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
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
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
        <header className="full-width z-50 bg-primary-container">
          <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
            <div className="flex items-center gap-4">
              <img
                alt="Walimatul ID Logo"
                className="h-8 md:h-12"
                src="/logo-header.png"
              />
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gold-leaf text-on-primary px-6 py-2 rounded-xl font-label-caps text-label-caps hover:bg-sage-deep transition-all transform active:scale-95">
                Lihat Tema
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative bg-primary-container overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
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
                <button onClick={() => { setOrderModal({ name: 'Custom/Belum Memilih', price: 'Konsultasi Admin' }); setOrderForm({ name: '', phone: '' }); }} className="bg-gold-leaf text-white px-8 py-3 rounded-xl font-label-caps text-label-caps hover:opacity-90 transition-all">
                  Buat Undangan
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                alt="Digital Invitations Showcase"
                className="w-full h-auto drop-shadow-2xl animate-pulse-slow"
                src="/assets/landing/mockup.png"
              />
            </div>
          </div>
        </section>

        {/* Partners Row */}
        <section className="bg-linen py-12 border-b border-outline-variant overflow-hidden">
          <div className="max-w-container-max mx-auto text-center relative">
            <h3 className="font-display-lg text-primary mb-10 px-margin-mobile">
              Telah Dipercaya 500+ Pasangan di Seluruh Indonesia
            </h3>
            
            <div className="relative w-full overflow-hidden flex">
              {/* Fade masks for smooth edges */}
              <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-linen to-transparent z-10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-linen to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex animate-marquee w-max gap-8 md:gap-12 hover:[animation-play-state:paused]">
                {[
                  { img: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=200&h=200&auto=format&fit=crop', initials: '&' },
                  { img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=200&h=200&auto=format&fit=crop', initials: 'F & D' },
                  { img: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=200&h=200&auto=format&fit=crop', initials: 'N & A' },
                  { img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=200&h=200&auto=format&fit=crop', initials: 'R & R' },
                  { img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=200&h=200&auto=format&fit=crop', initials: 'H & I' },
                  { img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=200&h=200&auto=format&fit=crop', initials: 'R & I' },
                  { img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=200&h=200&auto=format&fit=crop', initials: 'R & I' },
                  { img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=200&h=200&auto=format&fit=crop', initials: 'R & A' },
                  // Duplicated for seamless loop
                  { img: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=200&h=200&auto=format&fit=crop', initials: '&' },
                  { img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=200&h=200&auto=format&fit=crop', initials: 'F & D' },
                  { img: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=200&h=200&auto=format&fit=crop', initials: 'N & A' },
                  { img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=200&h=200&auto=format&fit=crop', initials: 'R & R' },
                  { img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=200&h=200&auto=format&fit=crop', initials: 'H & I' },
                  { img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=200&h=200&auto=format&fit=crop', initials: 'R & I' },
                  { img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=200&h=200&auto=format&fit=crop', initials: 'R & I' },
                  { img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=200&h=200&auto=format&fit=crop', initials: 'R & A' }
                ].map((partner, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3 w-20 shrink-0 transition-transform cursor-pointer">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img src={partner.img} alt={partner.initials} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-label-caps text-[10px] md:text-xs text-on-surface-variant font-bold tracking-widest">{partner.initials}</span>
                  </div>
                ))}
              </div>
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
                {/* <button className="px-6 py-2 bg-primary text-white rounded-full font-label-caps text-label-caps">Semua</button>
                <button className="px-6 py-2 bg-surface-container-high text-primary rounded-full font-label-caps text-label-caps hover:bg-primary/10 transition-all">Dengan Foto</button>
                <button className="px-6 py-2 bg-surface-container-high text-primary rounded-full font-label-caps text-label-caps hover:bg-primary/10 transition-all">Non-Foto</button> */}
              </div>
            </div>

            {/* Bento-ish Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {/* Theme Card 1 */}
              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden aspect-square bg-[#9f9a4b]">
                  <img
                    alt="Japan Theme"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    src="/assets/landing/jepang.webp"
                  />
                  <div className="absolute top-3 left-3 bg-gold-leaf text-sage-deep text-[10px] px-3 py-1 font-bold rounded-full z-10">NEW</div>
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display-lg text-headline-sm text-primary">Japan Theme</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-on-surface-variant line-through text-[10px]">Rp 689k</span>
                      <span className="text-primary font-bold text-sm">Rp 250.000</span>
                      <span className="bg-red-100 text-red-600 text-[9px] px-1.5 py-0.5 rounded font-bold">50%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <a href="https://youvitation.net/themes/mahara-japan-v2/adelio-elina/Tamu%20Undangan" target="_blank" rel="noreferrer" className="border border-outline py-2 text-[10px] font-label-caps hover:bg-primary hover:text-white transition-all rounded-xl text-center block w-full">LIHAT TEMA</a>
                    <button onClick={() => { setOrderModal({ name: 'Japan Theme', price: 'Rp 250.000' }); setOrderForm({ name: '', phone: '' }); }} className="bg-primary text-white py-2 text-[10px] font-label-caps hover:bg-sage-deep transition-all rounded-xl w-full">PILIH TEMA</button>
                  </div>
                </div>
              </div>

              {/* Theme Card 2 */}
              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden aspect-square bg-[#f0ce81]">
                  <img
                    alt="Jawa Theme"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    src="/assets/landing/jawa.webp"
                  />
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display-lg text-headline-sm text-primary">Jawa Theme</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-on-surface-variant line-through text-[10px]">Rp 689k</span>
                      <span className="text-primary font-bold text-sm">Rp 250.000</span>
                      <span className="bg-red-100 text-red-600 text-[9px] px-1.5 py-0.5 rounded font-bold">50%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <a href="https://youvitation.net/themes/mahara-jawa/adel-elina/Tamu%20Undangan" target="_blank" rel="noreferrer" className="border border-outline py-2 text-[10px] font-label-caps hover:bg-primary hover:text-white transition-all rounded-xl text-center block w-full">LIHAT TEMA</a>
                    <button onClick={() => { setOrderModal({ name: 'Jawa Theme', price: 'Rp 250.000' }); setOrderForm({ name: '', phone: '' }); }} className="bg-primary text-white py-2 text-[10px] font-label-caps hover:bg-sage-deep transition-all rounded-xl w-full">PILIH TEMA</button>
                  </div>
                </div>
              </div>

              {/* Theme Card 3 */}
              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden aspect-square bg-[#df4021]">
                  <img
                    alt="Chinese Theme"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    src="/assets/landing/chinese.webp"
                  />
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display-lg text-headline-sm text-primary">Chinese Theme</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-on-surface-variant line-through text-[10px]">Rp 689k</span>
                      <span className="text-primary font-bold text-sm">Rp 250.000</span>
                      <span className="bg-red-100 text-red-600 text-[9px] px-1.5 py-0.5 rounded font-bold">50%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <a href="https://youvitation.net/themes/mahara-chinese/adelio-elaina/Tamu%20Undangan" target="_blank" rel="noreferrer" className="border border-outline py-2 text-[10px] font-label-caps hover:bg-primary hover:text-white transition-all rounded-xl text-center block w-full">LIHAT TEMA</a>
                    <button onClick={() => { setOrderModal({ name: 'Chinese Theme', price: 'Rp 250.000' }); setOrderForm({ name: '', phone: '' }); }} className="bg-primary text-white py-2 text-[10px] font-label-caps hover:bg-sage-deep transition-all rounded-xl w-full">PILIH TEMA</button>
                  </div>
                </div>
              </div>

              {/* Theme Card 4 */}
              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden aspect-square bg-[#96b297]">
                  <img
                    alt="Bali Theme"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    src="/assets/landing/bali.webp"
                  />
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display-lg text-headline-sm text-primary">Bali Theme</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-on-surface-variant line-through text-[10px]">Rp 689k</span>
                      <span className="text-primary font-bold text-sm">Rp 250.000</span>
                      <span className="bg-red-100 text-red-600 text-[9px] px-1.5 py-0.5 rounded font-bold">50%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <a href="https://youvitation.net/themes/mahara-bali/adelio-eli/" target="_blank" rel="noreferrer" className="border border-outline py-2 text-[10px] font-label-caps hover:bg-primary hover:text-white transition-all rounded-xl text-center block w-full">LIHAT TEMA</a>
                    <button onClick={() => { setOrderModal({ name: 'Bali Theme', price: 'Rp 250.000' }); setOrderForm({ name: '', phone: '' }); }} className="bg-primary text-white py-2 text-[10px] font-label-caps hover:bg-sage-deep transition-all rounded-xl w-full">PILIH TEMA</button>
                  </div>
                </div>
              </div>

              {/* Theme Card 5 */}
              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden aspect-square bg-surface-container-low">
                  <img
                    alt="Korea Theme"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    src="/assets/landing/korea.webp"
                  />
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display-lg text-headline-sm text-primary">Korea Theme</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-on-surface-variant line-through text-[10px]">Rp 689k</span>
                      <span className="text-primary font-bold text-sm">Rp 250.000</span>
                      <span className="bg-red-100 text-red-600 text-[9px] px-1.5 py-0.5 rounded font-bold">50%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <a href="https://youvitation.net/themes/mahara-korea/ade-elina/Nama" target="_blank" rel="noreferrer" className="border border-outline py-2 text-[10px] font-label-caps hover:bg-primary hover:text-white transition-all rounded-xl text-center block w-full">LIHAT TEMA</a>
                    <button onClick={() => { setOrderModal({ name: 'Korea Theme', price: 'Rp 250.000' }); setOrderForm({ name: '', phone: '' }); }} className="bg-primary text-white py-2 text-[10px] font-label-caps hover:bg-sage-deep transition-all rounded-xl w-full">PILIH TEMA</button>
                  </div>
                </div>
              </div>
              
              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden aspect-square bg-surface-container-low">
                  <img
                    alt="Korea Theme"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    src="/assets/landing/aceh.webp"
                  />
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display-lg text-headline-sm text-primary">Aceh Theme</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-on-surface-variant line-through text-[10px]">Rp 689k</span>
                      <span className="text-primary font-bold text-sm">Rp 250.000</span>
                      <span className="bg-red-100 text-red-600 text-[9px] px-1.5 py-0.5 rounded font-bold">50%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <a href="https://youvitation.net/themes/mahara-aceh/adelio-elainaa/Nama" target="_blank" rel="noreferrer" className="border border-outline py-2 text-[10px] font-label-caps hover:bg-primary hover:text-white transition-all rounded-xl text-center block w-full">LIHAT TEMA</a>
                    <button onClick={() => { setOrderModal({ name: 'Korea Theme', price: 'Rp 250.000' }); setOrderForm({ name: '', phone: '' }); }} className="bg-primary text-white py-2 text-[10px] font-label-caps hover:bg-sage-deep transition-all rounded-xl w-full">PILIH TEMA</button>
                  </div>
                </div>
              </div>
              
              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden aspect-square bg-surface-container-low">
                  <img
                    alt="Forest Theme"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    src="/assets/landing/forest.webp"
                  />
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display-lg text-headline-sm text-primary">Forest Theme</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-on-surface-variant line-through text-[10px]">Rp 689k</span>
                      <span className="text-primary font-bold text-sm">Rp 250.000</span>
                      <span className="bg-red-100 text-red-600 text-[9px] px-1.5 py-0.5 rounded font-bold">50%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <a href="https://youvitation.net/themes-forest/forest/tes-tes/Nama" target="_blank" rel="noreferrer" className="border border-outline py-2 text-[10px] font-label-caps hover:bg-primary hover:text-white transition-all rounded-xl text-center block w-full">LIHAT TEMA</a>
                    <button onClick={() => { setOrderModal({ name: 'Korea Theme', price: 'Rp 250.000' }); setOrderForm({ name: '', phone: '' }); }} className="bg-primary text-white py-2 text-[10px] font-label-caps hover:bg-sage-deep transition-all rounded-xl w-full">PILIH TEMA</button>
                  </div>
                </div>
              </div>

              {/* <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden aspect-square bg-surface-container-low">
                  <img
                    alt="Floral 07 Theme"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLvRt-Uk0QDdZuJP5nG9IQHTq4Z26fm2gfinoGWzYbc8yU3HMvWxsfu9JxrEj3Em-Sask0BmQ_CnazmljeS3bhi3r85ErcCB-qH_dkOti3GkHL0o0W9pWfQGjB41MRE1ciAUmKgVEbfBdzS5NXFOhXVbk_mMDBpfLQwdWx_oOd8xmYv1A3hS-a_gXQvqFltqWTO9Rkk0ml7Pts0lCFM6D22qhf50XwxKZJTS5a5OUMVYqM8VBlA8mztGHcSV"
                  />
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display-lg text-headline-sm text-primary">Floral - 07</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-on-surface-variant line-through text-[10px]">Rp 689k</span>
                      <span className="text-primary font-bold text-sm">Rp 250.000</span>
                      <span className="bg-red-100 text-red-600 text-[9px] px-1.5 py-0.5 rounded font-bold">50%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <button className="border border-outline py-2 text-[10px] font-label-caps hover:bg-primary hover:text-white transition-all">LIHAT TEMA</button>
                    <button className="bg-primary text-white py-2 text-[10px] font-label-caps hover:bg-sage-deep transition-all">PILIH TEMA</button>
                  </div>
                </div>
              </div>

              <div className="group bg-paper-white rounded-xl overflow-hidden premium-shadow transition-all hover:-translate-y-2 flex flex-col">
                <div className="relative overflow-hidden aspect-square bg-surface-container-low">
                  <img
                    alt="Luxury 02 Theme"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLs7RepROjeiRvJKk-WahBqRP7Tnk4DGIwp9uImWWVYc9hb5af_OCG-8E1G3DbvKjh8oEXJvlz4pQWomsWxX_bv7D2fQXUZ5o0oPDoz8Mx2Fo8xEFVVkh6njwF2y74iVyzgG6O4KXLvRslzAdiAgulaPdcfz9lDQaFITUgnzhH0AqFEy0GzIYiV8WP7hJBOr1Gn85QhL09xrXZ6pg0ruQqITorUVIk-6LRCyvnodUyMpjaEM57ncJWuN-SFS"
                  />
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display-lg text-headline-sm text-primary">Luxury - 02</h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-on-surface-variant line-through text-[10px]">Rp 689k</span>
                      <span className="text-primary font-bold text-sm">Rp 250.000</span>
                      <span className="bg-red-100 text-red-600 text-[9px] px-1.5 py-0.5 rounded font-bold">50%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <button className="border border-outline py-2 text-[10px] font-label-caps hover:bg-primary hover:text-white transition-all">LIHAT TEMA</button>
                    <button className="bg-primary text-white py-2 text-[10px] font-label-caps hover:bg-sage-deep transition-all">PILIH TEMA</button>
                  </div>
                </div>
              </div> */}
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
              <div className="bg-paper-white p-10 rounded-2xl premium-shadow border-t-4 border-gold-leaf relative transition-transform">
                <div className="mb-8">
                  <h3 className="font-display-lg text-headline-sm text-primary mb-2">Style Reguler</h3>
                  <p className="text-on-surface-variant text-xs line-through">Rp 250.000</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-lg text-4xl text-primary">Rp 99.000</span>
                    <span className="bg-red-100 text-red-700 text-[10px] px-2 py-0.5 rounded font-bold uppercase">40% Off</span>
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
              <div className="bg-paper-white p-10 rounded-2xl premium-shadow border-t-4 border-primary relative transition-transform  z-10 ">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-4 py-1 rounded-full font-bold">BEST SELLER</div>
                <div className="mb-8">
                  <h3 className="font-display-lg text-headline-sm text-primary mb-2">Style Game</h3>
                  <p className="text-on-surface-variant text-xs line-through">Rp 689.000</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-lg text-4xl text-primary">Rp 250.000</span>
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
              <div className="bg-paper-white p-10 rounded-2xl premium-shadow border-t-4 border-gold-leaf relative transition-transform">
                <div className="mb-8">
                  <h3 className="font-display-lg text-headline-sm text-primary mb-2">Premium Full Akses</h3>
                  <p className="text-on-surface-variant text-xs line-through">Rp 889.000</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display-lg text-4xl text-primary">Rp 449.000</span>
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
                src="/logo.png"
              />
              <p className="font-body-md text-on-surface-variant">
                Youvitation adalah platform untuk membuat website undangan digital dengan layanan lengkap. Solusi impian untuk momen spesial Anda.
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
                  <span className="material-symbols-outlined text-sm mt-1">call</span> 0823 2932 2353
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm mt-1">mail</span> youvitation@gmail.com
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm mt-1">location_on</span> Purwokerto, Banyumas, Jawa Tengah
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
        <button
          onClick={() => { setOrderModal({ name: 'Custom/Belum Memilih', price: 'Konsultasi Admin' }); setOrderForm({ name: '', phone: '' }); }}
          className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 z-50"
        >
          <FaWhatsapp size={32} />
        </button>

        {/* Order Modal */}
        {orderModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" id="orderModal">
            <div className="absolute inset-0 bg-sage-deep/80 backdrop-blur-sm" onClick={() => setOrderModal(null)}></div>
            <div className="relative bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl transform transition-all flex flex-col max-h-[90vh]">
              <div className="bg-primary p-6 text-center text-white relative shrink-0">
                <button
                  className="absolute top-4 right-4 text-white/60 hover:text-white"
                  onClick={() => setOrderModal(null)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
                <h2 className="font-display-lg text-2xl">Form Pemesanan</h2>
                <p className="text-white/80 text-sm">Lengkapi data untuk memesan tema</p>
              </div>
              <div className="p-6 bg-paper-white overflow-y-auto">
                <form onSubmit={handleOrder} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-label-caps text-on-surface-variant mb-1 uppercase">Tema Pilihan</label>
                    <select
                      value={orderModal.name}
                      onChange={(e) => {
                        const newName = e.target.value;
                        let newPrice = 'Rp 250.000';
                        if (newName === 'Custom/Belum Memilih') newPrice = 'Konsultasi Admin';
                        setOrderModal({ ...orderModal, name: newName, price: newPrice });
                      }}
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-sm text-on-surface font-semibold focus:outline-none"
                    >
                      <option value="Custom/Belum Memilih">Custom / Belum Memilih</option>
                      <option value="Japan Theme">Japan Theme</option>
                      <option value="Jawa Theme">Jawa Theme</option>
                      <option value="Chinese Theme">Chinese Theme</option>
                      <option value="Bali Theme">Bali Theme</option>
                      <option value="Korea Theme">Korea Theme</option>
                      <option value="Aceh Theme">Aceh Theme</option>
                      <option value="Forest Theme">Forest Theme</option>
                      <option value="Floral - 07">Floral - 07</option>
                      <option value="Luxury - 02">Luxury - 02</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-label-caps text-on-surface-variant mb-1 uppercase">Harga Tema</label>
                    <input type="text" readOnly value={orderModal.price} className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 text-sm text-primary font-bold focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-label-caps text-on-surface-variant mb-1 uppercase">Nama Lengkap</label>
                    <input type="text" required placeholder="Masukkan nama lengkap Anda" value={orderForm.name} onChange={(e) => setOrderForm({...orderForm, name: e.target.value})} className="w-full border border-outline rounded-lg p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-label-caps text-on-surface-variant mb-1 uppercase">Nomor WhatsApp</label>
                    <input type="tel" required placeholder="Contoh: 08123456789" value={orderForm.phone} onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})} className="w-full border border-outline rounded-lg p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full bg-[#25D366] text-white py-4 rounded-xl font-label-caps text-label-caps hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2 shadow-lg">
                      <span className="material-symbols-outlined text-xl">send</span>
                      PESAN VIA WHATSAPP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}