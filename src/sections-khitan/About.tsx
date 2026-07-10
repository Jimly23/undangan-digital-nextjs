import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Template from "./Template";

interface AboutPopupProps {
  isOpen: boolean;
  onClose: () => void;
  fotoWanita: string;
  fotoPria: string;
  namaWanita: string;
  namaPria: string;
  ayahWanita: string;
  ibuWanita: string;
  ayahPria: string;
  ibuPria: string;
  instagramWanita: string;
  instagramPria: string;
  warnaBg: string;
  warnaBorder: string;
}

export default function About({ isOpen, onClose, fotoWanita, fotoPria, namaWanita, namaPria, ayahWanita, ibuWanita, ayahPria, ibuPria, instagramWanita, instagramPria, warnaBg, warnaBorder }: AboutPopupProps) {
  if (!isOpen) return null;

  return (
    <Template isOpen={isOpen} onClose={onClose} warnaBg={warnaBg} warnaBorder={warnaBorder} title="Saya">
      <section className="w-full flex flex-col items-center justify-center relative mb-2">
          <p className="text-center text-[#557577] text-lg md:text-xl font-medium px-4 leading-relaxed mb-4">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <p className="text-center text-[#557577] text-xs md:text-sm font-medium px-4 leading-relaxed mb-4">
            Dengan memohon rahmat dan ridho Allah SWT, insyaallah kami akan menyelenggarakan acara khitan
          </p>
        </section>
        <section style={{ borderColor: `${warnaBg}` }} className="w-full bg-white rounded-3xl border-2  p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)] mb-2">
          <div style={{ borderColor: `${warnaBg}80` }} className="absolute inset-2 border border-dashed rounded-2xl pointer-events-none" />
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm z-10">
            <img
              src={fotoWanita}
              alt="Foto Mempelai Wanita"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center mt-5 mb-4 z-10 text-center">
            <h2 className="font-bold text-xl md:text-2xl text-[#1A4345] tracking-wide mt-3">
              {namaWanita}
            </h2>
            <p className="text-[#557577] text-xs md:text-sm font-medium mt-2 px-4 leading-relaxed"> 
              Putra dari Bapak {ayahWanita} dan Ibu {ibuWanita}
            </p>
          </div>
        </section>
    </Template>
  );
}