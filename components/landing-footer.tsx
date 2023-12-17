"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingFooter = () => {
  const underline_effect = cn(
    "relative inline-block group after:bg-blue-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
  );

  return (
    <footer className="p-4">
      <div className="pt-4 hidden md:flex bg-transparent items-center justify-between ">
        <Link href="/" className="flex items-center">
          <h1 className={cn("text-2xl font-bold text-white", font.className)}>
            SastaGPT
          </h1>
        </Link>
        <div className={cn("text-sm font-bold text-white", font.className)}>
          <div className="flex flex-row p-2 gap-6 items-baseline">
            <Link href="#home" className={underline_effect}>
              <span className="group-hover:after:w-full">Home</span>
            </Link>
            <Link href="#features" className={underline_effect}>
              <span className="group-hover:after:w-full">Features</span>
            </Link>
            <Link href="#faq" className={underline_effect}>
              <span className="group-hover:after:w-full">FAQ's</span>
            </Link>
            <Link href="#contactus" className={underline_effect}>
              <span className="group-hover:after:w-full">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full border-[0.5px] my-6 border-gray-700 sm:mx-auto lg:my-8"></div>
      <span className="block text-sm text-gray-300 text-center font-semibold">
        © 2023 <Link href="/">SastaGPT</Link>. Created with ❤️ by{" "}
        <Link
          href="https://github.com/GivenBY"
          className="underline text-gray-100 cursor-pointer block md:inline-block"
        >
          Suryakant Upadhyay
        </Link>
      </span>
    </footer>
  );
};
