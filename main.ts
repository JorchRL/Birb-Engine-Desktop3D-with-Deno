const serverScript = "./server.ts";
const clientScript = "./webview.ts";

const clientCmd = ["deno", "run", "-A", "--unstable", clientScript];
const serverCmd = ["deno", "run", serverScript];

const pClient = Deno.run({ cmd: clientCmd, cwd: "./" });
const pServer = Deno.run({ cmd: serverCmd });

pServer.status();
// console.log("before hi from the server");
pClient.status();
