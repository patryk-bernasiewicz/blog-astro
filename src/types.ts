import type { Document } from "@contentful/rich-text-types";
import * as contentful from "contentful";

export type BlogPost = {
  title: string;
  excerpt: Document;
  body: Document;
  slug: string;
  coverImage: contentful.Asset[];
  createdAt: Date | string;
  updatedAt: Date | string;
};

export type PageContentSkeleton = {
  contentTypeId: "pageContent";
  fields: {
    title: contentful.EntryFieldTypes.Text;
    content: contentful.EntryFieldTypes.RichText;
    slug: contentful.EntryFieldTypes.Text;
    createdAt: Date | string;
    updatedAt: Date | string;
  };
};

export enum Language {
  pl = "pl",
  en = "en",
}

type Translations = { [translationKey: string]: string };

const siteComponents = [
  "pages",
  "backButton",
  "themeSwitch",
  "languageSwitch",
  "pagination",
  "header",
  "footer",
] as const;

type ComponentTranslations = {
  [key in (typeof siteComponents)[number]]: Translations;
};

export type UiTranslations = Record<Language, ComponentTranslations>;
