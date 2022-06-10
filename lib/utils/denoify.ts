// This is a script to fix the import urls for the type definitions for Three.js
// taken mostly from github user DefenitelyMaybe's: https://deno.land/x/threejs_4_deno@v121/main.ts

// Note that this is an adhoc solution. So the paths are harcoded for now. It only needs to be run once (by me).

// The only reason you may want to run this is if you import new type definitions from outside.

const examplesPath = "../three/types/examples/jsm"
const srcPath = "../three/types/src"


// Crawl folder and find files matching a RegExp. Call a function for matches.
function loopDirAndMatch(path:string, pattern:RegExp, callback:Function) {
    for (const dirEntry of Deno.readDirSync(path)) {
        if (dirEntry.isDirectory) {
            loopDirAndMatch(`${path}${dirEntry.name}`, pattern, callback)
        } else {
            const match = dirEntry.name.match(pattern);
            if (match) {
                callback(dirEntry.name, path)
            }
        }
    }
}

// We just want to rewrite all urls into Deno-friendly urls!
function updateTypeDefs (fileName: string, path: string) {
    let data = Deno.readTextFileSync(`${path}${fileName}`)

    data = data.replaceAll(/import .+?;/gms, (m) => {
        if(!m.includes(".d.ts")) {
            m = `${m.slice(0, m.length - 2)}.d.ts${m.slice(m.length - 2)}`
        }
        return m
    })

    data = data.replaceAll(/export \* from .+?;/gms, (m) => {
        if (!m.includes(".d.ts")) {
           m = `${m.slice(0, m.length - 2)}.d.ts${m.slice(m.length - 2)}` 
        }
        return m
    })

    // Overwrite the same file! Be careful.
    Deno.writeTextFileSync(`${path}${fileName}`, data)
}


loopDirAndMatch(examplesPath, /\.d\.ts/g, updateTypeDefs);
loopDirAndMatch(srcPath, /\.d\.ts/g, updateTypeDefs);

