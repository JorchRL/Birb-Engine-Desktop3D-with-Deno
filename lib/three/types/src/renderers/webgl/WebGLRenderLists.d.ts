import { Object3D } from './../../core/Object3D.d.ts';
import { Material } from './../../materials/Material.d.ts';
import { WebGLProgram } from './WebGLProgram.d.ts';
import { Group } from './../../objects/Group.d.ts';
import { Scene } from './../../scenes/Scene.d.ts';
import { Camera } from './../../cameras/Camera.d.ts';
import { BufferGeometry } from '../../core/BufferGeometry.d.ts';
import { WebGLProperties } from './WebGLProperties.d.ts';

export interface RenderItem {
    id: number;
    object: Object3D;
    geometry: BufferGeometry | null;
    material: Material;
    program: WebGLProgram;
    groupOrder: number;
    renderOrder: number;
    z: number;
    group: Group | null;
}

export class WebGLRenderList {
    constructor(properties: WebGLProperties);

    /**
     * @default []
     */
    opaque: RenderItem[];

    /**
     * @default []
     */
    transparent: RenderItem[];

    /**
     * @default []
     */
    transmissive: RenderItem[];

    init(): void;
    push(
        object: Object3D,
        geometry: BufferGeometry | null,
        material: Material,
        groupOrder: number,
        z: number,
        group: Group | null,
    ): void;
    unshift(
        object: Object3D,
        geometry: BufferGeometry | null,
        material: Material,
        groupOrder: number,
        z: number,
        group: Group | null,
    ): void;
    sort(opaqueSort: (a: any, b: any) => number, transparentSort: (a: any, b: any) => number): void;
    finish(): void;
}

export class WebGLRenderLists {
    constructor(properties: WebGLProperties);

    dispose(): void;
    get(scene: Scene, renderCallDepth: number): WebGLRenderList;
}
