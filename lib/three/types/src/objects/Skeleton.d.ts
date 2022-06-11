/// <reference lib="DOM" /> 
import { Bone } from './Bone.d.ts';
import { Matrix4 } from './../math/Matrix4.d.ts';
import { DataTexture } from './../textures/DataTexture.d.ts';

export class Skeleton {
    constructor(bones: Bone[], boneInverses?: Matrix4[]);

    uuid: string;
    bones: Bone[];
    boneInverses: Matrix4[];
    boneMatrices: Float32Array;
    boneTexture: null | DataTexture;
    boneTextureSize: number;
    frame: number;

    init(): void;
    calculateInverses(): void;
    computeBoneTexture(): this;
    pose(): void;
    update(): void;
    clone(): Skeleton;
    getBoneByName(name: string): undefined | Bone;
    dispose(): void;

    /**
     * @deprecated This property has been removed completely.
     */
    useVertexTexture: boolean;
}
