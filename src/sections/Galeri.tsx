import { ArrowLeft, Info } from "lucide-react";
import Image from "next/image";
import Navbar from "../elements/Navbar";

export default function Galeri() {
  const galleryPhotos = [
    { id: 1, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop" },
    { id: 2, src: "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=600&auto=format&fit=crop" },
    { id: 3, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <div className="w-[380px] flex flex-col gap-4 relative mx-auto bg-[#E6F9FA] px-4 py-4 font-sans text-[#1D4D4F]">
      <Navbar title="Gallery" />
      <div className="w-full bg-gradient-to-b from-[#CCF4F6] to-white rounded-3xl border-2 border-[#00C2CB] p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />
        <div className="relative w-44 h-44 flex items-center justify-center drop-shadow-[0_0_15px_rgba(0,194,203,0.4)] mb-4 animate-custom-pulse">
          <Image
            src="/assets/themes/estella/date-venue.webp"
            alt="Date Venue Illustration"
            width={176}
            height={176}
            className="object-contain"
          />
        </div>

        <p className="text-center font-serif italic text-base md:text-lg px-2 text-[#1A4A4D] leading-relaxed z-10">
          "Kumpulan momen indah perjalanan cinta kami yang ingin kami bagikan."
        </p>
      </div>

      <div className="w-full bg-white rounded-3xl border-2 border-[#00C2CB] p-3 relative">
        <div className="absolute inset-1.5 border border-dashed border-[#00C2CB]/60 rounded-[18px] pointer-events-none" />

        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-inner">
          <Image
            src={galleryPhotos[0].src}
            alt="Foto Utama Pantai"
            fill
            sizes="(max-w-md) 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full">
        {galleryPhotos.slice(1).map((photo) => (
          <div key={photo.id} className="bg-white rounded-3xl border-2 border-[#00C2CB] p-2.5 relative">
            <div className="absolute inset-1 border border-dashed border-[#00C2CB]/60 rounded-[20px] pointer-events-none" />

            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src={photo.src}
                alt={`Galeri foto ${photo.id}`}
                fill
                sizes="(max-w-md) 50vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}