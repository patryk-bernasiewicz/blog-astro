import * as contentful from "contentful";

export type Locales = "en-US" | "pl-PL";

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
