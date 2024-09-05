import React, { Fragment } from "react";
import { getDictionary } from "../../dictionaries";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const page = async ({
  params: { lang, projectName },
}: {
  params: {
    lang: "en" | "ar";
    projectName: string;
  };
}) => {
  const dict = await getDictionary(lang);
  const project = dict.projects.find(
    (project) => project.id === decodeURIComponent(projectName)
  );

  if (!project) return notFound();
  return (
    <div className="container pt-28 lg:px-0 max-w-[1000px] flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl sm:text-5xl">{project.title}</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {project.createdAt.toLocaleDateString(
              lang === "ar" ? "ar-EG" : "en-US",
              {
                year: "numeric",
                month: "long",
              }
            )}
          </p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "bg-foreground text-background hover:bg-foreground/80"
          )}
        >
          {dict.headers.visit}
        </a>
      </div>
      <p className="text-sm sm:text-base">{project.summary}</p>
      <div className="flex flex-col gap-4">
        {project.images.map((image) => (
          <Fragment key={image.id}>
            <div
              className="md:app-frame win borderless dark:hidden"
              data-url={project.url}
            >
              <Image
                className="w-full object-cover max-md:rounded-lg"
                src={image.url}
                width={1000}
                height={640}
                alt=""
              />
            </div>
            <div
              className="hidden dark:block md:app-frame win borderless dark"
              data-url={project.url}
            >
              <Image
                className="w-full object-cover max-md:rounded-lg"
                src={image.darkUrl}
                width={1000}
                height={640}
                alt=""
              />
            </div>
          </Fragment>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl sm:text-2xl">{dict.headers.techs}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((stack) => (
            <span
              key={stack}
              className="bg-muted text-muted-foreground text-xs sm:text-sm px-4 py-2 rounded-md"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
