import { Color } from '../math/Color.d.ts';
import { LineSegments } from './../objects/LineSegments.d.ts';

export class AxesHelper extends LineSegments {
    /**
     * @param [size=1]
     */
    constructor(size?: number);

    /**
     * @default 'AxesHelper'
     */
    type: string;

    setColors(xAxisColor: Color, yAxisColor: Color, zAxisColor: Color): this;

    dispose(): void;
}
