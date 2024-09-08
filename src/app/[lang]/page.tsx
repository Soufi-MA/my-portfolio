import Hero from "@/components/Hero";
import { getDictionary } from "./dictionaries";
import { cn } from "@/lib/utils";
import Projects from "../../components/Projects";
import About from "@/components/About";
import Contacts from "@/components/Contacts";

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="flex flex-col gap-16 w-full min-h-screen pb-8">
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

      <Projects dict={dict} lang={lang} />

      <div className="bg-muted mx-4 rounded-xl">
        <About dict={dict} lang={lang} />
      </div>

      <Contacts dict={dict} lang={lang} />
    </div>
  );
}
