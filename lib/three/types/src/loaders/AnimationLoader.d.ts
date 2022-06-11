/// <reference lib="DOM" /> 
import { LoadingManager } from './LoadingManager.d.ts';
import { Loader } from './Loader.d.ts';
import { AnimationClip } from './../animation/AnimationClip.d.ts';

export class AnimationLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (response: AnimationClip[]) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<AnimationClip[]>;
    parse(json: any): AnimationClip[];
}
