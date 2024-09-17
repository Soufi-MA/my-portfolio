"use client";

import { ChevronDown, Circle, Dot } from "lucide-react";
import { getDictionary } from "../app/[lang]/dictionaries";
import { buttonVariants } from "./ui/button";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import dynamic from "next/dynamic";
import { Badge } from "./ui/badge";
const ModelViewer = dynamic(() => import("./ModelViewer"), {
  ssr: false,
});

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
        id="home"
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="relative w-full"
      >
        <div className="min-h-svh flex flex-col items-center pb-24 sm:pb-0 sm:items-start container">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 items-center justify-evenly w-full z-10 pt-24 sm:pt-0">
            <div className="flex flex-col justify-center items-center sm:items-start sm:pb-0">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex flex-col items-center sm:items-start"
              >
                <Badge
                  className="mb-2 flex gap-2 w-max py-2 px-4 bg-background/60 backdrop-blur-md cursor-default"
                  variant={"secondary"}
                >
                  <Circle size={16} fill="green" color="green" />
                  <p className="text-sm">{dict.hero.availablity}</p>
                </Badge>
                <p className="text-4xl sm:text-6xl">{dict.hero.headline}</p>
                <p className="text-3xl sm:text-6xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 to-pink-500">
                  {dict.hero.subheadline}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-2 items-center justify-center sm:justify-start w-full mt-2"
              >
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
              </motion.div>
            </div>
            <ModelViewer />
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-4 left-0 right-0 flex flex-col justify-center items-center gap-2 z-10"
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
