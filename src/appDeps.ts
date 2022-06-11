// Keep the three.js app that will run on the Webview separated from ./deps.ts

// @deno-types="../lib/three/types/index.d.ts"
export * as THREE from "../lib/three/three.module.js"


// @deno-types="../lib/three/types/examples/jsm/controls/OrbitControls.d.ts"
export {OrbitControls} from "../lib/three/examples/jsm/controls/OrbitControls.js"

// @deno-types="../lib/three/types/examples/jsm/loaders/GLTFLoader.d.ts"
export {GLTFLoader} from  "../lib/three/examples/jsm/loaders/GLTFLoader.js"

// @deno-types="../lib/three/types/examples/jsm/loaders/RGBELoader.d.ts"
export {RGBELoader} from "../lib/three/examples/jsm/loaders/RGBELoader.js"