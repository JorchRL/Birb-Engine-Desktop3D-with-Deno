/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const LuminosityHighPassShader: {
    shaderID: string;
    uniforms: {
        tDiffuse: Uniform;
        luminosityThreshold: Uniform;
        smoothWidth: Uniform;
        defaultColor: Uniform;
        defaultOpacity: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
