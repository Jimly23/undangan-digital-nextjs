import React from 'react';
import Image from 'next/image';
import Template from '../sections-mahara/Template';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  warnaBg: string;
  warnaBorder: string;
  imgIcon?: Record<string, string>;
  onMenuClick?: (id: string) => void;
}

export default function Popup({ isOpen, onClose, warnaBg, warnaBorder, imgIcon, onMenuClick }: PopupProps) {
  // Jika state isOpen false, modal tidak akan dirender
  if (!isOpen) return null;

  // Data dummy untuk list menu di dalam ruangan interaktif
  const menuItems = [
    {
      id: 'about',
      title: 'Tentang Kami',
      desc: 'Lihat momen spesial kami sebagai pasangan yang sedang berbahagia.',
      icon: imgIcon?.about || '/assets/themes/mahara-jepang/about.webp', // Ganti dengan path ikon Anda
    },
    {
      id: 'dresscode',
      title: 'Busana & Nuansa',
      desc: 'Kenali warna pilihan kami agar kamu bisa tampil serasi di hari istimewa.',
      icon: imgIcon?.dresscode || '/assets/themes/mahara-jepang/dresscode.webp',
    },
    {
      id: 'lovestory',
      title: 'Kisah Cinta Kami',
      desc: 'Ikuti kisah kami dari pertemuan pertama hingga jadi satu tujuan.',
      icon: imgIcon?.loveStory || '/assets/themes/mahara-jepang/love-story.webp',
    },
    {
      id: 'gallery',
      title: 'Galeri Cerita Kami',
      desc: 'Kumpulan momen indah perjalanan cinta kami yang ingin kami bagikan.',
      icon: imgIcon?.gallery || '/assets/themes/mahara-jepang/gallery.webp',
    },
    {
      id: 'gift',
      title: 'Doa & Hadiah',
      desc: 'Mohon doa restu dan jika berkenan dapat memberikan hadiah.',
      icon: imgIcon?.gift || '/assets/themes/mahara-jepang/gift.webp',
    },
    {
      id: 'date',
      title: 'Tanggal & Lokasi',
      desc: 'Informasi lengkap mengenai waktu dan tempat pelaksanaan acara.',
      icon: imgIcon?.date || '/assets/themes/mahara-jepang/date.webp',
    },
    {
      id: 'rsvp',
      title: 'Konfirmasi Kehadiran',
      desc: 'Mohon kesediaan Bapak/Ibu/Saudara/i untuk memberikan konfirmasi kehadiran.',
      icon: imgIcon?.rsvp || '/assets/themes/mahara-jepang/rsvp.webp',
    },
  ];

  return (
    <Template isOpen={isOpen} onClose={onClose} warnaBg={warnaBg} warnaBorder={warnaBorder} title="Ruangan Interaktif">
      <p className="text-center mb-3 text-[#557577] text-xs font-medium leading-relaxed px-2">
        Klik elemen-elemen di dalam ruangan ini untuk menemukan kejutan dan informasi penting seputar hari istimewa kami.
      </p>

      {/* MAP DATA ITEM MENU ROW */}
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            if (onMenuClick) {
              onMenuClick(item.id);
            }
          }}
          className="w-full mb-3 bg-white border rounded-2xl p-3 flex items-center gap-3 shadow-sm transition text-left active:scale-[0.99] group"
          style={{ borderColor: warnaBg }}
        >
          {/* Box Wadah Ikon Mini (Rounded-xl dengan border hitam tipis sesuai gambar) */}
          <div style={{ borderColor: warnaBg }} className="w-16 h-16 rounded-xl border relative overflow-hidden flex-shrink-0 flex items-center justify-center p-1 shadow-sm">
            <div style={{ borderColor: `${warnaBg}80` }} className="absolute inset-0.5 border border-dashed rounded-lg pointer-events-none" />
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
    </Template>
  );
}