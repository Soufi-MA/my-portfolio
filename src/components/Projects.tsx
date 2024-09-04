import { getDictionary } from "@/app/[lang]/dictionaries";
import { cn } from "@/lib/utils";
import { HashIcon } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  thumbnail: string;
  title: string;
  body: string;
  stack: string[];
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kabu",
    thumbnail: "/projects/kabu_thumbnail.png",
    body: "Revolutionize the way you source furniture for your creative projects. An innovative platform built specifically for designers, architects, and engineers, offering a seamless experience to find, explore, and source the perfect furniture for your vision.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Three.js",
      "MongoDB",
      "WebGL",
      "PayloadCMS",
    ],
    url: "https://test.kabu.et/",
  },
  {
    id: 2,
    title: "Ethiopian Railways",
    thumbnail: "/projects/railways_thumbnail.png",
    body: "Experience the convenience of modern rail travel with the Ethiopian Railways online ticket reservation system, built with cutting-edge technologies for a smooth and secure journey.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
    ],
    url: "https://ethiopian-railways.onrender.com",
  },
  {
    id: 3,
    title: "Harmony",
    thumbnail: "/projects/harmony_thumbnail.png",
    body: "Experience the convenience of modern rail travel with the Ethiopian Railways online ticket reservation system, built with cutting-edge technologies for a smooth and secure journey.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
    ],
    url: "https://ethiopian-railways.onrender.com",
  },
  {
    id: 4,
    title: "Tribond Trading",
    thumbnail: "/projects/tribond_thumbnail.png",
    body: "Experience the convenience of modern rail travel with the Ethiopian Railways online ticket reservation system, built with cutting-edge technologies for a smooth and secure journey.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
    ],
    url: "https://ethiopian-railways.onrender.com",
  },
];

const Projects = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "ar" | "en";
}) => {
  return (
    <section id="projects" className="container flex flex-col gap-8">
      <h2 className="text-center text-4xl">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="relative w-full border rounded-xl h-[480px] overflow-hidden group cursor-pointer">
    <h2 className="absolute top-4 left-4 right-4 z-10 text-4xl text-center text-white font-semibold">
      {project.title}
    </h2>
    <Image
      className="h-full w-full rounded-xl group-hover:scale-110 transition-all duration-200 ease-in object-cover"
      src={project.thumbnail}
      alt=""
      height={480}
      width={660}
    />
  </div>
);

export default Projects;
