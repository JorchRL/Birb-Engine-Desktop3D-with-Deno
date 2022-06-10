import { Scene, Camera } from '../../../src/Three.d.ts';

import { Pass } from './Pass.d.ts';

export class MaskPass extends Pass {
    constructor(scene: Scene, camera: Camera);
    scene: Scene;
    camera: Camera;
    inverse: boolean;
}

export class ClearMaskPass extends Pass {
    constructor();
}
