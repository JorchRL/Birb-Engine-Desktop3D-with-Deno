import { Loader } from './Loader.d.ts';
import { LoadingManager } from './LoadingManager.d.ts';
import { DataTexture } from './../textures/DataTexture.d.ts';

export class DataTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (dataTexture: DataTexture, texData: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): DataTexture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<DataTexture>;
}
