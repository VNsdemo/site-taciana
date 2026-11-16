import type { MetadataRoute } from "next";

const siteUrl = "https://www.taciananaia.com.br/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
    },
  ];
}
