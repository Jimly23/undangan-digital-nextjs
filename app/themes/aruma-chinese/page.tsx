"use client";

import Image from 'next/image'
import { ArrowLeft, CircleAlert, Volume2, VolumeX, Lightbulb, LightbulbOff, MessageSquare, MessageSquareDashed } from 'lucide-react';
import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import Galeri from '@/src/sections-aruma/Galeri';
import Rsvp from '@/src/sections-aruma/Rsvp';
import Gift from '@/src/sections-aruma/Gift';
import LoveStory from '@/src/sections-aruma/LoveStory';
import Date from '@/src/sections-aruma/Date';
import Dresscode from '@/src/sections-aruma/Dresscode';
import About from '@/src/sections-aruma/About';
import Navbar from '@/src/elements-aruma/Navbar';
import Popup from '@/src/elements-aruma/Popup';
import MessagesModal from '@/src/elements-aruma/MessageModal';

type ActivePage = 'intro' | 'menu' | 'galeri' | 'rsvp' | 'gift' | 'love-story' | 'date' | 'dresscode' | 'about';

const validPages: ActivePage[] = ['intro', 'menu', 'galeri', 'rsvp', 'gift', 'love-story', 'date', 'dresscode', 'about'];

const listFotoGallery = [
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600"
];

const warnaBg = "#fa8c84";
const warnaBorder = "#9e332b";

const ceritaKita = [
  {
    title: "AGUSTUS 2019 – AWAL YANG TAK DISANGKA",
    description: "Tanpa pernah direncanakan, langkah kami dipertemukan di ruang kelas..."
  },
  {
    title: "DESEMBER 2021 – BERBAGI KOMITMEN",
    description: "Setelah melewati ratusan obrolan dan menyelaraskan visi masa depan..."
  },
  {
    title: "MEI 2026 – LANGKAH MENUJU PELAMINAN",
    description: "Hari yang dinanti akhirnya tiba. Kami sepakat untuk mengikat janji suci..."
  }
];

const Page = () => {
  const [activePage, setActivePage] = useState<ActivePage>('intro');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightOn, setIsLightOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isPromptVisible, setIsPromptVisible] = useState(true);
  const [isGaleriOpen, setIsGaleriOpen] = useState(false);
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [isLoveStoryOpen, setIsLoveStoryOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isDresscodeOpen, setIsDresscodeOpen] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  const playMusic = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/audio/blue.mp3');
      audioRef.current.loop = true;
    }
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => { });
  }, []);

  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => { });
      }
    }
  }, [isPlaying]);

  // Read hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && validPages.includes(hash as ActivePage)) {
      setActivePage(hash as ActivePage);
    }
  }, []);

  // Listen for browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && validPages.includes(hash as ActivePage)) {
        setActivePage(hash as ActivePage);
      } else {
        setActivePage('intro');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((page: ActivePage) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(page);
      // Update URL hash
      if (page === 'intro') {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        window.history.pushState(null, '', `#${page}`);
      }
      setIsTransitioning(false);
    }, 300);
  }, []);

  const sectionPages: Record<string, ReactNode> = {
    // 'galeri': <Galeri isOpen={false} onClose={() => {}} />,
    // 'rsvp': <Rsvp isOpen={false} onClose={() => {}} />,
    // 'gift': <Gift isOpen={false} onClose={() => {}} />,
    // 'love-story': <LoveStory isOpen={false} onClose={() => {}} />,
    // 'about': <About isOpen={false} onClose={() => {}} fotoWanita={"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop"} fotoPria={"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop"} namaWanita={"Elina Clarissa"} namaPria={"Adelio Nugroho"} ayahWanita={"Reynaldi"} ibuWanita={"Cantika"} ayahPria={"Budi Sentosa"} ibuPria={"Siti Amanah"} instagramWanita={"elinaclarissa"} instagramPria={"adelionugroho"} />,
  };

  const sectionLabels: Record<string, string> = {
    'galeri': 'Gallery',
    'rsvp': 'RSVP',
    'gift': 'Gift',
    'love-story': 'Love Story',
    'date': 'Date & Venue',
    'dresscode': 'Dresscode',
    'about': 'About Us',
  };

  const isSectionPage = activePage !== 'intro' && activePage !== 'menu';

  return (
    <div className='w-full max-w-[380px] h-screen mx-auto relative bg-[#E6F9FA] overflow-x-hidden'>

      {/* INTRO SCREEN */}
      {activePage === 'intro' && (
        <div
          className={`absolute overflow-hidden inset-0 z-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <Image src="/assets/themes/aruma-jawa/intro.webp" alt="bg-game" width={380} height={800} className='h-full relative' />
          <div className='font-angin-senja absolute top-[35%] text-center left-0 right-0 text-[#6b2e1d]'>
            <p className='text-center text-4xl'>The Wedding Of</p>
            <p className='text-center text-6xl'>Adelio & Elina</p>
          </div>
          <div className='absolute bottom-20 left-0 right-0 text-center flex justify-center'>
            <Image
              src="/assets/themes/aruma-jepang/btn.webp"
              alt="Open Invitation"
              width={150}
              height={50}
              id='button-start'
              className='hover:scale-90 cursor-pointer transition-transform duration-200'
              onClick={() => { playMusic(); navigateTo('menu'); }}
            />
          </div>
        </div>
      )}

      {/* MENU SCREEN */}
      {activePage === 'menu' && (
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'} ${!isLightOn ? 'bg-black' : ''}`}
        >
          <Image src="/assets/themes/aruma-chinese/bg.png" alt="bg-game" width={380} height={800} className={`h-full relative transition-[filter] duration-500 ${!isLightOn ? 'brightness-50' : 'brightness-100'}`} />
          <div onClick={() => setIsModalOpen(true)} className='w-[40px] h-[40px] z-99 rounded-lg border-2 absolute left-3 top-3 flex items-center justify-center cursor-pointer hover:scale-95 transition-transform' style={{ backgroundColor: warnaBg, borderColor: warnaBorder }}>
            <div className='w-[80%] h-[80%] rounded-xl bg-white border flex items-center justify-center' style={{ borderColor: warnaBorder }}>
              <CircleAlert size={18} style={{ color: warnaBorder }} />
            </div>
          </div>
          <div
            className='w-[40px] h-[40px] z-99 rounded-lg border-2 absolute right-3 top-3 flex items-center justify-center cursor-pointer hover:scale-95 transition-transform'
            onClick={toggleMusic}
            style={{ backgroundColor: warnaBg, borderColor: warnaBorder }}
          >
            <div className='w-[80%] h-[80%] rounded-xl bg-white border flex items-center justify-center' style={{ borderColor: warnaBorder, color: warnaBorder }}>
              {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </div>
          </div>
          <div
            className='w-[40px] h-[40px] z-99 rounded-lg border-2 absolute right-3 top-16 flex items-center justify-center cursor-pointer hover:scale-95 transition-transform'
            onClick={() => setIsLightOn(!isLightOn)}
            style={{ backgroundColor: warnaBg, borderColor: warnaBorder }}
          >
            <div className='w-[80%] h-[80%] rounded-xl bg-white border flex items-center justify-center' style={{ borderColor: warnaBorder, color: warnaBorder }}>
              {isLightOn ? <LightbulbOff size={18} /> : <Lightbulb size={18} />}
            </div>
          </div>

          {isPromptVisible && (
            <div className='w-[200px] z-99 rounded-lg bg-white border-2 absolute left-3 bottom-16 flex items-center justify-center p-1' style={{ borderColor: warnaBorder }}><div className='w-full h-full rounded-lg border-dashed bg-white border p-2 text-xs' style={{ borderColor: warnaBorder, color: warnaBorder }}>
              <p>Silahkan konfirmasi kehadiran dan berikan ucapan terbaik untuk kami.</p>
              <span onClick={() => setIsRsvpOpen(true)} className='cursor-pointer w-full block py-1 mt-2 text-center rounded-full border text-white font-semibold' style={{ backgroundColor: warnaBg, borderColor: warnaBorder }}>Konfirmasi Kehadiran</span>
              </div>
            </div>
          )}
          <div onClick={() => setIsMessageModalOpen(true)} className='cursor-pointer w-[40px] h-[40px] z-99 rounded-lg border-2 absolute left-3 bottom-3 flex items-center justify-center' style={{ backgroundColor: warnaBg, borderColor: warnaBorder, color: warnaBorder }}><div className='w-[80%] h-[80%] flex justify-center items-center rounded-xl bg-white border' style={{ borderColor: warnaBorder }}>{isMessageModalOpen ? <MessageSquare size={18} /> : <MessageSquareDashed size={18} />}</div></div>
          <div onClick={() => setIsPromptVisible(!isPromptVisible)} className='w-[148px] h-[40px] z-99 rounded-lg cursor-pointer border-2 absolute left-16 bottom-3 flex items-center justify-center transition-all hover:scale-95' style={{ backgroundColor: warnaBg, borderColor: warnaBorder }}><div className='w-[90%] h-[80%] flex items-center justify-center rounded-xl bg-white border' style={{ borderColor: warnaBorder }}>
            <p className='text-xs text-center' style={{ color: warnaBorder }}>{isPromptVisible ? 'Sembunyikan Ucapan' : 'Tampilkan Ucapan'}</p>
            </div>
          </div>

          <div id='gallery' className={`w-[80px] h-[80px] absolute left-[50px] top-[20%] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse cursor-pointer`} onClick={() => setIsGaleriOpen(true)}>
            <Image
              src="/assets/themes/aruma-chinese/gallery.png"
              alt='Gallery'
              width={80}
              height={80}
              className="object-contain" // Memastikan gambar tidak terpotong
            />
          </div>
          <div id='gift' className={`w-[100px] h-[100px] absolute right-[7px] bottom-[20px] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse [animation-delay:200ms] cursor-pointer`}  onClick={() => setIsGiftOpen(true)}>
            <Image src="/assets/themes/aruma-chinese/gift.png" alt='Gift' width={120} height={120} />
          </div>

          <div id='love-story' className={`w-[70px] h-[70px] absolute left-1/2 top-[50px] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse-center cursor-pointer`} onClick={() => setIsLoveStoryOpen(true)}>
            <Image src="/assets/themes/aruma-chinese/love-story.png" alt='Love Story' width={150} height={150} />
          </div>
          <div id='about-us' className={`w-[110px] h-[110px] -rotate-4 absolute left-[160px] bottom-[43%] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse-center [animation-delay:400ms] cursor-pointer`} onClick={() => setIsAboutOpen(true)}>
            <Image src="/assets/themes/aruma-chinese/about.png" alt='About Us' width={150} height={150} />
          </div>

          <div id='date-venue' className={`w-[80px] h-[80px] absolute right-[70px] top-[80px] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse [animation-delay:300ms] cursor-pointer`} onClick={() => setIsDateOpen(true)}>
            <Image src="/assets/themes/aruma-chinese/date.png" alt='Date & Venue' width={90} height={90} />
          </div>
          <div id='dresscode' className={`w-[70px] h-[70px] absolute right-[75px] top-[30%] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse [animation-delay:500ms] cursor-pointer`} onClick={() => setIsDresscodeOpen(true)}>
            <Image src="/assets/themes/aruma-chinese/dresscode.png" alt='Dresscode' width={120} height={120} />
          </div>
          <div id='rsvp' className={`w-[80px] h-[80px] absolute right-[35px] bottom-[35%] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse-center [animation-delay:150ms] cursor-pointer`} onClick={() => setIsRsvpOpen(true)}>
            <Image src="/assets/themes/aruma-chinese/rsvp.png" alt='RSVP' width={170} height={170} />
          </div>
        </div>
      )}

      {/* SECTION PAGES */}
      {isSectionPage && (
        <div
          className={`absolute inset-0 z-20 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <Navbar title={sectionLabels[activePage] || 'Back'} />

          {/* Section content - add top padding for navbar */}
          <div className='pt-20'>
            {sectionPages[activePage]}
          </div>
        </div>
      )}

      <Popup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
      <MessagesModal
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
      <Galeri
        isOpen={isGaleriOpen}
        onClose={() => setIsGaleriOpen(false)}
        fotoGallery={listFotoGallery}
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
      <Gift
        isOpen={isGiftOpen}
        onClose={() => setIsGiftOpen(false)}
        icon="/assets/themes/aruma-jawa/gift.png"
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
      <About
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        fotoWanita={"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop"} fotoPria={"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop"} namaWanita={"Elina Clarissa"} namaPria={"Adelio Nugroho"} ayahWanita={"Reynaldi"} ibuWanita={"Cantika"} ayahPria={"Budi Sentosa"} ibuPria={"Siti Amanah"} instagramWanita={"elinaclarissa"} instagramPria={"adelionugroho"}
        warnaBg={warnaBg} warnaBorder={warnaBorder} 
      />
      <Date
        isOpen={isDateOpen}
        onClose={() => setIsDateOpen(false)}
        tanggal="Kamis, 31 Desember 2026"
        waktu="02:00 PM - 04:00 PM"
        namaTempat="Masjid Istiqlal"
        alamatTempat="Jl. Taman Wijaya Kusuma, Pasar Baru..."
        fotoTempat="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop"
        googleMaps="https://maps.google.com/..."
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
      <Dresscode
        isOpen={isDresscodeOpen}
        onClose={() => setIsDresscodeOpen(false)}
        icon="/assets/themes/aruma-jepang/dresscode.webp"
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
      <LoveStory
        isOpen={isLoveStoryOpen}
        onClose={() => setIsLoveStoryOpen(false)}
        stories={ceritaKita}
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
      <Rsvp
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        icon="/assets/themes/aruma-jawa/rsvp.png"
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
    </div>
  )
}

export default Page