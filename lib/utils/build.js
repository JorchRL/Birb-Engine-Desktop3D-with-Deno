import * as esbuild from "https://deno.land/x/esbuild@v0.14.43/mod.js";

const result = await esbuild.build({
  entryPoints: ["index.ts"],
  bundle: true,
  outfile: "dist/app.js",
  write: true,
  format: "esm", // this will ensure we don't have CJS issues later.
  minify: true,
  treeShaking: true,
  // watch: {
  //   onRebuild(error, result) {
  //     error
  //       ? console.error("watch build failed: ", error)
  //       : console.log("Watch build succesful: ", result);
  //   },
  // },
  target: ["safari11"],
});

console.log(result);

esbuild.stop();
