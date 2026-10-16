// Central place for the canonical origin. Set NEXT_PUBLIC_SITE_URL in production.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://chatran.team").replace(/\/$/, "");
export const abs = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
