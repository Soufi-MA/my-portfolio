import Image from "next/image";
import { getDictionary } from "../app/[lang]/dictionaries";

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
        className="w-full min-h-screen py-4 container flex flex-col-reverse md:flex-row justify-between items-center"
      >
        <div className="flex-1 flex flex-col justify-center h-full">
          <p className="text-6xl">{dict.hero.headline}</p>
          <p className="text-6xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            {dict.hero.subheadline}
          </p>
        </div>
        <div className="flex-1">
          <Image
            className="object-contain h-full w-full"
            src={"https://placehold.co/600x400/png"}
            alt="hero image"
            height={600}
            width={400}
            priority
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
