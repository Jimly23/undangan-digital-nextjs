"use client";

import Image from 'next/image'
import { ArrowLeft, CircleAlert, Volume2, VolumeX, Lightbulb, LightbulbOff, MessageSquare, MessageSquareDashed } from 'lucide-react';
import Navbar from './elements/Navbar';
import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import Gift from './sections/Gift';
import LoveStory from './sections/LoveStory';
import Date from './sections/Date';
import Rsvp from './sections/Rsvp';
import Galeri from './sections/Galeri';
import Dresscode from './sections/Dresscode';
import About from './sections/About';
import Popup from './elements/Popup';
import MessagesModal from './elements/MessageModal';

type ActivePage = 'intro' | 'menu' | 'galeri' | 'rsvp' | 'gift' | 'love-story' | 'date' | 'dresscode' | 'about';

const validPages: ActivePage[] = ['intro', 'menu', 'galeri', 'rsvp', 'gift', 'love-story', 'date', 'dresscode', 'about'];

const LayoutGame = () => {
  const [activePage, setActivePage] = useState<ActivePage>('intro');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightOn, setIsLightOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isPromptVisible, setIsPromptVisible] = useState(true);

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
    'galeri': <Galeri />,
    'rsvp': <Rsvp />,
    'gift': <Gift />,
    'love-story': <LoveStory />,
    'date': <Date />,
    'dresscode': <Dresscode />,
    'about': <About />,
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
    <div className='w-[380px] h-screen mx-auto relative bg-[#E6F9FA] overflow-x-hidden'>

      {/* INTRO SCREEN */}
      {activePage === 'intro' && (
        <div
          className={`absolute overflow-hidden inset-0 z-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <Image src="/assets/themes/estella/bg-intro.webp" alt="bg-game" width={380} height={800} className='h-full relative' />
          <p className='absolute top-[140px] left-0 right-0 text-center text-blue-700 font-bold'>The Wedding Of</p>
          <p className='absolute top-[170px] left-0 right-0 text-center text-2xl text-blue-700 font-bold'>Ahmad & Laras</p>
          <div className='absolute bottom-20 left-0 right-0 text-center flex justify-center'>
            <Image
              src="/assets/themes/estella/start-button.webp"
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
          className={`absolute inset-0 z-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <Image src="/assets/themes/estella/bg.webp" alt="bg-game" width={380} height={800} className='h-full relative' />
          <div onClick={() => setIsModalOpen(true)} className='w-[40px] h-[40px] z-99 rounded-lg bg-[#89dada] border-2 border-[#00c0c0] absolute left-3 top-3 flex items-center justify-center cursor-pointer hover:scale-95 transition-transform'>
            <div className='w-[80%] h-[80%] rounded-xl bg-white border border-[#00c0c0] flex items-center justify-center'>
              <CircleAlert size={18} className='text-[#00c0c0]' />
            </div>
          </div>
          <div
            className='w-[40px] h-[40px] z-99 rounded-lg bg-[#89dada] border-2 border-[#00c0c0] absolute right-3 top-3 flex items-center justify-center cursor-pointer hover:scale-95 transition-transform'
            onClick={toggleMusic}
          >
            <div className='w-[80%] h-[80%] rounded-xl bg-white border border-[#00c0c0] flex items-center justify-center text-[#00c0c0]'>
              {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </div>
          </div>
          <div
            className='w-[40px] h-[40px] z-99 rounded-lg bg-[#89dada] border-2 border-[#00c0c0] absolute right-3 top-16 flex items-center justify-center cursor-pointer hover:scale-95 transition-transform'
            onClick={() => setIsLightOn(!isLightOn)}
          >
            <div className='w-[80%] h-[80%] rounded-xl bg-white border border-[#00c0c0] flex items-center justify-center text-[#00c0c0]'>
              {isLightOn ? <Lightbulb size={18} /> : <LightbulbOff size={18} />}
            </div>
          </div>

          {isPromptVisible && (
            <div className='w-[200px] z-99 rounded-lg bg-white border-2 border-[#00c0c0] absolute left-3 bottom-16 flex items-center justify-center p-1'><div className='w-full h-full rounded-lg border-dashed bg-white border border-[#00c0c0] p-2 text-xs text-[#00c0c0]'>
              <p>Silahkan konfirmasi kehadiran dan berikan ucapan terbaik untuk kami.</p>
              <span onClick={() => navigateTo('rsvp')} className='cursor-pointer w-full block py-1 mt-2 text-center rounded-full border border-[#00c0c0] bg-[#89dada] text-white font-semibold'>Konfirmasi Kehadiran</span>
              </div>
            </div>
          )}
          <div onClick={() => setIsMessageModalOpen(true)} className='cursor-pointer w-[40px] h-[40px] z-99 rounded-lg bg-[#89dada] border-2 border-[#00c0c0] text-[#00c0c0] absolute left-3 bottom-3 flex items-center justify-center'><div className='w-[80%] h-[80%] flex justify-center items-center rounded-xl bg-white border border-[#00c0c0]'>{isMessageModalOpen ? <MessageSquare size={18} /> : <MessageSquareDashed size={18} />}</div></div>
          <div onClick={() => setIsPromptVisible(!isPromptVisible)} className='w-[148px] h-[40px] z-99 rounded-lg cursor-pointer bg-[#89dada] border-2 border-[#00c0c0] absolute left-16 bottom-3 flex items-center justify-center transition-all hover:scale-95'><div className='w-[90%] h-[80%] flex items-center justify-center rounded-xl bg-white border border-[#00c0c0]'>
            <p className='text-[#00c0c0] text-xs text-center'>{isPromptVisible ? 'Sembunyikan Ucapan' : 'Tampilkan Ucapan'}</p>
            </div>
          </div>

          <div id='rsvp' className={`w-[75px] h-[75px] absolute left-[30px] top-[100px] flex items-center justify-center ${isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(255,255,255,1)]' : ''} animate-custom-pulse cursor-pointer`} onClick={() => navigateTo('rsvp')}>
            <Image
              src="/assets/themes/estella/rsvp.webp"
              alt='RSVP'
              width={75}
              height={75}
              className="object-contain" // Memastikan gambar tidak terpotong
            />
          </div>
          <div id='date-venue' className={`w-[120px] h-[120px] absolute left-[7px] top-[230px] flex items-center justify-center ${isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(255,255,255,1)]' : ''} animate-custom-pulse [animation-delay:200ms] cursor-pointer`} onClick={() => navigateTo('date')}>
            <Image src="/assets/themes/estella/date-venue.webp" alt='Date & Venue' width={120} height={120} />
          </div>

          <div id='gallery' className={`w-[150px] h-[150px] absolute left-1/2 top-[50px] flex items-center justify-center ${isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(255,255,255,1)]' : ''} animate-custom-pulse-center cursor-pointer`} onClick={() => navigateTo('galeri')}>
            <Image src="/assets/themes/estella/gallery.webp" alt='Gallery' width={150} height={150} />
          </div>
          <div id='love-story' className={`w-[150px] h-[150px] absolute left-1/2 top-[230px] flex items-center justify-center ${isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(255,255,255,1)]' : ''} animate-custom-pulse-center [animation-delay:400ms] cursor-pointer`} onClick={() => navigateTo('love-story')}>
            <Image src="/assets/themes/estella/love-story.webp" alt='Love Story' width={150} height={150} />
          </div>
          <div id='about-us' className={`w-[170px] h-[170px] absolute left-1/2 bottom-[50px] flex items-center justify-center ${isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(255,255,255,1)]' : ''} animate-custom-pulse-center [animation-delay:150ms] cursor-pointer`} onClick={() => navigateTo('about')}>
            <Image src="/assets/themes/estella/about-us.webp" alt='About Us' width={170} height={170} />
          </div>

          <div id='gift' className={`w-[90px] h-[90px] absolute right-[30px] top-[100px] flex items-center justify-center ${isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(255,255,255,1)]' : ''} animate-custom-pulse [animation-delay:300ms] cursor-pointer`} onClick={() => navigateTo('gift')}>
            <Image src="/assets/themes/estella/gift.webp" alt='Gift' width={90} height={90} />
          </div>
          <div id='dresscode' className={`w-[120px] h-[120px] absolute right-[7px] top-[230px] flex items-center justify-center ${isLightOn ? 'filter drop-shadow-[0_0_10px_rgba(255,255,255,1)]' : ''} animate-custom-pulse [animation-delay:500ms] cursor-pointer`} onClick={() => navigateTo('dresscode')}>
            <Image src="/assets/themes/estella/dresscode.webp" alt='Dresscode' width={120} height={120} />
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
      />
      <MessagesModal
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
      />
    </div>
  )
}

export default LayoutGame