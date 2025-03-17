"use client";
import { getDictionary } from "@/app/[lang]/dictionaries";
import CopyButton from "./ui/CopyButton";
import { motion } from "framer-motion";
import MessageButton from "./ui/MessageButton";

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
      className="bg-background dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_bottom,transparent,black_80%)]"></div>
      <div className="container flex flex-col gap-8 min-h-screen justify-center">
        <div className="flex flex-col sm:flex-row items-center gap-8 py-24 z-10">
          <motion.p
            initial={{ x: lang === "ar" ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl flex-1 w-full text-center sm:text-start"
          >
            {dict.headers.contacts.subHeadline}
          </motion.p>
          <motion.div
            initial={{ x: lang === "ar" ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 0.5 }}
            className="grid items-center justify-center gap-4 flex-1"
          >
            <CopyButton dict={dict} />
            <div className="relative flex items-center justify-center w-full">
              <div className="h-1 w-full border-t-2 border-muted" />
              <div className="absolute bg-background px-2 mx-auto">
                <p className="">Or</p>
              </div>
            </div>
            <MessageButton dict={dict} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
