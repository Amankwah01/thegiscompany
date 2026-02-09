import React from "react";
import { Button } from "./ui/button";
// import Image from "next/image";
import Link from "next/dist/client/link";

function Hero() {
  return (
    <div
      id="hero"
      className="grid grid-cols-1 items-center justify-between h-[60vh] w-full bg-[url('/bg-tgc.jpg')] bg-size-[auto_1100px] bg-fixed bg-no-repeat bg-center bg-white
      dark:bg-black p-[60px]"
    >
      {/*<div>*/}
      {/*  <Image*/}
      {/*    src="/the-gis-company-logo.jpeg"*/}
      {/*    alt="Hero Image"*/}
      {/*    width={500}*/}
      {/*    height={300}*/}
      {/*    className="rounded-lg"*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="col-span-2">
        <div className="flex flex-col w-full text-center px-2 text-white">
          <h1 className="text-6xl font-semibold">
            From Spatial Data To Real-world Insight
          </h1>
          <p className="pt-10">
            We deliver high-quality GIS services, interactive dashboards, and
            web solutions that help organizations analyze, visualize, and act
            with confidence.
          </p>
          <div className="flex w-full justify-center pt-10 gap-10">
            <Link href="#send-request">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-400">
                Send a Request
              </Button>
            </Link>
            <Link href="#contact-us">
              <Button size="lg" className="border-teal-600 text-teal-600 hover:text-teal-400 hover:border-teal-400" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
