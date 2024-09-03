"use client";

import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";
import React from "react";
import { Separator } from "./separator";
import { ModeToggle } from "./toggle";
import LocaleSwitcher from "../locale-switcher";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "en" | "ar";
}) => {
  const pathname = usePathname();
  const LINKS = [
    {
      id: 1,
      href: `/${lang}`,
      label: dict.headers.home,
    },
    {
      id: 2,
      href: `/${lang}/projects`,
      label: dict.headers.projects,
    },
    {
      id: 3,
      href: "#",
      label: dict.headers.about,
    },
    {
      id: 4,
      href: "#",
      label: dict.headers.contacts,
    },
  ];

  const isActive = (href: string) => {
    return `${pathname}` === `${href}`;
  };

  return (
    <nav className="flex items-center gap-4 px-6 py-4 border shadow-md h-[72px] rounded-xl mx-auto place-self-center fixed top-4 bg-background/60 backdrop-blur-md">
      <ul className="flex items-center justify-center">
        {LINKS.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className={cn("px-2", {
                "relative bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 to-pink-500 hover:from-purple-500/80 hover:to-pink-50/80 [text-shadow:0_0_rgba(0,0,0,0.1)]":
                  isActive(link.href),
                "hover:text-muted-foreground": !isActive(link.href),
              })}
            >
              <li>{link.label}</li>
              {isActive(link.href) && (
                <span className="absolute inset-x-[-3px] w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px"></span>
              )}
            </Link>
          );
        })}
      </ul>
      <Separator orientation="vertical" />
      <div className="flex gap-2 items-center justify-center">
        <ModeToggle />
        <LocaleSwitcher lang={lang} />
      </div>
    </nav>
  );
};

export default Navbar;
