import { Uniform } from '../../../src/Three.d.ts';

export const NormalMapShader: {
    uniforms: {
        heightMap: Uniform;
        resolution: Uniform;
        scale: Uniform;
        height: Uniform;
    };
    vertexShader: string;
    fragmentShader: string;
};
