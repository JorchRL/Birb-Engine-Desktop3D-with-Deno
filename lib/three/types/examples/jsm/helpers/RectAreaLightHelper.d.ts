import { Line, RectAreaLight, ColorRepresentation } from '../../../src/Three.d.ts';

export class RectAreaLightHelper extends Line {
    constructor(light: RectAreaLight, color?: ColorRepresentation);

    light: RectAreaLight;
    color: ColorRepresentation | undefined;

    dispose(): void;
}
