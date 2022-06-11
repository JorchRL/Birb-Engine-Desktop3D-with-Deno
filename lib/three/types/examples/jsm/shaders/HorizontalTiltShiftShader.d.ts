/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const HorizontalTiltShiftShader: {
    uniforms: {
        tDiffuse: Uniform;
        h: Uniform;
        r: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
