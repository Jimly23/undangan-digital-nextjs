import Image from "next/image";


export const ElementBawah = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <Image src="/assets/themes/royal-garden/merak.webp" data-aos="fade-up" data-aos-delay={500} alt="ornamen-atas" width={150} height={150} className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${className}`} />
      <Image src="/assets/themes/royal-garden/daun-bawah.webp" data-aos="fade-up" alt="ornamen-atas" width={1280} height={720} className={`absolute -bottom-5 left-0 right-0 ${className}`} />
      <Image src="/assets/themes/royal-garden/bunga-bawah-kiri.webp" data-aos="zoom-in-up" data-aos-delay={200} alt="ornamen-atas" width={180} height={180} className={`absolute -bottom-4 left-0 ${className}`} />
      <Image src="/assets/themes/royal-garden/bunga-bawah-kiri.webp" data-aos="zoom-in-up" data-aos-delay={200} alt="ornamen-bawah-kanan" width={180} height={180} className={`absolute -bottom-4 right-0 scale-x-[-1] ${className}`} />
      <Image src="/assets/themes/royal-garden/kupu.webp" alt="ornamen-bawah-kanan" width={100} height={100} className={`absolute bottom-0 right-0 scale-x-[-1] ${className}`} />
      <Image src="/assets/themes/royal-garden/kupu-2.webp" alt="ornamen-bawah-kanan" width={80} height={80} className={`absolute bottom-0 left-0 scale-x-[-1] ${className}`} />
    </>
  )
}