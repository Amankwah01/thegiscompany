"use client";
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import React from "react";

export function Navigation() {
  const isMobile = useIsMobile();
  return (
    <nav className="sticky top-0 overflow-hidden w-full flex justify-between items-center bg-background py-3 text-teal-600 px-10 z-100 gap-x-2">
      <Link href="/" className="text-lg font-semibold flex items-center gap-x-2">
        <Image
            src="/logo_1.png"
            alt="Hero Image"
            width={30}
            height={20}
            className="rounded-lg"
        /> the GIS Company
      </Link>
      {/* Right Side */}
      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="flex-wrap">
           <NavigationMenuItem className="bg-transparent focus:outline-none focus:ring-0 focus:shadow-none">
             <NavigationMenuLink asChild>
               <Link href="#services">
                 Services
               </Link>
             </NavigationMenuLink>
          </NavigationMenuItem>
           <NavigationMenuItem className="bg-transparent focus:outline-none focus:ring-0 focus:shadow-none">
            <NavigationMenuLink asChild>
              <Link href="#contact-us">
                Contact Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
           <NavigationMenuItem className="bg-transparent focus:outline-none focus:ring-0 focus:shadow-none">
            <NavigationMenuLink asChild>
              <Link href="#about-us">
                About Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="bg-transparent focus:outline-none focus:ring-0 focus:shadow-none">
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

