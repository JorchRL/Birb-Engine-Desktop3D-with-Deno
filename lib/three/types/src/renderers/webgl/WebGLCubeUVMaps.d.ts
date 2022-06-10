import { WebGLRenderer, Texture } from '../../Three.d.ts';

export class WebGLCubeUVMaps {
    constructor(renderer: WebGLRenderer);

    get<T>(texture: T): T extends Texture ? Texture : T;
    dispose(): void;
}
