/// <reference lib="DOM" /> 
import { ShaderMaterial } from '../../../src/Three.d.ts';

import { Pass } from './Pass.d.ts';

export class ShaderPass extends Pass {
    constructor(shader: object, textureID?: string);
    textureID: string;
    uniforms: { [name: string]: { value: any } };
    material: ShaderMaterial;
    fsQuad: object;
}
