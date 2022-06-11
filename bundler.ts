import {Bundler, defaultPlugins} from "https://deno.land/x/bundler/mod.ts"


const plugins = defaultPlugins()
const bundler = new Bundler(plugins)

const input = "src/index.ts"

const outputMap = {[input] : "dist/app.js"}

const {bundles} = await bundler.bundle([input], {outputMap})
