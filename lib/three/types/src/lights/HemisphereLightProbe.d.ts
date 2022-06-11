/// <reference lib="DOM" /> 
import { ColorRepresentation } from '../utils.d.ts';
import { LightProbe } from './LightProbe.d.ts';

export class HemisphereLightProbe extends LightProbe {
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    readonly isHemisphereLightProbe: true;
}
