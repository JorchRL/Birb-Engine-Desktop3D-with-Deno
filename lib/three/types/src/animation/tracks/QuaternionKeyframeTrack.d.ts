import { KeyframeTrack } from './../KeyframeTrack.d.ts';
import { InterpolationModes } from '../../constants.d.ts';

export class QuaternionKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: any[], values: any[], interpolation?: InterpolationModes);

    /**
     * @default 'quaternion'
     */
    ValueTypeName: string;
}
