import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getPostContent(slug: string): string {
  const file = path.join(CONTENT_DIR, `${slug}.html`);
  try {
    return fs.readFileSync(file, "utf8");
  } catch {
    return "";
  }
}
