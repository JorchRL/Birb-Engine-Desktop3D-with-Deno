import { Webview } from "./deps.ts";
console.log(">>> WEBVIEW.TS: started subprocess");

// TODO: accept arguments for window size, sizeHint and debug
const webview = new Webview();

webview.navigate("http://localhost:5500");
webview.run();

/** Webview.run() is blocking, so we cannot do anything else in this process. But once we close the window the code below will be executed.
 *
 * We may use this chance to send a cleanup callback. And implement some interprocess communication.
 *
 * 1. Send a callback to the parent process about the window being closed.
 * 2. If this process is terminated, the webview's process will go away as well.
 *
 * So I can use Deno.ppid (the parent's pid) and Deno.pid (this process' pid) to send messages.
 *
 * 1. Deno.ppid: A callback for cleanup when the window is closed.
 * 2. Deno.pid: Send this back as a "reference" to the parent. So it can send signals.
 * 3. We can register Deno.addSignalListener here and see if we can send signals here when webview.run() is blocking. Also, we can add a signalListener to the parent.
 * 4.
 *
 * We want the parent to be able to:
 *    - Kill this process (along with the webview window)
 *
 * We want this process to send signals to the parent.
 *
 * Useful functions from Deno API
 *
 * Deno.kill(<signal>, pid)
 * Deno.pid := this process's pid
 * Deno.ppid := the parent process pid
 * Deno.addSignalListener(<signal>, handler())
 * Deno.removeSignalListener()
 */

console.log(">>> WEBVIEW.TS: Continuing after webview.run() yields");

// (() => {
//   Deno.kill(Deno.ppid, "SIGINT");
// })();
