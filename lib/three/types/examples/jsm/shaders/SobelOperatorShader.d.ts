import { Uniform } from '../../../src/Three.d.ts';

export const SobelOperatorShader: {
    uniforms: {
        tDiffuse: Uniform;
        resolution: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
