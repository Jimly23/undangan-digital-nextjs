import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Template from "./Template";

interface GiftPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Gift({ isOpen, onClose }: GiftPopupProps) {
  // Jika popup tidak aktif, jangan render apapun
  if (!isOpen) return null;
  return (
    <Template isOpen={isOpen} onClose={onClose} title="Gift">
      <div className="relative w-44 h-44 flex items-center justify-center drop-shadow-[0_0_15px_rgba(0,194,203,0.4)] mb-4 animate-custom-pulse mx-auto">
            <Image
              src="/assets/themes/aruma-jepang/gift.webp"
              alt="Gift Illustration"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          <p className="text-center font-serif italic text-base md:text-lg px-2 text-[#1A4A4D] leading-relaxed z-10">
            "Data hadiah belum ditambahkan"
          </p>
    </Template>
  );
}