/// <reference lib="DOM" /> 
import { HemisphereLight } from './../lights/HemisphereLight.d.ts';
import { Color } from './../math/Color.d.ts';
import { Matrix4 } from './../math/Matrix4.d.ts';
import { MeshBasicMaterial } from './../materials/MeshBasicMaterial.d.ts';
import { Object3D } from './../core/Object3D.d.ts';
import { ColorRepresentation } from '../utils.d.ts';

export class HemisphereLightHelper extends Object3D {
    constructor(light: HemisphereLight, size: number, color?: ColorRepresentation);

    light: HemisphereLight;
    matrix: Matrix4;
    matrixAutoUpdate: boolean;
    material: MeshBasicMaterial;

    color: ColorRepresentation | undefined;

    dispose(): void;
    update(): void;
}
