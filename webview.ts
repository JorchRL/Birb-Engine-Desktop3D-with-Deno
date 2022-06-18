import { Webview } from "./deps.ts";

const webview = new Webview();

// Use a live-reload server. For now, until I implement it!
webview.navigate("http://localhost:5500/dist/index.html");
webview.run();
