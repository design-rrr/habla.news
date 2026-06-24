const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  if (path.startsWith("http")) return path;
  return `${BASE_PATH}${path}`;
}
