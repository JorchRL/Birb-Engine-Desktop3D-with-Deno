import { Light } from './Light.d.ts';
import { ColorRepresentation } from '../utils.d.ts';

export class RectAreaLight extends Light {
    constructor(color?: ColorRepresentation, intensity?: number, width?: number, height?: number);

    /**
     * @default 'RectAreaLight'
     */
    type: string;

    /**
     * @default 10
     */
    width: number;

    /**
     * @default 10
     */
    height: number;

    /**
     * @default 1
     */
    intensity: number;

    power: number;

    readonly isRectAreaLight: true;
}
