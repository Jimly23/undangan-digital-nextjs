import Image from "next/image";
import { ElementAtas } from "../elements/ElementAtas";
import { ElementBawah } from "../elements/ElementBawah";

export default function Hero() {
  return (
    <div id="hero" className="h-screen relative overflow-hidden">
      <Image src="/assets/themes/royal-garden/bg-gunung.webp" alt="bg-gunung" width={1280} height={720} className="w-full h-screen" />
      <Image src="/assets/themes/royal-garden/daunatastengah.webp" alt="ornamen-atas" width={1280} height={720} className="absolute top-0 left-0 right-0" />
      <ElementAtas />
      <ElementBawah />

      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
        <h5 data-aos="zoom-in-up" className="text-white text-center text-lg mb-2">THE WEDDING OF</h5>
        <div id="trigger-bingkai" data-aos="zoom-in-up" className="relative flex flex-col items-center justify-center mx-auto w-[180px]">
          <Image src="/assets/themes/royal-garden/bingkai.png" alt="bingkai" width={180} height={180} className="mb-5 relative" />
          <div className="w-[90%] h-[86%] bg-amber-300 absolute rounded-tl-[1000px] rounded-tr-[1000px] rounded-bl-[1000px] rounded-br-[1000px] top-[9px] left-[9.4px]"></div>
        </div>
        <h5 data-aos="zoom-in-up" data-aos-delay={100} data-aos-anchor="#trigger-bingkai" className="text-white text-center text-2xl mb-2">ADELIA & REZA</h5>
        <h5 data-aos="zoom-in-up" data-aos-delay={200} data-aos-anchor="#trigger-bingkai" className="text-white text-center mb-5">Sabtu, 18 Februari 2026</h5>
        <button data-aos="zoom-in-up" data-aos-delay={300} data-aos-anchor="#trigger-bingkai" className="bg-[#D2AF6F] text-white py-2 px-5 rounded-full cursor-pointer mx-auto block">Buka Undangan</button>
      </div>
    </div>
  );
}
