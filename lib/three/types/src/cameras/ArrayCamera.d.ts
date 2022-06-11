/// <reference lib="DOM" /> 
import { PerspectiveCamera } from './PerspectiveCamera.d.ts';

export class ArrayCamera extends PerspectiveCamera {
    constructor(cameras?: PerspectiveCamera[]);

    /**
     * @default []
     */
    cameras: PerspectiveCamera[];
    readonly isArrayCamera: true;
}
