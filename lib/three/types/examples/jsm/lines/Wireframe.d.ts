import { Mesh } from '../../../src/Three.d.ts';

import { LineMaterial } from './LineMaterial.d.ts';
import { LineSegmentsGeometry } from './LineSegmentsGeometry.d.ts';

export class Wireframe extends Mesh {
    constructor(geometry?: LineSegmentsGeometry, material?: LineMaterial);
    readonly isWireframe: true;

    computeLineDistances(): this;
}
