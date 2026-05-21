import { ArrowLeft, X } from "lucide-react";
import React from "react";

interface TemplatePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string; // Menambahkan custom title agar lebih fleksibel
  children: React.ReactNode; // Menambahkan tipe data children
}

export default function Template({ isOpen, onClose, title = "Judul Popup", children }: TemplatePopupProps) {
  // Jika popup tidak aktif, jangan render apapun
  if (!isOpen) return null;

  return (
    // 1. Overlay Latar Belakang (Transparan Gelap)
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      
      {/* 2. Container Utama Window */}
      <div className="w-full max-w-[370px] h-auto max-h-[90vh] bg-white rounded-2xl border border-black flex flex-col overflow-hidden shadow-lg">
        
        {/* 3. Top Mac-Style Window Bar (Pink) */}
        <div className="w-full bg-[#e1b87e] border-b border-black p-3 flex items-center justify-between gap-2 shrink-0">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black" />
          </div>
          <div className="flex-1 max-w-[240px] bg-white border border-black rounded-md py-0.5 px-3 text-center text-[10px] text-gray-500 font-mono select-none overflow-hidden text-ellipsis whitespace-nowrap">
            Youvitation.net
          </div>
          <div className="w-12"></div>
        </div>

        {/* 4. Header Internal Popup */}
        <div className="w-full bg-white border-b border-gray-100 px-4 py-4 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition-colors"
            aria-label="Kembali"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          {/* Judul dinamis menggunakan properti title */}
          <h2 className="text-xl font-serif text-[#1D4D4F] font-medium tracking-wide">
            {title}
          </h2>
          
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 5. Area Konten Ber-scroll */}
        <div className="flex-1 overflow-y-auto p-4 bg-white pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {children}
        </div>
      </div>
    </div>
  );
}