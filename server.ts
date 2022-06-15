console.log("We should run a server from here...");

import { serve } from "./deps.ts";

serve((req) => new Response("Heloo!"), { port: 5500 });
