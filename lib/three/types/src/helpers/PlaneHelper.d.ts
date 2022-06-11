/// <reference lib="DOM" /> 
import { Plane } from './../math/Plane.d.ts';
import { LineSegments } from './../objects/LineSegments.d.ts';

export class PlaneHelper extends LineSegments {
    /**
     * @param plane
     * @param [size=1]
     * @param [hex=0xffff00]
     */
    constructor(plane: Plane, size?: number, hex?: number);

    /**
     * @default 'PlaneHelper'
     */
    type: string;

    plane: Plane;

    /**
     * @default 1
     */
    size: number;

    updateMatrixWorld(force?: boolean): void;
}
