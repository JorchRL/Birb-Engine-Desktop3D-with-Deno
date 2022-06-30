# Birb Engine - 3D with Three.js, Deno and Webview on Desktop

This is a project for making a game engine! Intended to be customizable and about as flexible as developing for the web!

It is a Deno app that renders a (webkit) webview on desktop. Along with a page running Three.js, plus some extra tools i'm building for making games!

> ⚠️  UPDATE: I am taking [the backend of this project into its own repo](https://github.com/JorchRL/Tyranosaurus-Deno). As a small API for running a native window with a webkit webview, built on top of the [Webview library](https://github.com/webview/webview_deno) 

This is a very early project. Mostly just a toy, and it is not really good for any serious application yet. But you can already use it if you want!

> ⚠️ Please note that I cannot guarantee that it will work. It is a VERY early project!
> I am not yet at version 0.1.0. So expect breaking changes at any time!

## Name & Identity

I was thinking about "the birb engine" - there are a lot of birbs where I live.
hahaha

<p align="center"> <img width="150" src="https://user-images.githubusercontent.com/27286509/174165293-e5dd9dcc-5761-45c2-b50d-a6014e2d4ed8.png" /></p>

Also, it makes sense. It is made with Deno. And
[Birbs are actual DINOSAURS!](https://www.birdlife.org/news/2021/12/21/its-official-birds-are-literally-dinosaurs-heres-how-we-know/#:~:text=Birds%20belong%20to%20the%20theropod,(150%20million%20years%20ago).)

## Quick start

Check out `deno.json` for some uselful tasks:

First clone the repo.

- `$ deno task start` will just start the `main.ts` program. It should work as is and load the example.

- `$ deno task server`: will start only the server. In case you want to run the app in a normal browser.

- `$ deno task build`: will build your app and bundle it to `/dist/app.js`

## Usage

You should output a "./dist/app.js" bundle with your complete Three.js app. 

The entrypoint is the `index.ts` file. You shoudl buidl your app there. The bundler (esbuild) will build and bundle everythin into `/dist/app.js`.

## Packages

You can import packages from esm.sh or another CDN and create a reference inside `import_map.json`. Then you can use them inside your project! 

> ⚠️ Please note that you should import the dependencies you want from `import_map.json` otherwise esbuild will just place import statements inside `app.js` instead of downloading and bundling the dependency!

# Dev tools

I'm working into building a workflow for accessing webkit's inspector. As well
as implementing a basic inspector with html/css. See the `feature/dev-tools`
branch.

You can open the "inspector" (for now just a sliding panel) with `shift + i`

You can also run the app in a normal browser, if you start only the server :D

## Webview debugging

Please note, I am using my own fork of Webview_deno (see `./deps.ts`) in which I enabled dubugging on the console. Otherwise the current version of the pakage disables it by default (it's harcoded). I will change back if they enable it :D

## Further improvements

The original intent is to have a Three.js bundle built on Deno. Which is can be run inside a Webview window. And adding a couple of scripts to automate the process.

The idea would be to have a "desktop" solution to make games of 3D apps with Deno. Being able to write everything in TypeScript and running a single command to build and run everything :D

## Contributing

If you want to contribute, first of all, Thanks! Feel free to raise an issue. I appreciate suggestions as well as errors. But keep in mind that this is very unstable still.

## License

Copyright © 2022 Jorge Romero. MIT License.

Do whatever you want with it!
