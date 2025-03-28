import { Router } from "express";

// ------------- ROUTER ------------
export const HealthRouter = Router();

HealthRouter.get("/ping", async (_, res) => {
  return res.send(JSON.stringify("pong"));
});
