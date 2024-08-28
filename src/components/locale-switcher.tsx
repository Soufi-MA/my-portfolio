"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
export default function LocaleSwitcher({ lang }: { lang: "ar" | "en" }) {
  const router = useRouter();
  const pathName = usePathname();
  const redirectedPathName = (lang: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = lang;
    console.log(segments.join("/"));
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-lg" variant="outline" size={"icon"}>
          {lang === "en" ? "🇬🇧" : "🇸🇦"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => router.replace(redirectedPathName("en"))}
        >
          English 🇬🇧
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.replace(redirectedPathName("ar"))}
        >
          Arabic 🇸🇦
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
