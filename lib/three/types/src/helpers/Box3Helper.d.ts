/// <reference lib="DOM" /> 
import { Box3 } from './../math/Box3.d.ts';
import { Color } from './../math/Color.d.ts';
import { LineSegments } from './../objects/LineSegments.d.ts';

export class Box3Helper extends LineSegments {
    /**
     * @param box
     * @param [color=0xffff00]
     */
    constructor(box: Box3, color?: Color);

    /**
     * @default 'Box3Helper'
     */
    type: string;

    box: Box3;
}
