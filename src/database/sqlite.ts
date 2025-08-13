import { createClient } from "@libsql/client";
import consola from "consola";

export const sqlite_client = createClient({
  url: ":memory:",
});

export const print_sqlite_client_status = () => {
  if (sqlite_client.closed) {
    consola.error(`Sqlite client connected: ${sqlite_client.closed}`);
  } else {
    consola.success(`Sqlite client connected: ${!sqlite_client.closed}`);
  }
};
