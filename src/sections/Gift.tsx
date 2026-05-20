import { ArrowLeft, Info } from "lucide-react";
import Image from "next/image";
import Navbar from "../elements/Navbar";

export default function Gift() {

  return (
    <div className="w-[380px] flex flex-col gap-4 relative mx-auto bg-[#E6F9FA] px-4 py-4 font-sans text-[#1D4D4F]">

      <Navbar title="Gift"/>
      <div className="w-full bg-gradient-to-b from-[#CCF4F6] to-white rounded-3xl border-2 border-[#00C2CB] p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />
        <div className="relative w-44 h-44 flex items-center justify-center drop-shadow-[0_0_15px_rgba(0,194,203,0.4)] mb-4 animate-custom-pulse">
          <Image
            src="/assets/themes/estella/gift.webp"
            alt="Gift Illustration"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <p className="text-center font-serif italic text-base md:text-lg px-2 text-[#1A4A4D] leading-relaxed z-10">
          "Data hadiah belum ditambahkan"
        </p>
      </div>
    </div>
  );
}