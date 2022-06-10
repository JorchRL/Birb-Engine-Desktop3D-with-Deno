import { ColorRepresentation, LineSegments } from '../../../src/Three.d.ts';
import { Octree } from '../math/Octree.d.ts';

export class OctreeHelper extends LineSegments {
    constructor(octree: Octree, color: ColorRepresentation);

    octree: Octree;
    color: ColorRepresentation;

    /**
     * @default 'OctreeHelper'
     */
    type: 'OctreeHelper' | string;
}
