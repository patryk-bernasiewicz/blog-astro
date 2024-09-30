import { Language, type UiTranslations } from "@types";

export const languages = {
  [Language.pl]: "Polish",
  [Language.en]: "English",
};

export const defaultLanguage = Language.pl;

export const ui: UiTranslations = {
  [Language.pl]: {
    backButton: {
      GO_BACK: "Wróć",
    },
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
    footer: {
      BUILT_WITH: "Zbudowano za pomocą",
      SOURCE_CODE: "Zobacz kod źródłowy tego bloga na Github",
    },
  },
  [Language.en]: {
    backButton: {
      GO_BACK: "Go back",
    },
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
    footer: {
      BUILT_WITH: "Built with",
      SOURCE_CODE: "See the source code of this blog on Github",
    },
  },
};
