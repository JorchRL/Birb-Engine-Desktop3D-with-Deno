import { Uniform } from '../../../src/Three.d.ts';

export const VignetteShader: {
    uniforms: {
        tDiffuse: Uniform;
        offset: Uniform;
        darkness: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
