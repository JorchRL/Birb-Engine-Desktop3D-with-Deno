import { SphericalHarmonics3 } from './../math/SphericalHarmonics3.d.ts';
import { Light } from './Light.d.ts';

export class LightProbe extends Light {
    constructor(sh?: SphericalHarmonics3, intensity?: number);

    /**
     * @default 'LightProbe'
     */
    type: string;

    readonly isLightProbe: true;

    /**
     * @default new THREE.SphericalHarmonics3()
     */
    sh: SphericalHarmonics3;

    fromJSON(json: object): LightProbe;
}
