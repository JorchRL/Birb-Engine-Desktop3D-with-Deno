import { Uniform } from '../../../src/Three.d.ts';

export const TechnicolorShader: {
    uniforms: {
        tDiffuse: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
