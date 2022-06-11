/// <reference lib="DOM" /> 
import { Material } from './../materials/Material.d.ts';
import { Raycaster } from './../core/Raycaster.d.ts';
import { Object3D } from './../core/Object3D.d.ts';
import { BufferGeometry } from '../core/BufferGeometry.d.ts';
import { Intersection } from '../core/Raycaster.d.ts';

/**
 * A class for displaying points. The points are rendered by the WebGLRenderer using gl.POINTS.
 */
export class Points<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    /**
     * @param geometry An instance of BufferGeometry.
     * @param material An instance of Material (optional).
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    type: 'Points';
    morphTargetInfluences?: number[] | undefined;
    morphTargetDictionary?: { [key: string]: number } | undefined;
    readonly isPoints: true;

    /**
     * An instance of BufferGeometry, where each vertex designates the position of a particle in the system.
     */
    geometry: TGeometry;

    /**
     * An instance of Material, defining the object's appearance. Default is a PointsMaterial with randomised colour.
     */
    material: TMaterial;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    updateMorphTargets(): void;
}
