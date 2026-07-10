import { useEffect, useState } from "react";
import Image from "next/image";
import Template from "./Template";

interface DatePopupProps {
  isOpen: boolean;
  onClose: () => void;
  tanggal: string;
  waktu: string;
  tanggalResepsi?: string;
  waktuResepsi?: string;
  namaTempat: string;
  alamatTempat: string;
  alamatResepsi?: string;
  fotoTempat: string;
  googleMaps: string;
  googleMapsResepsi?: string;
  warnaBg: string;
  warnaBorder: string;
}

interface TimeLeft {
  hari: number;
  jam: number;
  menit: number;
  detik: number;
}

export default function DateComponent({
  isOpen,
  onClose,
  tanggal,
  waktu,
  tanggalResepsi,
  waktuResepsi,
  namaTempat,
  alamatTempat,
  alamatResepsi,
  fotoTempat,
  googleMaps,
  googleMapsResepsi,
  warnaBg,
  warnaBorder,
}: DatePopupProps) {

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    if (!isOpen) return;

    // FUNGSI BARU: Mengubah string Indonesia & Waktu menjadi format ISO standar komputer
    const convertToValidDate = (dateStr: string, timeRangeStr: string) => {
      try {
        // 1. Bersihkan Nama Hari. "Kamis, 31 Desember 2026" -> "31 Desember 2026"
        const cleanDate = dateStr.includes(",") ? dateStr.split(",")[1].trim() : dateStr.trim();
        const dateParts = cleanDate.split(" ");

        if (dateParts.length !== 3) return null;

        const day = dateParts[0].padStart(2, "0");
        const monthName = dateParts[1].toLowerCase();
        const year = dateParts[2];

        // Kamus konversi bulan Indonesia ke angka
        const monthMap: { [key: string]: string } = {
          januari: "01", februari: "02", maret: "03", april: "04", mei: "05", juni: "06",
          juli: "07", agustus: "08", september: "09", oktober: "10", november: "11", desember: "12"
        };
        const month = monthMap[monthName] || "01";

        // 2. Ambil jam mulai dari range waktu. "02:00 PM - 04:00 PM" -> "02:00 PM"
        const startTimeStr = timeRangeStr.split("-")[0].trim();

        // Konversi format AM/PM ke format 24 jam untuk kebutuhan ISO standard
        let [time, modifier] = startTimeStr.split(" ");
        let [hours, minutes] = time.split(":");

        if (hours === "12") hours = "00";
        if (modifier === "PM") hours = (parseInt(hours, 10) + 12).toString();

        // Gabungkan menjadi format ISO valid: YYYY-MM-DDTHH:mm:00
        return `${year}-${month}-${day}T${hours.padStart(2, "0")}:${minutes}:00`;
      } catch (e) {
        console.error("Gagal memproses format tanggal hitung mundur:", e);
        return null;
      }
    };

    // Dapatkan target ISO string hasil konversi
    const targetISO = convertToValidDate(tanggal, waktu);

    const calculateTimeLeft = () => {
      if (!targetISO) return;

      const difference = +new Date(targetISO) - +new Date();
      let timeLeftData = { hari: 0, jam: 0, menit: 0, detik: 0 };

      if (difference > 0) {
        timeLeftData = {
          hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          menit: Math.floor((difference / 1000 / 60) % 60),
          detik: Math.floor((difference / 1000) % 60),
        };
      }

      setTimeLeft(timeLeftData);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [isOpen, tanggal, waktu]);

  if (!isOpen) return null;

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <Template isOpen={isOpen} onClose={onClose} warnaBg={warnaBg} warnaBorder={warnaBorder} title="Tanggal & Tempat">
      <div style={{ borderColor: warnaBg }} className="w-full bg-white rounded-3xl border-2 p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(0,194,203,0.1)]">
        <div style={{ borderColor: warnaBg }} className="absolute inset-2 border border-dashed rounded-2xl pointer-events-none" />
        <div className="text-center z-10 w-full">
          <h2 className="font-bold text-[#1A4345] text-sm">
            Sebagai Rasa Syukur, Kami Mengundang Bapak/Ibu/Saudara/i Pada Acara Khitan Putra Kami Dalam:
          </h2>
          <hr style={{ borderColor: `${warnaBg}80` }} className="border-t my-4 mx-auto w-[85%]" />
          <p className="text-[#557577] font-medium text-sm mb-5">
            {tanggal} - {waktu.split("-")[0].trim()}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 w-full z-10 px-1">
          <div style={{ borderColor: `${warnaBg}` }} className="border rounded-xl p-2 flex flex-col items-center justify-center shadow-sm relative">
            <div style={{ borderColor: `${warnaBg}80` }} className="absolute inset-0.5 border border-dashed rounded-lg pointer-events-none" />
            <span className="font-bold text-xl text-[#1A4345]">{formatNumber(timeLeft.hari)}</span>
            <span className="text-[10px] font-bold tracking-wider text-[#557577] mt-0.5 uppercase">HARI</span>
          </div>
          <div style={{ borderColor: `${warnaBg}` }} className="border rounded-xl p-2 flex flex-col items-center justify-center shadow-sm relative">
            <div style={{ borderColor: `${warnaBg}80` }} className="absolute inset-0.5 border border-dashed rounded-lg pointer-events-none" />
            <span className="font-bold text-xl text-[#1A4345]">{formatNumber(timeLeft.jam)}</span>
            <span className="text-[10px] font-bold tracking-wider text-[#557577] mt-0.5 uppercase">JAM</span>
          </div>
          <div style={{ borderColor: `${warnaBg}` }} className="border rounded-xl p-2 flex flex-col items-center justify-center shadow-sm relative">
            <div style={{ borderColor: `${warnaBg}80` }} className="absolute inset-0.5 border border-dashed rounded-lg pointer-events-none" />
            <span className="font-bold text-xl text-[#1A4345]">{formatNumber(timeLeft.menit)}</span>
            <span className="text-[10px] font-bold tracking-wider text-[#557577] mt-0.5 uppercase">MENIT</span>
          </div>
          <div style={{ borderColor: `${warnaBg}` }} className="border rounded-xl p-2 flex flex-col items-center justify-center shadow-sm relative">
            <div style={{ borderColor: `${warnaBg}80` }} className="absolute inset-0.5 border border-dashed rounded-lg pointer-events-none" />
            <span className="font-bold text-xl text-[#1A4345]">{formatNumber(timeLeft.detik)}</span>
            <span className="text-[10px] font-bold tracking-wider text-[#557577] mt-0.5 uppercase">DETIK</span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 items-center mt-2">
        <div style={{ borderColor: warnaBg }} className="w-full bg-white rounded-3xl border-2 p-3 relative shadow-[0_0_15px_rgba(0,194,203,0.1)]">
          <div style={{ borderColor: warnaBg }} className="absolute inset-1.5 border border-dashed rounded-[18px] pointer-events-none" />
          <div style={{ borderColor: `${warnaBg}80` }} className="mt-4 mb-2 border rounded-2xl p-4 text-center relative mx-1">
            <div style={{ borderColor: `${warnaBg}80` }} className="absolute inset-0.5 border border-dashed rounded-xl pointer-events-none" />
            <h3 className="font-bold text-[#1A4345] text-base tracking-wide z-10 relative">
              Walimatul Khitan
            </h3>
            <p className="text-[#557577] text-sm font-medium mt-1.5 leading-relaxed px-2 z-10 relative">
              {tanggal}
            </p>
            <h3 className="font-bold text-[#1A4345] text-sm z-10 mt-1.5 relative">
              {alamatTempat}
            </h3>
            <p className="text-[#557577] text-sm font-medium mt-1.5 leading-relaxed px-2 z-10 relative">
              {waktu}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 mt-1">
          <a
            href={googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-11 text-white font-bold text-xs md:text-sm tracking-wide rounded-full border-2 shadow-[0_3px_10px_rgba(0,194,203,0.15)] flex items-center justify-center transition active:scale-98 mt-1 mb-2"
            style={{ borderColor: warnaBorder, backgroundColor: warnaBg }}
          >
            Buka di Google Maps
          </a>
        </div>
      </div>
    </Template>
  );
}