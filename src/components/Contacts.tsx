import { getDictionary } from "@/app/[lang]/dictionaries";
import { ExternalLink, HashIcon } from "lucide-react";

const Contacts = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
  lang: "ar" | "en";
}) => {
  return (
    <section
      id="contacts"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="flex flex-col gap-1"
      style={{ scrollBehavior: "smooth" }}
    >
      <a href="#contacts" className="flex gap-1 items-center font-bold">
        {dict.headers.contacts}{" "}
        <span>
          <HashIcon size={16} />
        </span>
      </a>
      {dict.contacts.map((contact) => (
        <div className="flex w-full" key={contact.header}>
          <p className="flex-1 max-md:hidden">{contact.header}</p>
          <a className="flex flex-1 gap-1 hover:underline" href={contact.href}>
            {contact.value}
            <span>
              <ExternalLink size={16} />
            </span>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Contacts;
