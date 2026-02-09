import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Hospital } from "lucide-react";
import { Textarea } from "./ui/textarea";

function AboutUs() {
  return (
    <div
      id="about-us"
      className="w-full flex justify-center pt-10 bg-white dark:bg-black"
    >
      <div className="flex flex-col h-full mb-5 rounded-2xl">
        <div className="flex flex-col gap-y-3  w-full h-full">
          <h1 className="w-full text-4xl font-bold px-10 text-center">About Us</h1>
          <div className="w-full flex flex-col justify-center items-start px-10">
            <h1 className=" w-full text-2xl font-bold text-teal-600 my-2">
              Aim
            </h1>
            <p className="leading-6">
              To empower businesses, institutions, and communities with accurate
              geospatial insights and digital solutions that support smarter
              planning, efficient resource management, and data-driven
              decisions.
            </p>
          </div>
          <div className="w-full flex flex-col  justify-center items-start px-10">
            <h1 className=" w-full text-2xl font-bold text-teal-600 my-2">
              Our Story
            </h1>
            <div className="grid grid-cols-12 md:grid-cols-1 gap-y-5">
              <div className="rounded-lg border-2 p-5 ">
                <h1 className="w-full text-2xl font-bold my-2">History</h1>
                <p className="leading-6">
                  The GIS Company was founded with the goal of bridging the gap
                  between geospatial technology and everyday decision-making.
                  Built by a dedicated geospatial specialist and developer, the
                  company grew from small mapping tasks into a full-service
                  provider offering GIS analysis, mapping, dashboards, and
                  customized web platforms for businesses and organizations.
                </p>
              </div>
              <div className="rounded-lg border-2 p-5 ">
                <h1 className=" w-full text-2xl font-bold text-black my-2">
                  Mission
                </h1>
                <p className="leading-5">
                  To deliver high-quality GIS services, innovative mapping
                  tools, and modern web solutions that transform complex data
                  into actionable intelligence. We strive to make spatial
                  information accessible, reliable, and impactful for every
                  client we serve.
                </p>
              </div>
              <div className="rounded-lg border-2 p-5 ">
                <h1 className=" w-full text-2xl font-bold text-black my-2">
                  Values
                </h1>
                  <ul className="leading-6">
                    <li className="">
                      Accuracy – We ensure every map, analysis, and solution meets the highest technical standards.
                    </li>
                    <li className="">
                      Innovation – We combine GIS with modern web technologies to deliver smarter digital tools.
                    </li>
                    <li className="">
                      Integrity – We prioritize transparency, trust, and ethical data handling.
                    </li>
                    <li className="">
                      Impact – We focus on solutions that create real value for clients and their communities.
                    </li>
                    <li className="">
                      Collaboration – We work closely with clients to build solutions that fit their needs perfectly.
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
