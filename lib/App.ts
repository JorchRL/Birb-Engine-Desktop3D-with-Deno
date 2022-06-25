interface AppState {
  shouldExit: boolean;
  hasInitialized: boolean;
  clientInfo: {
    isRunning: boolean;
    pid: number | null;
  };
  serverIsRunning: {
    isRunning: boolean;
    pid: number | null;
  };
}

/**
 * App
 */
export default class App {
  declare serverProcess: Deno.Process;
  declare clientProcess: Deno.Process;

  private state: AppState;

  /**
   * Creates an instance of app.
   */
  constructor() {
    this.state = {
      shouldExit: false,
      hasInitialized: false,
      clientInfo: {
        isRunning: false,
        pid: null,
      },
      serverIsRunning: {
        isRunning: false,
        pid: null,
      },
    };
  }

  /**
   * Kills subprocess
   * @param processtype
   * @returns subprocess
   */
  public killSubprocess(processtype: "client" | "server"): number {
    if (!this.serverProcess.pid || !this.clientProcess.pid) {
      throw new Error("No subprocess has been spawned");
    }

    switch (processtype) {
      case "client":
        this.clientProcess.kill("SIGTERM");
        this.clientProcess.close();
        return 1;
      case "server":
        this.serverProcess.kill("SIGTERM");
        this.serverProcess.close();
        return 1;
      default:
        throw new Error("No subprocess to kill!");
    }
  }

  /**
   * Exits app
   */
  public exit() {
    if (this.clientProcess.pid) this.killSubprocess("client");
    if (this.serverProcess.pid) this.killSubprocess("server");
    Deno.exit(1);
  }

  /**
   * Shoudls exit
   * @returns exit
   */
  public shoudlExit(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.state.shouldExit) resolve();
    });
  }

  /**
   * Gets should exit
   */
  private getShouldExit() {
  }

  /**
   * Runs app
   */
  public run() {
    const clientScript = "/lib/webview/webview.ts";
    const serverScript = "/lib/server/server.ts";

    const clientCmd = ["deno", "run", "-A", "--unstable", clientScript];
    const serverCmd = ["deno", "run", "-A", "--unstable", serverScript];

    this.serverProcess = Deno.run({ cmd: serverCmd, cwd: "./" });
    this.clientProcess = Deno.run({ cmd: clientCmd, cwd: "./" });
  }
}
