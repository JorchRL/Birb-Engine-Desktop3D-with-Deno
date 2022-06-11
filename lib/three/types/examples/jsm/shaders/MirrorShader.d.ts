/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const MirrorShader: {
    uniforms: {
        tDiffuse: Uniform;
        side: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
