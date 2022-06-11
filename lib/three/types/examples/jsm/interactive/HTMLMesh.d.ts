/// <reference lib="DOM" /> 
import { Mesh } from 'three.d.ts';

export class HTMLMesh extends Mesh {
    constructor(dom: HTMLElement);
    dispose(): void;
}
