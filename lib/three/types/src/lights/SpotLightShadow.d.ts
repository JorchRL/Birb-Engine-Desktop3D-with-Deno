/// <reference lib="DOM" /> 
import { PerspectiveCamera } from './../cameras/PerspectiveCamera.d.ts';
import { LightShadow } from './LightShadow.d.ts';

export class SpotLightShadow extends LightShadow {
    camera: PerspectiveCamera;
    readonly isSpotLightShadow: true;

    /**
     * @default 1
     */
    focus: number;
}
