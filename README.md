# 3D visualization with Three.js on Deno on Desktop

This is a small Deno app that renders a webview on desktop. Along with a page
running Three.js

This is mostly just a toy, and it is not really good for any serious application
yet.

## Usage

Inside `./dist` there is a `main.js` where you can write a three.js application.

## How to run

Just run `deno run -A --unstable ./main.ts`

Make sure to check the dependencies first.

## Dependency locking

Use `deno cache --reload --lock=lock.json --lock-write ./deps.ts` to
write/update the dependencies.

And `deno cache --reload --lock=lock.json ./deps.ts` to check dependencies for
integrity

## Further improvements

The original intent is to have Three.js running on Deno. Maybe using
`deno bundle` to create a package that can then be used on `index.html`. And
adding a couple of scripts to automate the process.

The idea would be to have a "desktop" solution to make games of 3D apps with
Deno. Being able to write everything in TypeScript and running a single command
to build and run everything.

## License

MIT. Do whatever you want with it!
