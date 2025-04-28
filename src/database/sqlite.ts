import { createClient } from "@libsql/client";

export const sqlite_client = createClient({
  url: ":memory:",
});
