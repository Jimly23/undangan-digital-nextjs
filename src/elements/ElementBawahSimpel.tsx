import Image from "next/image";


export const ElementBawahSimpel = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <Image data-aos="zoom-in-up" src="/assets/themes/royal-garden/bunga-bawah-kiri.webp" alt="ornamen-atas" width={180} height={180} className={`absolute -bottom-3 left-0`} />
      <Image data-aos="zoom-in-up" src="/assets/themes/royal-garden/bunga-bawah-kiri.webp" alt="ornamen-bawah-kanan" width={180} height={180} className={`absolute -bottom-3 right-0 scale-x-[-1]`} />
    </>
  )
}