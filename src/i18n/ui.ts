import { Language, type UiTranslations } from "@types";

export const languages = {
  [Language.pl]: "Polish",
  [Language.en]: "English",
};

export const defaultLanguage = Language.pl;

export const ui: UiTranslations = {
  [Language.pl]: {
    themeSwitch: {
      LABEL: "Przełącz motyw strony",
    },
    languageSwitch: {
      LANGUAGE_POLISH: "Polski",
      LANGUAGE_ENGLISH: "Angielski",
      SWITCH_TO: "Przełącz na",
    },
    pagination: {
      BUTTON_PREVIOUS: "Poprzednie",
      BUTTON_NEXT: "Następne",
    },
  },
  [Language.en]: {
    themeSwitch: {
      LABEL: "Przełącz motyw strony",
    },
    languageSwitch: {
      LANGUAGE_POLISH: "Polish",
      LANGUAGE_ENGLISH: "English",
      SWITCH_TO: "Switch to",
    },
    pagination: {
      BUTTON_PREVIOUS: "Previous",
      BUTTON_NEXT: "Next",
    },
  },
};
