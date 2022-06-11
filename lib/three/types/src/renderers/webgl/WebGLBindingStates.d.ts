/// <reference lib="DOM" /> 
import { WebGLExtensions } from './WebGLExtensions.d.ts';
import { WebGLAttributes } from './WebGLAttributes.d.ts';
import { WebGLProgram } from './WebGLProgram.d.ts';
import { WebGLCapabilities } from './WebGLCapabilities.d.ts';
import { Object3D } from './../../core/Object3D.d.ts';
import { BufferGeometry } from './../../core/BufferGeometry.d.ts';
import { BufferAttribute } from './../../core/BufferAttribute.d.ts';
import { Material } from './../../materials/Material.d.ts';

export class WebGLBindingStates {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        attributes: WebGLAttributes,
        capabilities: WebGLCapabilities,
    );

    setup(
        object: Object3D,
        material: Material,
        program: WebGLProgram,
        geometry: BufferGeometry,
        index: BufferAttribute,
    ): void;
    reset(): void;
    resetDefaultState(): void;
    dispose(): void;
    releaseStatesOfGeometry(): void;
    releaseStatesOfProgram(): void;
    initAttributes(): void;
    enableAttribute(attribute: number): void;
    disableUnusedAttributes(): void;
}
