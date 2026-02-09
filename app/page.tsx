import AboutUs from "@/components/about-us";
import { Navigation } from "@/components/app-navbar";
import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import Image from "next/image";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start  rounded-2xl">
          <Navigation />
          <Hero />
          <Services />
          <AboutUs />
          <ContactUs />
      </main>
    </div>
  );
}
