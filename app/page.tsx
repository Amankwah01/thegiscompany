import AboutUs from "@/components/about-us";
import { Navigation } from "@/components/app-navbar";
import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center font-sans bg-[url('/tgc-bg.png')] bg-size-[auto_1100px] bg-fixed bg-no-repeat bg-center scroll-smooth">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between px-8 bg-white dark:bg-black sm:items-start  my-10 rounded-2xl">
        <Navigation />
        <Hero />
        <AboutUs />
        <ContactUs />
      </main>
    </div>
  );
}
