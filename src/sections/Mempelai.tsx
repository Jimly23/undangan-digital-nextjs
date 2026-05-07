import Image from "next/image";
import { ElementAtas } from "../elements/ElementAtas";
import { ElementBawah } from "../elements/ElementBawah";
import { CardMempelai } from "../elements/CardMempelai";

export default function Mempelai() {
  return (
    <div id="mempelai" className="relative min-h-screen flex justify-center overflow-hidden">
      <Image src="/assets/themes/royal-garden/bg-gunung.webp" alt="bg-mempelai" width={1280} height={720} className="w-full h-full object-cover absolute inset-0 -z-10" />
      <ElementAtas />
      <ElementBawah className="z-10" />

      <div className="z-10 text-white mt-24 text-center px-4">
        <h4 className="text-lg">Assalamu'alaykum Wr. Wb.</h4>
        <p className="mt-2">Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaa Allah kami akan menyelenggarakan acara pernikahan:</p>
        <CardMempelai />
        <CardMempelai className="mb-[250px]" />
      </div>
    </div>
  );
}
