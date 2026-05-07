import Image from "next/image";
import { ElementAtas } from "../elements/ElementAtas";
import { ElementBawah } from "../elements/ElementBawah";
import { CardMempelai } from "../elements/CardMempelai";
import { CardAkad } from "../elements/CardAkad";

export default function Galeri() {
  return (
    <div id="galery" className="relative min-h-screen pb-10 overflow-hidden">
      <ElementAtas />
      <Image src="/assets/themes/royal-garden/bg-polos.webp" alt="bg-mempelai" width={1280} height={720} className="w-full h-full object-cover absolute inset-0 -z-10" />

      {/* Title */}
      <h4 className="text-center pt-36 pb-6 text-2xl font-bold tracking-widest" style={{ fontFamily: 'serif' }}>OUR GALLERY</h4>

      {/* Gallery Grid */}
      <div className="px-3 flex flex-col gap-2">
        {/* Row 1: Featured large image */}
        <div className="w-full h-[250px] overflow-hidden rounded-md">
          <img src="/assets/themes/royal-garden/bg-gunung.webp" alt="gallery-1" className="w-full h-full object-cover" />
        </div>

        {/* Row 2: 2 images */}
        <div className="flex gap-2">
          <div className="w-1/2 h-[150px] overflow-hidden rounded-md">
            <img src="/assets/themes/royal-garden/bg-gunung.webp" alt="gallery-2" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 h-[150px] overflow-hidden rounded-md">
            <img src="/assets/themes/royal-garden/bg-gunung.webp" alt="gallery-3" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Row 3: 2 images */}
        <div className="flex gap-2">
          <div className="w-1/2 h-[150px] overflow-hidden rounded-md">
            <img src="/assets/themes/royal-garden/bg-gunung.webp" alt="gallery-4" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 h-[150px] overflow-hidden rounded-md">
            <img src="/assets/themes/royal-garden/bg-gunung.webp" alt="gallery-5" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Row 4: 3 images */}
        <div className="w-full h-[250px] overflow-hidden rounded-md">
          <img src="/assets/themes/royal-garden/bg-gunung.webp" alt="gallery-1" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
