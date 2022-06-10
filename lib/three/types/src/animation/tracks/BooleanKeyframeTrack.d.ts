import { KeyframeTrack } from './../KeyframeTrack.d.ts';

export class BooleanKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: any[], values: any[]);

    /**
     * @default 'bool'
     */
    ValueTypeName: string;
}
