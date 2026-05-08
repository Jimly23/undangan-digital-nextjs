import Image from "next/image";
import { ElementAtas } from "../elements/ElementAtas";
import { ElementBawah } from "../elements/ElementBawah";



export default function Hero() {
  return (
    <div id="hero" className="h-[95vh] w-full relative overflow-hidden bg-gray-900">
  {/* Background Image - Menggunakan fill agar pas dengan h-dvh container */}
  <Image 
    src="/assets/themes/royal-garden/bg-gunung.webp" 
    alt="bg-gunung" 
    fill
    priority
    className="object-cover"
  />

  {/* Ornamen Atas */}
  <Image 
    src="/assets/themes/royal-garden/daunatastengah.webp" 
    alt="ornamen-atas" 
    width={1280} 
    height={720} 
    className="absolute top-0 left-0 right-0 w-full h-auto z-10" 
  />

  <ElementAtas />
  <ElementBawah />

  {/* Konten Tengah */}
  <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 z-20 px-4">
    <h5 data-aos="zoom-in-up" className="text-white text-center text-lg mb-2">
      THE WEDDING OF
    </h5>
    
    <div id="trigger-bingkai" data-aos="zoom-in-up" className="relative flex flex-col items-center justify-center mx-auto w-[150px] md:w-[180px]">
      <Image src="/assets/themes/royal-garden/bingkai.png" alt="bingkai" width={180} height={180} className="mb-5 relative z-10" />
      <div className="w-[90%] h-[86%] bg-amber-300 absolute rounded-full top-[9px]"></div>
    </div>

    <h5 
      data-aos="zoom-in-up" 
      data-aos-delay={100} 
      data-aos-anchor="#trigger-bingkai" 
      className="text-white text-center text-2xl md:text-3xl font-bold mb-2"
    >
      ADELIA & REZA
    </h5>
    
    <h5 
      data-aos="zoom-in-up" 
      data-aos-delay={200} 
      data-aos-anchor="#trigger-bingkai" 
      className="text-white text-center mb-6 text-sm md:text-base"
    >
      Sabtu, 18 Februari 2026
    </h5>
    
    <button
      data-aos="zoom-in-up"
      data-aos-delay={300}
      data-aos-anchor="#trigger-bingkai"
      className="bg-[#D2AF6F] hover:bg-[#b8955a] transition-colors text-white py-2.5 px-8 rounded-full cursor-pointer mx-auto block shadow-lg"
    >
      Buka Undangan
    </button>
  </div>
</div>
  );
}
