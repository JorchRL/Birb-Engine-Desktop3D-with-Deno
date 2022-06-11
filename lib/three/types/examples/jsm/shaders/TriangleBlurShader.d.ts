/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const TriangleBlurShader: {
    uniforms: {
        texture: Uniform;
        delta: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
