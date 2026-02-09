import React from "react";
import {Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle,} from "./ui/card";
import {Button} from "./ui/button";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";

function Services() {
    return (
        <div
            id="contact-us"
            className="w-full flex justify-center flex-col md:col-span-3 col-span-1 md:space-y-3  py-10 bg-white dark:bg-black gap-y-3"
        >
            <h1 className=" w-full text-2xl font-bold text-teal-600 my-2 text-center">
                Our Services
            </h1>
            <div className="w-full flex md:flex-row flex-col justify-center items-start md:gap-x-3 gap-y-3 px-10 text-teal-600">

                <Card className="relative mx-auto w-full pt-0">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35"/>
                    <Image
                        src="https://avatar.vercel.sh/shadcn1"
                        width={200}
                        height={200}
                        alt="Event cover"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardAction>

                        </CardAction>
                        <CardTitle>Essential GIS Support</CardTitle>
                        <Badge variant="secondary">Affordable. Fast. Accurate.</Badge>
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
                        <Button className="w-full">View Event</Button>
                    </CardFooter>
                </Card>
                <Card className="relative mx-auto w-full  pt-0">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35"/>
                    <Image
                        src="https://avatar.vercel.sh/shadcn1"
                        width={200}
                        height={200}
                        alt="Event cover"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardAction>

                        </CardAction>
                        <CardTitle>Professional GIS Analysis</CardTitle>
                        <Badge variant="secondary">Insight-driven GIS solutions.</Badge>
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
                        <Button className="w-full">View Event</Button>
                    </CardFooter>
                </Card>
                <Card className="relative mx-auto w-full  pt-0">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35"/>
                    <Image
                        src="https://avatar.vercel.sh/shadcn1"
                        width={200}
                        height={200}
                        alt="Event cover"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardAction>

                        </CardAction>
                        <CardTitle>Enterprise GIS & Spatial Intelligence</CardTitle>
                        <Badge variant="secondary">Custom GIS solutions built for scale.</Badge>
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
                        <Button className="w-full">View Event</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Services;
