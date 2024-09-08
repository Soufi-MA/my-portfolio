import { getDictionary } from "@/app/[lang]/dictionaries";

const About = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "ar" | "en";
}) => {
  return (
    <section
      id="about"
      className="container flex flex-col gap-12 scroll-mt-28 py-12"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl sm:text-5xl">{dict.headers.about.headline}</h2>
        <p className="text-xs sm:text-base">{dict.headers.about.subHeadline}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <h2 className="text-3xl sm:flex-1">{dict.headers.whoAmI}</h2>
        <p className="sm:flex-[2]">{dict.about}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <h2 className="text-3xl sm:flex-1">{dict.headers.whatCanIDo}</h2>
        <div className="sm:flex-[2] grid grid-cols-1 md:grid-cols-2 gap-4">
          {dict.whatICanDo.map((service) => (
            <div className="flex flex-col" key={service.title}>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="pl-2 text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <h2 className="text-3xl sm:flex-1">{dict.headers.whyHireMe}</h2>
        <div className="sm:flex-[2] grid grid-cols-1 md:grid-cols-2 gap-4">
          {dict.whyHireMe.map((service) => (
            <div className="flex flex-col" key={service.title}>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="pl-2 text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
