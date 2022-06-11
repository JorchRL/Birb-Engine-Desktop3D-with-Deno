/// <reference lib="DOM" /> 
import { BufferGeometry } from '../core/BufferGeometry.d.ts';
import { Material } from './../materials/Material.d.ts';
import { BufferAttribute } from './../core/BufferAttribute.d.ts';
import { InstancedBufferAttribute } from '../core/InstancedBufferAttribute.d.ts';
import { Mesh } from './Mesh.d.ts';
import { Matrix4 } from './../math/Matrix4.d.ts';
import { Color } from './../math/Color.d.ts';

export class InstancedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Mesh<TGeometry, TMaterial> {
    constructor(geometry: TGeometry | undefined, material: TMaterial | undefined, count: number);

    count: number;
    instanceColor: null | InstancedBufferAttribute;
    instanceMatrix: InstancedBufferAttribute;
    readonly isInstancedMesh: true;

    getColorAt(index: number, color: Color): void;
    getMatrixAt(index: number, matrix: Matrix4): void;
    setColorAt(index: number, color: Color): void;
    setMatrixAt(index: number, matrix: Matrix4): void;
    dispose(): void;
}
