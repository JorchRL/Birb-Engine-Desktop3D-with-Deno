import { DirectionalLight } from './../lights/DirectionalLight.d.ts';
import { Line } from './../objects/Line.d.ts';
import { Matrix4 } from './../math/Matrix4.d.ts';
import { Object3D } from './../core/Object3D.d.ts';
import { ColorRepresentation } from '../utils.d.ts';

export class DirectionalLightHelper extends Object3D {
    /**
     * @param light
     * @param [size=1]
     * @param color
     */
    constructor(light: DirectionalLight, size?: number, color?: ColorRepresentation);

    light: DirectionalLight;
    lightPlane: Line;
    targetLine: Line;

    /**
     * @default undefined
     */
    color: ColorRepresentation | undefined;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;

    dispose(): void;
    update(): void;
}
