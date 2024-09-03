import Image from "next/image";
import { getDictionary } from "../app/[lang]/dictionaries";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const Hero = ({
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
        className="w-full min-h-screen container flex flex-col items-center sm:items-start"
      >
        <div className="flex-1 flex flex-col justify-center pb-12 sm:pb-0 h-full">
          <p className="text-4xl sm:text-6xl">{dict.hero.headline}</p>
          <p className="text-3xl sm:text-6xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            {dict.hero.subheadline}
          </p>
          <div className="flex gap-2 items-center justify-center sm:justify-start w-full mt-2">
            {dict.hero.buttons.map((button) => (
              <a
                key={button.id}
                className={buttonVariants({
                  variant:
                    button.variant === "default" || button.variant === "outline"
                      ? button.variant
                      : "default",
                })}
                target="_blank"
                rel="noopener noreferrer"
                download={button.download}
                href={button.href}
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
