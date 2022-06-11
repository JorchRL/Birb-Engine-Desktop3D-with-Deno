/// <reference lib="DOM" /> 
import { BoxGeometry } from '../../../src/Three.d.ts';

export class RoundedBoxGeometry extends BoxGeometry {
    constructor(width?: number, height?: number, depth?: number, segments?: number, radius?: number);
}
