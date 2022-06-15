import { Webview } from "./deps.ts";

const webview = new Webview();

webview.navigate("http://localhost:5500/dist");
webview.run();
