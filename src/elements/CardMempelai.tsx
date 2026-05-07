import Image from "next/image";


export const CardMempelai = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className} mb-10`}>
      <div data-aos="zoom-in-up" className="relative flex flex-col items-center justify-center my-5 w-[200px] mx-auto">
        <Image src="/assets/themes/royal-garden/bingkai-mempelaii.png" alt="mempelai" width={200} height={720} className="mb-3 w-full" />
        <div className="bg-amber-300 absolute left-[6px] top-[7px] w-[95%] h-[90.8%] rounded-tl-[1000px] rounded-tr-[1000px] rounded-bl-[200px] rounded-br-[200px]"></div>
        <Image src="/assets/themes/royal-garden/melati.webp" alt="mempelai" width={50} height={50} className="absolute -left-3 bottom-5" />
        <Image src="/assets/themes/royal-garden/melati-2.webp" alt="mempelai" width={50} height={50} className="absolute -right-3 bottom-5" />
      </div>
      <h4 data-aos="zoom-in-up" className="text-3xl font-bold">Putri Wulandari</h4>
      <p data-aos="zoom-in-up" className="mt-2 text-center">Putri Pertama Dari Bp. Joko Widodo & Hj. Iriana</p>
    </div>
  )
}