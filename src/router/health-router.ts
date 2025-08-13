import { Router } from "express";
import { sqlite_client } from "../database/sqlite";

// ------------- ROUTER ------------
export const health_router = Router();

health_router.get("/", async (_, res) => {
  return res.json({
    server: "ok",
    database: !sqlite_client.closed,
  });
});
