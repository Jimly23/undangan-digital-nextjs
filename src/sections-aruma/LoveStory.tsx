import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Template from "./Template";

interface LoveStoryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoveStory({ isOpen, onClose }: LoveStoryPopupProps) {
  if (!isOpen) return null;

  return (
    <Template isOpen={isOpen} onClose={onClose} title="Love Story">
      <div className="w-full bg-white rounded-3xl border-2 border-[#00C2CB] p-6 flex flex-col relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)] mb-5">
        <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />
        <div className="z-10">
          <h3 className="font-sans font-bold tracking-widest text-[#1A4345] text-xs md:text-sm uppercase leading-snug">
            AGUSTUS 2019 – AWAL YANG TAK DISANGKA
          </h3>
          <hr className="border-t border-[#00C2CB]/30 my-3 w-full" />
        </div>
        <p className="font-serif text-[#1A4A4D] text-sm md:text-base leading-relaxed text-justify indent-6 z-10">
          Tanpa pernah direncanakan, langkah kami dipertemukan di ruang kelas dan diskusi kelompok. Dari obrolan ringan yang sederhana, tumbuh rasa ingin tahu yang perlahan menjelma menjadi perhatian. Saat itu kami belum tahu, benih kecil inilah yang kelak menjadi cerita besar.
        </p>
      </div>
      <div className="w-full bg-white rounded-3xl border-2 border-[#00C2CB] p-6 flex flex-col relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)] mb-5">
        <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />
        <div className="z-10">
          <h3 className="font-sans font-bold tracking-widest text-[#1A4345] text-xs md:text-sm uppercase leading-snug">
            AGUSTUS 2019 – AWAL YANG TAK DISANGKA
          </h3>
          <hr className="border-t border-[#00C2CB]/30 my-3 w-full" />
        </div>
        <p className="font-serif text-[#1A4A4D] text-sm md:text-base leading-relaxed text-justify indent-6 z-10">
          Tanpa pernah direncanakan, langkah kami dipertemukan di ruang kelas dan diskusi kelompok. Dari obrolan ringan yang sederhana, tumbuh rasa ingin tahu yang perlahan menjelma menjadi perhatian. Saat itu kami belum tahu, benih kecil inilah yang kelak menjadi cerita besar.
        </p>
      </div>
      <div className="w-full bg-white rounded-3xl border-2 border-[#00C2CB] p-6 flex flex-col relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)] mb-5">
        <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />
        <div className="z-10">
          <h3 className="font-sans font-bold tracking-widest text-[#1A4345] text-xs md:text-sm uppercase leading-snug">
            AGUSTUS 2019 – AWAL YANG TAK DISANGKA
          </h3>
          <hr className="border-t border-[#00C2CB]/30 my-3 w-full" />
        </div>
        <p className="font-serif text-[#1A4A4D] text-sm md:text-base leading-relaxed text-justify indent-6 z-10">
          Tanpa pernah direncanakan, langkah kami dipertemukan di ruang kelas dan diskusi kelompok. Dari obrolan ringan yang sederhana, tumbuh rasa ingin tahu yang perlahan menjelma menjadi perhatian. Saat itu kami belum tahu, benih kecil inilah yang kelak menjadi cerita besar.
        </p>
      </div>
    </Template>
  );
}