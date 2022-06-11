/// <reference lib="DOM" /> 
import { Vector2 } from './../math/Vector2.d.ts';
import { Raycaster } from './../core/Raycaster.d.ts';
import { Object3D } from './../core/Object3D.d.ts';
import { Intersection } from '../core/Raycaster.d.ts';
import { SpriteMaterial } from '../materials/Materials.d.ts';
import { BufferGeometry } from '../core/BufferGeometry.d.ts';

export class Sprite extends Object3D {
    constructor(material?: SpriteMaterial);

    type: 'Sprite';
    readonly isSprite: true;

    geometry: BufferGeometry;
    material: SpriteMaterial;
    center: Vector2;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    copy(source: this): this;
}
