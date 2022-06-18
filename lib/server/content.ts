import { readableStreamFromReader as toStream} from "../../deps.ts";
import {paths} from "../../paths.ts"

const rootPath = paths.root;

export const getFile = async (relativePath:string): Promise<ReadableStream<Uint8Array> | undefined> => {
    try {
        console.log("rootpath: ", rootPath);
        console.log("to open: ", rootPath + relativePath)
        
        const f = await Deno.open(rootPath + relativePath);
        return toStream(f);
    } catch (error) {
       console.log(error); 
    }
}