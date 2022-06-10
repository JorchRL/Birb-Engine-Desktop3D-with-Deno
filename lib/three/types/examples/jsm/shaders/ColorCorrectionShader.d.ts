import { Uniform } from '../../../src/Three.d.ts';

export const ColorCorrectionShader: {
    uniforms: {
        tDiffuse: Uniform;
        powRGB: Uniform;
        mulRGB: Uniform;
        addRGB: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
