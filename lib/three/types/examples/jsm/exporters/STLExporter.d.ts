/// <reference lib="DOM" /> 
import { Object3D } from '../../../src/Three.d.ts';

export interface STLExporterOptions {
    binary?: boolean;
}

export class STLExporter {
    constructor();

    parse(scene: Object3D, options?: STLExporterOptions): string;
}
