import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Template from "./Template";

interface DatePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Date({ isOpen, onClose }: DatePopupProps) {
  if (!isOpen) return null;

  return (
    <Template isOpen={isOpen} onClose={onClose} title="Date & Venue">
      <div className="w-full bg-white rounded-3xl border-2 border-[#00C2CB] p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(0,194,203,0.1)]">
        <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />
        <div className="text-center z-10 w-full">
          <h2 className="font-bold tracking-widest text-[#1A4345] text-sm md:text-base uppercase px-4 leading-relaxed">
            HITUNG MUNDUR MENUJU HARI BAHAGIA
          </h2>
          <hr className="border-t border-[#00C2CB]/30 my-4 mx-auto w-[85%]" />
          <p className="text-[#557577] font-medium text-sm mb-5">
            Kamis, 31 Desember 2026 - 02:00 PM
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 w-full z-10 px-1">
          <div className="bg-gradient-to-b from-[#EBFDFF] to-white border border-[#00C2CB]/40 rounded-xl p-2 flex flex-col items-center justify-center shadow-sm relative">
            <div className="absolute inset-0.5 border border-dashed border-[#00C2CB]/30 rounded-lg pointer-events-none" />
            <span className="font-bold text-xl text-[#1A4345]">224</span>
            <span className="text-[10px] font-bold tracking-wider text-[#557577] mt-0.5 uppercase">HARI</span>
          </div>
          <div className="bg-gradient-to-b from-[#EBFDFF] to-white border border-[#00C2CB]/40 rounded-xl p-2 flex flex-col items-center justify-center shadow-sm relative">
            <div className="absolute inset-0.5 border border-dashed border-[#00C2CB]/30 rounded-lg pointer-events-none" />
            <span className="font-bold text-xl text-[#1A4345]">21</span>
            <span className="text-[10px] font-bold tracking-wider text-[#557577] mt-0.5 uppercase">JAM</span>
          </div>
          <div className="bg-gradient-to-b from-[#EBFDFF] to-white border border-[#00C2CB]/40 rounded-xl p-2 flex flex-col items-center justify-center shadow-sm relative">
            <div className="absolute inset-0.5 border border-dashed border-[#00C2CB]/30 rounded-lg pointer-events-none" />
            <span className="font-bold text-xl text-[#1A4345]">41</span>
            <span className="text-[10px] font-bold tracking-wider text-[#557577] mt-0.5 uppercase">MENIT</span>
          </div>
          <div className="bg-gradient-to-b from-[#EBFDFF] to-white border border-[#00C2CB]/40 rounded-xl p-2 flex flex-col items-center justify-center shadow-sm relative">
            <div className="absolute inset-0.5 border border-dashed border-[#00C2CB]/30 rounded-lg pointer-events-none" />
            <span className="font-bold text-xl text-[#1A4345]">13</span>
            <span className="text-[10px] font-bold tracking-wider text-[#557577] mt-0.5 uppercase">DETIK</span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 items-center mt-2">
        <div className="w-full bg-white rounded-3xl border-2 border-[#00C2CB] p-3 relative shadow-[0_0_15px_rgba(0,194,203,0.1)]">
          <div className="absolute inset-1.5 border border-dashed border-[#00C2CB]/60 rounded-[18px] pointer-events-none" />
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://indonesiakaya.com/wp-content/uploads/2020/10/masjid_istiqlal_1200.jpg"
              alt="Lokasi Masjid Istiqlal"
              fill
              sizes="(max-w-md) 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-4 mb-2 bg-gradient-to-b from-[#EBFDFF] to-white border border-[#00C2CB]/40 rounded-2xl p-4 text-center relative mx-1">
            <div className="absolute inset-0.5 border border-dashed border-[#00C2CB]/30 rounded-xl pointer-events-none" />
            <h3 className="font-bold text-[#1A4345] text-base md:text-lg tracking-wide z-10 relative">
              Masjid Istiqlal
            </h3>
            <p className="text-[#557577] text-xs font-medium mt-1.5 leading-relaxed px-2 z-10 relative">
              Jl. Taman Wijaya Kusuma, Pasar Baru, Sawah Besar, Central Jakarta City
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 mt-1">
          <h2 className="font-bold tracking-widest text-[#1A4345] text-sm md:text-base uppercase">
            AKAD NIKAH
          </h2>
          <div className="w-full bg-white rounded-2xl border border-[#00C2CB]/50 overflow-hidden shadow-sm">
            <div className="w-full h-11 border-b border-[#00C2CB]/40 flex items-center justify-center bg-gradient-to-b from-white to-[#F0FEFF]">
              <p className="font-bold text-xs md:text-sm text-[#1A4345]">
                Kamis, 31 Desember 2026
              </p>
            </div>
            <div className="w-full h-11 flex items-center justify-center bg-gradient-to-b from-white to-[#F0FEFF]">
              <p className="font-bold text-xs md:text-sm text-[#1A4345]">
                02:00 PM - 04:00 PM
              </p>
            </div>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-11 bg-[#9BF2F6] hover:bg-[#00C2CB] text-[#1A4345] hover:text-white font-bold text-sm tracking-wide rounded-full border-2 border-[#00C2CB] shadow-[0_3px_10px_rgba(0,194,203,0.15)] flex items-center justify-center transition active:scale-98"
          >
            Buka di Google Maps
          </a>
        </div>
      </div>
    </Template>
  );
}