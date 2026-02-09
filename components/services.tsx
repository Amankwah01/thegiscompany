import React from "react";
import {Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle,} from "./ui/card";
import {Button} from "./ui/button";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";

function Services() {
    return (
        <div
            id="services"
            className="w-full flex justify-center flex-col md:col-span-3 col-span-1 md:space-y-3  py-10 bg-white dark:bg-black gap-y-3"
        >
            <h1 className=" w-full text-2xl font-bold text-teal-600 my-2 text-center">
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
                        <Badge variant="secondary" className="bg-green-700 text-white">Affordable. Fast. Accurate.</Badge>
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
                        <Button className="w-full dark:bg-green-400 bg-green-700 hover:bg-green-800">View Event</Button>
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
                        <Badge variant="secondary" className="bg-green-700 text-white">Insight-driven GIS solutions.</Badge>
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
                        <Button className="w-full dark:bg-green-400 bg-green-700 hover:bg-green-800">View Event</Button>
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
                        <Badge variant="secondary" className="bg-green-700 text-white">Custom GIS solutions built for scale.</Badge>
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
                        <Button className="w-full dark:bg-green-400 bg-green-700 hover:bg-green-800">View Event</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Services;
