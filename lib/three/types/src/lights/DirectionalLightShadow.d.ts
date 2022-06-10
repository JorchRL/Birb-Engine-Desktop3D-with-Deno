import { OrthographicCamera } from './../cameras/OrthographicCamera.d.ts';
import { LightShadow } from './LightShadow.d.ts';

export class DirectionalLightShadow extends LightShadow {
    camera: OrthographicCamera;
    readonly isDirectionalLightShadow: true;
}
