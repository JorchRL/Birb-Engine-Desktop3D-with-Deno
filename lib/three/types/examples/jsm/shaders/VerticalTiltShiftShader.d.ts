import { Uniform } from '../../../src/Three.d.ts';

export const VerticalTiltShiftShader: {
    uniforms: {
        tDiffuse: Uniform;
        v: Uniform;
        r: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
