import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Template from "./Template";

interface GaleriPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Galeri({ isOpen, onClose }: GaleriPopupProps) {
  // Jika popup tidak aktif, jangan render apapun
  if (!isOpen) return null;

  const galleryPhotos = [
    { id: 1, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop" },
    { id: 2, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop" },
    { id: 3, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop" },
    { id: 4, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600&auto=format&fit=crop" },
    { id: 5, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <Template isOpen={isOpen} onClose={onClose} title="Galeri">
      {/* Teks Deskripsi */}
          <p className="text-center font-sans text-sm text-[#4A6B6C] px-4 leading-relaxed mb-5">
            Kumpulan momen indah perjalanan cinta kami yang ingin kami bagikan.
          </p>

          {/* Kondisi jika array memiliki minimal 1 foto (Foto Utama) */}
          {galleryPhotos.length > 0 && (
            <div className="w-full aspect-[16/10] mb-5 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 shrink-0">
              <Image
                src={galleryPhotos[0].src}
                alt="Foto Utama Pantai"
                fill
                sizes="(max-w-md) 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Grid Foto Tambahan */}
          {galleryPhotos.length > 1 && (
            <div className="grid grid-cols-2 gap-3 w-full">
              {galleryPhotos.slice(1).map((photo) => (
                <div 
                  key={photo.id} 
                  className="w-full aspect-square rounded-2xl overflow-hidden relative shadow-sm border border-gray-100"
                >
                  <Image
                    src={photo.src}
                    alt={`Galeri foto ${photo.id}`}
                    fill
                    sizes="(max-w-md) 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
    </Template>
  );
}