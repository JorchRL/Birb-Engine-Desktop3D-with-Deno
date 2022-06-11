/// <reference lib="DOM" /> 
import { Plane } from './Plane.d.ts';
import { Matrix4 } from './Matrix4.d.ts';
import { Object3D } from './../core/Object3D.d.ts';
import { Sprite } from './../objects/Sprite.d.ts';
import { Sphere } from './Sphere.d.ts';
import { Box3 } from './Box3.d.ts';
import { Vector3 } from './Vector3.d.ts';

/**
 * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
 */
export class Frustum {
    constructor(p0?: Plane, p1?: Plane, p2?: Plane, p3?: Plane, p4?: Plane, p5?: Plane);

    /**
     * Array of 6 vectors.
     */
    planes: Plane[];

    set(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane): Frustum;
    clone(): this;
    copy(frustum: Frustum): this;
    setFromProjectionMatrix(m: Matrix4): this;
    intersectsObject(object: Object3D): boolean;
    intersectsSprite(sprite: Sprite): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsBox(box: Box3): boolean;
    containsPoint(point: Vector3): boolean;
}
