/// <reference lib="DOM" /> 
import { WebGLRenderer } from '../../../src/Three.d.ts';

export interface ARButtonSessionInit extends XRSessionInit {
    domOverlay: { root: HTMLElement };
}

export namespace ARButton {
    function createButton(renderer: WebGLRenderer, sessionInit?: Partial<ARButtonSessionInit>): HTMLElement;
}
