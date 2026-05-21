import React from 'react';
import { MessageSquare, Users } from 'lucide-react';
import Template from '../sections-aruma-jawa/Template';

interface MessagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalMessages?: number; // Opsional jika ingin passing jumlah data dinamis
}

export default function MessagesModal({ isOpen, onClose, totalMessages = 0 }: MessagesModalProps) {
  // Cegah rendering jika modal dalam kondisi tertutup
  if (!isOpen) return null;

  return (
    <Template isOpen={isOpen} onClose={onClose} title="Semua Pesan">
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
    </Template>
  );
}