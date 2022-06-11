/// <reference lib="DOM" /> 
// Renderers / WebGL /////////////////////////////////////////////////////////////////////
import { WebGLExtensions } from './WebGLExtensions.d.ts';
import { WebGLInfo } from './WebGLInfo.d.ts';
import { WebGLCapabilities } from './WebGLCapabilities.d.ts';

export class WebGLBufferRenderer {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        info: WebGLInfo,
        capabilities: WebGLCapabilities,
    );

    setMode(value: any): void;
    render(start: any, count: number): void;
    renderInstances(start: any, count: number, primcount: number): void;
}
