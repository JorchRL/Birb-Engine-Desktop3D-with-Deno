import {Bundler, defaultPlugins} from "https://github.com/JorchRL/Bundler/raw/master/mod.ts";



const plugins = new defaultPlugins()

const bundler = new Bundler(plugins)

const input = "src/index.ts"
const outputMap = {[input] : "dist/app.js"}

const {bundles} = await bundler.bundle([input], {outputMap})
