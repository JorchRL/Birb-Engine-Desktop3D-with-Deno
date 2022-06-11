/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const SepiaShader: {
    uniforms: {
        tDiffuse: Uniform;
        amount: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
