import { ArrowLeft, Info } from 'lucide-react'
import React from 'react'

const Navbar = ({ title = 'LOVE STORY' }: { title?: string }) => {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[348px] z-50 h-14 bg-white rounded-full border-2 border-[#00C2CB] shadow-[0_0_10px_rgba(0,194,203,0.2)] flex items-center justify-between px-4">

      {/* back */}
      <a href="#menu">
        <button className="w-9 h-9 rounded-full bg-[#E6F9FA] border border-[#00C2CB] flex items-center justify-center text-[#00C2CB] hover:bg-[#00C2CB] hover:text-white transition active:scale-95 cursor-pointer">
          <ArrowLeft size={18} strokeWidth={2.5} />
        </button>
      </a>

      {/* TITLE */}
      <h1 className="font-bold tracking-wider text-[#1A4345] text-sm md:text-base uppercase">
        {title}
      </h1>

      {/* RIGHT BUTTON */}
      <button className="w-9 h-9 rounded-full bg-[#E6F9FA] border border-[#00C2CB] flex items-center justify-center text-[#00C2CB] hover:bg-[#00C2CB] hover:text-white transition active:scale-95">
        <Info size={18} strokeWidth={2.5} />
      </button>

    </div>
  )
}

export default Navbar