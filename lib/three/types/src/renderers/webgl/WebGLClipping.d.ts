import { Camera } from './../../cameras/Camera.d.ts';
import { Material } from './../../materials/Material.d.ts';
import { WebGLProperties } from './WebGLProperties.d.ts';

export class WebGLClipping {
    constructor(properties: WebGLProperties);

    uniform: { value: any; needsUpdate: boolean };

    /**
     * @default 0
     */
    numPlanes: number;

    /**
     * @default 0
     */
    numIntersection: number;

    init(planes: any[], enableLocalClipping: boolean, camera: Camera): boolean;
    beginShadows(): void;
    endShadows(): void;
    setState(material: Material, camera: Camera, useCache: boolean): void;
}
