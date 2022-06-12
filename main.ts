import { dirname, join, Webview } from "./deps.ts";

// before running webview, we need to run a local server to serve the assets.

const pageURL = join(dirname(import.meta.url), "/dist/index.html");

const webview = new Webview();

webview.navigate("http://localhost:5500/dist");
webview.run();
