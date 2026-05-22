import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Template from "./Template";

interface GiftPopupProps {
  isOpen: boolean;
  onClose: () => void;
  icon: string;
  warnaBg: string;
  warnaBorder: string;
}

export default function Gift({ isOpen, onClose, icon, warnaBg, warnaBorder }: GiftPopupProps) {
  // Jika popup tidak aktif, jangan render apapun
  if (!isOpen) return null;
  return (
    <Template isOpen={isOpen} onClose={onClose} warnaBg={warnaBg} warnaBorder={warnaBorder} title="Gift">
      <div className="relative w-44 h-44 flex items-center justify-center  mb-4 mx-auto">
            <Image
              src={icon}
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