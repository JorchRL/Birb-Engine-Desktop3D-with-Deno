import { Uniform } from '../../../src/Three.d.ts';

export const LuminosityShader: {
    uniforms: {
        tDiffuse: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
