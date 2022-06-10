import { Uniform } from '../../../src/Three.d.ts';

export const RGBShiftShader: {
    uniforms: {
        tDiffuse: Uniform;
        amount: Uniform;
        angle: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
