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

type ComponentTranslations = {
  themeSwitch: Translations;
  languageSwitch: Translations;
  pagination: Translations;
};

export type UiTranslations = Record<Language, ComponentTranslations>;
