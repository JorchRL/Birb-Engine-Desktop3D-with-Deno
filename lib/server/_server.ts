import { contentType, getFile, randomId, serve } from "./deps.ts";

export default function createServer(PORT = 5500) {
  const _handler = async (req: Request): Promise<Response> => {
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

  const server = {
    serve: () => (serve(_handler, { port: PORT })),
  };

  return server;
}
