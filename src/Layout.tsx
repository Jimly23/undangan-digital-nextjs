"use client";

import { useState } from "react";
import Image from "next/image";
import Hero from "./sections/Hero";
import Mempelai from "./sections/Mempelai";
import Countdown from "./sections/Countdown";
import Akad from "./sections/Akad";
import Galeri from "./sections/Galeri";
import Intro from "./sections/Intro";

const DaunAtas = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <Image src="/assets/themes/royal-garden/daunatastengah.webp" alt="ornamen-atas" width={1280} height={720} className="absolute top-0 left-0 right-0" />
      <Image src="/assets/themes/royal-garden/daun-atas-kiri.webp" alt="ornamen-bawah-kanan" width={180} height={180} className={`absolute -top-10  left-0 scale-x-[-1] animate-wind ${className}`} />
      <Image src="/assets/themes/royal-garden/daun-atas-kiri.webp" alt="ornamen-daun" width={180} height={180} className={`absolute -top-5 right-0 animate-wind ${className}`} />
    </>
  )
}
const DaunBawah = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <Image src="/assets/themes/royal-garden/merak.webp" data-aos="fade-up" data-aos-delay={500} alt="ornamen-atas" width={150} height={150} className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${className}`} />
      <Image src="/assets/themes/royal-garden/daun-bawah.webp" data-aos="fade-up" alt="ornamen-atas" width={1280} height={720} className={`absolute -bottom-5 left-0 right-0 ${className}`} />
      <Image src="/assets/themes/royal-garden/bunga-bawah-kiri.webp" data-aos="zoom-in-up" data-aos-delay={200} alt="ornamen-atas" width={180} height={180} className={`absolute -bottom-4 left-0 ${className}`} />
      <Image src="/assets/themes/royal-garden/bunga-bawah-kiri.webp" data-aos="zoom-in-up" data-aos-delay={200} alt="ornamen-bawah-kanan" width={180} height={180} className={`absolute -bottom-4 right-0 scale-x-[-1] ${className}`} />
      <Image src="/assets/themes/royal-garden/kupu.webp" alt="ornamen-bawah-kanan" width={100} height={100} className={`absolute bottom-0 right-0 scale-x-[-1] ${className}`} />
      <Image src="/assets/themes/royal-garden/kupu-2.webp" alt="ornamen-bawah-kanan" width={80} height={80} className={`absolute bottom-0 left-0 scale-x-[-1] ${className}`} />
    </>
  )
}
const DaunBawahSimple = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <Image data-aos="zoom-in-up" src="/assets/themes/royal-garden/bunga-bawah-kiri.webp" alt="ornamen-atas" width={180} height={180} className={`absolute -bottom-3 left-0`} />
      <Image data-aos="zoom-in-up" src="/assets/themes/royal-garden/bunga-bawah-kiri.webp" alt="ornamen-bawah-kanan" width={180} height={180} className={`absolute -bottom-3 right-0 scale-x-[-1]`} />
    </>
  )
}


const CardAkad = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className} mb-10`}>
      <div className="relative flex flex-col items-center justify-center my-5 w-[90%] mx-auto">
        <Image src="/assets/themes/royal-garden/bingkai-acara.png" alt="mempelai" width={300} height={720} className="mb-3 w-full" />
        <div className="absolute left-[6.5px] top-[7px] w-[95.5%] h-[95.8%] rounded-tl-[1000px] rounded-tr-[1000px] rounded-bl-[1000px] rounded-br-[1000px] overflow-hidden">
          <img src="/assets/themes/royal-garden/bg-gunung.webp" alt="Background Gunung" className="absolute bottom-0 w-full h-auto" />
          <img src="/assets/themes/royal-garden/daun-bawah.webp" alt="" className="absolute bottom-0 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
            <img data-aos="zoom-in" src="/assets/themes/royal-garden/melati-2.webp" alt="" className="left-1/2 -translate-x-1/2 absolute w-6 top-20" />
            <h3 data-aos="zoom-in" className="text-2xl font-bold tracking-wider mb-3 mt-7" style={{ fontFamily: 'serif' }}>AKAD NIKAH</h3>
            <div data-aos="zoom-in-up">
              <p className="text-sm font-semibold">SABTU</p>
              <p className="text-xl font-bold mt-1">18 FEBRUARI 2024</p>
              <p className="text-xs mt-1">Pukul 01.00 - Selesai</p>

              <div className="flex items-center justify-center gap-2 mt-2 w-full">
                <div className="w-[30%] h-[1px] bg-white"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-[#D2AF6F]"></div>
                <div className="w-[30%] h-[1px] bg-white"></div>
              </div>

              <div className="mt-2">
                <p className="text-sm font-semibold">Is Plaza Ballroom</p>
                <p className="text-xs mt-1">Jln. Pramuka Raya 150 Jakarta Timur</p>
              </div>
            </div>

            <a data-aos="zoom-in-up" href="#" className="mt-8 flex items-center gap-1.5 bg-[#D2AF6F] text-white text-sm py-2 px-5 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Lihat Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}



const CardMempelai = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className} mb-10`}>
      <div data-aos="zoom-in-up" className="relative flex flex-col items-center justify-center my-5 w-[200px] mx-auto">
        <Image src="/assets/themes/royal-garden/bingkai-mempelaii.png" alt="mempelai" width={200} height={720} className="mb-3 w-full" />
        <div className="bg-amber-300 absolute left-[6px] top-[7px] w-[95%] h-[90.8%] rounded-tl-[1000px] rounded-tr-[1000px] rounded-bl-[200px] rounded-br-[200px]"></div>
        <Image src="/assets/themes/royal-garden/melati.webp" alt="mempelai" width={50} height={50} className="absolute -left-3 bottom-5" />
        <Image src="/assets/themes/royal-garden/melati-2.webp" alt="mempelai" width={50} height={50} className="absolute -right-3 bottom-5" />
      </div>
      <h4 data-aos="zoom-in-up" className="text-3xl font-bold">Putri Wulandari</h4>
      <p data-aos="zoom-in-up" className="mt-2 text-center">Putri Pertama Dari Bp. Joko Widodo & Hj. Iriana</p>
    </div>
  )
}

export default function Layout() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };

  return (
    <div className={!isOpened ? 'h-screen overflow-hidden' : ''}>
      <div className="max-w-[510px] mx-auto overflow-hidden">
        {!isOpened && (
          <div className="relative">
            <Intro onOpen={handleOpen} />
          </div>
        )}
        <Hero />
        <Mempelai />
        <Countdown />
        <Akad />
        <Galeri />
        <div id="foto" className="relative w-full h-[250px] bg-blue-400 z-50 overflow-hidden">
          <img src="/assets/themes/royal-garden/daun-bawah.webp" alt="" className="absolute -bottom-10 z-10" />
        </div>

        <div id="love-story" className="relative min-h-screen pb-52">
          <Image src="/assets/themes/royal-garden/bg-gunung.webp" alt="bg-mempelai" width={1280} height={720} className="w-full h-full object-cover absolute inset-0 -z-10" />
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-[#3d4b37] opacity-70"></div>

          {/* Konten Love Story */}
          <div className="relative z-10 px-6 pt-10 pb-10 text-white">
            {/* Title */}
            <h4 className="text-center text-2xl font-bold tracking-widest mb-8" style={{ fontFamily: 'serif' }}>LOVE STORY</h4>

            {/* Timeline */}
            <div className="relative ml-4">
              {/* Vertical Line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/40"></div>

              {/* Timeline Item 1: Perkenalan */}
              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#D2AF6F] bg-[#3d4b37]"></div>
                <h5 className="text-lg font-semibold text-[#D2AF6F] mb-2">Perkenalan</h5>
                <p className="text-sm leading-relaxed opacity-90">Tahun 2015 Kami dipertemukan saat menjadi Mahasiswa Baru, kami berada di satu Jurusan dan Kelas yang sama, pada saat itu kami hanya teman biasa.</p>
              </div>

              {/* Timeline Item 2: Awal Hubungan */}
              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#D2AF6F] bg-[#3d4b37]"></div>
                <h5 className="text-lg font-semibold text-[#D2AF6F] mb-2">Awal Hubungan</h5>
                <p className="text-sm leading-relaxed opacity-90">Setahun kemudian kami menjadi sahabat dekat, hingga di akhir Tahun 2016 dia menyatakan perasaannya kepada saya dan perjalanan hubungan kami hingga saat ini sudah hampir 5 tahun.</p>
              </div>

              {/* Timeline Item 3: Lamaran */}
              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#D2AF6F] bg-[#3d4b37]"></div>
                <h5 className="text-lg font-semibold text-[#D2AF6F] mb-2">Lamaran</h5>
                <p className="text-sm leading-relaxed opacity-90">Setelah waktu yg lama kami menjalin hubungan, dia mengajak untuk serius dan pada tanggal 17 Januari 2021 dia membawa kedua orangtuanya ke keluarga saya untuk melamar saya dan menyampaikan niat menuju ke pernikahan.</p>
              </div>

              {/* Timeline Item 4: Pernikahan */}
              <div className="relative pl-8 pb-4">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#D2AF6F] bg-[#3d4b37]"></div>
                <h5 className="text-lg font-semibold text-[#D2AF6F] mb-2">Pernikahan</h5>
                <p className="text-sm leading-relaxed opacity-90">Minggu, 25 Juli 2021 Kami melangsungkan akad nikah secara sederhana. Dengan Ridho Allah SWT dan kedua orangtua, kami memulai lembaran baru dengan berbagai cerita indah didalamnya.</p>
              </div>
            </div>

            {/* Penutup */}
            <p className="text-center text-sm italic mt-8 opacity-80">Bismillahirrahmanirrahim</p>
          </div>

          <DaunBawah />
        </div>

        <div id="ucapan" className="relative min-h-[1500px]">
          <Image src="/assets/themes/royal-garden/bg-polos.webp" alt="bg-mempelai" width={1280} height={720} className="w-full h-full object-cover absolute inset-0 -z-10" />

          {/* Design Ucapan & RSVP */}
          <div className="absolute z-10 px-6 pt-12 text-[#3d4b37] pb-6 bg-white w-[90%] left-1/2 -translate-x-1/2 top-32 rounded-t-[1000px] rounded-b-[100px]">
            {/* Circular Image */}
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#D2AF6F] mb-4">
              <img src="/assets/themes/royal-garden/bg-gunung.webp" alt="ucapan" className="w-full h-full object-cover" />
            </div>

            {/* Title */}
            <h4 className="text-center text-xl font-bold tracking-widest mb-2" style={{ fontFamily: 'serif' }}>UCAPAN<br />&amp; RSVP</h4>
            <p className="text-center text-sm mb-6 opacity-80">Berikan ucapan terbaik<br />untuk Kedua Mempelai &amp; Konfirmasi<br />Kehadiran</p>

            {/* Form */}
            <div className="flex flex-col gap-4 mb-6">
              <input
                type="text"
                placeholder="Nama Kamu"
                className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:border-[#D2AF6F] transition-colors"
              />
              <textarea
                placeholder="Berikan Ucapan & Do'a"
                rows={3}
                className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:border-[#D2AF6F] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Konfirmasi Kehadiran */}
            <p className="text-sm mb-3">Konfirmasi Kehadiran ?</p>
            <div className="flex gap-3 mb-5">
              <label className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm cursor-pointer hover:border-[#D2AF6F] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hadir
              </label>
              <label className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm cursor-pointer hover:border-[#D2AF6F] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tidak Hadir
              </label>
            </div>

            {/* Send Button */}
            <button className="w-full bg-[#3d4b37] text-white py-2.5 rounded-full text-sm font-semibold hover:bg-[#2e3a2a] transition-colors cursor-pointer">
              Send
            </button>

            {/* Daftar Ucapan */}
            <div className="mt-6 flex flex-col gap-4 max-h-[300px] overflow-y-auto">
              {/* Ucapan Item 1 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3d4b37] flex items-center justify-center text-white text-xs font-bold shrink-0">T</div>
                <div>
                  <p className="text-sm font-semibold">tess <span className="text-green-500 text-xs">●</span></p>
                  <p className="text-[10px] opacity-60">16-04-2026 08:33</p>
                  <p className="text-sm mt-1">selamat</p>
                </div>
              </div>

              {/* Ucapan Item 2 */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3d4b37] flex items-center justify-center text-white text-xs font-bold shrink-0">T</div>
                <div>
                  <p className="text-sm font-semibold">tess <span className="text-green-500 text-xs">●</span></p>
                  <p className="text-[10px] opacity-60">16-04-2026 08:30</p>
                  <p className="text-sm mt-1">selamat menempuh hidup baru</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute z-[99] left-0 right-0 bottom-0">
            {/* Gambar menentukan tinggi dari container ini */}
            <img src="/assets/themes/royal-garden/gerbang.png" alt="gerbang" className="w-full h-auto block" />
            <Image src="/assets/themes/royal-garden/bunga-bawah-kiri.webp" data-aos="fade-up" alt="ornamen-atas" width={180} height={180} className={`absolute bottom-0 left-0`} />
            <Image src="/assets/themes/royal-garden/bunga-bawah-kiri.webp" data-aos="fade-up" alt="ornamen-bawah-kanan" width={180} height={180} className={`absolute bottom-0 right-0 scale-x-[-1]`} />

            {/* div.kotak akan memiliki ukuran yang persis sama dengan gambar */}
            <div className="kotak absolute inset-0">
              <p className="text-center mt-[35%] w-[50%] mx-auto text-sm">Wedding Gift</p>
              <p className="text-white text-[9px] w-[50%] mx-auto mt-4 text-center">Mungkin karena jarak, waktu ataupun keadaan yang menghalangi untuk ikut hadir dalam momen bahagia kami, Silakan klik tombol di bawah untuk mengirimkan kado/hadiah.
              </p>

              {/* Tombol Save The Date */}
              <button className="mt-3 mx-auto flex items-center gap-2 bg-[#D2AF6F] text-white text-xs py-2 px-4 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Amplop Digital
              </button>
            </div>
          </div>
        </div>

        <div id="footer" className="h-screen relative">
          <Image src="/assets/themes/royal-garden/bg-gunung.webp" alt="bg-gunung" width={1280} height={720} className="w-full h-screen" />
          <Image src="/assets/themes/royal-garden/daunatastengah.webp" alt="ornamen-atas" width={1280} height={720} className="absolute top-0 left-0 right-0" />
          <DaunBawah />
          <Image src="/assets/themes/royal-garden/daun-atas-kiri.webp" alt="ornamen-bawah-kanan" width={180} height={180} className="absolute top-0 left-0 scale-x-[-1] animate-wind" />
          <Image src="/assets/themes/royal-garden/daun-atas-kiri.webp" alt="ornamen-daun" width={180} height={180} className="absolute top-0 right-0 animate-wind" />

          <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 ">
            <div className="relative flex flex-col items-center justify-center w-[180px] mx-auto">
              <Image src="/assets/themes/royal-garden/bingkai.png" alt="bingkai" width={180} height={180} className="mb-5 relative" />
              <div className="w-[90%] h-[86%] bg-amber-300 absolute rounded-tl-[1000px] rounded-tr-[1000px] rounded-bl-[1000px] rounded-br-[1000px] top-[9px] left-[9.4px]"></div>
            </div>
            <h5 className="text-white text-center mb-2 px-5">Atas kehadiran dan do’a restu dari Bapak/Ibu/Saudara/i sekalian, kami mengucapkan Terima Kasih.
            </h5>
            <h5 className="text-white text-center text-xl mb-5">Wassalamualaikum Wr.Wb.</h5>
            <h5 className="text-white text-center mb-2 mt-10">Kami yang berbahagia</h5>
            <h5 className="text-white text-center text-2xl mb-5">ADELIA & REZA</h5>
          </div>
        </div>

      </div>
    </div>
  );
}
