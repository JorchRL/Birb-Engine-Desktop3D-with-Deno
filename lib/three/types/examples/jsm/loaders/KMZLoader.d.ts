import { Loader, LoadingManager } from '../../../src/Three.d.ts';

import { Collada } from './ColladaLoader.d.ts';

export class KMZLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (kmz: Collada) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Collada>;
    parse(data: ArrayBuffer): Collada;
}
