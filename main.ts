import { Webview, dirname, join} from "./deps.ts"


const pageURL = join(dirname(import.meta.url), "/dist/index.html" )

const webview = new Webview()

webview.navigate(pageURL)
webview.run()

