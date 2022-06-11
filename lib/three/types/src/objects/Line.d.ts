/// <reference lib="DOM" /> 
import { Material } from './../materials/Material.d.ts';
import { Raycaster } from './../core/Raycaster.d.ts';
import { Object3D } from './../core/Object3D.d.ts';
import { BufferGeometry } from '../core/BufferGeometry.d.ts';
import { Intersection } from '../core/Raycaster.d.ts';

export class Line<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    constructor(geometry?: TGeometry, material?: TMaterial);

    geometry: TGeometry;
    material: TMaterial;

    type: 'Line' | 'LineLoop' | 'LineSegments' | string;
    readonly isLine: true;

    morphTargetInfluences?: number[] | undefined;
    morphTargetDictionary?: { [key: string]: number } | undefined;

    computeLineDistances(): this;
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    updateMorphTargets(): void;
}
