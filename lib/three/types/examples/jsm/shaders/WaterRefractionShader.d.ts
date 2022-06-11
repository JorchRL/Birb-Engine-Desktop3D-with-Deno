/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const WaterRefractionShader: {
    uniforms: {
        color: Uniform;
        time: Uniform;
        tDiffuse: Uniform;
        tDudv: Uniform;
        textureMatrix: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
