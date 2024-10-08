"use client";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Github, Linkedin, Mail } from "lucide-react";
import { LiaTelegram } from "react-icons/lia";
import CopyButton from "./ui/CopyButton";
import { motion } from "framer-motion";

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
            className="flex flex-col items-center justify-center gap-4 flex-1"
          >
            <CopyButton dict={dict} />
            <div className="flex gap-4">
              <a href="mailto:soufi.m.ahmed@gmail.com">
                <Mail />
              </a>
              <a
                href="https://github.com/Soufi-MA/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://t.me/SoufiMa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaTelegram size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
