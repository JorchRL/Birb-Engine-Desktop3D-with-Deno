/// <reference lib="DOM" /> 

import { Loader } from './Loader.d.ts';
import { LoadingManager } from './LoadingManager.d.ts';
import { Object3D } from './../core/Object3D.d.ts';
import { Texture } from './../textures/Texture.d.ts';
import { Material } from './../materials/Material.d.ts';
import { AnimationClip } from './../animation/AnimationClip.d.ts';
import { InstancedBufferGeometry } from '../core/InstancedBufferGeometry.d.ts';
import { BufferGeometry } from '../core/BufferGeometry.d.ts';

export class ObjectLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        // tslint:disable-next-line:no-unnecessary-generics
        onLoad?: <ObjectType extends Object3D>(object: ObjectType) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: Error | ErrorEvent) => void,
    ): void;
    loadAsync<ObjectType extends Object3D>(
        url: string,
        onProgress?: (event: ProgressEvent) => void,
    ): // tslint:disable-next-line:no-unnecessary-generics
    Promise<ObjectType>;
    // tslint:disable-next-line:no-unnecessary-generics
    parse<T extends Object3D>(json: any, onLoad?: (object: Object3D) => void): T;
    // tslint:disable-next-line:no-unnecessary-generics
    parseAsync<T extends Object3D>(json: any): Promise<T>;
    parseGeometries(json: any): { [key: string]: InstancedBufferGeometry | BufferGeometry }; // Array of BufferGeometry or Geometry or Geometry2.
    parseMaterials(json: any, textures: Texture[]): Material[]; // Array of Classes that inherits from Matrial.
    parseAnimations(json: any): AnimationClip[];
    parseImages(json: any, onLoad: () => void): { [key: string]: HTMLImageElement };
    parseImagesAsync(json: any): Promise<{ [key: string]: HTMLImageElement }>;
    parseTextures(json: any, images: any): Texture[];
    parseObject<T extends Object3D>(
        data: any,
        geometries: any[],
        materials: Material[],
        animations: AnimationClip[],
    ): // tslint:disable-next-line:no-unnecessary-generics
    T;
}
