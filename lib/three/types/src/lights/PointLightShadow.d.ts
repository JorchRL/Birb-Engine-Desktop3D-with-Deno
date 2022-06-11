/// <reference lib="DOM" /> 
import { PerspectiveCamera } from './../cameras/PerspectiveCamera.d.ts';
import { LightShadow } from './LightShadow.d.ts';

export class PointLightShadow extends LightShadow {
    camera: PerspectiveCamera;
}
