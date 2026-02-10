import React from "react";
import {Button} from "./ui/button";
// import Image from "next/image";
import Link from "next/dist/client/link";

function Hero() {
    return (
        <div
            id="hero"
            className="top-0 flex items-center justify-center
            h-[95vh] w-full bg-[url('/hero-1.png')] bg-cover bg-fixed bg-no-repeat bg-center z-1110"
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
                        <Link href="#services">
                            <Button size="lg" variant="outline" className="dark:bg-green-400 hover:text-white border-white bg-green-700 hover:bg-green-800">
                                Send a Request
                            </Button>
                        </Link>
                        <Link href="#contact-us">
                            <Button size="lg"
                                    className="dark:border-green-400 border-green-700 hover:border-green-800 border-2
                                     text-green-700 dark:text-green-500 dark:hover:border-green-400  hover:text-green-800"
                                    variant="outline">
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
