import {serve} from "../../deps.ts"
import {getFile} from "./content.ts";
import {randomId} from "./utils.ts";

const handler =async (req:Request) => {
    const path = (new URL(req.url)).pathname;
    const stream = await getFile(path);

    if (!stream) return new Response(null, {status:404});

    return new Response(stream, {
        status:200, 
        headers: {
            "x-respose-identifier": await randomId(),
        }
    })
}

console.log("Server started!")
serve(handler, {port: 5500});