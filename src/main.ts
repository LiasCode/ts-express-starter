import consola from "consola";
import http from "node:http";
import { print_sqlite_client_status } from "./database/sqlite";
import { ENV } from "./env";
import { server_app } from "./server";

// ----------- INIT SERVER ---------
http.createServer(server_app).listen(ENV.PORT, () => {
  print_sqlite_client_status();
  consola.success(`Server listen on PORT: ${ENV.PORT}`);
});

process.on("uncaughtException", (error) => {
  consola.error(`Uncaught Exception : ${error.message}`);
});
