import { Uniform } from '../../../src/Three.d.ts';

export const HorizontalBlurShader: {
    uniforms: {
        tDiffuse: Uniform;
        h: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
