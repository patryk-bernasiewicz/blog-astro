import { Language, type UiTranslations } from "@/types";

import { ui } from "./ui";

export const getTranslationsByLanguage = (
  language: Language = Language.pl
): UiTranslations[Language] => {
  return ui[language];
};
