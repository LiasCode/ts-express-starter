import path from "node:path";

export const PUBLIC_DIR = path.join(process.cwd(), "public");

export const NOT_FOUND_HTML_FILE_PATH = path.join(PUBLIC_DIR, "404.html");
