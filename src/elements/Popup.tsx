import React from 'react';
import Image from 'next/image';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  // Jika state isOpen false, modal tidak akan dirender
  if (!isOpen) return null;

  // Data dummy untuk list menu di dalam ruangan interaktif
  const menuItems = [
    {
      id: 'about',
      title: 'Tentang Kami',
      desc: 'Lihat momen spesial kami sebagai pasangan yang sedang berbahagia.',
      icon: '/assets/themes/estella/about-us.webp', // Ganti dengan path ikon Anda
    },
    {
      id: 'dresscode',
      title: 'Busana & Nuansa',
      desc: 'Kenali warna pilihan kami agar kamu bisa tampil serasi di hari istimewa.',
      icon: '/assets/themes/estella/dresscode.webp',
    },
    {
      id: 'lovestory',
      title: 'Kisah Cinta Kami',
      desc: 'Ikuti kisah kami dari pertemuan pertama hingga jadi satu tujuan.',
      icon: '/assets/themes/estella/love-story.webp',
    },
    {
      id: 'gallery',
      title: 'Galeri Cerita Kami',
      desc: 'Kumpulan momen indah perjalanan cinta kami yang ingin kami bagikan.',
      icon: '/assets/themes/estella/gallery.webp',
    },
    {
      id: 'gift',
      title: 'Doa & Hadiah',
      desc: 'Mohon doa restu dan jika berkenan dapat memberikan hadiah.',
      icon: '/assets/themes/estella/gift.webp',
    },
    {
      id: 'date',
      title: 'Tanggal & Lokasi',
      desc: 'Informasi lengkap mengenai waktu dan tempat pelaksanaan acara.',
      icon: '/assets/themes/estella/date-venue.webp',
    },
    {
      id: 'rsvp',
      title: 'Konfirmasi Kehadiran',
      desc: 'Mohon kesediaan Bapak/Ibu/Saudara/i untuk memberikan konfirmasi kehadiran.',
      icon: '/assets/themes/estella/rsvp.webp',
    },
  ];

  return (
    // 1. BACKDROP OVERLAY (Latar belakang gelap transparan)
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      
      {/* 2. CONTAINER MODAL UTAMA (Lebar disesuaikan agar pas di dalam layout 380px Anda) */}
      <div className="w-[350px] bg-white rounded-3xl border-2 border-[#00C2CB] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
        {/* Garis Putus-putus Bagian Dalam (Dashed Border) */}
        <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none z-0" />

        {/* ================= HEADER POPUP ================= */}
        <div className="w-full bg-[#9BF2F6]/40 border-b border-[#00C2CB]/30 p-5 flex flex-col items-center justify-center relative text-center z-10 pt-6">
          <h2 className="font-sans font-bold text-[#1A4345] text-base md:text-lg leading-snug px-6">
            Selamat Datang di Ruangan Interaktif! 🎉
          </h2>

          {/* Tombol Close (X) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-7 h-7 rounded-full border border-[#00C2CB]/60 bg-white hover:bg-[#9BF2F6] text-[#00C2CB] flex items-center justify-center transition active:scale-90 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ================= BODY SCROLLABLE KONTEN ================= */}
        <div className="p-5 flex flex-col gap-4 overflow-y-auto z-10 relative custom-scrollbar pb-6">
          
          {/* Teks Deskripsi Pengantar */}
          <p className="text-center text-[#557577] text-xs font-medium leading-relaxed px-2 mb-1">
            Klik elemen-elemen di dalam ruangan ini untuk menemukan kejutan dan informasi penting seputar hari istimewa kami.
          </p>

          {/* MAP DATA ITEM MENU ROW */}
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                // Tambahkan fungsi navigasi atau action di sini jika di-klik
                console.log(`Menu ${item.id} diklik`);
              }}
              className="w-full bg-white border border-[#00C2CB]/60 rounded-2xl p-3 flex items-center gap-3 shadow-sm hover:border-[#00C2CB] hover:bg-[#E6F9FA]/30 transition text-left active:scale-[0.99] group"
            >
              {/* Box Wadah Ikon Mini (Rounded-xl dengan border hitam tipis sesuai gambar) */}
              <div className="w-16 h-16 rounded-xl border border-black/80 bg-[#E6F9FA] relative overflow-hidden flex-shrink-0 flex items-center justify-center p-1 shadow-sm">
                <div className="absolute inset-0.5 border border-dashed border-[#00C2CB]/40 rounded-lg pointer-events-none" />
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain transition group-hover:scale-105"
                />
              </div>

              {/* Detail Teks Konten Row */}
              <div className="flex flex-col flex-1 min-w-0 pr-1">
                <h4 className="font-sans font-bold text-[#1A4345] text-sm tracking-wide">
                  {item.title}
                </h4>
                <p className="text-[#557577] text-[11px] font-medium leading-normal mt-0.5 break-words">
                  {item.desc}
                </p>
              </div>
            </button>
          ))}

        </div>

      </div>
    </div>
  );
}