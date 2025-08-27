import bodyParser from "body-parser";
import compression from "compression";
import consola from "consola";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { ENV } from "./env";
import { global_router } from "./router";

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
server_app.use(cookieParser());

if (ENV.NODE_ENV !== "production") {
  server_app.use(morgan("dev"));
}

// ---------- ROUTER ---------
server_app.use(global_router);

// ---------- HANDLING ERROR ---------
server_app.on("error", (error) => {
  consola.error("[SERVER APP]", error);
});
