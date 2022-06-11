/// <reference lib="DOM" /> 
import { BufferGeometry, Loader, LoadingManager } from '../../../src/Three.d.ts';

export class PRWMLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (geometry: BufferGeometry) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<BufferGeometry>;
    parse(data: ArrayBuffer): BufferGeometry;

    static isBigEndianPlatform(): boolean;
}
