import Hero from "@/components/Hero";
import { getDictionary } from "./dictionaries";
import { cn } from "@/lib/utils";

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
          "absolute top-[25%] w-[40%] h-1/4 blur-[100px] -z-10 opacity-30 dark:opacity-25",
          {
            "left-0": lang === "en",
            "right-0": lang === "ar",
          }
        )}
      ></span>
      <Hero dict={dict} lang={lang} />
    </div>
  );
}
