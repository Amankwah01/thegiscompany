import React from "react";
import {Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle,} from "./ui/card";
import Image from "next/image";

function Services() {
    return (
        <div
            id="services"
            className="w-full flex justify-center flex-col md:col-span-3 col-span-1 md:space-y-3 mt-10 py-10 bg-white dark:bg-black gap-y-3"
        >
            <h1 className=" w-full text-4xl font-bold text-black my-2 text-center">
                Our Services
            </h1>
            <div className="w-full flex md:flex-row flex-col justify-center items-start md:gap-x-3 gap-y-3 px-10 text-teal-600">

                <Card className="relative mx-auto w-full pt-0">
                    <div className="absolute inset-0 z-30"/>
                    <Image
                        src="/tier-1.png"
                        width={400}
                        height={200}
                        alt="Event cover"
                        className="w-full brightness-100"
                    />
                    <CardHeader>
                        <CardAction>

                        </CardAction>
                        <CardTitle>Essential GIS Support</CardTitle>
                        <p className="bg-green-700 px-1.5 py-1 font-semibold rounded-lg text-[11.5px] w-fit text-white">Affordable. Fast. Accurate.</p>
                        <CardDescription>
                            <div>
                                <ul className="list-disc list-inside">
                                    <li>Georeferencing & digitization</li>
                                    <li>Data cleaning & projections</li>
                                    <li>Simple maps for reports & assignments</li>
                                </ul>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                    </CardFooter>
                </Card>
                <Card className="relative mx-auto w-full  pt-0">
                    <div className="absolute inset-0 z-30"/>
                    <Image
                        src="/tier2.png"
                        width={400}
                        height={200}
                        alt="Event cover"
                        className="w-full brightness-100"
                    />
                    <CardHeader>
                        <CardAction>

                        </CardAction>
                        <CardTitle>Professional GIS Analysis</CardTitle>
                        <p className="bg-green-700 px-1.5 py-1 font-semibold rounded-lg text-[11.5px] w-fit text-white">Insight-driven GIS solutions.</p>
                        <CardDescription>
                            <div>
                                <ul className="list-disc list-inside">
                                    <li>Advanced spatial analysis</li>
                                    <li>Remote sensing & modeling</li>
                                    <li>Research-ready maps & methods</li>
                                </ul>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                    </CardFooter>
                </Card>
                <Card className="relative mx-auto w-full  pt-0">
                    <div className="absolute inset-0 z-30"/>
                    <Image
                        src="/tier3.png"
                        width={400}
                        height={200}
                        alt="Event cover"
                        className="w-full brightness-100"
                    />
                    <CardHeader>
                        <CardAction>

                        </CardAction>
                        <CardTitle>Enterprise GIS & Spatial Intelligence</CardTitle>
                        <p className="bg-green-700 text-white text-pretty px-1.5 py-1 font-semibold rounded-lg text-[11.5px] w-fit">Custom GIS solutions built for scale.</p>
                        <CardDescription>
                            <div>
                                <ul className="list-disc list-inside">
                                    <li>Web maps & dashboards</li>
                                    <li>Spatial databases & automation</li>
                                    <li>Location intelligence & decision support</li>
                                </ul>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </div>
            <div className="w-full flex md:flex-row flex-col justify-center items-start md:gap-x-3 gap-y-3 px-10">
                <Card className="relative mx-auto w-full pt-0 text-center">
                    <CardHeader>
                        <CardAction>

                        </CardAction>
                        <CardTitle className="mt-5 text-2xl">Still Lost?</CardTitle>

                        <CardDescription>
                            <div className="w-full flex flex-col justify-center items-center gap-y-3">
                                <p className="bg-green-700  px-1.5 py-1 font-semibold rounded-lg text-[11.5px] w-fit flex items-center text-white">Custom GIS solutions built for scale.</p>
                                <p>
                                    Have a GIS project in mind? Share your objectives, timeline, and available data, and let’s build a clear, results-driven solution tailored to your needs.

                                </p>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Services;
