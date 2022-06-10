import { WebGLRenderer } from '../WebGLRenderer.d.ts';

export class WebGLCubeMaps {
    constructor(renderer: WebGLRenderer);

    get(texture: any): any;
    dispose(): void;
}
