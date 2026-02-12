import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "./ui/card";
import {Label} from "./ui/label";
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {Textarea} from "./ui/textarea";

function ContactUs() {
    return (
        <div
            id="contact-us"
            className="w-full flex justify-center p-10 bg-white dark:bg-black"
        >
            <div className=" dark:bg-green-400 bg-green-700 flex flex-col h-full p-10 mb-5 rounded-2xl">
                <div className="flex md:flex-row flex-col justify-between w-full h-full">
                    <div className="w-full md:ms-10 flex flex-col gap-y-2 justify-center items-start text-white">
                        <h1 className="text-4xl font-semibold text mb-2">A
                            Get in touch with <br/> us
                        </h1>
                        <p className="leading-6">
                            Reach out to us today, and our team will be happy to assist you.
                        </p>
                        <div className="flex flex-col">
                            Email:
                            <a className="text-lg" href="mailto:mail.thegiscompany@gmail.com">
                                mail.thegiscompany@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-col">
                            Phone:
                            <a className="text-lg" href="tel:+233501308600">
                                +233 50 130 8600
                            </a>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <Card className="w-full md:ms-10">
                            <CardHeader>
                                <CardTitle>Contact Us</CardTitle>
                                <CardDescription></CardDescription>
                                {/* <CardAction>
                  <Button variant="link">Sign Up</Button>
                </CardAction> */}
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col gap-6">
                                        <div className="w-full flex justify-between gap-2">
                                            <div className="w-full ">
                                                <Label htmlFor="first-name">First Name</Label>
                                                <Input
                                                    className="w-full"
                                                    id="first-name"
                                                    placeholder="John"
                                                    required
                                                />
                                            </div>
                                            <div className="w-full gap-2">
                                                <Label htmlFor="last-name">Last Name</Label>
                                                <Input
                                                    className="w-full"
                                                    id="last-name"
                                                    placeholder="Doe"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="m@example.com"
                                                required
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label htmlFor="message">Message</Label>
                                            </div>
                                            <Textarea
                                                id="message"
                                                placeholder="Type your message here."
                                            />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex-col gap-2">
                                <Button
                                    type="submit"
                                    className="dark:bg-green-400 bg-green-700 hover:bg-green-800 w-full"
                                >
                                    Submit
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
