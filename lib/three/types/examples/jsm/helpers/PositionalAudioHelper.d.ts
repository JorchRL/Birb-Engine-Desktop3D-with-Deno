/// <reference lib="DOM" /> 
import { Line, PositionalAudio } from '../../../src/Three.d.ts';

export class PositionalAudioHelper extends Line {
    constructor(audio: PositionalAudio, range?: number, divisionsInnerAngle?: number, divisionsOuterAngle?: number);

    audio: PositionalAudio;
    range: number;
    divisionsInnerAngle: number;
    divisionsOuterAngle: number;

    dispose(): void;
    update(): void;
}
