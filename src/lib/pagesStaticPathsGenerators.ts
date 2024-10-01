import type { GetStaticPaths, PaginateFunction } from "astro";

import { contentfulClient, languageToContentfulLocale } from "@lib/contentful";
import {
  Language,
  type BlogPostSkeleton,
  type PageContentSkeleton,
} from "@types";
import { BLOG_PAGE_SIZE } from "@consts";
import type { Document } from "@contentful/rich-text-types";
import type { Asset, UnresolvedLink } from "contentful";

export interface BlogEntryProps {
  title: string;
  excerpt: Document;
  body: Document;
  coverImage: Asset<undefined, string>[];
}

export const getSingleBlogEntryStaticPaths =
  (language: Language = Language.pl) =>
  async () => {
    const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      locale: languageToContentfulLocale[language],
    });

    return entries.items.map((item) => ({
      params: { slug: item.fields.slug },
      props: {
        title: item.fields.title,
        excerpt: item.fields.excerpt,
        body: item.fields.body,
        coverImage: item.fields.coverImage,
      } as BlogEntryProps,
    }));
  };

export const getCustomPageStaticPaths =
  (language: Language = Language.pl): GetStaticPaths =>
  async () => {
    const entries = await contentfulClient.getEntries<PageContentSkeleton>({
      content_type: "pageContent",
      locale: languageToContentfulLocale[language],
    });
    return (
      entries.items.map((item) => ({
        params: { slug: item.fields.slug },
      })) || []
    );
  };

export const getPaginatedBlogPosts = async (
  paginate: PaginateFunction,
  language: Language = Language.pl
) => {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    locale: languageToContentfulLocale[language],
  });

  return paginate(entries.items, { pageSize: BLOG_PAGE_SIZE });
};

export const getPagesList = async (language: Language = Language.pl) => {
  return contentfulClient.getEntries<any>({
    content_type: "pageContent",
    locale: languageToContentfulLocale[language],
  });
};
