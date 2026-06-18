"use client";

import React, { useEffect, useState } from 'react';
import { MessageSquare, Users } from 'lucide-react';
import { api } from '@/api/api';
import Template from '../sections-aruma/Template';

interface RsvpItem {
  id: number;
  nama: string;
  nomor_telepon: string;
  email?: string;
  status: string;
  pesan?: string;
  created_at: string;
}

interface MessagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  slug: string;
  warnaBg: string;
  warnaBorder: string;
}

export default function MessagesModal({ isOpen, onClose, slug, warnaBg, warnaBorder }: MessagesModalProps) {
  const [messages, setMessages] = useState<RsvpItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && slug) {
      setLoading(true);
      api.getRsvpsBySlug(slug)
        .then((res) => {
          setMessages(res.data?.data || []);
        })
        .catch((err) => {
          console.error("Gagal mengambil data RSVP:", err);
        })
        .finally(() => setLoading(false));
    }
  }, [isOpen, slug]);

  if (!isOpen) return null;

  const formatDate = (dateStr: string) => {
    try {
      return new window.Date(dateStr).toLocaleDateString('id-ID', {
        day: 'numeric', month: 'short', year: 'numeric',
      });
    } catch { return dateStr; }
  };

  return (
    <Template isOpen={isOpen} onClose={onClose} warnaBg={warnaBg} warnaBorder={warnaBorder} title="Semua Pesan">
      {/* Sub-Header */}
      <div className="w-full">
        <p className="text-[#557577] text-xs font-medium leading-relaxed px-2">
          Kumpulan ucapan dan doa dari tamu undangan
        </p>

        {/* Badge Jumlah Pesan */}
        <div className="w-full flex justify-center mt-3">
          <div style={{ borderColor: warnaBg }} className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full border border-dashed text-[#1A4345] text-[11px] font-bold tracking-wider uppercase shadow-sm">
            <Users size={12} style={{ color: warnaBg }} />
            <span>{messages.length} Pesan</span>
          </div>
        </div>

        <hr style={{ borderColor: warnaBg }} className="border-t mt-4 w-full" />
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="w-6 h-6 border-2 rounded-full animate-spin" style={{ borderColor: `${warnaBg}40`, borderTopColor: warnaBg }} />
        </div>
      ) : messages.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-6 gap-3">
          <div className="text-gray-300 dark:text-gray-200 p-2 drop-shadow-sm">
            <MessageSquare size={44} strokeWidth={1.5} className="opacity-40 text-[#557577]" />
          </div>
          <p className="text-[#557577]/80 text-xs md:text-sm font-medium">
            Belum ada pesan yang tersedia
          </p>
        </div>
      ) : (
        /* Message List */
        <div className="flex flex-col gap-3 max-h-[50vh] overflow-y-auto px-1 py-2 scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="rounded-2xl border p-4 transition-all"
              style={{ borderColor: `${warnaBg}60`, backgroundColor: `${warnaBg}08` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {/* Avatar */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold uppercase"
                    style={{ backgroundColor: warnaBg }}
                  >
                    {msg.nama?.charAt(0) || '?'}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: warnaBorder }}>
                      {msg.nama}
                    </p>
                    <p className="text-[10px] text-[#557577]">
                      {formatDate(msg.created_at)}
                    </p>
                  </div>
                </div>
                {/* Badge Status */}
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: msg.status === 'hadir' ? '#d1fae5' : '#fee2e2',
                    color: msg.status === 'hadir' ? '#065f46' : '#991b1b',
                  }}
                >
                  {msg.status === 'hadir' ? '✅ Hadir' : '❌ Tidak Hadir'}
                </span>
              </div>
              {msg.pesan && (
                <p className="text-xs text-[#557577] leading-relaxed pl-10">
                  &ldquo;{msg.pesan}&rdquo;
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="w-full">
        <hr style={{ borderColor: warnaBg }} className="border-t mt-4 w-full" />
        <p className="text-[#557577] text-[11px] font-medium tracking-wide flex items-center justify-center gap-1">
          Terima kasih atas ucapan dan doa yang telah diberikan 
          <span role="img" aria-label="love-emoji" className="inline-block animate-pulse">💝</span>
        </p>
      </div>
    </Template>
  );
}