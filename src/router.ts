import express, { Router } from "express";
import { HealthRouter } from "./router/HealthRouter";

// ------------- ROUTER ------------
export const global_router = Router();

global_router.use("/api", HealthRouter);

global_router.use(express.static(process.cwd() + "/public"));

global_router.get("*", (_, res) => {
  return res.sendFile(process.cwd() + "/public/404.html");
});
