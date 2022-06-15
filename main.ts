const clientScript = "./webview.ts";

const clientCmd = ["deno", "run", "-A", "--unstable", clientScript];

const pClient = Deno.run({ cmd: clientCmd, cwd: "./" });

await pClient.status();
