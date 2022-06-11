/// <reference lib="DOM" /> 
import { WebGLExtensions } from './WebGLExtensions.d.ts';
import { WebGLState } from './WebGLState.d.ts';
import { WebGLProperties } from './WebGLProperties.d.ts';
import { WebGLCapabilities } from './WebGLCapabilities.d.ts';
import { WebGLUtils } from './WebGLUtils.d.ts';
import { WebGLInfo } from './WebGLInfo.d.ts';

export class WebGLTextures {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        state: WebGLState,
        properties: WebGLProperties,
        capabilities: WebGLCapabilities,
        utils: WebGLUtils,
        info: WebGLInfo,
    );

    allocateTextureUnit(): void;
    resetTextureUnits(): void;
    setTexture2D(texture: any, slot: number): void;
    setTexture2DArray(texture: any, slot: number): void;
    setTexture3D(texture: any, slot: number): void;
    setTextureCube(texture: any, slot: number): void;
    setupRenderTarget(renderTarget: any): void;
    updateRenderTargetMipmap(renderTarget: any): void;
    updateMultisampleRenderTarget(renderTarget: any): void;
    safeSetTexture2D(texture: any, slot: number): void;
    safeSetTextureCube(texture: any, slot: number): void;
}
