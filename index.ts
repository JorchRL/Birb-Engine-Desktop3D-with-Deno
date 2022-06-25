import App from "./lib/App.ts";

const application = new App();

application.run();

// console.log(Deno.pid);
// console.log(self);

console.log(application.clientProcess);

// Deno.addSignalListener("SIGINT", () => {
//   console.log("Received signal from child process!");

//   Deno.exit(1);
// });

// TODO: Define the state machine for the shouldExit() logic, and implement it on the App class
await application.shoudlExit();
console.log(">>> APP.TS: Exit");
