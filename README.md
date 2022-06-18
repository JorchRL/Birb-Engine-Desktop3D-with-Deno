# 3D visualization with Three.js on Deno on Desktop

This is a small Deno app that renders a (webkit) webview on desktop. Along with
a page running Three.js

This is mostly just a toy, and it is not really good for any serious application
yet.

## Quick start

Check out `deno.json` for some uselful tasks:

- `$ deno task dev:watch` will run esbuild in watch mode to watch for changes in
  `./src/index.ts`
- `$ deno task dev:start` will do the same and also run the webview window

As of now you will have to run a local server to serve `./dist/index.html`,
otherwise you will see nothing! This feature is being worked on
`features/server-client` at the moment :D

## Usage

You should output a "./dist/app.js" bundle with your complete Three.js app. You
probably want to keep all of your app code inside "./src".

The entrypoint is "./src/index.ts". Keep all of your dependencies referenced
inside the `src` folder. There is an `appDeps.ts` file for that. Otherwise
esbuild will attempt to bundle all dependencies into the output file.

Once you write your app you can bundle it with the `./bundle.js`script, which
uses esbuild. `deno run -A ./build.js`

## Dev tools

I'm working into building a workflow for accessing webkit's inspector. As well
as implementing a basic inspector with html/css. See the `feature/dev-tools`
branch.

You can open the "inspector" (for now just a sliding panel) with `shift + i`

## How to run

Just run `deno run -A --unstable --config ./deno.json ./main.ts`

(the `--config` flag may be ommited if Deno uses the `deno.json` automatically)

If your three.js app is loading assets, you will need to serve
`./dist/index.html` from a local server. See the header below!

**please note**: the example app you can currently find on `./dist/app.js` will
load assets. So you need to use a local server to run the example.

## Loading assets

It is necessaty to run a local server from a deno script, and then run the app.
(see issue #8)

Work is ongoing on the `feature/server-client`

---

Currently, the only way to support loading assets is to serve `index.html` via a
local server. So serve the files and run the app. It should work fine.

## Three.js version

I'm importing Three.js form npm into the project. But I'll manually place it
into "./lib/three"

This is the version of Three.js I'm currently using

```
"dependencies": {
    "@types/three": "^0.141.0",
    "three": "^0.141.0"
  }
```

## Type definitions for Three.js

If you are reading this it is already done! :D

The "./lib/utils/denoify.ts" script will rewrite the import/export urls into
Deno-friendly urls. You don't need to run it unless you want to import another
version of Three.js.

TODO: there are still some minor issues with this (see issues page)

## Dependency locking

Use `deno cache --reload --lock=lock.json --lock-write ./deps.ts` to
write/update the dependencies.

And `deno cache --reload --lock=lock.json ./deps.ts` to check dependencies for
integrity

Three.js itself is bundled with this project, until I figure out a better
solution!

## Webview debugging

Please note, I am using my own fork of Webview (see `./deps.ts`) in which I
enabled dubugging on the console. Otherwise the current version of the pakage
disables it by default (it's harcoded). I will change back if they enable it :D

## Further improvements

The original intent is to have a Three.js bundle built on Deno. Which is can be
run inside a Webview window. And adding a couple of scripts to automate the
process.

The idea would be to have a "desktop" solution to make games of 3D apps with
Deno. Being able to write everything in TypeScript and running a single command
to build and run everything :D

## License

MIT.

Do whatever you want with it!
