/// <reference lib="DOM" /> 
import { FogBase } from './Fog.d.ts';
import { Material } from './../materials/Material.d.ts';
import { Object3D } from './../core/Object3D.d.ts';
import { Color } from '../math/Color.d.ts';
import { Texture } from '../textures/Texture.d.ts';
import { WebGLRenderer } from '../renderers/WebGLRenderer.d.ts';
import { Camera } from '../cameras/Camera.d.ts';

// Scenes /////////////////////////////////////////////////////////////////////

/**
 * Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
 */
export class Scene extends Object3D {
    constructor();

    type: 'Scene';

    /**
     * A fog instance defining the type of fog that affects everything rendered in the scene. Default is null.
     * @default null
     */
    fog: FogBase | null;

    /**
     * If not null, it will force everything in the scene to be rendered with that material. Default is null.
     * @default null
     */
    overrideMaterial: Material | null;

    /**
     * @default true
     */
    autoUpdate: boolean;

    /**
     * @default null
     */
    background: null | Color | Texture;

    /**
     * @default null
     */
    environment: null | Texture;

    readonly isScene: true;

    toJSON(meta?: any): any;
}
