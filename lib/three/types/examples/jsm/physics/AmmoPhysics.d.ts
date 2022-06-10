import { Mesh, Vector3 } from '../../../src/Three.d.ts';

export class AmmoPhysics {
    constructor();
    addMesh(mesh: Mesh, mass: number): void;
    setMeshPosition(mesh: Mesh, position: Vector3, index: number): void;
}
