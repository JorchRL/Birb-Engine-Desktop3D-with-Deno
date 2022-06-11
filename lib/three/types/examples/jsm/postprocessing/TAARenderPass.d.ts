/// <reference lib="DOM" /> 
import { Scene, Camera, ColorRepresentation } from '../../../src/Three.d.ts';

import { SSAARenderPass } from './SSAARenderPass.d.ts';

export class TAARenderPass extends SSAARenderPass {
    constructor(scene: Scene, camera: Camera, clearColor: ColorRepresentation, clearAlpha: number);
    accumulate: boolean;
}
