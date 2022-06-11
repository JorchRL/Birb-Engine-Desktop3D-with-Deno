/// <reference lib="DOM" /> 
import { Line } from '../../../src/Three.d.ts';

import { LineSegmentsGeometry } from './LineSegmentsGeometry.d.ts';

export class LineGeometry extends LineSegmentsGeometry {
    constructor();
    readonly isLineGeometry: true;

    fromLine(line: Line): this;
}
