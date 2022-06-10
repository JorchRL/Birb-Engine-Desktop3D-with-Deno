import { ColorRepresentation } from '../../../src/Three.d.ts';

import { Pass } from './Pass.d.ts';

export class ClearPass extends Pass {
    constructor(clearColor?: ColorRepresentation, clearAlpha?: number);
    clearColor: ColorRepresentation;
    clearAlpha: number;
}
