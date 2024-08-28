import Image from "next/image";
import { ModeToggle } from "./ui/toggle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import { getDictionary } from "../app/[lang]/dictionaries";
import { SiGithub } from "react-icons/si";
import LocaleSwitcher from "./locale-switcher";

const Header = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "en" | "ar";
}) => {
  return (
    <>
      <section
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="w-full flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <div className="rounded-full h-[64px] w-[64px]">
            <Image
              className="rounded-full object-cover"
              src={"/profile.png"}
              alt="profile"
              width={64}
              height={64}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-foreground font-semibold">
              {dict.developer.name}
            </p>
            <p className="text-muted-foreground">{dict.developer.position1}</p>
            <p className="text-muted-foreground">{dict.developer.position2}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <a
            target="_blank"
            href="https://github.com/Soufi-MA"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >
            <SiGithub className="h-[48px] w-[48px] p-2" />
          </a>
          <LocaleSwitcher lang={lang} />
        </div>
      </section>
      <Separator />
    </>
  );
};

export default Header;
