import express, { Router } from "express";
import path from "node:path";
import { HealthRouter } from "./router/HealthRouter";

// ------------- ROUTER ------------
export const global_router = Router();

global_router.use("/api", HealthRouter);

const PUBLIC_DIR = process.cwd() + "/public";

global_router.use(express.static(PUBLIC_DIR));

global_router.get('*"rest"', (_, res) => {
  return res.sendFile(path.join(PUBLIC_DIR, "404.html"));
});
