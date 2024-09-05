"use client";

import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Separator } from "./separator";
import { ModeToggle } from "./toggle";
import LocaleSwitcher from "../locale-switcher";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";

const Navbar = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "en" | "ar";
}) => {
  const LINKS = [
    {
      id: "home",
      href: `/${lang}#`,
      label: dict.headers.home,
    },
    {
      id: "projects",
      href: `/${lang}#projects`,
      label: dict.headers.projects.headline,
    },
    {
      id: "about",
      href: `/${lang}#about`,
      label: dict.headers.about,
    },
    {
      id: "contacts",
      href: `/${lang}#contacts`,
      label: dict.headers.contacts,
    },
  ];

  const pathname = usePathname();
  const params = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setActiveTab(window.location.hash.slice(1));
  }, [params]);

  const isActive = (id: string) => {
    if (pathname !== `/${lang}`) {
      return pathname.startsWith(`/${lang}/${id}`);
    } else {
      if (!activeTab && id === "home") return true;
      return id === activeTab;
    }
  };

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        isMenuOpen &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.history.pushState(null, "", " ");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="flex items-center justify-between gap-4 px-6 py-4 border shadow-md h-[72px] w-auto rounded-xl max-sm:left-2 max-sm:right-2 mx-auto place-self-center fixed top-4 bg-background/60 backdrop-blur-md z-20">
      <ul className="hidden sm:flex items-center justify-center">
        {LINKS.map((link) => {
          if (link.id === "home" && pathname === `/${lang}`)
            return (
              <div
                onClick={() => scrollToTop()}
                key={link.id}
                className={cn("px-2 cursor-pointer", {
                  "relative bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 to-pink-500 hover:from-purple-500/80 hover:to-pink-50/80 [text-shadow:0_0_rgba(0,0,0,0.1)]":
                    isActive(link.id),
                  "hover:text-muted-foreground": !isActive(link.id),
                })}
              >
                <li>{link.label}</li>
                {isActive(link.id) && (
                  <span className="absolute inset-x-[-3px] w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px"></span>
                )}
              </div>
            );
          return (
            <Link
              scroll
              key={link.id}
              href={link.href}
              className={cn("px-2", {
                "relative bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 to-pink-500 hover:from-purple-500/80 hover:to-pink-50/80 [text-shadow:0_0_rgba(0,0,0,0.1)]":
                  isActive(link.id),
                "hover:text-muted-foreground": isActive(link.id),
              })}
            >
              <li>{link.label}</li>
              {isActive(link.id) && (
                <span className="absolute inset-x-[-3px] w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px"></span>
              )}
            </Link>
          );
        })}
      </ul>
      <Separator className="hidden sm:block" orientation="vertical" />
      <div className="flex gap-2 items-center justify-center">
        <ModeToggle />
        <LocaleSwitcher lang={lang} />
      </div>

      <div className="sm:hidden" ref={dropdownRef}>
        <div
          className="flex flex-col items-center justify-center gap-2 h-12 w-8 py-2 px-1.5 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`w-full h-0.5 bg-foreground rounded transition-all duration-200 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-[5px]" : null
            }`}
          />
          <div
            className={`w-full h-0.5 bg-foreground rounded transition-all duration-200 ease-in-out ${
              isMenuOpen ? "rotate-[-45deg] translate-y-[-5px]" : null
            }`}
          />
        </div>
        <div
          className={cn(
            "fixed mt-[76px] left-0 right-0 top-0 bg-background/60 backdrop-blur-md border shadow-md rounded-xl h-[180px] flex items-center w-full transition-all duration-200 ease-in-out overflow-hidden",
            {
              "mt-[0px] top-[72px] border-0 h-0": !isMenuOpen,
            }
          )}
        >
          <ul className="w-full">
            {LINKS.map((link) => {
              if (link.id === "home" && pathname === `/${lang}`)
                return (
                  <li
                    key={link.id}
                    className="border-b last:border-b-0 cursor-pointer"
                  >
                    <div
                      className="block px-4 py-2 "
                      onClick={() => {
                        scrollToTop();
                        setIsMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </div>
                  </li>
                );
              return (
                <li key={link.id} className="border-b last:border-b-0">
                  <Link
                    className="block px-4 py-2 "
                    onClick={() => setIsMenuOpen(false)}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
