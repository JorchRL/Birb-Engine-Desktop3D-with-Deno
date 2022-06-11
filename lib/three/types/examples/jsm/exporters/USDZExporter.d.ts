/// <reference lib="DOM" /> 
import { Object3D } from '../../../src/Three.d.ts';

export class USDZExporter {
    constructor();

    parse(scene: Object3D): Promise<Uint8Array>;
}
