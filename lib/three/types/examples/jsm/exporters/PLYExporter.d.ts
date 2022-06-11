/// <reference lib="DOM" /> 
import { Object3D } from '../../../src/Three.d.ts';

export interface PLYExporterOptions {
    binary?: boolean;
    excludeAttributes?: string[];
    littleEndian?: boolean;
}

export class PLYExporter {
    constructor();

    parse(object: Object3D, onDone: (res: string) => void, options: PLYExporterOptions): string | null;
}
