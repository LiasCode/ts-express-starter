import express, { Router } from "express";
import path from "node:path";
import { PUBLIC_DIR } from "./constants";
import { health_router } from "./router/health-router";

// ------------- ROUTER ------------
export const global_router = Router();

global_router.use("/api", health_router);

global_router.use(express.static(PUBLIC_DIR));

global_router.get('*"rest"', (_, res) => {
  return res.sendFile(path.join(PUBLIC_DIR, "404.html"));
});
