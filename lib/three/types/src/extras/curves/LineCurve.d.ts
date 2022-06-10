import { Vector2 } from './../../math/Vector2.d.ts';
import { Curve } from './../core/Curve.d.ts';

export class LineCurve extends Curve<Vector2> {
    constructor(v1: Vector2, v2: Vector2);

    /**
     * @default 'LineCurve'
     */
    type: string;

    /**
     * @default new THREE.Vector2()
     */
    v1: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v2: Vector2;
}
