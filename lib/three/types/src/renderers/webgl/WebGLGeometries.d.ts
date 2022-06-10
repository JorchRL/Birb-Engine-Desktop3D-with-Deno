import { WebGLAttributes } from './WebGLAttributes.d.ts';
import { WebGLInfo } from './WebGLInfo.d.ts';
import { BufferAttribute } from '../../core/BufferAttribute.d.ts';
import { BufferGeometry } from '../../core/BufferGeometry.d.ts';
import { Object3D } from '../../core/Object3D.d.ts';

export class WebGLGeometries {
    constructor(gl: WebGLRenderingContext, attributes: WebGLAttributes, info: WebGLInfo);

    get(object: Object3D, geometry: BufferGeometry): BufferGeometry;
    update(geometry: BufferGeometry): void;
    getWireframeAttribute(geometry: BufferGeometry): BufferAttribute;
}
