"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { api } from "@/api/api";
import Template from "./Template";

interface RsvpPopupProps {
  isOpen: boolean;
  onClose: () => void;
  icon: string;
  warnaBg: string;
  warnaBorder: string;
  slug: string;
  guestName: string;
  onRsvpSubmitted?: () => void;
}

export default function Rsvp({ isOpen, onClose, icon, warnaBg, warnaBorder, slug, guestName, onRsvpSubmitted }: RsvpPopupProps) {
  const [nama, setNama] = useState(guestName || '');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [pesan, setPesan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!nama || !nomorTelepon || !status) {
      setError('Nama, Nomor Telepon, dan Status wajib diisi.');
      return;
    }

    setIsSubmitting(true);
    try {
      await api.storeRsvp(slug, {
        nama,
        nomor_telepon: nomorTelepon,
        email: email || undefined,
        status,
        pesan: pesan || undefined,
      });
      setIsSubmitted(true);
      if (onRsvpSubmitted) {
        onRsvpSubmitted();
      }
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Gagal mengirim RSVP. Coba lagi.';
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {isSubmitted ? (
        <div className="flex flex-col items-center gap-3 py-6 px-4">
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${warnaBg}30` }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={warnaBorder} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="text-center text-sm font-semibold" style={{ color: warnaBorder }}>
            Terima kasih, {nama}!
          </p>
          <p className="text-center text-xs text-[#557577] leading-relaxed">
            Konfirmasi kehadiran Anda telah berhasil dikirim. Kami sangat menantikan kehadiran Anda.
          </p>
        </div>
      ) : (
        <>
          <p className="text-center text-[#557577] text-sm px-6 leading-relaxed font-medium">
            Mohon konfirmasi kehadiran Anda dengan mengisi form di bawah ini.
          </p>

          {error && (
            <p className="text-center text-red-500 text-xs px-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 px-2">
            {/* Nama - otomatis terisi dari URL tamu */}
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              style={{ borderColor: `${warnaBg}`, backgroundColor: `${warnaBg}10`, color: `${warnaBorder}` }}
              className="w-full h-12 px-5 border rounded-2xl text-sm focus:outline-none transition"
            />

            {/* Nomor Telepon */}
            <input
              type="tel"
              placeholder="Nomor Telepon"
              value={nomorTelepon}
              onChange={(e) => setNomorTelepon(e.target.value)}
              style={{ borderColor: `${warnaBg}`, backgroundColor: `${warnaBg}10`, color: `${warnaBorder}` }}
              className="w-full h-12 px-5 border rounded-2xl text-sm focus:outline-none transition"
            />

            {/* Email (opsional) */}
            <input
              type="email"
              placeholder="Email (opsional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: `${warnaBg}`, backgroundColor: `${warnaBg}10`, color: `${warnaBorder}` }}
              className="w-full h-12 px-5 border rounded-2xl text-sm focus:outline-none transition"
            />

            {/* Status Kehadiran */}
            <div className="relative">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{ borderColor: `${warnaBg}`, backgroundColor: `${warnaBg}10`, color: `${warnaBorder}` }}
                className="w-full h-12 px-5 pr-9 border rounded-2xl text-sm appearance-none focus:outline-none transition cursor-pointer"
              >
                <option value="" disabled hidden>Konfirmasi Kehadiran</option>
                <option value="hadir">✅ Hadir</option>
                <option value="tidak_hadir">❌ Tidak Hadir</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Pesan / Ucapan */}
            <textarea
              placeholder="Tulis ucapan atau doa untuk kami..."
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              rows={4}
              style={{ borderColor: `${warnaBg}`, backgroundColor: `${warnaBg}10`, color: `${warnaBorder}` }}
              className="w-full p-4 border rounded-2xl text-sm focus:outline-none transition resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              style={{ backgroundColor: `${warnaBg}`, borderColor: `${warnaBorder}` }}
              className="w-full h-12 mt-2 text-white font-bold tracking-wide rounded-2xl border shadow-[0_3px_10px_rgba(0,194,203,0.2)] transition active:scale-98 disabled:opacity-60"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi'}
            </button>
          </form>
        </>
      )}
    </Template>
  );
}