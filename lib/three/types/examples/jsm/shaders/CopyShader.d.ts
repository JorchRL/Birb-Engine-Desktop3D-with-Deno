import { Uniform } from '../../../src/Three.d.ts';

export const CopyShader: {
    uniforms: {
        tDiffuse: Uniform;
        opacity: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
