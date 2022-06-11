/// <reference lib="DOM" /> 
import { ShaderMaterial } from '../../../src/Three.d.ts';

import { Pass } from './Pass.d.ts';

export class FilmPass extends Pass {
    constructor(noiseIntensity?: number, scanlinesIntensity?: number, scanlinesCount?: number, grayscale?: number);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: object;
}
