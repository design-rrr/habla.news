const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://design-rrr.github.io/habla.news";

export function asset(path: string) {
  if (path.startsWith("http")) return path;
  return `${BASE_PATH}${path}`;
}

export function siteUrl(path: string = "") {
  return `${SITE_URL}${path}`;
}
