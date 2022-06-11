/// <reference lib="DOM" /> 
import { BufferGeometry } from '../../../src/Three.d.ts';

export class SimplifyModifier {
    constructor();
    modify(geometry: BufferGeometry, count: number): BufferGeometry;
}
