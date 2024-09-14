import { getDictionary } from "@/app/[lang]/dictionaries";
import React from "react";
import { Separator } from "./separator";
import { Github, Linkedin } from "lucide-react";

const Footer = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "en" | "ar";
}) => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 mx-auto w-full py-4 container flex flex-col sm:flex-row gap-4 items-center sm:justify-between">
      <div className="flex gap-4 items-center">
        <p>Soufi.</p>
        <Separator orientation="vertical" className="h-6" />
        &copy; {new Date().getFullYear()} - @soufi.dev
      </div>
      <div className="flex gap-2">
        <a
          href="https://github.com/Soufi-MA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/mahmoud-soufi-840328264/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
