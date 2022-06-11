/// <reference lib="DOM" /> 
import { Uniform } from '../../../src/Three.d.ts';

export const PixelShader: {
    uniforms: {
        tDiffuse: Uniform;
        resolution: Uniform;
        pixelSize: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
