/// <reference lib="DOM" /> 
import { WebGLCapabilities } from './WebGLCapabilities.d.ts';
import { Scene } from './../../scenes/Scene.d.ts';
import { Camera } from './../../cameras/Camera.d.ts';
import { WebGLRenderer } from '../WebGLRenderer.d.ts';
import { ShadowMapType } from '../../constants.d.ts';
import { WebGLObjects } from './WebGLObjects.d.ts';
import { Light } from '../../lights/Light.d.ts';

export class WebGLShadowMap {
    constructor(_renderer: WebGLRenderer, _objects: WebGLObjects, _capabilities: WebGLCapabilities);

    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default true
     */
    autoUpdate: boolean;

    /**
     * @default false
     */
    needsUpdate: boolean;

    /**
     * @default THREE.PCFShadowMap
     */
    type: ShadowMapType;

    render(shadowsArray: Light[], scene: Scene, camera: Camera): void;

    /**
     * @deprecated Use {@link Material#shadowSide} instead.
     */
    cullFace: any;
}
