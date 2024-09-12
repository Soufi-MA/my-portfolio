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
      className="container flex flex-col gap-24 scroll-mt-28 py-12"
    >
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <h2 className="text-4xl sm:flex-1">{dict.headers.whoAmI}</h2>
        <p className="text-xl sm:flex-[2]">{dict.about}</p>
      </div>

      <div className="flex flex-col gap-8 items-start">
        <h2 className="text-4xl sm:flex-1 text-center w-full">
          {dict.headers.whatCanIDo}
        </h2>
        <div className="sm:flex-[2] grid grid-cols-1 md:grid-cols-2 gap-4">
          {dict.whatICanDo.map((service) => (
            <div
              className="flex flex-col bg-muted shadow-md rounded-md px-4 py-4"
              key={service.title}
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col sm:flex-row gap-4 items-start">
        <h2 className="sm:sticky top-28 pb-14 text-4xl sm:flex-1">
          {dict.headers.whyHireMe}
        </h2>
        <div className="sm:flex-[2] flex flex-col gap-8">
          {dict.whyHireMe.map((service, i) => (
            <div key={service.title} className="flex gap-4">
              <p className="text-3xl">{(i + 1).toLocaleString(lang)}.</p>
              <div className="flex flex-col gap-2 h-full">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="pl-2 text-lg text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
