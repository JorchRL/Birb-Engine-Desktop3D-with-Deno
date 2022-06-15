// export {Webview} from "https://deno.land/x/webview@0.7.0-pre.1/mod.ts"

// I'm using my own fork of webview_deno to enable debugging on the console.
export { Webview } from "https://raw.githubusercontent.com/JorchRL/webview_deno/main/mod.ts";

export { serve } from "https://deno.land/std@0.143.0/http/mod.ts";

/// from "package.json" a reference of the version of three.js i'm bundling with this project

// "dependencies": {
//     "@types/three": "^0.141.0",
//     "three": "^0.141.0"
//   }
