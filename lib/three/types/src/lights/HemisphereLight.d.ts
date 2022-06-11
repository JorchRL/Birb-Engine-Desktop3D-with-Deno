/// <reference lib="DOM" /> 
import { Color } from './../math/Color.d.ts';
import { Vector3 } from '../math/Vector3.d.ts';
import { Light } from './Light.d.ts';
import { ColorRepresentation } from '../utils.d.ts';

export class HemisphereLight extends Light {
    /**
     * @param skyColor
     * @param groundColor
     * @param [intensity=1]
     */
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    /**
     * @default 'HemisphereLight'
     */
    type: string;

    /**
     * @default THREE.Object3D.DefaultUp
     */
    position: Vector3;

    groundColor: Color;

    readonly isHemisphereLight: true;
}
