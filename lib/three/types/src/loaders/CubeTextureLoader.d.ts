/// <reference lib="DOM" /> 
import { Loader } from './Loader.d.ts';
import { LoadingManager } from './LoadingManager.d.ts';
import { CubeTexture } from './../textures/CubeTexture.d.ts';

export class CubeTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        urls: string[],
        onLoad?: (texture: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CubeTexture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<CubeTexture>;
}
