import { getDictionary } from "@/app/[lang]/dictionaries";
import { Github, Linkedin, Mail } from "lucide-react";
import { LiaTelegram } from "react-icons/lia";
import { Button } from "./ui/button";
import CopyButton from "./ui/CopyButton";

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
      className="container flex flex-col gap-8 min-h-screen justify-center"
    >
      <div className="flex flex-col sm:flex-row items-center gap-8 py-24">
        <p className="text-5xl sm:text-6xl flex-1 w-full text-center sm:text-start">
          {dict.headers.contacts.subHeadline}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 flex-1">
          <CopyButton dict={dict} />
          <div className="flex gap-4">
            <Mail />
            <Github />
            <Linkedin />
            <LiaTelegram size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
