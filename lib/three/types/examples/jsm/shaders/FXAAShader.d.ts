/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const FXAAShader: {
    uniforms: {
        tDiffuse: Uniform;
        resolution: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
