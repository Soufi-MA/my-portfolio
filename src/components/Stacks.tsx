import { HashIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import {
  SiExpress,
  SiGit,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNextui,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

interface Stack {
  id: number;
  name: string;
  icon: IconType;
  color: string;
}

const stacks: Stack[] = [
  {
    id: 1,
    name: "React",
    icon: SiReact,
    color: "cyan",
  },
  {
    id: 2,
    name: "Next.js",
    icon: SiNextdotjs,
    color: "white",
  },
  {
    id: 3,
    name: "Express",
    icon: SiExpress,
    color: "red",
  },
  {
    id: 4,
    name: "Node.js",
    icon: SiNodedotjs,
    color: "green",
  },
  {
    id: 5,
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "cyan",
  },
  {
    id: 6,
    name: "MongoDB",
    icon: SiMongodb,
    color: "green",
  },
  {
    id: 7,
    name: "Redis",
    icon: SiRedis,
    color: "red",
  },
  {
    id: 8,
    name: "JavaScript",
    icon: SiJavascript,
    color: "yellow",
  },
  {
    id: 9,
    name: "TypeScript",
    icon: SiTypescript,
    color: "cyan",
  },
  {
    id: 10,
    name: "Golang",
    icon: SiGo,
    color: "cyan",
  },
  {
    id: 11,
    name: "Python",
    icon: SiPython,
    color: "blue",
  },
  {
    id: 12,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "cyan",
  },
  {
    id: 13,
    name: "Shadcn UI",
    icon: SiNextui,
    color: "white",
  },
  {
    id: 14,
    name: "Three.js",
    icon: SiThreedotjs,
    color: "white",
  },
  {
    id: 15,
    name: "Git",
    icon: SiGit,
    color: "red",
  },
];

const Stacks = () => {
  return (
    <section id="stacks" className="flex flex-col gap-1">
      <a href="#stacks" className="flex gap-1 items-center font-bold">
        Stacks{" "}
        <span>
          <HashIcon size={16} />
        </span>
      </a>
      <div className={"flex flex-wrap gap-2"}>
        {stacks.map((stack) => {
          const color = stack.color;
          return (
            <div
              key={stack.id}
              className={`flex gap-1 p-2 border rounded-md items-center cursor-pointer text-lg font-semibold hover:text-${color}-500 hover:shadow-custom hover:shadow-${color}-500 transition-all duration-300`}
            >
              <stack.icon size={18} />
              <p className="select-none">{stack.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stacks;
