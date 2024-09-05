import { getDictionary } from "@/app/[lang]/dictionaries";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

interface Project {
  id: number;
  thumbnail: string;
  title: string;
  body: string;
  stack: string[];
  url: string;
}

const Projects = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "ar" | "en";
}) => {
  const ProjectCard = ({
    project,
  }: {
    project: Awaited<ReturnType<typeof getDictionary>>["projects"][0];
  }) => (
    <div className="relative w-full border rounded-xl h-[480px] overflow-hidden group cursor-pointer">
      <Link href={`/${lang}/projects/${project.id}`}>
        <h2 className="absolute top-4 left-4 right-4 z-10 text-3xl sm:text-4xl text-center text-white font-semibold">
          {project.title}
        </h2>
        <Image
          className="h-full w-full rounded-xl group-hover:scale-110 transition-all duration-200 ease-in object-cover"
          src={project.thumbnail}
          alt=""
          height={480}
          width={660}
        />
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={project.url}
        className={cn(
          buttonVariants({ size: "icon" }),
          "absolute bottom-4 right-4 z-10 rounded-full text-black bg-white hover:bg-white/80"
        )}
      >
        <ExternalLink />
      </a>
    </div>
  );

  return (
    <section id="projects" className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dict.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
