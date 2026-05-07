import Image from "next/image";


export const ElementAtas = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <Image src="/assets/themes/royal-garden/daunatastengah.webp" alt="ornamen-atas" width={1280} height={720} className="absolute top-0 left-0 right-0" />
      <Image src="/assets/themes/royal-garden/daun-atas-kiri.webp" alt="ornamen-bawah-kanan" width={180} height={180} className={`absolute -top-10  left-0 scale-x-[-1] animate-wind ${className}`} />
      <Image src="/assets/themes/royal-garden/daun-atas-kiri.webp" alt="ornamen-daun" width={180} height={180} className={`absolute -top-5 right-0 animate-wind ${className}`} />
    </>
  )
}