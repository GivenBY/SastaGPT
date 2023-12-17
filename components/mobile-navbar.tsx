"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetOverlay,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Menu } from "lucide-react";
import { menus } from "@/landing-constants";

export const SheetSide = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="md:hidden">
      <Sheet key="top">
        <SheetOverlay className="bg-black/40" />
        <SheetTrigger>
          <Button>
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="top"
          className="bg-[#111827] border-black/10 shadow py-4 text-white"
        >
          <div className="space-y-1">
            {menus.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                <div className="flex items-center flex-1">{route.label}</div>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
