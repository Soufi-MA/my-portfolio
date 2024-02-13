import { HashIcon } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="flex flex-col gap-1">
      <h1 className="flex gap-1 items-center font-bold">
        About{" "}
        <span>
          <a href="#about">
            <HashIcon size={16} />
          </a>
        </span>
      </h1>
      <p className="font-light">
        I&apos;m Mahmoud, a Computer Science graduate based in Addis Ababa,
        Ethiopia, with over 3 years of experience crafting dynamic web
        experiences. My journey began with the fundamentals of PHP, but my
        passion for innovation led me to explore the React and Next.js
        ecosystems, where I now build interactive and performant applications.
      </p>
    </section>
  );
};

export default About;
