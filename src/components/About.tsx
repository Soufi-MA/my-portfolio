import { getDictionary } from "@/app/[lang]/dictionaries";

const About = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "ar" | "en";
}) => {
  return (
    <section id="about" className="container flex flex-col gap-8 scroll-mt-28">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl sm:text-5xl">{dict.headers.about.headline}</h2>
        <p className="text-xs sm:text-base">{dict.headers.about.subHeadline}</p>
      </div>
      <div>
        <h2 className="text-3xl">{dict.headers.whoAmI}</h2>
        <p>{dict.about}</p>
      </div>
    </section>
  );
};

export default About;
