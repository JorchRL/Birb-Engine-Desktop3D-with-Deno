/// <reference lib="DOM" /> 
import { DataTexture, Data3DTexture } from '../../../src/Three.d.ts';
import { ShaderPass } from './ShaderPass.d.ts';

export interface LUTPassParameters {
    lut?: DataTexture | Data3DTexture;
    intensity?: number;
}

export class LUTPass extends ShaderPass {
    lut?: DataTexture | Data3DTexture;
    intensity?: number;
    constructor(params: LUTPassParameters);
}
