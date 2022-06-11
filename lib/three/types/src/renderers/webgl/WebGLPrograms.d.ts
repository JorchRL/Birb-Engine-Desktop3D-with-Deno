/// <reference lib="DOM" /> 
import { WebGLRenderer } from './../WebGLRenderer.d.ts';
import { WebGLProgram } from './WebGLProgram.d.ts';
import { WebGLCapabilities } from './WebGLCapabilities.d.ts';
import { WebGLCubeMaps } from './WebGLCubeMaps.d.ts';
import { WebGLExtensions } from './WebGLExtensions.d.ts';
import { WebGLClipping } from './WebGLClipping.d.ts';
import { WebGLBindingStates } from './WebGLBindingStates.d.ts';
import { Material } from './../../materials/Material.d.ts';
import { Scene } from './../../scenes/Scene.d.ts';

export class WebGLPrograms {
    constructor(
        renderer: WebGLRenderer,
        cubemaps: WebGLCubeMaps,
        extensions: WebGLExtensions,
        capabilities: WebGLCapabilities,
        bindingStates: WebGLBindingStates,
        clipping: WebGLClipping,
    );

    programs: WebGLProgram[];

    getParameters(material: Material, lights: any, shadows: object[], scene: Scene, object: any): any;
    getProgramCacheKey(parameters: any): string;
    getUniforms(material: Material): object;
    acquireProgram(parameters: any, cacheKey: string): WebGLProgram;
    releaseProgram(program: WebGLProgram): void;
}
