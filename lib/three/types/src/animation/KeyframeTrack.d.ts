import { DiscreteInterpolant } from './../math/interpolants/DiscreteInterpolant.d.ts';
import { LinearInterpolant } from './../math/interpolants/LinearInterpolant.d.ts';
import { CubicInterpolant } from './../math/interpolants/CubicInterpolant.d.ts';
import { InterpolationModes } from '../constants.d.ts';

export class KeyframeTrack {
    /**
     * @param name
     * @param times
     * @param values
     * @param [interpolation=THREE.InterpolateLinear]
     */
    constructor(name: string, times: ArrayLike<any>, values: ArrayLike<any>, interpolation?: InterpolationModes);

    name: string;
    times: Float32Array;
    values: Float32Array;

    ValueTypeName: string;
    TimeBufferType: Float32Array;
    ValueBufferType: Float32Array;

    /**
     * @default THREE.InterpolateLinear
     */
    DefaultInterpolation: InterpolationModes;

    InterpolantFactoryMethodDiscrete(result: any): DiscreteInterpolant;
    InterpolantFactoryMethodLinear(result: any): LinearInterpolant;
    InterpolantFactoryMethodSmooth(result: any): CubicInterpolant;

    setInterpolation(interpolation: InterpolationModes): KeyframeTrack;
    getInterpolation(): InterpolationModes;

    getValueSize(): number;

    shift(timeOffset: number): KeyframeTrack;
    scale(timeScale: number): KeyframeTrack;
    trim(startTime: number, endTime: number): KeyframeTrack;
    validate(): boolean;
    optimize(): KeyframeTrack;
    clone(): this;

    static toJSON(track: KeyframeTrack): any;
}
