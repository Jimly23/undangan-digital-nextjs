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
    <Template isOpen={isOpen} onClose={onClose} warnaBg={warnaBg} warnaBorder={warnaBorder} title="About Us">
      <section className="w-full flex flex-col items-center justify-center relative mb-2">
          <p className="text-center text-[#557577] text-xs md:text-sm font-medium px-4 leading-relaxed mb-4">
            Dua pribadi yang berbeda, tapi saling melengkapi dalam satu cerita
          </p>
          <div style={{ borderColor: `${warnaBg}` }} className="w-full bg-white rounded-3xl border-2  p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)]">
            <div style={{ borderColor: `${warnaBg}80` }} className="absolute inset-2 border border-dashed rounded-2xl pointer-events-none" />

            <p className="text-center font-serif italic text-sm md:text-base text-[#1A4A4D] leading-loose px-2 z-10">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa
              tenteram di sampingnya, dan dijadikan-Nya di antaramu rasa kasih
              dan sayang."
            </p>

            <p className="text-center font-sans font-bold text-xs md:text-sm text-[#1A4345] tracking-wider mt-4 z-10 uppercase">
              — Ar-Rum: 21
            </p>
          </div>
        </section>
        <section style={{ borderColor: `${warnaBg}` }} className="w-full bg-white rounded-3xl border-2  p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)] mb-2">
          <div style={{ borderColor: `${warnaBg}80` }} className="absolute inset-2 border border-dashed rounded-2xl pointer-events-none" />
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm z-10">
            <Image
              src={fotoWanita}
              alt="Foto Mempelai Wanita"
              fill
              priority
              sizes="(max-width:768px) 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center mt-5 mb-4 z-10 text-center">
            <span className="text-[#1A4345] font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase relative pb-1">
              THE BRIDE
              <span style={{ backgroundColor: `${warnaBg}` }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px]" />
            </span>
            <h2 className="font-bold text-xl md:text-2xl text-[#1A4345] tracking-wide mt-3">
              {namaWanita}
            </h2>
            <p className="text-[#557577] text-xs md:text-sm font-medium mt-2 px-4 leading-relaxed"> 
              Putri dari Bapak {ayahWanita} dan Ibu {ibuWanita}
            </p>
          </div>
          <a
            href={`https://instagram.com/${instagramWanita}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: `${warnaBg}`, borderColor: `${warnaBorder}` }}
            className="h-8 px-5 text-black font-bold text-xs tracking-wide rounded-full border  shadow-[0_2px_8px_rgba(0,194,203,0.2)] flex items-center justify-center transition active:scale-95 z-10 mb-2"
          >
            @{instagramWanita}
          </a>
        </section>
        <section style={{ borderColor: `${warnaBg}` }} className="w-full bg-white rounded-3xl border-2  p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)] mb-2">
          <div style={{ borderColor: `${warnaBg}80` }} className="absolute inset-2 border border-dashed rounded-2xl pointer-events-none" />
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm z-10">
            <Image
              src={fotoPria}
              alt="Foto Mempelai Pria"
              fill
              priority
              sizes="(max-width:768px) 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center mt-5 mb-4 z-10 text-center">
            <span className="text-[#1A4345] font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase relative pb-1">
              THE GROOM
              <span style={{ backgroundColor: `${warnaBg}` }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px]" />
            </span>
            <h2 className="font-bold text-xl md:text-2xl text-[#1A4345] tracking-wide mt-3">
              {namaPria}
            </h2>
            <p className="text-[#557577] text-xs md:text-sm font-medium mt-2 px-4 leading-relaxed">
              Putra dari Bapak {ayahPria} dan Ibu {ibuPria}
            </p>
          </div>
          <a
            href={`https://instagram.com/${instagramPria}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: `${warnaBg}`, borderColor: `${warnaBorder}` }}
            className="h-8 px-5 text-black font-bold text-xs tracking-wide rounded-full border  shadow-[0_2px_8px_rgba(0,194,203,0.2)] flex items-center justify-center transition active:scale-95 z-10 mb-2"
          >
            @{instagramPria}
          </a>
        </section>
    </Template>
  );
}