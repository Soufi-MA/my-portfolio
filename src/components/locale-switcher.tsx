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
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-lg" variant="outline" size={"icon"}>
          {lang}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex justify-between"
          onClick={() => router.replace(redirectedPathName("en"))}
        >
          <div className="flex flex-col">
            <p>English</p>
            <p className="text-xs text-muted-foreground">English</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-between"
          onClick={() => router.replace(redirectedPathName("ar"))}
        >
          <div className="flex flex-col">
            <p>Arabic</p>
            <p className="text-xs text-backgroundmuted-foreground">العربية</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
