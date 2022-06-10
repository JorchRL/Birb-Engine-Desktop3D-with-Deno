import { LineGeometry } from './LineGeometry.d.ts';
import { LineSegments2 } from './LineSegments2.d.ts';
import { LineMaterial } from './LineMaterial.d.ts';

export class Line2 extends LineSegments2 {
    geometry: LineGeometry;
    material: LineMaterial;

    constructor(geometry?: LineGeometry, material?: LineMaterial);
    readonly isLine2: true;
}
