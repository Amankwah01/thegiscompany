import AboutUs from "@/components/about-us";
import { Navigation } from "@/components/app-navbar";
import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center font-sans">
      <main className="relative flex min-h-screen w-full flex-col items-center justify-between bg-transparent dark:bg-black sm:items-start">
          <Navigation />
          <Hero />
          <div className="w-full flex md:px-60 justify-center items-center flex-col">
              <Services />
              <AboutUs />
              <ContactUs />
          </div>
      </main>
    </div>
  );
}
