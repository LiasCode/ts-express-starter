import express, { Router } from "express";
import { NOT_FOUND_HTML_FILE_PATH, PUBLIC_DIR } from "./constants";
import { health_router } from "./router/health-router";
import { openai_router } from "./router/openai-router";

// ------------- ROUTER ------------
export const global_router = Router();

global_router.use("/api/health", health_router);
global_router.use("/api/ia", openai_router);

global_router.use(express.static(PUBLIC_DIR));

global_router.get('*"rest"', (_, res) => {
  return res.sendFile(NOT_FOUND_HTML_FILE_PATH);
});
