/// <reference lib="DOM" /> 
import { Color } from './../math/Color.d.ts';
import { Vector3 } from '../math/Vector3.d.ts';
import { Object3D } from './../core/Object3D.d.ts';
import { SpotLightShadow } from './SpotLightShadow.d.ts';
import { Light } from './Light.d.ts';
import { ColorRepresentation } from '../utils.d.ts';

/**
 * A point light that can cast shadow in one direction.
 */
export class SpotLight extends Light {
    constructor(
        color?: ColorRepresentation,
        intensity?: number,
        distance?: number,
        angle?: number,
        penumbra?: number,
        decay?: number,
    );

    /**
     * @default 'SpotLight'
     */
    type: string;

    /**
     * @default THREE.Object3D.DefaultUp
     */
    position: Vector3;

    /**
     * Spotlight focus points at target.position.
     * @default new THREE.Object3D()
     */
    target: Object3D;

    /**
     * Light's intensity.
     * @default 1
     */
    intensity: number;

    /**
     * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
     * @default 0
     */
    distance: number;

    /**
     * Maximum extent of the spotlight, in radians, from its direction.
     * @default Math.PI / 3.
     */
    angle: number;

    /**
     * @default 1
     */
    decay: number;

    /**
     * @default new THREE.SpotLightShadow()
     */
    shadow: SpotLightShadow;
    power: number;

    /**
     * @default 0
     */
    penumbra: number;

    readonly isSpotLight: true;
}
