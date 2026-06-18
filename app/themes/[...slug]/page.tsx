"use client";

import Image from 'next/image'
import { useParams } from 'next/navigation';
import { ArrowLeft, CircleAlert, Volume2, VolumeX, Lightbulb, LightbulbOff, MessageSquare, MessageSquareDashed } from 'lucide-react';
import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { api } from '@/api/api';
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

type ActivePage = 'intro' | 'welcome' | 'menu' | 'galeri' | 'rsvp' | 'gift' | 'love-story' | 'date' | 'dresscode' | 'about';

const validPages: ActivePage[] = ['intro', 'welcome', 'menu', 'galeri', 'rsvp', 'gift', 'love-story', 'date', 'dresscode', 'about'];

const arumaJepang = {
  intro: "/assets/themes/aruma-jepang/intro.webp",
  btn: "/assets/themes/aruma-jepang/btn.webp",
  next: "/assets/themes/aruma-chinese/next.webp",
  welcome: "/assets/themes/aruma-jepang/welcome.webp",
  menu: "/assets/themes/aruma-jepang/bg.webp",
  gallery: "/assets/themes/aruma-jepang/gallery.webp",
  gift: "/assets/themes/aruma-jepang/gift.webp",
  loveStory: "/assets/themes/aruma-jepang/love-story.webp",
  about: "/assets/themes/aruma-jepang/about.webp",
  date: "/assets/themes/aruma-jepang/date.webp",
  dresscode: "/assets/themes/aruma-jepang/dresscode.webp",
  rsvp: "/assets/themes/aruma-jepang/rsvp.webp",
}

const arumaJepangV2 = {
  intro: "/assets/themes/aruma-jepangv2/intro.webp",
  btn: "/assets/themes/aruma-chinese/btn.webp",
  next: "/assets/themes/aruma-chinese/next.webp",
  welcome: "/assets/themes/aruma-jepangv2/welcome2.webp",
  menu: "/assets/themes/aruma-jepangv2/bg.webp",
  gallery: "/assets/themes/aruma-jepangv2/gallery.webp",
  gift: "/assets/themes/aruma-jepangv2/gift.webp",
  loveStory: "/assets/themes/aruma-jepangv2/love-story.webp",
  about: "/assets/themes/aruma-jepangv2/about.webp",
  date: "/assets/themes/aruma-jepangv2/date.webp",
  dresscode: "/assets/themes/aruma-jepangv2/dresscode.webp",
  rsvp: "/assets/themes/aruma-jepangv2/rsvp.webp",
}

const arumaJawa = {
  intro: "/assets/themes/aruma-jawa/intro.webp",
  btn: "/assets/themes/aruma-chinese/btn.webp",
  next: "/assets/themes/aruma-chinese/next.webp",
  welcome: "/assets/themes/aruma-jawa/welcome.webp",
  menu: "/assets/themes/aruma-jawa/bg.webp",
  gallery: "/assets/themes/aruma-jawa/gallery.webp",
  gift: "/assets/themes/aruma-jawa/gift.webp",
  loveStory: "/assets/themes/aruma-jawa/love-story.webp",
  about: "/assets/themes/aruma-jawa/about.webp",
  date: "/assets/themes/aruma-jawa/date.webp",
  dresscode: "/assets/themes/aruma-jawa/dresscode.webp",
  rsvp: "/assets/themes/aruma-jawa/rsvp.webp",
}

const arumaChinese = {
  intro: "/assets/themes/aruma-chinese/intro.webp",
  btn: "/assets/themes/aruma-chinese/btn.webp",
  next: "/assets/themes/aruma-chinese/next.webp",
  welcome: "/assets/themes/aruma-chinese/welcome.webp",
  menu: "/assets/themes/aruma-chinese/bg.webp",
  gallery: "/assets/themes/aruma-chinese/gallery.webp",
  gift: "/assets/themes/aruma-chinese/gift.webp",
  loveStory: "/assets/themes/aruma-chinese/love-story.webp",
  about: "/assets/themes/aruma-chinese/about.webp",
  date: "/assets/themes/aruma-chinese/date.webp",
  dresscode: "/assets/themes/aruma-chinese/dresscode.webp",
  rsvp: "/assets/themes/aruma-chinese/rsvp.webp",
}

const listFotoGallery = [
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600"
];

const themeColors: Record<string, { warnaBg: string; warnaBorder: string }> = {
  'aruma-japan': { warnaBg: '#f5b3be', warnaBorder: '#fb8a9c' },
  'aruma-japan-v2': { warnaBg: '#cbc157', warnaBorder: '#514716' },
  'aruma-jawa': { warnaBg: '#e1b87e', warnaBorder: '#603310' },
  'aruma-chinese': { warnaBg: '#fa8c84', warnaBorder: '#9e332b' },
};

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
  const params = useParams();
  const slugParam = params?.slug;

  // Expected URL pattern: /themes/[tema]/[slug-mempelai]/[nama-tamu]
  const temaUrl = Array.isArray(slugParam) ? slugParam[0] : (slugParam as string);
  const slug = Array.isArray(slugParam) && slugParam.length > 1 ? slugParam[1] : '';
  const rawGuestName = Array.isArray(slugParam) && slugParam.length > 2 ? slugParam.slice(2).join(' ') : 'Tamu Undangan';
  const guestName = decodeURIComponent(rawGuestName);

  const [dataUndangan, setDataUndangan] = useState<any>(null);
  const [rsvps, setRsvps] = useState<any[]>([]);
  const [currentRsvpIndex, setCurrentRsvpIndex] = useState(0);

  const fetchRsvps = useCallback(() => {
    if (slug) {
      api.getRsvpsBySlug(slug).then((res: any) => {
        setRsvps(res.data?.data || []);
        setCurrentRsvpIndex(0); // Show newest message immediately
      }).catch((err: any) => {
        console.error("Gagal mengambil data RSVP:", err);
      });
    }
  }, [slug]);

  useEffect(() => {
    if (slug) {
      api.getUndanganBySlug(slug).then((res: any) => {
        setDataUndangan(res.data?.data || res.data);
      }).catch((err: any) => {
        console.error("Gagal get undangan", err);
      });

      fetchRsvps();
    }
  }, [slug, fetchRsvps]);

  useEffect(() => {
    if (rsvps.length > 0) {
      const interval = setInterval(() => {
        setCurrentRsvpIndex((prev) => (prev + 1) % rsvps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [rsvps.length]);

  const imgIconMap: Record<string, typeof arumaJepangV2> = {
    'aruma-japan': arumaJepang,
    'aruma-japan-v2': arumaJepangV2,
    'aruma-jawa': arumaJawa,
    'aruma-chinese': arumaChinese,
  };

  const currentTheme = dataUndangan?.tema || temaUrl || 'aruma-japan-v2';
  const imgIcon = imgIconMap[currentTheme] || arumaJepangV2;
  const { warnaBg, warnaBorder } = themeColors[currentTheme] || themeColors['aruma-japan-v2'];

  const [activePage, setActivePage] = useState<ActivePage>('intro');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [showLightTooltip, setShowLightTooltip] = useState(true);
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
  const [openedFromPopup, setOpenedFromPopup] = useState(false);

  const playMusic = useCallback(() => {
    if (!audioRef.current) {
      const audioUrl = dataUndangan?.musik || '/assets/audio/blue.mp3';
      audioRef.current = new Audio(audioUrl);
      audioRef.current.loop = true;
    }
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => { });
  }, [dataUndangan]);

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
    // 'date': <Date isOpen={false} onClose={() => {}} />,
    // 'dresscode': <Dresscode isOpen={false} onClose={() => {}} />,
    // 'about': <About isOpen={false} onClose={() => {}} />,
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

  const isSectionPage = activePage !== 'intro' && activePage !== 'welcome' && activePage !== 'menu';

  const galeriData = dataUndangan?.galeri || dataUndangan?.galeri_url || listFotoGallery;

  let parsedLoveStories = ceritaKita;
  try {
    if (dataUndangan?.love_stories) {
      if (typeof dataUndangan.love_stories === 'string') {
        const temp = JSON.parse(dataUndangan.love_stories);
        parsedLoveStories = temp.map((t: any) => ({ title: t.judul, description: t.cerita }));
      } else {
        parsedLoveStories = dataUndangan.love_stories.map((t: any) => ({ title: t.judul, description: t.cerita }));
      }
    }
  } catch (e) { }

  let parsedDresscode: any[] = [];
  try {
    if (dataUndangan?.dresscodes) {
      if (typeof dataUndangan.dresscodes === 'string') {
        parsedDresscode = JSON.parse(dataUndangan.dresscodes);
      } else {
        parsedDresscode = dataUndangan.dresscodes;
      }
    }
  } catch (e) { }

  const akadDate = dataUndangan?.tanggal_akad
    ? new window.Date(dataUndangan.tanggal_akad).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : "Kamis, 31 Desember 2026";
  const akadTime = dataUndangan?.jam_mulai_akad
    ? (dataUndangan.jam_mulai_akad + " - " + (dataUndangan.jam_selesai_akad || "Selesai"))
    : "02:00 PM - 04:00 PM";

  const resepsiDate = dataUndangan?.tanggal_resepsi
    ? new window.Date(dataUndangan.tanggal_resepsi).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : "Minggu, 03 Januari 2027";
  const resepsiTime = dataUndangan?.jam_mulai_resepsi
    ? (dataUndangan.jam_mulai_resepsi + " - " + (dataUndangan.jam_selesai_resepsi || "Selesai"))
    : "10:00 AM - 01:00 PM";

  return (
    <div className='w-full max-w-[380px] h-[100dvh] mx-auto relative bg-[#E6F9FA] overflow-x-hidden'>

      {/* INTRO SCREEN */}
      {activePage === 'intro' && (
        <div
          className={`absolute overflow-hidden inset-0 z-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <Image src={imgIcon.intro} alt="bg-game" width={380} height={800} className='h-full relative' />
          <div className='font-angin-senja absolute top-[33%] text-center left-0 right-0 text-[#6b2e1d]'>
            <p className='text-center text-4xl'>The Wedding Of</p>
            <p className='text-center text-6xl'>{dataUndangan?.nama_panggilan_pria || 'Cowok'} & {dataUndangan?.nama_panggilan_wanita || 'Cewek'}</p>
          </div>
          <div className='absolute bottom-20 left-0 right-0 text-center flex justify-center'>
            <Image
              src={imgIcon.btn}
              alt="Open Invitation"
              width={150}
              height={50}
              id='button-start'
              className='hover:scale-90 cursor-pointer transition-transform duration-200'
              onClick={() => { playMusic(); navigateTo('welcome'); }}
            />
          </div>
        </div>
      )}

      {/* WELCOME SCREEN */}
      {activePage === 'welcome' && (
        <div
          className={`absolute overflow-hidden inset-0 z-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <Image src={imgIcon.menu} alt="bg-game" width={380} height={800} className='h-full relative' />
          <div className='w-full h-full bg-black/50 absolute top-0 left-0 right-0 z-10'></div>
          <div className='absolute bottom-0 -left-5 right-0 text-center flex justify-center z-99'>
            <div className='relative w-full'>
              <Image
                src={imgIcon.welcome}
                alt="Open Invitation"
                width={350}
                height={50}
                id='button-start'
                className='cursor-pointer transition-transform duration-200 w-full'
                onClick={() => { playMusic(); navigateTo('menu'); }}
              />
              <div className='absolute bottom-[40%] left-2 right-0 text-center text-[#6b2e1d] z-999 pointer-events-none'>
                <p className='text-center text-[10px]'>Kepada Yth</p>
                <p className='font-angin-senja text-center text-4xl px-4 line-clamp-2'>{guestName}</p>
              </div>
            </div>
          </div>
          <div className='absolute animate-custom-pulse bottom-15 -left-5 right-0 text-center flex justify-center z-999'>
            <Image
              src={imgIcon.next}
              alt="Open Invitation"
              width={150}
              height={50}
              id='button-start'
              className='cursor-pointer transition-transform duration-200'
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
          <Image src={imgIcon.menu} alt="bg-game" width={380} height={800} className={`h-full relative transition-[filter] duration-500 ${!isLightOn ? 'brightness-50' : 'brightness-100'}`} />
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
            onClick={() => {
              setIsLightOn(!isLightOn);
              setShowLightTooltip(false);
            }}
            style={{ backgroundColor: warnaBg, borderColor: warnaBorder }}
          >
            <div className='w-[80%] h-[80%] rounded-xl bg-white border flex items-center justify-center' style={{ borderColor: warnaBorder, color: warnaBorder }}>
              {isLightOn ? <LightbulbOff size={18} /> : <Lightbulb size={18} />}
            </div>
          </div>

          {showLightTooltip && (
            <div
              className="w-[200px] h-[92px] z-50 rounded-lg border-2 py-2 absolute right-16 top-3 cursor-pointer hover:scale-95 transition-transform"
              onClick={() => {
                setIsLightOn(!isLightOn);
                setShowLightTooltip(false);
              }}
              style={{
                backgroundColor: warnaBg,
                borderColor: warnaBorder,
              }}
            >
              {/* Border panah */}
              <div
                className="absolute -right-[12px] bottom-[10px]"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "9px solid transparent",
                  borderBottom: "9px solid transparent",
                  borderLeft: `12px solid ${warnaBorder}`,
                }}
              />

              {/* Isi panah */}
              <div
                className="absolute -right-[9px] bottom-[11px]"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderLeft: `10px solid ${warnaBg}`,
                }}
              />

              <p className="text-white text-xs px-2 font-semibold mb-1">
                Efek Cahaya
              </p>
              <p className="text-white text-[11px] px-2 mb-1">
                Klik tombol ini untuk mematikan atau menyalakan efek cahaya
              </p>
              <p className="text-white text-[10px] px-2 underline">
                Klik disini untuk menutup
              </p>
            </div>
          )}

          {isPromptVisible && (
            <div className='w-[200px] min-h-[100px] z-99 rounded-lg bg-white border-2 absolute left-3 bottom-16 flex items-center justify-center p-1' style={{ borderColor: warnaBorder }}><div className='w-full h-full rounded-lg border-dashed bg-white border p-2 text-xs flex flex-col justify-between' style={{ borderColor: warnaBorder, color: warnaBorder }}>
              {rsvps.length === 0 ? (
                <p>Silahkan konfirmasi kehadiran dan berikan ucapan terbaik untuk kami.</p>
              ) : (
                <div className="flex flex-col mb-1 overflow-hidden" style={{ minHeight: '40px' }}>
                  <span className="font-bold truncate">{rsvps[currentRsvpIndex]?.nama}</span>
                  <span className="italic line-clamp-2">"{rsvps[currentRsvpIndex]?.pesan || 'Hadir'}"</span>
                </div>
              )}
              <span onClick={() => setIsRsvpOpen(true)} className='cursor-pointer w-full block py-1 mt-auto text-center rounded-full border text-white font-semibold' style={{ backgroundColor: warnaBg, borderColor: warnaBorder }}>Konfirmasi Kehadiran</span>
            </div>
            </div>
          )}
          <div onClick={() => setIsMessageModalOpen(true)} className='cursor-pointer w-[40px] h-[40px] z-99 rounded-lg border-2 absolute left-3 bottom-3 flex items-center justify-center' style={{ backgroundColor: warnaBg, borderColor: warnaBorder, color: warnaBorder }}><div className='w-[80%] h-[80%] flex justify-center items-center rounded-xl bg-white border' style={{ borderColor: warnaBorder }}>{isMessageModalOpen ? <MessageSquare size={18} /> : <MessageSquareDashed size={18} />}</div></div>
          <div onClick={() => setIsPromptVisible(!isPromptVisible)} className='w-[148px] h-[40px] z-99 rounded-lg cursor-pointer border-2 absolute left-16 bottom-3 flex items-center justify-center transition-all hover:scale-95' style={{ backgroundColor: warnaBg, borderColor: warnaBorder }}><div className='w-[90%] h-[80%] flex items-center justify-center rounded-xl bg-white border' style={{ borderColor: warnaBorder }}>
            <p className='text-xs text-center' style={{ color: warnaBorder }}>{isPromptVisible ? 'Sembunyikan Ucapan' : 'Tampilkan Ucapan'}</p>
          </div>
          </div>

          <div id='gallery' className={`w-[75px] h-[75px] absolute left-[60px] top-[20%] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse cursor-pointer`} onClick={() => { setOpenedFromPopup(false); setIsGaleriOpen(true); }}>
            <Image
              src={imgIcon.gallery}
              alt='Gallery'
              width={75}
              height={75}
              className="object-contain" // Memastikan gambar tidak terpotong
            />
          </div>
          <div id='gift' className={`w-[100px] h-[100px] absolute right-[7px] bottom-[20px] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse [animation-delay:200ms] cursor-pointer`} onClick={() => { setOpenedFromPopup(false); setIsGiftOpen(true); }}>
            <Image src={imgIcon.gift} alt='Date & Venue' width={120} height={120} />
          </div>

          <div id='love-story' className={`w-[60px] h-[60px] absolute left-1/2 top-[50px] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse-center cursor-pointer`} onClick={() => { setOpenedFromPopup(false); setIsLoveStoryOpen(true); }}>
            <Image src={imgIcon.loveStory} alt='Love Story' width={150} height={150} />
          </div>
          <div id='about-us' className={`w-[120px] h-[120px] absolute left-[160px] bottom-[42%] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse-center [animation-delay:400ms] cursor-pointer`} onClick={() => { setOpenedFromPopup(false); setIsAboutOpen(true); }}>
            <Image src={imgIcon.about} alt='About Us' width={150} height={150} />
          </div>

          <div id='date-venue' className={`w-[80px] h-[80px] absolute right-[70px] top-[80px] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse [animation-delay:300ms] cursor-pointer`} onClick={() => { setOpenedFromPopup(false); setIsDateOpen(true); }}>
            <Image src={imgIcon.date} alt='Date & Venue' width={90} height={90} />
          </div>
          <div id='dresscode' className={`w-[70px] h-[70px] absolute right-[70px] top-[210px] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse [animation-delay:500ms] cursor-pointer`} onClick={() => { setOpenedFromPopup(false); setIsDresscodeOpen(true); }}>
            <Image src={imgIcon.dresscode} alt='Dresscode' width={120} height={120} />
          </div>
          <div id='rsvp' className={`w-[90px] h-[90px] absolute right-[25px] bottom-[35%] flex items-center justify-center ${!isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(51,213,208,1)]' : ''} animate-custom-pulse-center [animation-delay:150ms] cursor-pointer`} onClick={() => { setOpenedFromPopup(false); setIsRsvpOpen(true); }}>
            <Image src={imgIcon.rsvp} alt='RSVP' width={170} height={170} />
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
        imgIcon={imgIcon}
        onMenuClick={(id) => {
          setOpenedFromPopup(true);
          if (id === 'about') setIsAboutOpen(true);
          if (id === 'dresscode') setIsDresscodeOpen(true);
          if (id === 'lovestory') setIsLoveStoryOpen(true);
          if (id === 'gallery') setIsGaleriOpen(true);
          if (id === 'gift') setIsGiftOpen(true);
          if (id === 'date') setIsDateOpen(true);
          if (id === 'rsvp') setIsRsvpOpen(true);
          setIsModalOpen(false);
        }}
      />
      <MessagesModal
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
        slug={slug}
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
      <Galeri
        isOpen={isGaleriOpen}
        onClose={() => { setIsGaleriOpen(false); if (openedFromPopup) setIsModalOpen(true); }}
        fotoGallery={galeriData}
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
      <Gift
        isOpen={isGiftOpen}
        onClose={() => { setIsGiftOpen(false); if (openedFromPopup) setIsModalOpen(true); }}
        icon={imgIcon.gift}
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
        rekeningPria={{ bank: dataUndangan?.nama_bank_pria || '', no: dataUndangan?.nomor_rekening_pria || '', atasNama: dataUndangan?.atas_nama_pria || '' }}
        rekeningWanita={{ bank: dataUndangan?.nama_bank_wanita || '', no: dataUndangan?.nomor_rekening_wanita || '', atasNama: dataUndangan?.atas_nama_wanita || '' }}
        qrCode={dataUndangan?.qr_code_url || dataUndangan?.qr_code || ''}
      />
      <About
        isOpen={isAboutOpen}
        onClose={() => { setIsAboutOpen(false); if (openedFromPopup) setIsModalOpen(true); }}
        fotoWanita={dataUndangan?.foto_wanita || dataUndangan?.foto_wanita_url || "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop"}
        fotoPria={dataUndangan?.foto_pria || dataUndangan?.foto_pria_url || "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop"}
        namaWanita={dataUndangan?.nama_lengkap_wanita || "Elina Clarissa"}
        namaPria={dataUndangan?.nama_lengkap_pria || "Adelio Nugroho"}
        ayahWanita={dataUndangan?.nama_ayah_wanita || "Reynaldi"}
        ibuWanita={dataUndangan?.nama_ibu_wanita || "Cantika"}
        ayahPria={dataUndangan?.nama_ayah_pria || "Budi Sentosa"}
        ibuPria={dataUndangan?.nama_ibu_pria || "Siti Amanah"}
        instagramWanita={dataUndangan?.instagram_wanita || "elinaclarissa"}
        instagramPria={dataUndangan?.instagram_pria || "adelionugroho"}
        warnaBg={warnaBg} warnaBorder={warnaBorder}
      />
      <Date
        isOpen={isDateOpen}
        onClose={() => { setIsDateOpen(false); if (openedFromPopup) setIsModalOpen(true); }}
        tanggal={akadDate}
        waktu={akadTime}
        tanggalResepsi={resepsiDate}
        waktuResepsi={resepsiTime}
        namaTempat="Lokasi Pernikahan"
        alamatTempat={dataUndangan?.alamat_akad || "Jl. Taman Wijaya Kusuma, Pasar Baru..."}
        alamatResepsi={dataUndangan?.alamat_resepsi || "Jl. Taman Wijaya Kusuma, Gedung Serbaguna..."}
        fotoTempat="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop"
        googleMaps={dataUndangan?.link_google_maps || "https://maps.google.com/..."}
        googleMapsResepsi={dataUndangan?.link_google_maps_resepsi || ""}
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
      <Dresscode
        isOpen={isDresscodeOpen}
        onClose={() => { setIsDresscodeOpen(false); if (openedFromPopup) setIsModalOpen(true); }}
        icon={imgIcon.dresscode}
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
        dresscodes={parsedDresscode}
      />
      <LoveStory
        isOpen={isLoveStoryOpen}
        onClose={() => { setIsLoveStoryOpen(false); if (openedFromPopup) setIsModalOpen(true); }}
        stories={parsedLoveStories}
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
      />
      <Rsvp
        isOpen={isRsvpOpen}
        onClose={() => { setIsRsvpOpen(false); if (openedFromPopup) setIsModalOpen(true); }}
        icon={imgIcon.rsvp}
        warnaBg={warnaBg}
        warnaBorder={warnaBorder}
        slug={slug}
        guestName={guestName}
        onRsvpSubmitted={fetchRsvps}
      />
    </div>
  )
}

export default Page