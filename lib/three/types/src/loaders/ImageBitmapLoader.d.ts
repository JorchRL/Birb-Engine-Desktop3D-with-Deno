/// <reference lib="DOM" /> 
import { Loader } from './Loader.d.ts';
import { LoadingManager } from './LoadingManager.d.ts';

export class ImageBitmapLoader extends Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default { premultiplyAlpha: 'none' }
     */
    options: undefined | object;

    readonly isImageBitmapLoader: true;

    setOptions(options: object): ImageBitmapLoader;
    load(
        url: string,
        onLoad?: (response: ImageBitmap) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): any;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<ImageBitmap>;
}
