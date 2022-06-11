/// <reference lib="DOM" /> 
import { PolyhedronGeometry } from './PolyhedronGeometry.d.ts';

export class OctahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'OctahedronGeometry'
     */
    type: string;

    static fromJSON(data: any): OctahedronGeometry;
}

export { OctahedronGeometry as OctahedronBufferGeometry };
