import { Mesh, Plane, Vector4 } from '../../../src/Three.d.ts';

export class ShadowMesh extends Mesh {
    constructor();

    update(plane: Plane, lightPosition4D: Vector4): void;
}
