import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Template from "./Template";

interface DresscodePopupProps {
  isOpen: boolean;
  onClose: () => void;
  icon: string;
  warnaBg: string;
  warnaBorder: string;
  dresscodes?: { warnaHex: string, title?: string, deskripsi?: string }[];
}

export default function Dresscode({ isOpen, onClose, icon, warnaBg, warnaBorder, dresscodes }: DresscodePopupProps) {
  if (!isOpen) return null;

  return (
    <Template isOpen={isOpen} onClose={onClose} warnaBg={warnaBg} warnaBorder={warnaBorder} title="Dresscode">
      <div style={{ borderColor: `${warnaBg}` }} className="w-full bg-white rounded-3xl border-2  p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(0,194,203,0.1)]">
          <div style={{ borderColor: `${warnaBg}80` }} className="absolute inset-2 border border-dashed rounded-2xl pointer-events-none" />
          <div className="relative w-44 h-44 flex items-center justify-center mb-2">
            <Image
              src={icon}
              alt="Dresscode Illustration"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <p className="text-center text-[#557577] text-xs md:text-sm font-medium px-2 leading-relaxed mb-6 z-10">
            Kami akan sangat senang jika tamu undangan mengenakan pakaian dengan warna yang serasi untuk melengkapi tema pernikahan kami.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 z-10 w-full px-4">
            {dresscodes && dresscodes.length > 0 ? (
              dresscodes.map((dc, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div style={{ borderColor: `${warnaBg}`, backgroundColor: dc.warnaHex || '#DBC7B5' }} className="w-14 h-14 rounded-full border-[2.5px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center" title={dc.title || ''} />
                  {dc.title && <span className="text-[10px] text-gray-600 font-medium z-10">{dc.title}</span>}
                </div>
              ))
            ) : (
                <>
                  <div style={{ borderColor: `${warnaBg}` }} className="w-14 h-14 rounded-full border-[2.5px] bg-[#DBC7B5] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center" />
                  <div style={{ borderColor: `${warnaBg}` }} className="w-14 h-14 rounded-full border-[2.5px] bg-[#D2E4F1] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center" />
                  <div style={{ borderColor: `${warnaBg}` }} className="w-14 h-14 rounded-full border-[2.5px] bg-[#F7F2EC] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center" />
                </>
            )}
            
            <div style={{ borderColor: `${warnaBg}` }} className="w-14 h-14 rounded-full border-2 border-dashed bg-transparent flex items-center justify-center relative">
              <svg style={{ color: `${warnaBg}` }} className="w-6 h-6 z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </div>
          <hr className="border-t border-[#00C2CB]/20 w-full mb-4 z-10" />
          <p className="text-[#557577] text-xs font-bold tracking-wide flex items-center gap-1 z-10">
            Terima kasih atas perhatiannya! <span className="text-sm">✨</span>
          </p>
        </div>
    </Template>
  );
}