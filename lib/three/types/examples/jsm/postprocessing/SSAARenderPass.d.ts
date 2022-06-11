/// <reference lib="DOM" /> 
import { Scene, Camera, ColorRepresentation, ShaderMaterial, WebGLRenderTarget } from '../../../src/Three.d.ts';

import { Pass } from './Pass.d.ts';

export class SSAARenderPass extends Pass {
    constructor(scene: Scene, camera: Camera, clearColor?: ColorRepresentation, clearAlpha?: number);
    scene: Scene;
    camera: Camera;
    sampleLevel: number;
    unbiased: boolean;
    clearColor: ColorRepresentation;
    clearAlpha: number;
    copyUniforms: object;
    copyMaterial: ShaderMaterial;
    fsQuad: object;
    sampleRenderTarget: undefined | WebGLRenderTarget;
}
