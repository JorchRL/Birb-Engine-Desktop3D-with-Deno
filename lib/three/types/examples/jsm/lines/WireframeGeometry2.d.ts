/// <reference lib="DOM" /> 
import { BufferGeometry } from '../../../src/Three.d.ts';

import { LineSegmentsGeometry } from './LineSegmentsGeometry.d.ts';

export class WireframeGeometry2 extends LineSegmentsGeometry {
    constructor(geometry: BufferGeometry);
    readonly sWireframeGeometry2: boolean;
}
