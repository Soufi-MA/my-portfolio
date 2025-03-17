"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Link, Rocket } from "lucide-react";
import { LiaTelegram } from "react-icons/lia";

const MessageButton = ({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 2000);
  };

  return (
    <a
      href="https://t.me/SoufiMa"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "flex items-center justify-center relative text-lg rounded-md border-muted-foreground border-[1px] border-dashed px-4 py-2 overflow-hidden group",
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-300"
      )}
    >
      {/* Default State: Chat on Telegram */}
      <span className="flex items-center gap-2 transition-transform duration-500 group-hover:-translate-y-10">
        {dict.contact.messageButton.beforeHover}
        <LiaTelegram className="w-5 h-5" />
      </span>

      {/* Hover State: Open Telegram */}
      <span className="hidden items-center gap-2 sm:flex absolute transition-transform duration-500 translate-y-10 group-hover:translate-y-0">
        {dict.contact.messageButton.beforeClick}
        <Link className="w-5 h-5" />
      </span>

      {/* Active State: Opened */}
      <span
        className={cn(
          "absolute flex gap-2 items-center justify-center transition-transform duration-500 translate-y-20 bg-background z-10 h-full w-full",
          {
            "translate-y-0": active,
          }
        )}
      >
        {dict.contact.messageButton.afterClick}
        <Rocket className="w-5 h-5" />
      </span>
    </a>
  );
};

export default MessageButton;
