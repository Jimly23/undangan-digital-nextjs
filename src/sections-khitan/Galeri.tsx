import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Template from "./Template";

// 1. Perbarui interface props agar menerima array foto dari luar
interface GaleriPopupProps {
  isOpen: boolean;
  onClose: () => void;
  fotoGallery: string[]; // Menerima array berisi URL string foto, contoh: ["https://...", "https://..."]
  warnaBg: string;
  warnaBorder: string;
}

export default function Galeri({ isOpen, onClose, fotoGallery = [], warnaBg, warnaBorder }: GaleriPopupProps) {
  // Jika popup tidak aktif, jangan render apapun
  if (!isOpen) return null;

  return (
    <Template isOpen={isOpen} onClose={onClose} warnaBg={warnaBg} warnaBorder={warnaBorder} title="Galeri">
      {/* Teks Deskripsi */}
      <p className="text-center font-sans text-sm text-[#4A6B6C] px-4 leading-relaxed mb-5">
        Dengan rasa syukur kepada Allah SWT, kami mengabadikan setiap momen penuh berkah dalam perjalanan menuju hari khitanan ananda tercinta.
      </p>

      {/* Kondisi jika array memiliki minimal 1 foto (Foto Utama) */}
      {fotoGallery.length > 0 && (
        <div className="w-full aspect-[16/10] mb-5 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 shrink-0">
          <img
            src={fotoGallery[0]}
            alt="Foto Utama Galeri"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Grid Foto Tambahan */}
      {fotoGallery.length > 1 && (
        <div className="grid grid-cols-2 gap-3 w-full">
          {/* Loop dimulai dari indeks ke-1 karena indeks ke-0 sudah dipakai untuk foto utama */}
          {fotoGallery.slice(1).map((srcUrl, index) => (
            <div 
              key={index} 
              className="w-full aspect-square rounded-2xl overflow-hidden relative shadow-sm border border-gray-100"
            >
              <img
                src={srcUrl}
                alt={`Galeri foto tambahan ke-${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </Template>
  );
}