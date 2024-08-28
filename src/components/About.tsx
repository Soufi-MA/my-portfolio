import { getDictionary } from "@/app/[lang]/dictionaries";
import { HashIcon } from "lucide-react";

const About = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "ar" | "en";
}) => {
  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      id="about"
      className="flex flex-col gap-1"
    >
      <a href="#about" className="flex gap-1 items-center font-bold">
        {dict.headers.about}{" "}
        <span>
          <HashIcon size={16} />
        </span>
      </a>
      <p className="font-light">{dict.about}</p>
    </section>
  );
};

export default About;
