import { ExternalLink, HashIcon } from "lucide-react";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="flex flex-col gap-1"
      style={{ scrollBehavior: "smooth" }}
    >
      <a href="#contacts" className="flex gap-1 items-center font-bold">
        Contacts{" "}
        <span>
          <HashIcon size={16} />
        </span>
      </a>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-1">
        <p className="max-md:hidden">Email:</p>
        <a
          className="flex gap-1 hover:underline"
          href="mailto:soufi.m.ahmed@gmail.com"
        >
          soufi.m.ahmed@gmail.com
          <span>
            <ExternalLink size={16} />
          </span>
        </a>

        <p className="max-md:hidden">Github:</p>
        <a
          className="flex gap-1 hover:underline"
          href="https://github.com/Soufi-MA"
        >
          Soufi-MA{" "}
          <span>
            <ExternalLink size={16} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contacts;
