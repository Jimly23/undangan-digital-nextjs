import { ArrowLeft, Info } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Navbar from '../elements/Navbar'

const LoveStory = () => {
  return (
    <div className="w-[380px] min-h-screen flex flex-col gap-4 relative mx-auto bg-[#E6F9FA] px-4 py-4 font-sans text-[#1D4D4F]">

      <Navbar title='Love Story'/>
      
      <div className="w-full bg-[#E6F9FA] rounded-3xl border-2 border-[#00C2CB] p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.05)]">
        {/* Garis Putus-putus Bagian Dalam (Dashed Border) */}
        <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />

        {/* Ilustrasi Angsa Lambang Love Story */}
        <div className="relative w-36 h-36 flex items-center justify-center drop-shadow-[0_0_12px_rgba(0,194,203,0.3)] mb-2">
          <Image
            src="/assets/themes/estella/love-story.webp" // Sesuaikan dengan path icon angsa/love story Anda
            alt="Love Story Illustration"
            width={130}
            height={130}
            className="object-contain"
          />
        </div>

        {/* Teks Quote Cerita */}
        <p className="text-center font-serif italic text-sm md:text-base text-[#1A4A4D] leading-relaxed px-4 z-10">
          "Cerita kami, dari yang tak sengaja... hingga jadi selamanya"
        </p>
      </div>

      {/* CARD 2: ISI TIMELINE CERITA (AGUSTUS 2019) */}
      <div className="w-full bg-white rounded-3xl border-2 border-[#00C2CB] p-6 flex flex-col relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)]">
        {/* Garis Putus-putus Bagian Dalam (Dashed Border) */}
        <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />

        {/* Judul Waktu & Sub-Event */}
        <div className="z-10">
          <h3 className="font-sans font-bold tracking-widest text-[#1A4345] text-xs md:text-sm uppercase leading-snug">
            AGUSTUS 2019 – AWAL YANG TAK DISANGKA
          </h3>
          
          {/* Garis Horizontal Tipis Pembatas Judul */}
          <hr className="border-t border-[#00C2CB]/30 my-3 w-full" />
        </div>

        {/* Paragraf Narasi Cerita */}
        <p className="font-serif text-[#1A4A4D] text-sm md:text-base leading-relaxed text-justify indent-6 z-10">
          Tanpa pernah direncanakan, langkah kami dipertemukan di ruang kelas dan diskusi kelompok. Dari obrolan ringan yang sederhana, tumbuh rasa ingin tahu yang perlahan menjelma menjadi perhatian. Saat itu kami belum tahu, benih kecil inilah yang kelak menjadi cerita besar.
        </p>
      </div>
    </div>
  )
}

export default LoveStory