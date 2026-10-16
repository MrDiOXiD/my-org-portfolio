import type { MetadataRoute } from "next";
import { SEO, SITE } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} | ${SITE.tagline}`,
    short_name: SITE.name,
    description: SEO.description,
    lang: "fa",
    dir: "rtl",
    start_url: "/",
    display: "standalone",
    background_color: "#060a16",
    theme_color: "#060a16",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
