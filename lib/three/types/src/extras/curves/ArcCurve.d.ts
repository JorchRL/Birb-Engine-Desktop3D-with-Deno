/// <reference lib="DOM" /> 
import { EllipseCurve } from './EllipseCurve.d.ts';
export class ArcCurve extends EllipseCurve {
    constructor(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean);

    /**
     * @default 'ArcCurve'
     */
    type: string;
}
