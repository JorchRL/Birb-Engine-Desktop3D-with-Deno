import { Uniform } from '../../../src/Three.d.ts';

export const ColorifyShader: {
    uniforms: {
        tDiffuse: Uniform;
        color: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
