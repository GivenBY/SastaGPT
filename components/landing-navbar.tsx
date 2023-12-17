"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SheetSide } from "./mobile-navbar";

import { menus } from "@/landing-constants";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 flex bg-transparent items-center justify-between ">
      <Link href="/" className="flex items-center">
        <div className="relative h-10 w-10 mr-4">
          <Image fill alt="logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          SastaGPT
        </h1>
      </Link>
      <div
        className={cn(
          "text-[1.5]xl font-bold hidden md:block text-white",
          font.className
        )}
      >
        <div className="flex flex-row p-2 gap-6 items-baseline">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="relative inline-block group after:bg-blue-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              <span className="group-hover:after:w-full">{menu.label}</span>
            </Link>
          ))}
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant="premium"
              className="md:text-lg p-2 md:px-6 rounded-full font-semibold"
            >
              Try Now
            </Button>
          </Link>
        </div>
      </div>
      <SheetSide />
    </nav>
  );
};
