"use client";

import { ArrowLeft, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Template from "./Template";

interface RsvpPopupProps {
  isOpen: boolean;
  onClose: () => void;
  icon: string;
  warnaBg: string;
  warnaBorder: string;
}

export default function Rsvp({ isOpen, onClose, icon, warnaBg, warnaBorder }: RsvpPopupProps) {
  const [nama, setNama] = useState('');
  const [kehadiran, setKehadiran] = useState('');
  const [jumlahTamu, setJumlahTamu] = useState('');
  const [ucapan, setUcapan] = useState('');

  if (!isOpen) return null;

  return (
    <Template isOpen={isOpen} onClose={onClose} warnaBg={warnaBg} warnaBorder={warnaBorder} title="RSVP">
      <div className="relative w-44 h-56 mx-auto flex items-center justify-center ">
          <Image
            src={icon}
            alt="RSVP Illustration"
            width={100}
            height={150}
            className="object-contain"
            priority
          />
        </div>

        <p className="text-center text-[#557577] text-sm px-6 leading-relaxed font-medium">
          Mohon konfirmasi kehadiran Anda dengan mengisi form di bawah ini.
        </p>

        <form className="w-full flex flex-col gap-3 px-2">
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={{ borderColor: `${warnaBg}`, backgroundColor: `${warnaBg}10`, color: `${warnaBorder}` }}
            className="w-full h-12 px-5  border rounded-2xl text-sm focus:outline-none transition"
          />

          <div className="relative w-40">
            <select
              value={kehadiran}
              onChange={(e) => setKehadiran(e.target.value)}
              style={{ borderColor: `${warnaBg}`, backgroundColor: `${warnaBg}10`, color: `${warnaBorder}` }}
              className="w-full h-10 px-4 pr-9 border rounded-2xl text-sm text-gray-600 appearance-none focus:outline-none transition cursor-pointer"
            >
              <option value="" disabled hidden>Kehadiran</option>
              <option value="hadir">Hadir</option>
              <option value="tidak_hadir">Tidak Hadir</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative w-44">
            <select
              value={jumlahTamu}
              onChange={(e) => setJumlahTamu(e.target.value)}
              style={{ borderColor: `${warnaBg}`, backgroundColor: `${warnaBg}10`, color: `${warnaBorder}` }}
              className="w-full h-10 px-4 pr-9 border rounded-2xl text-sm text-gray-600 appearance-none focus:outline-none transition cursor-pointer"
            >
              <option value="" disabled hidden>Jumlah Tamu</option>
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
              <option value="3">3 Orang</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <textarea
            placeholder="Tulis ucapan atau doa untuk kami..."
            value={ucapan}
            onChange={(e) => setUcapan(e.target.value)}
            rows={4}
            style={{ borderColor: `${warnaBg}`, backgroundColor: `${warnaBg}10`, color: `${warnaBorder}` }}
            className="w-full p-4 border rounded-2xl text-sm focus:outline-none transition resize-none"
          />

          <button
            type="submit"
            style={{ backgroundColor: `${warnaBg}`, borderColor: `${warnaBorder}` }}
            className="w-full h-12 mt-2 text-white font-bold tracking-wide rounded-2xl border shadow-[0_3px_10px_rgba(0,194,203,0.2)] transition active:scale-98"
          >
            Kirim Konfirmasi
          </button>
        </form>
    </Template>
  );
}