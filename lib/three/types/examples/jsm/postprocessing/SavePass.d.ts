import { ShaderMaterial, WebGLRenderTarget } from '../../../src/Three.d.ts';

import { Pass } from './Pass.d.ts';

export class SavePass extends Pass {
    constructor(renderTarget?: WebGLRenderTarget);
    textureID: string;
    renderTarget: WebGLRenderTarget;
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: object;
}
