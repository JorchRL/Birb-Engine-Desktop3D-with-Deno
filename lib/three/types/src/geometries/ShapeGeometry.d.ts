/// <reference lib="DOM" /> 
import { Shape } from './../extras/core/Shape.d.ts';
import { BufferGeometry } from './../core/BufferGeometry.d.ts';

export class ShapeGeometry extends BufferGeometry {
    /**
     * @default 'ShapShapeGeometryeBufferGeometry'
     */
    type: string;

    constructor(shapes?: Shape | Shape[], curveSegments?: number);

    static fromJSON(data: any): ShapeGeometry;
}

export { ShapeGeometry as ShapeBufferGeometry };
