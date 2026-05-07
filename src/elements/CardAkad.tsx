import Image from "next/image";


export const CardAkad = ({ className = "" }: { className?: string }) => {
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