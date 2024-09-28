import type { GetStaticPaths, PaginateFunction } from "astro";

import { contentfulClient, languageToContentfulLocale } from "@lib/contentful";
import {
  Language,
  type BlogPostSkeleton,
  type PageContentSkeleton,
} from "@types";
import { BLOG_PAGE_SIZE } from "@consts";

export const getSingleBlogEntryStaticPaths =
  (language: Language = Language.pl): GetStaticPaths =>
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
      },
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
