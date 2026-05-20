import React from 'react'
import Navbar from '../elements/Navbar'
import Image from 'next/image'

const Dresscode = () => {
  return (
    <div className="w-[380px] min-h-screen gap-4 relative mx-auto bg-[#E6F9FA] px-4 py-4 font-sans text-[#1D4D4F]">

      <Navbar title='Dresscode'/>
      {/* ================= SECTION DRESS CODE ================= */}
      <div className="w-full bg-white rounded-3xl border-2 border-[#00C2CB] p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(0,194,203,0.1)]">
        {/* Garis Putus-putus Bagian Dalam (Dashed Border) */}
        <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />

        {/* Ilustrasi Utama Dresscode */}
        <div className="relative w-44 h-44 flex items-center justify-center drop-shadow-[0_0_15px_rgba(0,194,203,0.35)] mb-2 animate-custom-pulse">
          <Image
            src="/assets/themes/estella/dresscode.webp"
            alt="Dresscode Illustration"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Deskripsi Teks */}
        <p className="text-center text-[#557577] text-xs md:text-sm font-medium px-2 leading-relaxed mb-6 z-10">
          Kami akan sangat senang jika tamu undangan mengenakan pakaian dengan warna yang serasi untuk melengkapi tema pernikahan kami.
        </p>

        {/* Container Lingkaran Palet Warna */}
        <div className="flex items-center justify-center gap-3 mb-6 z-10">

          {/* Warna 1: Cokelat Muda / Khaki */}
          <div className="w-14 h-14 rounded-full border-[2.5px] border-[#00C2CB] bg-[#DBC7B5] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center" />

          {/* Warna 2: Biru Muda / Pastel Blue */}
          <div className="w-14 h-14 rounded-full border-[2.5px] border-[#00C2CB] bg-[#D2E4F1] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center" />

          {/* Warna 3: Putih Tulang / Cream */}
          <div className="w-14 h-14 rounded-full border-[2.5px] border-[#00C2CB] bg-[#F7F2EC] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center" />

          {/* Lingkaran Keempat: Ikon Baju (Dashed) */}
          <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#00C2CB] bg-transparent flex items-center justify-center text-[#00C2CB]">
            {/* Menggunakan ikon kaos/baju kustom, atau bisa pakai Lucide Shirt */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>

        </div>

        {/* Garis Pembatas Tipis Bawah */}
        <hr className="border-t border-[#00C2CB]/20 w-full mb-4 z-10" />

        {/* Ucapan Terima Kasih */}
        <p className="text-[#557577] text-xs font-bold tracking-wide flex items-center gap-1 z-10">
          Terima kasih atas perhatiannya! <span className="text-sm">✨</span>
        </p>

      </div>
    </div>
  )
}

export default Dresscode