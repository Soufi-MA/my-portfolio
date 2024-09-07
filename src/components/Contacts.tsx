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
      className="container flex flex-col gap-8 scroll-mt-28"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl sm:text-5xl">
          {dict.headers.contacts.headline}
        </h2>
        <p className="text-xs sm:text-base">
          {dict.headers.contacts.subHeadline}
        </p>
      </div>
    </section>
  );
};

export default Contacts;
