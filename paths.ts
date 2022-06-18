import { dirname, join, fromFileUrl } from "./deps.ts";

const root = fromFileUrl(dirname(import.meta.url));

// You may add other paths as you see fit!
export const paths = {
    root: root,
    dist: join(root, "dist"),
    lib: join(root, "lib"),
    src: join(root, "src")
}
