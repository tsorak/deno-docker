import { assertEquals } from "https://deno.land/std@0.186.0/testing/asserts.ts";

Deno.test("1+1 should equal 2", () => {
  const sum = 1 + 1;
  assertEquals(sum, 2);
});
