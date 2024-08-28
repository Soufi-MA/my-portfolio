import "server-only";

const dictionaries = {
  en: () => import("../../lib/dictionaries/en").then((module) => module.en),
  ar: () => import("../../lib/dictionaries/ar").then((module) => module.ar),
};

export const getDictionary = async (locale: "en" | "ar") =>
  dictionaries[locale]();
