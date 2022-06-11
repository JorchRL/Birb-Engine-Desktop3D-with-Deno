/// <reference lib="DOM" /> 
import { Loader } from './Loader.d.ts';
import { LoadingManager } from './LoadingManager.d.ts';
import { CompressedTexture } from './../textures/CompressedTexture.d.ts';

export class CompressedTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (texture: CompressedTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CompressedTexture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<CompressedTexture>;
}
