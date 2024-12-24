import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { GlobalRouter } from "./GlobalRouter";

// --------- SETUP APP -------------
export const server_app: Application = express();

// ---------- APP SETTINGS ------------
server_app.disable("x-powered-by");

// ---------- MIDDLEWARES ---------
server_app.use(compression());
server_app.use(helmet());
server_app.use(cors());
server_app.use(bodyParser.urlencoded({ extended: false }));
server_app.use(bodyParser.json());
server_app.use(bodyParser.text());
server_app.use(bodyParser.raw());
process.env.NODE_ENV !== "production" && server_app.use(morgan("dev"));

// ---------- ROUTER ---------
server_app.use(GlobalRouter);

// ---------- HANDLING ERROR ---------
server_app.once("error", (error) => {
  console.error({ error });
  process.exit(1);
});

server_app.on("uncaughtException", (error) => {
  console.error({ uncaughtException: error });
});
