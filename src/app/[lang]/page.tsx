import Hero from "@/components/Hero";
import { getDictionary } from "./dictionaries";
import { cn } from "@/lib/utils";
import Projects from "../../components/Projects";

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="flex flex-col gap-8 w-full min-h-screen">
      <span
        style={{
          background: "conic-gradient(from 2.35rad,#4ecdc4,#0658f6)",
        }}
        className={cn(
          "absolute top-[calc(100vh/4)] w-[40%] h-[calc(100vh/4)] blur-[100px] -z-10 opacity-30 dark:opacity-25",
          {
            "left-0": lang === "en",
            "right-0": lang === "ar",
          }
        )}
      ></span>
      <Hero dict={dict} lang={lang} />
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl sm:text-5xl">
            {dict.headers.projects.headline}
          </h2>
          <p className="text-xs sm:text-base">
            {dict.headers.projects.subHeadline}
          </p>
        </div>
        <Projects dict={dict} lang={lang} />
      </div>
    </div>
  );
}
