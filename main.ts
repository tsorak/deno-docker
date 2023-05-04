import { serve } from "https://deno.land/std@0.185.0/http/server.ts";

const PORT = 8080;

serve((_req) => new Response("Hello from Deno within Docker!"), { port: PORT });
