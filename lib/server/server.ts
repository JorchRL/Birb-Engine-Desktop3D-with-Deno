import { serve } from "../deps.ts";
import { getFile } from "./content.ts";
import { randomId } from "./utils.ts";
import { contentType } from "../deps.ts";

const handler = async (req: Request) => {
  const path = (new URL(req.url)).pathname;
  const stream = await getFile(path);

  if (!stream) return new Response(null, { status: 404 });

  // Get the extension se we can set the content-type header
  const ext = path.match(/\.[^\.]+$/);

  return new Response(stream, {
    status: 200,
    // @ts-ignore this will work just fine :D
    headers: {
      "x-respose-identifier": await randomId(),
      "Content-Type": ext ? contentType(ext[0]) : contentType(".html"),
    },
  });
};

console.log("Server started!");
serve(handler, { port: 5500 });
