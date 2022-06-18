const clientScript = "./webview.ts";

const clientCmd = ["deno", "run", "-A", "--unstable", clientScript];
const serverCmd = ["deno", "run", "-A", "--unstable", serverScript];

const pServer = Deno.run({ cmd: serverCmd, cwd: "./" });
const pClient = Deno.run({ cmd: clientCmd, cwd: "./" });

pServer.status();

await pClient.status();
