import consola from "consola";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const env_schema = z.object({
  PORT: z.string(),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  OPENAI_API_KEY: z.string(),
});

const res = env_schema.safeParse(process.env);

if (!res.success) {
  consola.error(`Env schema validation fails \n${res.error}\nCreate a valid \`.env\` file`);
  process.exit(1);
}

export const ENV = Object.freeze(res.data);
