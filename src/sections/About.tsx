import Image from 'next/image'
import React from 'react'
import Navbar from '../elements/Navbar'

const About = () => {
  return (
    <div className="w-[380px] min-h-screen mx-auto bg-[#E6F9FA] px-4 font-sans text-[#1D4D4F] relative">
      <Navbar title='About' />
      <section className="w-full flex flex-col items-center justify-center relative mb-2">
          <p className="text-center text-[#557577] text-xs md:text-sm font-medium px-4 leading-relaxed mb-4">
            Dua pribadi yang berbeda, tapi saling melengkapi dalam satu cerita
          </p>
          <div className="w-full bg-white rounded-3xl border-2 border-[#00C2CB] p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)]">
            <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />

            <p className="text-center font-serif italic text-sm md:text-base text-[#1A4A4D] leading-loose px-2 z-10">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa
              tenteram di sampingnya, dan dijadikan-Nya di antaramu rasa kasih
              dan sayang."
            </p>

            <p className="text-center font-sans font-bold text-xs md:text-sm text-[#1A4345] tracking-wider mt-4 z-10 uppercase">
              — Ar-Rum: 21
            </p>
          </div>
        </section>
        <section className="w-full bg-white rounded-3xl border-2 border-[#00C2CB] p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)] mb-2">
          <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm z-10">
            <Image
              src="https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=600&auto=format&fit=crop"
              alt="Foto Mempelai Wanita"
              fill
              priority
              sizes="(max-width:768px) 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center mt-5 mb-4 z-10 text-center">
            <span className="text-[#1A4345] font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase relative pb-1">
              THE BRIDE
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#00C2CB]" />
            </span>
            <h2 className="font-bold text-xl md:text-2xl text-[#1A4345] tracking-wide mt-3">
              Putri Thompson
            </h2>
            <p className="text-[#557577] text-xs md:text-sm font-medium mt-2 px-4 leading-relaxed">
              Putri dari Bapak Thompson dan Ibu Rose
            </p>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 px-5 bg-[#9BF2F6] hover:bg-[#00C2CB] text-[#1A4345] hover:text-white font-bold text-xs tracking-wide rounded-full border border-[#00C2CB] shadow-[0_2px_8px_rgba(0,194,203,0.2)] flex items-center justify-center transition active:scale-95 z-10 mb-2"
          >
            @Putri
          </a>
        </section>
        <section className="w-full bg-white rounded-3xl border-2 border-[#00C2CB] p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_4px_15px_rgba(0,194,203,0.08)] mb-2">
          <div className="absolute inset-2 border border-dashed border-[#00C2CB]/60 rounded-2xl pointer-events-none" />
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm z-10">
            <Image
              src="https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=600&auto=format&fit=crop"
              alt="Foto Mempelai Wanita"
              fill
              priority
              sizes="(max-width:768px) 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center mt-5 mb-4 z-10 text-center">
            <span className="text-[#1A4345] font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase relative pb-1">
              THE BRIDE
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#00C2CB]" />
            </span>
            <h2 className="font-bold text-xl md:text-2xl text-[#1A4345] tracking-wide mt-3">
              Putri Thompson
            </h2>
            <p className="text-[#557577] text-xs md:text-sm font-medium mt-2 px-4 leading-relaxed">
              Putri dari Bapak Thompson dan Ibu Rose
            </p>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 px-5 bg-[#9BF2F6] hover:bg-[#00C2CB] text-[#1A4345] hover:text-white font-bold text-xs tracking-wide rounded-full border border-[#00C2CB] shadow-[0_2px_8px_rgba(0,194,203,0.2)] flex items-center justify-center transition active:scale-95 z-10 mb-2"
          >
            @Putri
          </a>
        </section>
    </div>
  )
}

export default About