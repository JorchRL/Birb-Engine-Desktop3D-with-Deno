/// <reference lib="DOM" /> 
import { WebGLCapabilities } from './WebGLCapabilities.d.ts';
import { BufferAttribute } from '../../core/BufferAttribute.d.ts';
import { InterleavedBufferAttribute } from '../../core/InterleavedBufferAttribute.d.ts';

export class WebGLAttributes {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, capabilities: WebGLCapabilities);

    get(attribute: BufferAttribute | InterleavedBufferAttribute): {
        buffer: WebGLBuffer;
        type: number;
        bytesPerElement: number;
        version: number;
    };

    remove(attribute: BufferAttribute | InterleavedBufferAttribute): void;

    update(attribute: BufferAttribute | InterleavedBufferAttribute, bufferType: number): void;
}
