/// <reference lib="DOM" /> 
import { ShaderMaterial } from '../../../src/Three.d.ts';

import { Pass } from './Pass.d.ts';

export interface HalftonePassParameters {
    shape?: number;
    radius?: number;
    rotateR?: number;
    rotateB?: number;
    rotateG?: number;
    scatter?: number;
    blending?: number;
    blendingMode?: number;
    greyscale?: boolean;
    disable?: boolean;
}

export class HalftonePass extends Pass {
    constructor(width: number, height: number, params: HalftonePassParameters);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: object;
}
