/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const VerticalBlurShader: {
    uniforms: {
        tDiffuse: Uniform;
        v: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
