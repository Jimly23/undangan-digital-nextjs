import Image from "next/image";
import { ElementAtas } from "../elements/ElementAtas";
import { ElementBawah } from "../elements/ElementBawah";
import { CardAkad } from "../elements/CardAkad";

export default function Akad() {
  return (
    <div id="akad" className="relative min-h-screen flex justify-center overflow-hidden">
      <Image src="/assets/themes/royal-garden/bg-gunung.webp" alt="bg-mempelai" width={1280} height={720} className="w-full h-full object-cover absolute inset-0 -z-10" />
      <ElementAtas className="z-10" />
      <ElementBawah className="z-10" />

      <div className="z-10 text-white mt-24 text-center px-4 mb-36">
        <h4 id="#bg-gunung" data-aos="zoom-in-up" className="text-lg">Assalamu'alaykum Wr. Wb.</h4>
        <p data-aos="zoom-in-up" className="mt-2">Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaa Allah kami akan menyelenggarakan acara pernikahan:</p>
        <CardAkad />
        <CardAkad className="mb-42 mt-24" />
      </div>
    </div>
  );
}
