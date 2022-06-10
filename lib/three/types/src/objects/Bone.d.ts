import { Object3D } from './../core/Object3D.d.ts';

// Objects //////////////////////////////////////////////////////////////////////////////////

export class Bone extends Object3D {
    constructor();
    readonly isBone: true;
    type: 'Bone';
}
