"use client";

import { ChevronDown } from "lucide-react";
import { getDictionary } from "../app/[lang]/dictionaries";
import { buttonVariants } from "./ui/button";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "en" | "ar";
}) => {
  const isMobile = window && window.matchMedia("(max-width: 640px)").matches;
  return (
    <>
      <section
        id="home"
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="relative w-full"
      >
        <div className="min-h-svh flex flex-col items-center sm:items-start container">
          <div className="flex-1 flex flex-col justify-center pb-12 sm:pb-0 h-full">
            <TextGenerateEffect
              lines={[dict.hero.headline, dict.hero.subheadline]}
              lineClassNames={[
                "text-4xl sm:text-6xl",
                "text-3xl sm:text-6xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]",
              ]}
            />
            <div className="flex gap-2 items-center justify-center sm:justify-start w-full mt-2">
              {dict.hero.buttons.map((button) => (
                <a
                  key={button.id}
                  className={buttonVariants({
                    variant:
                      button.variant === "default" ||
                      button.variant === "outline"
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
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-4 left-0 right-0 flex flex-col justify-center items-center gap-2"
          >
            <p>{dict.headers.learnMore}</p>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                times: [0, 0.7, 1],
                ease: ["easeInOut", "easeIn"],
              }}
            >
              <ChevronDown />
            </motion.div>
          </motion.div>
        </div>
        <BackgroundBeams />
      </section>
    </>
  );
};

export default Hero;
