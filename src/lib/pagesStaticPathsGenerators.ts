import type { GetStaticPaths, PaginateFunction } from "astro";

import { contentfulClient, languageToContentfulLocale } from "@lib/contentful";
import {
  Language,
  type BlogPost,
  type BlogPostSkeleton,
  type PageContentSkeleton,
} from "@types";
import { BLOG_PAGE_SIZE } from "@consts";
import type { Document } from "@contentful/rich-text-types";
import type { Asset } from "contentful";

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
        createdAt: item.sys.createdAt,
        updatedAt: item.sys.updatedAt,
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

  const items = entries.items.map((item) => ({
    title: item.fields.title,
    excerpt: item.fields.excerpt,
    body: item.fields.body,
    slug: item.fields.slug,
    coverImage: item.fields.coverImage
      ? (item.fields
          .coverImage as unknown as BlogPostSkeleton["fields"]["coverImage"])
      : undefined,
    createdAt: item.sys.createdAt,
    updatedAt: item.sys.updatedAt,
  })) as BlogPost[];

  return paginate(items, { pageSize: BLOG_PAGE_SIZE });
};

export const getPagesList = async (language: Language = Language.pl) => {
  return contentfulClient.getEntries<any>({
    content_type: "pageContent",
    locale: languageToContentfulLocale[language],
  });
};
