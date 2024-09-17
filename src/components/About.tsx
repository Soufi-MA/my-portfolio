"use client";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { cn } from "@/lib/utils";
import { TablerIcon } from "@tabler/icons-react";
import { motion } from "framer-motion";
import {
  IconTerminal2,
  IconDatabase,
  IconShoppingCart,
  IconWorldWww,
} from "@tabler/icons-react";

type IconName =
  | "IconTerminal2"
  | "IconDatabase"
  | "IconShoppingCart"
  | "IconWorldWww";
function isIconName(value: any): value is IconName {
  const validIconNames: IconName[] = [
    "IconTerminal2",
    "IconDatabase",
    "IconShoppingCart",
    "IconWorldWww",
  ];
  return validIconNames.includes(value);
}

const importIcon = (iconName: IconName): TablerIcon | undefined => {
  switch (iconName) {
    case "IconTerminal2":
      return IconTerminal2;
    case "IconDatabase":
      return IconDatabase;
    case "IconShoppingCart":
      return IconShoppingCart;
    case "IconWorldWww":
      return IconWorldWww;
  }
};

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

      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-4xl sm:flex-1 text-center w-full">
          {dict.headers.whatCanIDo}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 mx-auto">
          {dict.whatICanDo.map((service, index) => {
            let ImportedIcon;
            if (isIconName(service.icon)) {
              ImportedIcon = importIcon(service.icon);
            }
            return (
              <Service
                key={service.title}
                title={service.title}
                description={service.description}
                icon={ImportedIcon}
                index={index}
              />
            );
          })}
        </div>
      </div>

      <div className="relative flex flex-col sm:flex-row gap-4 items-start">
        <h2 className="sm:sticky top-28 text-4xl sm:flex-1">
          {dict.headers.whyHireMe}
        </h2>
        <div className="sm:flex-[2] flex flex-col gap-8">
          {dict.whyHireMe.map((service, i) => (
            <div key={service.title} className="flex gap-4">
              <p className="text-2xl sm:text-3xl">
                {(i + 1).toLocaleString(lang)}.
              </p>
              <div className="flex flex-col gap-2 h-full">
                <h3 className="text-lg sm:text-2xl font-bold">
                  {service.title}
                </h3>
                <p className="pl-2 text-sm sm:text-base text-muted-foreground">
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

const Service = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: TablerIcon | undefined;
  index: number;
}) => {
  const IconComponent = icon;
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-6 sm:py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {IconComponent ? <IconComponent /> : ""}
      </div>
      <div className="text-lg sm:text-xl font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default About;
