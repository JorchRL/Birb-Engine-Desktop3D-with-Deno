import { contentType, getFile, randomId, serve } from "./deps.ts";

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

/**
 * draft for the server logic. This is a file server that will also accept websocket messages. On the first request (after a reload) it will add some injected code into the page and stablish a websocket connection.
 *
 * Handler () {
 *
 *  isFileRequest() {
 *    yes -> handleFilerequest()
 *    no -> handleWsMessage()
 * }
 *
 * handleFileRequest() {
 *     haswebsocket () {
 *       yes -> serveFileAndRequestReload()
 *       no -> serveFileAndAddWebsocket()
 *      }
 *    }
 * }
 *
 * Modularization (ie a public API)
 *
 * export default CreateServer (PORT, {options}) {
 *
 *    const handler = () => {...}
 *
 *    // the internal way to handle these may be overridable...
 *    const isFileRequest
 *    ....
 *    const hasWebSocket
 *
 *    const server = {
 *      serve : serve(handler, PORT)
 *      // other stuff for additional functionality ???
 *    }
 *
 *    return server
 *
 * }
 */
