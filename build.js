import * as esbuild from "https://deno.land/x/esbuild@v0.14.43/mod.js";

const result = await esbuild.build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  outfile: "./dist/app.js",
  write: true,
  watch: {
    onRebuild(error, result) {
      error
        ? console.error("watch build failed: ", error)
        : console.log("Watch build succesful: ", result);
    },
  },
  target: ["safari11"],
});

console.log(result);

// esbuild.stop();
