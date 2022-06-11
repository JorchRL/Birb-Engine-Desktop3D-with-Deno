/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const AfterimageShader: {
    uniforms: {
        damp: Uniform;
        tOld: Uniform;
        tNew: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
