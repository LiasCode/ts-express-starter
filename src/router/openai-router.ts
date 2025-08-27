import consola from "consola";
import { Router } from "express";
import OpenAI from "openai";
import { ENV } from "../env";

// ------------- ROUTER ------------
export const openai_router = Router();

const client = new OpenAI({
  apiKey: ENV.OPENAI_API_KEY,
});

openai_router.get("/", async (_, res) => {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-5-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Generate a simple example test for vitest. Respond with code only" },
      ],
    });

    if (completion.choices.length === 0 || !completion.choices[0]) {
      return res.json({
        message: "Don't have any response",
      });
    }

    return res.json({
      message: completion.choices[0].message,
    });
  } catch (error) {
    consola.error(error);
    return res.json({
      message: "Don't have any response",
    });
  }
});
