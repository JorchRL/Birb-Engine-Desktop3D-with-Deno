/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const KaleidoShader: {
    uniforms: {
        tDiffuse: Uniform;
        sides: Uniform;
        angle: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
