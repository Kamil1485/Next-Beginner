"use client";
import Image from "next/image";
import Hero from "../public/Hero.png";
export default function Home() {
  console.log(process.env.API_URL); //server tarafında ulaşılabiliyor,use client,client side da gözükmez configte env ayarıyla göster.
  return (
    <main>
      <Image width={500} src={Hero} />
    </main>
  );
}
