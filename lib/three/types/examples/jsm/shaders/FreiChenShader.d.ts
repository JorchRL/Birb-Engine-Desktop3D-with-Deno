/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const FreiChenShader: {
    uniforms: {
        tDiffuse: Uniform;
        aspect: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
