import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Stacks from "@/components/Stacks";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="flex flex-col max-w-[720px] gap-8 w-full px-4 py-16 mx-auto">
      <Header dict={dict} lang={lang} />
      <About dict={dict} lang={lang} />
      <Stacks dict={dict} lang={lang} />
      <Projects dict={dict} lang={lang} />
      <Contacts dict={dict} lang={lang} />
    </div>
  );
}
