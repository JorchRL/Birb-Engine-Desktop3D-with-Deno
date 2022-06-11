/// <reference lib="DOM" /> 
import { WebGLCapabilities } from './WebGLCapabilities.d.ts';

export class WebGLExtensions {
    constructor(gl: WebGLRenderingContext);

    has(name: string): boolean;
    init(capabilities: WebGLCapabilities): void;
    get(name: string): any;
}
