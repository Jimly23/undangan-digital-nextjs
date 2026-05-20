import React from 'react';
import { MessageSquare, Users } from 'lucide-react';

interface MessagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalMessages?: number; // Opsional jika ingin passing jumlah data dinamis
}

export default function MessagesModal({ isOpen, onClose, totalMessages = 0 }: MessagesModalProps) {
  // Cegah rendering jika modal dalam kondisi tertutup
  if (!isOpen) return null;

  return (
    // 1. BACKDROP OVERLAY
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      
      {/* 2. CONTAINER MODAL UTAMA */}
      <div className="w-[350px] bg-white rounded-3xl border-2 border-[#00C2CB] overflow-hidden shadow-2xl relative flex flex-col max-h-[85vh]">
        {/* Garis Putus-putus Dekoratif Bagian Dalam (Dashed Border) */}
        <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none z-0" />

        {/* ================= HEADER POPUP ================= */}
        <div className="w-full bg-[#9BF2F6]/40 border-b border-[#00C2CB]/30 p-4 flex items-center justify-center relative text-center z-10">
          <h2 className="font-sans font-bold text-[#1A4345] text-base md:text-lg tracking-wide">
            Semua Pesan
          </h2>

          {/* Tombol Close (X) di Pojok Kanan Atas */}
          <button
            onClick={onClose}
            className="absolute right-4 w-7 h-7 rounded-full border border-[#00C2CB]/60 bg-white hover:bg-[#9BF2F6] text-[#00C2CB] flex items-center justify-center transition active:scale-90 shadow-sm focus:outline-none"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ================= BODY KONTEN ================= */}
        <div className="p-5 flex flex-col items-center justify-between flex-1 z-10 relative text-center min-h-[320px]">
          
          {/* Teks Sub-Header Atas */}
          <div className="w-full">
            <p className="text-[#557577] text-xs font-medium leading-relaxed px-2">
              Kumpulan ucapan dan doa dari tamu undangan
            </p>

            {/* Pill Badge Indikator Jumlah Pesan */}
            <div className="w-full flex justify-center mt-3">
              <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full border border-dashed border-[#00C2CB] bg-[#E6F9FA]/60 text-[#1A4345] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                <Users size={12} className="text-[#00C2CB]" />
                <span>{totalMessages} Pesan</span>
              </div>
            </div>

            {/* Garis Pembatas Tipis */}
            <hr className="border-t border-[#00C2CB]/20 mt-4 w-full" />
          </div>

          {/* AREA TENGAH: EMPTY STATE (Belum Ada Pesan) */}
          <div className="flex flex-col items-center justify-center py-6 gap-3">
            {/* Ikon Bubble Chat Besar Transparan */}
            <div className="text-gray-300 dark:text-gray-200 p-2 drop-shadow-sm">
              <MessageSquare size={44} strokeWidth={1.5} className="opacity-40 text-[#557577]" />
            </div>
            
            {/* Teks Keterangan */}
            <p className="text-[#557577]/80 text-xs md:text-sm font-medium">
              Belum ada pesan yang tersedia
            </p>
          </div>

          {/* AREA BAWAH: FOOTER TEXT & NOTE */}
          <div className="w-full">
            {/* Garis Pembatas Bawah */}
            <hr className="border-t border-[#00C2CB]/20 mb-4 w-full" />
            
            <p className="text-[#557577] text-[11px] font-medium tracking-wide flex items-center justify-center gap-1">
              Terima kasih atas ucapan dan doa yang telah diberikan 
              <span role="img" aria-label="love-emoji" className="inline-block animate-pulse">💝</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}