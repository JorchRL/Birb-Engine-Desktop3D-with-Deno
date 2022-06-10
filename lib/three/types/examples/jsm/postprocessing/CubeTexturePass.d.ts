import { PerspectiveCamera, CubeTexture, Mesh, Scene } from '../../../src/Three.d.ts';

import { Pass } from './Pass.d.ts';

export class CubeTexturePass extends Pass {
    constructor(camera: PerspectiveCamera, envMap?: CubeTexture, opacity?: number);
    camera: PerspectiveCamera;
    cubeShader: object;
    cubeMesh: Mesh;
    envMap: CubeTexture;
    opacity: number;
    cubeScene: Scene;
    cubeCamera: PerspectiveCamera;
}
