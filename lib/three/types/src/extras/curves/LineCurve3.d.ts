/// <reference lib="DOM" /> 
import { Vector3 } from './../../math/Vector3.d.ts';
import { Curve } from './../core/Curve.d.ts';

export class LineCurve3 extends Curve<Vector3> {
    constructor(v1: Vector3, v2: Vector3);

    /**
     * @default 'LineCurve3'
     */
    type: string;

    /**
     * @default new THREE.Vector3()
     */
    v1: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v2: Vector3;
}
