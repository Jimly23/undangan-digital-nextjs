import Image from "next/image";
import { ElementBawahSimpel } from "../elements/ElementBawahSimpel";

export default function Countdown() {
  return (
    <div id="coundown" className="relative w-full h-[510px] overflow-hidden">
      <Image src="/assets/themes/royal-garden/bg-gunung.webp" alt="bg-mempelai" width={1280} height={720} className="w-full h-full object-cover absolute inset-0 -z-10" />
      <div className="w-full h-full bg-[#384233] opacity-80"></div>
      <div className="absolute z-[99] left-0 right-0 bottom-0">
        <img src="/assets/themes/royal-garden/gerbang.png" alt="gerbang" className="w-full h-auto block" />
        <ElementBawahSimpel />
        <div className="kotak absolute inset-0">
          <p data-aos="zoom-in-up" className="text-center mt-[35%] w-[50%] mx-auto text-[12px]">Kami akan menikah,
            dan kami ingin Anda menjadi bagian dari hari istimewa kami!</p>

          {/* Countdown Timer */}
          <div data-aos="zoom-in-up" className="flex gap-3 mt-4 justify-center">
            {[
              { value: "00", label: "Hari" },
              { value: "00", label: "Jam" },
              { value: "00", label: "Menit" },
              { value: "00", label: "Detik" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-white text-2xl font-bold leading-none">{item.value}</span>
                <span className="text-white text-[10px] mt-1">{item.label}</span>
              </div>
            ))}
          </div>
          <p data-aos="zoom-in-up" className="text-white text-sm mt-4 text-center">Sabtu, 18 Februari 2024</p>
          <button data-aos="zoom-in-up" className="mt-3 mx-auto flex items-center gap-2 bg-[#D2AF6F] text-white text-xs py-2 px-4 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Save The Date
          </button>
        </div>
      </div>
    </div>
  );
}
