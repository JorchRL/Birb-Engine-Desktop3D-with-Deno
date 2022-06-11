/// <reference lib="DOM" /> 
import { Mesh } from '../../../src/Three.d.ts';

import { LineMaterial } from './LineMaterial.d.ts';
import { LineSegmentsGeometry } from './LineSegmentsGeometry.d.ts';

export class LineSegments2 extends Mesh {
    geometry: LineSegmentsGeometry;
    material: LineMaterial;

    constructor(geometry?: LineSegmentsGeometry, material?: LineMaterial);
    readonly isLineSegments2: true;

    computeLineDistances(): this;
}
