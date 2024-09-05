import Projects from "@/components/Projects";
import React from "react";
import { getDictionary } from "../dictionaries";

const page = async ({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) => {
  const dict = await getDictionary(lang);

  return (
    <div className="container pt-28">
      <Projects dict={dict} lang={lang} />
    </div>
  );
};

export default page;
