import { getDictionary } from "@/app/[lang]/dictionaries";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import ContactForm from "./ui/ContactForm";

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
      className="container flex flex-col gap-8 scroll-mt-28"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl sm:text-5xl">
          {dict.headers.contacts.headline}
        </h2>
        <p className="text-xs sm:text-base">
          {dict.headers.contacts.subHeadline}
        </p>
        <div className="flex items-center gap-4">
          <Mail />
          <Github />
          <Linkedin />
          <LiaTelegram size={24} />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
