import { Copy, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Template from "./Template";

interface GiftPopupProps {
  isOpen: boolean;
  onClose: () => void;
  icon: string;
  warnaBg: string;
  warnaBorder: string;
  rekeningPria?: { bank: string, no: string, atasNama: string };
  rekeningWanita?: { bank: string, no: string, atasNama: string };
  qrCode?: string;
}

const getBankLogo = (bankName: string) => {
  if (!bankName) return null;
  const name = bankName.toLowerCase();
  if (name.includes('bca')) return '/assets/bank/bca.png';
  if (name.includes('bni')) return '/assets/bank/bni.png';
  if (name.includes('bri')) return '/assets/bank/bri.png';
  if (name.includes('dana')) return '/assets/bank/dana.png';
  if (name.includes('jago')) return '/assets/bank/jago.png';
  if (name.includes('mandiri')) return '/assets/bank/mandiri.png';
  return null;
}

export default function Gift({ isOpen, onClose, icon, warnaBg, warnaBorder, rekeningPria, rekeningWanita, qrCode }: GiftPopupProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  // Jika popup tidak aktif, jangan render apapun
  if (!isOpen) return null;
  return (
    <Template isOpen={isOpen} onClose={onClose} warnaBg={warnaBg} warnaBorder={warnaBorder} title="Hadiah">
      <div className="relative w-44 h-44 flex items-center justify-center mb-4 mx-auto drop-shadow-md">
        <Image
          src={icon}
          alt="Gift Illustration"
          width={120}
          height={120}
          className="object-contain animate-custom-pulse"
        />
      </div>

      <p className="text-center font-serif italic text-[15px] md:text-base px-3 leading-relaxed z-10 mb-8" style={{ color: warnaBorder }}>
        "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda bermaksud memberikan tanda kasih, Anda dapat mengirimkannya melalui:"
      </p>

      <div className="flex flex-col gap-6 w-full px-4 pb-8">
        {rekeningPria && rekeningPria.no && (
          <div style={{ borderColor: warnaBorder }} className="w-full bg-white/90 backdrop-blur-sm rounded-3xl border-2 p-6 text-center flex flex-col items-center gap-1 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-[0.08]" style={{ backgroundColor: warnaBorder }}></div>
            <div className="absolute -left-8 -bottom-8 w-20 h-20 rounded-full opacity-[0.08]" style={{ backgroundColor: warnaBorder }}></div>
            
            <div className="h-10 flex items-center justify-center mb-1 z-10">
              {getBankLogo(rekeningPria.bank) ? (
                <Image src={getBankLogo(rekeningPria.bank)!} alt={rekeningPria.bank} width={100} height={40} className="object-contain h-full" />
              ) : (
                <h3 style={{ color: warnaBorder }} className="font-bold text-xl uppercase tracking-wider">{rekeningPria.bank}</h3>
              )}
            </div>

            <div className="z-10 mt-2 mb-1 flex items-center justify-center gap-3 bg-gray-50/50 px-4 py-3 rounded-2xl w-full border border-gray-100">
              <p style={{ color: warnaBorder }} className="text-lg md:text-xl tracking-[0.15em] font-bold font-mono">{rekeningPria.no}</p>
              <button 
                onClick={() => handleCopy(rekeningPria.no, 'pria')}
                className="p-2 rounded-xl transition-all bg-white hover:bg-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center active:scale-95 border border-gray-100"
                style={{ color: warnaBorder }}
                title="Salin Nomor Rekening"
              >
                {copiedType === 'pria' ? <Check size={18} strokeWidth={3} className="text-green-500" /> : <Copy size={18} />}
              </button>
            </div>
            {copiedType === 'pria' && <span className="text-[10px] text-green-500 z-10 font-bold mb-1 -mt-1">Berhasil disalin!</span>}

            <p className="text-sm font-semibold z-10 opacity-80 mt-1 uppercase tracking-wide" style={{ color: warnaBorder }}>a.n {rekeningPria.atasNama}</p>
          </div>
        )}
        
        {rekeningWanita && rekeningWanita.no && (
          <div style={{ borderColor: warnaBorder }} className="w-full bg-white/90 backdrop-blur-sm rounded-3xl border-2 p-6 text-center flex flex-col items-center gap-1 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-[0.08]" style={{ backgroundColor: warnaBorder }}></div>
            <div className="absolute -left-8 -bottom-8 w-20 h-20 rounded-full opacity-[0.08]" style={{ backgroundColor: warnaBorder }}></div>
            
            <div className="h-10 flex items-center justify-center mb-1 z-10">
              {getBankLogo(rekeningWanita.bank) ? (
                <Image src={getBankLogo(rekeningWanita.bank)!} alt={rekeningWanita.bank} width={100} height={40} className="object-contain h-full" />
              ) : (
                <h3 style={{ color: warnaBorder }} className="font-bold text-xl uppercase tracking-wider">{rekeningWanita.bank}</h3>
              )}
            </div>

            <div className="z-10 mt-2 mb-1 flex items-center justify-center gap-3 bg-gray-50/50 px-4 py-3 rounded-2xl w-full border border-gray-100">
              <p style={{ color: warnaBorder }} className="text-lg md:text-xl tracking-[0.15em] font-bold font-mono">{rekeningWanita.no}</p>
              <button 
                onClick={() => handleCopy(rekeningWanita.no, 'wanita')}
                className="p-2 rounded-xl transition-all bg-white hover:bg-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center active:scale-95 border border-gray-100"
                style={{ color: warnaBorder }}
                title="Salin Nomor Rekening"
              >
                {copiedType === 'wanita' ? <Check size={18} strokeWidth={3} className="text-green-500" /> : <Copy size={18} />}
              </button>
            </div>
            {copiedType === 'wanita' && <span className="text-[10px] text-green-500 z-10 font-bold mb-1 -mt-1">Berhasil disalin!</span>}

            <p className="text-sm font-semibold z-10 opacity-80 mt-1 uppercase tracking-wide" style={{ color: warnaBorder }}>a.n {rekeningWanita.atasNama}</p>
          </div>
        )}

        {/* {qrCode && (
          <div style={{ borderColor: warnaBorder }} className="w-full bg-white/90 backdrop-blur-sm rounded-3xl border-2 p-6 text-center flex flex-col items-center gap-1 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-[0.08]" style={{ backgroundColor: warnaBorder }}></div>
            <div className="absolute -left-8 -bottom-8 w-20 h-20 rounded-full opacity-[0.08]" style={{ backgroundColor: warnaBorder }}></div>

            <h3 className="font-bold text-xl uppercase tracking-widest z-10 mb-3" style={{ color: warnaBorder }}>QRIS</h3>
            <div className="bg-white p-4 rounded-3xl border shadow-[0_4px_15px_rgba(0,0,0,0.05)] z-10 transition-transform hover:scale-105" style={{ borderColor: warnaBorder }}>
              <Image src={qrCode} alt="QR Code" width={200} height={200} className="object-contain rounded-xl" />
            </div>
          </div>
        )} */}
        
        {(!rekeningPria?.no && !rekeningWanita?.no && !qrCode) && (
          <div style={{ borderColor: warnaBorder, color: warnaBorder }} className="w-full bg-white/90 rounded-2xl border-2 py-8 px-4 text-center">
            <p className="font-medium text-[15px]">Data hadiah belum ditambahkan</p>
          </div>
        )}
      </div>
    </Template>
  );
}