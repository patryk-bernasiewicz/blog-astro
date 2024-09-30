import * as contentful from "contentful";

export type BlogPostSkeleton = {
  contentTypeId: "blogPost";
  fields: {
    title: contentful.EntryFieldTypes.Text;
    excerpt: contentful.EntryFieldTypes.RichText;
    body: contentful.EntryFieldTypes.RichText;
    slug: contentful.EntryFieldTypes.Text;
  };
};

export type PageContentSkeleton = {
  contentTypeId: "pageContent";
  fields: {
    title: contentful.EntryFieldTypes.Text;
    content: contentful.EntryFieldTypes.RichText;
    slug: contentful.EntryFieldTypes.Text;
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
