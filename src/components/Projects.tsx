import { HashIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Project {
  id: number;
  title: string;
  body: string;
  stack: string[];
  url: string;
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
    url: "https://ethiopian-railways.onrender.com",
  },
  {
    id: 2,
    title: "3D furniture store",
    body: "Revolutionize the way you source furniture for your creative projects. An innovative platform built specifically for designers, architects, and engineers, offering a seamless experience to find, explore, and source the perfect furniture for your vision.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Three.js",
      "MongoDB",
      "WebGL",
      "PayloadCMS",
    ],
    url: "https://furniture-store-3pnl.onrender.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-1">
      <a href="#projects" className="flex gap-1 items-center font-bold">
        Projects{" "}
        <span>
          <HashIcon size={16} />
        </span>
      </a>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
