import { HashIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Project {
  id: number;
  title: string;
  body: string;
  stack: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ethiopian Railways",
    body: "Experience the convenience of modern rail travel with the Ethiopian Railways online ticket reservation system, built with cutting-edge technologies for a smooth and secure journey.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
    ],
  },
  {
    id: 2,
    title: "3D furniture store",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ullam voluptates, ratione inventore obcaecati deleniti minima, dignissimos assumenda autem debitis nisi beatae? Nobis, ipsa dolorem?",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Three.js",
      "MongoDB",
      "WebGL",
      "PayloadCMS",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-1">
      <h1 className="flex gap-1 items-center font-bold">
        Projects{" "}
        <span>
          <Link scroll href="#projects">
            <HashIcon size={16} />
          </Link>
        </span>
      </h1>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full flex flex-col gap-2 px-4 py-2 border rounded-md bg-muted hover:scale-[1.01] transition-all duration-100 ease-in cursor-pointer"
          >
            <h2 className="font-bold">{project.title}</h2>
            <p className="text-muted-foreground">{project.body}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((stack) => (
                <span
                  key={stack}
                  className="border px-4 py-2 bg-primary text-primary-foreground rounded-md"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
