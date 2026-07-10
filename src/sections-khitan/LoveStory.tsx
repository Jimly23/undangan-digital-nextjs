import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Template from "./Template";

// 1. Definisikan tipe untuk tiap item cerita
interface StoryItem {
  title: string;
  description: string;
}

// 2. Masukkan array dari StoryItem ke dalam interface props komponen
interface LoveStoryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  stories: StoryItem[]; // Menerima array objek cerita dari luar
  warnaBg: string;
  warnaBorder: string;
}

export default function LoveStory({ isOpen, onClose, stories = [], warnaBg, warnaBorder }: LoveStoryPopupProps) {
  if (!isOpen) return null;

  return (
    <Template isOpen={isOpen} onClose={onClose} warnaBg={warnaBg} warnaBorder={warnaBorder} title="Love Story">
      {/* Jika array cerita kosong, berikan teks fallback sederhana */}
      {stories.length === 0 && (
        <p className="text-center font-sans text-sm text-[#4A6B6C] px-4 py-8">
          Belum ada cerita yang ditambahkan.
        </p>
      )}

      {/* Melakukan looping untuk merender setiap cerita secara dinamis */}
      {stories.map((story, index) => (
        <div 
          key={index} 
          className="w-full bg-white rounded-3xl border-2 p-6 flex flex-col relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)] mb-5 last:mb-0"
          style={{ borderColor: warnaBg }}
        >
          <div style={{ borderColor: warnaBg }} className="absolute inset-2 border border-dashed rounded-2xl pointer-events-none" />
          <div className="z-10">
            <h3 className="font-sans font-bold tracking-widest text-[#1A4345] text-xs md:text-sm uppercase leading-snug">
              {story.title}
            </h3>
            <hr style={{ borderColor: warnaBg }} className="border-t my-3 w-full" />
          </div>
          <p className="font-serif text-[#1A4A4D] text-sm md:text-base leading-relaxed text-justify indent-6 z-10">
            {story.description}
          </p>
        </div>
      ))}
    </Template>
  );
}