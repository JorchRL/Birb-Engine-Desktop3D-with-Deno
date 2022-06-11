/// <reference lib="DOM" /> 
import { WebGLRenderTarget, ShaderMaterial } from '../../../src/Three.d.ts';

import { Pass } from './Pass.d.ts';

export class AfterimagePass extends Pass {
    constructor(damp?: number);
    shader: object;
    uniforms: object;
    textureComp: WebGLRenderTarget;
    textureOld: WebGLRenderTarget;
    shaderMaterial: ShaderMaterial;
    compFsQuad: object;
    copyFsQuad: object;
}
