import { BufferGeometry } from '../../../src/Three.d.ts';

export class TessellateModifier {
    constructor(maxEdgeLength?: number, maxIterations?: number);
    maxEdgeLength: number;
    maxIterations: number;

    modify<TGeometry extends BufferGeometry>(geometry: TGeometry): TGeometry;
}
