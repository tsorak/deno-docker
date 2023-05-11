import { serve } from "https://deno.land/std@0.185.0/http/server.ts";

import { handleReq } from "./server.ts";

const PORT = 8080;

serve(handleReq, { port: PORT });
