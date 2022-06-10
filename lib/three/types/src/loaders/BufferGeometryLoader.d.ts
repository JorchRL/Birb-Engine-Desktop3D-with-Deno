import { Loader } from './Loader.d.ts';
import { LoadingManager } from './LoadingManager.d.ts';
import { BufferGeometry } from './../core/BufferGeometry.d.ts';
import { InstancedBufferGeometry } from '../core/InstancedBufferGeometry.d.ts';

export class BufferGeometryLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (bufferGeometry: InstancedBufferGeometry | BufferGeometry) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(
        url: string,
        onProgress?: (event: ProgressEvent) => void,
    ): Promise<InstancedBufferGeometry | BufferGeometry>;
    parse(json: any): InstancedBufferGeometry | BufferGeometry;
}
