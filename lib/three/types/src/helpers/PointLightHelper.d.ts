/// <reference lib="DOM" /> 
import { PointLight } from './../lights/PointLight.d.ts';
import { Matrix4 } from './../math/Matrix4.d.ts';
import { Object3D } from './../core/Object3D.d.ts';
import { ColorRepresentation } from '../utils.d.ts';

export class PointLightHelper extends Object3D {
    constructor(light: PointLight, sphereSize?: number, color?: ColorRepresentation);

    /**
     * @default 'PointLightHelper'
     */
    type: string;

    light: PointLight;
    color: ColorRepresentation | undefined;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;

    dispose(): void;
    update(): void;
}
