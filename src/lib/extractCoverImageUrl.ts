import type { AssetFile } from "contentful";

export const extractCoverImageUrl = (
  url: string | AssetFile | undefined
): string | undefined => {
  return typeof url !== "string"
    ? typeof url?.url === "string"
      ? url.url
      : undefined
    : url;
};
