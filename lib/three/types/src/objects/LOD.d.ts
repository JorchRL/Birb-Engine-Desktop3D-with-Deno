import { Object3D } from './../core/Object3D.d.ts';
import { Raycaster } from './../core/Raycaster.d.ts';
import { Camera } from './../cameras/Camera.d.ts';
import { Intersection } from '../core/Raycaster.d.ts';

export class LOD extends Object3D {
    constructor();

    type: 'LOD';

    levels: Array<{ distance: number; object: Object3D }>;
    autoUpdate: boolean;
    readonly isLOD: true;

    addLevel(object: Object3D, distance?: number): this;
    getCurrentLevel(): number;
    getObjectForDistance(distance: number): Object3D | null;
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    update(camera: Camera): void;
    toJSON(meta: any): any;

    /**
     * @deprecated Use {@link LOD#levels .levels} instead.
     */
    objects: any[];
}
