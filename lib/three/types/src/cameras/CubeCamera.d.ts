import { WebGLCubeRenderTarget } from './../renderers/WebGLCubeRenderTarget.d.ts';
import { Scene } from './../scenes/Scene.d.ts';
import { WebGLRenderer } from './../renderers/WebGLRenderer.d.ts';
import { Object3D } from './../core/Object3D.d.ts';

export class CubeCamera extends Object3D {
    constructor(near: number, far: number, renderTarget: WebGLCubeRenderTarget);

    type: 'CubeCamera';

    renderTarget: WebGLCubeRenderTarget;

    update(renderer: WebGLRenderer, scene: Scene): void;
}
