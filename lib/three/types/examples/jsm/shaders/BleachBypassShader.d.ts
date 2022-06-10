import { Uniform } from '../../../src/Three.d.ts';

export const BleachBypassShader: {
    uniforms: {
        tDiffuse: Uniform;
        opacity: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
