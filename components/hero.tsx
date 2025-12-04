import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/dist/client/link";

function Hero() {
  return (
    <div
      id="hero"
      className="grid grid-cols-3 items-center justify-between w-full mt-10 bg-white dark:bg-black px-10"
    >
      <div>
        <Image
          src="/hero-the-gis-company.jpg"
          alt="Hero Image"
          width={500}
          height={300}
        />
      </div>
      <div className="col-span-2">
        <div className="flex flex-col w-full text-center px-2">
          <h1 className="text-6xl font-semibold">
            Turning Complex Data Into Clear Direction
          </h1>
          <p className="pt-10">
            We deliver high-quality GIS services, interactive dashboards, and
            web solutions that help organizations analyze, visualize, and act
            with confidence.
          </p>
          <div className="flex w-full justify-center pt-10 gap-10">
            <Link href="#get-started">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-400">
                Get Started
              </Button>
            </Link>
            <Link href="#contact-us">
              <Button size="lg" className="border-teal-600" variant="outline">
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
