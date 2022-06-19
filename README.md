# Birb Engine - 3D with Three.js, Deno and Webview on Desktop

This is a project for making a game engine! Intended to be customizable and
about as flexible as developing for the web!

It is a Deno app that renders a (webkit) webview on desktop.

In contrast to electron, it will not bundle a browser. Instead it uses the webkit
engine you proably already have. Thanks to the awesome [Webview library](https://github.com/webview/webview). 

Along with a page running Three.js, plus some extra tools i'm building for making games!

This is a very early project. Mostly just a toy, and it is not really good for
any serious application yet. But you can already use it if you want!

## Name & Identity

I was thinking about "the birb engine" - there are a lot of birbs where I live.
hahaha

<p align="center"> <img width="250" src="https://user-images.githubusercontent.com/27286509/174165293-e5dd9dcc-5761-45c2-b50d-a6014e2d4ed8.png" /></p>

Also, it makes sense. It is made with Deno. And
[Birbs are actual DINOSAURS!](https://www.birdlife.org/news/2021/12/21/its-official-birds-are-literally-dinosaurs-heres-how-we-know/#:~:text=Birds%20belong%20to%20the%20theropod,(150%20million%20years%20ago).)

## Quick start

Check out `deno.json` for some uselful tasks:

First clone the repo.

- `$ deno task start` will just start the `main.ts` program. It should work as is and load the example.
- `$ deno task dev:start` will do the same and also run esbuild from `./build.js` in watch mode. No "live-reload" yet. 

- `$ deno task dev:watch` will run esbuild in watch mode to watch for changes in
  `./src/index.ts`. Won't run the program.
- `$ deno task server`: will start only the server. In case you want to run the app in a normal browser.

## Usage

You should output a "./dist/app.js" bundle with your complete Three.js app. You
probably want to keep all of your app code inside "./src".

The entrypoint is "./src/index.ts". Keep all of your dependencies referenced
inside the `src` folder. There is an `appDeps.ts` file for that. Otherwise
esbuild will attempt to bundle all dependencies into the output file.

Once you write your app you can bundle it with the `./bundle.js`script, which
uses esbuild. `deno run -A ./build.js`

## How to run

The prefered method is to use the deno tasks defined in `deno.json`.

The main program is run with `deno run -A --unstable --config ./deno.json ./main.ts` (the `--config` flag may be ommited if Deno uses the `deno.json` automatically)

The `main.ts` program will spawn two subprocesses for the client and server respectively.

# Dev tools

I'm working into building a workflow for accessing webkit's inspector. As well
as implementing a basic inspector with html/css. See the `feature/dev-tools`
branch.

You can open the "inspector" (for now just a sliding panel) with `shift + i`

You can also run the app in a normal browser, if you start only the server :D

## Loading assets

It is necessaty to run a local server from a deno script, and then run the app.

It is already implemented: running `deno task start` will run both the webview
and a server to serve the files. :D

TODO: A "live-reload" feature is in the works! :D

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

The "./lib/utils/denoify.ts" script will rewrite the import/export urls into Deno-friendly urls. You don't need to run it unless you want to import another version of Three.js.

TODO: I am rethinking how I am handling this. And currently trying to use a Deno-friendly version from a CDN like esm.sh. So This is very likely to change drastically in the future.

## Dependency locking

Use `deno cache --reload --lock=lock.json --lock-write ./deps.ts` to write/update the dependencies.

And `deno cache --reload --lock=lock.json ./deps.ts` to check dependencies for integrity

Three.js itself is bundled with this project, until I figure out a better solution!

## Webview debugging

Please note, I am using my own fork of Webview_deno (see `./deps.ts`) in which I enabled dubugging on the console. Otherwise the current version of the pakage disables it by default (it's harcoded). I will change back if they enable it :D

## Further improvements

The original intent is to have a Three.js bundle built on Deno. Which is can be run inside a Webview window. And adding a couple of scripts to automate the process.

The idea would be to have a "desktop" solution to make games of 3D apps with Deno. Being able to write everything in TypeScript and running a single command to build and run everything :D

## License

MIT.

Do whatever you want with it!
