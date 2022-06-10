import { KeyframeTrack } from './../KeyframeTrack.d.ts';
import { InterpolationModes } from '../../constants.d.ts';

export class ColorKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: any[], values: any[], interpolation?: InterpolationModes);

    /**
     * @default 'color'
     */
    ValueTypeName: string;
}
