/// <reference lib="DOM" /> 
import { Camera } from './../cameras/Camera.d.ts';
import { LineSegments } from './../objects/LineSegments.d.ts';

export class CameraHelper extends LineSegments {
    constructor(camera: Camera);

    camera: Camera;
    pointMap: { [id: string]: number[] };

    /**
     * @default 'CameraHelper'
     */
    type: string;

    update(): void;

    dispose(): void;
}
