import { WebGLRenderTargetOptions, WebGLRenderTarget } from './WebGLRenderTarget.d.ts';
import { WebGLRenderer } from './WebGLRenderer.d.ts';
import { Texture } from './../textures/Texture.d.ts';
import { CubeTexture } from './../textures/CubeTexture.d.ts';

export class WebGLCubeRenderTarget extends WebGLRenderTarget {
    constructor(size: number, options?: WebGLRenderTargetOptions);

    texture: CubeTexture;

    fromEquirectangularTexture(renderer: WebGLRenderer, texture: Texture): this;

    clear(renderer: WebGLRenderer, color: boolean, depth: boolean, stencil: boolean): void;
}
