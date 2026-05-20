"use client";

import Image from "next/image";
import { ArrowLeft, Info, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "../elements/Navbar";

export default function Rsvp() {
  // State untuk form handling jika diperlukan nanti
  const [nama, setNama] = useState('');
  const [kehadiran, setKehadiran] = useState('');
  const [jumlahTamu, setJumlahTamu] = useState('');
  const [ucapan, setUcapan] = useState('');

  return (
    <div className="w-[380px] flex flex-col min-h-screen gap-4 relative mx-auto bg-[#E6F9FA] px-4 py-4 font-sans text-[#1D4D4F]">
      <Navbar title="RSVP"/>
      <div className="relative w-44 h-56 mx-auto flex items-center justify-center drop-shadow-[0_0_15px_rgba(0,194,203,0.35)] animate-custom-pulse">
        <Image
          src="/assets/themes/estella/rsvp.webp"
          alt="RSVP Illustration"
          width={100}
          height={150}
          className="object-contain"
          priority
        />
      </div>

      {/* ================= DESKRIPSI TEKS ================= */}
      <p className="text-center text-[#557577] text-sm px-6 leading-relaxed font-medium">
        Mohon konfirmasi kehadiran Anda dengan mengisi form di bawah ini.
      </p>

      {/* ================= FORM INPUTS ================= */}
      <form className="w-full flex flex-col gap-3 px-2">

        {/* Input Nama Lengkap */}
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full h-12 px-5 bg-white/70 border border-[#00C2CB]/30 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#00C2CB] focus:bg-white transition"
        />

        {/* Select Kehadiran */}
        <div className="relative w-40">
          <select
            value={kehadiran}
            onChange={(e) => setKehadiran(e.target.value)}
            className="w-full h-10 px-4 pr-9 bg-white/70 border border-[#00C2CB]/30 rounded-2xl text-sm text-gray-600 appearance-none focus:outline-none focus:border-[#00C2CB] focus:bg-white transition cursor-pointer"
          >
            <option value="" disabled hidden>Kehadiran</option>
            <option value="hadir">Hadir</option>
            <option value="tidak_hadir">Tidak Hadir</option>
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Select Jumlah Tamu */}
        <div className="relative w-44">
          <select
            value={jumlahTamu}
            onChange={(e) => setJumlahTamu(e.target.value)}
            className="w-full h-10 px-4 pr-9 bg-white/70 border border-[#00C2CB]/30 rounded-2xl text-sm text-gray-600 appearance-none focus:outline-none focus:border-[#00C2CB] focus:bg-white transition cursor-pointer"
          >
            <option value="" disabled hidden>Jumlah Tamu</option>
            <option value="1">1 Orang</option>
            <option value="2">2 Orang</option>
            <option value="3">3 Orang</option>
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Textarea Ucapan / Doa */}
        <textarea
          placeholder="Tulis ucapan atau doa untuk kami..."
          value={ucapan}
          onChange={(e) => setUcapan(e.target.value)}
          rows={4}
          className="w-full p-4 bg-white/70 border border-[#00C2CB]/30 rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#00C2CB] focus:bg-white transition resize-none"
        />

        {/* ================= BUTTON KIRIM ================= */}
        <button
          type="submit"
          className="w-full h-12 mt-2 bg-[#9BF2F6] hover:bg-[#00C2CB] text-[#1A4345] hover:text-white font-bold tracking-wide rounded-2xl border border-[#00C2CB] shadow-[0_3px_10px_rgba(0,194,203,0.2)] transition active:scale-98"
        >
          Kirim Konfirmasi
        </button>
      </form>
    </div>
  );
}