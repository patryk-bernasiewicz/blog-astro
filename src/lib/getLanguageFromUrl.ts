import { defaultLanguage } from "@i18n/ui";
import { Language } from "@types";

export const getLanguageFromUrl = (url: URL): Language => {
  const [, languageKey] = url.pathname.split("/");

  if (languageKey !== "en" && languageKey !== "pl") {
    return defaultLanguage;
  }

  return languageKey as Language;
};
