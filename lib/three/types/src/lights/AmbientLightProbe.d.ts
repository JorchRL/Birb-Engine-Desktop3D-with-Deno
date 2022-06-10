import { ColorRepresentation } from '../utils.d.ts';
import { LightProbe } from './LightProbe.d.ts';

export class AmbientLightProbe extends LightProbe {
    constructor(color?: ColorRepresentation, intensity?: number);

    readonly isAmbientLightProbe: true;
}
