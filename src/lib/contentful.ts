import contentful from "contentful";
import { type Options } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

import { Language } from "@types";

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

export const parseContentfulContentOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
    [BLOCKS.HEADING_1]: (node, next) => `<h1>${next(node.content)}</h1>`,
    [BLOCKS.HEADING_2]: (node, next) => `<h2>${next(node.content)}</h2>`,
    [BLOCKS.HEADING_3]: (node, next) => `<h3>${next(node.content)}</h3>`,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      return `
        <a
          href="${node.data.target.fields.file.url}"
          class="my-8 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure class="flex flex-col items-center gap-2">
            <img
              class="w-full max-w-[80%] bg-brandGray-200 dark:bg-brandGray-700 rounded-sm"
              width="${file.details.image.width}"
              height="${file.details.image.height}"
              src="${file.url}"
              alt="${title}"
              loading="lazy"
            />
            ${
              title || description
                ? `<figcaption class="text-center w-full max-w-[80%] flex flex-col gap-1">
              ${title ? `<span class="text-sm">${title}</span>` : ""}
              ${
                description ? `<span class="text-xs">${description}</span>` : ""
              }
            </figcaption>`
                : ""
            }
          </figure>
        </a>`;
    },
    [INLINES.HYPERLINK]: (node, next) =>
      `<a href="${node.data.uri}" class="text-primary hover:underline">${next(
        node.content
      )}</a>`,
    [BLOCKS.OL_LIST]: (node, next) =>
      `<ol class="list-decimal ml-8 mb-4 leading-3">${next(node.content)}</ol>`,
    [BLOCKS.UL_LIST]: (node, next) =>
      `<ul class="list-disc ml-8 mb-4 leading-3">${next(node.content)}</ul>`,
  },
  renderMark: {
    [MARKS.CODE]: (text) => {
      const regex = /^lang:(\w+)/m;
      const match = text.match(regex);

      if (!match) {
        return `<code>${text}</code>`;
      }

      const language = match[1];
      let code = text.replace(regex, "").trim();

      return `<pre><code class="language-${language}">${code}</code></pre>`;
    },
  },
};
