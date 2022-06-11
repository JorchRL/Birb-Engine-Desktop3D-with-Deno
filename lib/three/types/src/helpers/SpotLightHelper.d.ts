/// <reference lib="DOM" /> 
import { Light } from './../lights/Light.d.ts';
import { Matrix4 } from './../math/Matrix4.d.ts';
import { Object3D } from './../core/Object3D.d.ts';
import { LineSegments } from '../objects/LineSegments.d.ts';
import { ColorRepresentation } from '../utils.d.ts';

export class SpotLightHelper extends Object3D {
    constructor(light: Light, color?: ColorRepresentation);

    light: Light;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;
    color: ColorRepresentation | undefined;
    cone: LineSegments;

    dispose(): void;
    update(): void;
}
