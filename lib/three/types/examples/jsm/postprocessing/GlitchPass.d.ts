/// <reference lib="DOM" /> 
import { ShaderMaterial, DataTexture } from '../../../src/Three.d.ts';

import { Pass } from './Pass.d.ts';

export class GlitchPass extends Pass {
    constructor(dt_size?: number);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: object;
    goWild: boolean;
    curF: number;
    randX: number;

    generateTrigger(): void;
    generateHeightmap(dt_size: number): DataTexture;
}
