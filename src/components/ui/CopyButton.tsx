"use client";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useState } from "react";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Clipboard, CopyCheck, Mail } from "lucide-react";

const CopyButton = ({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    navigator.clipboard.writeText("soufi.m.ahmed@gmail.com");
    setTimeout(() => {
      setActive(false);
    }, 2000);
  };

  return (
    <Button
      variant={"secondary"}
      size={"lg"}
      onClick={() => handleClick()}
      className="flex items-center justify-center relative text-lg rounded-md border-muted-foreground border-[1px] border-dashed px-4 overflow-hidden group"
    >
      <span className="flex items-center gap-2 ransition-transform duration-500 group-hover:-translate-y-10">
        {dict.contact.copyButton.beforeHover}
        <Mail className="w-5 h-5" />
      </span>

      <span className="hidden items-center gap-2 sm:flex absolute transition-transform duration-500 translate-y-10 group-hover:translate-y-0">
        {dict.contact.copyButton.beforeClick}
        <Clipboard className="w-5 h-5" />
      </span>

      <span
        className={cn(
          "absolute flex gap-2 items-center justify-center transition-transform duration-500 translate-y-20 bg-background z-10 h-full w-full",
          {
            "translate-y-0": active,
          }
        )}
      >
        {dict.contact.copyButton.afterClick}
        <CopyCheck className="w-5 h-5" />
      </span>
    </Button>
  );
};

export default CopyButton;
