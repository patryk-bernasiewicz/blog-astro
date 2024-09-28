import { Language } from "@types";
import contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export type ContentfulLocale = "en-US" | "pl";

export const languageToContentfulLocale: Record<Language, ContentfulLocale> = {
  [Language.pl]: "pl",
  [Language.en]: "en-US",
};
