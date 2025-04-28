import http from "node:http";
import { sqlite_client } from "./database/sqlite";
import "./env";
import { server_app } from "./server";

// ----------- INIT SERVER ---------
http.createServer(server_app).listen(process.env.PORT, () => {
  console.log("👂 Server listen on PORT: " + process.env.PORT);
});

process.on("uncaughtException", (error) => {
  console.error(`Uncaught Exception : ${error.message}`);
});

console.log("🤝 Database Sqlite connected:", !sqlite_client.closed);
