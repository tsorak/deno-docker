import { assertEquals } from "https://deno.land/std@0.186.0/testing/asserts.ts";

import { handleReq } from "./server.ts";

Deno.test("Server health check", () => {
  const req = new Request("http://localhost:8080");
  const resp = handleReq(req);

  assertEquals(resp.status, 200);
});
