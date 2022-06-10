import { Group, Texture } from '../../../src/Three.d.ts';

import { XRHandModel, XRHandModelHandedness } from './XRHandModelFactory.d.ts';

export interface XRHandPrimitiveModelOptions {
    primitive?: 'sphere' | 'box' | undefined;
}

export class XRHandPrimitiveModel {
    controller: Group;
    handModel: XRHandModel;
    envMap: Texture | null;
    handMesh: Group;

    constructor(
        handModel: XRHandModel,
        controller: Group,
        path: string,
        handedness: XRHandModelHandedness,
        options: XRHandPrimitiveModelOptions,
    );

    updateMesh: () => void;
}
