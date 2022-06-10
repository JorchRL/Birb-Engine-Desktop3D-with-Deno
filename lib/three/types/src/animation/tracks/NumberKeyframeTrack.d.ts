import { KeyframeTrack } from './../KeyframeTrack.d.ts';
import { InterpolationModes } from '../../constants.d.ts';

export class NumberKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: any[], values: any[], interpolation?: InterpolationModes);

    /**
     * @default 'number'
     */
    ValueTypeName: string;
}
