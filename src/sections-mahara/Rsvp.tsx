"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
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
  const [foto, setFoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access error:", err);
      setError("Gagal mengakses kamera. Pastikan izin kamera telah diberikan.");
      setIsCameraOpen(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    setIsCameraOpen(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      if (context) {
        // Mirrored drawing to match the mirrored selfie view
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], `rsvp_photo_${Date.now()}.jpg`, { type: 'image/jpeg' });
            setFoto(file);
          }
        }, 'image/jpeg', 0.8);
      }
      stopCamera();
    }
  };

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
      const formData = new FormData();
      formData.append('nama', nama);
      formData.append('nomor_telepon', nomorTelepon);
      formData.append('status', status);
      if (email) formData.append('email', email);
      if (pesan) formData.append('pesan', pesan);
      if (foto) formData.append('foto', foto);

      await api.storeRsvp(slug, formData);
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

            {/* Foto Daftar Kehadiran (Opsional) */}
            <div className="w-full flex flex-col gap-1.5 mt-1">
              <label className="text-[11px] font-semibold pl-2 tracking-wide uppercase" style={{ color: warnaBg }}>
                Foto Kehadiran (Opsional)
              </label>

              {isCameraOpen ? (
                <div className="w-full flex flex-col gap-2 p-2 rounded-2xl border shadow-sm" style={{ borderColor: `${warnaBg}40`, backgroundColor: `${warnaBg}08` }}>
                  <div className="relative w-full h-48 rounded-xl overflow-hidden bg-black/10">
                    <video ref={videoRef} autoPlay playsInline style={{ transform: 'scaleX(-1)' }} className="w-full h-full object-cover" />
                    <canvas ref={canvasRef} className="hidden" />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={stopCamera}
                      className="flex-1 py-3 rounded-xl text-[11px] font-bold tracking-wide uppercase bg-red-50 text-red-600 transition active:scale-95"
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      onClick={capturePhoto}
                      className="flex-[2] py-3 rounded-xl text-[11px] font-bold tracking-wide uppercase text-white transition active:scale-95 shadow-md"
                      style={{ backgroundColor: warnaBorder, borderColor: warnaBorder }}
                    >
                      Jepret 📸
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={startCamera}
                    className="w-full flex items-center justify-center gap-2 h-12 px-3 py-2 border rounded-2xl text-sm font-bold cursor-pointer transition active:scale-95"
                    style={{ borderColor: `${warnaBg}`, backgroundColor: `${warnaBg}10`, color: `${warnaBorder}` }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                    {foto ? 'Ambil Ulang Foto' : 'Ambil Foto Kehadiran 📸'}
                  </button>

                  {foto && (
                    <div className="relative w-full h-40 mt-1 rounded-xl overflow-hidden border shadow-sm" style={{ borderColor: `${warnaBg}40` }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={URL.createObjectURL(foto)} 
                        alt="Preview Kehadiran" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

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