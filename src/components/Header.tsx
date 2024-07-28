import Image from "next/image";
import { ModeToggle } from "./ui/toggle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Github } from "lucide-react";
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <>
      <section className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="rounded-full h-[64px] w-[64px]">
            <Image
              className="rounded-full object-cover"
              src="/profile.png"
              alt="profile"
              width={64}
              height={64}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-foreground font-semibold">Mahmoud Soufi</p>
            <p className="text-muted-foreground">Full Stack Developer</p>
            <p className="text-muted-foreground">UI/UX</p>
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
            <Github />
          </a>
        </div>
      </section>
      <Separator />
    </>
  );
};

export default Header;
