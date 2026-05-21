import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Template from "./Template";

interface DresscodePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Dresscode({ isOpen, onClose }: DresscodePopupProps) {
  if (!isOpen) return null;

  return (
    <Template isOpen={isOpen} onClose={onClose} title="Dresscode">
      <div className="w-full bg-white rounded-3xl border-2 border-[#e1b87e] p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(0,194,203,0.1)]">
          <div className="absolute inset-2 border border-dashed border-[#e1b87e]/60 rounded-2xl pointer-events-none" />
          <div className="relative w-44 h-44 flex items-center justify-center drop-shadow-[0_0_15px_rgba(0,194,203,0.35)] mb-2 animate-custom-pulse">
            <Image
              src="/assets/themes/aruma-jepang/dresscode.webp"
              alt="Dresscode Illustration"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <p className="text-center text-[#557577] text-xs md:text-sm font-medium px-2 leading-relaxed mb-6 z-10">
            Kami akan sangat senang jika tamu undangan mengenakan pakaian dengan warna yang serasi untuk melengkapi tema pernikahan kami.
          </p>
          <div className="flex items-center justify-center gap-3 mb-6 z-10">
            <div className="w-14 h-14 rounded-full border-[2.5px] border-[#e1b87e] bg-[#DBC7B5] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center" />
            <div className="w-14 h-14 rounded-full border-[2.5px] border-[#e1b87e] bg-[#D2E4F1] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center" />
            <div className="w-14 h-14 rounded-full border-[2.5px] border-[#e1b87e] bg-[#F7F2EC] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center" />
            <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#e1b87e] bg-transparent flex items-center justify-center text-[#00C2CB]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </div>
          <hr className="border-t border-[#e1b87e]/20 w-full mb-4 z-10" />
          <p className="text-[#557577] text-xs font-bold tracking-wide flex items-center gap-1 z-10">
            Terima kasih atas perhatiannya! <span className="text-sm">✨</span>
          </p>
        </div>
    </Template>
  );
}