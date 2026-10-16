import { OG_SIZE, renderOg } from "@/lib/og";

export const alt = "Chatran — product design, full-stack development and SEO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  void OG_SIZE;
  return renderOg();
}
