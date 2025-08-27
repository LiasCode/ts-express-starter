import { describe, expect, it } from "vitest";

describe("main", () => {
  it("Should say hello", async () => {
    expect("Hello World").to.be.eq("Hello World");
  });
});
