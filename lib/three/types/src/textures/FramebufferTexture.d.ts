/// <reference lib="DOM" /> 
import { Texture } from './Texture.d.ts';
import { PixelFormat } from '../constants.d.ts';

export class FramebufferTexture extends Texture {
    readonly isFramebufferTexture: true;

    constructor(width: number, height: number, format: PixelFormat);
}
